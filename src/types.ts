interface UserType {
    name: string;
    email: string;
    password: string;
    username: string;
    projects: string[];
    avatar: string;
}

interface ProjectType {
    name: string
    description: string;
    tages: string[];
    category: string;
    isActive: boolean;
    isPublic: boolean;
    isDeleted: boolean;
    members: string[];
}

interface Populate {
    path: string;
    select: string;
    populate: Populate;
}