import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from "react";
import Image from 'next/image';

export default function Page() {
  return (
      <main className="flex min-h-screen flex-col p-6">
        <div className="flex h-20 shrink-0 items-end rounded-lg gradient p-4 md:h-52">
          {/*<AcmeLogo/>*/}
        </div>
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-800 px-6 py-10 md:w-1/2 md:px-6">

            <h2 className={`text-xl md:text-3xl md:leading-normal`}>
              Timéo Quehen
            </h2>
            <p>
              Etudiant BUT3 à l'IUT de Lens.
              Adepte de Développement Web.
            </p>
            <nav className="flex flex-row justify-between ">
              <Link
                  href="/dashboard/tools/"
                  className="flex items-center gap-5 w-1/3 m-1 rounded-lg bg-pink-500 px-3 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-400 md:text-base"
              >
                <span>Mes outils</span> <ArrowRightIcon className="w-5 md:w-6"/>
              </Link>
              <Link
                  href="/dashboard/projects/"
                  className="flex items-center gap-5 w-1/3 m-1 rounded-lg bg-orange-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-400 md:text-base"
              >
                <span>Mes projets</span> <ArrowRightIcon className="w-5 md:w-6"/>
              </Link>
              <Link
                  href="/dashboard/"
                  className="flex items-center gap-5 w-1/3 m-1 rounded-lg bg-purple-700 px-3 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-400 md:text-base"
              >
                <span>A propos</span> <ArrowRightIcon className="w-5 md:w-6"/>
              </Link>
            </nav>
          </div>
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-800 px-6 py-10 md:w-1/2 md:px-20">

            <h2 className={`text-xl md:text-3xl md:leading-normal`}>
              Dernière M.A.J
            </h2>
            <p>
              Apprentissage de react
            </p>
            <Link
                href="/dashboard"
                className="flex items-center gap-5 rounded-lg bg-yellow-600 px-3 py-3 text-sm font-medium text-white transition-colors hover:bg-yellow-300 md:text-base"
            >
              <span>Y aller</span> <ArrowRightIcon className="w-5 md:w-6"/>
            </Link>
          </div>
        </div>
      </main>
  );
}
