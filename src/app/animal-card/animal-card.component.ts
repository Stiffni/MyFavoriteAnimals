import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { toggle } from '../store/actions/favourites.actions';
import { CommonModule } from '@angular/common';
import { selectAnimalFavouriteStatus } from '../store/selectors/favourites.selectors';
import { AnimalsAppState } from '../store/reducers/favourites.reducer';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AnimalCardComponent {
  @Input() animalName?: string;
  @Input() food?: { likes?: string[]; dislikes?: string[] };
  @Input() imageUrl?: string;

  isFavourite$: Observable<boolean>;

  constructor(private store: Store<AnimalsAppState>) {}

  ngOnInit() {
    this.isFavourite$ = this.store.select(
      selectAnimalFavouriteStatus(this.animalName)
    );
  }

  onFavouriteClick() {
    if (this.animalName) {
      this.store.dispatch(toggle({ animalName: this.animalName }));
    }
  }
}
