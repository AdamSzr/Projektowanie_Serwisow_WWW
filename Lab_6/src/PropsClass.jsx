import React, { Component } from 'react'

class PropsClass extends Component
{
    render()
    {
        return  <div> Props Class args [{this.props['name']} {this.props['surname']}]  </div>;
    }

}

export default PropsClass