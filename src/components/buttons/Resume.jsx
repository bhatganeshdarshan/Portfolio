import {Link} from 'react-router-dom';

export default function Resume(){
    const resumeLink = "https://drive.google.com/file/d/1Z5lZ3nOLR16IdA4AtxAfrJPLGW6wTZQo/view?usp=sharing"; 
    return (
        <button className="resume-btn">
            <Link to={resumeLink}>
                Download Resume
            </Link>
        </button>
    );
}