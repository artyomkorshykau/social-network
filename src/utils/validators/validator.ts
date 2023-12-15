export type validator = (value: string) => string | undefined

export const required: validator = (value) => {
    if (value) {
        return undefined
    } else {
        return 'Field is required'
    }
}

export const maxLengthCreator = (maxLength: number): validator => (value) => {
    if (value.length > maxLength) {
        return `Max length is ${maxLength} symbols!`
    }
    return undefined
}