import React from "react";

type Props = {
    title: string
    value: string | null
}

export const Contacts = (props: Props) => {
    return <div>
        <b>{props.title}:</b> {props.value}
    </div>
}