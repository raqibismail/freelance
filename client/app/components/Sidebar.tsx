"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { Menu } from "@/utils/sidebarMenu"
import React from "react"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./ToggleDarkButton"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

export function AppSidebar() {
  const pathname = usePathname() // detect current route

  return (
    <Sidebar collapsible="icon" className="flex flex-col min-h-screen">
      <div className="flex justify-center">
        <Image src="/logo.png" alt="Logo" width={200} height={200} />
      </div>

      <SidebarSeparator className="mx-0" />

      {/* This should take all available space */}
      <SidebarContent className="flex-1">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {Menu.map((item) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton
                      data-active={isActive}
                      className={`p-6 transition-colors ${isActive
                        ? "bg-cyan-200 text-cyan-900 font-semibold"
                        : "hover:bg-cyan-50"
                        }`}
                      asChild
                    >
                      <a href={item.url}>
                        {item.icon && <item.icon className="mr-2" />}
                        <span>{item.name}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Fixed footer section */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className="flex flex-row justify-end">
            <ModeToggle />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
