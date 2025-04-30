import { Separator } from "@/components/ui/separator";
import HeaderLogo from "@/src/app/_components/sidebar/HeaderLogo";
import { Box } from "@/src/components/ui/Box";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/src/components/ui/sidebar";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

export function AppSidebar() {
  const items = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ];
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          {/* タイトルロゴ　表示領域 */}
          <Box className="mt-2 flex items-center justify-between px-2 py-3">
            <SidebarGroupLabel className="flex flex-1 justify-center text-center">
              <HeaderLogo />
            </SidebarGroupLabel>
          </Box>

          <SidebarGroupContent className="mt-6">
            <SidebarMenu>
              {/* サイドバー閉じるボタン */}
              <Box>
                <Box className="flex items-center">
                  <SidebarTrigger />
                </Box>
                <Separator className="my-2" />
              </Box>

              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
