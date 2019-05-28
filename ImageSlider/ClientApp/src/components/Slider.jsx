import React, { Component } from 'react'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

export default class Slider extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div >
                <h1>hello</h1>
                <Slide />

                <LeftArrow />
                <RightArrow />
            </div>
        );
    }
}