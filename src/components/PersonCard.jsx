import React from 'react';

class PersonCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className='card'>
        <h1>{this.props.lName}, {this.props.fName}</h1>
        <p>{this.props.age}</p>
        <p>{this.props.hairColor}</p>
        </div>
        )
    }
}

export default PersonCard;