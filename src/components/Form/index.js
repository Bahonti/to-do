import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions/taskActions';
import { bindActionCreators } from 'redux'

class Form extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.addTask("Do homework")}>Add task</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addTask
}, dispatch);

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Form)