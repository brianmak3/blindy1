import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController } from 'ionic-angular';
import * as country from 'countries-cities';
import { Provider, AttachmentService } from '../../services';

@Component({
  selector: 'page-pop',
  templateUrl: 'pop.html',
})
export class PopPage {
  type: string;
	data: string;
	items: any [];

  constructor(public navCtrl: NavController, 
    private viewCtrl: ViewController, public provider: Provider, public navParams: NavParams, public attachment: AttachmentService) {
    this.type = this.navParams.get('type');
  	this.data = this.navParams.get('data');
  	switch (this.type) {
  		case "chatOptions":
  			this.items = [
  				{text: "Unfriend"},
  				{text: "Block"},
  				{text: "Delete chat"},
  				{text: "Report"}
  			]
        break;
        case "":
       
  			break;
  		case "imageOptions":
  		this.items = [
  				{icon: "camera", text:"Camera"},
  				{icon: "image", text: "Gallery"}
  			]
  		break;
      case "countriesList":
          this.items = this.attachment.countries;
      break;
      case "profileImage":
      if(this.provider.acc.image == 'assets/imgs/avatar.jpg'){
           this.items = [
            {icon: "camera", text:"Take picture"},
            {icon: "image", text: "Open gallery"}
          ]
      }
      else{
        this.items = [
          {icon: "camera", text:"Take picture"},
          {icon: "image", text:"Open gallery"},
          {icon: "eye", text:"View image"},
          {icon: "trash", text: "Remove photo"}
        ]
      }
        
       break;
  		default:
  		 switch (this.data) {
         case "Gender":
           this.items = [
            {text: "Male"},
            {text: "Female"}
           ]
           break;
           case "Orientation":
            this.items = [
            {text: "Straight"},
            {text: "Gay"}
           ]
           break;
           case "Education":
            this.items = [
            {text: "High school"},
            {text: "Drop down"},
            {text: "College"},
            {text: "Bachelor"},
            {text: "Master"},
           ]
           break;
         default:
         this.items = country.getCountries().sort();
           break;
       };
        
  			break;
  	}

  }

 itemClicked(item){
   this.viewCtrl.dismiss();
   switch (this.type) {
     case "countriesList":
       this.provider.countryCode = item.code;
       break;
       case "":

       break;
       case "":

       break;
     default:
      switch (this.data) {
         case "Gender":
           this.provider.acc.settings.gender = item.text;
           break;
           case "Orientation":
           this.provider.acc.settings.orientation = item.text;
           break;
           case "Education":
           this.provider.acc.settings.education = item.text;
           break;
         default:
          this.provider.acc.settings.country = item;
          break;
       };
       break;
   }
 }

}
