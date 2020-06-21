import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import themeFile from './util/theme';
import jwtDecode from 'jwt-decode';

// MUI Stuff
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

//page 
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

// components
import Navbar from './components/Navbar';
import AuthRoute from './util/AuthRoute';

let authenticated;
const token = localStorage.FBIdToken;
if(token){

  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 100000 < Date.now()){

    authenticated = false;
    window.location.href = '/login';
  } else {

    authenticated = true;
  }
}
const theme = createMuiTheme(themeFile);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
      <Router>
      <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={home} />
            <AuthRoute exact path="/login" component={login} authenticated={authenticated} />
            <AuthRoute exact path="/signup" component={signup} authenticated={authenticated} />
          </Switch>
        </div>
      </Router>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
