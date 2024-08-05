import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogginServiceService } from '../loggin.service.service';
import { AccountServiceService } from '../account.service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LogginServiceService]
})
export class AccountComponent {
  @Input()
  account!: { name: string; status: string; };
  @Input()
  id!: number;






  constructor(private ss: LogginServiceService, private acc:AccountServiceService){}


  onSetTo(status: string) {
     this.acc.updateStatus(this.id,status)
    // console.log('A server status changed, new status: ' + status);
    this.ss.lockStatusChange(status)
    this.acc.statusUpdated.emit(status);
    
  }

  




}
