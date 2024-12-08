'use client';

import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import Image from "next/image";
import clsx from "clsx";
import {usePathname} from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 overflow-hidden">
      <Link
        className={clsx(
            'mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-40',
            {
                'bg-purple-700': pathname === "/dashboard",
                'bg-pink-500': pathname === "/dashboard/tools",
                'bg-orange-500': pathname === "/dashboard/projects"
            },
        )}
        href="/"

      >
          { /* <Image src={"/flamingo.png"} alt={"un joli flamant rose"} width={150} height={150} className={"relative top-1/2 -left-4"} /> */ }
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-600 md:block"></div>
      </div>
    </div>
  );
}
