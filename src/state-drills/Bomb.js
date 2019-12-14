import React from 'react'
import { thisTypeAnnotation, throwStatement } from '@babel/types'

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            
        }
    }
    displayMessage = () => {
        if(this.state.count %2 === 0 && this.state.count < 8) {
            return 'tick'
        }
        else if(this.state.count %2 !== 0 && this.state.count < 8) {
            return 'tock'
        }
        else if(this.state.count === 8) {
            return 'BOOM!'
        }
        else {
            clearInterval(this.interval)
        }
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
            console.log('setInterval')
           this.setState({
               count: this.state.count + 1,
            })
        }, 1000)
        
    }
    render() {
        console.log('BOMBSAWAY!')
        console.log(this.state.count)
        return(
            <div>
                <p>{this.displayMessage()}</p>
            </div>
        )
    }
    componentWillUnmount() {
        clearInterval(this.interval);
        console.log('interval cleared??')
    } // Called before component unmounts
}
export default Bomb