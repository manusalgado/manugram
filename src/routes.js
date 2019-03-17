import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomePage from './pages/Home'

const Routes = createStackNavigator({
    Home: { screen: HomePage },
})

export default createAppContainer(Routes)