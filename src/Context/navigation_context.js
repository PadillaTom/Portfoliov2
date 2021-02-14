import React, { useContext, useReducer } from 'react';
// Reducer
import reducer from './navigation_reducer';
// Actions
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from './actions';

const initialState = {
  isSidebarOpen: false,
  color: true,
  // True = Dark || False = Light
};

const NavigationContext = React.createContext();

export const NavigationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <NavigationContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </NavigationContext.Provider>
  );
};
export const useNavigationContext = () => {
  return useContext(NavigationContext);
};
