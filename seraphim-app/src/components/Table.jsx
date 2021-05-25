import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import './Table.css';

const PricingTable = (props) => {

    const propData = props[Object.keys(props)[0]];

    const first_col_header = Object.keys(propData)[0];
    const second_col_header = Object.keys(propData)[1];

    const first_col_data = propData[first_col_header];
    const second_col_data = propData[second_col_header];

    const data = first_col_data.map((j, k) => {
        return [j, second_col_data[k]];
    });

    console.log(data);


    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>{first_col_header}</th>
                    <th>{second_col_header}</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr>
                    {console.log(item)}
                    {item.map((c1) => (
                        <>
                            <td>{c1}</td>
                        </>
                    ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

PricingTable.propTypes = {
    content: PropTypes.object
}

export default PricingTable;