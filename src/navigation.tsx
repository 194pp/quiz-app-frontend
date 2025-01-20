import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, LinkProps } from "@tanstack/react-router";

export const Navigation = () => {
  return (
    <div className="flex items-center justify-center p-2">
      <NavigationMenu>
        <NavigationMenuList className="flex w-full justify-center gap-2 p-2 text-lg">
          <NavigationMenuItem>
            <StyledNavigationLink to="/">Take a Quiz</StyledNavigationLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <StyledNavigationLink to="/leaderboard">
              Leaderboard
            </StyledNavigationLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const StyledNavigationLink = ({ children, to }: LinkProps) => {
  return (
    <Link to={to} className="rounded-lg border p-2 text-lg">
      {children}
      {/* <pre>{JSON.stringify(um, null, 2)}</pre> */}
    </Link>
  );
};
