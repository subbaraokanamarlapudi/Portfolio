// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   const skills = [
//     'Pythhon',
//     'Django',
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'ReactJS',
//     'MySQL',
//     'MongoDB',
//     'Git',
//     'GitHub',
//     'VS Code',
//     'Google Colab',
//   ];

//   return (
//     <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="mb-12"
//       >
//         <h2 className="text-3xl font-bold text-[#ccd6f6] flex items-center">
//           <span className="text-[#64ffda] font-mono mr-2">01.</span> About Me
//           <span className="ml-4 h-px bg-[#233554] flex-grow"></span>
//         </h2>
//       </motion.div>

//       <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="md:col-span-3"
//         >
//           <div className="space-y-4 text-[#8892b0]">
//             <p>
//             Hello, I'm K.V.Subbarao, I had recently completed graduation with a B.Tech in CSE-AI from Parul University, Vadodara (2024). Passionate and dedicated computer science student having good amount of development knowledge in python and web development.
//             I have a genuine passion for both python and web development, with a specific focus on utilizing React for web projects.
//             </p>
//             <p>
//             Highly motivated entry-level software developer eager to apply technical skills and contribute to company growth.
//             Seeking a challenging role where I can learn new technologies and gain valuable experience. Dedicated to continuous
//             learning and professional development
//             </p>
//             <p>
//             Currently I'm learning frontend development with ReactJS
//             </p>
//             <p>
//               Here are a few technologies I've been working with recently:
//             </p>
//           </div>

//           <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
//             {skills.map((skill, index) => (
//               <motion.div 
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
//                 className="flex items-center"
//               >
//                 <span className="text-[#64ffda] mr-2">▹</span>
//                 <span className="text-[#8892b0] text-sm">{skill}</span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="md:col-span-2"
//         >
//           <div className="relative group">
//             <div className="relative z-10 rounded-md overflow-hidden">
//               <img 
//                 // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
//                 src='../assets/images/profile.jpg'
//                 alt="subbarao" 
//                 className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-300 mix-blend-multiply hover:mix-blend-normal"
//               />
//               <div className="absolute inset-0 bg-[#64ffda]/20 hover:bg-transparent transition-colors duration-300"></div>
//             </div>
//             <div className="absolute -inset-2.5 border-2 border-[#64ffda] rounded-md -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default About;




import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/images/profile.jpg'; // Adjust the path as needed

const About = () => {
  const skills = [
    'Python', 
    'Django', 
    'HTML', 
    'CSS', 
    'JavaScript', 
    'ReactJS', 
    'MySQL', 
    'MongoDB', 
    'Git', 
    'GitHub', 
    'VS Code', 
    'Google Colab'
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-[#ccd6f6] flex items-center">
          <span className="text-[#64ffda] font-mono mr-2"></span> About Me
          <span className="ml-4 h-px bg-[#233554] flex-grow"></span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-3"
        >
          <div className="space-y-4 text-[#8892b0]">
            <p>
              Hello, I'm K.V. Subbarao. I recently completed my <strong>B.Tech in CSE-AI from Parul University, Vadodara (2024)</strong>.  
              I am a passionate and dedicated software developer with strong knowledge of <strong>Python and Web Development</strong>.  
            </p>
            <p>
              I have a genuine passion for <strong>Python and Frontend Development</strong>, especially using <strong>React.js</strong> for web projects.
            </p>
            <p>
              I am currently learning <strong>Frontend Development with React.js</strong> and looking for opportunities to grow and contribute to impactful projects.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                className="flex items-center"
              >
                <span className="text-[#64ffda] mr-2">▹</span>
                <span className="text-[#8892b0] text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Profile Image Section with Hover Zoom Effect */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-2 flex justify-center"
        >
          <div className="relative group">
            <div className="relative z-10 rounded-md overflow-hidden">
              <img 
                src={profileImg} 
                alt="Subbarao" 
                // className="w-90 h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                className="w-90 h-80 hover:grayscale-0 transition-all duration-300 mix-blend-multiply hover:mix-blend-normal"
              />
            </div>
            <div className="absolute -inset-2.5 border-2 border-[#64ffda] rounded-md -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
