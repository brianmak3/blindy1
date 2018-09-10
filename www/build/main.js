webpackJsonp([0],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
// manages contacts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = (function () {
    // manages contacts online status
    function ContactService(ref, socket, events) {
        var _this = this;
        this.ref = ref;
        this.socket = socket;
        this.events = events;
        this.contacts = [];
        this.user = { id: 'Brian' };
        // triggered when a contact comes online
        this.socket.on('online', function (contact) {
            contact.online = true;
            _this.setOnlineUsers([contact]);
        });
        // triggered when a contact goes offline
        this.socket.on('offline', function (contact) {
            contact.online = false;
            _this.setOnlineUsers([contact]);
        });
        // triggered when we request new contacts
        this.socket.on('contacts', function (contacts) {
            console.debug('Contacts: ', contacts);
            _this.setOnlineUsers(contacts);
        });
        // triggered after a successfull login
        this.events.subscribe('user.login', function (data) {
            _this.user = data.user;
        });
        // triggeres after a logout event
        // note: this does not break the socket connection
        this.events.subscribe('user.logout', function () {
            _this.user = null;
        });
    }
    // set online users
    ContactService.prototype.setOnlineUsers = function (contacts) {
        console.log('SET ONLINE USERS', this, contacts, this.user);
        // i think this happens when user is notified that they are online and we havent recieved the login thing yet
        if (!this.user) {
            console.error('No user yet for contats');
            return;
        }
        for (var x in contacts) {
            if (contacts[x].id == this.user.id) {
                continue;
            }
            var add = true;
            for (var xx in this.contacts) {
                if (this.contacts[xx].id == contacts[x].id) {
                    // dont overwirte fields with empty data
                    for (var xxx in contacts[x]) {
                        this.contacts[xx][xxx] = contacts[x][xxx];
                    }
                    add = false;
                    break;
                }
            }
            if (add) {
                this.contacts.push(contacts[x]);
            }
        }
        this.contacts.sort(this.sortContacts);
        console.debug('Contacts: ', this.contacts);
        this.ref.tick();
    };
    ;
    // sort contacts by online and last message
    ContactService.prototype.sortContacts = function (a, b) {
        if (!a) {
            return -1;
        }
        if (!b) {
            return 1;
        }
        if (a.online > b.online) {
            return -1;
        }
        if (a.online < b.online) {
            return 1;
        }
        if (new Date(a.lastDate) > new Date(b.lastDate)) {
            return -1;
        }
        if (new Date(a.lastDate) < new Date(b.lastDate)) {
            return 1;
        }
        return 0;
    };
    ;
    // get a contact and its details
    ContactService.prototype.get = function (id) {
        console.debug('getting contact on logout', id, this.user.id);
        if (id == this.user.id) {
            return this.user;
        }
        for (var _i = 0, _a = this.contacts; _i < _a.length; _i++) {
            var contact = _a[_i];
            if (contact.id == id) {
                return contact;
            }
        }
        return {
            id: id
        };
    };
    return ContactService;
}());
ContactService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_1____["h" /* SocketService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */]])
], ContactService);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__socket__ = __webpack_require__(206);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__socket__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__call__ = __webpack_require__(220);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__call__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(114);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__contact__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video__ = __webpack_require__(223);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_3__video__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat__ = __webpack_require__(450);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__chat__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__audio__ = __webpack_require__(221);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__audio__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__provider__ = __webpack_require__(451);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__provider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login__ = __webpack_require__(452);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__attachment__ = __webpack_require__(456);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__attachment__["a"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
// handle socket io connections
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketService = (function () {
    function SocketService() {
        this.socket = null;
        // connect to our server
        // change this url here
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__["connect"](__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* Config */].server);
    }
    // generate a unique custom request id
    SocketService.prototype.makeId = function (len) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$';
        for (var i = 0; i < (len || 10); i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    // send an event and get a response back
    SocketService.prototype.promise = function (eventName, request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var success = function (response) {
                console.debug(eventName + '|' + request.responseName + ': complete!');
                _this.socket.removeListener(request.responseName, success);
                resolve(response);
            };
            request.responseName = '$response$' + _this.makeId(10) + '$';
            console.debug(eventName + '|' + request.responseName + ': Sending socket promise...');
            _this.socket.on(request.responseName, success);
            _this.socket.emit(eventName, request);
        });
    };
    SocketService.prototype.emit = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (_a = this.socket).emit.apply(_a, args);
        var _a;
        // @BUG
        //this.socket.emit(args[0], args[1]);
    };
    SocketService.prototype.on = function (name, data) {
        this.socket.on(name, data);
    };
    SocketService.prototype.removeListener = function (name, data) {
        this.socket.removeListener(name, data);
    };
    return SocketService;
}());
SocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SocketService);

//# sourceMappingURL=socket.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audio__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__video__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(22);
// handles incoming and outgoing video calls
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CallService = (function () {
    function CallService(ref, sanitizer, events, modalCtrl, socket, platform, audio, contactService, video) {
        // browser compatability for web views
        var _this = this;
        this.ref = ref;
        this.sanitizer = sanitizer;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.socket = socket;
        this.platform = platform;
        this.audio = audio;
        this.contactService = contactService;
        this.video = video;
        this.maxTimer = 200000;
        this.facing = 'front';
        this.pickupTimeout = null;
        this.contact = null;
        this.isInCall = false;
        this.isCalling = false;
        this.isAnswering = false;
        //duplicateMessages
        this.muted = false;
        this.lastState = null;
        this.localStream = null;
        this.peerConnection = null;
        this.remoteVideo = null;
        this.localVideo = null;
        this.peerConnectionConfig = null;
        this.modalShowing = false;
        this.modal = null;
        window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        window.RTCIceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate || window.webkitRTCIceCandidate;
        window.RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription;
        // STUN/TURN ice servers for connection negotiation
        this.peerConnectionConfig = {
            'iceServers': __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* Config */].ice
        };
        this.socket.on('messageReceived', function (name, message) {
            console.debug('Message', message);
            switch (message.type) {
                case 'call':
                    console.debug('incoming call...', message);
                    if (_this.isCalling) {
                        // we are trying to call eachother. just answer it automaticly
                        if (_this.contact.id == name) {
                            clearTimeout(_this.pickupTimeout);
                            _this.pickupTimeout = null;
                            _this.isCalling = false;
                            _this.isAnswering = true;
                            _this.answer();
                            return;
                        }
                        // ignore this incoming call if we are busy
                        _this.ignore(false, name);
                        return;
                    }
                    _this.audio.play('calling');
                    _this.pickupTimeout = setTimeout(function () {
                        console.log('Call took too long to pick up. Ending.');
                        _this.end();
                    }, _this.maxTimer);
                    // start a new call
                    _this.contact = _this.contactService.get(name);
                    _this.isAnswering = true;
                    _this.showModal();
                    _this.preview();
                    _this.refreshVideos();
                    break;
                case 'answer':
                    clearTimeout(_this.pickupTimeout);
                    _this.pickupTimeout = null;
                    _this.isInCall = true;
                    _this.isCalling = false;
                    _this.refreshVideos();
                    _this.call(true, _this.contact.id);
                    break;
                case 'ignore':
                case 'cancel':
                    _this.end();
                    break;
                case 'end':
                    if (_this.isInCall || _this.isCalling || _this.isAnswering) {
                        _this.end();
                    }
                    break;
            }
            if (message.sdp) {
                _this.peerConnection.setRemoteDescription(new RTCSessionDescription(message.sdp), function () {
                    if (message.sdp.type == 'offer') {
                        _this.peerConnection.createAnswer(function (d) {
                            //							this.gotDescription.call(this, [d]);
                            _this.gotDescription(d);
                        }, function (e) {
                            console.log('error creating answer', e);
                        });
                    }
                });
            }
            else if (message.ice) {
                _this.peerConnection.addIceCandidate(new RTCIceCandidate(message.ice));
            }
        });
    }
    // place a new call
    CallService.prototype.triggerCall = function (contact) {
        var _this = this;
        this.audio.play('calling');
        this.showModal();
        if (this.isInCall) {
            return;
        }
        this.preview();
        this.pickupTimeout = setTimeout(function () {
            console.log('Call took too long to pick up. Ending.');
            _this.end();
        }, this.maxTimer);
        console.debug('calling ', contact);
        this.contact = this.contactService.get(contact);
        this.isCalling = true;
        this.socket.emit('sendMessage', contact, {
            type: 'call'
        });
    };
    // open the call modal
    CallService.prototype.showModal = function () {
        this.events.publish('call.trigger.show', this.contact);
        this.modalShowing = true;
    };
    ;
    CallService.prototype.gotDescription = function (description) {
        var _this = this;
        console.log('got description', description, this.contact);
        this.peerConnection.setLocalDescription(description, function () {
            _this.socket.emit('sendMessage', _this.contact.id, {
                'sdp': description
            });
        }, function (e) {
            console.log('set description error', e);
        });
    };
    CallService.prototype.gotIceCandidate = function (event) {
        if (event.candidate != null) {
            this.socket.emit('sendMessage', this.contact.id, {
                'ice': event.candidate
            });
        }
    };
    CallService.prototype.gotRemoteStream = function (event) {
        console.log('got remote stream');
        this.remoteVideo = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(event.stream));
        this.refreshVideos();
    };
    // a hacky way to make sure we get the latest video position reguardless of animations or transitions
    // another way might be to use iosrtc.observeVideo(video) or an $interval
    CallService.prototype.refreshVideos = function () {
        // tell the modal that we need to revresh the video
        this.ref.tick();
        if (!this.platform.is('cordova')) {
            return;
        }
        try {
            for (var x = 0; x <= 3000; x += 300) {
                console.log(x);
                setTimeout(cordova.plugins.iosrtc.refreshVideos, x);
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    ;
    CallService.prototype.hideModal = function () {
        this.events.publish('call.trigger.hide', true);
    };
    // end the call in either direction
    CallService.prototype.end = function () {
        var _this = this;
        if (this.peerConnection) {
            this.peerConnection.close();
        }
        this.localVideo = null;
        this.remoteVideo = null;
        this.isAnswering = false;
        this.isCalling = false;
        this.isInCall = false;
        this.localStream = null;
        this.video.disconnect().then(function () {
            _this.hideModal();
            _this.refreshVideos();
        });
        if (!this.contact) {
            return;
        }
        this.socket.emit('sendMessage', this.contact.id, {
            type: 'end'
        });
        this.contact = null;
    };
    // add local stream
    CallService.prototype.addStream = function (stream, timeout) {
        var _this = this;
        this.localStream = stream;
        setTimeout(function () {
            _this.localVideo = _this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(stream));
        }, timeout);
    };
    // preview local video as full screen
    CallService.prototype.preview = function () {
        var _this = this;
        this.video.connect(true, true, this.facing).then(function (stream) {
            _this.addStream(stream, 10);
        });
    };
    ;
    // begin a call using webrtc
    CallService.prototype.call = function (isInitiator, contactId) {
        var _this = this;
        console.log('calling ' + contactId + ', isInitiator: ' + isInitiator);
        var connect = function () {
            _this.peerConnection = new RTCPeerConnection(_this.peerConnectionConfig);
            _this.peerConnection.onicecandidate = _this.gotIceCandidate.bind(_this);
            _this.peerConnection.onaddstream = _this.gotRemoteStream.bind(_this);
            _this.peerConnection.oniceconnectionstatechange = function (event) {
                _this.lastState = event.target.iceConnectionState;
                console.debug('ice state', _this.lastState);
                if (_this.lastState === 'failed' || _this.lastState === 'disconnected' || _this.lastState === 'closed') {
                    _this.peerConnection = null;
                    _this.end();
                }
            };
            _this.peerConnection.addStream(_this.localStream);
            if (isInitiator) {
                //this.isCalling = true;
                console.debug('creating offer');
                _this.peerConnection.createOffer(function (d) {
                    //this.gotDescription.call(this, [d]);
                    _this.gotDescription(d);
                }, function (e) {
                    console.log('error creating offer', e);
                });
            }
            else {
                //this.isAnswering = true;
            }
        };
        if (!this.localStream) {
            this.video.connect(true, true, this.facing).then(function (stream) {
                _this.addStream(stream, 1000);
                connect();
            });
        }
        else {
            connect();
        }
        // session.on('sendMessage', data => {
        // 	Socket.emit('sendMessage', contact.id, {
        // 		type: 'phonertc_handshake',
        // 		data: JSON.stringify(data)
        // 	});
        // });
        //
        // this.Contact[contact.id] = session;
        //
    };
    // cancel a call being placed
    CallService.prototype.cancel = function () {
        this.socket.emit('sendMessage', this.contact.id, {
            type: 'cancel'
        });
        this.end();
    };
    ;
    // ignore an incomming call
    CallService.prototype.ignore = function (end, name) {
        this.socket.emit('sendMessage', name || this.contact.id, {
            type: 'ignore'
        });
        if (!end)
            return;
        this.end();
    };
    ;
    // answer in incoming call
    CallService.prototype.answer = function () {
        var _this = this;
        if (this.isInCall) {
            return;
        }
        clearTimeout(this.pickupTimeout);
        this.pickupTimeout = null;
        this.isInCall = true;
        this.isAnswering = false;
        this.call(false, this.contact.id);
        setTimeout(function () {
            _this.socket.emit('sendMessage', _this.contact.id, {
                type: 'answer'
            });
        });
        this.refreshVideos();
    };
    // swap the camera facing. defaults to front facing to start
    CallService.prototype.flip = function () {
        var _this = this;
        this.facing = this.facing == 'front' ? 'back' : 'front';
        this.video.connect(!this.muted, true, this.facing).then(function (stream) {
            console.debug('using new facing stream', stream);
            _this.addStream(stream, 0);
            _this.peerConnection.addStream(_this.localStream);
        });
    };
    // mute the microphone and attach a new stream to connection
    // note: doesnt seem to work quite right on all brwosers
    CallService.prototype.mute = function () {
        var _this = this;
        this.muted = !this.muted;
        console.debug((this.muted ? '' : 'un') + 'muting...');
        if (this.muted) {
            this.video.mute();
        }
        else {
            this.video.unmute().then(function (stream) {
                console.debug('using muted stream', stream);
                _this.addStream(stream, 0);
                _this.peerConnection.addStream(_this.localStream);
            });
        }
    };
    return CallService;
}());
CallService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1__socket__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__audio__["a" /* AudioService */], __WEBPACK_IMPORTED_MODULE_3__contact__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_4__video__["a" /* VideoService */]])
], CallService);

