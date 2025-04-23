import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, router } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function UpdateGallery({ gallery }) {
    const { data, setData, put} = useForm({
        name: gallery.name,
    })

    const handleSubmit = e => {
        e.preventDefault()
        put(route('galleries.update', gallery.id))
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Update Gallery
                </h2>
            }
        >
            <Head title="Update Gallery" />

            <div className="py-12">
                <div className="mx-auto w-2/3">
                    <Link href={route('galleries.index')} className="w-36 h-20 border-2 border-blue-500 rounded-lg hover:bg-blue-400 cursor-pointer flex items-center duration-300">
                        <h1 className="text-center mx-auto font-semibold text-xl">Back</h1>
                    </Link>
                    <form onSubmit={e => handleSubmit(e)}>
                        <input type="text" name="name" value={data.name} onChange={e => setData("name", e.target.value)} />
                        <button type="submit">Update</button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
