import React, { Component } from 'react'
import ModelCard from '../components/Model/ModelCard';
import './Store.css'

export default class Store extends Component {
    state = {
        modelos: []
    };
    componentDidMount() {
        fetch('https://backendtienda3d.somee.com/api/Modelo/get/getAllModelos', {
            method: 'GET',
            headers: new Headers({ 'Content-type': 'application/json' }),
            rejectUnauthorized: false,
            mode: 'cors', // <---
            cache: 'default'
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({ modelos: data })
            })
            .catch(console.log)
    }
    render() {
        return (
            <div className="product-container">
                <ModelCard modelos={this.state.modelos} />
            </div>
        )
    }

}
