import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button style={{ marginBottom: '40px', textAlign:'center'}} onClick={() => this.setState({isOpen: true})}>
                    Open modal
                </button>

                {this.state.isOpen && (
                <div className='modal'>
                    <div className='modal-body'>
                        <h2>About this app</h2>
                        <p>
                            My first to-do list application created using React Hooks and 
                            <a style={{textDecoration: 'none', color:'#0c76c7'}} href="https://jsonplaceholder.typicode.com/users/1/todos"> REST API</a> 
                            </p>
                           
                        <button onClick={() => this.setState({isOpen: false})} >Close modal</button>
                    </div>
                </div>
                )}
                
            </React.Fragment>
        )
    }
}