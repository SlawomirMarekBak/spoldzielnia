import { Location } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '../sidebar/sidebar.component';
import { TokenStorageService } from './../../service/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  currentUser: any;
  isLoggedIn = false;
  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {
    this.location = location;
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.currentUser = this.tokenStorage.getUser();
    }
    this.listTitles = ROUTES.filter((listTitle) => listTitle);
  }
  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (let item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }
  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
