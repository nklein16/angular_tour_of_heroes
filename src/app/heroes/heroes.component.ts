import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;  // Add a heroes property to the class

  // note the use of 'hero' here rather than 'heroes'
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // Step 5: change the above definition of hero
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
