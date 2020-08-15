import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient) { }

  
  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{token: string}>('/api/auth', {username: username, password: password})
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}

//   public generateToken(request) {
//     return this.httpClient.post<string>("http://localhost:9191/authenticate", request, {  responseType: 'text' as 'json' });
//   }


//   public welcome(token) {
//     let tokenStr = 'Bearer ' + token;
//     const headers = new HttpHeaders().set('Authorization', tokenStr);
//     return this.httpClient.get<string>("http://localhost:9191/", {headers, responseType: 'text' as 'json' });
//   }
// }