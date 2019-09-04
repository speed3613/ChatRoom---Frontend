import React, { Component, Fragment } from 'react';
import DisplayConversation from './DisplayConversation';
import MessagingBox from './MessagingBox';

class MessagingPanel extends Component {
    state = {
        messages: []
    }

    connection = new WebSocket('ws://localhost:9090/')

    componentDidMount(){
        this.connection.onmessage = (message) => {
            const data = JSON.parse(message.data)
            this.setState({messages: [...this.state.messages, data]})
        }
    }

    getMessage = (message) => {
        const data = { username: this.props.username, message }

        this.connection.send(JSON.stringify(data))
    }

    render() {
        return (
            <Fragment>
                <DisplayConversation messages={this.state.messages}/>
                <MessagingBox getMessage={this.getMessage}/>
            </Fragment>
        )
    }
}

export default MessagingPanel;
