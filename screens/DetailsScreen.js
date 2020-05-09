import React from 'react'

import { Text , Button, FlatList, TextInput, View, Image,StyleSheet} from 'react-native'

export default class HomeScreen extends React.Component {
    render() {
      return (
        MyTextView()
      );
    }
  }
  
   function MyTextView() {
    return (
      <View style={{
        flex: 1,
        marginTop: 50,
        padding: 40
      }}>
        <Text>It's simple lable</Text>
        <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          margin: 30,
          backgroundColor: 'cyan',
          borderRadius: 20,
          padding: 10
        }}
          defaultValue="TextInput Layout" />
  
        <Button style={{
          borderWidth: 1,
          borderColor: 'gray'
        }}
          onPress={() => Alert.alert("This is simple alert dialog")}
          title="This is Buton"
        />
  
        <Image
          source={{ uri: 'https://reactnative.dev/docs/assets/p_cat1.png' }}
          style={{ width: 200, height: 200 }} />
  
  
        <FlatList
          data={[
            { key: 'Devin' },
            { key: 'Dan' },
            { key: 'Dominic' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' },
          ]}
          renderItem={({ item }) => listItem(item)}
        />
      </View>
    )
  }
  
  function listItem(item) {
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Image
          source={{ uri: 'https://reactnative.dev/docs/assets/p_cat1.png' }}
          style={{ width: 30, height: 30 }} />
        <Text style={styles.item}>{item.key}</Text>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    TextInputStyleClass: {
      height: 30,
      borderColor: '#FF5722',
      borderWidth: 2,
      borderRadius: 20
    }
  })