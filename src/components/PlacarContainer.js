import React from 'react';
import PropTypes from 'prop-types';
import Time from './Time';
import Partida from './Partida';

export default class PlacarContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            golsVisitante: 0,
            golsCasa: 0
        }
    }

    marcarGolVisitante() {
        this.setState({
            golsVisitante: ++this.state.golsVisitante
        })
    }
    marcarGolCasa() {
        this.setState({
            golsCasa: ++this.state.golsCasa
        })
    }

    render() {
        const { partida, casa, visitante } = this.props;
        const style = {float: "left", "marginRight": "20px"};

        return (
            <div>
                {this.props.weather}
                <div style={style}>
                    <h3>Casa</h3>
                    <Time
                        nome={casa.nome}
                        gols={this.state.golsCasa}
                        marcarGol={this.marcarGolCasa.bind(this)}
                    />
                </div>
                <div style={style}>
                    <Partida {...partida} />
                </div>
                <div style={style}>
                    <h3>Visitante</h3>
                    <Time
                        nome={visitante.nome}
                        gols={this.state.golsVisitante}
                        marcarGol={this.marcarGolVisitante.bind(this)}
                    />
                </div>
                <div style={{clear: "both"}}>
                </div>
            </div>
        );
    }
}

PlacarContainer.propTypes = {
    weather: PropTypes.string,
    matchTime: PropTypes.number.isRequired
};

PlacarContainer.defaultProps = {
    weather: 'Very Hot!',
}