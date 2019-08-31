import React, { useContext } from 'react';
import { Text } from 'react-native';
import { SafeAreaView, NavigationEvents } from 'react-navigation';


import { Context } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const LoginScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Text>Login Screen</Text>
      <AuthForm
        headerText="Login Form"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Login"
      />
      <NavLink
        text="Link to go Home"
        routeName="Home"
      />
    </SafeAreaView>
  );
};
/*
const styles = StyleSheet.create({
  button: {
    margin: 50,
    padding: 50,
    backgroundColor: '#EEE',
  },
});
*/
export default LoginScreen;
