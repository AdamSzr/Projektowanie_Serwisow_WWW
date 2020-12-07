// eslint-disable-next-line
import React, { Component } from 'react'

class MapComponent  extends Component{
    constructor()
    {
        super();
        this.state = {
            'numbers': [1,2,3,4,5]
        }
    }

    
    render()
    {
        var newItems = this.state.numbers.map((element)=>{
            return <span key={element}> {element*element} </span>
        });

        return (
            <div> Example Map  -&gt; Set of (item*item) = {newItems}</div>
        )
    }

}
export default MapComponent;
