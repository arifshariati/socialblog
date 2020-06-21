import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

// MUI Stuff
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

//page 
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

// components
import Navbar from './components/Navbar';


const theme = createMuiTheme({

  palette:{
    primary:{
      light:'#af52bf',
      main:'#9c27b0',
      dark:'#6d1b7b',
      contrastText:'#fff'
    },
    secondary:{
      light:'#ffee33',
      main:'#ffea00',
      dark:'#b2a300',
      contrastText:'#fff'
    }
  },
  spreadThis:{
    typography:{
      useNextVariants: true
    },
    card:{
      padding:'2em',
      margin:'2em auto'
    },
    form:{
        textAlign:'center',
    },
    textField:{
        marginTop:'2em'
    },
    button:{
        marginTop:'3em',
        position:'relative'
    },
    customError:{
        color:'red',
        marginTop:'1em'
    },
    progress:{
        position:'absolute'
    }
  }
})
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
      <Router>
      <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/login" component={login} />
            <Route exact path="/signup" component={signup} />
          </Switch>
        </div>
      </Router>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
