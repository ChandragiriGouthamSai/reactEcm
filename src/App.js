import React from 'react'
import Source from './Source'
import LogInPage from "./LogInPage";



const App = () => {
  return (
    <div>
     <LogInPage />

    </div>
  )
}

// export default App
// import React from 'react';
// import './App.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Signin from './Signin';
// import Profile from './Profile';
//
// function App() {
//     const token = localStorage.getItem('accessToken');
//
//     if(!token) {
//         return <Signin />
//     }
//
//     return (
//         <div className="wrapper">
//             <BrowserRouter>
//                 <Switch>
//                     <Route path="/profile">
//                         <Profile />
//                     </Route>
//                     <Route path="/">
//                         <Profile />
//                     </Route>
//                 </Switch>
//             </BrowserRouter>
//         </div>
//     );
// }

export default App;