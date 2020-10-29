import React from 'react'
import './App.css';
import axios from 'axios'

class App extends React.Component {

  state = {
    activityData: null
  }

  onClickButton = () => {
    const apiUrl = 'https://www.boredapi.com/api/activity/'
    axios.get(apiUrl).then((response) => {
      this.setState({activityData: response.data});
    });
  }


  render() {
    return (
      <div className="App">
        <button onClick= {this.onClickButton}>Sugerir atividade</button>
        {this.state.activityData && <div> 
          <p>Nome: {this.state.activityData.activity}</p>
          <p>Tipo: {this.state.activityData.type}</p>
          <p>Número de participantes: {this.state.activityData.participants} </p>
          <p>Preço: {this.state.activityData.price}</p>          
        </div>
        }
      </div>
    );
  }
}

export default App;
