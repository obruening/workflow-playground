import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Processinstance } from '../_model/processinstance/processinstance';
import { ProcessinstanceService } from '../_service/processinstance/processinstance.service';

@Component({
  selector: 'app-processinstances',
  templateUrl: './processinstances.component.html',
  styleUrls: ['./processinstances.component.css']
})
export class ProcessinstancesComponent implements OnInit {

  processinstances$: Observable<Array<Processinstance>>;

  constructor(private processinstanceService: ProcessinstanceService) {
    this.processinstances$ = this.processinstanceService.getProcessinstances();
  }

  ngOnInit(): void { }
}