//# sourceMappingURL=call.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__(48);
// audio handler for native audio with fallback for html5 audio
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AudioService = (function () {
    function AudioService(platform, nativeAutio) {
        var _this = this;
        this.platform = platform;
        this.nativeAutio = nativeAutio;
        this.ready = null;
        this.audio = [];
        this.volume = .4;
        this.ready = new Promise(function (resolve, reject) {
            // promise that only fires after all files have loaded
            platform.ready().then(function () {
                var files = ['login', 'message-received-back', 'message-received-front', 'message-sent', 'calling'];
                var c = 1;
                if (_this.platform.is('cordova')) {
                    files.forEach(function (file) {
                        nativeAutio.preloadComplex(file, 'assets/audio/' + file + '.mp3', _this.volume, 1, 0).then(function (msg) {
                            c++;
                            if (c == files.length) {
                                setTimeout(resolve, 100);
                            }
                        }, function (msg) {
                            reject('failed to load audio');
                            console.debug('ERROR loading sound: ' + msg);
                        });
                    });
                }
                else {
                    files.forEach(function (file) {
                        _this.audio[file] = new Audio('assets/audio/' + file + '.mp3');
                        _this.audio[file].volume = _this.volume;
                    });
                    resolve();
                }
            });
        });
        this.ready.then(function () {
            console.debug('Audio initilized.');
        });
    }
    // play an audio clip
    AudioService.prototype.play = function (clip) {
        if (!__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* Config */].audio) {
            return;
        }
        // this.ready.then(() => {
        // 	if (this.platform.is('cordova')) {
        // 		this.nativeAudio.play(clip);
        // 	} else if (this.audio[clip]) {
        // 		this.audio[clip].play();
        // 	}
        // });
    };
    return AudioService;
}());
AudioService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */]])
], AudioService);

//# sourceMappingURL=audio.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
// manages video elements
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoService = (function () {
    function VideoService(platform) {
        this.platform = platform;
        this.localStream = null;
        this.facing = 'front';
        navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
    }
    VideoService.prototype.connect = function (audio, video, facing) {
        var _this = this;
        var self = this;
        console.debug('getting stream', audio, video);
        return new Promise(function (resolve, reject) {
            var connect = function () {
                var videoOptions = {
                    deviceId: null
                };
                if (_this.platform.is('cordova') && _this.platform.is('ios')) {
                    if (facing == 'front') {
                        videoOptions.deviceId = 'com.apple.avfoundation.avcapturedevice.built-in_video:1';
                    }
                    else if (facing == 'back') {
                        videoOptions.deviceId = 'com.apple.avfoundation.avcapturedevice.built-in_video:0';
                    }
                }
                navigator.getUserMedia({
                    audio: audio ? true : false,
                    video: video ? videoOptions : false
                }, function (stream) {
                    console.log('got local MediaStream: ', stream, stream.getTracks());
                    _this.localStream = stream;
                    resolve(stream);
                }, function (error) {
                    console.error('getUserMedia failed: ', error);
                    reject();
                });
            };
            var getDevices = function () {
                navigator.mediaDevices.enumerateDevices().then(function (data) {
                });
            };
            if (_this.localStream) {
                self.disconnect().then(connect);
            }
            else {
                connect();
            }
        });
    };
    // get a list of devices
    VideoService.prototype.devices = function () {
        return new Promise(function (resolve, reject) {
            navigator.mediaDevices.enumerateDevices().then(function (devices) {
                resolve(devices);
            });
        });
    };
    // mute audio
    // @todo: make this reestablish a connection
    VideoService.prototype.mute = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.localStream) {
                var tracks = _this.localStream.getAudioTracks();
                for (var x in tracks) {
                    tracks[x].enabled = false;
                }
            }
            resolve(_this.localStream);
        });
    };
    // unmute audio
    // @todo: make this reestablish a connection
    VideoService.prototype.unmute = function () {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            self.connect(true, true, _this.facing).then(function (stream) {
                resolve(stream);
            });
        });
    };
    // disconnect the media stream
    VideoService.prototype.disconnect = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.localStream) {
                var tracks = _this.localStream.getTracks();
                for (var x in tracks) {
                    tracks[x].stop();
                }
                console.debug('stoping stream', _this.localStream.getTracks());
                _this.localStream = null;
            }
            resolve();
        });
    };
    return VideoService;
}());
VideoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
], VideoService);

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopPage = (function () {
    function PopPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = this.navParams.get('type');
        switch (this.type) {
            case "chatOptions":
                this.items = [
                    { text: "Unfriend", icon: "", img: "" },
                    { text: "Block", icon: "", img: "" },
                    { text: "Delete chat", icon: "", img: "" },
                    { text: "Report", icon: "", img: "" }
                ];
                break;
            case "imageOptions":
                this.items = [
                    { icon: "camera", text: "Camera" },
                    { icon: "image", text: "Gallery" }
                ];
                break;
            default:
                // code...
                break;
        }
    }
    return PopPage;
}());
PopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pop',template:/*ion-inline-start:"/Users/brianhenry/Desktop/blindyy/call/app/src/pages/pop/pop.html"*/'\n\n\n<ion-content>\n	<ion-list style="overflow: auto;">\n			<button class="ionButton" *ngFor="let item of items"  ion-item detail-none no-lines>\n				<div *ngIf="!item.icon" style="width:150px;">{{item.text}}</div>\n				<div *ngIf="item.icon" style="text-align: center;">\n					<ion-icon  name="{{item.icon}}"></ion-icon><span>{{item.text}}</span>\n				</div>\n			</button >\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/brianhenry/Desktop/blindyy/call/app/src/pages/pop/pop.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], PopPage);

