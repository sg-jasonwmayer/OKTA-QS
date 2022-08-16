import { Injectable } from '@angular/core';
import OktaSignIn from '@okta/okta-signin-widget';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Okta {
  widget;
httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };

  

  constructor() {
    this.widget = new OktaSignIn({
      baseUrl: 'http://safeguard-dev.oktapreview.com/oauth2/default' + this.httpOptions,
      clientId: '0oa45tw0yo5wFRB5y1d7',
      redirectUri: 'http://localhost:4200'
    });
  }
  

  getWidget() {
    return this.widget;
  }
}
