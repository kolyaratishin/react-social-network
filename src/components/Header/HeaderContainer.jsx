import {Component} from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const id = response.data.data.id;
                    const email = response.data.data.email;
                    const login = response.data.data.login;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props}/>
    }

}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {
    setAuthUserData
})(HeaderContainer);