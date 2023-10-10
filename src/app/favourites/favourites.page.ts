import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AnimalCardComponent } from '../animal-card/animal-card.component';
import type { Animal } from 'types';
import { Store } from '@ngrx/store';
import { allFavouriteAnimals } from '../store/selectors/favourites.selectors';
import { AnimalsAppState } from '../store/reducers/favourites.reducer';

@Component({
  selector: 'app-favourites',
  templateUrl: 'favourites.page.html',
  styleUrls: ['favourites.page.scss'],
  standalone: true,
  imports: [IonicModule, AnimalCardComponent, CommonModule],
})
export class FavouritesPage {
  favourites$: Observable<Animal[]> = this.store.select(allFavouriteAnimals);

  constructor(private store: Store<AnimalsAppState>) {}
}
