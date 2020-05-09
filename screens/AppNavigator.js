
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
    Home : {screen :  HomeScreen},
    Detail : {screen : DetailsScreen},
})

export default AppContainer = createAppContainer(AppNavigator);