import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Button } from '@headlessui/react';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function CreateGallery() {
    const { auth } = usePage().props

    const { data, setData, post, errors } = useForm({
        name : '',
        user_id : auth.user.id
    })

    const subby = e => {
        e.preventDefault()
        post(route('galleries.store'), {
            onSuccess:e => {
               setData({
                name: '',
               }) 
            }
        })
    }
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create Gallery
                </h2>
            }
        >
            <Head title="Create Gallery" />

            <div className="py-12">
                <div className="mx-auto w-2/3">
                    <Link href={route('galleries.index')} className="w-36 h-20 border-2 border-blue-500 rounded-lg hover:bg-blue-400 cursor-pointer flex items-center duration-300">
                        <h1 className="text-center mx-auto font-semibold text-xl">Back</h1>
                    </Link>
                    <form onSubmit={e => subby(e)}>
                        <input name="name" value={data.name} onChange={e => setData('name', e.target.value)} />
                        <Button type='submit'>Create</Button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
