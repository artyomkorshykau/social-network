import React from 'react'
import s from './form-control.module.css'
import {WrappedFieldProps} from "redux-form";
import {Form,} from 'antd'
import TextArea from "antd/lib/input/TextArea";

export const TextArea1 = ({input, meta, ...props}: WrappedFieldProps) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <Form.Item>
                <TextArea rows={1} {...input} {...props}/>
            </Form.Item>
            {hasError && <span>"{meta.error}"</span>}
        </div>
    )
}


export const Input = ({input, meta, ...props}: WrappedFieldProps) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>"{meta.error}"</span>}
        </div>
    )
}
