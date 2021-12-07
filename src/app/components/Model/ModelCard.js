import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import './ModelCard.css'
import Model from './Model';

const ModelCard = ({ modelos }) => {
    return (
        <Row>
            {modelos.map((Modelo) => (
                <Col md={{ span: 4 }} key={Modelo.id}>
                    <Card>
                        <Card.Body>
                            <Model rutaModelo={Modelo.url}></Model>
                        </Card.Body>
                        <Card.Footer className="">
                            <Row>
                                <Col>
                                    <div>{Modelo.nombre}</div>
                                </Col>
                                <Col>
                                    <div>{Modelo.precio}</div>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};
export default ModelCard;