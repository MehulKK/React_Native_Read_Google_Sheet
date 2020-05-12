import React from 'react'

import { Button, View, ActivityIndicator, FlatList, Dimensions, TouchableOpacity, Text } from 'react-native'

import FastImage from 'react-native-fast-image';
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
        console.disableYellowBox = true;
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
                                birthday: jsonData.feed.entry[i]['gsx$birthday']['$t'],
                                occupation: jsonData.feed.entry[i]['gsx$occupation']['$t'],
                                img: jsonData.feed.entry[i]['gsx$img']['$t'],
                                status: jsonData.feed.entry[i]['gsx$status']['$t'],
                                nickname: jsonData.feed.entry[i]['gsx$nickname']['$t'],
                                portrayed: jsonData.feed.entry[i]['gsx$portrayed']['$t']
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
                <FlatList
                    style={{ marginBottom: 50, marginTop: 10 }}
                    data={this.state.dataSource}

                    renderItem={({ item, index }) => <View style={{
                        padding: 5
                    }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Detail', {
                                    data: this.state.dataSource[index]
                                });
                            }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <FastImage
                                    style={{
                                        borderRadius: 10,
                                        width: 60,
                                        height: 60,
                                        alignItems: 'center'
                                    }}
                                    source={{ uri: item.img, priority: FastImage.priority.normal }}
                                    resizeMode={FastImage.resizeMode.cover}
                                    borderRadius={10}
                                />

                                <View marginStart={10} status={{ flex: 1, flexDirection: 'column' }}>
                                    <Text>
                                        <Text style={{ fontWeight: 'bold' }}>Name : </Text>
                                        <Text>{item.name}</Text>
                                    </Text>

                                    <Text>
                                        <Text style={{ fontWeight: 'bold' }}>Birthdate : </Text>
                                        <Text>{item.birthday}</Text>
                                    </Text>

                                    <Text>
                                        <Text style={{ fontWeight: 'bold' }}>Occupation : </Text>
                                        <Text>{item.occupation}</Text>
                                    </Text>
                                </View>
                            </View>



                        </TouchableOpacity>
                    </View>}

                />
            </View>
        );
    }
}