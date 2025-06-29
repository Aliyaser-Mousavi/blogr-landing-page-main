const techStackData = {
  categories: [
    {
      name: "Frontend Development",
      skills: [
        {
          name: "HTML",
          fullName: "Hyper Text Markup Language (HTML)",
          icon: "https://skillicons.dev/icons?i=html",
          proficiency: "Advanced",
          proficiencyColor: "green",
          features: [
            "Semantic HTML5",
            "Accessibility (ARIA)",
            "SEO Optimization",
          ],
          projects: [
            {
              name: "Positivus-free",
              url: "https://github.com/Aliyaser-Mousavi/Positivus-free",
            },
            {
              name: "Omnifood",
              url: "https://github.com/Aliyaser-Mousavi/Omnifood",
            },
            {
              name: "Product Preview Card",
              url: "https://github.com/Aliyaser-Mousavi/product-preview-card",
            },
            {
              name: "Url Shortening Api",
              url: "https://github.com/Aliyaser-Mousavi/url-shortening-api-master",
            },
          ],
        },
        {
          name: "CSS",
          fullName: "Cascading Style Sheets (CSS)",
          icon: "https://skillicons.dev/icons?i=css",
          proficiency: "Advanced",
          proficiencyColor: "green",
          features: ["Flexbox & Grid", "Responsive Design", "Animations"],
          projects: [
            {
              name: "Natours",
              url: "https://github.com/Aliyaser-Mousavi/Natours",
            },
            {
              name: "Shop",
              url: "https://github.com/Aliyaser-Mousavi/Shop-new",
            },
            {
              name: "Nexter",
              url: "https://github.com/Aliyaser-Mousavi/Nexter",
            },
          ],
        },
        {
          name: "JavaScript",
          fullName: "JavaScript",
          icon: "https://skillicons.dev/icons?i=js",
          proficiency: "Beginner",
          proficiencyColor: "yellow",
          features: ["DOM Manipulation", "ES6 Features", "Async/Await"],
          projects: [
            {
              name: "Guessing Game",
              url: "https://github.com/Aliyaser-Mousavi/guessing-game",
            },
          ],
        },
        {
          name: "Scss",
          fullName: "Scss",
          icon: "https://skillicons.dev/icons?i=scss",
          proficiency: "Beginner",
          proficiencyColor: "yellow",
          features: ["Variables", "Nesting", "Mixins"],
          projects: [
            {
              name: "Trillo",
              url: "https://github.com/Aliyaser-Mousavi/Trillo",
            },
          ],
        },
        {
          name: "Tailwind CSS",
          fullName: "Tailwind",
          icon: "https://skillicons.dev/icons?i=tailwind",
          proficiency: "Advanced",
          proficiencyColor: "green",
          features: ["Utility-First CSS", "Responsive Design", "Custom Themes"],
          projects: [
            {
              name: "manage Landing Page",
              url: "https://github.com/Aliyaser-Mousavi/manage-landing-page-master",
            },
            {
              name: "social Proof Section",
              url: "https://github.com/Aliyaser-Mousavi/social-proof-section",
            },
            {
              name: "blogr Landing Page",
              url: "https://github.com/Aliyaser-Mousavi/blogr-landing-page-main",
            },
            {
              name: "easybank Landing Page",
              url: "https://github.com/Aliyaser-Mousavi/easybank-landing",
            },
          ],
        },
      ],
    },
    {
      name: "Version Control & Collaboration",
      skills: [
        {
          name: "Git",
          fullName: "Git",
          icon: "https://skillicons.dev/icons?i=git",
          proficiency: "Beginner",
          proficiencyColor: "yellow",
          features: ["Branching & Merging", "Version Control", "Collaboration"],
          projects: [],
        },
        {
          name: "Github",
          fullName: "Github",
          icon: "https://skillicons.dev/icons?i=github",
          proficiency: "Intermediate",
          proficiencyColor: "blue",
          features: [
            "Repository Management",
            "Pull Requests",
            "CI/CD Integration",
          ],
          projects: [
            {
              name: "My Github Account",
              url: "https://github.com/Aliyaser-Mousavi",
            },
          ],
        },
      ],
    },
  ],
};

const certificatesData = [
  {
    title: "Html and Css",
    provider: "Meta",
    platform: "Gohar Shad Training Course",
    earnedOn: "Aug 10, 2024",
    downloadPath: "images/certificates/png/cer-IFD.png",
    imagePath: "images/certificates/png/cer-IFD.png",
    imageAlt:
      "Gohar Shad Training Course Certificate - Introduction to Html and Css",
    providerLogo: "images/certificates/provider/Gohar-Shad-Training-Course.svg",
  },
  {
    title: "Scss",
    provider: "Meta",
    platform: "APEX Training Course",
    earnedOn: "Oct 25, 2024",
    downloadPath: "images/certificates/png/cer-JS.png",
    imagePath: "images/certificates/png/cer-js.png",
    imageAlt: "APEX Training Course Certificate - Introduction to Scss",
    providerLogo: "images/certificates/provider/APEX-Training-Course.svg",
  },
  {
    title: "Tailwind Css",
    provider: "Meta",
    platform: "Adib Academic",
    earnedOn: "May 3, 2025",
    downloadPath: "images/certificates/png/cer-VC.png",
    imagePath: "images/certificates/png/cer-VC.png",
    imageAlt: "Coursera Certificate - Introduction to Tailwind Css",
    providerLogo: "images/certificates/provider/Adib-Academic-cleaned.svg",
  },
];

// Export the data for use in other files
export { techStackData, certificatesData };
