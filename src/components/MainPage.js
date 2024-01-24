import React, { useEffect,useState } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import Header from './Header';
import ErrorBoundary from "./ErrorBoundary";

const MainPage=(props)=>{
    const [loading,setLoading]=useState(true);
    const {searchField,onSearchChange,robots,onRequestRobots}=props;
    useEffect( ()=>{
        const fetchData = async () => {
            try {
              await onRequestRobots();
              
            } catch (error) {
              // Handle errors if necessary
              console.error('Error fetching robots:', error);
            } finally {
              setLoading(false);
            }
          };
        
          fetchData(); 
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
    )}

}
export default MainPage