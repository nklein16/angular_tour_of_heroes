import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // Replace getHeroes() with Observable HeroService
  getHeroes(): Observable<Hero[]> {
    
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    // of(HEROES) returns an Observable<Hero[]> that emits a single value
    // (the array of mock heroes)
    return of(HEROES);
  }


}
