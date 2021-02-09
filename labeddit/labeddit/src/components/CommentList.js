import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const CommentList = (props) => {

    const handleUpvote = () => {
        if(props.comment.userVoteDirection === 1){
            props.handleCommentVote(props.comment.id, 0)
        }else{
            props.handleCommentVote(props.comment.id, 1)
        }
    }

    const handleDownvote = () => {
        if(props.comment.userVoteDirection === -1){
            props.handleCommentVote(props.comment.id, 0)
        }else{
            props.handleCommentVote(props.comment.id, -1)
        }
    }

    return (
        <ListItem>
            <ListItemText
            primary={props.comment.text}
            secondary={props.comment.username}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" onClick={handleUpvote}>
                    <KeyboardArrowUpIcon color={props.comment.userVoteDirection === 1 ? 'primary' : 'disabled'}/>
                </IconButton>
                <span>{props.comment.votesCount}</span>
                <IconButton edge="end" onClick={handleDownvote}>
                    <KeyboardArrowDownIcon color={props.comment.userVoteDirection === -1 ? 'secondary' : 'disabled'} />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default CommentList