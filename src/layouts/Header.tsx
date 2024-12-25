import Logo from "@/assets/images/logo.jpg";
import { Whatsapp } from "@/components/icons/Whatsapp";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Inicio", "Sobre nosotros", "Servirnos", "Contactos"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      disableAnimation
      className="bg-neutral-900/80"
    >
      <NavbarContent>
        <NavbarBrand>
          <img src={Logo.src} alt="Logo" className="h-10" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item}>
            <Link href="#" className="text-white">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarItem>

        <NavbarItem className="hidden sm:block">
          <Button variant="light" className="text-white">
            <Whatsapp />
            <span>Contáctenos</span>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-neutral-900/80">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item}>
            <Link
              className="w-full text-white justify-center"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
