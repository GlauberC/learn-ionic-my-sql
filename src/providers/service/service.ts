import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseOptions } from '@angular/http' ;
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  api : string = 'http://bd4web-glaubercarv850761.codeanyapp.com/Testes/';

  constructor(public http: Http) {}

    getData(){
      return this.http.get(this.api + 'recupera.php').map(res=>res.json())
    }
    postData( data ){
      let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded' });
      return this.http.post(this.api + "cadastro.php", data,  {
        headers: headers,
        method: "POST"
      }).map(
        (res:Response) => {return res.json();}
      );
    }

  }
