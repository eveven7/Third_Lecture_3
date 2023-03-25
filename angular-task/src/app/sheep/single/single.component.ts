import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { SheepServiceService } from 'src/app/services/sheep-service.service';
import { SheepDetailed } from 'src/app/types';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit {
  sheep$?: Observable<SheepDetailed>
  sheep?: SheepDetailed


  constructor(private sheepServiceService: SheepServiceService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const name = params.get("name");
      if (name != null) {
        this.sheep$ = this.sheepServiceService.loadSheepDetails(name);
      }
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const name = params.get("name");
      if (name != null) {
        this.sheepServiceService.loadSheepDetails(name).subscribe((sheep) => {
          this.sheep = sheep;
        });
      }
    });
  }
}
