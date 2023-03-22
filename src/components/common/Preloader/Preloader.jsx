import spinningLoading from "../../../assets/spinning-loading.gif";

const Preloader = () => {
    return (
        <div>
            <img src={spinningLoading} alt="loading" style={{backgroundColor: "white"}}/>
        </div>
    );
}

export default Preloader;