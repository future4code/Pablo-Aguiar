import { Avatar, Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
import React, {useState} from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CommentIcon from '@material-ui/icons/Comment';
import { useHistory } from 'react-router';

const PostCard = (props) => {

    const history = useHistory();

    const handlePostDetail = () => {
        history.push(`/post/${props.post.id}`)
    }

    const handleUpvote = () => {
        props.handleVotePost(props.post.id, 1)
    }
    const handleDownvote = () => {
        props.handleVotePost(props.post.id, -1)
    }

    return (
        <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              R
            </Avatar>
          }
          title={props.post.title}
          subheader={props.post.username}
        />        
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.post.text}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={handleUpvote} >
            <KeyboardArrowUpIcon color={props.post.userVoteDirection === 1 ? 'primary' : 'disabled'}/>
          </IconButton>
            <span>{props.post.votesCount}</span>
          <IconButton onClick={handleDownvote} >
            <KeyboardArrowDownIcon color={props.post.userVoteDirection === -1 ? 'secondary' : 'disabled'}/>
          </IconButton>
          {!props.hideComment && (
            <Button
                variant='contained'
                startIcon={<CommentIcon/>}
                onClick={handlePostDetail}
                >                  
                comentar
            </Button>)}
        </CardActions>        
      </Card>
    )

}

export default PostCard