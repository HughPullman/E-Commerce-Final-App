import "./Profile.scss"



const Profile = ({username}) => {




    return (
        <div className="profile">
            <div className="right">
                <div className="welcome">
                    <span>WELCOME {username}</span>
                </div>
                <div className="categories">
                    <span>YOU'RE READY TO START SHOPPING</span>
                </div>
            </div>
        </div>
    )
};

export default Profile