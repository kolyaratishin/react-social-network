import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes["main-content-image"]}>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt="profile avatar"/>
            </div>
            <div className={classes["description"]}>
                ava + desc
            </div>
        </div>
    );
}

export default ProfileInfo;