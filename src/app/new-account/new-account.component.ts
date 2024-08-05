import { Component, EventEmitter, Output } from '@angular/core';
import { LogginServiceService } from '../loggin.service.service';
import { AccountServiceService } from '../account.service.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LogginServiceService]
})
export class NewAccountComponent {
  constructor(private ss:LogginServiceService, private acc:AccountServiceService){
    this.acc.statusUpdated.subscribe((
      (status:string)=>alert('New Status :'+status)
    ));
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.acc.addAccount(accountName,accountStatus);

    this.ss.lockStatusChange(accountStatus);
  }
}


// Here we shouldn't use the services by creating an instance and then calling the method
// BUt we can and should use the Dependency Injection
// The DInjector means that our component(class) is dependent upon the service and methods within it which is created.