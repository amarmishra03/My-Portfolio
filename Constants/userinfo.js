//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import {
  faGithubAlt,
  faLinkedinIn,
  faMediumM,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

export const userinfo = {
  logoText: "Amar Mishra", //This text is visible on your navbar and footer like your logo.
  contact: {
    email: "developeramarofficial@gmail.com", //It is always a good idea to mention your email on your website. Good platform to communicate.
    phone: "8224094442", //Phone number is optional, if you dont want it, consider leaving it blank .
    countrycode: "+91", //It is advisable to add the country code incase you mention your contact number.
  },
  socials: [
    //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
    //more icons are imported above, use as you like them.
    {
      type: "github",
      link: "https://github.com/amarmishra03?tab=repositories",
      icon: faGithubAlt,
    },
    {
      type: "linkedin",
      link: "https://www.linkedin.com/in/amar-mishra-337aa7267",
      icon: faLinkedinIn,
    },
    {
      type: "Instagram",
      link: "https://www.instagram.com/k.i.n.g.s.m.a.n_amar03/",
      icon: faInstagram,
    },
  ],
  greeting: {
    //this text goes on your landing page
    title: "Hey there, I am Amar.",
    subtitle:
      "Full Stack Web Developer skilled in React.js, Redux, Node.js, and Django, with a strong focus on responsive and scalable applications. Experienced in building real-time analytics tools, automation platforms, and collaborative web apps. Hands-on with API integration, modern UI frameworks, and end-to-end deployment. Currently pursuing B.Tech in CSE (AI) with internship experience at Softwired",
  },
  capabilities: [
    {
      category: "Frontend",
      skills: ["Next.js", "React.js", "Redux", "Svelte.js"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Django", "Flask", "Python"],
    },
    {
      category: "UI/UX & Design",
      skills: ["Chakra UI", "Bootstrap", "Material UI", "Responsive Design"],
    },
    {
      category: "Tools & Version Control",
      skills: ["Git", "GitHub", "CI/CD Pipeline"],
    },
  ],

  about: {
    //this text goes at the bottom of your home page.
    content:
      "I am a Full Stack Web Developer with a strong foundation in both frontend and backend technologies, including React.js, Redux, Node.js, and Django. I specialize in building responsive, scalable, and user-centric web applications with seamless UI/UX. My projects span across real-time analytics tools, automation platforms, and collaborative web apps. I have hands-on experience integrating APIs, managing deployments, and working with modern frameworks like Chakra UI and Bootstrap. Currently pursuing a B.Tech in CSE (AI), I’ve also completed internship and simulation experiences with Softwired, JPMorgan Chase, and Tata Group. I’m passionate about creating impactful solutions through clean and efficient code.",
    resume: "/resume/Amar_Mishra_Resume.pdf", //link your resume here. it can be drive link or any other link
  },
  education: {
    visible: true, //set this to false if you want to omit this section
    educationList: [
      {
        time: "2022-2026", //timespan
        title: "B.Tech", //eg. BTech in Compuster Engineering
        organization: "Bhilai Institute of Technology, Durg(C.G.)", //eg. VJTI, Mumbai
        description:
          "Computer Science and Engineering (Artificial Intelligence)", //eg. secured a cgpa of 9.25 in all sems appeared in so far
      },
      {
        time: "2008-2021",
        title: "Secondary and Higher Secondary",
        organization: "Vishwadeep Senior Secondary School",
        description: "",
      },
    ],
  },
  experience: {
    visible: true, //set this to false if you want to omit this section
    experienceList: [
      {
        company: "Softwired India", //company name eg.Microsoft
        companylogo: "/CompanyLogo.png", //companylogo
        position: "Full Stack Developer", //post you held eg.Senior SDE
        time: "Oct 2024 - May 2025", //timespan
        description:
          "Developed full stack web application, stock market automation project. Implemented and integrated frontend and backend technologies. Deployed web applications using IIS server.", //eg. spearheaded the graphics team in designing SASS product UIs
      },
    ],
  },
  blogs: {
    //set this to false if you want to omit this section
    visible: true,
  },
};

export const headings = {
  //you can customise all the headings here.
  workHomePage: "Work",
  workMainPage: "Projects",
  capabilities: "Capabilities",
  about: "About Me",
  education: "Education",
  experience: "Experiences",
  blogs: "I write!",
  contact: "Contact Me",
};

export const ctaTexts = {
  //you can customise all the cta texts here.
  landingCTA: "My work",
  workCTA: "View All",
  capabCTA: "Get in Touch",
  educationCTA: "About Me",
  resumeCTA: "Resume",
  submitBTN: "Submit",
};
