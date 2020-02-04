import React, { Component } from 'react'

export default class Header2 extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}
