const initState = {
  msgs: [
    {
      id: 1,
      name: `腾讯新闻`,
      msgNum: 8,
      msgText: '今天吃啥',
      date: '11:30'
    }
  ],
  categorys: [
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

const CHAT_ADD_MSG = 'CHAT_ADD_MSG'

export function chat (state = initState, action) {
  switch (action.type) {
    case CHAT_ADD_MSG:
      return {...state, msgs: state.msgs.concat(action.payload)}
    default:
      return state
  }
}

export function addMsg (msgData) {
  return {
    type: CHAT_ADD_MSG,
    payload: msgData
  }
}

