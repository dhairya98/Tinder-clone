// // import { Router } from '@mui/icons-material';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";
import Chats from './Chats'
import './App.css';
import Header from './Header';
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Router>
      {/* <Header />  */}
      {/* Header has to be inside of Router because of React Routing Rules */}
        <Switch>
          {/* <Route path ='/dhairya'><h1>I am Dhairya 🔥   </h1></Route> */}
          <Route path ='/chat/:person'> {/** /chat/dhairya */}
            <Header backButton='/chat' />
            <ChatScreen />
          </Route>
          <Route path ='/chat'>
            <Header backButton='/'/>
            <Chats />
          </Route>
          <Route path ='/'>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route> 
          {/* Default at the bottom */}
        </Switch>
      </Router>
    </div>
   );
 }

export default App;

// // Tasks

// {/* Tinder Cards */}
//       {/* Buttons below Tinder Cards */}
      
//       {/* Chat Screen */}
//       {/* Individual Chat Room */}