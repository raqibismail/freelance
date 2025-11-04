"use client"

import { Button } from "@/components/ui/button"
import { formatDate } from "@/utils/helpers"
import { Project } from "@/utils/model"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

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