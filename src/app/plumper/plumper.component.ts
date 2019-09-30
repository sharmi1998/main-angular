import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../api.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-plumper',
  templateUrl: './plumper.component.html',
  styleUrls: ['./plumper.component.css']
})
export class PlumperComponent implements OnInit {
  getName='';
  getAddress='';
  getDes='';
  getPhone='';
  getRate='';
  getImage='';
  getPincode='';
  onSubmit(data:NgForm){
    console.log(data.value);
    this.apiservice.insertdata(data.value).subscribe((response)=>{
      console.log(response);
      alert('successfull');
  })
}
  constructor(private apiservice:ApiService,private router:Router) { }

  ngOnInit() {
    console.log('inplumper page')
    status=JSON.parse(localStorage.getItem('loggedIn'));
    console.log(status)
    if(status==="null"){
      console.log(status)
      this.router.navigateByUrl('')
    }
  }

}
