import React from "react";

type Props = {
    title: string
    value: string | null
}

export const Contacts = ({title, value}: Props) => {
    return <div>
        <b>{title}:</b> {value}
    </div>
}