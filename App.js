import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // GOI HAM NAY DE DANG KY APP

// BAN CO THE BAT DAU APP DANG TAB HAY DANG MOT SCREEN DUY NHAT
Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'One',
            screen: 'example.FirstTabScreen', // this is a registered name for a screen
            icon: require('./img/one.png'),
            title: 'Screen One'
        },
        {
            label: 'Two',
            screen: 'example.SecondTabScreen',
            icon: require('./img/two.png'),
            title: 'Screen Two'
        }
    ]
});