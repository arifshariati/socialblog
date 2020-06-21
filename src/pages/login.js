import React, { Component } from 'react';
import propTypes from 'prop-types';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// MUI Stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme) => ({

    ...theme.spreadThis
});


class login extends Component {

    constructor(){

        super();
        this.state = {
            email:'',
            password:'',
            loading:false,
            errors:{}
        }
    }

    handleSubmit = (event)=> {

        event.preventDefault();
        this.setState({ 
                loading: true
            });
        
        const userData = {

            email: this.state.email,
            password: this.state.password
        }
        Axios.post('/login',userData)
        .then(res =>{

            localStorage.setItem('FBIdToken',`Bearer ${res.data.token}`);
            
            this.setState({

                loading: false
            });

            this.props.history.push('/');
        })
        .catch(err => {

            this.setState({

                errors: err.response.data,
                loading: false
            })
        })

    }
    
    handleChange = (event)=> {
    
        this.setState({

            [event.target.name]:event.target.value
        })
    }

    render() {

        const { classes } = this.props;

        const { errors, loading } = this.state;

        return (
            <Grid container className={classes.form} spacing={2}>
                <Grid item sm />
                <Grid item sm>
                    
                    <Card className={classes.card}>
                    <Typography variant="h2" className={classes.pageTitle}>Login</Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField 
                            id="email" 
                            name="email" 
                            type="email" 
                            label="email" 
                            className={classes.textField} 
                            helperText={errors.email}
                            error={errors.email ? true: false}
                            value={this.state.email}
                            onChange={this.handleChange}
                            fullWidth
                         />

                        <TextField 
                            id="password" 
                            name="password" 
                            type="password" 
                            label="password" 
                            className={classes.textField}
                            helperText={errors.password}
                            error={errors.password ? true: false} 
                            value={this.state.password}
                            onChange={this.handleChange}
                            fullWidth
                         />
                        
                        {errors.general && (

                        <Typography variant="body2" className={classes.customError}>{errors.general}</Typography>
                        )}
                         <Button 
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            disabled={loading}
                        >
                            Login
                            { loading && (

                                <CircularProgress size={30} className={classes.progress} color="primary" />
                            )}
                        </Button>

                    </form>
                    </Card>
                    <small >don't have an account? signup here <Link to="/signup">here</Link></small>
                </Grid>
                <Grid item sm />
            </Grid>
        )
    }
}

login.propTypes = {

    classes: propTypes.object.isRequired
}
export default withStyles(styles)(login);
