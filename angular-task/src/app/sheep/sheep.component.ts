import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SheepServiceService } from '../services/sheep-service.service';
import { Sheep } from '../types';

@Component({
  selector: 'app-sheep',
  templateUrl: './sheep.component.html',
  styleUrls: ['./sheep.component.scss'],
})
export class SheepComponent implements OnInit {
  sheep: Observable<Sheep[]>;

  constructor(private sheepServiceService: SheepServiceService) {
    this.sheep = this.sheepServiceService.load();
  }
  ngOnInit(): void {
  }
}
