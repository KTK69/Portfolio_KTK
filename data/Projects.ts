import { ProjectCategories } from '@/types';

export const projectsData = [
  {
    id: 1,
    category: ProjectCategories.WebApplication,
    src: '/project-img/chat.png',
    title: 'GroupChat',
    description:
      'A real-time messaging platform built with Node.js, Express, Socket.io, and MongoDB, featuring group chats, authentication, and live updates.',
    sourceUrl: 'https://mernchatapp-1-3kd0.onrender.com/',
    githubUrl: 'https://github.com/NikhilNaik23/MernChatApp',
    technologyStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.io',
      'JWT',
      'Render',
      'JavaScript',
      'GitHub'
    ],
    features: [
      'Real-Time Messaging: Enabled instant communication via Socket.io, with consistent sub-100ms latency.',
      'Group Chat Support: Seamlessly handled high-volume concurrent messaging with optimized WebSocket connections.',
      'Push Notifications & Location Alerts: Delivered contextual updates, reducing response time to civic issues by 50%.',
    ],
    challenges: [
      'Ensuring low-latency, high-throughput WebSocket communication for concurrent users.',
      'Managing secure user sessions and preventing unauthorized access attempts.',
      'Optimizing server performance for scalability with limited infrastructure.',
      'First-time use of Render for backend deployment and continuous delivery.',
    ],
    accomplishments: [
      'Built and deployed a full-stack chat app using the MERN stack and Socket.io.',
      'Implemented JWT-based authentication, reducing unauthorized access by 95%.',
      'Improved server performance by 25% through optimized socket event handling and resource management.',
    ],
  },

  {
    id: 2,
    category: ProjectCategories.WebApplication,
    src: '/project-img/portfolio.png',
    title: 'Portfolio Website',
    description:
      'A space-themed web portfolio showcasing my skills, experiences, and projects.',
    sourceUrl: 'https://tanveerkrishna.vercel.app/',
    githubUrl: 'https://github.com/KTK69/Portfolio_star_wars',
    technologyStack: [
      'Framer',
      'Tailwind CSS',
      'Three.JS',
      'Next.JS',
      'Typescript',
      'Aceternity UI',
      'Vercel',
      'Vercel Analytics',
      'Github',
      'Serverless Functions',
      'Dependabot',
    ],
    features: [
      'Utilised Three.JS for a 3D space-themed universe, allowing users to navigate through projects as if traveling through space.',
      'Dynamic content loading with Framer Motion for smooth, visually captivating transitions between portfolio sections.',
      'Integrated Vercel analytics for tracking visitor engagement.',
    ],
    challenges: [
      'Integrating 3D graphics without compromising site performance and load times.',
      'Designing an interesting user experience that balances creativity with usability, ensuring visitors can easily find and engage with content.',
    ],
    accomplishments: [
      'Successfully attracted a wider audience, including Star Wars developer fans enhancing engagement with my portfolio based on Vercel analytics.',
      'Received compliment for the design from HR and developers in the industry.',
    ],
  },
  {
    id: 5,
    category: ProjectCategories.WebApplication,
    src: '/project-img/ai-safety-dashboard.jpg',
    title: 'AI Safety Incident Dashboard',
    description:
      'A modern, responsive dashboard for tracking, filtering, and reporting AI safety incidents with an AI-inspired design, animated elements, and both light and dark modes.',
    sourceUrl: 'https://ai-safety-incident-dashboard-tan.vercel.app/',
    githubUrl: 'https://github.com/KTK69/AI_Safety_Incident_Dashboard',
    technologyStack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Heroicons',
      'React Hooks',
      'GitHub',
      'Vercel'
    ],
    features: [
      'Interactive Dashboard: Built a responsive, modern UI with AI-themed design elements and animations.',
      'Incident Management: Implemented filtering by severity, sorting by date, and expandable incident details.',
      'Real-time Form Validation: Created an intuitive incident reporting system with immediate feedback.',
      'Theme Support: Developed both light and dark themes with consistent design language and animations.',
      'Session-based Storage: Implemented in-memory state management for incident data during user sessions.'
    ],
    challenges: [
      'Creating a responsive design that works seamlessly across mobile and desktop devices.',
      'Implementing a modern, AI-themed UI with animations while maintaining performance.',
      'Developing a flexible filtering and sorting system for incident management.',
      'Ensuring proper date formatting and handling with custom string-to-date parsing.',
      'Managing component state effectively without a backend or persistent storage.'
    ],
    accomplishments: [
      'Built a fully responsive dashboard with an intuitive, modern interface using React and TypeScript.',
      'Implemented a component-based architecture with clean separation of concerns for maintainability.',
      'Created a visually striking UI with AI-themed animations, gradients, and glassmorphism effects.',
      'Developed a flexible incident management system with filtering, sorting, and expandable details.',
      'Designed both light and dark themes with consistent visual language and smooth transitions.'
    ],
  },
  {
    id: 3,
    category: ProjectCategories.MachineLearning,
    src: '/project-img/leafhealth.png',
    title: 'Leaf Health Detection',
    description:
      'AI-based system using CNNs and image processing to detect plant diseases from leaf images with 90% accuracy.',
    sourceUrl: '',
    githubUrl: 'https://github.com/KTK69/plant-health-detection-dl',
    technologyStack: [
      'Python',
  'TensorFlow/Keras',
  'Scikit-learn',
  'OpenCV',
  'Pandas',
  'NumPy',
  'Flask',
  'Streamlit'
    ],
    features: [
      'Developed a CNN-based deep learning model that achieved 90% accuracy on over 6,000 leaf images, ensuring high reliability in disease identification.',
      'Engineered 38 domain-specific features including leaf texture analysis, color histograms, and edge detection, boosting classification precision.',
      'Deployed a real-time Flask dashboard for instant image upload and disease classification, enhancing user interaction and feedback delivery.',
    ],
    challenges: [
      'Maintaining high model accuracy while balancing dataset variability across different plant species and lighting conditions.',
      'Building an intuitive dashboard that allows seamless image input and real-time classification without latency.',
    ],
    accomplishments: [
      'Significantly improved early plant disease detection accuracy for use in agricultural applications.',
      'Recognized by peers for the practical usability and clean design of the Flask-based interface.',
    ],
  },
  {
    id: 4,
    category: ProjectCategories.MachineLearning,
    src: '/project-img/rating.png',
    title: 'Restaurant Rating Prediction',
    description:
      'Machine learning model that predicts restaurant ratings using review sentiment and location data with 95% accuracy.',
    sourceUrl: '',
    githubUrl: 'https://github.com/KTK69/zomato-rating-prediction-ml',
    technologyStack: 
      [
        'Python',
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'Flask',
        'Streamlit'
      ]
    ,
    features: [
      'Trained a machine learning model on 500,000+ restaurant reviews and geolocation data, achieving 95% prediction accuracy.',
      'Engineered over 15 custom features like sentiment scores and location density, boosting model performance by 10%.',
      'Integrated Flask and Streamlit dashboards for real-time prediction and data visualization with live user inputs.',
      'Applied Natural Language Processing (NLP) techniques to analyze 100,000+ customer reviews, improving sentiment-based rating predictions.',
    ],
    challenges: [
      'Handling large-scale textual and geospatial data efficiently while maintaining fast model response times.',
      'Optimizing model performance through extensive hyperparameter tuning and ensemble learning.',
    ],
    accomplishments: [
      'Reduced model inference time by 25%, making it practical for real-time applications.',
      'Project appreciated during academic presentation for combining technical depth with user-centric visualization.',

    ],
  },
  
  ];
  
