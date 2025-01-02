import "./header.css";


const Header = () => {

    return (
        
        <div className="header">
            <div className="title">
                <h1 className="title-text">Gabe Zeller</h1>
            </div>
            <div className="navbar">
                <div className="button projects-button" >
                    Projects
                </div>
                <div className="button aboutme-button">
                    About Me
                </div>
            </div>
        </div>
    );

};

export default Header;