import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Gallery({ gallery, user }) {

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Gallery
                </h2>
            }
        >
            <Head title="Gallery" />

            <div className="py-12">
                <div className="mx-auto w-2/3 ">
                    <Link href={route('galleries.index')} className="w-36 h-20 border-2 border-blue-500 rounded-lg hover:bg-blue-400 cursor-pointer flex items-center duration-300">
                        <h1 className="text-center mx-auto font-semibold text-xl">Back</h1>
                    </Link>
                    <div className="flex gap-3 my-10">
                        {
                            gallery &&
                            <h1>{gallery[0].name} created by / {user.name}</h1>
                        }
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
