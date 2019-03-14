import React from 'react';

export default class List extends React.Component {

    render() {
        return (
            <div>
                {
                   this.props.data.map((task) =>
                         <p>{task}</p>
                    )
                }
            </div>
        )
    }
}

