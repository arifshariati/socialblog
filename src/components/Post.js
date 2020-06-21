import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

//MUI Stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {

    root: {
        display: 'flex',
        margin:'1em auto'
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
      },
      content: {
        flex: '1 0 auto',
        objectFit:'cover',
        textAlign:'left'
      },
      cover: {
        width: 120,
      }
}

class Post extends Component {
    render() {

        dayjs.extend(relativeTime);

        const { 
            classes,
            post:{
                title,
                body,
                createdAt,
                userImage,
                userHandle,
                postId,
                likeCount,
                commentCount
            } 
        } = this.props;

        return (
            <Card className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    image={userImage}
                    title="Live from space album cover"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component={Link} to={`/users/${userHandle}`} variant="h5">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {dayjs(createdAt).fromNow()}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {body}
                        </Typography>
                    </CardContent>
                    
                </div>
                
            </Card>
        )
    }
}

Post.propTypes = {

    classes: propTypes.object.isRequired
}

export default withStyles(styles)(Post);
