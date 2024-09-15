// import phoneFrame from '../../styles/images/phoneFrame.png';
// import Image from ''
import Resume from '../../components/buttons/Resume.jsx';

export default function ProjectCard({ pname, pimg, pdesc, ghLink ,stack }) {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFC733"];
    const colorlen = colors.length ; 
    // const randColor = null ;
    return (
        <div className="project-display-container">
            <div className="img-container">
                <img className="fade-image" src={pimg[0]} alt="mobile frame"></img>
                <img className="fade-image" src={pimg[1]} alt="mobile frame"></img>
            </div>
            <div className="project-description">
                <h2>{pname}</h2>
                <div className='project-desc-text'>
                   {
                    pdesc.map(
                        (project , index)=>(
                            <div key={index} className='project-detail'>
                                <project.icon></project.icon>
                                <p className='project'> 
                                    {project.description}
                                </p>
                            </div>
                        )
                    )

                   }
                </div>
                <div className='techstack-container'>
                    {
                        stack.map(
                            (stk , index)=>(
                                <p key={index} className='tech-stack' 
                                style={{
                                    color :  colors[
                                        Math.floor(Math.random()*colorlen)%stack.length
                                    ]
                                }}
                                >#{stk}</p>
                            )
                        )
                    }
                </div>
                <Resume></Resume>
            </div>
        </div>
    );
}