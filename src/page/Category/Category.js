import React from 'react'
import { View, Text, FlatList } from 'react-native'
import RNC from 'react-native-css'
import { connect } from 'react-redux'
import ListIconItem from 'src/components/IconItem/IconItem'
import theme from 'src/config/theme'

@connect(
  state => state.chat,
  {}
)
export default class Category extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <ListIconItem icon={require('src/assets/imgs/ic_new_friend.png')} text='新的朋友'/>
        <ListIconItem icon={require('src/assets/imgs/ic_group_cheat.png')} text='群聊'/>
        <ListIconItem icon={require('src/assets/imgs/ic_tag.png')} text='标签'/>
        <ListIconItem icon={require('src/assets/imgs/ic_offical.png')} text='公众号'/>

        <FlatList
          extraData={this.props.categorys}
          data={this.props.categorys}
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
    .wrapper {
        flex: 1;
        background-color: ${theme.bgColor};
    }
    .letter {
        height: 24px;
        padding-left: 20px;
        background-color:  ${theme.bgColor};
        justify-content: center;
    }
`)