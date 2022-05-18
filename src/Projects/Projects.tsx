import React, {useState} from "react";
import ProjectItem from "./ProjectItem/ProjectItem";

interface Project {
    appId: string;
    demoUrl: string;
    description: string;
    key: string;
    name: string;
    openSource: boolean;
    repository: string;
}

const Projects: React.FC<any> = (props) => {

    const [projects, setProjects] = useState<Project[]>([])


    return (<div>
        {projects.map(proj => <ProjectItem />)}
    </div>)
}

export default Projects
