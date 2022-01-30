import './header.css'
const Header = () => {
return (
    <div>
        <div className="Header">
            <div className="Header-left">
                <i className="header fab fa-github fa-2x"></i>
                <div className="Header-search">
                    <span>Search or jump to...</span>
                    <div className="Header-search-button">/</div>
                </div>
                <div>
                    <span>Pull requests</span>
                    <span>Issues</span>
                    <span>Marketplace</span>
                    <span>Explore</span>
                </div>
            </div>
            <div className="Header-right">
            <i className="header far fa-bell"></i>
            <span>+ <i className="header fas fa-caret-down"></i></span>
            <span>
            <i className="header fas fa-user"></i> <i className="header fas fa-caret-down"></i></span>
            </div>
        </div>
    </div>
)
}
export default Header