//# sourceMappingURL=pop.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account_account__ = __webpack_require__(428);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__account_account__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chats_chats__ = __webpack_require__(457);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__chats_chats__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(458);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__login_login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(459);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__chat_chat__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(466);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__list_list__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pop_pop__ = __webpack_require__(225);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__pop_pop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contacts_contacts__ = __webpack_require__(467);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__contacts_contacts__["a"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(378);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_audio__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_moment__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages__["c" /* ChatsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages__["b" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages__["f" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages__["e" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_12__components__["a" /* CallModal */],
            __WEBPACK_IMPORTED_MODULE_12__components__["d" /* ContactModal */],
            __WEBPACK_IMPORTED_MODULE_12__components__["f" /* UserImage */],
            __WEBPACK_IMPORTED_MODULE_11__pages__["d" /* ContactsPage */],
            __WEBPACK_IMPORTED_MODULE_12__components__["c" /* ContactAddModal */],
            __WEBPACK_IMPORTED_MODULE_12__components__["e" /* KeyboardAttach */],
            __WEBPACK_IMPORTED_MODULE_11__pages__["g" /* PopPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                backButtonText: 'Back',
                iconMode: 'ios',
                modalEnter: 'modal-slide-in',
                modalLeave: 'modal-slide-out',
                tabsPlacement: 'bottom',
                pageTransition: 'ios'
            }, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10_angular2_moment__["MomentModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages__["c" /* ChatsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages__["b" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages__["f" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages__["g" /* PopPage */],
            __WEBPACK_IMPORTED_MODULE_12__components__["a" /* CallModal */],
            __WEBPACK_IMPORTED_MODULE_11__pages__["e" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_12__components__["d" /* ContactModal */],
            __WEBPACK_IMPORTED_MODULE_12__components__["f" /* UserImage */],
            __WEBPACK_IMPORTED_MODULE_11__pages__["d" /* ContactsPage */],
            __WEBPACK_IMPORTED_MODULE_12__components__["c" /* ContactAddModal */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__services__["a" /* AttachmentService */],
            __WEBPACK_IMPORTED_MODULE_12__components__["b" /* CallModalTrigger */],
            __WEBPACK_IMPORTED_MODULE_13__services__["f" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_13__services__["b" /* AudioService */],
            __WEBPACK_IMPORTED_MODULE_13__services__["h" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_13__services__["c" /* CallService */],
            __WEBPACK_IMPORTED_MODULE_13__services__["e" /* ContactService */],
            __WEBPACK_IMPORTED_MODULE_13__services__["i" /* VideoService */],
            __WEBPACK_IMPORTED_MODULE_13__services__["g" /* Provider */],
            __WEBPACK_IMPORTED_MODULE_13__services__["d" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_audio__["a" /* NativeAudio */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__call_modal_call_modal__ = __webpack_require__(460);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__call_modal_call_modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_modal_contact_modal__ = __webpack_require__(461);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__contact_modal_contact_modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_add_modal_contact_add_modal__ = __webpack_require__(462);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__contact_add_modal_contact_add_modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_image_user_image__ = __webpack_require__(463);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__user_image_user_image__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__call_modal_call_modal_trigger__ = __webpack_require__(464);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__call_modal_call_modal_trigger__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keyboard_attach_keyboard_attach__ = __webpack_require__(465);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__keyboard_attach_keyboard_attach__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, callService, events, callModal, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages__["e" /* ListPage */];
        this.isInCall = false;
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages__["b" /* ChatPage */], icon: 'home' },
            { title: 'My Matches', component: __WEBPACK_IMPORTED_MODULE_4__pages__["e" /* ListPage */], icon: 'matches' },
            { title: 'My Friends', component: __WEBPACK_IMPORTED_MODULE_4__pages__["e" /* ListPage */], icon: 'friends' },
            { title: 'Call History', component: __WEBPACK_IMPORTED_MODULE_4__pages__["e" /* ListPage */], icon: 'history' },
            { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_4__pages__["e" /* ListPage */], icon: 'profile' },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_4__pages__["e" /* ListPage */], icon: 'settings' },
            { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_4__pages__["e" /* ListPage */], icon: 'help' },
        ];
        // format chat date diffs
        __WEBPACK_IMPORTED_MODULE_7_moment__["locale"]('en', {
            relativeTime: {
                future: 'now',
                past: '%s',
                s: 'now',
                m: '1 m',
                mm: '%d m',
                h: '1 h',
                hh: '%d h',
                d: '1 d',
                dd: '%d d',
                M: '1 m',
                MM: '%d m',
                y: '1 y',
                yy: '%d y'
            }
        });
        platform.ready().then(function () {
            statusBar.styleBlackTranslucent();
            splashScreen.hide();
            if (platform.is('cordova') && cordova.plugins.iosrtc) {
                cordova.plugins.iosrtc.registerGlobals();
            }
        });
        events.subscribe('call.status.isincall', function (status) {
            console.debug('call status changed to ', status);
            _this.isInCall = status;
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page.component, { page: page.title });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/brianhenry/Desktop/blindyy/call/app/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-content style="background-color: rgba(242, 242, 242, 0.4);">\n    <div id="picDiv">\n      <img src="assets/imgs/trial.png">\n    </div>\n    <div id="imgDiv">\n       <img src="assets/imgs/trial.png">\n       <div id="profileName">\n          Edward\n       </div>\n    </div>\n    <ion-list id="ionList">\n      <button menuClose ion-item detail-none  no-lines *ngFor="let p of pages" (click)="openPage(p)">\n        <img src="assets/icon/{{p.icon}}.png">        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n  <ion-footer no-border>\n    <img class="version" src="assets/imgs/index1.png">\n  </ion-footer>\n\n</ion-menu>\n<ion-nav #content [root]="rootPage" [ngClass]="{isInCall: isInCall, isNotInCall: !isInCall}"></ion-nav>\n'/*ion-inline-end:"/Users/brianhenry/Desktop/blindyy/call/app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__services__["c" /* CallService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_6__components__["b" /* CallModalTrigger */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(15);
// user account page
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountPage = (function () {
    function AccountPage(loginService) {
        this.loginService = loginService;
        this.user = null;
        this.user = this.loginService.user;
    }
    AccountPage.prototype.logout = function () {
        this.loginService.logout();
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-account',template:/*ion-inline-start:"/Users/brianhenry/Desktop/blindyy/call/app/src/pages/account/account.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<ion-title>\n			Account\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<h2>{{user.name || user.username}}</h2>\n	<div class="account-image" ng-click="updateImage()">\n		<user-image [contact]=user></user-image>\n	</div>\n	<br><br><br>\n	<button ion-button (click)="logout()" block outline color="primary">Logout</button>\n</ion-content>'/*ion-inline-end:"/Users/brianhenry/Desktop/blindyy/call/app/src/pages/account/account.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["f" /* LoginService */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 447:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_marked__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_marked__);
// handles incoming and outgoing text messages
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatService = (function () {
    // manages chats
    function ChatService(zone, ref, socket, events, contactService) {
        var _this = this;
        this.zone = zone;
        this.ref = ref;
        this.socket = socket;
        this.events = events;
        this.contactService = contactService;
        this.user = null;
        this.chats = [];
        var evts = events;
        __WEBPACK_IMPORTED_MODULE_4_marked__["setOptions"]({
            sanitize: true,
            gfm: true
        });
        // triggered after a successfull login
        this.events.subscribe('user.login', function (data) {
            _this.user = data.user;
        });
        var self = this;
        // broadcast an event when there is a chat mesasage recieved
        // another way to do this would be to forward the message directly
        this.socket.on('chat-message', function (name, message) {
            console.debug('SOCKET chat-message');
            var have = false;
            for (var _i = 0, _a = self.chats; _i < _a.length; _i++) {
                var chat = _a[_i];
                if (message.chat == chat.id) {
                    have = true;
                    break;
                }
            }
            // get a new list of chats if we are missing something
            if (!have) {
                console.debug('getting new chats...');
                self.socket.emit('chats');
            }
            self.updateLastMessage(message.chat, message);
            evts.publish('chat-message', name, message);
        });
        // triggered where there is an update to the chat data. like adding a user to the chat
        this.socket.on('chat', function (chat) {
            //zone.run(() => {
            console.debug('got a new chat update:', chat);
            for (var _i = 0, _a = _this.chats; _i < _a.length; _i++) {
                var c = _a[_i];
                if (c.id == chat.id) {
                    c.users = chat.users;
                    c.lastMessage = chat.lastMessage;
                    c.lastDate = chat.lastDate;
                    if (__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Config */].markdown) {
                        c.lastMarked = self.parseMessage(chat.lastMessage);
                    }
                    _this.processChats();
                    return;
                }
            }
            _this.chats.push(chat);
            _this.processChats();
            //});
        });
        this.socket.on('chats', function (chats) {
            zone.run(function () {
                console.debug('Chats: ', chats);
                // merge new chats to the chat array but dont replace the array itself
                for (var _i = 0, chats_1 = chats; _i < chats_1.length; _i++) {
                    var chat = chats_1[_i];
                    var i = true;
                    for (var _a = 0, _b = _this.chats; _a < _b.length; _a++) {
                        var c = _b[_a];
                        if (c.id == chat.id) {
                            i = false;
                            break;
                        }
                    }
                    if (i) {
                        _this.chats.push(chat);
                    }
                }
                if (__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Config */].markdown) {
                    for (var _c = 0, _d = _this.chats; _c < _d.length; _c++) {
                        var chat = _d[_c];
                        chat.lastMarked = _this.parseMessage(chat.lastMessage);
                    }
                }
                _this.processChats();
            });
        });
    }
    ChatService.prototype.parseMessage = function (message) {
        if (!message) {
            return null;
        }
        console.debug('parsing ', message);
        var m = '';
        if (__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Config */].markdown) {
            m = __WEBPACK_IMPORTED_MODULE_4_marked__["parse"](message);
        }
        m = m ? m.replace(/\<img.+\">/i, 'Image') : null;
        m = m.replace(/(<([^>]+)>)/ig, '');
        return m;
    };
    ChatService.prototype.processChats = function () {
        for (var _i = 0, _a = this.chats; _i < _a.length; _i++) {
            var chat = _a[_i];
            chat.name = this.chatName(chat);
        }
        this.chats.sort(this.sortChats);
        this.ref.tick();
    };
    // update the last message send for the chats view
    ChatService.prototype.updateLastMessage = function (id, message, date) {
        if (date === void 0) { date = new Date; }
        for (var c in this.chats) {
            var chat = this.chats[c];
            if (chat.id == id) {
                chat.lastMessage = message ? message.message : 'Attachment';
                chat.lastDate = date;
                if (__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Config */].markdown) {
                    chat.lastMarked = this.parseMessage(chat.lastMessage);
                }
                break;
            }
        }
        this.chats.sort(this.sortChats);
    };
    ChatService.prototype.getChatById = function (id) {
        for (var _i = 0, _a = this.chats; _i < _a.length; _i++) {
            var chat = _a[_i];
            if (chat.id == id) {
                return chat;
            }
        }
        return null;
    };
    ChatService.prototype.getChatByContact = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            for (var _i = 0, _a = _this.chats; _i < _a.length; _i++) {
                var chat = _a[_i];
                if (chat.users.length == 2 && chat.users.indexOf(_this.user.id) > -1 && chat.users.indexOf(id) > -1) {
                    resolve(chat);
                    return;
                }
            }
            _this.socket.promise('get-contact-chat', { id: id }).then(function (chat) {
                _this.chats.push(chat);
                _this.chats.sort(_this.sortChats);
                resolve(chat);
            });
        });
    };
    // sort cchats by last message
    ChatService.prototype.sortChats = function (a, b) {
        if (!a) {
            return -1;
        }
        if (!b) {
            return 1;
        }
        if (new Date(a.lastDate) > new Date(b.lastDate)) {
            return -1;
        }
        if (new Date(a.lastDate) < new Date(b.lastDate)) {
            return 1;
        }
        return 0;
    };
    ;
    ChatService.prototype.get = function (chatId) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            _this.socket.promise('chat', {
                chat: chatId
            }).then(function (data) {
                resolve(data);
            });
        });
    };
    ChatService.prototype.addContact = function (chat, contact) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.socket.promise('add-to-chat', { chat: chat.id, contact: contact.id }).then(function (chat) {
                resolve(chat);
            });
        });
    };
    ChatService.prototype.chatName = function (chat) {
        var name = '';
        for (var _i = 0, _a = chat.users; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c == this.user.id) {
                continue;
            }
            name += (name ? ', ' : '') + (this.contactService.get(c).name || this.contactService.get(c).username);
        }
        return name;
    };
    // send a new message to another contact
    ChatService.prototype.send = function (id, message, attachment) {
        console.debug('send chatid:', id);
        // @todo: make a promise so we know when it has fully been sent
        this.socket.emit('message', id, message, attachment);
    };
    // @todo: typing
    ChatService.prototype.typing = function () {
    };
    return ChatService;
}());
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_1____["h" /* SocketService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1____["e" /* ContactService */]])
], ChatService);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Provider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pop_pop__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Provider = (function () {
    function Provider(popover) {
        this.popover = popover;
    }
    Provider.prototype.showPopover = function (type, event) {
        var popOver = this.popover.create(__WEBPACK_IMPORTED_MODULE_2__pages_pop_pop__["a" /* PopPage */], { type: type });
        popOver.present({
            ev: event
        });
    };
    return Provider;
}());
Provider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({}),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */]])
], Provider);

