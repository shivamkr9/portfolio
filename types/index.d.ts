import { type IconType } from "react-icons";

export type SiteConfigProps = {
    name: string,
    description: string,
    url: string,
    ogImage: string,
    links: {
        twitter: string,
        github: string,
    },

}


export type MenuConfigProp = {
    title: string,
    href: string,
    icons: IconType,
}

export type SkillConfigProp = {
    name: string,
    icon: IconType,
}

export type ProjectConfigProp = {
    title: string,
    description: string,
    image: string,
    link: string,
    github: string,
    techStack: string[],
}

export type EducationConfigProp = {
    courseName: string,
    collegeName: string,
    status: string,
    session: string,
    marks: string,
}

export type SocialMediaConfigProps = {
    link: string,
    icons: IconType,
}