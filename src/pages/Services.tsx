import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, Heart, Brain, Bone, Baby, 
  Microscope, Eye, Pill, Clock
} from 'lucide-react';

const Services = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <Heart className="h-12 w-12 text-blue-600" />,
      title: 'Cardiology',
      description: 'Comprehensive heart care including diagnostics, treatment, and rehabilitation.',
    },
    {
      icon: <Brain className="h-12 w-12 text-blue-600" />,
      title: 'Neurology',
      description: 'Expert care for conditions affecting the brain, spine, and nervous system.',
    },
    {
      icon: <Bone className="h-12 w-12 text-blue-600" />,
      title: 'Orthopedics',
      description: 'Specialized treatment for bones, joints, ligaments, and muscles.',
    },
    {
      icon: <Baby className="h-12 w-12 text-blue-600" />,
      title: 'Pediatrics',
      description: 'Dedicated care for infants, children, and adolescents.',
    },
    {
      icon: <Microscope className="h-12 w-12 text-blue-600" />,
      title: 'Laboratory',
      description: 'Advanced diagnostic testing and analysis services.',
    },
    {
      icon: <Eye className="h-12 w-12 text-blue-600" />,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to complex surgeries.',
    },
    {
      icon: <Pill className="h-12 w-12 text-blue-600" />,
      title: 'Pharmacy',
      description: '24/7 pharmacy services with expert medication counseling.',
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-blue-600" />,
      title: 'General Medicine',
      description: 'Primary healthcare services for all age groups.',
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Medical Equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            {...fadeIn}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            {...fadeIn}
            className="text-xl"
          >
            Comprehensive Healthcare Solutions
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeIn}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div className="text-white mb-6 md:mb-0">
              <div className="flex items-center space-x-3 mb-2">
                <Clock className="h-8 w-8" />
                <h2 className="text-2xl font-bold">Emergency Services</h2>
              </div>
              <p className="text-lg">Available 24/7, including holidays</p>
            </div>
            <div className="text-white text-center md:text-right">
              <p className="text-2xl font-bold">Emergency Hotline</p>
              <p className="text-xl">+1 (555) 911-1234</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;