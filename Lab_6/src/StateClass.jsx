// eslint-disable-next-line
import React, { Component } from 'react'

class StateClass extends Component
{
    constructor ()
    {
        super();
        this.state = {
        'tabledata' : 'SomeText in state obj',
        }
    }

    render()
    {
        return (
          <div>
              
              { this.state.tabledata}
          </div>
        );
    }

}

export default  StateClass