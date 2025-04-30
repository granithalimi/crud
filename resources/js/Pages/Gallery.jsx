import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { Input } from 'postcss';
import { useState, useEffect } from 'react';

export default function Gallery({ gallery, user, images }) {
    const { data, setData, delete:destroy, post } = useForm({
        pic : null,
        path : "storage/public/images/",
        name : 'testing',
        id : gallery.id,
    })
    
    const dely = e => {
        if(confirm("are you sure")){
            destroy(route('galleries.destroy', e))
        }
    }
    const uppy = e => {
        e.preventDefault()
        post(route('galleries.edit', e))
    }
    const handleSubmit = e => {
        e.preventDefault()
        post(route('pictures.store', gallery.id))
    }
    const deleteImage = id => {
        destroy(route('pictures.destroy', id))
    }
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
                        <h1><span className="font-bold">{gallery.name}</span> created by / <span className="font-bold">{user.name}</span></h1>
                        <button onClick={e => dely(gallery.id)}>del</button>
                        <br></br>
                        <Link href={route('galleries.edit', gallery.id)}>update</Link>
                    </div>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <input type="text" name="name" placeholder="Image Name" onChange={e => setData("name", e.target.value)} />
                        <input type="file" name="pic" onChange={e => setData("pic", e.target.files[0])} />
                        <button type="submit">Add Picture</button>
                    </form>
                    <div>
                        {
                            images && images.length > 0 &&
                            images.map((img, ind) => (
                                <div key={ind} className="mb-10">
                                    <img className="w-1/2" src={`${window.location.origin}/storage/${img.path}`} />
                                    <button onClick={e => deleteImage(img.id)} className="px-3 py-1 bg-red-400 text-white rounded-lg">Delete</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
