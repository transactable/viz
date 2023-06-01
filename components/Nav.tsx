'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import classnames from '@functions/classnames';
import { navLinks } from '@utils/navLinks';

const Nav = () => {
  const { homeLink, nonHomeLinks } = navLinks;
  const pathname = usePathname();
    
  return (
    <nav>
      {/* Render homeLink */}
      <Link 
        href="/" 
        className={classnames(
          'flex items-center space-x-2',
          pathname=='/' ? 'pointer-events-none' : ''
        )}
      >
        <Image src={homeLink.img.src} alt={homeLink.img.alt} width={30} height={30} /> 
        <p className={classnames(
          "logo_text"
          )}
        >
          {homeLink.label}
        </p>
      </Link>
      {/* Render nonHomeLinks */}
      <div className="flex space-x-4">
        {nonHomeLinks.map((link) => {
          const isActive = pathname == link.href;
          return (
            <Link href={link.href} key={link.id} className={classnames(isActive ? 'pointer-events-none' : '')}>
            <div 
              className={classnames(
                isActive ? 'text-blue-600 font-semibold' : 'text-black hover:text-gray-500'
              )}
            >
              {link.label}
            </div>
          </Link>
          )
        })}
      </div>
    </nav>
  );
}

export default Nav