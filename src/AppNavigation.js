import { Navigation } from 'react-native-navigation';
import FirstTabScreen from './pages/FirstTabScreen';
import SecondTabScreen from './pages/SecondTabScreen';
import PushedScreen from './pages/PushedScreen';

const registerScreens = () => {
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('example.PushedScreen', () => PushedScreen);
};

registerScreens();

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.FirstTabScreen', // this is a registered name for a screen
      icon: require('../res/one.png'),
      selectedIcon: require('../res/one_selected.png'), // iOS only
      title: 'Screen One',
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      icon: require('../res/two.png'),
      selectedIcon: require('../res/two_selected.png'), // iOS only
      title: 'Screen Two',
    },
  ],
});
