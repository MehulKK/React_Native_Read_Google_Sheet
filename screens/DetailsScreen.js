import React from 'react'
import FastImage from 'react-native-fast-image';

import { Text, Button, FlatList, TextInput, View, Image, Dimensions } from 'react-native'

export default class DetailsScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      responseModel: {
        char_id: '',
        name: '',
        birthday: '',
        occupation: '',
        img: '',
        status: '',
        nickname: '',
        portrayed: ''
      }
    }
  }

  componentDidMount() {
    const data = this.props.navigation.getParam('data', 'some default value');
    console.log(data)
    this.setState({
      responseModel: data
    });
  }


  render() {
    return (
      <View >

        <FastImage
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width,
            alignItems: 'center'
          }}
          source={{ uri: this.state.responseModel.img, priority: FastImage.priority.normal }}
          resizeMode={FastImage.resizeMode.cover}
        />

        <View style={{ padding: 10 }}>
          <Text>
            <Text style={{ fontWeight: 'bold' }}>Name : </Text>
            <Text>{this.state.responseModel.name}</Text>
          </Text>

          <Text>
            <Text style={{ fontWeight: 'bold' }}>Birthdate : </Text>
            <Text>{this.state.responseModel.birthday}</Text>
          </Text>

          <Text>
            <Text style={{ fontWeight: 'bold' }}>Occupation : </Text>
            <Text>{this.state.responseModel.occupation}</Text>
          </Text>

          <Text>
            <Text style={{ fontWeight: 'bold' }}>Status : </Text>
            <Text>{this.state.responseModel.status}</Text>
          </Text>

          <Text>
            <Text style={{ fontWeight: 'bold' }}>Nickname : </Text>
            <Text>{this.state.responseModel.nickname}</Text>
          </Text>

          <Text>
            <Text style={{ fontWeight: 'bold' }}>Portrayed : </Text>
            <Text>{this.state.responseModel.portrayed}</Text>
          </Text>
        </View>


      </View>
    )
  }
}