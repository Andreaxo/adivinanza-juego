import React from 'react';

function Input(){


    return(
        <div className="logica">
            <div className="logica_html">
                <form  onSubmit={ev => {
            ev.preventDefault(); 
            var x = (ev.target.input_value.value);
            let randomsito = (Math.floor(Math.random() * (10 - 1)) + 1); 

            if(x == randomsito){
                alert('Ganaste!')
            }else{
                alert(`Eres una basura el numero era ${randomsito}`)
            }
        }
        }>

        <input type="number"  name='input_value' autoComplete='off' 
        placeholder='Ingresa un numero (1-10)'>
            
        </input>
        <input type='submit'></input>
        </form>
         
         
        
        
            </div>
        </div>
        
    )
}

export default Input;