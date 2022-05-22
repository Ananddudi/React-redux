const intialstate = {
  count:2,
  name:'harsh'
}
function reducer(state=intialstate,action){
	console.log('data',action)
	if(action.type === 'inc'){
		state = {...state,count:state.count+action.payload}
	}
	return state
}

export default reducer;