define({ "api": [
  {
    "type": "get",
    "url": "api/hospital/{id}/calendar/{year}/{month}",
    "title": "获取医院日历",
    "name": "calendar-list",
    "group": "hospital",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份凭证</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<ul> <li>医院id (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "year",
            "description": "<ul> <li>年份 (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "month",
            "description": "<ul> <li>月份 (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"date\": \"2021-05-01\",\n            \"year\": 2021,\n            \"month\": 5,\n            \"capacity\": 10, // 该医院在2021-05-01的容量\n            \"hospitalId\": 1\n        }\n    ]\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthEorror\",\n\t\t\"data\": \"错误信息\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/tijian/src/main/java/com/tijian/user/controller/HospitalController.java",
    "groupTitle": "hospital"
  },
  {
    "type": "get",
    "url": "api/hospital/{id}/examination",
    "title": "获取医院体检套餐",
    "name": "examination-list",
    "group": "hospital",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份凭证</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<ul> <li>医院id (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"name\": \"套餐A\",\n            \"description\": \"<h1>test</h1>\", // 套餐对应的富文本\n            \"hospitalId\": 1\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthEorror\",\n\t\t\"data\": \"错误信息\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/tijian/src/main/java/com/tijian/user/controller/HospitalController.java",
    "groupTitle": "hospital"
  },
  {
    "type": "get",
    "url": "api/hospital",
    "title": "获取医院列表",
    "name": "hospital-list",
    "group": "hospital",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份凭证</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"name\": \"测试医院\",\n            \"capacity\": 0, // 医院的默认容量，如果医院的日历中的某一天，没有配置容量，则用该值\n            \"description\": \"测试简介\"\n        }\n    ]\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthEorror\",\n\t\t\"data\": \"错误信息\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/tijian/src/main/java/com/tijian/user/controller/HospitalController.java",
    "groupTitle": "hospital"
  },
  {
    "type": "get",
    "url": "api/reservation/{year}/open",
    "title": "检查某年是否已开启预约",
    "name": "reservation-open",
    "group": "reservation",
    "description": "<p>检查某年是否已开启预约, 用于前端决定用户是否可以进入预约系统</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份凭证</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "year",
            "description": "<ul> <li>年份 (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthEorror\",\n\t\t\"data\": \"错误信息\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/tijian/src/main/java/com/tijian/user/controller/ReservationController.java",
    "groupTitle": "reservation"
  },
  {
    "type": "post",
    "url": "api/user/login",
    "title": "用户登录",
    "name": "user-login",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<ul> <li>用户授权后的code (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n{\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": {\n        \"userId\": \"id\",\n        \"name\": \"name\",\n        \"token\": \"122\",\n        \"loginDate\": \"2021-04-19 01:02:00\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthEorror\",\n\t\t\"data\": \"错误信息\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/tijian/src/main/java/com/tijian/user/controller/UserController.java",
    "groupTitle": "user"
  }
] });
