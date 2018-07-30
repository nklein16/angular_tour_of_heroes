import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // heroes = HEROES;  // Add a heroes property to the class
  heroes: Hero[];

  // note the use of 'hero' here rather than 'heroes'
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // Step 5: change the above definition of hero
  selectedHero: Hero;

  // Inject the HeroService
  // The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  getHeroes(): void {
    // this.heroService.getHeroes() is an Observable
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }




}
