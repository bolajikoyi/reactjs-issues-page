import './footer.css'

const Footer = () => {
return(
    <div>
        <div className="Footer-container">
        <span>
            <i className="footer fab fa-github"></i> 
            <span className='Footer-copyright'>&copy; {new Date().getFullYear()} Github, Inc.</span>
        </span>
        <div className='Footer-links'>
            <span>Terms</span>
            <span>Privacy</span>
            <span>Security</span>
            <span>Status</span>
            <span>Docs</span>
            <span>Contact GitHub</span>
            <span>Pricing</span>
            <span>API</span>
            <span>Training</span>
            <span>Blog</span>
            <span>About</span>
        </div>
    </div>
    </div>
    
)
}
export default Footer