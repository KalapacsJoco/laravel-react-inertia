import DangerButton from "@/Components/DangerButton";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";

export default function Index({ auth, maintenance }) {
    const { data, setData, post, processing, errors } = useForm({
        taskName: '',
        machine: '',
        frequency: '',
        _token: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('Maintenance.store'));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Új feladat létrehozása
                    </h2>
                    <Link href="/Maintenance">
                        <PrimaryButton>Vissza</PrimaryButton>
                    </Link>
                </div>
            }
        >
            <Head title="Karbantartási napló"></Head>
            <form className="max-w-md mx-auto" onSubmit={submit}>
                 <input type="hidden" name="_token" value="{{ csrf_token() }}"/>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Feladat neve
                    </label>
                    {errors.name && <div className="text-red-600">{errors.name}</div>}
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="machine"
                        id="machine"
                        value={data.machine}
                        onChange={(e) => setData('machine', e.target.value)}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="machine"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Gép/eszköz
                    </label>
                    {errors.machine && <div className="text-red-600">{errors.machine}</div>}
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <label className="text-s text-white mb-4">Gyakoriság:</label>
                    <select
                        id="frequency"
                        name="frequency"
                        value={data.frequency}
                        onChange={(e) => setData('frequency', e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="">Válasszon gyakoriságot</option>
                        <option value="Hetente">Hetente</option>
                        <option value="Havonta">Havonta</option>
                        <option value="Évente">Évente</option>
                    </select>
                    {errors.frequency && <div className="text-red-600">{errors.frequency}</div>}
                </div>

                <button
                    type="submit"
                    className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    disabled={processing}
                >
                    Feladat létrehozása
                </button>
            </form>
        </AuthenticatedLayout>
    );
}