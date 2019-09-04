import createDataContext from './createDataContext';
import * as actions from './Auth/services';
import reducer from './Auth/reducer';

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
