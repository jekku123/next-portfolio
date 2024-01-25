import { MenuItem } from '@/lib/zod/menu';
import { SocialIcon } from 'react-social-icons';
import { TypographyMuted } from './typography';

interface FooterProps {
  menu: MenuItem[];
}

export default function Footer({ menu }: FooterProps) {
  return (
    <footer className="flex-shrink-0 w-full">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-2">
        <TypographyMuted>JM Productions 2023</TypographyMuted>
        <ul className="flex gap-3">
          {menu?.map((link) => (
            <li key={link._id}>
              <SocialIcon
                fgColor="currentColor"
                bgColor="transparent"
                url={link.href}
                target="_blank"
                className="rounded-full hover:bg-accent transition-colors duration-300 text-muted-foreground"
              />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
