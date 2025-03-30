import React from 'react'
import { FlatList, Text, View } from 'react-native'
import data from '../../config/API/dummyData.json'
import CardChat from './Components/CardChat'

export const PrincipalScreen = () => {
  return (
    <FlatList
      data={data.chats}
      style={{flex: 1}}
      renderItem={(data) => (
        <View>
          <Text>
            hola
          </Text>
        <CardChat />
        </View>
      )} />
  )
}
