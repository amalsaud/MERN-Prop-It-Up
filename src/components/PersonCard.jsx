import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        const { fName, lName, age, hairColor } = this.props;
        return (
            <div className='card'>
                <h1>{lName}, {fName}</h1>
                <p>{age}</p>
                <p>{hairColor}</p>
                <button>Birthday Button for </button>
            </div>
        );
    }
}

export default PersonCard;
