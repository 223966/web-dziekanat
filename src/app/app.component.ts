import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { title } from 'process';
import { Observable } from 'rxjs';
import {
  getShowHeader,
  getShowSidebar,
} from './shared/components/custom-header/state/header.reducer';
import { State } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  readonly mobileWidth: number = 600;

  readonly options: SidebarOption[] = [
    { name: 'IFE Website', url: 'https://www.ife.p.lodz.pl/' },
    { name: 'Wikamp', url: 'https://edu.p.lodz.pl/' },
  ];

  showSidebar$: Observable<boolean>;
  showHeader$: Observable<boolean>;
  isMobile: boolean = window.innerWidth < this.mobileWidth;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showSidebar$ = this.store.select(getShowSidebar);
      this.showHeader$ = this.store.select(getShowHeader);
    }, 0);
  }

  @HostListener('window:resize', ['$event.target'])
  onResize(event) {
    this.isMobile = event.innerWidth < this.mobileWidth;
  }
}

interface SidebarOption {
  name: string;
  url: string;
}
