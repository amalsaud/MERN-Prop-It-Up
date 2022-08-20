import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        return (
            const { fName, lName, age, hairColor } = this.props;
            <div className='card'>
                <h1>{lName}, {fName}</h1>
                <p>{age}</p>
                <p>{hairColor}</p>
            </div>
        );
    }
}

export default PersonCard;
