'use client';
import { useEffect, useState } from 'react';
import { fetchData } from '@/utils/api';
import { Project } from '@/utils/model';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { columns } from './columns';


export default function ProjectsPage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchData('/api/projects')
            .then(setProjects)
            .catch(console.error);
    }, []);

    return (
        <div className="container max-w-full mx-auto py-5">
            <DataTable columns={columns} data={projects} />
        </div>
    );
}
