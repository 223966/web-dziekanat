import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as HeaderActions from '../state/header.actions';

export interface HeaderState {
  showSidebar: boolean;
  showHeader: boolean;
}

export const initialState: HeaderState = {
  showSidebar: false,
  showHeader: true,
};

const getHeaderFeatureState = createFeatureSelector<HeaderState>('header');

export const getShowSidebar = createSelector(
  getHeaderFeatureState,
  (state) => state.showSidebar
);

export const getShowHeader = createSelector(
  getHeaderFeatureState,
  (state) => state.showHeader
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
  ),
  on(
    HeaderActions.hideHeader,
    (state): HeaderState => {
      return {
        ...state,
        showHeader: false,
      };
    }
  ),
  on(
    HeaderActions.showHeader,
    (state): HeaderState => {
      return {
        ...state,
        showHeader: true,
      };
    }
  )
);
