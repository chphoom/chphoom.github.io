import { Injectable } from '@angular/core';
import { Experience } from './models';

@Injectable({
  providedIn: 'root'
})
// edit work experience here
export class ExperienceService {

  experiences: Experience[] = [ //this is from most to least recent
    {
      position: "Research Assistant",
      employer: "Georgia Institute of Technology",
      start: "May 2025",
      end: "April 2026",
      details: [
        "Selected to join the Design Intelligence Lab’s SAMI (Social Agent Mediated Interactions) project, contributing to software engineering efforts during the initial onboarding semester.",
        "Collaborating with lab mentors and researchers in a multidisciplinary setting focused on interactive agents, human-computer interaction, and AI-enhanced education tools.",
        "Will propose and lead an independent research project in future semesters, with a focus on applied AI, HCI, or intelligent tutoring systems."
      ]
    },
    {
      position: "Contract Software Engineer",
      employer: "Little Analytics Machine",
      start: "April 2024",
      end: "Sept 2024",
      details: [
        "Worked as a contract software engineer on a small agile team to develop and maintain client-facing tools using a full-stack technology stack including React Native, Python, and AWS services.",
        "Led frontend improvements by refactoring key React Native components to ensure cross-platform responsiveness, improve load performance, and enhance accessibility for diverse user groups.",
        "Built, tested, and maintained RESTful APIs using SQLAlchemy and PostgreSQL, enabling secure and efficient data access and storage for live application features.",
        "Contributed to weekly sprint planning, code reviews, and standups, actively collaborating with both technical and non-technical team members to ensure project alignment and timely delivery."
      ]
    },
    {
      position: "Software Engineering Intern",
      employer: "WillowTree",
      start: "June 2023",
      end: "Aug 2023",
      details: [
        "Collaborated with a cross-functional team of developers and designers to build and refine mobile applications, gaining hands-on experience with React Native and AWS in both frontend and backend contexts.",
        "Shadowed a senior engineer on live client-facing projects, participating in sprint planning, code reviews, and feature scoping discussions to understand real-world software development workflows.",
        "Independently initiated and led the development of Stayfull, a food resource locator app, from concept to working prototype, including UI design, API integration, and backend setup using SQLAlchemy, PostgreSQL, and AWS.",
        "Focused on agile principles by iterating on MVP scope and incorporating feedback from internal demo sessions to ensure alignment with both technical feasibility and user needs."
      ]
    },
    {
      position: "Teaching Assistant",
      employer: "UNC Chapel Hill",
      start: "Jan 2022",
      end: "May 2022",
      details: [
        "Mentored and assisted over 275 Computer Organization students, explaining challenging concepts to both Computer Science and non-technical majors",
        "Coordinated office hours and lesson plans in conjunction with 6 other teaching assistant in order to ensure widespread availability and quickly return tests and assignments to students"
      ]
    },
  ]

  constructor() { }

  getExperiences() {
    return this.experiences
  }
}
