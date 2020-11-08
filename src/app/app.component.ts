import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getShowSidebar } from './shared/components/custom-header/state/header.reducer';
import { State } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showSidebar$: Observable<boolean>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.showSidebar$ = this.store.select(getShowSidebar);
  }
}
