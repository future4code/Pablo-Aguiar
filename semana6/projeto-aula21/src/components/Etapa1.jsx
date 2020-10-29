import React from 'react';


function Etapa1() {
    return (
        <div>
            <div>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
            </div>
                <p>1. Qual o seu nome?</p>
                <input type="text"/>
            <div>
                <p>2. Qual a sua idade?</p>
                <input type="text"/>
            </div>

            <div>
                <p>3. Qual é o seu e-mail?</p>
                <input type="text"/>
            </div>

            <div>
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>        

            </div>
            
                       

        </div>
    );
  }
  
  export default Etapa1;