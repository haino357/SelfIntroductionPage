export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    icon: string;
}

export interface SkillCategory {
    category: string;
    icon: string;
    skills: string[];
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
    ariaLabel: string;
}
