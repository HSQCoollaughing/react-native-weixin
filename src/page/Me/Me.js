import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import RNC from 'react-native-css'
import IconItem from 'src/components/IconItem/IconItem'
import theme from 'src/config/theme'

export default class Me extends React.Component {
  render () {
    return <View style={styles.wrapper}>
      <View style={styles.block}/>
      <View style={styles.myInfo}>
        <View style={styles.myInfoIconBox}>
          <Image
            style={styles.myInfoIcon}
            source={require('src/assets/imgs/touxiang.jpg')}/>
        </View>

        <View style={styles.myInfoTextBox}>
          <Text style={styles.myInfoName}>橘子</Text>
          <Text style={styles.myInfoWx}>微信号：xxxxxxxxx</Text>
        </View>

        <View style={styles.myInfoQR}>
          <Image style={styles.myInfoCode} source={require('src/assets/imgs/ic_qr_code.png')}/>
        </View>

      </View>
      <View style={styles.block}/>
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

const {width} = Dimensions.get('window')
// language=CSS
const styles = RNC(`
.wrapper {
    flex: 1;
    background-color: ${theme.bgColor};
}

.myInfo {
    background-color: #fff;
    height: 74px;
    flex-direction: row;
}

.myInfoIconBox {
    align-items: center;
    justify-content: center;
    width: 100px;
}

.myInfoIcon {
    width: 64px;
    height: 64px;
}

.myInfoTextBox {
justify-content: center;
width: ${width - 100 - 80};
}
.myInfoName{
font-size: 18px;
color: #000;
margin-bottom: 4px;
}

.myInfoQR {
  width: 80px;
  justify-content: center;
  align-items: center;
}
.myInfoCode{
width: 20px;
height: 20px;
}
.block {
    background-color: ${theme.bgColor};
    height: 24px;
}
`)