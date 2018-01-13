const initState = {
  msgs: [
    {
      id: 1,
      name: `腾讯新闻`,
      msgNum: 8,
      msgText: '今天吃啥',
      date: '11:30'
    }
  ]
}

export function chat (state = initState, action) {
  switch (action.type) {
    default:
      return state
  }
}