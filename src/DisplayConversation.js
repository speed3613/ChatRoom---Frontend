import React, { Component } from 'react';

class DisplayConversation extends Component {

    render() {
        return (
            <div className="displayConversation">
                {
                    this.props.messages.map(message => {
                        return (
                            <div>
                                <p>{message.username} : {message.message}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default DisplayConversation;
