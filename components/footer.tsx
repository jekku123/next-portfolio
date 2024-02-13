import { MenuItem } from "@/lib/zod/menu";
import { SocialIcon } from "react-social-icons";
import { TypographyMuted } from "./typography";

interface FooterProps {
  menu: MenuItem[];
}

export default function Footer({ menu }: FooterProps) {
  return (
    <footer className="w-full flex-shrink-0">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-2">
        <TypographyMuted>JM Productions 2023</TypographyMuted>
        <ul className="flex gap-3">
          {menu?.map((link) => (
            <li key={link._id}>
              <SocialIcon
                fgColor="currentColor"
                bgColor="transparent"
                url={link.href}
                target="_blank"
                className="rounded-full text-muted-foreground transition-colors duration-300 hover:bg-accent"
              />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
