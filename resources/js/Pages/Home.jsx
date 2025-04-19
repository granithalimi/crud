import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Home
                </h2>
            }
        >
            <Head title="Home" />

            <div className="py-12">
                <h1 className="text-xl text-red-500 font-bold">
                    This is a red text
                </h1>
            </div>
        </AuthenticatedLayout>
    );
}
