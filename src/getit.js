import React from 'react';
// import {connect} from 'react-redux';
import {useSelector,useDispatch} from 'react-redux';

const Getit = ()=>{
	const getis = useSelector((state)=>state.count)
	const dispatch = useDispatch()
	return (
		<>
		<div>{getis}</div>
		<button onClick={()=>dispatch({type:'inc',payload:1})}>click</button>
		</>
		)
}

// const mapstate = (state)=>{
// 	return {
// 		get:state.count
// 	}
// }
// const dispatchit = (dispatch)=>{
// 	return{
// 		makeit : (ownprop)=>dispatch({type:"getthething",payload:ownprop})
// 	}
// }

// export default connect(mapstate,dispatchit)(Getit);
export default Getit;