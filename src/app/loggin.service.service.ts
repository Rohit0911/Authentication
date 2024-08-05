import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class LogginServiceService {

  constructor() { }

  lockStatusChange(status:string){
    console.log('A server status changed, new status: ' + status);
  }
}





