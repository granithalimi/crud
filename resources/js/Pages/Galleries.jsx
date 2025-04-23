import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Gallery({ galleries }) {
    const [g, setg] = useState([])

    useEffect(() => {
        setg(galleries)
    }, [])
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Galleries
                </h2>
            }
        >
            <Head title="Gallries" />

            <div className="py-12">
                <div className="mx-auto w-2/3 ">
                    <div className="flex gap-2">
                        <Link href={route('dashboard')} className="w-36 h-20 border-2 border-blue-500 rounded-lg hover:bg-blue-400 cursor-pointer flex items-center duration-300">
                            <h1 className="text-center mx-auto font-semibold text-xl">Back</h1>
                        </Link>
                        <Link href={route('galleries.create')} className="w-36 h-20 border-2 border-blue-500 rounded-lg hover:bg-blue-400 cursor-pointer flex items-center duration-300">
                            <h1 className="text-center mx-auto font-semibold text-xl">Create Gallery</h1>
                        </Link>
                    </div>
                    <div className="flex gap-3 my-10">
                        {
                            (g && g.length > 0) &&
                            g.map((gallery) => (
                                <Link href={route('galleries.show', gallery.id)} key={gallery.id} className="px-5 border-2 border-blue-500 rounded-lg hover:bg-blue-400 cursor-pointer flex items-center duration-300">
                                    <h1>{gallery.id}. {gallery.name} created by /<span className="font-bold">{gallery.user.name}</span></h1>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
