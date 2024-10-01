import { Injectable } from '@angular/core';
import { ContactInfo } from './models';

@Injectable({
  providedIn: 'root'
})

// edit general content of website here
// TODO: add image
export class DataService {

  image: string = "assets/myimage.jpg"
  image2: string = "assets/myimage2.jpg"

  contacts: ContactInfo = {
    name: "Chalisa Keaw Phoomsakha",
    email: "chphoom@gmail.com",
    resume: "https://docs.google.com/document/d/1SvSyOLMyg0KqV_JLhkjgyMLAknNIrr4r8SxDdoS3cfY/edit?usp=sharing",
    linkedin: "https://www.linkedin.com/in/keaw/",
    github: "https://github.com/chphoom",
    facebook: undefined,
    twitter: undefined
  }

  // these are arrays because of paragraph seperation
  homeBio: string[] = [
    "As a Master’s student in Computer Science specializing in Interactive Intelligence, I’m excited to deepen my expertise in the fields of AI and human-computer interaction. With a passion for both web and app development, I bring a curious and adaptable mindset to every project. I thrive on exploring new technologies and solving complex problems, and I’m eager to apply my growing knowledge in innovative ways.",
    "Currently pursuing my Master’s part-time, I’m actively seeking full-time positions where I can contribute to impactful projects while continuing my academic journey. I’m also looking to join a research group focused on advancing interactive intelligence. Let’s connect and explore how we can shape the future together!"
  ]

  aboutme: string[] = [
    "Hey there! I stumbled into programming through quirky avenues like the Episode App Writers Portal, Tumblr blogs, and Minecraft mods. It sparked a fire in me for coding, leading me to pursue a Bachelor's in Computer Science at the University of North Carolina at Chapel Hill (2019-2023).  Now, I’m continuing that journey by pursuing a Master’s in Computer Science at the Georgia Institute of Technology, with a focus on Interactive Intelligence.",
    "Outside of class, I'm all about diving deeper into programming, especially AI and machine learning. Whether it's tinkering with new libraries or joining coding communities, I'm always hungry to learn more.",
    "Along the way, I've dabbled in various technologies, leading projects like Stayfull and ShiftOverflow. Let's team up, brainstorm cool ideas, and push the boundaries of what's possible in tech. Here's a glimpse of some of the skills I've picked up along the journey:"
  ]

  constructor() { }

  getName() {
    return this.contacts.name
  }

  getEmail() {
    return this.contacts.email
  }

  getResume() {
    return this.contacts.resume
  }

  getLinkedIn() {
    return this.contacts.linkedin
  }

  getGithub() {
    return this.contacts.github
  }

  getFacebook() {
    return this.contacts.facebook
  }

  getTwitter() {
    return this.contacts.twitter
  }

  getBio() {
    return this.homeBio
  }

  getAboutMe() {
    return this.aboutme
  }

  getMyImage() {
    return this.image
  }
  
  getMyImage2() {
    return this.image2
  }
}
