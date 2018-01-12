import React from 'react'
import { View, Text, FlatList } from 'react-native'
import ListIconItem from './ListIconItem'

export default class Category extends React.Component {
  render () {
    return (
      <View>
        <ListIconItem icon={require('src/assets/imgs/ic_new_friend.png')} text='新的朋友'/>
        <ListIconItem icon={require('src/assets/imgs/ic_group_cheat.png')} text='群聊'/>
        <ListIconItem icon={require('src/assets/imgs/ic_tag.png')} text='标签'/>
        <ListIconItem icon={require('src/assets/imgs/ic_offical.png')} text='公众号'/>
      </View>
    )
  }
}
