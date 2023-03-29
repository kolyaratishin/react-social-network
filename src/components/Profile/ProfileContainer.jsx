import {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";

class ProfileContainer extends Component{

    getProfile = () => {
        let userId = this.props.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    componentDidMount() {
        this.getProfile();
    }

    render() {
        if(!this.props.isAuth){
            return <Navigate to="/login"/>
        }

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        profile: state.profilePage.profile,
        isAuth:state.auth.isAuth
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                location={location}
                params={params}
                navigate={navigate}
            />
        );
    }

    return ComponentWithRouterProp;
}

let ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    getUserProfile
})(ProfileContainerWithRouter);