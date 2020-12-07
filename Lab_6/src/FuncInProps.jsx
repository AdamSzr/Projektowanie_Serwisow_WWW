// eslint-disable-next-line
import React, { Component } from 'react'

class FuncInProps extends Component{
    constructor(props)
    {
        super(props);
    }    

    render()
    {
        return (
            <button variant="primary" onClick={this.props.func} > Fire Props Func</button>
        )
    }
}
export default FuncInProps;