//# sourceMappingURL=provider.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(226);
// handle login and authenticaion for users
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(contactService, platform, app, audio, socket, events, alertCtrl, storage) {
        var _this = this;
        this.contactService = contactService;
        this.platform = platform;
        this.audio = audio;
        this.socket = socket;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.user = null;
        this.playLoginSound = true;
        this.complete = null;
        this.complete = this.makeComplete();
        this.nav = app.getActiveNav();
        // authenticate using jwt once socket is connected
        this.socket.on('connect', function (socket) {
            _this.auth(false);
        });
        // unused
        this.socket.on('disconnect', function (socket) {
        });
        // triggered when the user logs in
        this.events.subscribe('user.login', function (data) {
            _this.user = data.user;
        });
    }
    // authenticate a user using jwt
    LoginService.prototype.auth = function (force) {
        var _this = this;
        var complete = function (token) {
            console.debug('REAL TOKEN', token);
            if (token) {
                token = token.token;
            }
            console.debug('token', token);
            if (!_this.user) {
                if (!token) {
                    _this.events.publish('auth', false);
                    return _this.go();
                }
            }
            var done = function () {
                _this.socket.removeListener('auth_error', error);
                _this.socket.removeListener('login_successful', success);
            };
            var error = function (message) {
                done();
                _this.storage.remove('token');
                _this.go();
                console.log('error auth.');
            };
            var success = function (user) {
                console.debug('Auth: ', user);
                done();
                if (_this.playLoginSound) {
                    _this.playLoginSound = false;
                    _this.audio.play('login');
                }
                _this.events.publish('user.login', {
                    user: user
                });
            };
            _this.socket.emit('auth', token);
            _this.socket.on('login_successful', success);
            _this.socket.on('auth_error', error);
        };
        this.storage.get('token').then(complete).catch(complete);
    };
    // go to the login page with no transitions
    LoginService.prototype.go = function () {
        //this.nav.setRoot(LoginPage, {}, {animate: false})
        //this.nav.push(LoginPage, {}, {animate: false, direction: 'forward'});
    };
    // perform a login from the log in page
    LoginService.prototype.login = function (user) {
        var _this = this;
        this.complete = this.makeComplete();
        return new Promise(function (resolve, reject) {
            var done = function () {
                _this.socket.removeListener('login_error', error);
                _this.socket.removeListener('login_successful', success);
            };
            var error = function (message) {
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: message,
                    buttons: ['OK']
                });
                alert.present();
                done();
                //reject('login fail');
            };
            var success = function (user, token) {
                console.debug('Login: ', user);
                if (token) {
                    _this.storage.set('token', { token: token });
                }
                done();
                _this.events.publish('user.login', {
                    user: user
                });
                if (_this.playLoginSound) {
                    _this.playLoginSound = false;
                    _this.audio.play('login');
                }
                resolve();
            };
            _this.socket.on('login_error', error);
            _this.socket.on('login_successful', success);
            _this.socket.emit('login', user);
        });
    };
    // log the user out
    LoginService.prototype.logout = function () {
        this.playLoginSound = true;
        this.storage.remove('token');
        this.user = null;
        //$rootScope.contacts.length = 0;
        this.contactService.contacts.length = 0;
        this.events.publish('user.logout');
        this.go();
        this.socket.emit('logout', null);
        this.complete = this.makeComplete();
    };
    // a promise that fires once we have logged in
    // used by controllers
    LoginService.prototype.makeComplete = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.user) {
                resolve(self.user);
                return;
            }
            var cleanA = self.events.subscribe('user.login', function (data) {
                //cleanA(); cleanB();
                resolve(data.user);
            });
            var cleanB = self.events.subscribe('auth', function () {
                //cleanA(); cleanB();
                //reject('auth fail');
            });
        });
    };
    ;
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2____["e" /* ContactService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2____["b" /* AudioService */], __WEBPACK_IMPORTED_MODULE_2____["h" /* SocketService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], LoginService);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttachmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(227);
// handle s3 uploads
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AttachmentService = (function () {
    function AttachmentService(platform, socket, http, events) {
        this.platform = platform;
        this.socket = socket;
        this.http = http;
        this.events = events;
    }
    AttachmentService.prototype.upload = function (up) {
        //var fileReader = new FileReader();
        //fileReader.readAsDataURL(file);
        var _this = this;
        // if its a video, we need to make a thumbnail
        /*
        if (file.indexOf('video') > -1) {
            let fileReader = new FileReader();
            fileReader.onload = () => {
                let blob = new Blob([fileReader.result], {type: file.type});
                let url = URL.createObjectURL(blob);
                let video = document.createElement('video');
                let timeupdate = () => {
                    if (snapImage()) {
                        video.removeEventListener('timeupdate', timeupdate);
                        video.pause();
                    }
                };
                video.addEventListener('loadeddata', () => {
                    if (snapImage()) {
                        video.removeEventListener('timeupdate', timeupdate);
                    }
                });
                let snapImage = () => {
                    let canvas = document.createElement('canvas');
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                    let image = canvas.toDataURL();
                    let success = image.length > 100000;
                    if (success) {
                        let img = document.createElement('img');
                        img.src = image;
                    }
                    return success;
                };

                video.addEventListener('timeupdate', timeupdate);
                video.preload = 'metadata';
                video.src = url;
                video.muted = true;
                video.play();

                fileReader.readAsArrayBuffer(file);
            }

        }

        */
        return new Promise(function (resolve, reject) {
            var request = {
                name: up.file.name,
                type: up.file.type,
                chat: up.chat.id
            };
            var self = _this;
            _this.socket.promise('s3-sign', request).then(function (res) {
                console.debug('got response: ', res);
                self.http.put(res.signed, up.file).subscribe(function (data) {
                    resolve({
                        url: res.url,
                        type: up.file.type,
                        name: up.file.name,
                        id: res.id
                    });
                }, function (err) { return reject('Error uploading file: ' + err); }, function () { return console.log('Successfully uploaded file: ', res); });
                /* old way of doing things for reference

                const xhr = new XMLHttpRequest();
                xhr.open('PUT', res.signedRequest);
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            resolve(res.url);
                        } else {
                            reject('error uploading');
                        }
                    }
                };
                xhr.send(file);
                */
            });
        });
    };
    return AttachmentService;
}());
AttachmentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services__["h" /* SocketService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], AttachmentService);

//# sourceMappingURL=attachment.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatsPage = (function () {
    function ChatsPage(zone, events, chatService, navCtrl, loginService) {
        this.zone = zone;
        this.events = events;
        this.chatService = chatService;
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        // contacts / chats list state
        loginService.complete.then(function (user) {
            console.debug('login complete');
            if (!user.id) {
                loginService.go();
            }
        }, function () {
            console.debug('login fail');
            loginService.go();
        });
    }
    // go to accounts
    ChatsPage.prototype.account = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2____["a" /* AccountPage */], {}, { animate: true, direction: 'forward' });
    };
    // go to a chat
    ChatsPage.prototype.chat = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2____["b" /* ChatPage */], { chatId: id }, { animate: true, direction: 'forward' });
    };
    ChatsPage.prototype.goContacts = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2____["d" /* ContactsPage */], {}, { animate: true, direction: 'back' });
    };
    return ChatsPage;
}());
ChatsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-chats',template:/*ion-inline-start:"/Users/brianhenry/Desktop/blindyy/call/app/src/pages/chats/chats.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<ion-buttons start>\n			<button (click)="goContacts()" ion-button icon-only>\n				<ion-icon name="contacts"></ion-icon>\n			</button>\n		</ion-buttons>\n		<ion-title>\n			Chats\n		</ion-title>\n		<ion-buttons end>\n			<button (click)="account()" ion-button icon-only>\n				<ion-icon name="settings"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list class="chat-list">\n		<ion-item (click)="chat(chatItem.id)" class="item-remove-animate item-avatar item-icon-right online" *ngFor="let chatItem of chatService.chats" type="item-text-wrap">\n			<ion-avatar item-left>\n				<user-image [contact]=chatItem.users [hideSelf]=true></user-image>\n    		</ion-avatar>\n			<h2>{{chatItem.name}}</h2>\n			<p class="chat-text" [innerHTML]="chatItem.lastMarked || chatItem.lastMessage || \'&nbsp;\'"></p>\n			<span class="last-time" *ngIf="chatItem.lastDate">{{chatItem.lastDate | amTimeAgo:true}}</span>\n		</ion-item>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/brianhenry/Desktop/blindyy/call/app/src/pages/chats/chats.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_3__services__["d" /* ChatService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services__["f" /* LoginService */]])
], ChatsPage);

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(33);
// login and signup page
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, loginService) {
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.focus = false;
        this.input = false;
        this.data = {
            username: null,
            password: null
        };
        this.inputs = [
            { title: 'Login',
                inputs: [
                    { name: 'Username', value: '', type: 'text' },
                    { name: 'Password', value: '', type: 'password' }
                ] },
            { title: 'Sign up',
                inputs: [
                    { name: 'Email address', value: '', type: 'email' },
                    { name: 'Username', value: '', type: 'text' },
                    { name: 'Phone number', value: '', type: 'number' },
                    { name: 'Password', value: '', type: 'password' }
                ] }
        ];
        // forward to chats if we are already logged in
        this.Inputs = this.inputs[0];
        loginService.complete.then(function (user) {
            // we dont need to do this since its handled in the login function, but just in case you want to do it here
            //this.navCtrl.push(ChatsPage, {}, {animate: true, direction: 'forward'});
        });
    }
    LoginPage.prototype.goTo = function (index) {
        this.Inputs = this.inputs[index];
    };
    LoginPage.prototype.indexAction = function (action) {
        switch (action) {
            case "signup":
                if (!this.validateEmail(this.Inputs.inputs[0].value))
                    this.error = "Please enter a valid email address.";
                else if (!this.validCountryPhone(this.Inputs.inputs[2].value))
                    this.error = "Please enter a valid phone number.";
                else if (this.Inputs.inputs[1].value == this.Inputs.inputs[3].value)
                    this.error = "Your username  should not be your password.";
                else if (this.Inputs.inputs[3].value.length < 8)
                    this.error = "Your password should have more than 7 characters.";
                break;
            default:
                // code...
                break;
        }
    };
    //validate email
    LoginPage.prototype.validateEmail = function (email) {
        var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        return re.test(email);
    };
    //validate phone number
    LoginPage.prototype.validCountryPhone = function (phone) {
        phone = '+254' + phone;
        try {
            // this.phoneUtil.isValidNumber(this.phoneUtil.parse(phone))
            return true;
        }
        catch (e) {
            return false;
        }
    };
    // begin the login
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.data).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3____["c" /* ChatsPage */], {}, { animate: true, direction: 'forward' });
        }, function (data) {
            console.log(data);
        });
    };
    ;
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/brianhenry/Desktop/blindyy/call/app/src/pages/login/login.html"*/'\n<ion-content class="ioncontent">\n <img src="assets/imgs/index.png">\n <ion-list padding>\n  <div *ngIf="error" class="errorMessage" no-lines>\n    <span>*</span> {{error}}\n  </div>\n   <ion-item *ngFor="let input of Inputs.inputs" class=“ionItem” style="border: none;"  no-lines>\n     <ion-label floating color="primary">{{input.name}}</ion-label>\n     <ion-input (ionFocus)="error = undefined" type="{{input.type}}" [(ngModel)]="input.value"></ion-input>\n   </ion-item>\n   <ion-item style="margin-top: 20px; border: none" no-lines>\n     <button (click)="indexAction(\'login\')" *ngIf="Inputs.title ==\'Login\' " [disabled]="!Inputs.inputs[0].value || Inputs.inputs[0].value.trim() == \'\' || !Inputs.inputs[1].value || Inputs.inputs[1].value.trim() == \'\'">Login</button>\n     <button (click)="indexAction(\'signup\')" *ngIf="Inputs.title ==\'Sign up\' " [disabled]="!Inputs.inputs[0].value || Inputs.inputs[0].value.trim() == \'\' || !Inputs.inputs[1].value || Inputs.inputs[1].value.trim() == \'\' || !Inputs.inputs[2].value || !Inputs.inputs[3].value || Inputs.inputs[3].value.trim() == \'\' ">Sign up</button>\n   </ion-item>\n    <ion-item *ngIf="Inputs.title ==\'Login\' "  style="margin-top: -10px;border: none;" no-lines>\n     <button class="fgPass">Forgot password?</button>\n   </ion-item>\n   <ion-item style="border: none;" no-lines>\n     <button ion-item detail-none (click)="goTo(1)" *ngIf="Inputs.title ==\'Login\' " class="signup">Don\'t have an account? Sign up!</button>\n     <button ion-item detail-none (click)="goTo(0)" *ngIf="Inputs.title !==\'Login\' " class="signup">Already have an account? Login!</button>\n   </ion-item>\n </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/brianhenry/Desktop/blindyy/call/app/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services__["f" /* LoginService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_marked__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_marked__);
// chat detail page
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatPage = (function () {
    function ChatPage(sanitizer, provider, attachment, contactService, modalCtrl, events, params, loginService, chatService, audioService) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.provider = provider;
        this.attachment = attachment;
        this.contactService = contactService;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.loginService = loginService;
        this.chatService = chatService;
        this.audioService = audioService;
        this.modal = null;
        this.animateChat = false;
        this.sending = false;
        this.messages = [];
        this.data = {
            message: null,
            attachment: null,
            attachmentData: null
        };
        this.chat = {
            id: null,
            users: [],
            name: '',
            messages: []
        };
        this.messageHandleWrap = null;
        this.attachments = __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* Config */].attachments;
        console.log(contactService.user.id);
        this.messages = [
            { from: 'Brian', message: "Well and good i don't really care what will happen to you." },
            { from: 'Henry', message: "Well and good i don't really care what will happen to you." },
            { from: 'Brian', message: "Well and good i don't.", attachment: { url: "assets/imgs/trial.png", type: 'image' } },
            { from: 'Henry', message: "Well and good i don't.", attachment: { url: "assets/imgs/papa.mkv", type: 'video' } },
        ];
        __WEBPACK_IMPORTED_MODULE_6_marked__["setOptions"]({
            sanitize: true,
            gfm: true
        });
        this.chat = this.chatService.getChatById(params.get('chatId'));
        // if we refreshed on this page, then go back to chats
        if (!loginService.user) {
            loginService.go();
            return;
        }
        // get chat details
        this.chatService.get(params.get('chatId')).then(function (data) {
            console.debug('Recieved chat messages: ', data);
            _this.chat.messages = data.messages;
            if (data && data.messages && data.messages.length) {
                data.messages.map(function (m) {
                    _this.addMessage(m);
                });
            }
            setTimeout(function () {
                _this.content.scrollToBottom(0);
            });
            setTimeout(function () {
                _this.content.scrollToBottom(0);
                _this.animateChat = true;
            }, 10);
        });
    }
    ChatPage.prototype.handleMessage = function (name, data) {
        var _this = this;
        console.debug('new message: ', name, data);
        if (data.chat == this.chat.id) {
            this.addMessage(data);
            this.content.scrollToBottom(300);
            setTimeout(function () {
                _this.content.scrollToBottom(300);
                _this.animateChat = true;
            }, 100);
            this.audioService.play('message-received-front');
        }
        else {
            this.audioService.play('message-received-back');
        }
    };
    ChatPage.prototype.addMessage = function (message) {
        this.messages.push(message);
        if (__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* Config */].markdown) {
            message.marked = message.message ? __WEBPACK_IMPORTED_MODULE_6_marked__["parse"](message.message) : null;
        }
        var prev = null;
        for (var _i = 0, _a = this.messages; _i < _a.length; _i++) {
            var message_1 = _a[_i];
            if (message_1.from != prev) {
                prev = message_1.from;
                message_1.first = true;
            }
        }
    };
    // send a message
    ChatPage.prototype.send = function () {
        var _this = this;
        var check = false;
        if (__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* Config */].markdown) {
            check = this.data.attachmentData || (this.data.message && __WEBPACK_IMPORTED_MODULE_6_marked__["parse"](this.data.message));
        }
        else {
            check = this.data.attachmentData || this.data.message;
        }
        if (!check) {
            console.debug('No message to send: ', this.data.message);
            return;
        }
        this.sending = true;
        //this.blurInput(null);
        console.debug('Sending message ', this.data.message);
        this.audioService.play('message-sent');
        this.chatService.send(this.chat.id, this.data.message, this.data.attachmentData);
        this.addMessage({
            attachment: this.data.attachmentData,
            message: this.data.message,
            from: this.loginService.user.id
        });
        this.chatService.updateLastMessage(this.chat.id, this.data.message);
        this.data.message = null;
        this.data.attachmentData = null;
        this.data.attachment = '';
        setTimeout(function () {
            _this.content.scrollToBottom(300);
            _this.sending = false;
        }, 100);
    };
    ;
    // add a contact to the chat
    ChatPage.prototype.addContact = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components__["c" /* ContactAddModal */]);
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                _this.chatService.addContact(_this.chat, data);
            }
        });
        modal.present();
    };
    // keep the input focused.
    // for some reason it works best if this is separate from the send function
    ChatPage.prototype.blurInput = function (e) {
        //console.log(e);
        if (!this.sending) {
            return;
        }
        setTimeout(function () {
            $('#messageBox input').focus();
        }, 10);
        setTimeout(function () {
            $('#messageBox input').focus();
        }, 1);
        $('#messageBox input').focus();
    };
    ChatPage.prototype.ngOnInit = function () {
        var _this = this;
        // watch for incoming chat events and add it to the cleanup queue
        this.messageHandleWrap = function (a, b) {
            _this.handleMessage(a, b);
        };
        this.events.subscribe('chat-message', this.messageHandleWrap);
    };
    ChatPage.prototype.ngOnDestroy = function () {
        this.events.unsubscribe('chat-message', this.messageHandleWrap);
    };
    ChatPage.prototype.upload = function (e) {
        var _this = this;
        var file = e.target.files[0];
        this.attachment.upload({
            file: file,
            chat: this.chat
        }).then(function (res) {
            _this.data.message = null;
            _this.data.attachmentData = res;
            console.debug('Uploaded file: ', res);
            _this.send();
        });
        console.debug(file);
    };
    ChatPage.prototype.play = function (e) {
        e.target.currentTime = 0;
        e.target.play();
    };
    ChatPage.prototype.pause = function (e) {
        e.target.pause();
    };
    return ChatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], ChatPage.prototype, "content", void 0);
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-chat',template:/*ion-inline-start:"/Users/brianhenry/Desktop/blindyy/call/app/src/pages/chat/chat.html"*/'\n<ion-header>\n\n  <ion-navbar color="white">\n   <img src="assets/imgs/trial.png" class="profileImage">\n    <button ion-item  detail-none no-lines class="moreIcon"  style="display: none;">\n      <ion-icon name="trash"></ion-icon>\n    </button>\n    <button (click)="provider.showPopover(\'chatOptions\', $event)" ion-item detail-none no-lines class="moreIcon" >\n      <ion-icon name="more"></ion-icon>\n    </button>\n    <button ion-item no-lines detail-none class="moreIcon">\n      <ion-icon name="call"></ion-icon>\n    </button>\n    <button ion-item no-lines detail-none class="moreIcon" >\n      <ion-icon name="videocam"></ion-icon>\n    </button>\n    <div id="online"><span class="name">Jessica <!--{{chat.name}}--></span><div>online</div></div>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="messages">\n	<ion-list class="chat" [ngClass]="{\'chat-animate-on\': animateChat}" messages>\n		<ion-item class="chat-item item-avatar item-remove-animate" type="item-text-wrap" *ngFor="let message of messages" [ngClass]="{\'chat-first\': message.first, \'chat-to\':message.from!=contactService.user.id, \'chat-from\': message.from==contactService.user.id}">\n			<ion-avatar item-right *ngIf="message.from==contactService.user.id">\n				<user-image [contact]=message.from></user-image>\n			</ion-avatar>\n			<ion-avatar item-left *ngIf="message.from!=contactService.user.id">\n				<user-image [contact]=message.from></user-image>\n			</ion-avatar>\n			<!-- not sure why this doesnt want to cooperate\n			<ion-avatar [attr.item-right]="message.from==contact.id? true : null" [attr.item-left]="message.from!=contact.id ? true : null">\n				<user-image [contact]=message.from></user-image>\n    		</ion-avatar-->\n			<div class="tail">\n				<svg width="19" height="25" viewBox="0 0 19 25"><path d="M19 25c-5.1-0.9-11.6 0-19 0 9.5-4.9 14.7-11.7 19-25C19 8.3 19 16.7 19 25z"/></svg>\n			</div>\n			<div class="chat-text">\n				<p *ngIf="!message.marked && !message.attachment">{{message.message}}</p>\n				<span class="chat-text" [innerHTML]="message.marked" *ngIf="message.marked"></span>\n				<p *ngIf="message.attachment && message.attachment.type.indexOf(\'video\') > -1">\n					<video [src]="message.attachment.url" controls (press)="play($event)" (blur)="pause($event)">\n						<source [src]="message.attachment.url" [type]="message.attachment.type">\n					</video>\n				</p>\n				<p *ngIf="message.attachment && message.attachment.type.indexOf(\'image\') > -1">\n					<img [src]="message.attachment.url">\n				</p>\n				<div class="time">\n		                  11:40 p.m\n		            </div>\n			</div>\n		</ion-item>\n	</ion-list>\n</ion-content>\n\n\n<!--<ion-footer class="bar-light message-bar" [keyboardAttach]="content">\n	<ion-toolbar>\n		<input type="file" id="attachment" (change)="upload($event)" [(ngModel)]="data.attachment" *ngIf="attachments">\n		<form (ngSubmit)="send()">\n			<ion-item>\n				<ion-input type="text" message="true" (blur)="blurInput($event)" placeholder="Say something..." [(ngModel)]="data.message" name="message" id="messageBox"></ion-input>\n			</ion-item>\n			<label for="attachment" class="attachment-link"><ion-icon name="ios-camera-outline" color="primary"></ion-icon></label>\n			<button ion-button clear class="send-button" color="primary">Send</button>\n		</form>\n	</ion-toolbar>\n</ion-footer>-->\n<ion-footer style="padding:0px;height:55px;">\n  <ion-row>\n	<button (click)="provider.showPopover(\'imageOptions\', $event)" ion-item detail-none no-lines style="width: 45px;text-align: center;padding-top: 15px;"><ion-icon name="add"></ion-icon></button>\n	<textarea no-lines ion-item style="width: 62%;height:50px;margin:0px;padding-top:20px;display: inline-block;" placeholder="Type Message here"></textarea>\n	<button ion-item no-lines  detail-none style="text-align: center;padding-top: 15px;width: 48px;margin:0px;display: inline-block;"><ion-icon name="happy"></ion-icon></button>\n	<button ion-item no-lines  detail-none style="text-align: center;padding-top: 15px;width: 48px;margin:0px;display: inline-block;"><ion-icon name="send"></ion-icon></button>\n </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/Users/brianhenry/Desktop/blindyy/call/app/src/pages/chat/chat.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2__services__["g" /* Provider */], __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AttachmentService */], __WEBPACK_IMPORTED_MODULE_2__services__["e" /* ContactService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services__["f" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__services__["d" /* ChatService */], __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AudioService */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_call__ = __webpack_require__(220);
// call modal display
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallModal = (function () {
    function CallModal(params, events, viewCtrl, callService) {
        var _this = this;
        this.events = events;
        this.viewCtrl = viewCtrl;
        this.callService = callService;
        this.events.subscribe('call.trigger.hide', function (data) {
            _this.hide();
        });
    }
    CallModal.prototype.hide = function () {
        this.events.publish('call.status.isincall', false);
        this.callService.refreshVideos();
        this.viewCtrl.dismiss();
    };
    CallModal.prototype.ngOnInit = function () {
        this.events.publish('call.status.isincall', true);
    };
    return CallModal;
}());
CallModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/brianhenry/Desktop/blindyy/call/app/src/components/call-modal/call-modal.html"*/'<ion-header>\n	<ion-navbar color="{{callService.isInCall ? \'primary\' : \'danger\'}}">\n		<ion-title>\n			<span *ngIf="callService.isAnswering">Incoming Call from <b>{{callService.contact.name || callService.contact.username}}</b></span>\n			<span *ngIf="callService.isCalling">Calling <b>{{callService.contact.name || callService.contact.username}}</b></span>\n			<span *ngIf="callService.isInCall"><b>{{callService.contact.name || callService.contact.username}}</b></span>\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content scroll="false">\n	<div class="call-buttons inCallUI">\n		<button ion-button round icon-only color="secondary" class="button-answering" *ngIf="callService.isAnswering" (click)="callService.answer()"><ion-icon name="call"></ion-icon></button>\n		<button ion-button round icon-only color="danger" class="button-answering" *ngIf="callService.isAnswering" (click)="callService.ignore()"><ion-icon name="close"></ion-icon></button>\n\n		<button ion-button round icon-only outline color="danger" class="button-calling" *ngIf="callService.isCalling" (click)="callService.cancel()"><ion-icon name="close"></ion-icon></button>\n\n		<button ion-button round icon-only outline color="light" class="button-incall" *ngIf="callService.isInCall" (click)="callService.flip()"><ion-icon name="reverse-camera"></ion-icon></button>\n		<button ion-button round icon-only outline color="danger" class="button-incall" *ngIf="callService.isInCall" (click)="callService.end()"><ion-icon name="close"></ion-icon></button>\n		<button ion-button round icon-only outline color="light" class="button-incall" *ngIf="callService.isInCall" (click)="callService.mute()">\n			<ion-icon name="mic-off" *ngIf="!callService.muted"></ion-icon>\n			<ion-icon name="mic" *ngIf="callService.muted"></ion-icon>\n		</button>\n	</div>\n	<div class="videos inCallUI">\n		<video playsinline id="remote" autoplay="true" *ngIf="callService.remoteVideo" [src]="callService.remoteVideo"></video>\n		<video playsinline id="local" muted="muted" autoplay="true" *ngIf="callService.localVideo" [src]="callService.localVideo" [ngClass]="{preview: callService.isCalling || callService.isAnswering}"></video>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/brianhenry/Desktop/blindyy/call/app/src/components/call-modal/call-modal.html"*/,
        selector: 'modal-call'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_call__["a" /* CallService */]])
], CallModal);

