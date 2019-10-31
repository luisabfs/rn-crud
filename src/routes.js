import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import CustomForm from './pages/CustomForm';

const Routes = createAppContainer(
  createStackNavigator({
      Main,
      CustomForm,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#003366',
        },
        headerTintColor: '#fff',
      },
    },
  ),
);

export default Routes;
