// import project demo images as follows.

export const projects = [
  //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
  //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
  {
    name: "Astra", //project name
    description:
      "A web application to perform real time analytics of a user’s trade history, filter data with a payment gateway to subscribe. Built using React.js, Redux, MUI, Django and Razorpay.", //project description
    githubLink: "", //github repo link
    projectLink: "https://astragenai.com/", //deployed project link
    tech: ["React.js", "Django REST Framework", "MUI"], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
    photo: [
      "/projects/Project1_1.png",
      "/projects/Project1_2.png",
      "/projects/Project1_3.png",
    ], //list of names of images from above imports.
  },
  {
    name: "Elweigh",
    description:
      "A responsive website and admin panel for industrial machinery and weighing systems. Technologies: Node.js, HTML/CSS, JavaScript, Bootstrap.",
    githubLink: "/",
    projectLink: "http://5.189.176.65:8501/",
    tech: ["HTML", "CSS", "JS", "Bootstrap", "Node.js"],
    photo: [
      "/projects/Project2_1.png",
      "/projects/Project2_2.png",
      "/projects/Project2_3.png",
    ],
  },
  {
    name: "Copy trading tool angelone",
    description:
      "A real-time platform for managing Angel One client accounts, enabling admins to assign users and execute live trades. Used React, Django, Chakra UI, Smart API.",
    githubLink: "/",
    projectLink: "https://younginvestor.softwired.in/",
    tech: ["React.js", "Django", "Chakra UI"],
    photo: [
      "/projects/Project3_1.png",
      "/projects/Project3_2.png",
      "/projects/Project3_3.png",
    ],
  },
  {
    name: "MySponsor",
    description:
      "A web app connecting sponsors, event organizers, and creators for seamless collaboration and deal making. Built using React.js, Redux, Django, and Bootstrap.",
    githubLink: "https://github.com/amarmishra03/mysponsor-amar",
    projectLink: "",
    tech: ["React.js", "Django", "Bootstrap"],
    photo: [
      "/projects/Project3_3.jpg",
      "/projects/Project3_3.jpg",
      "/projects/Project3_3.jpg",
    ],
  },
];
