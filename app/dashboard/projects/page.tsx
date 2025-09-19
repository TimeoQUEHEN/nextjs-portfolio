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
        date: 'Apr 2024 - Jun 2024',
        language: ["PHP",'Symfony','Docker','Postgres','Javascript'],
        repo: null,
        folder: "wc",
        images : ["wc_buy.png","wc_login.png"]
    },
    {
        title: 'Indicateurs ADH',
        description: 'Durant mon stage à l\'association ADH, j\'ai réalisé une application interne traitement et affichages de données médicales.' +
            "En récupérant les données d'une base 4D externe, ces dernières étaient ensuite triées puis stockées dans des tableaux pour en afficher des pourcentages, des graphes de façon organisée." +
            "Dans certains cas, un besoin de télécharger les données dans un fichier excel était annoncé." +
            "Un dernier aspect du projet à été de générer un pdf contenant les informations relatives à un patient, ainsi qu'un QR-code." +
            "(certaines données ont été anonymisées.)",

        date: 'Mar 2025 - Jun 2025',
        language: ["PHP",'MariaDB','Javascript','ChartJS','db 4D','MPDF'],
        repo: null,
        folder: "adh",
        images : ["adh_menu.png","adh_postes.png","adh_graphe.png","adh_ins.png","adh_contacts.png"]
    },
    {
        title: 'S.E.N.T',
        description: "Le plus gros projet auquel j'ai participé jusqu'à présent. Durant ma 3e année de BUT Informatique à Lens, j'ai, avec 4 autres camarades, réalisé un réseau social thématique 'from scratch'."
        + "Ce réseau social est composé de 4 parties : Le front (NextJS), L'API principale (Java Springboot), L'API de recommandation (Python Flask) et l'API de génération d'image (Python Flask)."
        + "J'ai réalisé la majorité de la partie front, mais chaque membre du groupe à manipulé l'ensemble des aspects. Les données sont stockées sous MongoDB et la recommandation s'effectue avec Neo4J."
        + "\n L'application est entièrement responsive et basée sur l'univers de Helldivers 2. Chaque partie possède son propre dépôt GitHub.",
        date: 'Oct 2024 - Jan 2025',
        language: ["NextJS",'Springboot','Java','Flask','Docker','MongoDB','Neo4J'],
        repo: 'https://github.com/TimeoQUEHEN/sent-front',
        folder: "sent",
        images : ["sent_login.png","sent_feed.png","sent_chat.png","sent_profile.png"]
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
        title: 'Doot Eternal',
        description: "Durant ma 3e année de BUT informatique, j'ai participé avec 3 autres camarades au concours CodeGameJam provenant de l'IUT de Montpellier."
        + " L'objectif du concours est de, en 30h, réaliser un jeu en se basant sur un thème révélé la veille."
        + " Mes camarades et moi avons participé au concours afin d'apprendre la programmation de jeu. Le thème de cette année : 'Mélodie à l'infinie'."
        + " Notre création se base sur un jeu de survie ou des vagues d'instruments attaquent notre personnage. L'objectif est de battre le plus de vagues possibles."
        + " Je me suis chargé de l'apprance des différents instruments ainsi que l'implémentation des vagues.",
        date: 'Jan 2025',
        language: ['GameMaker'],
        repo: "https://lapotrenicolas.itch.io/dooteternal",
        folder: "doot-eternal",
        images : ["de_boss.png"]
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

                        <div className={"mb-4 flex flex-wrap w-screen gap-y-2"}>
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
                            })}> { project.title === "Doot Eternal" ? "Itch.io" : "Github"}
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