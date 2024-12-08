import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from "next/image";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 overflow-hidden">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-purple-700 p-4 md:h-40"
        href="/"
      >
          <Image src={"/flamingo.png"} alt={"un joli flamant rose"} width={150} height={150} className={"relative top-1/2 -left-4"} />
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-600 md:block"></div>
      </div>
    </div>
  );
}
