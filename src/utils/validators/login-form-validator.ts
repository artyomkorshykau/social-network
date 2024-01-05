export type loginFormValidator = (value: string) => string | undefined

export const required: loginFormValidator = (value) => {
    if (value) {
        return undefined
    } else {
        return 'Field is required'
    }
}

export const maxLengthCreator = (maxLength: number): loginFormValidator => (value) => {
    if (value.length > maxLength) {
        return `Max length is ${maxLength} symbols!`
    }
    return undefined
}