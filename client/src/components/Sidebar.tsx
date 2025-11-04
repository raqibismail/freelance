"use client"
import {
  Sidebar,
  SidebarContent,
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

export function AppSidebar() {
  const pathname = usePathname() // detect current route

  return (
    <Sidebar collapsible="icon">
      <div className="flex justify-center p-4">
        <Image src="/logo.png" alt="Logo" width={120} height={120} />
      </div>

      <SidebarSeparator className="mx-0" />

      <SidebarContent>
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
    </Sidebar>
  )
}
