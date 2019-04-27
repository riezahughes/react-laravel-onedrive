   // resources/assets/js/components/App.js

   import React, { Component } from 'react'
   import ReactDOM from 'react-dom'
   import { BrowserRouter, Route, Switch } from 'react-router-dom'
   import Header from './header/Header'
   import OneDrive from './explorer/Base'

   class App extends Component {
     render () {
       return (
         <BrowserRouter>
           <div>
             <Header />
           </div>
           <div>
              <OneDrive />
           </div>
         </BrowserRouter>
       )
     }
   }

   ReactDOM.render(<App />, document.getElementById('app'))