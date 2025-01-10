export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Prioritization of Open Source Software",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b5.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Building for a Global Audience",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Tech stacks",
      description: "Constantly improving",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for Bitcoin and FOSS development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building with Freedom tools",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/running-nostr.gif",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "BIP 119: CTV Contribution",
      des: "Merged PR for CheckTemplateVerify helping fix minor issues to help explain the need for Covenants.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/bitcoin/bips/pull/1704",
    },
    {
      id: 2,
      title: "NIP 47: NWC contribution",
      des: "Fixed some methods required to make Nostr Wallet Connect work properly.",
      img: "/p2.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/nostr-protocol/nips/pull/1611",
    },
    {
      id: 3,
      title: "AFSTR FOOD",
      des: "A Restaurant's website for ordering meals using the latest tech stack and Bitcoin as payment.",
      img: "/nostr-bitcoin.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/Gudnessuche/Afstr-Food",
    },
    {
      id: 4,
      title: "Afstr-AI",
      des: "Recreated the Gemini AI platform and utilized it's API.",
      img: "/b5.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/Gudnessuche/Afstr-AI",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with E.S was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
      name: "Jeezmman",
      title: "Senior Software Developer",
    },
    {
      quote:
        "E.S's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, E.S is the ideal partner.",
      name: "Jack Houdini",
      title: "Devops at Bitnob",
    },
    {
      quote:
        "The most intelligent person to have work on anything you need done.",
      name: "Monalisa",
      title: "Meidcal professional and Entrepreneur.",
    },
    {
      quote:
        "Exceptional human being,very patient and thorough with their work",
      name: "Mohammed",
      title: "CEO of a Real Estate company.",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer",
      desc: "Assisted in the development of a web-based platform and wallets using React.js, Next.js enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Social Media Strategist",
      desc: "Helped Bitdevs Social Media expansion for visibility",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance Lightning App Dev Project",
      desc: "Led the dev of a mobile app for lightning payments.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies for Nostr Wallet Connect.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/Gudnessuche/"
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];
