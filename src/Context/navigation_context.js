import React, { useContext, useReducer } from 'react';
// Reducer
import reducer from './navigation_reducer';
// Actions
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  COLOR_DARK,
  COLOR_LIGHT,
} from './actions';

const initialState = {
  isSidebarOpen: false,
  color: false,
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
  const setColorDark = () => {
    dispatch({ type: COLOR_DARK });
  };
  const setColorLight = () => {
    dispatch({ type: COLOR_LIGHT });
  };

  return (
    <NavigationContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        setColorDark,
        setColorLight,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
export const useNavigationContext = () => {
  return useContext(NavigationContext);
};
