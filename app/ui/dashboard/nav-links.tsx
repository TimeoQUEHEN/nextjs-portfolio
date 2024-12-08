'use client';

import { FaAddressCard, FaGear, FaCode } from "react-icons/fa6";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'A propos', href: '/dashboard', icon: FaAddressCard  },
  { name: 'Projets', href: '/dashboard/projects', icon: FaCode },
  { name: 'Langages', href: '/dashboard/tools', icon: FaGear },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-800 p-3 text-sm font-medium hover:bg-gray-600 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-gray-600 text-blue-500': pathname === link.href,
                },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
