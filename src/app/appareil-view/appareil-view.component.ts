import { Component } from '@angular/core';
import { AppareilsService } from '../service/appreils.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent {
  isAuth = false;
  lastUpdate = new Date;
  appareils!: any[]  
 constructor( private appreilsService : AppareilsService){
   setTimeout(() => {
     this.isAuth = true;
   }, 4000);
 }
 ngOnInit(): void {
   this.appareils = this.appreilsService.appareils
 }
 onAllumer(){
   this.appreilsService.switchOnAll()
 };
 onEteint(){
   this.appreilsService.switchOffAll()
 }
}
