import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-pop',
  templateUrl: 'pop.html',
})
export class PopPage {
	type: string;
	items: any [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.type = this.navParams.get('type');
  	switch (this.type) {
  		case "chatOptions":
  			this.items = [
  				{text: "Unfriend", icon: "", img:""},
  				{text: "Block", icon: "", img:""},
  				{text: "Delete chat", icon: "", img:""},
  				{text: "Report", icon: "", img:""}
  			]
  			break;
  		case "imageOptions":
  		this.items = [
  				{icon: "camera", text:"Camera"},
  				{icon: "image", text: "Gallery"}
  			]
  		break;
  		default:
  			// code...
  			break;
  	}

  }

 

}
