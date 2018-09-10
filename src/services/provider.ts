import { Component } from '@angular/core';
import { PopoverController} from 'ionic-angular';
import { PopPage } from '../pages/pop/pop';


@Component({})
export class Provider {

  constructor(public popover: PopoverController) {
  }

 showPopover(type, event){
  	let popOver = this.popover.create(PopPage, {type: type});
  	popOver.present({
       ev: event
  	})
  }
}
