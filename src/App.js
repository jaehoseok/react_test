import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import PostRegister from './Component/PostRegister/PostRegister';
import PostList from './Component/PostList/PostList';

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/postRegister' component={PostRegister}/>
          <Route exact path='/postList' component={PostList}/>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
