import createDataContext from '../createDataContext';
import * as actions from './services';
import { reducer } from './reducer';

export const { Provider, Context } = createDataContext(
  reducer,
  {
    ...actions,
  },
  {
    token: null,
    errorMessage: '',
  },
);
