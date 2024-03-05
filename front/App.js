import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import './global.css';
import OfferDetails from './pages/OfferDetails/OfferDetails';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import MainPage from './pages/MainPage/MainPage';
import MainPage from './pages/MainPage';
import HotelRegister from './pages/HotelRegister'
import './global.css';
import OfferDetails from './pages/OfferDetails';
import EditProfile from './pages/EditProfile';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="hotelRegister" component={HotelRegister} />
        <Stack.Screen options={{headerShown: false}} name="editprofile" component={EditProfile} />
        <Stack.Screen options={{headerShown: false}} name="main" component={MainPage} />
        <Stack.Screen options={{headerShown: false}} name="offer" component={OfferDetails} />
        <Stack.Screen options={{headerShown: false}} name="cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 
