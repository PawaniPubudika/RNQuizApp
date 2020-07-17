import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import Javaquiz from '../screens/javaquiz';

screens={
    Home:{
        screen: Home
    },

    Javaquiz:{
        screen: Javaquiz
    },
}

const MainStack=createStackNavigator(screens);

export default createAppContainer(MainStack);