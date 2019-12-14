import React from 'react';

class Accordion extends React.Component {
        state = {
        currentSectionIndex : 0
    }

    handleButtonClick = (index) => {
        console.log('button clicked!')
        console.log(index)
        this.setState({currentSectionIndex: index})
      }
    
    
    render() {
        console.log(this.props.sections)
        console.log(this.state)
        const section = this.props.sections[0]
        // return ( <div>
        //     <p>Hello, {this.state.who}</p>
        //     <button onClick={() => this.handleClick("World")}>World</button>
        //     <button onClick={() => this.handleClick("Friend")}>Friend</button>
        //     <button onClick={() => this.handleClick("React")}>React</button>
        //     </div>)

        const sections = this.props.sections.map((section, index) => {
            let display = null;
            
            if(this.state.currentSectionIndex === index) {
                display = <p>{section.content}</p> 
            }
            return (
                <li key={index}>
                <button onClick={() => this.handleButtonClick(index)}>
                    {section.title} 
                </button>
                {display}
                </li>
            )
        } )
        return (
            <ul>
                {sections}
            </ul>
        )
       }
}


  export default Accordion


  