//# sourceMappingURL=call-modal.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(15);
// long press for small contact modal
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactModal = (function () {
    function ContactModal(viewCtrl, params, navCtrl, callService, contactService) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.navCtrl = navCtrl;
        this.callService = callService;
        this.contactService = contactService;
        this.contact = null;
    }
    ContactModal.prototype.chat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["b" /* ChatPage */], { chatId: this.contact.id }, { animate: true, direction: 'forward' });
        this.cancel();
    };
    ContactModal.prototype.call = function () {
        this.callService.triggerCall(this.contact.id);
        this.cancel();
    };
    ContactModal.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ContactModal.prototype.ngOnInit = function () {
        this.contact = this.contactService.get(this.params.get('contact').id);
    };
    return ContactModal;
}());
ContactModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/brianhenry/Desktop/blindyy/call/app/src/components/contact-modal/contact-modal.html"*/'<ion-content scroll="false">\n	<div class="contact-card">\n		<button ion-button clear icon-only  color="dark"  (click)="cancel()" class="close"><ion-icon name="close"></ion-icon></button>\n\n		<h2>{{contact.name}}</h2>\n\n		<user-image [contact]=contact></user-image>\n\n		<button ion-button round icon-only  color="secondary"  (click)="call()" class="action"><ion-icon name="call"></ion-icon></button>\n		<button ion-button round icon-only  color="danger" (click)="chat()" class="action"><ion-icon name="chatbubbles"></ion-icon></button>\n\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/brianhenry/Desktop/blindyy/call/app/src/components/contact-modal/contact-modal.html"*/,
        selector: 'modal-contact'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services__["c" /* CallService */], __WEBPACK_IMPORTED_MODULE_3__services__["e" /* ContactService */]])
], ContactModal);

