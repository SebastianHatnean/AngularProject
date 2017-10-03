import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import {FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string;
  password: string;

  constructor(public af: AngularFireAuthModule,
              public firebaseAuth: AngularFireAuth,
              public authService: AuthService,
              public flashMessage: FlashMessagesService
  ) { }
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
    this.flashMessage.show('You are logged out!', {cssClass: 'alert-success', timeout: 3000});
  }
  ngOnInit() {
  }
}
