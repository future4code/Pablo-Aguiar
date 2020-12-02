import React from 'react'
import FormPage from './Components/FormPage'
import UserList from './Components/UserList'
import './App.css'



class App extends React.Component {
  
  state = {
    formPage: true
  }

  changePage = () => {
    this.setState({formPage: !this.state.formPage})
  }

  render () {
    const currentPage = this.state.formPage ? (<FormPage/>) : (<UserList/>)

    return (
      <div className='App'>
        {currentPage}
        <button 
        onClick={this.changePage}>
          Mudar Página
        </button> 
      </div>
    );
  }

}


export default App;
