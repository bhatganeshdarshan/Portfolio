// import phoneFrame from '../../styles/images/phoneFrame.png';
// import Image from ''

export default function ProjectCard({ pname, pimg, pdesc, ghLink ,stack }) {
    return (
        <div className="project-display-container">
            <div className="img-container">
                <img className="fade-image" src={pimg[0]} alt="mobile frame"></img>
                <img className="fade-image" src={pimg[1]} alt="mobile frame"></img>
            </div>
            <div className="project-description">
                <h2>{pname}</h2>
                <p>
                    {pdesc}
                </p>
            </div>
        </div>
    );
}