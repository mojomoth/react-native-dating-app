import { Navigation } from 'react-native-navigation';
import FirstTabScreen from './pages/FirstTabScreen';
import SecondTabScreen from './pages/SecondTabScreen';
import PushedScreen from './pages/PushedScreen';

// screen related book keeping
const registerScreens = (store, Provider) => {
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen, store, Provider);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen, store, Provider);
  Navigation.registerComponent('example.PushedScreen', () => PushedScreen, store, Provider);
};

export default registerScreens;
