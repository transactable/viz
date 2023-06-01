export const navLinks = {
  homeLink: {
      id: 0,
      href: '/',
      label: 'Viztopia', 
      img: {
        src: "/assets/images/logo.svg",
        alt: "Viztopia Logo"
      }
  }, 
  nonHomeLinks: [
    {
      id: 1,
      href: '/viz',
      label: 'Viz'
    }
  ]
}

interface HomeLinkProps extends NonHomeLinkProps {
  img: {
    src: string;
    alt: string;
  };
}

interface NonHomeLinkProps {
  id: number,
  href: string,
  label: string,
}

export interface LinkProps {
  homeLink: HomeLinkProps,
  nonHomeLinks: NonHomeLinkProps[]
};
