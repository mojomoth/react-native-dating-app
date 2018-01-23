import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import registerScreens from './screens';
import store from './store';

registerScreens(store, Provider);

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
