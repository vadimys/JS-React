import constants from "./Constants";

export default function Login({handleChange}) {
    return (
        <input type="email" name={constants.LOGIN_ID} placeholder={constants.LOGIN_TXT} required={true} autoFocus={true}
               onChange={handleChange}/>
    );
}
