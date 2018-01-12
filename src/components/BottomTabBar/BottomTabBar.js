import React from 'react'
import RNC from 'react-native-css'
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'

export default class BottomTabBar extends React.Component {
  icon = [
    {
      name: '微信',
      sicon: require('../../assets/imgs/home_selected.png'),
      nicon: require('../../assets/imgs/home_normal.png')
    },
    {
      name: '通讯录',
      sicon: require('../../assets/imgs/category_selected.png'),
      nicon: require('../../assets/imgs/category_normal.png')
    },
    {
      name: '发现',
      sicon: require('../../assets/imgs/service_selected.png'),
      nicon: require('../../assets/imgs/service_normal.png')
    },
    {
      name: '我',
      sicon: require('../../assets/imgs/mine_selected.png'),
      nicon: require('../../assets/imgs/mine_normal.png')
    }
  ]

  getTabImage (tabName, activeTabIndex, tabIndex) {
    const tab = this.icon.filter(item => item.name === tabName)[0]
    return activeTabIndex === tabIndex ? tab.sicon : tab.nicon
  }

  render () {
    return (
      <View style={[styles.tabs, this.props.style]}>
        {
          this.props.tabs.map((tab, i) => {
            return <TouchableWithoutFeedback
              key={tab}
              onPress={() => this.props.goToPage(i)}>
              <View style={styles.tab}>
                <Image style={styles.icon} source={this.getTabImage(tab, this.props.activeTab, i)}/>
                <Text style={[styles.text, {color: this.props.activeTab === i ? '#46c01b' : '#999999'}]}>{tab}</Text>
              </View>
            </TouchableWithoutFeedback>
          })
        }
      </View>
    )
  }
}

// language=CSS
const styles = RNC(`
    tabs {
        height: 72px;
        flex-direction: row;
        border-left-width: 0;
        border-right-width: 0;
        background-color: #fff;
        border-top-color: #CCCCCC;
        border-top-width: 0.5px;
    }
    tab {
        padding-top: 6px;
        flex: 1;
        align-items: center;
    }
    icon {
        width: 24px;
        height: 24px;
    }
    text {
        font-size: 12px;
    }
`)
