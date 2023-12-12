import React, { Component } from "react";
// import {robots} from"./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox.js";
import Scroll from "./Scroll";
import "tachyons";
class App extends Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchfield:"",
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {return response.json()})
      .then(json => {
        this.setState({robots:json})
      })
    }
    onSearchChange=(event)=>{
        this.setState({ searchfield : event.target.value },()=>{
            console.log(this.state.searchfield);
        });
  
    }
    render(){
        const filteredRobots=this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());    
            });
    return(
        <div className="tc">
            <h1 className="f1" >RoboFriends</h1>
            <SearchBox searchchange={this.onSearchChange}/>
            <Scroll>
<CardList robots={filteredRobots}  />
</Scroll>
</div>
    )}

};
export default App;