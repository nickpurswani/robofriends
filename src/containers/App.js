import React, { useEffect,useState } from "react";
// import {robots} from"./robots";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Header from '../components/Header';
import ErrorBoundary from "../components/ErrorBoundary";
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
    const [loading,setLoading]=useState(true);
    const {searchField,onSearchChange,robots,onRequestRobots}=props;
    useEffect( ()=>{
         onRequestRobots();
         setLoading(false);
    },[onRequestRobots])
        const filteredRobots=robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase());    
            });
            if (loading){
                return <h1>.....Loading</h1>
            }
            else{
    return(
        <div className="tc">
            <Header/>
            <SearchBox searchchange={onSearchChange}/>
            <Scroll>
            <ErrorBoundary>
            <CardList robots={filteredRobots}  />
            </ErrorBoundary>
            </Scroll>
        </div>
    )}}
export default connect(mapStateToProps,mapDispatchToProps)(App);//connect is higher order function that return function