//# sourceMappingURL=contact-modal.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactAddModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(15);
// add contact to a chat modeal
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactAddModal = (function () {
    function ContactAddModal(viewCtrl, modalCtrl, contactService) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.contactService = contactService;
        this.contacts = [];
        this.contacts = contactService.contacts;
    }
    ContactAddModal.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    // tap and hold contact card
    ContactAddModal.prototype.contactCard = function (contact) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components__["d" /* ContactModal */], { contact: contact });
        modal.present();
    };
    ContactAddModal.prototype.add = function (contact) {
        this.viewCtrl.dismiss(contact);
    };
    return ContactAddModal;
}());
ContactAddModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/brianhenry/Desktop/blindyy/call/app/src/components/contact-add-modal/contact-add-modal.html"*/'<ion-header>\n	<ion-navbar color="light">\n		<ion-title>\n			Add Contact to Chat\n		</ion-title>\n		<ion-buttons end>\n			<button (click)="close()" ion-button icon-only>\n				<ion-icon name="close"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list class="chat-list">\n		<ion-item (click)="add(contact)" (press)="contactCard(contact)" class="item-avatar item-icon-right" [ngClass]="{online: contact.online}" *ngFor="let contact of contacts" type="item-text-wrap">\n			<ion-avatar item-left>\n				<user-image [contact]=contact></user-image>\n    		</ion-avatar>\n			<h2>{{contact.name || contact.username}}</h2>\n		</ion-item>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/brianhenry/Desktop/blindyy/call/app/src/components/contact-add-modal/contact-add-modal.html"*/,
        selector: 'modal-add-contact'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__services__["e" /* ContactService */]])
], ContactAddModal);

//# sourceMappingURL=contact-add-modal.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_contact__ = __webpack_require__(114);
// display a user image, or set of user images
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserImage = (function () {
    function UserImage(contactService) {
        this.contactService = contactService;
        this.hideSelf = false;
        this.single = null;
        this.contacts = [];
    }
    UserImage.prototype.ngOnInit = function () {
        if (!this.contact) {
            return;
        }
        if (!(this.contact instanceof Array)) {
            this.contact = [this.contact];
        }
        for (var _i = 0, _a = this.contact; _i < _a.length; _i++) {
            var contact = _a[_i];
            var getContact = null;
            if (typeof contact == 'string') {
                getContact = this.contactService.get(contact);
                if (!getContact) {
                    continue;
                }
            }
            else {
                getContact = contact;
            }
            if (this.hideSelf && this.contactService.user.id == getContact.id) {
                continue;
            }
            if (getContact.image) {
                getContact.imagePath = 'assets/img/avatar/' + getContact.image;
            }
            this.contacts.push(getContact);
        }
        this.single = this.contacts.length > 1 ? 'multi' : 'single';
    };
    return UserImage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UserImage.prototype, "contact", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UserImage.prototype, "hideSelf", void 0);
UserImage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: '<div class="user-image-container user-img-{{single}} user-img-count{{contacts.length}}"><img src="{{c.imagePath}}" class="user-img-{{single}}" *ngFor="let c of contacts"></div>',
        selector: 'user-image'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_contact__["a" /* ContactService */]])
], UserImage);

//# sourceMappingURL=user-image.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallModalTrigger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(39);
// created to prevent circular dependencies on CallService and CallModal
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallModalTrigger = (function () {
    function CallModalTrigger(events, modalCtrl) {
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.modal = null;
        var self = this;
        this.events.subscribe('call.trigger.show', function (data) {
            console.debug('SHOWING CALL FROM EVENT');
            self.call();
        });
    }
    CallModalTrigger.prototype.call = function () {
        this.modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components__["a" /* CallModal */]);
        this.modal.present();
    };
    return CallModalTrigger;
}());
CallModalTrigger = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], CallModalTrigger);

