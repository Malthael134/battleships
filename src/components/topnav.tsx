import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import ThemeToggle from "@/components/theme-toggle";

export default function Topnav() {
    return (
        <header className='sticky top-0 backdrop-blur-sm bg-white dark:bg-slate-950/50 bg-opacity-80 w-full h-[60px]'>
            <NavigationMenu className='size-full'>
                <NavigationMenuList className='flex flex-row justify-center size-full px-6 gap-4'>
                    <NavigationMenuLink href='/' className='text-xl'>
                        Battleships
                    </NavigationMenuLink>
                    <NavigationMenuItem>
                        <ThemeToggle />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}