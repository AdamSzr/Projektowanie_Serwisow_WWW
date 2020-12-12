import React from 'react'
import { TextField, Paper, Typography, AppBar, Tab, Tabs} from '@material-ui/core';

import { Link,NavLink } from "react-router-dom";



function Mynavbar(props) { // key value where key is path and textlabel value.
    return (
        <nav >
        <ul className="bar_links">
            <AppBar >  
              <Tabs className='style_link' >
              <Link to='/'  >
                    <Tab label="Home" />  
                </Link>
                <Link to={ { pathname:'/zapychacz'  } }>

                <Tab label="Zapychacz"    />  
                </Link>
                <Link to='/contact'  >
                    <Tab label="Contact" />  
                </Link>

              </Tabs>
            </AppBar>
            </ul>
         </nav>
    )
}

export default Mynavbar


