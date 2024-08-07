import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  readytraderone,
  HSBC,
  aiforge,
  IBG,
  napa,
  ImperialDAO,
  seating,
  rover,
  irrigo,
  cpu,
  threejs,
  tradingbot,
  game,
  compiler,
  fhe,
  cw1,
  colourisation,
  textual
} from "../assets";
import { textVariant } from "../utils/motion";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  // {
  //   title: "Web Developer",
  //   icon: web,
  // },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "HSBC",
    icon: HSBC,
    iconBg: "#383E56",
    date: "Jun. 2024 - Present",
    points: [
      "Collaborated in an Agile team to develop and deploy full-stack .NET/C# applications using MVC architecture, meeting and surpassing stakeholder requirements for the Chief Technology Office.",
      "Optimising expensive database operations from O(n²) to O(1) complexity, significantly enhancing system performance for 9000 internal users.",
      "Reducing technology costs across the global division, by conducting a thorough audit of the technology landscape and identifying areas of optimisation.",
    ],
  },
  {
    title: "Founder & Leader",
    company_name: "ImperialDAO",
    icon: ImperialDAO,
    iconBg: "#0c122a",
    date: "Feb. 2024 - Present",
    points: [
          "Built a dynamic team of 50 talented Imperial staff, students, and alumni, including researchers and senior quantitative analysts, fostering a diverse, environment of ambition, innovation and collaboration.",
          "Managing a $150,000 trading fund for a venture capital firm's treasury, developing detailed investment theses and executing strategic trades that demonstrated financial acumen and leadership in asset management.",
          "Spearheaded the creation of an Angel Syndicate, where I evaluated investment opportunities and negotiated deals, showcasing strategic leadership and venture capital expertise.",
          "Secured sponsorship deals with key Web3 companies and providing sponsorship and incubation to internal ImperialDAO software development projects.",
          "Speaking in panels at international events in London, Lisbon and Amsterdam, featuring industry experts and thought leaders, thereby enhancing the visibility and credibility of ImperialDAO."
        ],
  },
  {
    title: "Full-Time Technology Associate",
    company_name: "AI Forge",
    icon: aiforge,
    iconBg: "black",
    date: "Aug. 2023 - Nov. 2023",
    points: [
      "In 3 days, I developed an integer linear programming algorithm and a full-stack web application interface for use by 200 concurrent clients at a high-stake business event. Re-used at 4 further events, streamlining their operations significantly and improving the company's reputation as an innovation hub.",
      "Worked with an NHS Doctor to build an AI-driven patient-doctor consultation product, measured to reduce appointment durations by 70% and reduce public health service waiting lists.",
      "Taught classes on Machine Learning algorithms to equip 14 Startup Entrepreneurs with product-building knowledge."
    ]
  },
    
  {
    title: "President & Head of Research",
    company_name: "Imperial Blockchain Society",
    icon: IBG,
    iconBg: "black",
    date: "Sep. 2023 - Present",
    points: [
      "Organised and delivered lectures on Python & Quantitative Trading, attracting 60 regular attendees and securing sponsorship from the Imperial Business School. This initiative strengthened the society's academic reputation and financial support.",
      "Co-organised the Global Blockchain and FinTech Conference at Imperial College, curating a high-profile speaker list that included senior executives and CEOs from elite financial institutions. The event drew over 700 attendees, including prominent figures such as Lord Holmes, MBE.",
      "Spearheaded and expanded industry relations by establishing collaborations with Tier 1 VC firms, exchanges, Hedgefunds and DeFi protocols, including Andreessen Horowitz, Binance, Kraken, B2C2, and Solana, enhancing the society's industry presence and influence.",
      "Increased society membership from 400 to 650 members by orchestrating 2-4 educational events per week with industry partners, providing valuable learning opportunities and networking for members."
    ],
  },

  {
    title: "Developer",
    company_name: "ReadyTraderOne",
    icon: readytraderone,
    iconBg: "#E6DEDD",
    date: "May. 2024 - Present",
    points: [
      "Delivering order book simulations on asset classes including cryptocurrencies, FX, Fixed Income and commodities following comprehensive courses on Quantitative Trading.",
      "Part of a team of 4 junior engineers, 2 senior engineers, 2 business development associates, 1 secretary and 2 external advisors."
    ],
  },

  {
    title: "Software Engineer Intern",
    company_name: "Napa Society",
    icon: napa,
    iconBg: "#383E56",
    date: "May. 2023 - Jun. 2023",
    points: [
      "Developed a cloud-based user-upload pipeline in Node.js for a social media platform, leveraging AWS S3 for secure storage, AWS Lambda for automated processing, and AWS Rekognition for AI-driven real-time content analysis, enhancing platform reliability and user safety.",
      "Transformed the media delivery system from synchronous HTTP to asynchronous WebSocket streaming via AWS API Gateway to enable real-time streaming of video posts, reducing media load times significantly."
    ],
  },


];

