import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatus = (props: ProfileStatusPropsType) => {

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateMode = () => {
        setEditMode(!editMode)
    }

    const deactivatedMode = () => {
        setEditMode(!editMode)
        props.updateStatus(status)
    }

    const changeStatus = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value)
    }

    return (
        <>
            {!editMode &&
                <div><span
                    onDoubleClick={activateMode}
                > - {props.status || '...'}</span></div>
            }
            {editMode &&
                <div><input
                    autoFocus={true}
                    onBlur={deactivatedMode}
                    onChange={changeStatus}
                    value={status}
                /></div>}
        </>)
}

export default ProfileStatus;