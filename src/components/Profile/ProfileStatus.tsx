import React from 'react';

type ProfileStatusPropsType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode
                    ? <div><span onDoubleClick={() => {
                        this.activateEditMode()
                    }}> - {this.props.status}</span></div>
                    : <div><input autoFocus={true} onBlur={() => {
                        this.deactivateEditMode()
                    }} value={this.props.status}/></div>
                }
            </>)
    }
}

export default ProfileStatus;