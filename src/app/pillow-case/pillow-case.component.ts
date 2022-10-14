import { Candy } from './../models/candy.model';
import { PillowCaseService } from './pillow-case.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pillow-case',
  templateUrl: './pillow-case.component.html',
  styleUrls: ['./pillow-case.component.css'],
})
export class PillowCaseComponent implements OnInit, OnDestroy {
  sub: Subscription;

  myCandies: Candy[] = [];

  constructor(private pillowCaseService: PillowCaseService) {}

  ngOnInit(): void {
    this.myCandies = this.pillowCaseService.getMySecretStash();
    this.sub = this.pillowCaseService.candyChange.subscribe((candys) => {
      this.myCandies = candys;
    });
  }

  onEatAllCandy(): void {
    this.pillowCaseService.clearCandy();
  }

  onEatACandy(index){
    this.pillowCaseService.eatCandy(index);
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }
}
