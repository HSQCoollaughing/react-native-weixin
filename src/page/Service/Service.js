import React from 'react'
import { View } from 'react-native'
import RNC from 'react-native-css'
import IconItem from 'src/components/IconItem/IconItem'

export default class Service extends React.Component {
  render () {
    return <View style={styles.wrapper}>
      <View style={styles.block}/>
      <IconItem isDivider={false} icon={require('src/assets/imgs/ic_friend_circle.png')} text="朋友圈"/>
      <View style={styles.block}/>
      <IconItem isDivider={true} icon={require('src/assets/imgs/ic_scan_blue.png')} text="扫一扫"/>
      <IconItem isDivider={false} icon={require('src/assets/imgs/ic_shake_blue.png')} text="摇一摇"/>
      <View style={styles.block}/>
      <IconItem isDivider={true} icon={IconItem.defaultIcon} text="看一看"/>
      <IconItem isDivider={false} icon={IconItem.defaultIcon} text="搜一搜"/>
      <View style={styles.block}/>
      <IconItem isDivider={false} icon={require('src/assets/imgs/ic_around_blue.png')} text="附近的人"/>
      <View style={styles.block}/>
      <IconItem isDivider={true} icon={IconItem.defaultIcon} text="购物"/>
      <IconItem isDivider={false} icon={require('src/assets/imgs/ic_game.png')} text="游戏"/>
      <View style={styles.block}/>
      <IconItem isDivider={false} icon={IconItem.defaultIcon} text="小程序"/>
      <View style={styles.block}/>
    </View>
  }
}

// language=CSS
const styles = RNC(`
    .wrapper {
        flex: 1;
        background-color: #DDDDDD;
    }

    .block {
        background-color: #DDDDDD;
        height: 24px;
    }
`)
