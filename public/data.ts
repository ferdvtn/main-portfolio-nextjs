export interface experience {
  id: number;
  title: string;
  company: string;
  date: string;
}

export interface education {
  id: number;
  name: string;
  major: string;
  date: string;
}

export interface tool {
  id: number;
  url: string;
}

export interface project {
  id: number;
  url: string;
  openimage: boolean;
}

export const experiences: experience[] = [
  {
    id: 5,
    title: "Software Engineer",
    company: "Kompas Gramedia",
    date: "Aug 2022 - Now",
  },
  {
    id: 4,
    title: "Software Developer",
    company: "PT. Indocyber Global Technology",
    date: "Jun 2021 - May 2022",
  },
  {
    id: 3,
    title: "Senior - Web Developer",
    company: "PT. Bahtera Informatika",
    date: "May 2021 - Jun 2021",
  },
  {
    id: 2,
    title: "Junior - Web Developer",
    company: "PT. Bahtera Informatika",
    date: "Jan 2020 - Apr 2021",
  },
  {
    id: 1,
    title: "IT Support",
    company: "PT. Wawasan Lintas Nusantara",
    date: "Apr 2019 - Dec 2019",
  },
];

export const educations: education[] = [
  {
    id: 4,
    name: "STMIK Nusa Mandiri",
    major: "Information System",
    date: "2019 - 2020",
  },
  {
    id: 3,
    name: "Univ. BSI",
    major: "Information Management",
    date: "2016 - 2019",
  },
  {
    id: 2,
    name: "SMKN 53 Jakarta",
    major: "T. Audio Video",
    date: "2013 - 2016",
  },
  {
    id: 1,
    name: "SMPN 187 Jakarta",
    major: "",
    date: "2010 - 2013",
  },
];

export const tools: tool[] = [
  {
    id: 1,
    url: "https://codeigniter.com",
  },
  {
    id: 2,
    url: "https://laravel.com",
  },
  {
    id: 3,
    url: "https://jquery.com",
  },
  {
    id: 4,
    url: "https://vuejs.org",
  },
  {
    id: 5,
    url: "https://nuxtjs.org",
  },
  {
    id: 6,
    url: "https://getbootstrap.com",
  },
  {
    id: 7,
    url: "https://tailwindcss.com",
  },
  {
    id: 8,
    url: "https://git-scm.com",
  },
  {
    id: 9,
    url: "https://subversion.apache.org",
  },
  {
    id: 10,
    url: "https://dart.dev",
  },
  {
    id: 11,
    url: "https://flutter.dev",
  },
  {
    id: 12,
    url: "https://go.dev",
  },
  {
    id: 13,
    url: "https://reactjs.org",
  },
];

export const projects: project[] = [
  {
    id: 1,
    url: "https://ferdian-tasklist.netlify.app",
    openimage: false,
  },
  {
    id: 2,
    url: "https://irentalcars.netlify.app",
    openimage: false,
  },
  {
    id: 3,
    url: "Mobile apps",
    openimage: true,
  },
  {
    id: 4,
    url: "https://todolist-af.netlify.app",
    openimage: false,
  },
];
