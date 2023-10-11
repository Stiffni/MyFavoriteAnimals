import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { showAnimal, toggle } from '../store/actions/favourites.actions';
import { CommonModule } from '@angular/common';
import { selectAnimalFavouriteStatus } from '../store/selectors/favourites.selectors';
import { AnimalsAppState } from '../store/reducers/favourites.reducer';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class AnimalCardComponent {
  @Input() animalName?: string;
  @Input() food?: { likes?: string[]; dislikes?: string[] };
  @Input() imageUrl?: string;

  isFavourite$: Observable<boolean>;

  constructor(private store: Store<AnimalsAppState>, private router: Router) {}

  navigateToAnimal() {
    if (!this.animalName) {
      return;
    }

    this.store.dispatch(showAnimal({ animalName: this.animalName }));
    this.router.navigate(['/animal']);
  }

  ngOnInit() {
    this.isFavourite$ = this.store.select(
      selectAnimalFavouriteStatus(this.animalName)
    );
  }

  onFavouriteClick(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    if (this.animalName) {
      this.store.dispatch(toggle({ animalName: this.animalName }));
    }
  }
}
