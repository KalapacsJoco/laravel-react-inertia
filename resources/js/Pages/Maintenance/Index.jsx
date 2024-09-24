import DangerButton from "@/Components/DangerButton";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ auth, maintenance }) {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Karbantartási napló
                    </h2>
                    <Link href="Maintenance/create">
                        <PrimaryButton>Új feladat létrehozása</PrimaryButton>
                    </Link>{" "}
                </div>
            }
        >
            <Head title="Karbantartási napló"></Head>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                            >
                                Feladat
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gyakoriság
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gép
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                            >
                                Létrehozva
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {maintenance.data.map((task) => (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                key={task.id}
                            >
                                <td className="px-6 py-4">{task.name}</td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4">{task.frequency}</td>
                                <td className="px-6 py-4">{task.machine}</td>
                                <td className="px-6 py-4">{task.created_at}</td>

                                <td className="px-5 py-3 text-right">
                                    <PrimaryButton href="#">
                                        Módosítás
                                    </PrimaryButton>
                                </td>
                                <td className="px-5 py-3 text-right">
                                    <DangerButton href="#">Törlés</DangerButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
