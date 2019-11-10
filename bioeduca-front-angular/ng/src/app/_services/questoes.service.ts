import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuestoesService {
  URL = 'https://crtcc.herokuapp.com/';


  constructor(private http: HttpClient) { 
  }

  getAll() {
    return this.http.get(`https://crtcc.herokuapp.com/questao/?$limit=20`);
  }
  getIndication(id:any){
    return this.http.get(`https://crtcc.herokuapp.com/questao?indicadopor=${id}`);
  }
  getById(id: any) {
    return this.http.get(`https://crtcc.herokuapp.com/questao/${id}`);
  }
  add(sugestao: any){
    return this.http.post(`https://crtcc.herokuapp.com/questao`, sugestao);
  }
  remove(id: any){
    return this.http.delete(`https://crtcc.herokuapp.com/questao/${id}`);
  }
  update(id: any, questao: any){
    return this.http.put(`https://crtcc.herokuapp.com/questao/${id}`, questao);
  }
}
