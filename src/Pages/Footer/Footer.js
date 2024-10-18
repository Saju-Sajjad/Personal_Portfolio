import "./Footer.css";
const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className='footer-content'>
                <p>&copy; {new Date().getFullYear()} Sajjad Hussain. All rights reserved.</p>
                <div className='social-links'>
                    <a href='https://github.com/Saju-Sajjad' target='_blank' rel='noopener noreferrer'>GitHub</a>
                    <a href='https://www.linkedin.com/in/sajjad-hussain-6148a2247' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                    <a href='https://twitter.com/sajjadh01278554' target='_blank' rel='noopener noreferrer'>Twitter</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
