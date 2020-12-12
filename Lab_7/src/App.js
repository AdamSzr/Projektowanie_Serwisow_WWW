import logo from './logo.svg';
import './App.css';

import Mynavbar from './Mynavbar'

import  About   from "./About";
import  Contact  from "./Contact";
import Home from "./Home";
import Zapychacz from "./Zapychacz"
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import { TextField, Paper, Typography, AppBar, Tab } from '@material-ui/core';



const presentdata=[
  {
      id:'0',
      name:'jan',
      username:'Janek',
  },
  {
      id:'1',
      name:'Malgosia',
      username:'Skrzypek',
  }   
]

function App() 
{
  return (
     <div>
       
       <BrowserRouter >
          <Mynavbar/>
          <Typography className='app_content'>
            <Switch>
              <Route path='/zapychacz' render={()=>(
                <Zapychacz data={presentdata}/>
              )}/>
              <Route path='/about'  component ={About}/>
              <Route path='/contact' component={Contact}/>   
              <Route path='/' component={Home}/>
            </Switch> 
          </Typography>
       </BrowserRouter>
     </div>
  );
}

export default App;
