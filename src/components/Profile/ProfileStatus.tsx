import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
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

        this.props.updateStatus(this.props.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevProps.status !== this.state.status) {
            this.setState(
                {
                    status: this.props.status
                }
            )

        }
    }

    render() {
        return (
            <>
                {!this.state.editMode
                    ? <div><span onDoubleClick={() => {
                        this.activateEditMode()
                    }}> - {this.props.status || '...'}</span></div>
                    : <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={() => {
                        this.deactivateEditMode()
                    }} value={this.state.status}/></div>
                }
            </>)
    }
}

export default ProfileStatus;