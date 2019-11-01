import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SugestaoService {

  URL = 'https://crtcc.herokuapp.com/';


  constructor(private http: HttpClient) { 
  }

  getAll() {
    return this.http.get(`https://crtcc.herokuapp.com/sistema`);
  }
  getIndication(id:any){
    return this.http.get(`https://crtcc.herokuapp.com/sistema?indicadopor=${id}`);
  }
  getById(id: any) {
    return this.http.get(`https://crtcc.herokuapp.com/sistema/${id}`);
  }
  add(sugestao: any){
    return this.http.post(`https://crtcc.herokuapp.com/sistema`, sugestao);
  }
  remove(id: any){
    return this.http.delete(`https://crtcc.herokuapp.com/sistema/${id}`);
  }
  update(id: any, sistema: any){
    return this.http.put(`https://crtcc.herokuapp.com/sistema/${id}`, sistema);
  }
}
