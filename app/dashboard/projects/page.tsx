import React from "react";
import Link from "next/link";
import clsx from "clsx";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

const projects = [
    {
        title: 'Widop Cart',
        description: 'Durant mon stage à l\'entreprise Widop, j\'ai réalisé une application interne de liste collaborative accessible en ligne. ' +
            'La liste permet à chaque employé de suggèrer l\'achat d\'un produit pour les locaux de l\'entreprise. Puis, un administrateur valide ou rejette une demande. ' +
            'Après cette étape, le produit peut être indiqué comme "acheté" par un des utilisateurs.',
        date: 'Av 2024 - Ju 2024',
        language: ["PHP",'Symfony','Docker','Postgres','Javascript'],
        repo: null,
        folder: "wc",
        images : ["wc_buy.png","wc_login.png"]
    },
    {
        title: 'FlatCraft',
        description: 'Flatcraft est un projet scolaire réalisé en 2ème année de BUT Informatique à Lens.\n' +
            'Consistant en une parodie mélangeant Minecraft et Terraria, nous avons eu l\'opportunité, en travaux de groupe, de compléter le jeu à travers différentes étapes.\n' +
            ' Par exemple : ' +
            'Générer du terrain, Miner les cellules de la carte, Assembler différentes ressources, Créer des créatures animant le monde.',
        date: 'Oct 2023 - Jan 2024',
        language: ['Java', 'JavaFX'],
        repo: null,
        folder: "flatcraft",
        images : ["flatcraft.png","flatmine.png","flatnether.png"],
    },
    {
        title: 'Raytracing',
        description: 'Raytracing est un projet scolaire réalisé en 2ème année de BUT Informatique à Lens.\n' +
            'Durant une semaine, nous avons réalisé une application générant des images illuminés et remplies de sphères, triangles et plan.\n' +
            'Pour générer une image (appelée scène), l\'utilisateur fournit à l\'application un fichier texte indiquant la position, de chaque point,' +
            ' l\'intensité de chaque lumière, la couleur et la capacité réfléchissante de chaque surface.\n',
        date: 'Oct 2023',
        language: ['Java'],
        repo: "https://github.com/TimeoQUEHEN/raytracing",
        folder: "raytracing",
        images : ["rayballs.png","raybunny.png","raycheck.png","raydragon.png","raytank.png"]
    },
    {
        title: "Vaultify",
        description: "Projet du Marathon Web de l'IUT de Lens de 2023 (36h pour réaliser un site web). Vaultify est un site d'histoire 'dont vous etes le héros'." +
            "Sur ce site, l'utilisateur pouvait lire les histoires des autres, les commenter, les sauvegarder et publier ses propres histoires." +
            "Une authentification était requise.",
        date: 'Dec 2023',
        language: ['PHP','Laravel','Postgres'],
        repo: "https://github.com/TimeoQUEHEN/vaultify",
        folder: "vaultify",
        images : ["vaulthome.jpg","vaultindex.png","vaultcomm.png","vaultstory.png"],
    },
    {
        title: 'Superb Pokepedia',
        description: "Superb Pokepedia est un projet scolaire réalisé en 2ème année de BUT Informatique à Lens.\n" +
            "Nous avions pour tâche de créer un site sur lequel un utilisateur pouvait rentrer le nom d'un pokémon, et le site afficher toute les informations contenues dans l'API en rapport a ce pokemon. Avec ceci, la mise en place d'un système d'historique et d'authentification.",
        date: 'Dec 2023',
        language: ['Python','Flask','API'],
        repo: "https://github.com/TimeoQUEHEN/superbPokePedia",
        folder: "spp",
        images : ["sppHome.png","sppPika.png","sppRegister.png"]
    }
];

export default function Page() {

    return (
        <>
            {projects.map((project) => {
                return (
                    <div className={"mb-8"} key={project.title}>

                        <div className={"flex gap-4"}>
                            <h3 className={"font-bold text-xl"}>{project.title}</h3>
                            <span
                                className="bg-gray-100 text-gray-800 text-sm font-medium mb-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"> {project.date} </span>
                        </div>

                        <p className={"text-justify text-xs md:text-base"}>{project.description}</p>

                        <div className={"mb-4"}>
                            {project.language.map((lang) => {
                                return (
                                    <span key={lang}
                                          className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-950 dark:text-gray-300">
                                        {lang}
                                    </span>
                                )
                            })}
                        </div>

                        <div className={"flex flex-col items-center"}>
                            <div className="carousel rounded-box mb-4 md:w-1/3">
                                {project.images.map((image) =>
                                    <div className="carousel-item" key={image}>
                                        <img
                                            src={"/projects/" + project.folder + "/" + image?.toString()}
                                            alt="une capture d'écran du projet"
                                            width="402"
                                        />
                                    </div>
                                )}
                            </div>
                            <span className={"flex justify-center italic text-sm w-1/2"}>slide to see more <ArrowRightIcon className="ml-4 w-5 md:w-6"/> </span>
                        </div>

                        <Link
                            key={project.title}
                            href={project.repo !== null ? project.repo : ""}
                            target={"_blank"}
                            className={clsx("text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700", {
                                'hidden': null === project.repo,
                            })}>Github
                        </Link>

                        <div className={"flex flex-col items-center justify-center"}>
                            <hr className="h-px w-3/4 my-4 bg-gray-200 border-0 dark:bg-gray-700"/>
                        </div>

                    </div>
                );
            })}
        </>
    )
}