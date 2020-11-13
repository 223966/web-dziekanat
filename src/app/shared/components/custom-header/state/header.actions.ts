import { createAction } from '@ngrx/store';

export const toggleSidebar = createAction('[Header] Toggle Sidebar');
export const hideHeader = createAction('[Header] Hide Header');
export const showHeader = createAction('[Header] Show Header');
