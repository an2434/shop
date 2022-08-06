import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Col, Row } from 'react-bootstrap';
import { data } from './data';

const Goods = () => {
    const a1 = [0, 1, 2];
    return (

        a1.map((i) => {
            return (
                <Col sm>

                    {data[i].id}
                    <h4 >{data[i].title}</h4>
                    <p>{data[i].content}</p>
                    <p>{data[i].price}</p>
                </Col>
            )
        }
        )

    );
}

export default Goods;