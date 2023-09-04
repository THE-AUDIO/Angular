import { Component, Input, OnInit } from '@angular/core';
import { AppareilsService } from '../service/appreils.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
 @Input() appareilsName!: string;
 @Input() appareilsStatus!: string;
 @Input() indexOfAppreil!: number;
  constructor(private appareilsService : AppareilsService){}
  ngOnInit(): void {  
  }
  getStatus(){
    return this.appareilsStatus;
  }
  getColor(){
    if(this.appareilsStatus === 'éteint'){
      return 'red'
    } else{
      return 'green'
    }
  }
  onSwitchOne(){
    this.appareilsService.switchOnOne(this.indexOfAppreil)
  }
  OffSwitchOne(){
    this.appareilsService.switchOfOne(this.indexOfAppreil);
  }

}
