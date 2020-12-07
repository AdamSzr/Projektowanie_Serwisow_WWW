import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import './style.css';

import HelloClass from './HelloClass'
import HelloFunc from './HelloFunc'
import Tree from './Tree'
import PropsRoot from './PropsRoot'
import StateClass from './StateClass'
import MapComponent from './MapComponent'
import FuncInProps from './FuncInProps'
import BootstrapComponent from './BootstrapComponent'


//import App from './App';
/*
X 1. tworzenie aplikacji za pomocą modułu ‘create-react-app’, 
X 2. tworzenie komponentów funkcyjnych i klasowych,
X 3. należy utworzyć komponent nadrzędny i dwa komponenty potomne, mogą to być np. tabele, listy ‘ol’ lub ‘ul’, obrazki itp. Dowolność wyboru, aby nie były to przykłady zbyt zbliżone do tych z repo,
+ 4. należy wykorzystać props (atrybuty, właściwosci) przy przekazywaniu danych do komponentu potomnego,
X 5. należy wykorzystać state (stan) przy tworzeniu komponentu klasowego,
X 6. należy dodać plik .css do wybranych komponentów,
X 7. należy zastosować funkcję map() przy generowaniu komponentów i należy pamiętać o atrybucie key,
X 8. należy zrealizowac wysyłanie funkcji za pomocą ‘props’,
plusy za wykorzystanie Bootstrapa lub react-bootstrap’a w create-react-app.
*/


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
   <HelloFunc />
   <HelloClass />
   <Tree />
   <PropsRoot />
   <StateClass />
   <MapComponent />
   <FuncInProps func={() => alert("Props Func Fired.")} />
   <BootstrapComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);
//   { /* <App /> */}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// --------------------------------------------------------------------------
// sekcja notatkek
/*
kazdy komponent musi byc charAt(0).toUpper

component - class & func  -> musza posiadac export na koncu.
functional component -> takes props and returns an declaration
if posible go functional components over class
class component -> can contain own data named 'state' 
provide livecycle hooks

RETURN musi mieć w lini jakiś znacznik html. XD . Nawiasy nie działaja z returnem ... 


*/