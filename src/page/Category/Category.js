import React from 'react'
import { View, Text, FlatList } from 'react-native'
import RNC from 'react-native-css'
import ListIconItem from './Childs/ListIconItem'

export default class Category extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      categoryList: ['A']
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
          keyExtractor={item => item}
          renderItem={({item}) => this.renderLetter(item)}
        />
      </View>
    )
  }

  renderLetter (letter) {
    return <Text style={styles.letter}>{letter}</Text>
  }
}

// language=CSS
const styles = RNC(`
    .letter {
        height: 45px;
        background-color: #777777;
    }


`)