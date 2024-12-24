import {type} from "node:os";
import React from "react";

export default function Page() {

    type ToolI = {
        image :String | null,
        name :String
    }

    const languages : ToolI[] = [
        {image : "python.png" ,name : "Python"},
        {image : "php.svg" ,name : "PHP"},
        {image : "java.png" ,name : "Java"},
        {image : "typescript.png" ,name : "TypeScript"},
        {image : "lua.png" ,name : "LUA"},
    ]

    const frameworks : ToolI[] = [
        {image : "flask.png" ,name : "Flask"},
        {image : "laravel.png" ,name : "Laravel"},
        {image : "symfony.png" ,name : "Symfony"},
        {image : "react.png" ,name : "React"},
        {image : "nextjs.svg" ,name : "nextJS"},
    ]

    const sql : ToolI[] = [
        {image : "postgresql.png" ,name : "Postgres"},
        {image : "mysql.png" ,name : "MySQL"},
        {image : "sqlite.png" ,name : "Sqlite"},
        {image : "mongodb.svg" ,name : "MongoDB"},
        {image : "neo4j.png" ,name : "Neo4J"},
    ]

    return (
        <div>

            <div className={"flex flex-col items-center justify-center"}>
                <hr className="h-px w-3/4 my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <h2 className={"my-10 pink-bg-underline px-1 "}>Langages</h2>
            </div>

            <ul className={"flex flex-wrap gap-4 justify-center items-baseline w-full"}>
                {languages.map((lang) => (
                    <li key={lang.name.toString()} className={"decoration-0 mx-4"}>
                        <img src={"/tools/lang/" + lang.image?.toString()} alt={"logo de " + lang.name} width={150}
                             height={150}/>
                        <h3 className={"text-center mt-4"}>{lang.name}</h3>
                    </li>
                ))}
            </ul>

            <div className={"flex flex-col items-center justify-center"}>
                <hr className="h-px w-3/4 my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <h2 className={"my-10 pink-bg-underline px-1 "}>Frameworks</h2>
            </div>

            <ul className={"flex flex-wrap gap-4 justify-center items-baseline w-full bg-gray-600 rounded-lg p-4"}>
                {frameworks.map((framework) => (
                    <li key={framework.name.toString()} className={"decoration-0 mx-4"}>
                        <img src={"/tools/framework/" + framework.image?.toString()}
                             alt={"logo de " + framework.name}
                             width={150} height={150}/>
                        <h3 className={"text-center mt-4"}>{framework.name}</h3>
                    </li>
                ))}
            </ul>

            <div className={"flex flex-col items-center justify-center"}>
                <hr className="h-px w-3/4 my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <h2 className={"my-10 pink-bg-underline px-1 "}>Bases de données</h2>
            </div>

            <ul className={"flex flex-wrap gap-4 justify-center items-baseline w-full"}>
                {sql.map((db) => (
                    <li key={db.name.toString()} className={"decoration-0 mx-4"}>
                        <img src={"/tools/db/" + db.image?.toString()} alt={"logo de " + db.name} width={150}
                             height={150}/>
                        <h3 className={"text-center mt-4"}>{db.name}</h3>
                    </li>
                ))}
            </ul>

        </div>
    );

}