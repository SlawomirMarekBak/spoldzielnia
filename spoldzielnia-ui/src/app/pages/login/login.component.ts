import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppConstants } from './../../common/app.constants';
import { AuthService } from './../../service/auth.service';
import { TokenStorageService } from './../../service/token-storage.service';
import { UserService } from './../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  currentUser: any;
  googleURL = AppConstants.GOOGLE_AUTH_URL;
  facebookURL = AppConstants.FACEBOOK_AUTH_URL;
  githubURL = AppConstants.GITHUB_AUTH_URL;
  linkedinURL = AppConstants.LINKEDIN_AUTH_URL;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    console.log('init');
    const token: string = this.route.snapshot.queryParamMap.get('token');
    const error: string = this.route.snapshot.queryParamMap.get('error');
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.currentUser = this.tokenStorage.getUser();
      console.log(this.currentUser);
    } else if (token) {
      this.tokenStorage.saveToken(token);
      this.userService.getCurrentUser().subscribe(
        (data) => {
          this.login(data);
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
    } else if (error) {
      this.errorMessage = error;
      this.isLoginFailed = true;
    }
  }

  onSubmit(): void {
    console.log('onSubmit');
    this.authService.login(this.form).subscribe(
      (data) => {
        console.log('onSubmit2');
        this.tokenStorage.saveToken(data.accessToken);
        this.login(data.user);
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        console.log('err');
      }
    );
  }

  ngOnDestroy() {}

  login(user): void {
    console.log('login');
    this.tokenStorage.saveUser(user);
    this.isLoginFailed = false;
    this.isLoggedIn = true;
    this.currentUser = this.tokenStorage.getUser();
    console.log(this.currentUser);
    window.location.reload();
  }

  logout() {}
}
