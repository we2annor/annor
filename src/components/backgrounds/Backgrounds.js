import React, { Component } from 'react'
import Background from '../background/Background'
import _ from 'lodash'

class Backgrounds extends Component {
    constructor(props){
        super(props)

        this.state = {
            backgrounds : [
                {'id':'blue','pathname':'/','position':'center bottom', 'image':'index.jpg'},
                {'id':'brown','pathname':'/stories/1982','position':'bottom center', 'image':'home.jpg'},
                {'id':'pink','pathname':'/stories/1982','position':'bottom center', 'image':'home.jpg'},
                {'id':'yellow','pathname':'/stories/1986','position':'bottom center', 'image':'2016.jpg'},
                {'id':'pink','pathname':'/stories/1992','position':'bottom center', 'image':'2014.jpg'},
                {'id':'white','pathname':'/stories/1997','position':'bottom center', 'image':'about.jpg'},
                {'id':'green','pathname':'/stories/2000','position':'bottom center', 'image':'project.jpg'},
                {'id':'orange','pathname':'/stories/2001','position':'bottom center', 'image':'orange.jpg'},
                {'id':'yellow','pathname':'/stories/2004','position':'bottom center', 'image':'2016.jpg'},
                {'id':'yellow','pathname':'/stories/2018','position':'bottom center', 'image':'2016.jpg'},
                {'id':'red','pathname':'/experience','position':'bottom center', 'image':'about.jpg'},
                {'id':'green','pathname':'/projects','position':'bottom bottom', 'image':'project.jpg'}
            ]
        }
    }

    render(){
        const backgrounds = this.state.backgrounds
        const currentBackground =_.find(backgrounds, {'pathname' : this.props.location.pathname})
        const currentBackgroundID = currentBackground.id

        return(
            <div className="backgrounds">
                <div className="layer" data-depth="0.10">
                    {
                        backgrounds.map((background, index)=> {
                            return <Background key={index} background={background} currentBackgroundID={currentBackgroundID}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Backgrounds
