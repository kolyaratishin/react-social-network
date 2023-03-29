import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            {/*<div className={classes["main-content-image"]}>*/}
            {/*    <img*/}
            {/*        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"*/}
            {/*        alt="profile avatar"/>*/}
            {/*</div>*/}
            <div className={classes["description"]}>

                <div>
                    <img src={props.profile.photos.small} alt="ava"/>
                </div>
                <ProfileStatus status="hello"/>
                <h3>{props.profile.fullName}</h3>
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;