import DangerButton from "@/Components/DangerButton";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth, dentalJobs }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Orvosok
                </h2>
            }
        >
            <Head title="Orvosok" />




        </AuthenticatedLayout>
            );
        }
        