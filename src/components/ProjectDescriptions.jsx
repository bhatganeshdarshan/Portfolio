import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Smartphone, Lock, MapPin } from 'lucide-react';
import logistics1 from '../../src/styles/images/logistics1.png';
import '../styles/Projects.css';

const projectData = [
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
];

const ProjectDescriptions = () => {
  return (
    <div className="container">
      <div className="project-layout">
        <div className="image-container">
          <img
            src={logistics1}
            alt="Project showcase"
            className="project-image"
          />
        </div>
        <div className="project-details">
          <h2 className="project-title">Easy Logistics</h2>
          <div className="project-grid">
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="project-card"
              >
                <div className="card-background" />
                <div className="card-content">
                  <project.icon className="project-icon" />
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="card-hover-effect" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescriptions;
