'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type LinkProps = {
    text: string;
    href: string;
    subRoutes?: string[];
};

function SideLink({ text, href, subRoutes = [] }: LinkProps) {
    const currentPath = usePathname();

    // Activo si la ruta actual empieza con el href principal
    const isActive = currentPath === href || currentPath.startsWith(href + '/');

    return (
        <li className='list-none w-full'>
            {/* Link principal */}
            <Link
                className={`block p-2 rounded border text-center ${
                    isActive ? 'bg-white text-black border-white' : 'text-white border-white'
                }`}
                href={href}>
                {text}
            </Link>

            {/* Sublinks */}
            {isActive && (
                <ul className='mx-2 mt-2 space-y-1'>
                    {subRoutes.map((route) => {
                        const subHref = `${href}/${route}`;
                        const isSubActive = currentPath.startsWith(subHref);
                        return (
                            <li key={route}>
                                <Link
                                    className={`block p-2 rounded border text-center ${
                                        isSubActive
                                            ? 'bg-white text-black border-white'
                                            : ' text-white border-white'
                                    }`}
                                    href={subHref}>
                                    {route}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </li>
    );
}

export default SideLink;
