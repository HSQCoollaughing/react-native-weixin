import React from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList, TouchableHighlight } from 'react-native'
import ChatListItem from './Childs/ChatListItem'
import { addMsg } from 'src/store/reducers/chat'

@connect(
  state => state.chat,
  {addMsg}
)
export default class ChatList extends React.PureComponent {
  _keyExtractor = (item) => item.id

  constructor (props) {
    super(props)
  }

  componentDidMount () {
  }

  componentWillUnmount () {
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
