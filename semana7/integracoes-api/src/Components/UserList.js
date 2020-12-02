import Axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const DeleteButton = styled.span`
    color: black;
    margin-left: 10px;
`

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const axiosConfig = {
    headers: {
        Authorization: 'Pablo-Aguiar-Dumont'
    }
}

class UserList extends React.Component {
    
    state = {
        userList: []
    };

    componentDidMount = () => {
        this.getAllUsers ()
    }

    getAllUsers = () => {

        Axios.get(baseUrl, axiosConfig)
        .then(response => {
            this.setState({userList: response.data})
        }).catch(error => {
            console.log(error.message)
        })
    }

    deleteUser = (userId) => {
        Axios.delete(`${baseUrl}/${userId}`,axiosConfig)
        .then(response => {
            alert('Usuario deletado!')
            this.getAllUsers()
        }).catch(error => {
            console.log(error.message)
        })
    }


    render () {

        const renderUserList = this.state.userList.map((user) => {
            console.log(user.id)
            return (
                <p key={user.id}>
                {user.name}
                <DeleteButton onClick = {() => this.deleteUser(user.id)}>X</DeleteButton>
                </p>
            );
        })

        return (
            <div>
                {renderUserList}         
            </div>
        )
    }
}

export default UserList