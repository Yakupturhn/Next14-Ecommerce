"use client"
import React from "react";
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { usePathname } from "next/navigation";
 
const categories: { title: string; href: string; description: string }[] = [
  {
    title: "Kadın Giyim",
    href: "/shop/woman",
    description:
      "Şık ve rahat kadın giyim ürünleri, her tarza uygun seçenekler.",
  },
  {
    title: "Erkek Giyim",
    href: "/shop/men",
    description:
      "Modern ve klasik erkek giyim parçaları, günlük ve özel günler için.",
  },
  {
    title: "Aksesuarlar",
    href: "/shop/accessories",
    description:
      "Kıyafetlerinizi tamamlayacak şapka, çanta, gözlük gibi şık aksesuarlar.",
  },
  {
    title: "Ayakkabılar",
    href: "/shop/shoes",
    description: "Her mevsim için uygun ve şık ayakkabı modelleri.",
  },
  {
    title: "Çocuk Giyim",
    href: "/shop/kids",
    description:
      "Rahat ve eğlenceli çocuk giyim ürünleri, minikler için en sevimli seçenekler.",
  },
  {
    title: "İç Giyim",
    href: "/shop/ic-giyim",
    description:
      "Konforlu ve şık iç giyim ürünleri, her gün rahat hissetmek için.",
  },
]



const NavMenu = () => {

  const pathname = usePathname()
  

  return (
    <div className="flex justify-center items-center bg-mycolor-300 py-2">


 <NavigationMenu>
      <NavigationMenuList>
          <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref className="">
            <NavigationMenuLink className={`bgHeader ${navigationMenuTriggerStyle()} ${pathname === "/" ? "activeHeader" : ""}`}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
          <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={`bgHeader ${navigationMenuTriggerStyle()} ${pathname === "/about" ? "activeHeader" : ""}`}>
              About us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bgHeader">Recent Product</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger  className={`bgHeader ${pathname.startsWith("/shop") ? "activeHeader" : ""}`}>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {categories.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={`bgHeader ${navigationMenuTriggerStyle()} ${pathname === "/contact" ? "activeHeader" : ""}`}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    </div>
  )
}



const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


export default NavMenu
