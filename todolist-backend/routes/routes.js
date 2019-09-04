let express=require('express');
let cors=require('cors');
let controllerLoginSignup=require('./../controllers/controllerLoginSignup');
let controllerListManagement=require('./../controllers/controllerlistmanagement');
let controllerFriendManagement=require('./../controllers/controllerfriendmanagement');
let authMiddleware=require('./../library/authmiddleware');
let setRouter=(app)=>{
app.options('/login',cors());
app.options('/signup',cors());
app.options('/forget',cors());
app.options('/reset',cors());
app.options('/create',cors());
app.options('/show',cors());
app.options('/update',cors());
app.options('/delete',cors());
app.options('/changestatus',cors());
app.options('/showUsers',cors());
app.options('/showfriends',cors());
app.options('/showFriendRequest',cors());
app.options('/sendfriendrequest',cors());
app.options('/cancelsentrequest',cors());
app.options('/showrequestsentstatus',cors());
app.options('/acceptrequest',cors());
app.options('/undo',cors());
app.options('/unfriend',cors());

app.post('/create',authMiddleware.authMiddleware,controllerListManagement.createNode);

/**
 * @api {post} /create create list/listitem
 * @apiVersion 0.0.1
 * @apiGroup list management
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter) 
 * @apiParam {String} userId user id of which this list/listitem belongs to it is optional if not provided considered as created by the user whose token is provided.(passed as a body parameter)
 * @apiParam {String} parentId parent node id.(passed as a body parameter)
 * @apiParam {String} itemName name of item(content of the created list/listitem).(passed as a body parameter)
 *
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "status": 200,
    "message": "item created successfully",
    "data": {
        "itemStatus": string,
        "status": Boolean,
        "userId": String,
        "parentId": String,
        "itemName": String,
        "doneById": String,
        "doerFullName": String,
        "itemId": String,
        "creationDate": Date
    }
}
*	
*	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured. custom message of the reason of error,
	    "status": 500,
	    "data": null
	   }
	 */
    app.post('/show',authMiddleware.authMiddleware,controllerListManagement.showList);
    /**
 * @api {post} /show show all list/listitem
 * @apiVersion 0.0.1
 * @apiGroup list management
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter) 
 * @apiParam {String} userId user id of which this list/listitem belongs to it is optional if not provided considered as created by the user whose token is provided.(passed as a body parameter)
 * @apiParam {String} parentId parent node id.(passed as a body parameter)
 *
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "status": 200,
    "message": "list found",
    "data": [
        {
            "itemStatus": String,
            "status": Boolean,
            "userId": String,
            "parentId": String,
            "itemName": String,
            "doneById": String,
            "doerFullName": String,
            "itemId": String,
            "creationDate": Date
        }
    ]
}
*	
*	  @apiSuccessExample {json} Success-Response:
*
* {
	    "error": false,
	    "message": "no list items found create one,
	    "status": 404,
	    "data": null
       }
*
*	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured. custom message of the reason of error,
	    "status": 500,
	    "data": null
       }
	 */
    app.post('/update',authMiddleware.authMiddleware,controllerListManagement.updateNode);

/**
 * @api {post} /update update list/listitem
 * @apiVersion 0.0.1
 * @apiGroup list management
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter) 
 * @apiParam {String} userId user id of which this list/listitem belongs to it is optional if not provided considered as created by the user whose token is provided.(passed as a body parameter)
 * @apiParam {String} itemId itemId of the node(list/listitem) (passed as a body parameter)
 * @apiParam {String} itemName name of item to set(content of the created list/listitem).(passed as a body parameter)
 * @apiParam {String} oldData current content of the created list/listitem.(passed as a body parameter)
 *
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "status": 200,
    "message": "item updated successfully",
    "data": {
        "itemStatus": String,
        "status": Boolean,
        "userId": String,
        "parentId": String,
        "itemName": String,
        "doneById": String,
        "doerFullName": String,
        "itemId": String,
        "creationDate": Date
    }
}
*	
*	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured. custom message of the reason of error,
	    "status": 500,
	    "data": null
       }
       *
       *	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "item not found to update",
	    "status": 404,
	    "data": null
	   }
	 */
    app.post('/delete',authMiddleware.authMiddleware,controllerListManagement.deleteNode);
/**
 * @api {post} /delete delete list/listitem
 * @apiVersion 0.0.1
 * @apiGroup list management
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter) 
 * @apiParam {String} userId user id of which this list/listitem belongs to it is optional if not provided considered as created by the user whose token is provided.(passed as a body parameter)
 * @apiParam {String} itemId node id.(passed as a body parameter)
 *
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "status": 200,
    "message": "item deleted successfully",
    "data": {
        "itemStatus": String,
        "status": Boolean,
        "userId": String,
        "parentId": String,
        "itemName": String,
        "doneById": String,
        "doerFullName": String,
        "itemId": String,
        "creationDate": Date
    }
}
*	
*	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured. custom message of the reason of error,
	    "status": 500,
	    "data": null
       }
       *
*	  @apiErrorExample {json} Error-Response:
*
* {
	    "error": true,
	    "message": "item not found to delete",
	    "status": 404,
	    "data": null
	   }
*/


    app.post('/changestatus',authMiddleware.authMiddleware,controllerListManagement.changeStatus);
/**
 * @api {post} /changestatus changestatus of list/listitem as done or todo
 * @apiVersion 0.0.1
 * @apiGroup list management
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter) 
 * @apiParam {String} userId user id of which this list/listitem belongs to it is optional if not provided considered as created by the user whose token is provided.(passed as a body parameter)
 * @apiParam {String} itemId itemId of the node(list/listitem) (passed as a body parameter)
 * @apiParam {String} itemStatus status of item to set(content of the created list/listitem)as check_box or check_box_outline_blank.(passed as a body parameter)
 * @apiParam {String} oldStatus current status of the created list/listitem. as check_box or check_box_outline_blank(passed as a body parameter)
 *
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "status": 200,
    "message": "item status changed successfully",
    "data": {
        "itemStatus": String,
        "status": Boolean,
        "userId": String,
        "parentId": String,
        "itemName": String,
        "doneById": String,
        "doerFullName": String,
        "itemId": String,
        "creationDate": Date
    }
}
*	
*	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured. custom message of the reason of error,
	    "status": 500,
	    "data": null
       }
       *
       *	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "item not found to change status",
	    "status": 404,
	    "data": null
	   }
	 */
    app.post('/undo',authMiddleware.authMiddleware,controllerListManagement.undo);
/**
 * @api {post} /undo undo the last operation
 * @apiVersion 0.0.1
 * @apiGroup list management
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter) 
 * @apiParam {String} userId user id of which this list/listitem belongs to it is optional if not provided considered as created by the user whose token is provided.(passed as a body parameter)
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "status": 200,
    "message": "undo success",
    "data": null
}
*	
*	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured. custom message of the reason of error,
	    "status": 500,
	    "data": null
       }
       *
       *	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "no log history found to undo further",
	    "status": 404,
	    "data": null
	   }
	 */




    app.post('/login',controllerLoginSignup.login);
/**
 * @api {post} /login login the user
 * @apiVersion 0.0.1
 * @apiGroup user management
 *
 * @apiParam {String} email email of registered user.(Send as body parameter) 
 * @apiParam {String} password password of registered user.(passed as a body parameter)
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "status": 200,
    "message": "user verified",
    "data": {
        "token": String,
        "userId": String,
        "firstName": String
    }
}
*	
*	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured. custom message of the reason of error (Ex. password match error),
	    "status": 500,
	    "data": null
       }
       *	
*	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "email id not found",
	    "status": 404,
	    "data": null
	   }
	 */
    app.post('/forget',controllerLoginSignup.forget);
/**
 * @api {post} /forget to get the code on email to reset password
 * @apiVersion 0.0.1
 * @apiGroup user management
 *
 * @apiParam {String} email email of registered user.(Send as body parameter) 
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "status": 200,
    "message": "code to reset password generated successfully",
    "data": {
        "used": Boolean,
        "userId": String,
        "email": String,
        "resetCode": String,
        "created": Date
    }
}
*	
*	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured. custom message of the reason of error (Ex. error generating link),
	    "status": 500,
	    "data": null
       }
       *	
*	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "email not found",
	    "status": 404,
	    "data": null
	   }
	 */
    app.post('/reset',controllerLoginSignup.reset);
/**
 * @api {post} /reset to change password using the code sent on email
 * @apiVersion 0.0.1
 * @apiGroup user management
 *
 * @apiParam {String} email email of registered user.(Send as body parameter) 
 * @apiParam {String} resetCode code sent on email of registered user.(Send as body parameter)
 * @apiParam {String} password new password to set.(Send as body parameter)  
 * @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "status": 200,
    "message": "password changed successfully",
    "data": {
        "userId": String,
        "firstName": String,
        "lastName": String,
        "email": String,
        "countryCode": String,
        "countryName": String,
        "countryId": String
    }
}
*	
*	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured. custom message of the reason of error (Ex. error code already used),
	    "status": 500,
	    "data": null
       }
       *	
*	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "resetCode not found or incorrect",
	    "status": 404,
	    "data": null
	   }
	 */
    app.post('/signup',controllerLoginSignup.signup);
/**
 * @api {post} /signup signup new user
 * @apiVersion 0.0.1
 * @apiGroup user management
 *
 * @apiParam {String} email email of user.(Send as body parameter) 
 * @apiParam {String} password password to set.(Send as body parameter)  
 * @apiParam {String} firstName firstName of user.(Send as body parameter)
 * @apiParam {String} lastName lastName of user.(Send as body parameter)
 * @apiParam {Number} mobile mobile number of the user.(Send as body parameter)
 * @apiParam {Number} countryCode countryCode of user.(Ex.91)(Send as body parameter)
 * @apiParam {String} countryName countryName of user.(Send as body parameter)
 * @apiParam {String} countryId countryId of user.(Ex.In)(Send as body parameter)
 * @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "status": 200,
    "message": "user registered successfully",
    "data": {
        "userId": String,
        "firstName": String,
        "lastName": String,
        "email": String,
        "mobile": Number,
        "countryCode": Number,
        "countryName": String,
        "countryId": String
    }
}
*	
*	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured. custom message of the reason of error (Ex. user already registered),
	    "status": 500,
	    "data": null
       }
       *	
	 */
    app.get('/showUsers',authMiddleware.authMiddleware,controllerFriendManagement.showUsers);
/**
 * @api {get} /showUsers to get all the registered users
 * @apiVersion 0.0.1
 * @apiGroup friend management
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter) from here the userId will be fetched 
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "status": 200,
    "message": "users found",
    "data": [
        {
            "userId": String,
            "firstName": String,
            "lastName": String,
            "email": String,
            "countryCode": Number,
            "countryName": String,
            "countryId": String
        }
    ]
}
*	
*	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured. custom message of the reason of error",
	    "status": 500,
	    "data": null
       }
       *	
*	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "no users found to display",
	    "status": 404,
	    "data": null
	   }
	 */
    app.get('/showrequestsentstatus',authMiddleware.authMiddleware,controllerFriendManagement.showrequestsentstatus);
/**
 * @api {get} /showrequestsentstatus to get all the request sent data created by the token holder
 * @apiVersion 0.0.1
 * @apiGroup friend management
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter) from here the userId will be fetched 
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "status": 200,
    "message": "loading request status",
    "data": [
        {
            "requestSent": Boolean,
            "requestTime": Date,
            "requestaccepted": Boolean,
            "userId": String,
            "requestedPersonID": String,
            "requestedPersonName": String
        }
    ]
}
*	
*	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured. custom message of the reason of error",
	    "status": 500,
	    "data": null
       }
       *	
*	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "no users found to show status",
	    "status": 404,
	    "data": null
	   }
	 */
    app.get('/showfriends',authMiddleware.authMiddleware,controllerFriendManagement.showfriends);
/**
 * @api {get} /showfriends to get all the friends
 * @apiVersion 0.0.1
 * @apiGroup friend management
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter) from here the userId will be fetched 
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "status": 200,
    "message": "loading friends",
    "data": [
        {
            "requestSent": Boolean,
            "requestTime": Date,
            "requestaccepted": Boolean,
            "userId": String,
            "requestedPersonID": String,
            "requestedPersonName": String
        }
    ]
}
*	
*	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured. custom message of the reason of error",
	    "status": 500,
	    "data": null
       }
       *	
	 */
    app.get('/showFriendRequest',authMiddleware.authMiddleware,controllerFriendManagement.showFriendRequest);
/**
 * @api {get} /showFriendRequest to get all the friend request for the token holder
 * @apiVersion 0.0.1
 * @apiGroup friend management
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter) from here the userId will be fetched 
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "status": 200,
    "message": "loading friend requests",
    "data": [
        {
            "requestSent": Boolean,
            "requestTime": Date,
            "requestaccepted": Boolean,
            "userId": String,
            "requestedPersonID": String,
            "requestedPersonName": String
        }
    ]
}
*	
*	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured. custom message of the reason of error(Ex.no friend requests to show)",
	    "status": 404,
	    "data": null
       }
       *
       *	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured. custom message of the reason of error",
	    "status": 500,
	    "data": null
       }
       *	
	 */
    app.post('/sendfriendrequest',authMiddleware.authMiddleware,controllerFriendManagement.sendFriendRequest);
/**
 * @api {post} /sendfriendrequest to send friend request by the token holder
 * @apiVersion 0.0.1
 * @apiGroup friend management
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter) from here the userId will be fetched 
 * @apiParam {String} requestedPersonID userId of the person to whom the token holder send request.(Send authToken as query parameter) from here the userId will be fetched 
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "status": 200,
    "message": "friend request sent successfully",
    "data": {
        "requestSent": Boolean,
        "requestTime": Date,
        "requestaccepted": Boolean,
        "userId": String,
        "requestedPersonID": String,
        "requestedPersonName": String
    }
}
*	
       *	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured. custom message of the reason of error",
	    "status": 500,
	    "data": null
       }
       *	
	 */
    app.post('/cancelsentrequest',authMiddleware.authMiddleware,controllerFriendManagement.cancelsentrequest);
/**
 * @api {post} /cancelsentrequest to cancel friend request sent by the token holder
 * @apiVersion 0.0.1
 * @apiGroup friend management
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter) from here the userId will be fetched 
 * @apiParam {String} requestedPersonID userId of the person to whom the token holder sent the request.(Send authToken as query parameter) from here the userId will be fetched 
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "status": 200,
    "message": "friend request cancelled successfully",
    "data": {
        "requestSent": Boolean,
        "requestTime": Date,
        "requestaccepted": Boolean,
        "userId": String,
        "requestedPersonID": String,
        "requestedPersonName": String
    }
}
*	
       *	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured. custom message of the reason of error",
	    "status": 500,
	    "data": null
       }
       *	
	 */
    app.post('/acceptrequest',authMiddleware.authMiddleware,controllerFriendManagement.acceptrequest);
/**
 * @api {post} /acceptrequest to accept received friend request sent to the token holder
 * @apiVersion 0.0.1
 * @apiGroup friend management
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter) from here the userId will be fetched 
 * @apiParam {String} requestedPersonID userId of the person by whom the request is sent.(Send authToken as query parameter) from here the userId will be fetched 
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "status": 200,
    "message": "friend request accepted successfully",
    "data": {
        "requestSent": Boolean,
        "requestTime": Date,
        "requestaccepted": Boolean,
        "userId": String,
        "requestedPersonID": String,
        "requestedPersonName": String
    }
}
*	
       *	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured. custom message of the reason of error",
	    "status": 500,
	    "data": null
       }
       *	
	 */
    app.post('/unfriend',authMiddleware.authMiddleware,controllerFriendManagement.unfriend);
/**
 * @api {post} /unfriend to unfriend the friend by the token holder
 * @apiVersion 0.0.1
 * @apiGroup friend management
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter) from here the userId will be fetched 
 * @apiParam {String} requestedPersonID userId of the person to unfriend.(Send authToken as query parameter) from here the userId will be fetched 
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "status": 200,
    "message": "unfriend success",
    "data": null
}
*	
       *	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured. custom message of the reason of error",
	    "status": 500,
	    "data": null
       }
       *	
	 */
}
module.exports={
    setRouter:setRouter
}