import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Christopher Sung",
  initials: "CS",
  location: "Sydney AU",
  locationLink: "https://www.google.com/maps/place/Sydney",
  about:
    "",
  summary:
    "",
  avatarUrl: "https://avatars.githubusercontent.com/u/43859397?v=4",
  personalWebsiteUrl: "https://christophersung.dev",
  contact: {
    email: "christopher.y.sung@gmail.com",
    tel: "+61402211465",
    social: [
      // {
      //   name: "GitHub",
      //   url: "https://github.com/okyesgoodnice",
      //   icon: GitHubIcon,
      // },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cywsung/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Macquarie University",
      degree: "Bachelor of Commerce",
      start: "2018",
      end: "2021",
    },
    {
      school: "Western Sydney University",
      degree: "Bachelor of Medicine/Bachelor of Surgery (discontinued)",
      start: "2015",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Freelance Developer",
      link: "",
      badges: [],
      title: "Web Developer",
      logo: ClevertechLogo,
      start: "2021",
      end: "Present",
      description:
        "• Building, styling and shipping tailored websites for a diverse array of clients using frameworks such as Ruby on Rails and Next.js",
      descriptiontwo:
        "• Managing project timelines, budgets, and client communications to ensure successful project delivery and satisfaction with the final deliverables",
      descriptionthree:
        "• Maintained a strong commitment to ongoing learning and professional development to stay updated with the latest technologies and industry trends",
      descriptionfour:
        "",
      descriptionfive:
        "",
    },
    {
      company: "Intuition",
      link: "",
      badges: [],
      title: "Full Stack Developer",
      logo: ParabolLogo,
      start: "Sep 2022",
      end: "Dec 2023",
      description:
        "• Developed a wide range of new features for Intuition’s internal Ruby on Rails web application (my-i), adding new functionality as requested by the product owner",
      descriptiontwo:
        "• Created new RESTful API endpoints within the my-i codebase to facilitate communication between its database and Intuition’s new public-facing website",
      descriptionthree:
        "• Led the development of a sophisticated form on the new public website enabling potential students/parents to schedule a callback",
      descriptionfour:
        "• Engineered functionalities within the form such as dynamically fetching available times/dates from the my-i API sending the user email confirmation via SendGrid including a link allowing them to edit their booking, and ensuring database interactions were handled with information security and data integrity in mind",
      descriptionfive:
        "• Conducted comprehensive testing and debugging to identify and rectify any issues, guaranteeing functionality and reliability across different browsers and devices",
    },
  ],
  languages: [
    "Ruby", 
    "JavaScript", 
    "TypeScript", 
    "HTML", 
    "CSS/SCSS", 
    "SQL",
  ],
  frameworks: [
    "Ruby on Rails",
    "React", 
    "Next.js", 
    "Node.js",
    "Tailwind", 
    "Bootstrap",
  ],
  tools: [
    "Git", 
    "CI/CD", 
    "PostgreSQL", 
    "VS Code",
    "IntelliJ", 
    "Figma",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
