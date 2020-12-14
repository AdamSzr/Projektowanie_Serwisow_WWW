import logo from './logo.svg';
import './App.css';

import Mynavbar from './Mynavbar'

import  About   from "./About";
import  Contact  from "./Contact";
import Home from "./Home";
import Zapychacz from "./Zapychacz"
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import { TextField, Paper, Typography, AppBar, Tab, Card } from '@material-ui/core';



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

const CardDataSource=[
  {
    src:"./deszcz.jpg",
    title:"Gdynia",
    description:"Las w Gdyni, widok obok Demptowa."
  },
  {
    src:"./chojnice.jpg",
    title:"Jezioro Karsińskie",
    description:"Jezioro Karsińskie (kasz. Kôrsyńsczé Jezoro) – przepływowe jezioro rynnowe na Równinie Charzykowskiej (objęte Zaborskim Parkiem Krajobrazowym) o powierzchni 679 ha i maksymalnej głębokości dochodzącej do 27,1 m."
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
              <Route path='/contact' component={Contact}/> 

              <Route path='/' render={()=>(
                <Home data={CardDataSource}/>
              )}/>
            </Switch> 
          </Typography>
       </BrowserRouter>
     </div>
  );
}

export default App;
