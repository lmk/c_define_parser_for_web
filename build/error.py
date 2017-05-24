#!/usr/bin/python
#from __future__ import print_function
import re, sys, json

val = 0
title = ''

def print_error(msg):
    result = {'category': 'ERROR', 'code': val, 'title': title, 'result': msg}
    print(json.dumps(result, ensure_ascii=False))
    sys.exit()

def print_normal(lst):
    result = {'category': 'INFO', 'code': val, 'title': title, 'result': lst}
    print((json.dumps(result, ensure_ascii=False)))
    sys.exit()

def read_in():
    #return json.loads('{"code":"1","title":"MAS 2.0 Error-Code","files":["build/mas21/error/error.h","build/nsearch/error/NITGEN_NFS_ERROR.h","build/bsp/error/NBioAPI_Error.h"]}')
    #return json.loads('{"code":"1","title":"Secure Error-Code","files":["build/secure27/error/error.h","build/bsp/error/NBioAPI_Error.h","build/secure27/protocol/protocol.h"]}')
    #return json.loads('{"code":"1","title":"openssl ","files":["build/openssl/err.h"]}')
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

def remove_comment(s):
    s = re.sub('\/\/.*[\r\n]', '', s)  # remove line comment
    s = re.sub('\/\*.*\*\/', '', s)    # remove part comment
    return s.strip()

def change_name_to_value(v):
    if type(v) is int:
        return v
    regx = re.compile('[\w_]+')
    list_candi = regx.findall(v)
    if len(list_candi) > 1:
        for candi in list_candi:
            changed_value = change_name_to_value(candi)
            v = v.replace(candi, str(changed_value))
        return eval(v)
    if not v in dic_command:
        try:
            num=eval(v)
        except:
            num=0
        return num
    return change_name_to_value(dic_command[v])

# 1. read param
args = read_in()

# 2. check code
try:
    title = args['title']
    val = eval(args['code'])
except:
    print_error ('invalid code')

context = ''

# 3. open files
try:
    for fn in args['files']:
        f = open(fn)
        context = context + '\n' + f.read()
        f.close()
except:
    print_error("file open fail "+ fn)

# 4. parsing enum
dic_command = {}

try:
    regx = re.compile('\s*enum[_\w\s]*{([^\}]*)\}')
    for enum_group in regx.findall(context):
        enum_value = 0
        for enum_item in enum_group.split(','):
            enum_item = remove_comment(enum_item)
            v_pos = enum_item.find('=')
            if v_pos == -1:
                enum_key = enum_item.strip()
                enum_value = enum_value + '+ 1'
            else:
                enum_key = enum_item[:v_pos-1].strip()
                enum_value = enum_item[v_pos+1:].strip()

            if enum_key:
                dic_command[enum_key] = str(enum_value)
except:
    print_error ("file enum parsing fail")

# 5. parsing '#define name value'
try:
    regx = re.compile('^[ \t]*\#[\s]*define[ \t]+([\w_]+)[ \t]+([^\n\r\f\v//]+)', re.MULTILINE)
    define_pair = regx.findall(context)
    for k, v in define_pair:
        dic_command[k] = str(v)
except:
    print_error ("file define parsing fail")

# 6. key to value
for k, v in dic_command.iteritems():
    dic_command[k] = change_name_to_value(v)

# 7. reverse (key, value) to (value, key)
dic_command_r = {}
for k, v in dic_command.iteritems():
    if not v in dic_command_r:
        dic_command_r[v] = [k]
    else:
        dic_command_r[v].append(k)

# 8. find value
if not val in dic_command_r:
    print_error ('undefined code')
else:
    print_normal (dic_command_r[val])
