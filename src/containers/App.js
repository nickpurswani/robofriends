import React from "react";
// import {robots} from"./robots";

import MainPage from '../components/MainPage';
import {requestRobots, setSearchField} from '../action';
import {connect} from 'react-redux';
import "tachyons";
const mapStateToProps=state=>{
    return{
        searchField : state.searchRobots.searchField,
        robots:state.requestRobots.robots,
        isPending:state.requestRobots.isPending,
        error:state.requestRobots.error
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
        onRequestRobots:()=>{
          return  dispatch(requestRobots())
        }
    }
}



// -----------------------------------------
 const App=(props)=>{
return <MainPage {...props} />
}
export default connect(mapStateToProps,mapDispatchToProps)(App);//connect is higher order function that return function