import React, { useState } from 'react';
import useCustomForm from '../../hooks/useCustomForm';




    
    const SearchBar = (props) => {
            const [search, setSearch]=useState('')
        
            function handleVideoSubmit(event){    
                event.preventDefault();
                console.log(search)
                props.searchInput(search)
            }
        
        
        
        return ( 
            <div>
                <div className='style'>
                    <form onSubmit={handleVideoSubmit}>
                        <input type='text'
                            placeholder="Search a video"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)} />
                    <button type='submit'>Search Videos</button>
                </form>
                </div>
            </div>


         );
    }   
    
     
    export default SearchBar;
