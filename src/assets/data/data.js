import { a } from "react-spring";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work Ex",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Scientist",
      url: creator,
    },
    {
      title: "Data Engineer",
      url: backend,
    },
    {
      title: "Software Developer",
      url: mobile,
    },
    {
      title: "Web Developer",
      url: web,
    },
  ];
  
  const bio = [
    {
      role: "Data Scientist",
    },
    {
      role: "Data Engineer",
    },
    {
      role: "Software Developer",
    },
    {
      role: "AI-ML Engineer",
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      url: 'https://cdn.svgporn.com/logos/java.svg',
    },
    {
      name: "Python",
      url: 'https://cdn.svgporn.com/logos/python.svg',
    },
    {
      name: "Scala",
      url: 'https://cdn.svgporn.com/logos/scala.svg',
    },
    {
        name: "PostgreSQL",
        url: 'https://cdn.svgporn.com/logos/postgresql.svg',
    },
    {
        name: "React JS",
        url: 'https://cdn.svgporn.com/logos/react.svg',
    },
    {
        name: "Tailwind CSS",
        url: 'https://cdn.svgporn.com/logos/tailwindcss-icon.svg',
    },
    {
      name: "TensorFlow",
      url: 'https://cdn.svgporn.com/logos/tensorflow.svg',
    },
    {
      name: "Pytorch",
      url: 'https://cdn.svgporn.com/logos/pytorch-icon.svg',
    },
    {
        name: "HuggingFace Transformers",
        url: 'https://cdn.svgporn.com/logos/hugging-face-icon.svg',
      },
    {
        name: "Pandas",
        url: 'https://cdn.svgporn.com/logos/pandas-icon.svg',
    },
    {
        name: "Tableau",
        url: 'https://cdn.svgporn.com/logos/tableau-icon.svg',
    },
    {
        name: "MongoDB",
        url: 'https://cdn.svgporn.com/logos/mongodb-icon.svg',
    },
    {
        name: "Apache Spark",
        url: 'https://cdn.svgporn.com/logos/apache-spark.svg',
    },
    {
        name: "Hadoop",
        url: 'https://cdn.svgporn.com/logos/hadoop.svg',
    },
    {
        name: "Apache Airflow",
        url: 'https://cdn.svgporn.com/logos/airflow-icon.svg',
        },
    {
        name: "AWS",
        url: 'https://cdn.svgporn.com/logos/aws.svg',
    },
    {
        name: "Google Cloud",
        url: 'https://cdn.svgporn.com/logos/google-cloud.svg',
    },
    {
        name: "Git",
        url: 'https://cdn.svgporn.com/logos/git-icon.svg',
    },
    {
        name: "Docker",
        url: 'https://cdn.svgporn.com/logos/docker-icon.svg',
    },
    {
        name: "Kubernetes",
        url: 'https://cdn.svgporn.com/logos/kubernetes.svg',
    },
    {
        name: "Jira",
        url: 'https://cdn.svgporn.com/logos/jira.svg',
    },
  ];
  
  const experiences = [
    {
      title: "Product Development Engineer",
      company_name: "Morphle Labs Pvt. Ltd.",
      company_url: "https://morphlelabs.com/",
      url: ML,
      urlBg: "#E4E4E4",
      date: "Dec 2021 - Dec 2022",
      points: [
        `Conducted prototype-testing using Python,Java & Bash, to mitigate fast image-scan errors in histopathology scanners,
         that resulted in overall 20% improvement in image quality.`,
        `Developed & subsequently tested mechanisms aimed improving digital image quality in histopathology scanners, 
        addressing challenges such as repeatability of the XY axis, focus drop, and motion blur issues.`,
        `Implemented QA protocols to enhance scanner maintenance and accessibility, provided technical support for addressing
         deployment issues, to improve customer satisfaction.`,
      ],
    },

    {
      title: "Data Analysis & Simulations Engineer",
      company_name: "Profile Solutions Pvt. Ltd.(CAE Division)",
      company_url: "https://www.caesolutions.in/",
      url: PS1,
      urlBg: "#E4E4E4",
      date: "Feb 2021 - Dec 2021",
      points: [
        `Attained horizontal adavncement into the CAE-Simulations wing`,
        `Executed in-depth analysis of data center shortcomings, employing ANSYS simulations and Tableau visualizations to 
        scrutinize KPI's for steering post-analysis strategic improvement, that resulted in a remarkable 28% augmentation in 
        HVAC Energy Ratings across three pivotal projects for cloud-infrastructure leaders.`,
        `Performed data cleaning and statistical analysis on raw sensor data, to achieve data quality improvement of upto 20-30%
         using Python to increase simulation reproducibility by 75%.`,
        `Migrated excel-based internal manufacturing database and product catalogues to PostgreSQL to facilitate concurrency, 
        security that drove operations efficiency up by 70%`,
    ],
    },

    {
      title: "Mechatronics Design Engineer",
      company_name: "Profile Solutions Pvt. Ltd.",
      company_url: "https://www.profile-solution.com/",
      url: PS0,
      urlBg: "#E4E4E4",
      date: "Jul 2020 - Feb 2021",
      points: [
        
      ],
    },
  ];
  
  const projects = [
    {
      name: "Image Editor",
      description:
        "Developed a Java Image Processing application with Java Swing for the UI, applying OOD principles like MVC and Builder patterns to ensure maintainability. Version control facilitated team collaboration and code stability. The UI was designed for easy navigation, optimizing user experience, while JUnit ensured robust functionality. The Builder pattern was key to streamlining feature development, cutting implementation time by 70%.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "swing",
          color: "green-text-gradient",
        },
        {
          name: "junit",
          color: "pink-text-gradient",
        },
      ],
      image: imageeditor,
      source_code_link: "https://github.com/GargiUmrajkar/ImageProcessor",
    },
    {
      name: "EventBuzz",
      description:
        "Led 'EventBuzz', significantly enhancing event planning efficiency by 30% through the implementation of CRUD operations, and improving reliability by 25% using MySQL and Node.js. Integrated advanced logging mechanisms, achieving a remarkable 99.9% uptime. Employed React for creating a dynamic, user-friendly front end, contributing to a robust and adaptive event management platform. These enhancements streamlined coordination and adapted to user needs.",
      tags: [
        {
          name: "mysql",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
      ],
      image: eventbuzz,
      source_code_link: "https://github.com/GargiUmrajkar/EventBuzz",
    },
    {
      name: "Youtube Adviews Prediction",
      description:
        `Advanced advertising strategies with a predictive model utilize Decision Tree Regressor, Random Forest Regressor, and 
        Artificial Neural Network to forecast adview counts based on diverse YouTube metrics. 
        This approach significantly optimizes ad placement and timing by understanding viewer behavior, 
        leading to a substantial 65% performance boost for advertisers.`,
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "flask",
          color: "pink-text-gradient",
        },
      ],
      image: eazypark,
      source_code_link: "https://github.com/Gargi-U/Youtube-Adviews-Prediction",
    },
  ];
  
  const research_papers = [
    {
      name: "Online Product Recommendation",
      description:
        "Designed and implemented a predictive model using machine learning and AI to estimate YouTube video metrics, incorporating a ranking system based on trending data. Enhanced the model with a Random Forest algorithm, achieving a notable 78.4% accuracy, aiding creators in evaluating content authenticity and competitive strategy before publication",
      tags: [
        {
          name: "Production Pipeline development",
          color: "blue-text-gradient",
        },
        {
          name: "GCS Deployment",
          color: "green-text-gradient",
        },
        {
          name: "ML Operations",
          color: "pink-text-gradient",
        },
      ],
      image: youtube,
      source_code_link: "https://www.mlwithramin.com/project/f23-group-7",
      authors: [
        {
          name: "Komal Pardeshi",
          linkedin: "https://www.linkedin.com/in/vandit-gupta/",
        },
        {
          name: "Thomas George Thomas",
          linkedin: "https://www.linkedin.com/in/akshit-diwan/",
        },
        {
          name: "Ashkan Ghanavati",
          linkedin: "https://www.linkedin.com/in/dr-ashish-khanna-2381b778/",
        },
        {
            name: "Moheth Muralidharan",
            linkedin: "https://www.linkedin.com/in/dr-ashish-khanna-2381b778/",
          },
          {
            name: "Bardia Mouhebat",
            linkedin: "https://www.linkedin.com/in/dr-ashish-khanna-2381b778/",
          },
      ],
    },
  ];
  
  const achievements = [
    {
      title: "Deep Learning Teaching Assistant, Northeastern University",
      points: [
        "Received the 'Rookie of the Quarter' award at Infosys for exceptional performance and significant contributions to project success, rapidly adapting and boosting team efficiency.",
      ],
    },
    {
      title: "Global Student Mentor, NU Peer Pathways",
      points: [
        "Earned the 'Insta Award' at Infosys for mastering Azure tools like Data Factory, Data Lake, and Synapse Warehouse, excelling in project development, coordination, and timely delivery.",
      ],
    },
    {
        title: "Best Project, ML Operations at NU",
        points: [
          "Received the 'Rookie of the Quarter' award at Infosys for exceptional performance and significant contributions to project success, rapidly adapting and boosting team efficiency.",
        ],
      },
    {
        title: "Lead Co-ordinator, Covid Food and Disaster Relief Funds",
        points: [
            "Achieved a 4.5-star ranking for May,2021 in Mumbai,India for efforts.",
        ],
    },
   
  ];
  
  export {
    services,
    bio,
    technologies,
    experiences,
    projects,
    research_papers,
    achievements,
  };