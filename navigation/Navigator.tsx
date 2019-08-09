///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////
import { createSwitchNavigator, createDrawerNavigator } from 'react-navigation'; // Remember to import the other navigators later
import LoadingScreen from '../screens/loading/LoadingScreen';
import HomeScreen from '../screens/home/HomeScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

///////////////////////////////////////////////////////////////
// ROUTES
///////////////////////////////////////////////////////////////
const MainNavigator = createDrawerNavigator({ HomeScreen, SettingsScreen });

const RootSwitch = createSwitchNavigator(
  { LoadingScreen, MainNavigator },
  { initialRouteName: "MainNavigator" }
);

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default RootSwitch;