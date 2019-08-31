import React from 'react';
import codePush from 'react-native-code-push';

import AppContainer from './AppContainer';

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
};

// const AppContainer = createAppContainer(switchNavigator);
const App = codePush(codePushOptions)(AppContainer);

export default () => <App />;
