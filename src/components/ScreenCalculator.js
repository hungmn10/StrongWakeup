import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Screen1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>{'Screen 1'}</Text>
                <Button
                    title={'Native module'}
                    accessibilityLabel="Learn more about this purple button"
                    onPress={() => {
                        // this.props.navigation.navigate('NativeModuleScreen')
                    }}
                />
            </View>
        );
    }
}

export default Screen1
