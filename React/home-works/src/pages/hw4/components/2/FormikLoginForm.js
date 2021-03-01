import React, {useState} from 'react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import constants from "../Constants";
import "../LoginApp.css";

export default function LoginForm() {
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = () => {
        setSubmitting(true);
        setTimeout(() => setSubmitting(false), constants.SUBMIT_DELAY);
    };

    const initialValues = {
        password: '',
        email: '',
        checkbox: true
    };

    const validation = Yup.object().shape({
        password: Yup.string()
            .min(6, constants.PASSWORD_MIN_ERR)
            .max(12, constants.PASSWORD_MAX_ERR)
            .required('Required!'),
        email: Yup.string()
            .email(constants.EMAIL_ERR)
            .required('Required!'),
        checkbox: Yup.boolean()
    });

    return (
        <div className="login-form">
            <h2>{constants.TITLE_TXT}</h2>
            {submitting && <div>Submitting Form...</div>}
            <Formik initialValues={initialValues} validationSchema={validation} onSubmit={handleSubmit}>
                {(data) => (
                    <Form>
                        <fieldset>
                            <Field label="Email" name="email" placeholder={constants.LOGIN_TXT} autoFocus={true}/><br/>
                            {data.touched.email && data.errors.email && <div>{data.errors.email}</div>}
                            <Field label="Password" name="password" type="password" placeholder={constants.PASSWORD_TXT}/>
                            {data.touched.password && data.errors.password && <div>{data.errors.password}</div>}
                        </fieldset>
                        <button type="submit" disabled={!data.isValid || !data.values.checkbox || submitting}>Submit</button>
                        <div className="agree">
                            <Field label="Checkbox" type="checkbox" name="checkbox"/>
                            {constants.AGREE_TXT}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
