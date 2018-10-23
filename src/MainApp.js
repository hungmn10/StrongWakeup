import React, {Component} from 'react';
import {createStackNavigator,} from 'react-navigation';
import ScreenCalculator from './components/ScreenCalculator'

class MainApp extends Component<> {
    render() {
        let MyScreen = createStackNavigator(
            {
                ScreenCalculator: {
                    screen: ScreenCalculator,
                    navigationOptions: {title: 'ScreenCalculator'},
                },
            }
        )
        return (
            <MyScreen/>
        );
    }
}

export default MainApp

