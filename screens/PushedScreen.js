import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

class PushedScreen extends React.Component {

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
            <View class={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    },
    row: {
        height: 48,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.054)',
    },
    text: {
        fontSize: 16,
    },
});

export default PushedScreen;