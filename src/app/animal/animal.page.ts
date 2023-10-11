import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Animal } from 'types';
import { AnimalsAppState } from '../store/reducers/favourites.reducer';
import { animalDetails } from '../store/selectors/favourites.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.page.html',
  styleUrls: ['./animal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AnimalPage {
  animalDetails$: Observable<Animal> = this.store.select(animalDetails);

  constructor(private store: Store<AnimalsAppState>) {}
}
