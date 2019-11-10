import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  URL = 'https://crtcc.herokuapp.com/';


  constructor(private http: HttpClient) { 
  }

  getAll() {
    return this.http.get(`https://crtcc.herokuapp.com/avaliacao`);
  }
  getIndication(id:any){
    return this.http.get(`https://crtcc.herokuapp.com/avaliacao?indicadopor=${id}`);
  }
  getById(id: any) {
    return this.http.get(`https://crtcc.herokuapp.com/avaliacao/${id}`);
  }
  add(sugestao: any){
    return this.http.post(`https://crtcc.herokuapp.com/avaliacao`, sugestao);
  }
  remove(id: any){
    return this.http.delete(`https://crtcc.herokuapp.com/avaliacao/${id}`);
  }
  update(id: any, avaliacao: any){
    return this.http.put(`https://crtcc.herokuapp.com/avaliacao/${id}`, avaliacao);
  }
  getBySoftId(id: any) {
    return this.http.get(`https://crtcc.herokuapp.com/avaliacao?software=${id}`);
  }
}
