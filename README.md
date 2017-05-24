# Code Finder

## What is this?
 * C / C ++ parses the enum or defined constant name in the header file.
 * C/C++ 해더 파일에 enum 또는 define 되어 있는 상수명을 파싱해서 검색해줍니다.
 * ReactJS를 스터디 하기 위해 시작했습니다.
 * C/C++ 해더 파서는 https://github.com/lmk/c_define_parser 를 사용 했습니다.

## Install
```bash
git clone https://github.com/lmk/c_define_parser_for_web.git
cd c_define_parser_for_web
npm install
npm run build
```

## Run
```bash
npm run start
```

 * open chrome
 * http://localhost:3000/


## How to use my header file

  * modify /build/config.json

```json
{
  "list": [
    {
      "id" : "5RAcQeaaF4XYtVaAwg4Gtqf2C4xbpU7v",
      "title": "Sample Project",
      "files": [
        "sample-project/error.h",
        "sample-project/type.h"
      ],
      "option": {
        "checked": true
      }
    },
    {
      "id" : "FCg4h39RBah2hL99n6w4MYmLsd0nTslf",
      "title": "openssl",
      "files": [
        "openssl/err.h"
      ]
    }
  ]
}

```
  * "id": Unique ID
  * "title": Proejct Title
  * "files": List of header files to parse

## Restriction
  * support Edge
  * support Chrome
  * support Internet Explorer (used [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch))
  * node v6.0 higher
  * python 2.7
