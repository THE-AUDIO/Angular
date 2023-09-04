import { Component, OnInit } from '@angular/core';
import { AppareilsService } from '../service/appreils.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareils',
  templateUrl: './single-appareils.component.html',
  styleUrls: ['./single-appareils.component.scss']
})
export class SingleAppareilsComponent implements OnInit{
    name: string = 'appareils';
    status: string = 'allumé';
    id!: number; 
    constructor(private appareilsService : AppareilsService , private route:ActivatedRoute){}
    ngOnInit(): void {
      const id = this.route.snapshot.params['id'];
      this.status= this.appareilsService.getAppareilById(+id).status;
      this.name = this.appareilsService.getAppareilById(+id).name;
    }
}
