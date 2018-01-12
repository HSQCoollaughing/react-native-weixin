import React from 'react'
import { View, Text, FlatList, TouchableHighlight } from 'react-native'
import ChatListItem from './ChatListItem'

export default class ChatList extends React.Component {
  _keyExtractor = (item) => item.id

  constructor (props) {
    super(props)
    let arr = []
    for (let i = 0; i < 50; i++) {
      arr.push(i)
    }
    this.state = {
      list: arr.map((item, index) => {
        return {
          id: index,
          name: `腾讯新闻${String.toString(index)}xxxx`,
          msgNum: index + 1,
          msgText: `${index}`,
          date: '今天'
        }
      })
    }
  }

  render () {
    return (
      <FlatList
        extraData={this.state.list}
        data={this.state.list}
        keyExtractor={this._keyExtractor}
        renderItem={({item}) => this.renderItem(item)}
      />
    )
  }

  renderItem (item) {
    return (
      <TouchableHighlight underlayColor='#DDDDDD' onPress={() => {}}>
        <ChatListItem msgNum={item.msgNum} msgText={item.msgText} date={item.date}/>
      </TouchableHighlight>
    )
  }
}
