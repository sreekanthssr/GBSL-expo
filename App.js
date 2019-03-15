import {createStackNavigator, createAppContainer} from 'react-navigation';
import React, { Component } from "react";
import {Provider} from 'react-redux';

import Home from './src/component/home';
import Register from './src/component/register';
import RequestBlood from './src/component/requestBlood';
import configStore from './src/store';
import Loader from './src/component/common/showLoading';
import CustomAlert from './src/component/common/customAlert';



const store = configStore();


const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Register: {screen: Register},
  RequestBlood: {screen: RequestBlood}
},{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });

const AppContainer = createAppContainer(MainNavigator);

class App extends Component {  
  render() {
    return (
      <Provider store={store}>
        <Loader />
        <CustomAlert />
        <AppContainer />
      </Provider>
    );
  }
}

export default App;



