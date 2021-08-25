import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './../../service/token-storage.service';

@Component({
  selector: 'app-apartament',
  templateUrl: './apartament.component.html',
  styleUrls: ['./apartament.component.scss'],
})
export class ApartamentComponent implements OnInit {
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