const testimonials = [
  
];

const projects = [
  {
    name: "C Compiler",
    description: "Developed both an interpreter and comprehensive bootstrapped C compiler from scratch, implementing a lexer, parser, abstract syntax trees, OOP and assembly optimisation.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "lex",
        color: "green-text-gradient",
      },
      {
        name: "yacc",
        color: "pink-text-gradient",
      },
    ],
    image: compiler,
    source_code_link: "https://github.com/",
  },
  {
    name: "Seating Optimisation",
    description: "In a few days, I developed an integer linear programming algorithm with a full-stack web app interface for use by 240+ clients across high-stake business events. Re-used at 4 further events, streamlining their operations significantly.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Python (PuLP)/Flask",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "text-yellow-500",
      },
    ],
    image: seating, 
    source_code_link: "https://github.com/",
  },
  {
    name: "CNN Optimisation",
    description: "Optimized Convolutional Neural Network (CNN) architectures using a flexible greedy grid search approach, achieving groundbreaking validation accuracy (97.32%) on the CIFAR-10 dataset by refining VGG model variations.",
    tags: [
      {
        name: "Keras",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: cw1, 
    source_code_link: "https://github.com/",
  },
    {
    name: "Autonomous Rover Embedded System",
    description: "Designed FPGA logic in SystemVerilog and C++ for a rover able to self-navigate using computer vision within unknown terrains and map its surroundings. Developed the triangulation algorithm for the rover to convert camera readings into physical co-ordinates.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "SystemVerilog",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "HTML/CSS/SQL",
        color: "text-yellow-500",
      },
    ],
    image: rover, 
    source_code_link: "https://github.com/",
  },

  
  {
    name: "AI Sentiment Analysis with LSTM and Textual Embeddings",
    description: "Developed an LSTM-based sentiment analysis model using GloVe embeddings, achieving an accuracy of 86.75% by capturing temporal dependencies and nuanced semantic vectors, significantly improving sentiment differentiation.",
    tags: [
      {
        name: "Tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "Keras",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: textual, 
    source_code_link: "https://github.com/",
  },
  {
    name: "RISCV CPU Design",
    description: "Designed the control unit, pipeline architecture, 4-way associative cache and jump and branch instructions in a team CPU design project, implementing the RISCV instruction-set.",
    tags: [
      {
        name: "System Verilog",
        color: "blue-text-gradient",
      },
      {
        name: "Assembly",
        color: "green-text-gradient",
      },
      {
        name: "C++",
        color: "pink-text-gradient",
      },
    ],
    image: cpu, 
    source_code_link: "https://github.com/",
  },
  {
    name: "Low-Latency Crypto-Trading Chatbot",
    description: "Built a month-long hackathon winning product which derived and provided original and insightful real-time blockchain data to high-frequency traders, coupled with fast copy-trading mechanisms, and an optimised user pathway between evaluating this real-time data and quickly executing latency-bound orders.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: tradingbot,
    source_code_link: "https://github.com/",
  },

  {
    name: "FHE (Fully Homomorphic Encryption) GPU Research Analysis",
    description: "Designed FPGA logic in SystemVerilog and C++ for a rover able to self-navigate using computer vision within unknown terrains and map its surroundings. Developed the triangulation algorithm for the rover to convert camera readings into physical co-ordinates.",
    tags: [
    ],
    image: fhe, 
    source_code_link: "https://github.com/",
  },
  {
    name: "Image Colorization with Conditional GANs",
    description: "Developed a conditional GAN for image colourisation, achieving superior visual fidelity and vibrant, accurate colors; leveraged discriminator feedback for enhanced textural consistency, outperforming MAE loss-based UNet autoencoders in capturing complex data distributions.",
    tags: [
      {
        name: "Tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "Keras",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: colourisation, 
    source_code_link: "https://github.com/",
  },
  {
    name: "IBM Engineering Consultancy Project: AI Irrigation Rover",
    description: "Collaborated with stakeholders from IBM to develop an autonomous robot that relocates plants based on real-time weather conditions. Integrated IBM Watson LLM for voice interaction and real-time updates on plant metrics.",
    tags: [
      {
        name: "IBM Watson LLM",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "HTML/CSS/SQL",
        color: "pink-text-gradient",
      },
    ],
    image: irrigo, 
    source_code_link: "https://github.com/",
  },

  {
    name: "Online Embedded System with FPGA Controller",
    description: "Developed an FPGA-based controller for an online game, integrating hardware and software components to enhance user interaction and gameplay experience.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "System Verilog",
        color: "pink-text-gradient",
      },
    ],
    image: game,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };