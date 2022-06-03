import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { GLOBAL } from "./global";
import { Observable } from 'rxjs';


@Injectable()
export class PhoneService {
  public url: string;
  
  constructor(private http: HttpClient) {
    this.url = GLOBAL.url;
  }

  addPhone({token,phone}:{token:any; phone:any}){
    let params = JSON.stringify(phone);
    let headers = new HttpHeaders
    ({
    'Content-Type': 'application/json',
    'Authorization': token  
    });
    return this.http.post(this.url + 'phone', params,{ headers: headers });      
}

  getPhones():Observable<any>{
    return this.http.get(this.url+'phones');  
  }

  getPhone(id: any):Observable<any>{        
    return this.http.get(this.url+'phone/' +id);
    
}
editarPhone({ token, id, phone }: {token: any; id: any; phone: any;  }):Observable<any>{
  let params = JSON.stringify(phone);
  let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
  });

  return this.http.put(this.url + 'phone/'+id, params,{ headers: headers });
}
 
 deletePhone({token, id}:{token:any , id:any}){
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': token
  });
  let options = new HttpHeaderResponse({headers: headers});
  return this.http.delete(this.url+'phone/'+id, options)
 }
}
