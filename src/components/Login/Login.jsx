import {Field, reduxForm} from "redux-form";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );

}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" placeholder="Login" component={"input"}/>
            </div>
            <div>
                <Field name="password" type="password" placeholder="password" component={"input"}/>
            </div>
            <div>
                <Field name="rememberMe" type="checkbox" component={"input"}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );

}

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm);

export default Login;