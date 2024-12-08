import Link from "next/link";
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import React from "react";

export default function Page() :React.ReactNode {
    return (
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
    )
}