import React from "react";
import Link from "next/link";
import clsx from "clsx";

const projects = [
    {
        title: 'Widop Cart',
        description: 'Durant mon stage à l\'entreprise Widop, j\'ai réalisé une application interne de liste collaborative accessible en ligne. ' +
            'La liste permet à chaque employé de suggèrer l\'achat d\'un produit pour les locaux de l\'entreprise. Puis, un administrateur valide ou rejette une demande. ' +
            'Après cette étape, le produit peut être indiqué comme "acheté" par un des utilisateurs.',
        date: 'avril 2024 - juin 2024',
        language: ["PHP",'Symfony','Docker','Postgres','Javascript'],
        repo: null,
        images : ["",""]
    },
    {
        title: 'FlatCraft',
        description: 'Flatcraft est un projet scolaire réalisé en 2ème année de BUT Informatique à Lens.\n' +
            'Consistant en une parodie mélangeant Minecraft et Terraria, nous avons eu l\'opportunité, en travaux de groupe, de compléter le jeu à travers différentes étapes.\n' +
            '\n Par exemple \n' +
            'Générer du terrain, Miner les cellules de la carte, Assembler différentes ressources, Créer des créatures animant le monde.',
        date: 'octobre 2023 - janvier 2024',
        language: ['Java', 'JavaFX'],
        repo: null,
        images : ["",""]
    },
    {
        title: 'Raytracing',
        description: 'Raytracing est un projet scolaire réalisé en 2ème année de BUT Informatique à Lens.\n' +
            'Durant une semaine, nous avons réalisé une application générant des scènes illuminés et remplies de sphères, triangles et plan.\n' +
            '\n' +
            'Pour générer une image (appelée scène), l\'utilisateur fournit à l\'application un fichier texte indiquant la position, de chaque point,' +
            ' l\'intensité de chaque lumière, la couleur et la capacité réfléchissante de chaque surface.\n' +
            '\n' +
            'Dans ce projet, tout à été créé par notre main. De la scène, au algorithmes de calcul d\'éclairage, en passant par le ombres.',
        date: 'octobre 2023',
        language: ['Java'],
        repo: "https://github.com/TimeoQUEHEN/raytracing",
        images : ["",""]
    },
];

export default function Page() {
    return (
        <>
            {projects.map((project) => {
                return (
                    <div key={project.title}>
                        <h3>
                            {project.title}
                        </h3>
                        <p>{project.description}</p>

                        <div>
                            {project.language.map((lang) => {
                                return(
                                    <span key={lang} className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                        {lang}
                                    </span>
                                )
                            })}
                        </div>

                        <Link
                            key={project.title}
                            href={project.repo !== null ? project.repo : ""}
                            className={clsx("w-6",{
                                'hidden': null !== project.repo,
                            }) }/>
                    </div>
                );
            })}
        </>
    /*
        <div className={"flex flex-col h-full grow md:flex-row"}>
            <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-600 px-6 py-10 mb-4 md:mb-0 md:w-1/2 md:px-6">

            </div>
            <div className={"flex md:grow md:ml-4 flex-col gap-4"}>
                <div className={"flex flex-col justify-center gap-6 rounded-lg bg-gray-600 px-6 py-10 md:h-1/2 md:px-6"}>

                </div>
                <div className={"flex flex-col justify-center gap-6 rounded-lg bg-gray-600 px-6 py-10 md:h-1/2 md:px-6"}>

                </div>
            </div>
        </div>

     */
    )
}