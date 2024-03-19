import { Injectable } from '@angular/core';
import { ContactInfo } from './models';

@Injectable({
  providedIn: 'root'
})

// edit general content of website here
// TODO: add image
export class DataService {

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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Montes nascetur ridiculus mus mauris. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Quam pellentesque nec nam aliquam sem et tortor consequat id. Pellentesque elit eget gravida cum sociis natoque penatibus.",
    "Semper quis lectus nulla at volutpat diam ut. Egestas pretium aenean pharetra magna acplacerat vestibulum lectus mauris. Viverra mauris in aliquam sem fringilla ut. Fringilla est ullamcorpereget nulla facilisi. Amet nulla facilisi morbi tempus iaculis urna. Interdum velit laoreet id donec ultricestincidunt arcu non sodales. Egestas fringilla phasellus faucibus scelerisque eleifend. Vel elit scelerisquemauris pellentesque pulvinar pellentesque habitant."
  ]

  aboutme: string[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Montes nascetur ridiculus mus mauris. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Quam pellentesque nec nam aliquam sem et tortor consequat id. Pellentesque elit eget gravida cum sociis natoque penatibus.",
    "Semper quis lectus nulla at volutpat diam ut. Egestas pretium aenean pharetra magna acplacerat vestibulum lectus mauris. Viverra mauris in aliquam sem fringilla ut. Fringilla est ullamcorpereget nulla facilisi. Amet nulla facilisi morbi tempus iaculis urna. Interdum velit laoreet id donec ultricestincidunt arcu non sodales. Egestas fringilla phasellus faucibus scelerisque eleifend. Vel elit scelerisquemauris pellentesque pulvinar pellentesque habitant."
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
}
