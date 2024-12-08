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
    {
        title: 'Superb Pokepedia',
        description: "Superb Pokepedia est un projet scolaire réalisé en 2ème année de BUT Informatique à Lens.\n" +
            "L'objectif de ce projet était de découvrir et se familiariser avec le fonctionnement de Flask, ainsi que la manipulation d'API. " +
            "Pour cela, nous avions pour tâche de créer un site sur lequel un utilisateur pouvait rentrer le nom d'un pokémon, et le site afficher toute les informations contenues dans l'API en rapport a ce pokemon. " +
            "Des aspects supplémentaires etaient de gérer l'authentification, pour permettre a un utilisateur d'accèder à son historique de recherche, et aussi d'enregister des pokemons comme ses favoris.",
        date: 'décembre 2023',
        language: ['Python','Flask'],
        repo: "https://github.com/TimeoQUEHEN/superbPokePedia",
        images : ["",""]
    }
];

export default function Page() {
    return (
        <>
            {projects.map((project) => {
                return (
                    <div className={"mb-4"} key={project.title}>

                        <h3 className={"font-bold text-xl"}>{project.title}</h3>

                        <p className={"text-justify"}>{project.description}</p>

                        <div className={"mb-4"}>
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
                            target={"_blank"}
                            className={clsx("text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",{
                                'hidden': null === project.repo,
                            }) }>Github</Link>
                    </div>
                );
            })}
        </>
    )
}