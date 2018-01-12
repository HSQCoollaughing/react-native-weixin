import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import RNC from 'react-native-css'

export default class ChatListItem extends React.Component {
  constructor (props) {
    super(props)
  }

  render (props) {
    return (
      <View style={styles.item}>
        <View style={styles.headBox}>
          <Image style={styles.headPortrait} source={require('src/assets/imgs/touxiang.jpg')}/>
          <Text style={styles.msgNum}>{(this.props.msgNum > 99 ? 99 : this.props.msgNum) || '3'}</Text>
        </View>
        <View style={styles.msgBox}>
          <Text style={styles.msgName}>
            {this.props.name || '腾讯新闻'}
          </Text>
          <Text style={styles.msg}>{this.props.msgText || '今天吃什么...'}</Text>
        </View>
        <Text style={styles.date}>
          {this.props.date || '昨天'}
        </Text>
      </View>
    )
  }
}
const {width} = Dimensions.get('window')

// language=CSS
const styles = RNC(`
item {
    height: 64px;
    padding: 8px;
    flex-direction: row;
    border-bottom-width: 0.5px; 
    border-bottom-color: #DDDDDD;
}

headBox {
    width: 50px;
    margin-right: 8px;
    position: relative;
    align-items: center;
    justify-content: center;
}

headPortrait {
    width: 48px;
    height: 48px;
}

msgNum {
    background-color: red;
    width: 14px;
    height: 14px;
    border-radius: 7px;
    color: #fff;
    text-align: center;
    font-size: 10px;
    position: absolute;
    right: 0;
    top: 0;
}

msgBox {
    width: ${width - 50 - 8 - 50};
    flex-direction: column;
    justify-content: space-around;
}

msgName {
    font-size: 16px;
    color: #000;
    margin-top: 4px;
}

msg {
    font-size: 14px;
    color: #999999;
}

date {
    margin-top: 4px;
    font-size: 12px;
    color: #999999;
}
`)
