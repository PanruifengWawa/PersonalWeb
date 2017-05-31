define({ "api": [  {    "type": "get",    "url": "api/qiniu/getQiNiuToken",    "title": "获取七牛uptoken",    "name": "qiniu_getQiNiuToken",    "group": "qiniu",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>身份凭证</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"SUCCEED\",\n \t\t\"errorCode\": \"成功\",\n \t\t\"data\": \"2EkHs4sPHlelB-JYR5WuDp3jp9spsqyxIkluejva:7qWjUWr2RZTC71Xv3_tUwGWfh_E=:eyJzY29wZSI6ImN5Z2ZpbGUiLCJkZWFkbGluZSI6MTQ5MDg5NDE1NX0=\",\n \t\t\"token\": null,\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": \"权限不足\",\n \t\t\"data\": \"用户未登录\",\n \t\t\"token\": null,\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/Advertisement/src/main/java/com/advertisement/controller/QiNiuController.java",    "groupTitle": "qiniu"  },  {    "type": "get",    "url": "api/user/admin/getUserDetails",    "title": "管理员查看用户详情",    "name": "user_admin_getUserDetails",    "group": "user",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>身份凭证（只接受管理员身份凭证）</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Long",            "optional": false,            "field": "userId",            "description": "<ul> <li>用户id (必须)</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 ok\n{\n\t\"callStatus\": \"SUCCEED\",\n\t\"errorCode\": \"成功\",\n\t\"data\": {\n\t\t\"id\": 3,\n\t\t\"userName\": \"dapan\",\n\t\t\"password\": null,\n\t\t\"realName\": \"大潘\",\n\t\t\"allName\": \"大潘有限公司\",\n\t\t\"parentId\": null,\n\t\t\"type\": 1,\n\t\t\"logo\": null,\n\t\t\"industryId\": null,\n\t\t\"intro\": \"简介\",\n\t\t\"content\": null,\n\t\t\"phone\": \"13761463756\",\n\t\t\"registerTime\": 1495780507050\n\t},\n\t\"token\": null,\n\t\"numberPerPage\": 0,\n\t\"currentPage\": 0,\n\t\"totalNumber\": 0,\n\t\"totalPage\": 0\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": \"权限不足\",\n \t\t\"data\": \"用户未登录\",\n \t\t\"token\": null,\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/Advertisement/src/main/java/com/advertisement/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "get",    "url": "api/user/admin/getUserList",    "title": "管理员查看用户列表",    "name": "user_admin_getUserList",    "group": "user",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>身份凭证（只接受管理员身份凭证）</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "int",            "optional": false,            "field": "type",            "description": "<ul> <li>类型: 管理员-0,有设备商铺-1,无设备商铺-2,子账号-3 (非必须)</li> </ul>"          },          {            "group": "Parameter",            "type": "int",            "optional": false,            "field": "numberPerPage",            "description": "<ul> <li>每页大小（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "int",            "optional": false,            "field": "currentPage",            "description": "<ul> <li>当前页（非必须）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 ok\n{\n\t\"callStatus\": \"SUCCEED\",\n\t\"errorCode\": \"成功\",\n\t\"data\": [{\n\t\t\"id\": 3,\n\t\t\"userName\": \"dapan\",\n\t\t\"password\": null,\n\t\t\"realName\": \"大潘\",\n\t\t\"allName\": \"大潘有限公司\",\n\t\t\"parentId\": null,\n\t\t\"type\": 1,\n\t\t\"logo\": null,\n\t\t\"industryId\": null,\n\t\t\"intro\": \"简介\",\n\t\t\"content\": null,\n\t\t\"phone\": \"13761463756\",\n\t\t\"registerTime\": 1495780507050\n\t}],\n\t\"token\": null,\n\t\"numberPerPage\": 1,\n\t\"currentPage\": 1,\n\t\"totalNumber\": 4,\n\t\"totalPage\": 4\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": \"权限不足\",\n \t\t\"data\": \"用户未登录\",\n \t\t\"token\": null,\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/Advertisement/src/main/java/com/advertisement/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "post",    "url": "api/user/changePWD",    "title": "修改密码",    "name": "user_changePWD",    "group": "user",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>身份凭证</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "oldPWD",            "description": "<ul> <li>旧密码（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "newPWD",            "description": "<ul> <li>新密码（必须）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 ok\n{\n\t\"callStatus\": \"SUCCEED\",\n\t\"errorCode\": \"成功\",\n\t\"data\": null,\n\t\"token\": null,\n\t\"numberPerPage\": 0,\n\t\"currentPage\": 0,\n\t\"totalNumber\": 0,\n\t\"totalPage\": 0\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": \"权限不足\",\n \t\t\"data\": \"用户未登录\",\n \t\t\"token\": null,\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/Advertisement/src/main/java/com/advertisement/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "post",    "url": "api/user/changeType",    "title": "设置商铺类型",    "name": "user_changeType",    "group": "user",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>身份凭证（只接受商铺身份凭证）</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Integer",            "optional": false,            "field": "type",            "description": "<ul> <li>修改的目标商铺类型（必须,只接受有设备商铺-1,无设备商铺-2）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 ok\n{\n\t\"callStatus\": \"SUCCEED\",\n\t\"errorCode\": \"成功\",\n\t\"data\": null,\n\t\"token\": null,\n\t\"numberPerPage\": 0,\n\t\"currentPage\": 0,\n\t\"totalNumber\": 0,\n\t\"totalPage\": 0\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": \"权限不足\",\n \t\t\"data\": \"用户未登录\",\n \t\t\"token\": null,\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/Advertisement/src/main/java/com/advertisement/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "post",    "url": "api/user/createChildAccount",    "title": "商铺添加子账户",    "name": "user_createChildAccount",    "group": "user",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>身份凭证（商铺）</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "userName",            "description": "<ul> <li>用户名（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<ul> <li>密码（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "realName",            "description": "<ul> <li>姓名（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "allName",            "description": "<ul> <li>全称（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "logo",            "description": "<ul> <li>logo（非必须,这里是logo在七牛云上面的路径）</li> </ul>"          },          {            "group": "Parameter",            "type": "Integer",            "optional": false,            "field": "industryId",            "description": "<ul> <li>行业编号（非必须,由前端对每个行业进行编号）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "intro",            "description": "<ul> <li>简介（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "content",            "description": "<ul> <li>需求内容（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "phone",            "description": "<ul> <li>手机号（非必须）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 ok\n{\n\t\"callStatus\": \"SUCCEED\",\n\t\"errorCode\": \"成功\",\n\t\"data\": {\n\t\t\"id\": 10,\n\t\t\"userName\": \"dapan\",\n\t\t\"password\": null,\n\t\t\"realName\": \"大潘\",\n\t\t\"allName\": \"大潘有限公司\",\n\t\t\"parentId\": null,\n\t\t\"type\": 1,\n\t\t\"logo\": null,\n\t\t\"industryId\": null,\n\t\t\"intro\": \"简介\",\n\t\t\"content\": null,\n\t\t\"phone\": \"13761463756\",\n\t\t\"registerTime\": 1495780507050\n\t},\n\t\"token\": null,\n\t\"numberPerPage\": 0,\n\t\"currentPage\": 0,\n\t\"totalNumber\": 0,\n\t\"totalPage\": 0\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": \"参数错误\",\n \t\t\"data\": \"用户名已存在\",\n \t\t\"token\": null,\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/Advertisement/src/main/java/com/advertisement/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "get",    "url": "api/user/getUserDetails",    "title": "获取用户详情",    "name": "user_getUserDetails",    "group": "user",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>身份凭证</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 ok\n{\n\t\"callStatus\": \"SUCCEED\",\n\t\"errorCode\": \"成功\",\n\t\"data\": {\n\t\t\"id\": 3,\n\t\t\"userName\": \"dapan\",\n\t\t\"password\": null,\n\t\t\"realName\": \"大潘\",\n\t\t\"allName\": \"大潘有限公司\",\n\t\t\"parentId\": null,\n\t\t\"type\": 1,\n\t\t\"logo\": null,\n\t\t\"industryId\": null,\n\t\t\"intro\": \"简介\",\n\t\t\"content\": null,\n\t\t\"phone\": \"13761463756\",\n\t\t\"registerTime\": 1495780507050\n\t},\n\t\"token\": null,\n\t\"numberPerPage\": 0,\n\t\"currentPage\": 0,\n\t\"totalNumber\": 0,\n\t\"totalPage\": 0\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": \"权限不足\",\n \t\t\"data\": \"用户未登录\",\n \t\t\"token\": null,\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/Advertisement/src/main/java/com/advertisement/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "post",    "url": "api/user/login",    "title": "用户登录",    "name": "user_login",    "group": "user",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "userName",            "description": "<ul> <li>用户名（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<ul> <li>密码（必须）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 ok\n{\n\t\"callStatus\": \"SUCCEED\",\n\t\"errorCode\": \"成功\",\n\t\"data\": {\n\t\t\"id\": 3,\n\t\t\"userName\": \"dapan\",\n\t\t\"password\": null,\n\t\t\"realName\": \"大潘\",\n\t\t\"allName\": \"大潘有限公司\",\n\t\t\"parentId\": null,\n\t\t\"type\": 1,\n\t\t\"logo\": null,\n\t\t\"industryId\": null,\n\t\t\"intro\": \"简介\",\n\t\t\"content\": null,\n\t\t\"phone\": \"13761463756\",\n\t\t\"registerTime\": 1495780507050\n\t},\n\t\"token\": \"SK49ce4215-dd9c-49c8-92d9-71bac76a7e6f\",\n\t\"numberPerPage\": 0,\n\t\"currentPage\": 0,\n\t\"totalNumber\": 0,\n\t\"totalPage\": 0\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": \"权限不足\",\n \t\t\"data\": \"用户名或密码错误\",\n \t\t\"token\": null,\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/Advertisement/src/main/java/com/advertisement/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "post",    "url": "api/user/register",    "title": "商铺注册",    "name": "user_register",    "group": "user",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "userName",            "description": "<ul> <li>用户名（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<ul> <li>密码（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "realName",            "description": "<ul> <li>姓名（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "allName",            "description": "<ul> <li>全称（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "type",            "description": "<ul> <li>类型: 管理员-0,有设备商铺-1,无设备商铺-2,子账号-3（必须,这个接口是商铺注册,所以type只接受1和2）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "logo",            "description": "<ul> <li>logo（非必须,这里是logo在七牛云上面的路径）</li> </ul>"          },          {            "group": "Parameter",            "type": "Integer",            "optional": false,            "field": "industryId",            "description": "<ul> <li>行业编号（非必须,由前端对每个行业进行编号）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "intro",            "description": "<ul> <li>简介（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "content",            "description": "<ul> <li>需求内容（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "phone",            "description": "<ul> <li>手机号（非必须）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 ok\n{\n\t\"callStatus\": \"SUCCEED\",\n\t\"errorCode\": \"成功\",\n\t\"data\": {\n\t\t\"id\": 3,\n\t\t\"userName\": \"dapan\",\n\t\t\"password\": null,\n\t\t\"realName\": \"大潘\",\n\t\t\"allName\": \"大潘有限公司\",\n\t\t\"parentId\": null,\n\t\t\"type\": 1,\n\t\t\"logo\": null,\n\t\t\"industryId\": null,\n\t\t\"intro\": \"简介\",\n\t\t\"content\": null,\n\t\t\"phone\": \"13761463756\",\n\t\t\"registerTime\": 1495780507050\n\t},\n\t\"token\": null,\n\t\"numberPerPage\": 0,\n\t\"currentPage\": 0,\n\t\"totalNumber\": 0,\n\t\"totalPage\": 0\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": \"参数错误\",\n \t\t\"data\": \"用户名已存在\",\n \t\t\"token\": null,\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/Advertisement/src/main/java/com/advertisement/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "post",    "url": "api/user/update",    "title": "更新用户信息",    "name": "user_update",    "group": "user",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>身份凭证</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "realName",            "description": "<ul> <li>店铺名称（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "allName",            "description": "<ul> <li>全程（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "logo",            "description": "<ul> <li>logo（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "Long",            "optional": false,            "field": "industryId",            "description": "<ul> <li>行业id（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "intro",            "description": "<ul> <li>简介（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "content",            "description": "<ul> <li>需求内容（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "phone",            "description": "<ul> <li>手机号（非必须）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 ok\n{\n\t\"callStatus\": \"SUCCEED\",\n\t\"errorCode\": \"成功\",\n\t\"data\": {\n\t\t\"id\": 3,\n\t\t\"userName\": \"dapan\",\n\t\t\"password\": null,\n\t\t\"realName\": \"大潘\",\n\t\t\"allName\": \"大潘有限公司\",\n\t\t\"parentId\": null,\n\t\t\"type\": 1,\n\t\t\"logo\": null,\n\t\t\"industryId\": null,\n\t\t\"intro\": \"简介\",\n\t\t\"content\": null,\n\t\t\"phone\": \"13761463756\",\n\t\t\"registerTime\": 1495780507050\n\t},\n\t\"token\": null,\n\t\"numberPerPage\": 0,\n\t\"currentPage\": 0,\n\t\"totalNumber\": 0,\n\t\"totalPage\": 0\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": \"权限不足\",\n \t\t\"data\": \"用户未登录\",\n \t\t\"token\": null,\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/Advertisement/src/main/java/com/advertisement/controller/UserController.java",    "groupTitle": "user"  }] });
