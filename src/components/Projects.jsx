import '../styles/Projects.css'
import ProjectCard from './cards/ProjectCard';
import logistics1 from '../../src/styles/images/logistics1.png';
import logistics2 from '../../src/styles/images/logistics2.png';
import { Truck, Smartphone, Lock, MapPin } from 'lucide-react'
import ProjectDescriptions from './ProjectDescriptions';

export default function Projects(){
  const projectList =[
//     {
//       pname : 'Ayur Vaidya Pro',
//       pimg : easy_logistics_1,
//       pdesc : `Secured 1st Prize in the Srishti Innovation Exchange hackathon at Atria Institute of Technology for the Ayur Vaidya
// Pro project under the Indian Knowledge System category; received Rs. 50,000 in incubation support.`,
//       ghLink : '',
//       stack : ['Flutter','Python','Firebase','PostgresQL']
//     },
    {
      pname  : 'Easy Logistics',
      pimg   : [logistics1,logistics2],
      // pdesc  : `
      // Logistics app with a scalable backend using Supabase, efficiently managing up to 200 concurrent orders 
      // Created Dedicated mobile app for delivery agents 
      // Two factor authentication via OTP using Twilio 
      // Real Time order tracking allowing customers to monitor their order's progress live 
      // `,
      pdesc : [
        {
          description: "Logistics app with a scalable backend using Supabase, efficiently managing up to 200 concurrent orders",
          icon: Truck
        },
        {
          description: "Created Dedicated mobile app for delivery agents",
          icon: Smartphone
        },
        {
          description: "Two factor authentication via OTP using Twilio",
          icon: Lock
        },
        {
          description: "Real Time order tracking allowing customers to monitor their order's progress live",
          icon: MapPin
        }
      ],
      ghLink : 'https://github.com/bhatganeshdarshan/Flutter-Logistic-app-project',
      stack  : ['Flutter','Supabase','PostgresQL','Google Maps API','DartFrog'],
    },
//     {
//       pname : 'Harvest Hub',
//       pimg  : easy_logistics_2,
//       pdesc : `A precision agriculture platform utilizing machine learning, training a model on
// over 100,000 agricultural data samples to optimize crop yields, achieving a 93% accuracy in predictions based on
// diverse environmental factors.`,
//       ghLink: `https://github.com/bhatganeshdarshan/HarvestHUB`,
//       stack : ['Python','Machine Learning','Flask','HTML','CSS']
//     }
  ];
  return (
      <div className="project-container" id='projects'>
        <h1 style={{margin:'20px 20px 0 20px'}}>Projects</h1>
        {/* <div className='display-projects'>
          {
            projectList.map(
              (project,index)=>(
                <ProjectCard key={index} pname={project.pname} pimg={project.pimg} pdesc={project.pdesc} ghLink={project.ghLink} stack={project.stack}/>
              )
            )
          }
        </div> */}
        <ProjectDescriptions></ProjectDescriptions>
      </div>
    );
}