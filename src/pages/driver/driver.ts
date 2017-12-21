import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterDriverPage} from '../register-driver/register-driver';

/**
 * Generated class for the DriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver',
  templateUrl: 'driver.html',
})
export class DriverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoDriverRegister(){
    this.navCtrl.push(RegisterDriverPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverPage');
  }

}
