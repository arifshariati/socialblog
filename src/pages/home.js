import React, { Component } from 'react';
import Axios from 'axios';

// MUI Stuff
import Grid from '@material-ui/core/Grid';

// components
import Post from '../components/Post';

class home extends Component {

    state = {
        posts:null
    }
    componentDidMount(){

        Axios.get('/posts')
        .then(res => {
            this.setState({

                posts:res.data
            })
        })
        .catch(err => console.log(err));
    }
    render() {

        let recentPostsMarkup = this.state.posts ? (

            this.state.posts.map(post => <Post post={post} key={post.postId} />)
        ): <p>Loading ...</p>

        return (
            <Grid container spacing={4}>
                <Grid item md={3} sm={12} xs={12}> <h2>Left Grid</h2></Grid>
                
                <Grid item md={4} sm={12} xs={12}>
                    {recentPostsMarkup}
                </Grid>
                
                <Grid item md={3} sm={12} xs={12}><h2>Right Grid</h2></Grid>  
            </Grid>
        )
    }
}

export default home;
