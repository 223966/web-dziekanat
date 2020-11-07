import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as HeaderActions from '../state/header.actions';

export interface HeaderState {
  showSidebar: boolean;
}

export const initialState: HeaderState = {
  showSidebar: false,
};

const getHeaderFeatureState = createFeatureSelector<HeaderState>('header');

export const getShowSidebar = createSelector(
  getHeaderFeatureState,
  (state) => state.showSidebar
);

export const headerReducer = createReducer<HeaderState>(
  initialState,
  on(
    HeaderActions.toggleSidebar,
    (state): HeaderState => {
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };
    }
  )
);
