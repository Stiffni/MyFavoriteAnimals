import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AnimalCardComponent } from '../animal-card/animal-card.component';
import type { Animal } from 'types';
import { AnimalsAppState } from '../store/reducers/favourites.reducer';
import { Store } from '@ngrx/store';
import { selectAnimals } from '../store/selectors/favourites.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-animals',
  templateUrl: 'animals.page.html',
  styleUrls: ['animals.page.scss'],
  standalone: true,
  imports: [IonicModule, AnimalCardComponent, CommonModule],
})
export class AnimalsPage {
  animals$: Observable<Animal[]> = this.store.select(selectAnimals);

  constructor(private store: Store<AnimalsAppState>) {}
}
