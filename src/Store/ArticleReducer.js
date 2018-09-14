const defaultState = {
  list: []
}
const articleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLE_LIST':
      {
        state.list = action.payload
        return state
      }
      defaulte: return state
  }
}
