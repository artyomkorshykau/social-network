import React, {ChangeEvent, useEffect, useState} from 'react';

type Props = {
    profileStatus: string
    updateStatus: (status: string) => void
}

const ProfileStatus = ({updateStatus, profileStatus}: Props) => {

    useEffect(() => {
        setStatus(status)
    }, [profileStatus])

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(profileStatus)

    const activateMode = () => {
        setEditMode(!editMode)
    }

    const deactivatedMode = () => {
        setEditMode(!editMode)
        updateStatus(status)
    }

    const changeStatus = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value)
    }

    return (
        <div style={{marginTop: '10px'}}>
            {!editMode &&
                <div><span
                    onDoubleClick={activateMode}
                >{status || '...'}</span></div>
            }
            {editMode &&
                <div><input
                    autoFocus={true}
                    onBlur={deactivatedMode}
                    onChange={changeStatus}
                    value={status}
                /></div>}
        </div>)
}

export default ProfileStatus;