import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-page-display',
  templateUrl: './page-display.component.html',
  styleUrls: ['./page-display.component.css']
})
export class PageDisplayComponent implements OnInit {
mydata:any = []
myrepos:any = []

trevin = null
name = "trevin-livele"
 
  constructor(private fetchService : FetchDataService) { 

  }

  ngOnInit(){
    this.fetchService.fetchData(this.name).subscribe(users=>{
          this.mydata = users
          console.log(users);
    },meserror=>{
      this.trevin = meserror.message
      console.log(meserror.message)
    })
    this.fetchService.getRepos(this.name).subscribe(data=>{
      this.myrepos = data
      console.log(this.myrepos)

    })

    }
  



onSubmit(){

}

onSearch(username:any){
  console.log(username.value);
  this.fetchService.fetchData(username.value).subscribe(users=>{
    this.mydata = users
    console.log(users);
},meserror=>{
this.trevin = meserror.message
console.log(meserror.message)
})



















  

}

}
