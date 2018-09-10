// login and signup page

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from '../../services';
import { ChatsPage } from '../';

declare var window:any;

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	focus = false
	input = false
	data = {
		username:null,
		password: null
	}
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
  error: string;

	constructor(private navCtrl: NavController, private loginService: LoginService) {
		// forward to chats if we are already logged in
		this.Inputs = this.inputs[0];
		loginService.complete.then(user => {
			// we dont need to do this since its handled in the login function, but just in case you want to do it here
			//this.navCtrl.push(ChatsPage, {}, {animate: true, direction: 'forward'});
		});
	}
   goTo(index){
  	this.Inputs =  this.inputs[index];
  }

   indexAction(action){
    switch (action) {
      case "signup":
         if(!this.validateEmail(this.Inputs.inputs[0].value))
             this.error = "Please enter a valid email address.";
         else if(!this.validCountryPhone(this.Inputs.inputs[2].value))
            this.error = "Please enter a valid phone number." ;
          else if(this.Inputs.inputs[1].value == this.Inputs.inputs[3].value)
            this.error = "Your username  should not be your password.";
          else if(this.Inputs.inputs[3].value.length < 8)
              this.error = "Your password should have more than 7 characters.";
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
			this.navCtrl.setRoot(ChatsPage, {}, {animate: true, direction: 'forward'});
		}, data => {
			console.log(data);
		});
	};

}