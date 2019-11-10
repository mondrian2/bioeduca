import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PendenciaService {
  
  URL = 'https://crtcc.herokuapp.com/';
  sw: any


  constructor(private http: HttpClient) { 
  }

  getAll() {
    return this.http.get(`https://crtcc.herokuapp.com/pendencia`);
  }
  getByUser(id:any){
    return this.http.get(`https://crtcc.herokuapp.com/pendencia?user_id=${id}`);
  }
  getById(id: any) {
    return this.http.get(`https://crtcc.herokuapp.com/pendencia/${id}`);
  }
  add(data: any){
    return this.http.post(`https://crtcc.herokuapp.com/pendencia`, data);
  }
  remove(id: any){
    return this.http.delete(`https://crtcc.herokuapp.com/pendencia/${id}`);
  }
  removeBySoftware_id(id){
    return this.http.get(`https://crtcc.herokuapp.com/pendencia?software_id=${id}`)
      .subscribe(s => {
        this.sw = s
        this.remove(this.sw.data[0]._id).subscribe(r => console.log('removido', r))
      }
    );
  }
  update(id: any, sistema: any){
    return this.http.put(`https://crtcc.herokuapp.com/pendencia/${id}`, sistema);
  }
}
