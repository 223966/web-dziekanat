import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/state/app.state';
import { getShowSidebar } from '../custom-header/state/header.reducer';

@Component({
  selector: 'custom-sidebar',
  templateUrl: './custom-sidebar.component.html',
  styleUrls: ['./custom-sidebar.component.scss'],
})
export class CustomSidebarComponent implements OnInit {
  showSidebar$: Observable<boolean>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.showSidebar$ = this.store.select(getShowSidebar);
  }
}
