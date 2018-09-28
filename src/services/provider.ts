import { Injectable } from '@angular/core';
import { PopoverController, Events, AlertController, LoadingController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
declare var google;   
import { Geolocation } from '@ionic-native/geolocation';
import * as $ from 'jquery';
import { Config } from '../app/config';
import * as io from 'socket.io-client';
import {Observable } from 'rxjs/Observable';

@Injectable()
export class Provider {
  socket = null;
   acc: any;
   countryCode: string = "+93";
   countries: any;
   error: string;
   friends: any;
   title = 'Home';
   resultFound: any;
   titles: any = ['Gender', 'Orientation', 'Country', 'Education'];
   intensions: any = [
              {title: 'Just for fun',value: false},
              {title: 'Dating', value: false},
              {title: 'New friends', value: false},
              {title: 'Long term', value: false}
            ];
  settings: any;
  loadcontroller: any;
  constructor(public storage: Storage,public geolocation: Geolocation, public loadCtrl: LoadingController, public alertCtrl: AlertController, public events: Events) {
  this.socket = io.connect(Config.server);
 
  	//if(this.acc.image == 'assets/imgs/avatar.png')
  		//this.acc.image = 'assets/imgs/upload.png';

      //socket response subscription
        this.socketResponse('serverData').subscribe(data =>{
        let datam:any = data;
        switch (datam.action) {
          case "IndexResponse":
             if(datam.error)
               this.error = datam.error;
            break;
          case "settingsUpdate":
           this.acc.profile = true;
            this.updateProfile(this.acc);
             break;
          case "searchResponse":
           this.Load(null);
              if(datam.user.length)
                this.resultFound = datam.user[0];
              else
                 this.showAlert('No friend found','Please try a random search!');
          break;
          default:
            // code...
            break;
        }(data);
      })
  }

  userLoginCheck(){
  	this.storage.ready().then(()=>{
  		this.storage.get('blindyVariables').then((data)=>{
           if(data){
                this.acc = JSON.parse(data);
                return true;
           }else{
            
              return false;
           }
  	  },err=>{
  		console.log(err);
  	  })
  	}, err=>{
  		console.log(err);
  	})
  }
  checkPosition(){
   var requestUrl = "http://ip-api.com/json";
   let thisx = this;
    $.ajax({
      url: requestUrl,
      type: 'GET',
      success: function(json)
      {
       thisx.setCountryCode(json.country);
      },
      error: function(err)
      {
        console.log("Request failed, error= " + err);
      }
    });
 }
 socketEmit(data){
    this.socket.emit('appData', data);
  }
  setCountryCode(country){
   this.countryCode = this.countries[this.countries.findIndex(q => q.name == country)].code
  }
  socketResponse(action){
  let observable = new Observable( observer =>{
    this.socket.on(action, data=>{
            observer.next(data);
        });
      });
        return observable;
  }
  updateProfile(acc){
    this.acc = acc;
     this.storage.ready().then(()=>{
       this.storage.set('blindyVariables', JSON.stringify(acc)).then(()=>{
          this.events.publish('loggedIn');
       },err=>{
      console.log(err);
      })
     },err=>{
      console.log(err);
      })
  }
  UpdateSettings(){
    this.socketEmit({
      title: 'settingsUpdate',
      settings: this.acc.settings,
      user: this.acc.phone
    })
  }
  search(type){
    this.Load('Finding a match...');
    if(type== 'random')this.userLoginCheck();
    let thisx = this;
    setTimeout(function(){
      thisx.socketEmit({
      title: 'searchRequest',
      type:type,
      settings: thisx.acc.settings,
      user: thisx.acc.phone,
      friends: thisx.friends
    })
    }, 200)
   
  }
  showAlert(title,msg){
   let alert = this.alertCtrl.create({
     title: title,
     message: msg,
     buttons:[{
       text: 'OK',
       role: 'destructive'
     }]
   })
   alert.present();
  }
  Load(msg){
    if(msg){
     this.loadcontroller = this.loadCtrl.create({
       content: msg
     })
     this.loadcontroller.present();
    }else
      this.loadcontroller.dismiss()

  }

}
