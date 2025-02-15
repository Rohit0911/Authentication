import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated=new EventEmitter<string>();

  addAccount(name:string,status:string){
    this.accounts.push({name:name, status:status});
  }

  updateStatus(id:number,status:string){
    this.accounts[id].status =status;
  }


  
  constructor() { }
}
