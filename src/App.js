import React from 'react';
import './App.css';
import PlacarContainer from './components/PlacarContainer'

const data = {
    partida: {
        estadio: "Maracanã/RJ",
        data: "02/10/2019",
        horario: "20h"
    },
    casa: {
        nome: "Time 1"
    },
    visitante: {
        nome: "Time 2"
    }
};

function App() {
    return (<PlacarContainer 
        {...data}
        matchTime={1}
    />);
}

export default App;
