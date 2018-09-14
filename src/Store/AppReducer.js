
const defaultState = {
  menuActivedkey:'home',
  token:''
}
const appReducer = (state=defaultState, action) =>{
  switch (action.type){
    case 'CHANGE_MENU': {
      state.menuActivedKey = action.payload
      return  state
    }
    default: return state
  }
}

