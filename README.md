# Code Finder

## install
```bash
git clone https://github.com/lmk/c_define_parser_for_web.git
cd c_define_parser_for_web
npm install
npm run build
```

## run
```bash
npm run start
```

 * open chrome
 * http://localhost:3000/


## how to use my header file

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
  * not support Internet Explorer
