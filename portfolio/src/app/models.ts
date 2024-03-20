// models and services just exist so that information can be easily updated in fewer files
// there is no backend because github pages is for static websites only

export interface Experience {
    position: string
    employer: string
    start: string
    end: string
    details: string[]
}

export interface ContactInfo {
    name: string
    email: string
    resume: string //this should be the url to a viewable google doc
    linkedin: string //again, a url
    github: string
    facebook: string | undefined
    twitter: string | undefined
}

export interface Project {
    title: string
    details: string
    skills: string[]
    github: string
    website: string | undefined
    img: string | undefined
    featured: boolean
    year: number
    employer: string | undefined
}