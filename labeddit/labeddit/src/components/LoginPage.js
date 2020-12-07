import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import { baseUrl } from '../constants';
import { useHistory } from 'react-router';


const LoginPage = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem('token') !== null){
            history.push('/feed')
        }
    }, [])

    const handleGoToSignup = () => {
        history.push('/signup')
    }
    
    const handleUpdateEmail = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    }

    const handleUpdatePassword = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        }

    const handleLogin = async (event) => {
        event.preventDefault();
        const body = {
            email: email,
            password: password,
        }

        try {
            const response = await axios.post(`${baseUrl}/login`, body)
            localStorage.setItem('token', response.data.token);
            history.push('./feed')
        }catch (error) {
            alert('Falha no login. Email ou senha incorretos')
        }
    }
        
        return (            
            <Container component="main" maxWidth="xs">
                <div>
                    <Avatar>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Entrar!
                    </Typography>
                    <form onSubmit={handleLogin}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleUpdateEmail}
                        value= {email}
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
                        onChange={handleUpdatePassword}
                        value={password}
                        />
                    
                    <Button
                        type="submit"
                        fullWidth
                        onClick={handleLogin}
                        variant="contained"                        
                        >
                        Entrar
                    </Button>
                    <Grid container>                       
                        <Grid item>
                        <Link href="#" onClick={handleGoToSignup} variant="body2">
                            {"Não tem uma conta? Cadastre-se"}
                        </Link>
                        </Grid>
                    </Grid>
                    </form>
                </div>
            </Container>          

    )

}


export default LoginPage;
