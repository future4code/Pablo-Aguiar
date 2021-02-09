import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { baseUrl } from '../constants';
import PostCard from './PostCard';
import styled from 'styled-components';
import { Button, TextField } from '@material-ui/core';

const FeedStyled = styled.div`
    display: grid;
    justify-items: center;
    gap: 20px;
`

const FeedPage = (props) => {

    const history = useHistory();
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [text, setText]= useState('')

    useEffect(() =>{
        if(localStorage.getItem('token') === null){
            history.push('/');
        }        
    }, [])

    useEffect(()=> {
        fetchPosts();
    })

    const fetchPosts = () => {
        const axiosConfig = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }

        axios.get(`${baseUrl}/posts`, axiosConfig).then((response) => {
            setPosts(response.data.posts)
        })
    }

    const handleVotePost = async (postId, direction) => {
        const axiosConfig = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }

        const body = {
            direction: direction
        }

        try{
           await axios.put(`${baseUrl}/posts/${postId}/vote`, body, axiosConfig);
           fetchPosts();
        }catch(error) {
            alert('Não foi possível votar');
        }
    }

    const handleCreatePost = async () => {
        const axiosConfig = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }

        const body = {
            text: text,
            title: title,
        }

        try{
            await axios.post(`${baseUrl}/posts`, body, axiosConfig);
            fetchPosts();
        }catch(error){
            alert('Não foi possível criar um post')
        }
    }

    return(
        <FeedStyled>
            <TextField 
                placeholder={'Título do post'} 
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <TextField 
                placeholder={'Título do post'} 
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <Button onClick={handleCreatePost} >Criar Post!</Button>
            {posts.map(post => {
                return (<PostCard key={post.id} handleVotePost={handleVotePost} post={post}/>)
            })}
        </FeedStyled>
    )
}

export default FeedPage