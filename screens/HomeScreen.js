import React from 'react'

import { Button, View } from 'react-native'
import styles from '../styles/style'

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View styles={styles.container}>
                <Button
                    title="Add some friends"
                    onPress={() =>
                        this.props.navigation.navigate('Detail')
                    }
                />
            </View>
        );
    }
}