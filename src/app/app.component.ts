import { Component, OnInit } from '@angular/core';
import { FetchDataService } from './fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-github-search';

trevin = null
name = "trevin-livele"




  ngOnInit(){
  // this.fetchService.fetchData(this.name).subscribe(users=>{
  //       console.log(users);
  // },meserror=>{
  //   this.trevin = meserror.message
  //   console.log(meserror.message)
  // })
  }




constructor(private fetchService: FetchDataService){

}

}
