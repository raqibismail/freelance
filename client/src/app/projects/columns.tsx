"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { formatDate } from "@/utils/helpers"
import { Project } from "@/utils/model"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you 

export const columns: ColumnDef<Project>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "client",
        header: "Client",
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Status
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        },
    },
    {
        accessorKey: "deadline",
        header: "Deadline",
        cell: ({ row }) => {
            return <span>{formatDate(row.getValue("deadline"))}</span>
        }
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const project = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild >
                        <Button variant="ghost" className="h-8 w-8 p-0" >
                            <span className="sr-only" > Open menu </span>
                            < MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    < DropdownMenuContent align="end" >
                        <DropdownMenuLabel>Actions </DropdownMenuLabel>
                        < DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText((project.id).toString())
                            }
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        < DropdownMenuSeparator />
                        <DropdownMenuItem>View customer </DropdownMenuItem>
                        < DropdownMenuItem > View payment details </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },

    // {
    //     accessorKey: "start_date",
    //     header: "Start Date",
    //     cell: ({ row }) => {
    //         return <span>{formatDate(row.getValue("start_date"))}</span>
    //     }
    // },
    // {
    //     accessorKey: "end_date",
    //     header: "End Date",
    //     cell: ({ row }) => {
    //         return <span>{formatDate(row.getValue("end_date"))}</span>
    //     }
    // },
]