import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './../../service/token-storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  currentUser: any = {};
  isLoggedIn = true;

  constructor(private tokenStorage: TokenStorageService) {}

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.currentUser = this.tokenStorage.getUser();
    }
  }
}
