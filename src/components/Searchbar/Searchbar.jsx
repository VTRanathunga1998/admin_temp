import React from 'react';
import './Searchbar.css';

export default function Searchbar(){
    return(
        <div className='searchbar'>

            <div className='filter'>
                <img src='./assets/filter.png'/>
            </div>

            <div className='search'>
                <img src='./assets/search.png'/>
                <input type='text' value="Search..."/>
            </div>
            
        </div>
    )

}