import React from 'react'
import Card from 'react-bootstrap/Card'

import '../styles/Table.css';

export default function MainTable() {
    return (
        <Card.Body id="table_card">
            <Card.Title>
                Populate the table below
            </Card.Title>
            <Card.Subtitle>
                Drag items across to the left table
            </Card.Subtitle>
        </Card.Body>
    )
}