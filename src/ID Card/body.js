import React from 'react';
import biku from '../Images/BIKU.jpeg'

function Main(){
    return (
        <div>
        <hr></hr>
        <div className="image">
           <img className="idimage" src={biku}/>
        </div>
        <div className="details">
            <ul>
            <li>Name: Bikram Basak</li>
            <li>Email Address: bikrambasak@gmail.com</li>
            <li>Phone Number: 8981277673</li>
            <li>Member Since: March 2019</li>
            <li>Blood Group: B+</li>
            <li>Dues: 2</li>
            </ul>
        </div>
    </div>
    )
}

export default Main