import {useState, useEffect} from 'react'
import constants from "../Constants";
import Password from "./components/Password";
import Login from "./components/Login";
import Submit from "./components/Submit";
import Agree from "./components/Agree";
import "../LoginApp.css";

export default function App() {
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [checked, setChecked] = useState(true);
    const [disabled, setDisabled] = useState(true);
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
            console.log(event);
        }, constants.SUBMIT_DELAY);
    };
    const onChange = event => {
        if (event.target.name === constants.AGREE_ID) {
            setChecked(event.target.checked);
        }

        if (event.target.name === constants.LOGIN_ID) {
            validate(event.target.value, constants.EMAIL_REGEXP, setEmail);
        }

        if (event.target.name === constants.PASSWORD_ID) {
            validate(event.target.value, constants.PASSWORD_REGEXP, setPassword);
        }
    };
    const validate = (value, regExp, setData) => setData(regExp.test(value));

    useEffect(() => setDisabled(!email || !password || !checked), [email, password, checked]);

    return (
        <div className="login-form">
            <h2>{constants.TITLE_TXT}</h2>
            {submitting && <div>Submitting Form...</div>}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <Login handleChange={onChange}/><br/>
                    <Password handleChange={onChange}/>
                </fieldset>
                <Submit disabled={disabled}/><br/>
                <Agree checked={checked} handleChange={onChange}/>
            </form>
        </div>
    );
}
