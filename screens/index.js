import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import PushedScreen from './PushedScreen';

// DANG KY TAT CA CAC SCREEN CHO APP
export function registerScreens() {
    Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen);
    Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
    Navigation.registerComponent('example.PushedScreen', () => PushedScreen);
}