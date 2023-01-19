export const info = {
  baseUrl: "https://venkatkidambi.me",
  name: "Venkat Kidambi",
  jobDescription: "Honors Biomedical Engineering Student and Undergraduate Researcher",
  about: `I'm a final year Honors student at the University of Connecticut studying 
  Biomedical Engineering with a concentration in Computational and Systems Biology, and this is my personal website!
  I am currently looking for admission into a doctoral graduate program. 
  My primary research interests lie in electrophysiology, biomedical signal processing and control systems, and instrumentation design. 
  I am a firm believer in leveraging creative problem solving ideals in conjunction with traditional technical knowledge to 
  tackle complex problems in biomedical engineering research.
 Feel free to stick around as long as you'd like and check out some of my work below. 
 You can contact me by using the icons at the bottom of this page.
  `,

  experience: [
    {
      name: "Undergradaute Research Assistant",
      location: "Hoshino Lab, University of Connecticut",
      startDate: "August 2022",
      endDate: "Present",
      description: [
        "✓ Designing NSF funded light sheet / selective plane illumination (LSM/SPIM) microscopy platform under Dr. Kazunori Hoshino for in-vivo cell tissue imaging with environment variable control (humidity, temperature, and carbon dioxide concentration) using PID.",
        "✓ Reverse engineered existing SPIM designs, both open source and from commercial vendors (Zeiss) for component development.",
        "✓ Used SolidWORKS and CNC milling for rapid component design, manufacture and iteration."
      ],
    },

    {
      name: "Technical Director",
      location: "Global Health Spaces on Campus, University of Connecticut",
      startDate: "April 2022",
      endDate: "Present",
      description: [
        "✓ Redesign organization website from scratch using Wordpress with custom HTML and CSS integration to professionalize external public relations and raise awareness about issues in global health."
      ],
    },

    {
      name: "Undergraduate Research Assistant",
      location: "Auditory Electrophysiology Laboratory, University of Connecticut",
      startDate: "January 2022",
      endDate: "May 2022",
      description: [
        "✓ Recorded brain activity in an awake animal model with multi-channel electrode in response to natural sounds as part of a brain sound processing study.",
        "✓ Developed MATLAB script to convert audio waveform into visually representable Toeplitz correlation matrix for cochlear Volterra filter model."
      ],
    },
  ],

  education: [
    {
      name: "University of Connecticut",
      location: "Storrs, Connecticut",
      startDate: "August 2020",
      endDate: "May 2023 (expected)",
      description: [
        "Bachelor of Science in Biomedical Engineering With Honors",
      ],
    },
    // {
    //   name: "Govt. Degree Boys College Buffer Zone",
    //   location: "Karāchi, Sindh, Pakistan",
    //   startDate: "2018",
    //   endDate: "2020",
    //   description: ["Intermediate, Pre-Engineering"],
    // },
    // {
    //   name: "Ghazi Foundation Schools & Colleges",
    //   location: "Karāchi, Sindh, Pakistan",
    //   startDate: "2016",
    //   endDate: "2018",
    //   description: ["Matriculation,  Computer Science"],
    // },
  ],

  socialMedia: {
    facebook: "https://www.facebook.com/profile.php?id=100022899849583",
    twitter: "https://twitter.com/Uzzii_21",
    github: "https://github.com/venkatkidambi",
    email: "mailto:venkatanathan.kidambi@uconn.edu",
    linkedin: "https://www.linkedin.com/in/venkatanathan-kidambi",
  },

  projects: [
    {
      title: "Towards Light Sheet Microscopy Incubation: Initial Design and Analysis",
      isFeatured: true,
      thumbnail: "/assets/images/towards.png",
      // githubUrl: "https://github.com/uzzii-21/astro-portfolio",
      liveUrl: "https://drive.google.com/file/d/1xNew--JrxagqWxZSg0oDJQS9m5TJTHGC/view",
    },
    {
      title: "Detection of Metastases",
      isFeatured: true,
      thumbnail: "/assets/images/histology.png",
      githubUrl: "https://github.com/venkatkidambi/DetectionOfMetastases",
      // liveUrl: "https://drive.google.com/file/d/1xNew--JrxagqWxZSg0oDJQS9m5TJTHGC/view",
    },
    {
      title: "Global Health Spaces on Campus Website",
      isFeatured: true,
      thumbnail: "/assets/images/glohsoc.jpeg",
      // githubUrl: "https://github.com/uzzii-21/astro-portfolio",
      liveUrl: "https://glohsoc.uconn.edu",
    },
    {
      title: "Toeplitz Autocorrelation",
      isFeatured: true,
      thumbnail: "/assets/images/toeplitz.jpg",
      githubUrl: "https://github.com/venkatkidambi/ToeplitzAutocorrelation",
      // liveUrl: "https://drive.google.com/file/d/1xNew--JrxagqWxZSg0oDJQS9m5TJTHGC/view",
    },
    {
      title: "Personal Website",
      isFeatured: true,
      thumbnail: "/assets/images/website.jpg",
      githubUrl: "https://github.com/venkatkidambi/PersonalWebsite",
      liveUrl: "https://venkatkidambi.me",
    }
  ],
};
