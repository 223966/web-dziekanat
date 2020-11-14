import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import * as HeaderActions from 'src/app/shared/components/custom-header/state/header.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
})
export class CustomHeaderComponent implements OnInit {
  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.store.dispatch(HeaderActions.toggleSidebar());
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
