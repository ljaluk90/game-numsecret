let numeroSecreto = 0;
let intentos=0;
let listaNumSorteados = [];
let numMax = 10;



function asingTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsusario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsusario === numeroSecreto){
        asingTexto('p', `Acertaste el Numero secreto con ${intentos} ${(intentos === 1) ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');//removeAttribute quita atributos al HTML
    }
    //si el usuario falla
    else{
        if(numeroDeUsusario > numeroSecreto){
            asingTexto('p', 'Intentalo de nuevo, El numero secreto es menor');
        }else{
            asingTexto('p', 'Intentalo de nuevo, El numero secreto es mayor');
        }
        intentos++;
        limpiarInput();
    }
    return;
}

function limpiarInput(){
    document.querySelector('#valorUsuario').value = '';
}

function numeroAleatorio() {
    let numGenerado = Math.floor(Math.random()* numMax )+1; 

    if(listaNumSorteados.length == numMax){
        asingTexto('p','Ya usaste todos los Numeros posibles')
    }else{
        //si el numero esta incluido en el arreglo
        if(listaNumSorteados.includes(numGenerado)){
            return numeroAleatorio();
        }
        else{
            listaNumSorteados.push (numGenerado);
            return numGenerado;
        }
    }
}

function condicionesInicio(){
    asingTexto('h1', 'Juego del numero secreto');
    asingTexto('p', `Indica un numero del 1 al ${numMax}`);
    numeroSecreto=numeroAleatorio();
    intentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //setAttribute sirve para agregar atributos al HTML necesita dos parametros, el nombre del atributo y la condicion true para que se habilite.
}

function resetGame(){
    //limpiarInput
    limpiarInput();
    //condiciones de inicio
    condicionesInicio()  
    //deshabilitar boton de nuevo juego
    document.getElementById('reiniciar').attribute('disabled');


}
condicionesInicio()
