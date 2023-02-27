import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public url = 'https://dummyjson.com/auth/login';
  public userData?: number;

  // constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.http
  //     .post<any>(this.url, { username: 'kminchelle',password: '0lelplR' })
  //     .subscribe((data) => {
  //       console.log('login data',data);
  //       this.userData = data;
  //     });
  // }
   loginSubmit(loginData:any){
    console.log('form submited',loginData);
  }
}
