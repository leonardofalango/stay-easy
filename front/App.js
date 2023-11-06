import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import MainPage from './pages/MainPage';
import './global.css';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="cadastro" component={Cadastro} />
        <Stack.Screen options={{headerShown: false}} name="main" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
