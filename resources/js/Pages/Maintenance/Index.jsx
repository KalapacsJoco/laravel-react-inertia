import DangerButton from "@/Components/DangerButton";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ auth, maintenance }) {
    console.dir(maintenance);
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between">               
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Karbantartási napló
                </h2>
                <Link href="Maintenance/create">
            <PrimaryButton>Új feladat létrehozása</PrimaryButton>
        </Link>                </div>
            }
        >
            <Head title="Karbantartási napló" >
                
            </Head>         
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Feladat
                </th>
                <th scope="col" class="px-6 py-3">
                    Gyakoriság
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Roland kalibrálása
                </th>
                <td class="px-6 py-4">
                    Hetente
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
        </tbody>
    </table>
</div>

            
        </AuthenticatedLayout>
    );
}
