import {ChangeDetectorRef} from '@angular/core';
import {AfterContentInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterContentInit{
  public onLogin = false;
  public form: FormGroup;
  public init = false;
  public isLoggedIn = false;
  constructor(public navCtrl: NavController, private cd: ChangeDetectorRef) {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngAfterContentInit() {
    this.init = true;
    console.log('init', this.init);
    this.cd.detectChanges();
  }

  login() {
    if (this.onLogin) {
      return;
    }
    this.onLogin = true;
    Observable
      .fromPromise(Promise.resolve(true))
      .delay(5000)
      .subscribe(
        () => {
          console.log('complete');
          this.onLogin = false;
          this.isLoggedIn = true;
          this.cd.detectChanges();
        }
      );
  }
}
