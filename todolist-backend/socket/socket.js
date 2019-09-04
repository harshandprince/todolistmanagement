let socketio = require('socket.io');
let responselib = require('../library/responseLib');
let mongoose = require('mongoose');
let signup = require('../models/signupmodel');
let signupmodel = mongoose.model('signupModel');
let friendreq = require('../models/friendrequestmodel');
let friendrequestmodel = mongoose.model('friendrequestmodel');
let setSocket = (server) => {
    let io = socketio.listen(server);
    let myio = io.of('');
    let allonlineusers = [];
    myio.on('connection', (socket) => {

        console.log('client logged in');
        let users;
        signupmodel.find().exec((err, result) => {
            if (err) { console.log('some error while loading users in socket'); }
            else { this.users = result; console.log('users loaded'); }
        });
        socket.on('onrequestaccept', (data) => {
            let o={
                userId:data.userId,
                name:data.name
            }
            let m=`your friend request is accepted by ${o.name} you both are friends now`;
            myio.emit(o.userId, responselib.generate(false, 200, m, null));
            //socket.userId = data.userId;
        });
/**
 * @api {event} onrequestaccept onrequestaccept event
 * @apiVersion 0.0.1
 * @apiGroup Events to emit
 * @apiDescription This event is used to emit by frontend when user accepts the request
 * then the person who sent the request will get a notification that his request is accepted 
 * this is the data to be emitted
 * @apiExample {json} Data to emit  
 * {
               userId:userId of the user whose request is accepted,
                name:name by which the request is accepted
}
 */




        socket.on('onrequestsend', (data) => {
            let o={
                userId:data.userId,
                name:data.name
            }
            let m=`your have a new friend request by ${o.name}`;
            myio.emit(o.userId, responselib.generate(false, 200, m, null));
            //socket.userId = data.userId;
        });
 /**
 * @api {event} onrequestsend onrequestsend event
 * @apiVersion 0.0.1
 * @apiGroup Events to emit
 * @apiDescription This event is used to emit by frontend when user sends the request
 * then the person who receives the request will get a notification that his request is recieved by him 
 * @apiExample {json} Data to emit  
 * {
                userId:userId of the user to whom the request is sent,
                name:name by which the request is sent
}
 */




        socket.on('undo', (data) => {
            let o={
                userId:data.userId,
                inthelistof:data.inthelistof
            }
            let donebyname;
            let inthelistofname;
            console.log('undo event called');
            console.log(o);
            for (let u of this.users) {
                if (u.userId == o.userId) {
                    this.donebyname = u.firstName + " " + u.lastName;
                }
                if (u.userId == o.inthelistof) {
                    this.inthelistofname = u.firstName + " " + u.lastName;
                }
            }
            console.log(this.inthelistofname);
            console.log(this.donebyname);
             let message=`undo done by ${this.donebyname} in the list of ${this.inthelistofname}`;
            friendrequestmodel.find({ $or: [{ requestedPersonID: o.userId, requestaccepted: true }, { userId: o.userId, requestaccepted: true }] }).select('-_id -__v').exec((err, result) => {
                if (err) {
                    console.log('some error while loading friends');
                    console.log(err.message);
                }
                else if (result == null || result == '' || result == undefined) {
                    console.log('you have no friends please make some');
                }
                else {
                    let friends = [];
                    console.log('loading friends');
                    let allfriendsdata = result;
                    for (let f of allfriendsdata) {
                        if (f.requestedPersonID == o.userId) {
                            friends.push(f.userId);
                        }
                        if (f.userId == o.userId) {
                            friends.push(f.requestedPersonID);
                        }
                    }

                    for (let id of friends) {
                        // for (let u of allonlineusers) {
                        //     if (id.userId == u) {
                                
                                myio.emit(id, responselib.generate(false, 200, message, null));
                        //     }
                       // }
                    }
                }

             });
            //socket.userId = data.userId;
        }
        );
 /**
 * @api {event} undo undo event
 * @apiVersion 0.0.1
 * @apiGroup Events to emit
 * @apiDescription This event is used to emit by frontend when user undo
 * then friends of the person who done the undo will get a notification that undo is done by him
 * @apiExample {json} Data to emit  
 * {
                userId:userId of the user by which the undo is done,
                inthelistof:userId of the person in which list the undo is performed
}
 */

        // socket.on('disconnect', () => {
        //     var removeIndex = allonlineusers.map(function (user) { return user; }).indexOf(socket.userId);
        //     allonlineusers.splice(removeIndex, 1)
        //     console.log(allonlineusers);
        //     console.log('user disconnected');
        //     //socket.leave(socket.userId);
        // });
        socket.on('something', (data) => {
            let o = {
                operationname: data.operationname,
                doneby: data.doneby,
                inthelistof: data.inthelistof,
                ondata: data.ondata,
                newdata: data.newdata
            }
            let donebyname;
            let inthelistofname;
            let message;
            for (let u of this.users) {
                if (u.userId == o.doneby) {
                    this.donebyname = u.firstName + " " + u.lastName;
                }
                if (u.userId == o.inthelistof) {
                    this.inthelistofname = u.firstName + " " + u.lastName;
                }
            }
            if (o.newdata == null || o.newdata == undefined || o.newdata == '') {
                this.message = `${o.ondata} ${o.operationname} by ${this.donebyname} in the list of ${this.inthelistofname}`;
            }
            else {
                this.message = `${o.ondata} ${o.operationname} by ${this.donebyname} in the list of ${this.inthelistofname} new data is ${o.newdata}`;
            }

            let m = {
                message: this.message
            }
            friendrequestmodel.find({ $or: [{ requestedPersonID: o.doneby, requestaccepted: true }, { userId: o.doneby, requestaccepted: true }] }).select('-_id -__v').exec((err, result) => {
                if (err) {
                    console.log('some error while loading friends');
                    console.log(err.message);
                }
                else if (result == null || result == '' || result == undefined) {
                    console.log('you have no friends please make some');
                }
                else {
                    let friends = [];
                    console.log('loading friends');
                    let allfriendsdata = result;
                    for (let f of allfriendsdata) {
                        if (f.requestedPersonID == o.doneby) {
                            friends.push(f.userId);
                        }
                        if (f.userId == o.doneby) {
                            friends.push(f.requestedPersonID);
                        }
                    }

                    for (let id of friends) {
                        // for (let u of allonlineusers) {
                        //     if (id.userId == u) {
                                console.log(id+"called");
                                myio.emit(id, responselib.generate(false, 200, this.message, null));
                        //     }
                        // }
                    }
                }

            });
        });
/**
 * @api {event} something something event
 * @apiVersion 0.0.1
 * @apiGroup Events to emit
 * @apiDescription This event is used to emit by frontend when user do any operation in list(of self or in friends list)
 * then friends of the person who done that will get a notification that some operation is done by him
 * @apiExample {json} Data to emit 
 * {
                doneby:userId of the user by which the operation is done,
                inthelistof:userId of the person in which list operation is performed,
                operationname:the name of operation,
                oldData:the data which is changed(optional parameter if item is created or deleted),
                newData:the data which is set(optional parameter if item is created or deleted)
}
 */



    });
}

module.exports = {
    setSocket: setSocket
}