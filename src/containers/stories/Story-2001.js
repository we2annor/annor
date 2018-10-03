import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import '../../styles/containers/stories/story-1986.css'

class S2001 extends Component {
    constructor(){
        super()

    }

    render(){

        return(
            <div id="story" className="story story-1986">
                <Motion defaultStyle={{opacity:0, scale: 0.5}} style={{opacity: spring(1), scale: spring(1)}}>
                    {value=>
                        <div style={{opacity: value.opacity, transform:`scale(${value.scale})`}}>
                            <div className="content layer" data-depth="0.30">
                                <div className="heading">
                                    <h1 className="year">2001</h1>
                                    <div className="label">My Story</div>
                                    <div className="description">Flash and Dreamweaver was what was used for website development at the stage. I took a course in both basic and advance in both flash and dreaweaver. And with this my first website Known as Outlandish spices, was created.</div>
                                </div>
                            </div>
                        </div>
                    }
                </Motion>
            </div>
        )
    }
}

export default S2001
