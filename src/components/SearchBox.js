import React from "react";
import "tachyons";

const SearchBox=({searchchange})=>{
    return(
        <div>
            <input
            id="seachbox"
            className='pa3 ba b--green bg-lightest-blue'
            type="search"
            placeholder='search robots'
            onChange={searchchange}
            />
        </div>
    );
}
export default SearchBox;