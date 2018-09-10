import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  title: String = 'My Friends';
  saturation: number = 34;
  selectedAll = true;
  selectedMissed = false;
  intensions: any = [
              {title: 'Just for fun',value: false},
              {title: 'Dating', value: false},
              {title: 'New friends', value: false},
              {title: 'Long term', value: false}
            ];
  settings: any = [
                  {title: 'Gender', Select: 'Male'},
                  {title: 'Orientation', Select: 'Straight'},
                  {title: 'Education', Select: 'High school'},
                  {title: 'Income', Select: '0 - 10.00'},
                ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   var page = this.navParams.get('page');
   if(page)
     this.title = page;
  }

  
}
