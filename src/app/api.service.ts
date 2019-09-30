import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  insertData(data){
    return this.http.post("https://electroapi.herokuapp.com/read",data)
  }
  insertdata(data){
    return this.http.post("https://electroapi.herokuapp.com/read1",data)
  }
  Getdata(data){
    return this.http.post("https://electroapi.herokuapp.com/register",data)
  }
  getLogData(data)
  {
    return this.http.post("https://electroapi.herokuapp.com/readLogApi",data)
  }
  getData(){
    return this.http.get("https://electroapi.herokuapp.com/viewall")
  }
  getdata(){
    return this.http.get("https://electroapi.herokuapp.com/getdata")
  }
  searchData(data){
    return this.http.get("https://electroapi.herokuapp.com/search/"+data)
  }
  searchdata(data){
    return this.http.get("https://electroapi.herokuapp.com/search1/"+data)
  }
  deleteData(data){
    return this.http.post("https://electroapi.herokuapp.com/delete/",data)
  }
  deletedata(data){
    return this.http.post("https://electroapi.herokuapp.com/delete1/",data)
  }
  updateData(data){
    return this.http.post("https://electroapi.herokuapp.com/update",data)
  }
  updatedata(data){
    return this.http.post("https://electroapi.herokuapp.com/update1",data)
  }
}
