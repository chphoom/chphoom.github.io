import { Injectable } from '@angular/core';
import { Project } from './models';

@Injectable({
  providedIn: 'root'
})
// edit list of projects here
export class ProjectService {

  projects: Project[] = [ //this list is in no particular order
    {
      title: "Stayfull",
      details: "A prototype app which consolidates location data of food resources to assist those in need to find food assistance resources. It also allows food resource organizations to easily update information. Developed for WillowTree for Good.",
      skills: [
        "React Native",
        "Mobile App Development",
        "PostgreSQL",
        "AWS"
      ],
      github: "https://github.com/StayFull",
      website: "https://www.linkedin.com/feed/update/urn:li:activity:7095927158413344768?utm_source=share&utm_medium=member_desktop",
      img: "assets/stayfull.png",
      img2: "assets/stayfull2.png",
      featured: true,
      year: 2023,
      employer: "WillowTree"
    },
    {
      title: "Around the Block",
      details: "A social media website for artists seeking a community of artists that encourage developing new skills and experimenting with ideas. Developed for COMP 590, Design and Implementation of User Inferfaces. ",
      skills: [
        "Angular",
        "Material UI",
        "Bootstrap",
        "SQLAlchemy",
        "PostgreSQL",
        "Python",
        "OpenShift",
        "Frontend",
        "Backend",
        "Web Development"
      ],
      github: "https://github.com/chphoom/aroundtheblock",
      website: "https://aroundtheblock.apps.cloudapps.unc.edu/",
      img: "assets/aroundtheblock.png",
      img2: "assets/aroundtheblock2.png",
      featured: true,
      year: 2023,
      employer: "UNC Chapel Hill"
    },
    {
      title: "SpareSpace",
      details: "A website which allows students to connect with local businesses and rent underutalized spaces that would otherwise waste resources. Developed for Pearl Hacks 2023, winning 2nd place, CoStar Group: Best Use of Real Estate Data, and Best Use of Appwrite.",
      skills: [
        "Angular",
        "Material UI",
        "NodeJS",
        "Appwrite",
        "Docker",
        "Frontend"
      ],
      github: "https://github.com/Littlesk/sparespace",
      website: "https://devpost.com/software/sparespace-mo3qru",
      img: "assets/sparespace.png",
      img2: "assets/sparespace2.png",
      featured: true,
      year: 2023,
      employer: "PearlHacks"
    },
    {
      title: "Coursera: HTML, CSS and Javascript for Web Developers",
      details: "Cousera web development course, featuring my solutions for various assignments.",
      skills: [
        "HTML",
        "CSS",
        "Javescript",
        "Web Development",
        "Frontend"
      ],
      github: "https://github.com/chphoom/fullstack-course4",
      website: undefined,
      img: undefined,
      img2: undefined,
      featured: false,
      year: 2022,
      employer: "Coursera"
    },
    {
      title: "CSXL Forum System Prototype",
      details: "Developed for COMP 423 final project, this feature allows CS students to post forums in order to connect with other students and find partners to work on extracirricular projects.",
      skills: [
        "Python",
        "Docker",
        "Angular",
        "Web Development",
        "Material UI",
        "PostgreSQL",
        "Typescript",
        "CSS",
        "HTML",
        "Frontend",
        "Backend"
      ],
      github: "https://github.com/comp423-23s/final-project-final-d4",
      website: undefined,
      img: undefined,
      img2: undefined,
      featured: false,
      year: 2023,
      employer: "UNC Chapel Hill"
    },
    {
      title: "Memorial Board",
      details: "Developed for Bull City Botics, a cloud app which allows for wireless control of a light grid built for a local synagouge.",
      skills: [
        "C",
        "Arduino",
        "AWS",
        "Mongoose OS"
      ],
      github: "https://github.com/chphoom/MemorialBoard",
      website: undefined,
      img: undefined,
      img2: undefined,
      featured: false,
      year: 2018,
      employer: "Bull City Botics"
    },
    {
      title: "Rock Paper Scissors Bot",
      details: "A simple bot, the first project in the Freecodecamp Machine Learning with Python Certification.",
      skills: [
        "Machine Learning",
        "AI",
        "Python"
      ],
      github: undefined,
      website: "https://replit.com/@chphoom/fcc-rock-paper-scissors",
      img: undefined,
      img2: undefined,
      featured: false,
      year: 2023,
      employer: "Free Code Camp"
    },
    {
      title: "Simple Web Server",
      details: "A very simple web server that takes one argument for port and then serves any files inside the public directory. Made as the first assignment in my Modern Web Programming course.",
      skills: [
        "HTML",
        "NodeJS",
        "Javascript",
        "Backend"
      ],
      github: "https://github.com/comp426-2022-fall/a01-chphoom",
      website: undefined,
      img: undefined,
      img2: undefined,
      featured: false,
      year: 2022,
      employer: "UNC Chapel Hill"
    },
    {
      title: "Simple Command Line Utility",
      details: " A simple installable Node.js command line application package. Made as the second assignment in my Modern Web Programming course.",
      skills: [
        "NodeJS",
        "Javascript",
        "Backend"
      ],
      github: "https://github.com/comp426-2022-fall/a02-chphoom",
      website: undefined,
      img: undefined,
      img2: undefined,
      featured: false,
      year: 2022,
      employer: "UNC Chapel Hill"
    },
    {
      title: "Simple Dice Roll Module",
      details: "A simple installable Node.js module package which containes various functions for similating dice rolls. Made as the third assignment in my Modern Web Programming course.",
      skills: [
        "NodeJS",
        "Javascript",
        "Backend"
      ],
      github: "https://github.com/comp426-2022-fall/a03-chphoom",
      website: undefined,
      img: undefined,
      img2: undefined,
      featured: false,
      year: 2022,
      employer: "UNC Chapel Hill"
    },
    {
      title: "Simple Dice Rolling API",
      details: "A simple web API using a module to similate dice rolls. Made as the fourth assignment in my Modern Web Programming course. Later I hosted it on an EC2 for practice.",
      skills: [
        "NodeJS",
        "ExpressJS",
        "Javascript",
        "Backend",
        "AWS",
        "EC2"
      ],
      github: "https://github.com/comp426-2022-fall/a04-chphoom",
      website: "http://54.147.33.47:5000/app/roll",
      img: undefined,
      img2: undefined,
      featured: false,
      year: 2022,
      employer: "UNC Chapel Hill"
    },
    {
      title: "Minigame Arcade",
      details: "A simple web application that lets people play minigames. Users create an account that gives them access to four minigames: Rock Paper Scissors, Morra, Tic Tac Toe and Magic 8 Ball. Players are also able to see their wins and track their high scores. The final project of my Modern Web Programming Course.",
      skills: [
        "NodeJS",
        "ExpressJS",
        "Javescript",
        "Backend",
        "HTML",
        "CSS"
      ],
      github: "https://github.com/comp426-2022-fall/a99-Team18",
      website: undefined,
      img: undefined,
      img2: undefined,
      featured: false,
      year: 2022,
      employer: "UNC Chapel Hill"
    },
    {
      title: "Tar Heel Shell",
      details: "A simple shell capable of changing directories and executing system programs such as pwd and ls. Created as the final project in my Systems Fundamentals course. Code avalible on request.",
      skills: [
        "C"
      ],
      github: undefined,
      website: undefined,
      img: undefined,
      img2: undefined,
      featured: false,
      year: 2021,
      employer: "UNC Chapel Hill"
    },
    {
      title: "Nonograms",
      details: "Used the model-view-controller design pattern together with the JavaFX UI library to design a complete, functioning GUI implementation of the single-player logic puzzle nonograms. Created as the final project in my Foundations of Programming course. Code availible upon request.",
      skills: [
        "MVC",
        "Java",
        "JavaFX",
        "Maven"
      ],
      github: undefined,
      website: undefined,
      img: undefined,
      img2: undefined,
      featured: false,
      year: 2021,
      employer: "UNC Chapel Hill"
    },
    {
      title: "Computer Organization Labs",
      details: "Various simple programs in MIPS Assembly using a MARS compiler created for my Computer Organization course. Code availible upon request.",
      skills: [
        "MIPS",
        "Assembly",
      ],
      github: undefined,
      website: undefined,
      img: undefined,
      img2: undefined,
      featured: false,
      year: 2023,
      employer: "UNC Chapel Hill"
    },
    {
      title: "Simple 2D Graphics Engine",
      details: "A very simple 2D Graphics engine written in C++, a culmination of effort spread accross several assignments in my 2D Computer Graphics course. Code availible upon request.",
      skills: [
        "C++",
      ],
      github: undefined,
      website: undefined,
      img: undefined,
      img2: undefined,
      featured: false,
      year: 2022,
      employer: "UNC Chapel Hill"
    },
    {
      title: "Simple Implementation of Various Data Structures",
      details: "Various assignments in which I implemented data structures such as LinkedList, HashMaps, AVL Trees, etc. during my Data Structures and Analysis course. I would consider this Java practice, code availible on request.",
      skills: [
        "Java",
      ],
      github: undefined,
      website: undefined,
      img: undefined,
      img2: undefined,
      featured: false,
      year: 2020,
      employer: "UNC Chapel Hill"
    },
    // {
    //   title: "test",
    //   details: "test",
    //   skills: [
    //     "test",
    //     "test",
    //     "test"
    //   ],
    //   github: "https://github.com/chphoom/",
    //   website: undefined,
    //   img: undefined,
    //   featured: false,
    //   year: 2018,
    //   employer: undefined
    // },
  ]

  constructor() { }

  getArchive() {
    return this.projects.sort((a, b) => b.year - a.year)
  }

  getFeaturedProjects() {
    return this.projects.filter((p) => p.featured == true)
  }

  getOtherProjects() {
    return this.projects.filter((p) => p.featured == false).sort((a, b) => b.year - a.year)
  }

  getSkills() {
    // this is stupidly long but it just takes all the skills and sorts by occurence
    return Array.from(this.projects.map(project => project.skills).flat().reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map())).sort((a, b) => b[1] - a[1]).map(value => value[0])
  }
}
