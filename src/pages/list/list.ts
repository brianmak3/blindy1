import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { Provider } from '../../services';
import { ChatPage, PopPage } from '../';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  selectedAll = true;
  selectedMissed = false;
  constructor(public navCtrl: NavController, public popover: PopoverController, public provider: Provider, public navParams: NavParams) {
   if(!this.provider.acc.profile)
        this.provider.title = 'Settings';
    else if(this.provider.friends){
            this.provider.title = 'My Friends'
     }
      
}
   showPopover(type, event, data){
    let popOver = this.popover.create(PopPage, {type: type, data: data});
    popOver.present({
       ev: event
    })
  }
  goToChat(){
    this.navCtrl.push(ChatPage,{}, {animate: true, direction: 'forward'});
  }
}
