import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

class FirstTabScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    pushScreen = () => {
        this.props.navigator.push({
            screen: 'example.Types.Push',
            title: 'New Screen',
        });
    };


    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'green'
    }
});

export default FirstTabScreen;