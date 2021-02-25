//ユーザーが入力した入力値をRESTAPI URLに渡し、出力を返します。

import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { IpService } from './ip.service';

@Injectable({
  providedIn: 'root'
})
export class UniqueService {

  constructor(public http: HttpClient) { }
  ip=IpService.getIPAddress()

  checkUserName(username) {
    return new Promise(resolve => {

      let data={username:username};
      this.http.get(
        this.ip+'validate/check-username.php?username='+username,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
          responseType: 'json'
        }
     ).subscribe(
        res => { resolve(res) },//send success response
       (err) => { resolve(false); }//send error response
      );

    });
  }
}


// return new Promise(function(resolve) {
//   let data={ username:username };
//   this.http.get(
//     this.ip+'validate/check-username.php?username='+username,
//     {
//       headers: new HttpHeaders().set('Content-Type', 'application/json'),
//       responseType: 'json'
//     }
//   ).subscribe(
//     res => {resolve(res)},
//     err => {resolve(false);}
//   );
// });


// let data={username:username};
// this.http.get("http://localhost/async/"+'validate/check-username.php?username='+username,{
//   headers: new HttpHeaders().set('Content-Type', 'application/json'),
//   responseType: 'json'
// })
// .subscribe(res => {
//   //send success response
//   resolve(res)
// }, (err) => {
//   //send error response
//   resolve(false);
// });
// headers: new HttpHeaders().set('Content-Type', 'application/json'),
// headers: new HttpHeaders({'Content-Type', 'application/json'}),


// this.http.get()//デフォルトではレスポンスの本文を型のないJSONで返します。
// .subscribe(//データストリームから流れてくるデータをObserverがsubscribe(購読)する。その際に、受け取ったデータに関して、必要な処理を行う。この流れをエラーが出るか、完了するまで続ける。


//   res => {resolve(res)}, (err) => {resolve(false);});




// fetch(url, {
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     })
