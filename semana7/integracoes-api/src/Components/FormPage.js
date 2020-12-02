import React from 'react'
import axios from 'axios'

class FormPage extends React.Component {
    
    state = {
        nameValue: '',
        emailValue: ''
    }

    createUser = () => {
        const body = {
            name: this.state.nameValue,
            email: this.state.emailValue
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
            headers: {
                Authorization: "Pablo-Aguiar-Dumont"
            }
        }).then(response => {
            alert('Usuario Criado!')
            this.setState({nameValue: '', emailValue: ''})
        }).catch(error => {
            console.log(error.message)
        })

    }
      
    onChangeNameValue = (event) => {
        this.setState({nameValue: event.target.value})
    } 

    onChangeEmailValue = (event) => {
        this.setState({emailValue: event.target.value})
    }
    
    
    render () {
        return (
            <div>
                <div>
                    <input 
                    value = {this.state.nameValue} 
                    onChange = {this.onChangeNameValue}
                    />

                    <input 
                    value = {this.state.emailValue} 
                    onChange= {this.onChangeEmailValue}
                    />
                </div>
                
                <button onClick = {this.createUser}>Criar Usuário</button>
            </div>
        )
    }
}

export default FormPage
