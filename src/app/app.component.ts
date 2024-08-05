import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from './account.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountServiceService]
})
export class AppComponent implements OnInit {

  accounts:{name:string,status:string}[]=[];

  constructor(private accountservice:AccountServiceService ){}
  
  ngOnInit() {
      this.accounts=this.accountservice.accounts
  }

}



