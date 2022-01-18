import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private Http:HttpClient) { 


  }

fetchData(name:string){
 return this.Http.get('https://api.github.com/users/' + name)
}

getRepos(repo:string){
  return this.Http.get('https://api.github.com/users/' + repo + '/repos')
}


}
