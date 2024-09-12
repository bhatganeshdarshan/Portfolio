import '../styles/About.css';
import Resume from './buttons/Resume';
import {Github , Linkedin} from 'lucide-react';
import {Link} from 'react-router-dom';
// import '../styles/images/profilePicture'
import profilePicture from '../styles/images/profilePicture.jpeg';

export default function About(){
    const description = (
        <>
          🔧 I specialize in crafting seamless and delightful mobile experiences using Flutter and Kotlin. <br />
          🌐 Passionate about exploring the endless possibilities of mobile app development. <br />
          🌱 I’m currently learning React and NodeJS
        </>
      );

    return (
        <div className='about-container'>
            <div className='about'>
                <h2>Hello I am </h2>
                <h1>Ganeshdarshan</h1>
                <h2>I am a <span className='cp-text'>Competitive Programmer</span></h2>
                <div className='my-description'>
                   {description}
                </div>
                <Resume></Resume>
            </div>
            <div className='social-media'>
                <div className='Github-btn'>
                    <Link to='https://github.com/bhatganeshdarshan'>
                        <Github></Github>
                    </Link>
                </div>
                <div className='Linkedin-btn'>
                    <Link to='https://linkedin.com/in/ganeshdarshan'>
                        <Linkedin></Linkedin>
                    </Link>
                </div>
            </div>
            <div className='profile-picture'>
                <img src={profilePicture} className='circular-pic' alt='Profile'></img>
            </div>
        </div>
    );
}