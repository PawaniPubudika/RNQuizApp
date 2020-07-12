import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import Javaquiz from '../screens/javaquiz';
// import Cquiz from '../screens/cquiz';

screens={
    Home:{
        screen: Home
    },

    Javaquiz:{
        screen: Javaquiz
    },

    // C:{
    //     screen: Cquiz
    // }
}

const HomeStack=createStackNavigator(screens);

export default createAppContainer(HomeStack);