import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { navigate } from '../navigationRef';

export default (reducer, actions, defaultValue) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};
    Object.keys(actions).forEach((key) => {
      boundActions[key] = actions[key](dispatch, navigate);
    });

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  Provider.propTypes = {
    // eslint-disable-next-line react/require-default-props
    children: PropTypes.node,
  };

  return { Context, Provider };
};
