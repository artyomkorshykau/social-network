import React from "react";
import {Formik} from "formik";
import {Filter} from "../../redux/users-reducer";
import {Field} from "formik"

type Props = {
    onFilterChanged: (filter: Filter) => void
}

export const UserSearchForm = React.memo(({onFilterChanged}: Props) => {
    return <div>
        <h3>User search</h3>
        <Formik
            initialValues={{term: '', friend: null}}
            onSubmit={(value: Filter, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
                onFilterChanged(value)
                setSubmitting(false)
            }}
        >
            {({isSubmitting}) => (
                <form>
                    <Field
                        type="text"
                        name="term"
                    />
                    <Field name={'friend'} as={'select'} placeholder={'All users'}>
                        <option value={'null'}>All</option>
                        <option value={"true"}>Friend</option>
                        <option value={'false'}>Not friends</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Search
                    </button>
                </form>
            )}
        </Formik>
    </div>
})