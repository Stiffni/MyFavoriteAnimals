import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Animal } from 'types';
import { AnimalsAppState } from '../store/reducers/favourites.reducer';
import {
  animalDetails,
  selectAnimalFavouriteStatus,
} from '../store/selectors/favourites.selectors';
import { Store } from '@ngrx/store';
import { toggle } from '../store/actions/favourites.actions';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.page.html',
  styleUrls: ['./animal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AnimalPage {
  animalDetails$: Observable<Animal> = this.store.select(animalDetails);
  isFavourite$: Observable<boolean>;
  animalName: string;

  constructor(private store: Store<AnimalsAppState>) {
    this.animalDetails$.subscribe((details) => {
      this.animalName = details.Name;
    });
    this.isFavourite$ = this.store.select(
      selectAnimalFavouriteStatus(this.animalName)
    );
  }

  onFavouriteClick() {
    this.store.dispatch(toggle({ animalName: this.animalName }));
  }
}
