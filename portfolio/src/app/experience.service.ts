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
        "Joining the Design Intelligence Lab to support the SAMI project, contributing to research and development efforts focused on intelligent tutoring systems and adaptive learning technologies.",
        "Anticipating responsibilities in user research, system design, and evaluation, with final project assignments to be determined."
      ]
    },
    {
      position: "Software Engineering Intern",
      employer: "WillowTree",
      start: "June 2023",
      end: "Aug 2023",
      details: [
        "Contributed to a cross-functional team, actively participating in decision-making and emphasizing collective pacing, effective communication, and time management.",
        "Gained proficiency in React Native and AWS for both frontend and backend development, while shadowing a mentor in client-facing projects.",
        "Managed agile project development with a focus on reevaluating MVPs and project sustainability."
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
