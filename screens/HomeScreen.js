import React from 'react'

import { Button, View, ActivityIndicator } from 'react-native'
import styles from '../styles/style'

export default class HomeScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: true,
            responseModel: {
                char_id: '',
                name: '',
                birthday: '',
                occupation: '',
                img: '',
                status: '',
                nickname: '',
                portrayed: ''
            },
            responseList: [],
        };
    }

    componentDidMount() {
        this.onFetchData()
    }

    async onFetchData() {
        var sheet_unique_id = '1ikcdDRhklW2mzjooRlyZbQDf70CAWUTN3DItUQGLaSY';
        var sheet_index = 1
        var url = 'https://spreadsheets.google.com/feeds/list/' + sheet_unique_id + '/' + sheet_index + '/public/values?alt=json';
        try {
            let response = await fetch(
                url,
                {
                    method: "get",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }

                }
            );
            const jsonData = await response.json();

            if (response.status >= 200 && response.status < 300) {

                if (jsonData != null) {
                    for (let i = 0; i < jsonData.feed.entry.length; i++) {
                        console.log(jsonData.feed.entry[i]['gsx$charid']['$t'])
                        this.setState({
                            responseModel: {
                                char_id: jsonData.feed.entry[i]['gsx$charid']['$t'],
                                name: jsonData.feed.entry[i]['gsx$name']['$t'],
                                birthday: jsonData.feed.entry[i]['gsx$charid']['$t'],
                                occupation: jsonData.feed.entry[i]['gsx$charid']['$t'],
                                img: jsonData.feed.entry[i]['gsx$charid']['$t'],
                                status: jsonData.feed.entry[i]['gsx$charid']['$t'],
                                nickname: jsonData.feed.entry[i]['gsx$charid']['$t'],
                                portrayed: jsonData.feed.entry[i]['gsx$charid']['$t']
                            }
                        })
                        this.state.responseList.push(this.state.responseModel)
                    }
                    this.setState({
                        dataSource: this.state.responseList
                    })
                }
                this.setState({ isLoading: false })
            }
            else {
                alert(jsonData.message)
                this.setState({ isLoading: false })
            }
        } catch (errors) {

            alert(errors);
            this.setState({ isLoading: false })
        }
    }

    render() {

        if (this.state.isLoading) {
            return (
              <View style={[styles.activitycontainer, styles.horizontal]}>
                <ActivityIndicator style={{ alignContent: 'center' }} size="large" color="#334b2d" />
              </View>
      
            );
          }
        return (
            <View styles={styles.container}>
                <Button
                    title="Add some friends"
                    onPress={() =>
                        //this.props.navigation.navigate('Detail')
                        alert(this.state.responseList.length)
                    }
                />
            </View>
        );
    }
}