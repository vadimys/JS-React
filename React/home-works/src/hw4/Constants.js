const TITLE_TXT = 'Login Form';
const AGREE_TXT = 'Are you agree to the terms?';
const LOGIN_TXT = 'Email';
const PASSWORD_TXT = 'Password';
const SUBMIT_TXT = 'Submit';
const PASSWORD_ID = 'password';
const LOGIN_ID = 'login';
const AGREE_ID = 'agree';
const PASSWORD_MIN_ERR = 'Too Short password! Should be at least 6 characters...';
const PASSWORD_MAX_ERR = 'Too Long password! Should be no more 12 characters...';
const EMAIL_ERR = 'Invalid email!';
const SUBMIT_DELAY = 3000;
const EMAIL_REGEXP = /\S+@\S+\.\S+/;
const PASSWORD_REGEXP = /^(?=.*).{6,12}$/;

export default {
    TITLE_TXT,
    AGREE_TXT,
    LOGIN_TXT,
    PASSWORD_TXT,
    SUBMIT_TXT,
    PASSWORD_ID,
    LOGIN_ID,
    AGREE_ID,
    PASSWORD_REGEXP,
    EMAIL_REGEXP,
    SUBMIT_DELAY,
    PASSWORD_MIN_ERR,
    PASSWORD_MAX_ERR,
    EMAIL_ERR
}
