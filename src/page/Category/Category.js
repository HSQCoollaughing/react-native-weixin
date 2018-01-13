import React from 'react'
import { View, Text, FlatList } from 'react-native'
import RNC from 'react-native-css'
import ListIconItem from './Childs/ListIconItem'

export default class Category extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      categoryList: [
        {
          id: '1',
          type: 'letter',
          data: 'A'
        },
        {
          type: 'category',
          id: '2',
          data: {
            name: 'AAAA'
          }
        },
        {
          type: 'category',
          id: '3',
          data: {
            name: 'ACCC'
          }
        },
        {
          id: '4',
          type: 'letter',
          data: 'C'
        },
        {
          id: '5',
          type: 'category',
          data: {
            name: 'C1111'
          }
        },
      ]
    }
  }

  render () {
    return (
      <View>
        <ListIconItem icon={require('src/assets/imgs/ic_new_friend.png')} text='新的朋友'/>
        <ListIconItem icon={require('src/assets/imgs/ic_group_cheat.png')} text='群聊'/>
        <ListIconItem icon={require('src/assets/imgs/ic_tag.png')} text='标签'/>
        <ListIconItem icon={require('src/assets/imgs/ic_offical.png')} text='公众号'/>

        <FlatList
          extraData={this.state.categoryList}
          data={this.state.categoryList}
          keyExtractor={item => item.id}
          renderItem={({item}) => this.renderItem(item)}/>
      </View>
    )
  }

  renderItem (item) {
    if (item.type === 'letter') {
      return <View style={styles.letter}>
        <Text>{item.data}</Text>
      </View>
    } else if (item.type === 'category') {
      return <ListIconItem icon={require('src/assets/imgs/touxiang.jpg')} text={item.data.name}/>
    }
  }
}

// language=CSS
const styles = RNC(`
    .letter {
        height: 24px;
        padding-left: 20px;
        background-color: #CCCCCC;
        justify-content: center;
    }


`)