import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';
import { baseUrl } from '../constants';
import axios from 'axios';

const SignUpPage = (props) => {

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    useEffect(() =>{
        if(localStorage.getItem('token') !== null){
            history.push('/feed')
        }

    }, [])

    const handleUsernameChange = (event) => {
        const newUsername = event.target.value
        setUserName(newUsername)     
    } 

    const handleEmailChange = (event) => {
        const newEmail = event.target.value
        setEmail(newEmail)
    }

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value
        setPassword(newPassword)
    }

    const handleSignup = async (event) => {
        event.preventDefault();

        const body = {
            email: email,
            password: password,
            username: username,
        }

        try {
            const response = await axios.post(`${baseUrl}/signup`, body)

            localStorage.setItem('token', response.data.token);

            history.push('/feed')

        }catch(error) {
            alert('Cadastro não realizado, tente novamente')
        }
    }

    const handleGoToLogin = (event) => {
        history.push('/')
    }

    

    return (
        <Container component="main" maxWidth="xs">
        <div>            
            <Typography component="h1" variant="h5">
                Cadastrar
            </Typography>
            <form onSubmit={handleSignup}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Nome de usuário"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={handleUsernameChange}
                value= {username}
                />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlePasswordChange}
                value={password}
                />
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleEmailChange}
                value= {email}
                />

            <Button
                type="submit"
                fullWidth               
                variant="contained"                        
            >
                Cadastrar
            </Button>
            <Grid container>                       
                <Grid item>
                <Link href="#" onClick={handleGoToLogin} variant="body2">
                    {"Já tem conta? Faça o login"}
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        </Container>


    )



}

export default SignUpPage;