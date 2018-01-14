import React from 'react'
import RNC from 'react-native-css'
import { View, Dimensions, Text } from 'react-native'

import ScrollableTabView from 'react-native-scrollable-tab-view'
import BottomTabBar from 'src/components/BottomTabBar/BottomTabBar'
import HomeHeader from 'src/components/Header/HomeHeader'

import ChatList from './ChatList/ChatList'
import Category from './Category/Category'
import Service from './Service/Service'
import Me from './Me/Me'
import {
  MenuProvider, Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'

export default class Home extends React.Component {
  render () {
    return (
      <MenuProvider style={{flex: 1}}>
        <View style={styles.wrapper}>
          <HomeHeader></HomeHeader>
          <View style={styles.container}>
            <ScrollableTabView
              renderTabBar={() => <BottomTabBar/>}
              tabBarPosition='overlayBottom'>
              <View tabLabel='微信' style={styles.view}>
                <ChatList/>
              </View>
              <View tabLabel='通讯录' style={styles.view}>
                <Category/>
              </View>
              <View tabLabel='发现' style={styles.view}>
                <Service/>
              </View>
              <View tabLabel='我' style={styles.view}>
                <Me/>
              </View>
            </ScrollableTabView>
          </View>
        </View>
      </MenuProvider>
    )
  }
}

let {height} = Dimensions.get('window')

// language=CSS
const styles = RNC(`
.wrapper {
    height: ${height};
}

.container {
    margin-top: 50px;
    height: ${height - 50};
}

.view {
    flex: 1;
}
`)