//# sourceMappingURL=call-modal-trigger.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardAttach; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @name KeyboardAttachDirective
 * @description
 * The `keyboardAttach` directive will cause an element to float above the
 * keyboard when the keyboard shows. Currently only supports the `ion-footer` element.
 *
 * ### Notes
 * - This directive requires [Ionic Native](https://github.com/driftyco/ionic-native)
 * and the [Ionic Keyboard Plugin](https://github.com/driftyco/ionic-plugin-keyboard).
 * - Currently only tested to work on iOS.
 * - If there is an input in your footer, you will need to set
 *   `Keyboard.disableScroll(true)`.
 *
 * @usage
 *
 * ```html
 * <ion-content #content>
 * </ion-content>
 *
 * <ion-footer [keyboardAttach]="content">
 *   <ion-toolbar>
 *     <ion-item>
 *       <ion-input></ion-input>
 *     </ion-item>
 *   </ion-toolbar>
 * </ion-footer>
 * ```
 */
var KeyboardAttach = (function () {
    function KeyboardAttach(elementRef, platform, keyboard) {
        var _this = this;
        this.elementRef = elementRef;
        this.platform = platform;
        this.keyboard = keyboard;
        if (this.platform.is('cordova') && this.platform.is('ios')) {
            this.onShowSubscription = this.keyboard.onKeyboardShow().subscribe(function (e) { return _this.onShow(e); });
            this.onHideSubscription = this.keyboard.onKeyboardHide().subscribe(function () { return _this.onHide(); });
        }
    }
    KeyboardAttach.prototype.ngOnDestroy = function () {
        if (this.onShowSubscription) {
            this.onShowSubscription.unsubscribe();
        }
        if (this.onHideSubscription) {
            this.onHideSubscription.unsubscribe();
        }
    };
    KeyboardAttach.prototype.onShow = function (e) {
        var keyboardHeight = e.keyboardHeight || (e.detail && e.detail.keyboardHeight);
        this.setElementPosition(keyboardHeight);
    };
    ;
    KeyboardAttach.prototype.onHide = function () {
        this.setElementPosition(0);
    };
    ;
    KeyboardAttach.prototype.setElementPosition = function (pixels) {
        this.elementRef.nativeElement.style.paddingBottom = pixels + 'px';
        this.content.resize();
    };
    return KeyboardAttach;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('keyboardAttach'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], KeyboardAttach.prototype, "content", void 0);
KeyboardAttach = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[keyboardAttach]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */]])
], KeyboardAttach);

