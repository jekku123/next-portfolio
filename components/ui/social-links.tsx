import { SocialIcon } from "react-social-icons";
import { MenuItems } from "../contact-section";

export default function SocialLinks({ items }: MenuItems) {
  return (
    <ul className="flex gap-3">
      {items?.map((link) => (
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
  );
}
