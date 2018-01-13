import React from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList, TouchableHighlight } from 'react-native'
import ChatListItem from './Childs/ChatListItem'
import { addMsg, addNum } from 'src/store/reducers/chat'

@connect(
  state => state.chat,
  {addMsg, addNum}
)
export default class ChatList extends React.PureComponent {
  _keyExtractor = (item) => item.id
  timecode = null

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    let id = 2
    // setInterval(() => {
    //   id++
    //   this.props.addMsg({
    //     id: id,
    //     name: `腾讯新闻`,
    //     msgNum: 8,
    //     msgText: '不知道干点啥！',
    //     date: '11:32'
    //   })
    // }, 5000)
  }

  componentWillUnmount () {
    clearInterval(this.timecode)
  }

  render () {
    return (
      <FlatList
        extraData={this.props.msgs}
        data={this.props.msgs}
        keyExtractor={this._keyExtractor}
        renderItem={({item}) => this.renderItem(item)}/>
    )
  }

  renderItem (item) {
    return <TouchableHighlight underlayColor='#DDDDDD' onPress={() => {}} onLongPress={() => {}}>
      <ChatListItem msgNum={item.msgNum} msgText={item.msgText} date={item.date}/>
    </TouchableHighlight>
  }
}
