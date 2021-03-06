define({ "api": [
  {
    "type": "get",
    "url": "/showFriendRequest",
    "title": "to get all the friend request for the token holder",
    "version": "0.0.1",
    "group": "friend_management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter) from here the userId will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"status\": 200,\n    \"message\": \"loading friend requests\",\n    \"data\": [\n        {\n            \"requestSent\": Boolean,\n            \"requestTime\": Date,\n            \"requestaccepted\": Boolean,\n            \"userId\": String,\n            \"requestedPersonID\": String,\n            \"requestedPersonName\": String\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured. custom message of the reason of error(Ex.no friend requests to show)\",\n\t    \"status\": 404,\n\t    \"data\": null\n       }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured. custom message of the reason of error\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "friend_management",
    "name": "GetShowfriendrequest"
  },
  {
    "type": "get",
    "url": "/showfriends",
    "title": "to get all the friends",
    "version": "0.0.1",
    "group": "friend_management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter) from here the userId will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"status\": 200,\n    \"message\": \"loading friends\",\n    \"data\": [\n        {\n            \"requestSent\": Boolean,\n            \"requestTime\": Date,\n            \"requestaccepted\": Boolean,\n            \"userId\": String,\n            \"requestedPersonID\": String,\n            \"requestedPersonName\": String\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured. custom message of the reason of error\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "friend_management",
    "name": "GetShowfriends"
  },
  {
    "type": "get",
    "url": "/showrequestsentstatus",
    "title": "to get all the request sent data created by the token holder",
    "version": "0.0.1",
    "group": "friend_management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter) from here the userId will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"status\": 200,\n    \"message\": \"loading request status\",\n    \"data\": [\n        {\n            \"requestSent\": Boolean,\n            \"requestTime\": Date,\n            \"requestaccepted\": Boolean,\n            \"userId\": String,\n            \"requestedPersonID\": String,\n            \"requestedPersonName\": String\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured. custom message of the reason of error\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"no users found to show status\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "friend_management",
    "name": "GetShowrequestsentstatus"
  },
  {
    "type": "get",
    "url": "/showUsers",
    "title": "to get all the registered users",
    "version": "0.0.1",
    "group": "friend_management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter) from here the userId will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"status\": 200,\n    \"message\": \"users found\",\n    \"data\": [\n        {\n            \"userId\": String,\n            \"firstName\": String,\n            \"lastName\": String,\n            \"email\": String,\n            \"countryCode\": Number,\n            \"countryName\": String,\n            \"countryId\": String\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured. custom message of the reason of error\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"no users found to display\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "friend_management",
    "name": "GetShowusers"
  },
  {
    "type": "post",
    "url": "/acceptrequest",
    "title": "to accept received friend request sent to the token holder",
    "version": "0.0.1",
    "group": "friend_management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter) from here the userId will be fetched</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestedPersonID",
            "description": "<p>userId of the person by whom the request is sent.(Send authToken as query parameter) from here the userId will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"status\": 200,\n    \"message\": \"friend request accepted successfully\",\n    \"data\": {\n        \"requestSent\": Boolean,\n        \"requestTime\": Date,\n        \"requestaccepted\": Boolean,\n        \"userId\": String,\n        \"requestedPersonID\": String,\n        \"requestedPersonName\": String\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured. custom message of the reason of error\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "friend_management",
    "name": "PostAcceptrequest"
  },
  {
    "type": "post",
    "url": "/cancelsentrequest",
    "title": "to cancel friend request sent by the token holder",
    "version": "0.0.1",
    "group": "friend_management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter) from here the userId will be fetched</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestedPersonID",
            "description": "<p>userId of the person to whom the token holder sent the request.(Send authToken as query parameter) from here the userId will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"status\": 200,\n    \"message\": \"friend request cancelled successfully\",\n    \"data\": {\n        \"requestSent\": Boolean,\n        \"requestTime\": Date,\n        \"requestaccepted\": Boolean,\n        \"userId\": String,\n        \"requestedPersonID\": String,\n        \"requestedPersonName\": String\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured. custom message of the reason of error\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "friend_management",
    "name": "PostCancelsentrequest"
  },
  {
    "type": "post",
    "url": "/sendfriendrequest",
    "title": "to send friend request by the token holder",
    "version": "0.0.1",
    "group": "friend_management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter) from here the userId will be fetched</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestedPersonID",
            "description": "<p>userId of the person to whom the token holder send request.(Send authToken as query parameter) from here the userId will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"status\": 200,\n    \"message\": \"friend request sent successfully\",\n    \"data\": {\n        \"requestSent\": Boolean,\n        \"requestTime\": Date,\n        \"requestaccepted\": Boolean,\n        \"userId\": String,\n        \"requestedPersonID\": String,\n        \"requestedPersonName\": String\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured. custom message of the reason of error\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "friend_management",
    "name": "PostSendfriendrequest"
  },
  {
    "type": "post",
    "url": "/unfriend",
    "title": "to unfriend the friend by the token holder",
    "version": "0.0.1",
    "group": "friend_management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter) from here the userId will be fetched</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestedPersonID",
            "description": "<p>userId of the person to unfriend.(Send authToken as query parameter) from here the userId will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"status\": 200,\n    \"message\": \"unfriend success\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured. custom message of the reason of error\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "friend_management",
    "name": "PostUnfriend"
  },
  {
    "type": "post",
    "url": "/changestatus",
    "title": "changestatus of list/listitem as done or todo",
    "version": "0.0.1",
    "group": "list_management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user id of which this list/listitem belongs to it is optional if not provided considered as created by the user whose token is provided.(passed as a body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>itemId of the node(list/listitem) (passed as a body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemStatus",
            "description": "<p>status of item to set(content of the created list/listitem)as check_box or check_box_outline_blank.(passed as a body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldStatus",
            "description": "<p>current status of the created list/listitem. as check_box or check_box_outline_blank(passed as a body parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"status\": 200,\n    \"message\": \"item status changed successfully\",\n    \"data\": {\n        \"itemStatus\": String,\n        \"status\": Boolean,\n        \"userId\": String,\n        \"parentId\": String,\n        \"itemName\": String,\n        \"doneById\": String,\n        \"doerFullName\": String,\n        \"itemId\": String,\n        \"creationDate\": Date\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured. custom message of the reason of error,\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"item not found to change status\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "list_management",
    "name": "PostChangestatus"
  },
  {
    "type": "post",
    "url": "/create",
    "title": "create list/listitem",
    "version": "0.0.1",
    "group": "list_management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user id of which this list/listitem belongs to it is optional if not provided considered as created by the user whose token is provided.(passed as a body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parentId",
            "description": "<p>parent node id.(passed as a body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemName",
            "description": "<p>name of item(content of the created list/listitem).(passed as a body parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"status\": 200,\n    \"message\": \"item created successfully\",\n    \"data\": {\n        \"itemStatus\": string,\n        \"status\": Boolean,\n        \"userId\": String,\n        \"parentId\": String,\n        \"itemName\": String,\n        \"doneById\": String,\n        \"doerFullName\": String,\n        \"itemId\": String,\n        \"creationDate\": Date\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured. custom message of the reason of error,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "list_management",
    "name": "PostCreate"
  },
  {
    "type": "post",
    "url": "/delete",
    "title": "delete list/listitem",
    "version": "0.0.1",
    "group": "list_management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user id of which this list/listitem belongs to it is optional if not provided considered as created by the user whose token is provided.(passed as a body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>node id.(passed as a body parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"status\": 200,\n    \"message\": \"item deleted successfully\",\n    \"data\": {\n        \"itemStatus\": String,\n        \"status\": Boolean,\n        \"userId\": String,\n        \"parentId\": String,\n        \"itemName\": String,\n        \"doneById\": String,\n        \"doerFullName\": String,\n        \"itemId\": String,\n        \"creationDate\": Date\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured. custom message of the reason of error,\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"item not found to delete\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "list_management",
    "name": "PostDelete"
  },
  {
    "type": "post",
    "url": "/show",
    "title": "show all list/listitem",
    "version": "0.0.1",
    "group": "list_management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user id of which this list/listitem belongs to it is optional if not provided considered as created by the user whose token is provided.(passed as a body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parentId",
            "description": "<p>parent node id.(passed as a body parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"status\": 200,\n    \"message\": \"list found\",\n    \"data\": [\n        {\n            \"itemStatus\": String,\n            \"status\": Boolean,\n            \"userId\": String,\n            \"parentId\": String,\n            \"itemName\": String,\n            \"doneById\": String,\n            \"doerFullName\": String,\n            \"itemId\": String,\n            \"creationDate\": Date\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "\n{\n\t    \"error\": false,\n\t    \"message\": \"no list items found create one,\n\t    \"status\": 404,\n\t    \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured. custom message of the reason of error,\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "list_management",
    "name": "PostShow"
  },
  {
    "type": "post",
    "url": "/undo",
    "title": "undo the last operation",
    "version": "0.0.1",
    "group": "list_management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user id of which this list/listitem belongs to it is optional if not provided considered as created by the user whose token is provided.(passed as a body parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"status\": 200,\n    \"message\": \"undo success\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured. custom message of the reason of error,\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"no log history found to undo further\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "list_management",
    "name": "PostUndo"
  },
  {
    "type": "post",
    "url": "/update",
    "title": "update list/listitem",
    "version": "0.0.1",
    "group": "list_management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user id of which this list/listitem belongs to it is optional if not provided considered as created by the user whose token is provided.(passed as a body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>itemId of the node(list/listitem) (passed as a body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemName",
            "description": "<p>name of item to set(content of the created list/listitem).(passed as a body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldData",
            "description": "<p>current content of the created list/listitem.(passed as a body parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"status\": 200,\n    \"message\": \"item updated successfully\",\n    \"data\": {\n        \"itemStatus\": String,\n        \"status\": Boolean,\n        \"userId\": String,\n        \"parentId\": String,\n        \"itemName\": String,\n        \"doneById\": String,\n        \"doerFullName\": String,\n        \"itemId\": String,\n        \"creationDate\": Date\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured. custom message of the reason of error,\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"item not found to update\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "list_management",
    "name": "PostUpdate"
  },
  {
    "type": "post",
    "url": "/forget",
    "title": "to get the code on email to reset password",
    "version": "0.0.1",
    "group": "user_management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of registered user.(Send as body parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"status\": 200,\n    \"message\": \"code to reset password generated successfully\",\n    \"data\": {\n        \"used\": Boolean,\n        \"userId\": String,\n        \"email\": String,\n        \"resetCode\": String,\n        \"created\": Date\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured. custom message of the reason of error (Ex. error generating link),\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"email not found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "user_management",
    "name": "PostForget"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "login the user",
    "version": "0.0.1",
    "group": "user_management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of registered user.(Send as body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of registered user.(passed as a body parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"status\": 200,\n    \"message\": \"user verified\",\n    \"data\": {\n        \"token\": String,\n        \"userId\": String,\n        \"firstName\": String\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured. custom message of the reason of error (Ex. password match error),\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"email id not found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "user_management",
    "name": "PostLogin"
  },
  {
    "type": "post",
    "url": "/reset",
    "title": "to change password using the code sent on email",
    "version": "0.0.1",
    "group": "user_management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of registered user.(Send as body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resetCode",
            "description": "<p>code sent on email of registered user.(Send as body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>new password to set.(Send as body parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"status\": 200,\n    \"message\": \"password changed successfully\",\n    \"data\": {\n        \"userId\": String,\n        \"firstName\": String,\n        \"lastName\": String,\n        \"email\": String,\n        \"countryCode\": String,\n        \"countryName\": String,\n        \"countryId\": String\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured. custom message of the reason of error (Ex. error code already used),\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"resetCode not found or incorrect\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "user_management",
    "name": "PostReset"
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "signup new user",
    "version": "0.0.1",
    "group": "user_management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of user.(Send as body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password to set.(Send as body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of user.(Send as body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of user.(Send as body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile",
            "description": "<p>mobile number of the user.(Send as body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode of user.(Ex.91)(Send as body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryName",
            "description": "<p>countryName of user.(Send as body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryId",
            "description": "<p>countryId of user.(Ex.In)(Send as body parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"status\": 200,\n    \"message\": \"user registered successfully\",\n    \"data\": {\n        \"userId\": String,\n        \"firstName\": String,\n        \"lastName\": String,\n        \"email\": String,\n        \"mobile\": Number,\n        \"countryCode\": Number,\n        \"countryName\": String,\n        \"countryId\": String\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured. custom message of the reason of error (Ex. user already registered),\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "user_management",
    "name": "PostSignup"
  }
] });
