import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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
  constructor(public navCtrl: NavController) {
  		this.Inputs = this.inputs[0];
  }
  goTo(index){
  	this.Inputs =  this.inputs[index];
  }

}
