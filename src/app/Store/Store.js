import React, { Component } from 'react'
import ModelCard from '../components/Model/ModelCard';
import { Container } from 'react-bootstrap';
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
            <Container fluid className="product-container">
                <ModelCard modelos={this.state.modelos} />
            </Container>
        )
    }

}
