// login and signup page

import { Component } from '@angular/core';
import { NavController,PopoverController } from 'ionic-angular';
import { LoginService, Provider, AttachmentService } from '../../services';
import { ListPage } from '../';
import { PopPage } from '../pop/pop';
declare var window:any;

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	focus = false
	input = false;
	data: any;
   inputs: any = [
  	{title: 'Login', 
  	inputs: [
  			{name: 'Username', value:'', type: 'text'},
  			{name: 'Password', value:'', type: 'password'}
  		]},
	{title: 'Sign up', 
  	inputs: [
  			{name: 'Email address', value:'', type: 'email'},
  			{name: 'Username', value:'', type: 'text'},
  			{name: 'Phone number', value:'', type: 'number'},
  			{name: 'Password', value:'', type: 'password'}
  		]}
  ];
  Inputs: any;
	constructor( private navCtrl: NavController,public provider: Provider, public attachment: AttachmentService, public popover: PopoverController,private loginService: LoginService,) {
		// forward to chats if we are already logged in
		this.Inputs = this.inputs[0];
    this.provider.countries = attachment.countries;
    this.provider.checkPosition();
		loginService.complete.then(user => {
			// we dont need to do this since its handled in the login function, but just in case you want to do it here
			//this.navCtrl.push(ChatsPage, {}, {animate: true, direction: 'forward'});
		});

    //events
    this,provider.events.subscribe('loggedIn', ()=>{
      this.navCtrl.setRoot(ListPage, {}, {animate: true, direction: 'forward'});
    })
	}
   goTo(index){
  	this.Inputs =  this.inputs[index];
    this.provider.error = undefined;
  }

   indexAction(action){
    switch (action) {
      case "signup":
         if(!this.validateEmail(this.Inputs.inputs[0].value))
             this.provider.error = "Please enter a valid email address.";
         else if(!this.validCountryPhone(this.Inputs.inputs[2].value))
            this.provider.error = "Please enter a valid phone number." ;
          else if(this.Inputs.inputs[1].value == this.Inputs.inputs[3].value)
            this.provider.error = "Your username  should not be your password.";
          else if(this.Inputs.inputs[3].value.length < 8)
              this.provider.error = "Your password should have more than 7 characters.";
          else if(!this.provider.error){
            this.Inputs.inputs[2].value = Math.abs(this.Inputs.inputs[2].value);
              let data = this.Inputs;
               data.inputs.map(function(item) {delete item.type; return item; });
               data.countryCode = this.provider.countryCode;
               //do phone verification here.
               this.provider.socketEmit(data);
          }
        break;
       case "login":
               this.data = {
                username:this.Inputs.inputs[0].value,
                password: this.Inputs.inputs[1].value
              }
              this.login();
         break;
      default:
        // code...
        break;
    }
  }
  //validate email
  validateEmail(email) 
  {
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    return re.test(email);
  }
  //validate phone number
  validCountryPhone(phone) {
   phone = '+254'+phone;
  try{
     // this.phoneUtil.isValidNumber(this.phoneUtil.parse(phone))
      return true;
    }catch(e){
        return false;
    }
  }
	// begin the login
	login() {
		this.loginService.login(this.data).then(() => {
      this.provider.updateProfile(this.loginService.acc);
		}, data => {
			console.log(data);
		});
	};
   showPopover(type, event, data){
    let popOver = this.popover.create(PopPage, {type: type, data: data});
    popOver.present({
       ev: event
    })
  }
  numberKeyed(event){
    if(event.keyCode == 189 || event.keyCode == 187 || event.keyCode == 180)
      return false;
  }
  ionViewDidLeave(){
    this.provider.events.unsubscribe('loggedIn');
  }

}