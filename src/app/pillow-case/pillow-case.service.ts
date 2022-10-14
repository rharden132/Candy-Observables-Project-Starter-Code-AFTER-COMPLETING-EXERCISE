import { Candy } from './../models/candy.model';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PillowCaseService implements OnInit{
  // Create a "Subject" that to emit when a new candy is added to bag
  candyChange = new Subject<Candy[]>();
  private myCandies: Candy[] = [new Candy('Kit Kat'), new Candy('Pop Rocks')];

  ngOnInit(): void {

  }

  getMySecretStash() {
    return this.myCandies.slice();
  }

  addNewCandy(name: string) {
    this.myCandies.push(new Candy(name));
    this.candyChange.next(this.myCandies.slice());
    console.log('this.myCandies:', this.myCandies);
  }

  eatCandy(i){
    this.myCandies.splice(i, 1);
    this.candyChange.next(this.myCandies.slice());

  }

  clearCandy() {
    this.myCandies = [];
    this.candyChange.next(this.myCandies.slice());
  }

}