//# sourceMappingURL=keyboard-attach.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = 'My Friends';
        this.saturation = 34;
        this.selectedAll = true;
        this.selectedMissed = false;
        this.intensions = [
            { title: 'Just for fun', value: false },
            { title: 'Dating', value: false },
            { title: 'New friends', value: false },
            { title: 'Long term', value: false }
        ];
        this.settings = [
            { title: 'Gender', Select: 'Male' },
            { title: 'Orientation', Select: 'Straight' },
            { title: 'Education', Select: 'High school' },
            { title: 'Income', Select: '0 - 10.00' },
        ];
        var page = this.navParams.get('page');
        if (page)
            this.title = page;
    }
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/brianhenry/Desktop/blindyy/call/app/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar color="white" col-12>\n  <button ion-button id="clearBtn">Clear</button>\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <div id="title" col-4 offset-2 *ngIf="title !== \'Call History\' ">{{title}}</div>\n\n    <button *ngIf="title == \'Home\' || title == \'My Profile\' || title == \'My Matches\' " id="messages"><img src="assets/icon/message.png">\n      <span>3</span>\n    </button>\n    <button ion-item no-lines detail-none  id="editBtn">Edit</button>\n    <ion-col *ngIf="title == \'Call History\' ">\n        <ion-row   class="distinguish">\n          <ion-col col-6 [ngClass]="selectedAll?\'selected\':\'unselected\'" class="allButton" (click)="selectAll()">All</ion-col>\n          <ion-col col-6 [ngClass]="selectedMissed?\'selected\':\'unselected\'" (click)="selectMissed()">Missed</ion-col>\n        </ion-row>\n      </ion-col>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-grid style="padding:0px;height: 100%;" >\n    <ion-row style="height: 100%;">\n\n\n      <!--This is the Home searhc Part -->\n      <ion-col  *ngIf="(title == \'Home\' || title == \'Settings\') && resultFound">\n       <div class="ageDiv">\n         <span class="subtitle">Your Match Age Range</span><br/>\n         <ion-item no-lines>\n          <ion-range min="18" max="120" pin="true" [(ngModel)]="saturation" color="primary">\n            <ion-label range-left>18</ion-label>\n          </ion-range>\n        </ion-item>\n       </div>\n        <div class="ageDiv">\n         <span class="subtitle">Your Match Intentions</span><br/><br/>\n           <button *ngFor="let intension of intensions let x = index" col-6>\n            <span>{{intension.title}}</span>\n            <ion-checkbox [(ngModel)]="intensions[x].value"></ion-checkbox>\n          </button>\n       </div>\n        <div *ngFor="let setting of settings" class="othersDiv">\n          <span class="subtitle">{{setting.title}}</span>\n          <button ion-item detail-none no-lines col-6>{{setting.Select}} <img src="assets/icon/rightArrow.png"></button>\n        </div>\n        <div *ngIf="title == \'Home\' ">\n          <button ion-item detail-none  no-lines id="randomSearchBtn"> Random search</button>\n          <button ion-item detail-none  no-lines id="findSearchBtn"> Find match</button>\n        </div>\n        <button  *ngIf="title == \'Settings\' "ion-item no-lines id="updateBtn">Update</button>\n      </ion-col>\n\n <!--This is the Home match Part -->\n      <ion-col  *ngIf="title == \'Home\' && !resultFound" style="background-color: rgb(242, 242, 242);text-align: center;padding: 0px;">\n       <!-- <img src="assets/imgs/album.png">\n        -->\n        <div id="div1">\n          <div id="div2">\n            <ion-slides>\n               <ion-slide class="div3"><img src="assets/imgs/trial.png" class="imgProf"></ion-slide>\n               <ion-slide class="div3"><img src="assets/imgs/album.png" class="imgProf"></ion-slide>\n               <ion-slide class="div3"><img src="assets/imgs/index.png" class="imgProf"></ion-slide>\n          </ion-slides>\n        </div>\n      </div>\n\n      <div id="searchActions">\n       <div id="nameSearch">Jessica</div>\n       <div> 22 years old / female / straight</div><br/>\n       <button style="color:white;font-size:16px;">Reject</button>\n       <button style="color:white;font-size:16px;background-color: #DE127A; margin-left: 5%">Accept</button>\n      </div>\n       \n      </ion-col>\n\n\n      <!-- My Matches !-->\n  <ion-col style="background-color: #F8F8F9;"  *ngIf="title == \'My Matches\' ">\n        <div id="searchDiv">\n           <ion-icon name="search" style="padding-left: 3px;"></ion-icon>\n           <input placeholder="search" />\n           <button ><ion-icon name="close"></ion-icon></button>\n        </div>\n        <ion-list>\n          <button ion-item  detail-none style="border-bottom:1px solid rgba(138, 140, 138,0.1); background-color: rgba(211, 59, 160 ,0.2);">\n            <img class="img blurredImage" src="assets/imgs/trial.png" >\n            <img class="status" src="assets/icon/online.png" />\n            <div style="position: absolute;top:10px;left:80px;width:76%;">\n              <div class="time">11.25 am</div>\n              <div class="name">Jane</div>\n              <div class="message">Hey! How was dinner yesterday?</div>\n            </div>\n          </button>         \n        </ion-list>\n      </ion-col>\n\n\n      <!--This is the friends part -->\n      <ion-col style="background-color: #F8F8F9;" *ngIf="title == \'My Friends\' ">\n        <div id="searchDiv">\n           <ion-icon name="search" style="padding-left: 3px;"></ion-icon>\n           <input placeholder="search" />\n           <button ><ion-icon name="close"></ion-icon></button>\n        </div>\n        <ion-list>\n          <button ion-item detail-none  style="border-bottom:1px solid rgba(138, 140, 138,0.1); background: rgba(211, 59, 160 ,0.2);">\n            <img class="img" src="assets/imgs/trial.png">\n            <img class="status" src="assets/icon/online.png" />\n            <div style="position: absolute;top:10px;left:80px;width:76%;">\n              <div class="time">11.25 am</div>\n              <div class="name">Jane <span class="unreadText">3</span></div>\n              <div class="message">Hey! How was dinner yesterday?</div>\n            </div>\n          </button>\n          \n        </ion-list>\n      </ion-col>\n\n       <!--This is the call history part -->\n      <ion-col style="background-color: #F8F8F9;" *ngIf="title == \'Call History\' ">\n        <div id="searchDiv">\n           <ion-icon name="search" style="padding-left: 3px;"></ion-icon>\n           <input placeholder="search" />\n           <button ><ion-icon name="close"></ion-icon></button>\n        </div>\n        <ion-list>\n          <button ion-item detail-none style="border-bottom:1px solid rgba(138, 140, 138,0.1); ">\n            <img class="smalDel" src="assets/icon/delete.png">\n            <img class="img" src="assets/imgs/trial.png">\n            <div style="position: absolute;top:10px;left:110px;width:70%;">\n              <div class="name">Jane </div>\n              <div class="time">Yesterday</div>\n              <div class="message"><ion-icon name="videocam" class="mediaIcon"></ion-icon> Outgoing</div>\n            </div>\n          </button>\n           <button ion-item detail-none style="border-bottom:1px solid rgba(138, 140, 138,0.1); ">\n            <img class="smalDel" src="assets/icon/delete.png">\n            <img class="img" src="assets/imgs/trial.png">\n            <div style="position: absolute;top:10px;left:110px;width:70%;">\n              <div class="name">Jane </div>\n              <div class="time">11.25 am</div>\n              <div class="message"><ion-icon name="call" class="mediaIcon"></ion-icon>Outgoing</div>\n            </div>\n          </button>\n          \n        </ion-list>\n      </ion-col>\n\n       <!--This is the my profile part -->\n      <ion-col *ngIf="title == \'My Profile\' " style="text-align: center;padding:0px;background-color: rgb(232, 232, 232);height: 100%;">\n       <div id="picDiv" style="height:150px">\n            <img src="assets/imgs/trial.png">\n        </div>\n        <div id="imgDiv" class="profileImage">\n           <img src="assets/imgs/trial.png" style="display: none;">\n           <img src="assets/imgs/upload.png">\n           <div id="profileName" style="border: none;">\n              Edward\n           </div>\n           <button style="display: none;" id="editBtn" no-lines detail-none  ion-item>Edit profile</button>\n           <div style="text-align: center;">\n             <button  id="morePhotos" no-lines >More Photos</button>\n           </div>\n           <div id="bio">\n             <strong>Bio: </strong><br/>\n             <textarea placeholder="Write something about yourself here." ></textarea >\n           </div>\n        </div>\n         <div id="myPhotos">\n             <span>My photos</span><br><br>\n             <div style="margin:0px;width:95% ;text-align: center;">\n               <img src="assets/imgs/trial.png">\n             </div>\n           </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<!--archive and delete button-->\n<ion-footer  *ngIf="title == \'My Friends\' ">\n  <button ion-item detail-none  class="footerBtn">Archive</button>\n  <button ion-item detail-none  class="footerBtn" style="text-align:right">Delete</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/brianhenry/Desktop/blindyy/call/app/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__(15);
// display list of contacts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactsPage = (function () {
    function ContactsPage(chatService, modalCtrl, navCtrl, loginService, contactService) {
        this.chatService = chatService;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.contactService = contactService;
        // contacts / chats list state
        loginService.complete.then(function (user) {
            console.debug('login complete');
            if (!user.id) {
                loginService.go();
            }
        }, function () {
            console.debug('login faile');
            loginService.go();
        });
        console.debug('Contacts: ', contactService.contacts);
    }
    // tap and hold contact card
    ContactsPage.prototype.contactCard = function (contact) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components__["d" /* ContactModal */], { contact: contact });
        modal.present();
    };
    // go to accounts
    ContactsPage.prototype.account = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2____["a" /* AccountPage */], {}, { animate: true, direction: 'forward' });
    };
    // go to a chat
    ContactsPage.prototype.chat = function (id) {
        var _this = this;
        this.chatService.getChatByContact(id).then(function (chat) {
            console.debug('Pushing to chat: ', chat);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2____["b" /* ChatPage */], { chatId: chat.id }, { animate: true, direction: 'forward' });
        });
    };
    ContactsPage.prototype.goChats = function (id) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2____["c" /* ChatsPage */], {}, { animate: true, direction: 'forward' });
    };
    return ContactsPage;
}());
ContactsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contacts',template:/*ion-inline-start:"/Users/brianhenry/Desktop/blindyy/call/app/src/pages/contacts/contacts.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<ion-title>\n			Contacts\n		</ion-title>\n		<ion-buttons end>\n			<button (click)="goChats()" ion-button icon-only>\n				<ion-icon name="chatbubbles"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list class="chat-list">\n		<ion-item (click)="contactCard(contact)" class="item-remove-animate item-avatar item-icon-right" [ngClass]="{online: contact.online}" *ngFor="let contact of contactService.contacts" type="item-text-wrap">\n			<ion-avatar item-left>\n				<user-image [contact]=contact></user-image>\n    		</ion-avatar>\n			<h2>{{contact.name || contact.username}}</h2>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/brianhenry/Desktop/blindyy/call/app/src/pages/contacts/contacts.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services__["d" /* ChatService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services__["f" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__services__["e" /* ContactService */]])
], ContactsPage);

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 229,
	"./af.js": 229,
	"./ar": 230,
	"./ar-dz": 231,
	"./ar-dz.js": 231,
	"./ar-kw": 232,
	"./ar-kw.js": 232,
	"./ar-ly": 233,
	"./ar-ly.js": 233,
	"./ar-ma": 234,
	"./ar-ma.js": 234,
	"./ar-sa": 235,
	"./ar-sa.js": 235,
	"./ar-tn": 236,
	"./ar-tn.js": 236,
	"./ar.js": 230,
	"./az": 237,
	"./az.js": 237,
	"./be": 238,
	"./be.js": 238,
	"./bg": 239,
	"./bg.js": 239,
	"./bm": 240,
	"./bm.js": 240,
	"./bn": 241,
	"./bn.js": 241,
	"./bo": 242,
	"./bo.js": 242,
	"./br": 243,
	"./br.js": 243,
	"./bs": 244,
	"./bs.js": 244,
	"./ca": 245,
	"./ca.js": 245,
	"./cs": 246,
	"./cs.js": 246,
	"./cv": 247,
	"./cv.js": 247,
	"./cy": 248,
	"./cy.js": 248,
	"./da": 249,
	"./da.js": 249,
	"./de": 250,
	"./de-at": 251,
	"./de-at.js": 251,
	"./de-ch": 252,
	"./de-ch.js": 252,
	"./de.js": 250,
	"./dv": 253,
	"./dv.js": 253,
	"./el": 254,
	"./el.js": 254,
	"./en-au": 255,
	"./en-au.js": 255,
	"./en-ca": 256,
	"./en-ca.js": 256,
	"./en-gb": 257,
	"./en-gb.js": 257,
	"./en-ie": 258,
	"./en-ie.js": 258,
	"./en-nz": 259,
	"./en-nz.js": 259,
	"./eo": 260,
	"./eo.js": 260,
	"./es": 261,
	"./es-do": 262,
	"./es-do.js": 262,
	"./es-us": 263,
	"./es-us.js": 263,
	"./es.js": 261,
	"./et": 264,
	"./et.js": 264,
	"./eu": 265,
	"./eu.js": 265,
	"./fa": 266,
	"./fa.js": 266,
	"./fi": 267,
	"./fi.js": 267,
	"./fo": 268,
	"./fo.js": 268,
	"./fr": 269,
	"./fr-ca": 270,
	"./fr-ca.js": 270,
	"./fr-ch": 271,
	"./fr-ch.js": 271,
	"./fr.js": 269,
	"./fy": 272,
	"./fy.js": 272,
	"./gd": 273,
	"./gd.js": 273,
	"./gl": 274,
	"./gl.js": 274,
	"./gom-latn": 275,
	"./gom-latn.js": 275,
	"./gu": 276,
	"./gu.js": 276,
	"./he": 277,
	"./he.js": 277,
	"./hi": 278,
	"./hi.js": 278,
	"./hr": 279,
	"./hr.js": 279,
	"./hu": 280,
	"./hu.js": 280,
	"./hy-am": 281,
	"./hy-am.js": 281,
	"./id": 282,
	"./id.js": 282,
	"./is": 283,
	"./is.js": 283,
	"./it": 284,
	"./it.js": 284,
	"./ja": 285,
	"./ja.js": 285,
	"./jv": 286,
	"./jv.js": 286,
	"./ka": 287,
	"./ka.js": 287,
	"./kk": 288,
	"./kk.js": 288,
	"./km": 289,
	"./km.js": 289,
	"./kn": 290,
	"./kn.js": 290,
	"./ko": 291,
	"./ko.js": 291,
	"./ky": 292,
	"./ky.js": 292,
	"./lb": 293,
	"./lb.js": 293,
	"./lo": 294,
	"./lo.js": 294,
	"./lt": 295,
	"./lt.js": 295,
	"./lv": 296,
	"./lv.js": 296,
	"./me": 297,
	"./me.js": 297,
	"./mi": 298,
	"./mi.js": 298,
	"./mk": 299,
	"./mk.js": 299,
	"./ml": 300,
	"./ml.js": 300,
	"./mr": 301,
	"./mr.js": 301,
	"./ms": 302,
	"./ms-my": 303,
	"./ms-my.js": 303,
	"./ms.js": 302,
	"./my": 304,
	"./my.js": 304,
	"./nb": 305,
	"./nb.js": 305,
	"./ne": 306,
	"./ne.js": 306,
	"./nl": 307,
	"./nl-be": 308,
	"./nl-be.js": 308,
	"./nl.js": 307,
	"./nn": 309,
	"./nn.js": 309,
	"./pa-in": 310,
	"./pa-in.js": 310,
	"./pl": 311,
	"./pl.js": 311,
	"./pt": 312,
	"./pt-br": 313,
	"./pt-br.js": 313,
	"./pt.js": 312,
	"./ro": 314,
	"./ro.js": 314,
	"./ru": 315,
	"./ru.js": 315,
	"./sd": 316,
	"./sd.js": 316,
	"./se": 317,
	"./se.js": 317,
	"./si": 318,
	"./si.js": 318,
	"./sk": 319,
	"./sk.js": 319,
	"./sl": 320,
	"./sl.js": 320,
	"./sq": 321,
	"./sq.js": 321,
	"./sr": 322,
	"./sr-cyrl": 323,
	"./sr-cyrl.js": 323,
	"./sr.js": 322,
	"./ss": 324,
	"./ss.js": 324,
	"./sv": 325,
	"./sv.js": 325,
	"./sw": 326,
	"./sw.js": 326,
	"./ta": 327,
	"./ta.js": 327,
	"./te": 328,
	"./te.js": 328,
	"./tet": 329,
	"./tet.js": 329,
	"./th": 330,
	"./th.js": 330,
	"./tl-ph": 331,
	"./tl-ph.js": 331,
	"./tlh": 332,
	"./tlh.js": 332,
	"./tr": 333,
	"./tr.js": 333,
	"./tzl": 334,
	"./tzl.js": 334,
	"./tzm": 335,
	"./tzm-latn": 336,
	"./tzm-latn.js": 336,
	"./tzm.js": 335,
	"./uk": 337,
	"./uk.js": 337,
	"./ur": 338,
	"./ur.js": 338,
	"./uz": 339,
	"./uz-latn": 340,
	"./uz-latn.js": 340,
	"./uz.js": 339,
	"./vi": 341,
	"./vi.js": 341,
	"./x-pseudo": 342,
	"./x-pseudo.js": 342,
	"./yo": 343,
	"./yo.js": 343,
	"./zh-cn": 344,
	"./zh-cn.js": 344,
	"./zh-hk": 345,
	"./zh-hk.js": 345,
	"./zh-tw": 346,
	"./zh-tw.js": 346
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 468;

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Config = (function () {
    function Config() {
    }
    return Config;
}());
// url of the chat server
// for local development it will be something like http://192.168.0.214:9000/
//public static server = 'https://ionic-video-chat-server.herokuapp.com/';
Config.server = 'http://192.168.1.102:5000/';
// enables or disables chat sounds. usefull for development
Config.audio = true;
// STUN/TURN ice servers for connection negotiation
Config.ice = [
    {
        urls: 'stun:stun.l.google.com:19302'
    }, {
        urls: 'stun:stun.services.mozilla.com'
    }, {
        urls: 'stun:numb.viagenie.ca',
        username: 'numb@arzynik.com',
        credential: 'numb'
    }, {
        urls: 'turn:numb.viagenie.ca',
        username: 'numb@arzynik.com',
        credential: 'numb'
    }
];
// if we allow attachments or not.
// be sure to configure your AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and S3_BUCKET in the server config
Config.attachments = true;
// whether or enable markdown parsing client side
Config.markdown = true;
Config = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({})
], Config);

//# sourceMappingURL=config.js.map

/***/ })

},[359]);
//# sourceMappingURL=main.js.map