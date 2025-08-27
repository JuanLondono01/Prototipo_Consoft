import Sidebar from '@/components/admin/Sidebar';
import React from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex'>
            <Sidebar />
            {children}
        </div>
    );
}
