import React from 'react'
import { View, Text } from 'react-native'
import RNC from 'react-native-css'
import IconItem from 'src/components/IconItem/IconItem'
import theme from 'src/config/theme'

export default class Me extends React.Component {
  render () {
    return <View style={styles.wrapper}>
      <View style={styles.block}/>
      <View style={styles.myInfo}></View>
      <IconItem isDivider={false} icon={require('src/assets/imgs/ic_wallet_blue1.png')} text="钱包"/>
      <View style={styles.block}/>
      <IconItem icon={require('src/assets/imgs/ic_sellection1.png')} text="收藏"/>
      <IconItem icon={require('src/assets/imgs/ic_photo_blue1.png')} text="相册"/>
      <IconItem icon={require('src/assets/imgs/ic_card_pack1.png')} text="卡包"/>
      <IconItem icon={require('src/assets/imgs/ic_emo_yellow.png')} text="表情"/>
      <View style={styles.block}/>
      <IconItem isDivider={false} icon={require('src/assets/imgs/ic_setting_blue.png')} text="设置"/>
    </View>
  }
}

// language=CSS
const styles = RNC(`
    .wrapper {
        flex: 1;
        background-color: ${theme.bgColor};
    }

    .myInfo {
        height: 64px;
    }

    .block {
        background-color:  ${theme.bgColor};
        height: 24px;
    }
`)