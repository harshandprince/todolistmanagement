define({ "api": [
  {
    "type": "event",
    "url": "onrequestaccept",
    "title": "onrequestaccept event",
    "version": "0.0.1",
    "group": "Events_to_emit",
    "description": "<p>This event is used to emit by frontend when user accepts the request then the person who sent the request will get a notification that his request is accepted this is the data to be emitted</p>",
    "examples": [
      {
        "title": "Data to emit  ",
        "content": "{\n               userId:userId of the user whose request is accepted,\n                name:name by which the request is accepted\n}",
        "type": "json"
      }
    ],
    "filename": "socket/socket.js",
    "groupTitle": "Events_to_emit",
    "name": "EventOnrequestaccept"
  },
  {
    "type": "event",
    "url": "onrequestsend",
    "title": "onrequestsend event",
    "version": "0.0.1",
    "group": "Events_to_emit",
    "description": "<p>This event is used to emit by frontend when user sends the request then the person who receives the request will get a notification that his request is recieved by him</p>",
    "examples": [
      {
        "title": "Data to emit  ",
        "content": "{\n                userId:userId of the user to whom the request is sent,\n                name:name by which the request is sent\n}",
        "type": "json"
      }
    ],
    "filename": "socket/socket.js",
    "groupTitle": "Events_to_emit",
    "name": "EventOnrequestsend"
  },
  {
    "type": "event",
    "url": "something",
    "title": "something event",
    "version": "0.0.1",
    "group": "Events_to_emit",
    "description": "<p>This event is used to emit by frontend when user do any operation in list(of self or in friends list) then friends of the person who done that will get a notification that some operation is done by him</p>",
    "examples": [
      {
        "title": "Data to emit ",
        "content": "{\n                doneby:userId of the user by which the operation is done,\n                inthelistof:userId of the person in which list operation is performed,\n                operationname:the name of operation,\n                oldData:the data which is changed(optional parameter if item is created or deleted),\n                newData:the data which is set(optional parameter if item is created or deleted)\n}",
        "type": "json"
      }
    ],
    "filename": "socket/socket.js",
    "groupTitle": "Events_to_emit",
    "name": "EventSomething"
  },
  {
    "type": "event",
    "url": "undo",
    "title": "undo event",
    "version": "0.0.1",
    "group": "Events_to_emit",
    "description": "<p>This event is used to emit by frontend when user undo then friends of the person who done the undo will get a notification that undo is done by him</p>",
    "examples": [
      {
        "title": "Data to emit  ",
        "content": "{\n                userId:userId of the user by which the undo is done,\n                inthelistof:userId of the person in which list the undo is performed\n}",
        "type": "json"
      }
    ],
    "filename": "socket/socket.js",
    "groupTitle": "Events_to_emit",
    "name": "EventUndo"
  }
] });
