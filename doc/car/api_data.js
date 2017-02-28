define({ "api": [  {    "type": "post",    "url": "api/user/changePwd",    "title": "用户修改密码 -用户和管理员管理员用",    "name": "user_changePwd",    "group": "user",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "oldPassword",            "description": "<ul> <li>旧密码（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "newPassword",            "description": "<ul> <li>新密码（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "token",            "description": "<ul> <li>用户凭证（必须）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 ok\n{\n\t\"callStatus\": \"SUCCEED\",\n\t\"errorCode\": \"No_Error\",\n\t\"data\": null,\n\t\"token\": null,\n\t\"numberPerPage\": 0,\n\t\"currentPage\": 0,\n\t\"totalNumber\": 0,\n\t\"totalPage\": 0\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"FAILED\",\n\t\t\"errorCode\": \"Error\",//Null_Input_Error新密码为空，Error旧密码不正确或者token错误\n \t\t\"data\": null,\n \t\t\"token\": null,\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "Car/src/com/car/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "get",    "url": "api/user/details",    "title": "获取个人详情 -用户用",    "name": "user_details",    "group": "user",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "token",            "description": "<ul> <li>用户凭证（必须）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 ok\n{\n\t\"callStatus\": \"SUCCEED\",\n\t\"errorCode\": \"No_Error\",\n\t\"data\": {\n\t\t\"id\": 1,\n\t\t\"userName\": \"1253024\",\n\t\t\"password\": \"null\",\n\t\t\"name\": \"潘瑞峰\",\n\t\t\"state\": 2,\n\t\t\"email\": \"123@qq.com\",\n\t\t\"registerDate\": 1488279855000,\n\t\t\"schoolYear\": \"2014\",\n\t\t\"type\": 1\n\t},\n\t\"token\": null,\n\t\"numberPerPage\": 0,\n\t\"currentPage\": 0,\n\t\"totalNumber\": 0,\n\t\"totalPage\": 0\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"FAILED\",\n\t\t\"errorCode\": \"Error\",\n \t\t\"data\": null,\n \t\t\"token\": null,\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "Car/src/com/car/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "get",    "url": "api/user/getUserDetails",    "title": "获取其他用户详情 -管理员用",    "name": "user_getUserDetails",    "group": "user",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "long",            "optional": false,            "field": "userId",            "description": "<ul> <li>用户id（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "token",            "description": "<ul> <li>用户凭证（必须）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 ok\n{\n\t\"callStatus\": \"SUCCEED\",\n\t\"errorCode\": \"No_Error\",\n\t\"data\": {\n\t\t\"id\": 1,\n\t\t\"userName\": \"1253024\",\n\t\t\"password\": \"null\",\n\t\t\"name\": \"潘瑞峰\",\n\t\t\"state\": 2,\n\t\t\"email\": \"123@qq.com\",\n\t\t\"registerDate\": 1488279855000,\n\t\t\"schoolYear\": \"2014\",\n\t\t\"type\": 1\n\t},\n\t\"token\": null,\n\t\"numberPerPage\": 0,\n\t\"currentPage\": 0,\n\t\"totalNumber\": 0,\n\t\"totalPage\": 0\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"FAILED\",\n\t\t\"errorCode\": \"Error\",\n \t\t\"data\": null,\n \t\t\"token\": null,\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "Car/src/com/car/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "get",    "url": "api/user/getUserList",    "title": "获取用户列表 -管理员用",    "name": "user_getUserList",    "group": "user",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "int",            "optional": false,            "field": "state",            "description": "<ul> <li>筛选参数，用户状态0-未通过，1-通过，2-正在审核（可选）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "schoolYear",            "description": "<ul> <li>学籍 类似2016（可选）</li> </ul>"          },          {            "group": "Parameter",            "type": "int",            "optional": false,            "field": "numberPerPage",            "description": "<ul> <li>分页大小 （可选）</li> </ul>"          },          {            "group": "Parameter",            "type": "int",            "optional": false,            "field": "currentPage",            "description": "<ul> <li>当前页（可选，不分页的话，取出所有的数据）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>*（必须）</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"SUCCEED\",\n\t\t\"errorCode\": \"No_Error\",\n\t\t\"data\": [\n\t\t\t{\n \t\t\t\"id\": 1,\n \t\t\t\"userName\": \"1253024\",\n\t\t\t\"password\": null,\n \t\t\t\"name\": \"潘瑞峰\",\n \t\t\t\"state\": 2,\n \t\t\t\"email\": \"123@qq.com\",\n \t\t\t\"registerDate\": 1488279855000,\n\t \t\t\"schoolYear\": \"2014\",\n \t\t\t\"type\": 1 //user-1,admin-0\n\t\t\t},\n\t\t\t{\n \t\t\t\"id\": 2,\n \t\t\t\"userName\": \"12530241\",\n \t\t\t\"password\": null,\n \t\t\t\"name\": \"潘瑞峰\",\n \t\t\t\"state\": 2,\n \t\t\t\"email\": \"123@qq.com\",\n \t\t\t\"registerDate\": 1488279875000,\n \t\t\t\"schoolYear\": \"2014\",\n \t\t\t\"type\": 1\n\t\t\t}\n\t\t],\n\t\t\"token\": null,\n\t\t\"numberPerPage\": -1,\n\t\t\"currentPage\": -1,\n\t\t\"totalNumber\": 2,\n\t\t\"totalPage\": -2\n\t\t}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"FAILED\",\n\t\t\"errorCode\": \"Error\",\n \t\t\"data\": null,\n \t\t\"token\": null,\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "Car/src/com/car/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "post",    "url": "api/user/login",    "title": "登录 -用户，管理员用",    "name": "user_login",    "group": "user",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "userName",            "description": "<ul> <li>用户名（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<ul> <li>密码（必须）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"SUCCEED\",\n\t\t\"errorCode\": \"No_Error\",\n \t\t\"data\": null,\n \t\t\"token\": \"SK1d7a4fe3-c2cd-417f-8f6f-bf7412592996\",\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"FAILED\",\n\t\t\"errorCode\": \"Error\",//还有User_To_Be_Passed和User_UnPassed分别对应正在审核和审核没通过的用户，Error是用户名或密码错误\n \t\t\"data\": null,\n \t\t\"token\": null,\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "Car/src/com/car/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "post",    "url": "api/user/register",    "title": "注册 -用户用",    "name": "user_regist",    "group": "user",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "userName",            "description": "<ul> <li>学号（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<ul> <li>密码（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<ul> <li>姓名（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<ul> <li>邮箱（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "schoolYear",            "description": "<ul> <li>学籍（必须）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"SUCCEED\",\n \t\t\"errorCode\": \"No_Error\",\n \t\t\"data\": null,\n \t\t\"token\": null,\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": \"Error\",//还有Null_Input_Error，Email_Format_Error\n \t\t\"data\": null,\n \t\t\"token\": null,\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "Car/src/com/car/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "post",    "url": "api/user/update",    "title": "用户修改个人信息 -用户用",    "name": "user_update",    "group": "user",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<ul> <li>用户名（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<ul> <li>邮箱（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "schoolYear",            "description": "<ul> <li>学籍（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "token",            "description": "<ul> <li>用户凭证（必须）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 ok\n{\n\t\"callStatus\": \"SUCCEED\",\n\t\"errorCode\": \"No_Error\",\n\t\"data\": null,\n\t\"token\": null,\n\t\"numberPerPage\": 0,\n\t\"currentPage\": 0,\n\t\"totalNumber\": 0,\n\t\"totalPage\": 0\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"FAILED\",\n\t\t\"errorCode\": \"Error\",//还有Null_Input_Error和Email_Format_Error\n \t\t\"data\": null,\n \t\t\"token\": null,\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "Car/src/com/car/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "post",    "url": "api/user/verify",    "title": "审核注册的用户 -管理员用",    "name": "user_verify",    "group": "user",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "long",            "optional": false,            "field": "userId",            "description": "<ul> <li>用户id（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "int",            "optional": false,            "field": "state",            "description": "<ul> <li>用户状态0-未通过，1-通过，2-正在审核（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "token",            "description": "<ul> <li>用户凭证（必须）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 ok\n{\n\t\"callStatus\": \"SUCCEED\",\n\t\"errorCode\": \"No_Error\",\n\t\"data\": null,\n\t\"token\": null,\n\t\"numberPerPage\": 0,\n\t\"currentPage\": 0,\n\t\"totalNumber\": 0,\n\t\"totalPage\": 0\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"FAILED\",\n\t\t\"errorCode\": \"Error\",\n \t\t\"data\": null,\n \t\t\"token\": null,\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "Car/src/com/car/controller/UserController.java",    "groupTitle": "user"  }] });
