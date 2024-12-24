import {type} from "node:os";
import React from "react";

export default function Page() {

    type ToolI = {
        image :String | null,
        name :String
    }

    const languages : ToolI[] = [
        {image : null ,name : "Python"},
        {image : null ,name : "PHP"},
        {image : null ,name : "Java"},
        {image : null ,name : "TypeScript"},
        {image : null ,name : "LUA"},
    ]

    const frameworks : ToolI[] = [
        {image : "/flamingo.png" ,name : "Flask"},
        {image : null ,name : "Laravel"},
        {image : null ,name : "Symfony"},
        {image : null ,name : "React"},
    ]

    const sql : ToolI[] = [
        {image : null ,name : "Postgres"},
        {image : null ,name : "MySQL"},
        {image : null ,name : "MongoDB"},
        {image : null ,name : "Neo4J"},
    ]

    return (
        <div>

            <ul className={"flex flex-wrap gap-4 justify-center w-full"}>
                {languages.map((lang) => (
                    <li key={lang.name.toString()} className={"decoration-0"}>
                        <img src={lang.image?.toString()} alt={"logo de" + lang.name} width={150}
                             height={150}/>
                        <h3 className={"text-center"}>{lang.name}</h3>
                    </li>
                ))}
            </ul>

            <div className={"flex justify-center"}>
                <hr className="h-px w-3/4 my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
            </div>

            <ul className={"flex flex-wrap gap-4 justify-center w-full"}>
            {frameworks.map((framework) => (
                    <li key={framework.name.toString()} className={"decoration-0"}>
                        <img src={framework.image?.toString()} alt={"logo de" + framework.name} width={150}
                             height={150}/>
                        <h3 className={"text-center"}>{framework.name}</h3>
                    </li>
                ))}
            </ul>

        </div>
    );

}