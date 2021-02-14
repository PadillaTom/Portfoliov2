import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  COLOR_DARK,
  COLOR_LIGHT,
} from './actions';

const navigation_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === COLOR_DARK) {
    return { ...state, color: true };
  }
  if (action.type === COLOR_LIGHT) {
    return { ...state, color: false };
  }
  return state;
};

export default navigation_reducer;
