import React from "react";
import {checkIcon, circleIcon} from "@/app/ui/icons";
import Link from "next/link";

export default function Page() :React.ReactNode {
    return (
        <div className={"flex flex-col md:flex-row overflow-y-hidden md:h-full"}>
            <div
                className="flex flex-col justify-start gap-6 rounded-lg md:p-6 mb-4 md:mb-0 md:w-1/2 md:px-6">
                <img
                    src="/face.png"
                    alt="my photo :)"
                    className={"w-32 md:w-48 rounded-lg"}
                />
                <p className={"text-sm md:text-base text-justify"}>
                    Bonjour ! Je m'appelle Timéo Quehen, et je suis étudiant en informatique. J'adore le développement
                    web (ainsi que le développement d'applications),
                    mais j'ai une polyvalence qui me permet de toucher à tout, et je compte bien la conserver.
                    Diplômé du BUT Informatique de Lens en 2025, je continue mon apprentissage au sein de l'EPSI d'Arras !
                </p>

                <div className={"flex flex-col items-center justify-center"}>
                    <hr className="h-px w-3/4 my-4 bg-gray-200 border-0 dark:bg-gray-700"/>
                </div>

                <div className={"md:overflow-scroll"}>
                    <ul className="timeline timeline-vertical">
                        <li>
                            <div className="timeline-start timeline-box bg-gray-800">
                                Lycée Robespierre (spé Informatique + Anglais) - Mention TB
                            </div>
                            <div className="timeline-middle">
                                {checkIcon}
                            </div>
                            <hr className="bg-purple-700"/>
                        </li>
                        <li>
                            <hr className="bg-purple-700"/>
                            <div className="timeline-end timeline-box bg-gray-800">
                                IUT Lens - BUT Informatique 1e année + 2e année
                            </div>
                            <div className="timeline-middle">
                                {checkIcon}
                            </div>
                            <hr className="bg-purple-700"/>
                        </li>
                        <li>
                            <hr className="bg-purple-700"/>
                            <div className="timeline-start timeline-box bg-gray-800">
                                Widop - Stage développement web - entreprise Widop
                            </div>
                            <div className="timeline-middle">
                                {checkIcon}
                            </div>
                            <hr className="bg-purple-700"/>
                        </li>
                        <li>
                            <hr className="bg-purple-700"/>
                            <div className="timeline-end timeline-box bg-gray-800">
                                IUT Lens - BUT Informatique 3e année
                            </div>
                            <div className="timeline-middle">
                                {checkIcon}
                            </div>
                            <hr className="bg-purple-700"/>
                        </li>
                        <li>
                            <hr className="bg-purple-700"/>
                            <div className="timeline-start timeline-box bg-gray-800">
                                Stage de développement Fullstack - Association ADH
                            </div>
                            <div className="timeline-middle">
                                {checkIcon}
                            </div>
                            <hr/>
                        </li>
                        <li>
                            <hr/>
                            <div className="timeline-end timeline-box bg-gray-800">
                                Formation "Expert en Informatique et Système d'Information" à L'école EPSI
                            </div>
                            <div className="timeline-middle">
                                {circleIcon}
                            </div>
                            <hr/>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={"flex md:h-full md:justify-around md:ml-4 flex-col gap-4"}>
                <div
                    className={"flex flex-col gap-6 rounded-lg px-6 py-6 md:px-6 text-center"}>

                    <h2 className={"w-fit self-center text-2xl purple-bg-underline px-1 "}>Langues</h2>

                    <ul className={"text-justify"}>
                        <li>
                        Français : Langue Maternelle
                        </li>
                        <li>
                            Anglais : C2 (TOEIC (990/990) 2024 + Cambridge 2022)
                        </li>
                        <li>
                            Espagnol : B1
                        </li>
                    </ul>

                    <h2 className={"w-fit text-2xl self-center purple-bg-underline px-1 "}>Contact</h2>

                    <ul className={"text-start text-sm flex justify-between gap-4 flex-wrap w-full"}>
                        <li className={"btn"}>
                            quehentimeo@orange.fr
                        </li>
                        <li className={"btn"}>
                            <a href="https://www.linkedin.com/in/timeo-quehen-009613296/" target="_blank">LinkedIn</a>
                        </li>
                        <li className={"btn"}>
                            <a href="https://github.com/TimeoQUEHEN" target="_blank">GitHub</a>
                        </li>
                    </ul>

                    <h2 className={"w-fit text-2xl self-center purple-bg-underline px-1 "}>Loisirs</h2>

                    <ul className={"text-start md:flex md:justify-between"}>
                        <li className={"py-2"}>
                            Danse
                        </li>
                        <li className={"py-2"}>
                            Musique (écoute + batterie)
                        </li>
                        <li className={"py-2"}>
                            Jeu de rôles
                        </li>
                    </ul>

                    <Link href="/cv_timeo_quehen.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="bg-purple-700 hover:bg-purple-600 btn">
                            Voir le CV
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}