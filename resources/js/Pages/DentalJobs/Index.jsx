import { useState } from "react"; // Importing useState hook
import DangerButton from "@/Components/DangerButton";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SearchButton from "@/Components/SearchButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import SelectInput from "@/Components/SelectInput";

const getDateClass = (deadline) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const timeDiff = deadlineDate - today;
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    if (dayDiff > 3) {
        return "text-green-500"; // Zöld
    } else if (dayDiff > 1) {
        return "text-yellow-500"; // Sárga
    } else {
        return "text-red-500"; // Piros
    }
};

export default function Index({ auth, dentalJobs, qureyparams = null }) {
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearchField = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    const [searchId, setSearchId] = useState("");
    const [searchDoctorName, setDoctorName] = useState("");
    const [searchPatient, setPatient] = useState("");
    const [searchMaterial, setMaterial] = useState("");

    const filteredData = dentalJobs.data.filter((item) => {
        return (
            item.id.toString().toLowerCase().includes(searchId.toLowerCase()) &&
            // item.doctor.name
            //     .toLowerCase()
            //     .includes(searchDoctorName.toLowerCase()) &&
            item.PatientName.toLowerCase().includes(
                searchPatient.toLowerCase()
            ) &&
            item.material.toLowerCase().includes(searchMaterial.toLowerCase())
        );
    });

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Munkák
                </h2>
            }
        >
            <Head title="Dental Projects" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Munkák
                        </div>

                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Sorszám
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            <div className="flex items-center">
                                                Orvos Neve
                                                <a href="#">
                                                    <svg
                                                        className="w-3 h-3 ms-1.5"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Páciens neve
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            <div className="flex items-center">
                                                Munka típusa
                                                <a href="#">
                                                    <svg
                                                        className="w-3 h-3 ms-1.5"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Anyag
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Tagszám
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Ár
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Határidő
                                        </th>
                                        <th className="px-6 py-3">
                                            {/* Step 3: Attach onClick to SearchButton */}
                                            <div onClick={toggleSearchField}>
                                                <SearchButton />
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </th>
                                    </tr>
                                </thead>

                                {/* Conditionally render searchInputField based on state */}
                                <thead
                                    className={`text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ${
                                        isSearchVisible ? "" : "hidden"
                                    }`}
                                >
                                    <tr>
                                        <th scope="col">
                                            <TextInput
                                                className="w-full"
                                                placeholder="Sorszám"
                                                value={searchId}
                                                onChange={(e) =>
                                                    setSearchId(e.target.value)
                                                }
                                            />
                                        </th>
                                        <th scope="col">
                                            <TextInput className="w-full" />
                                        </th>
                                        <th scope="col">
                                            <TextInput
                                                className="w-full"
                                                placeholder="Páciens neve"
                                                value={searchPatient}
                                                onChange={(e) =>
                                                    setPatient(e.target.value)
                                                }
                                            />
                                        </th>
                                        <th scope="col"></th>
                                        <th scope="col">
                                            <SelectInput className="w-full" />
                                        </th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col">
                                            <span className="sr-only"></span>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredData.map((dentalJob) => (
                                        <tr
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                            key={dentalJob.id}
                                        >
                                            <td className="px-6 py-4">
                                                {dentalJob.id}
                                            </td>
                                            <td className="px-6 py-4">
                                                {dentalJob.doctor
                                                    ? dentalJob.doctor.name
                                                    : "N/A"}
                                            </td>
                                            <td className="px-6 py-4">
                                                {dentalJob.PatientName}
                                            </td>
                                            <td className="px-6 py-4">
                                                {dentalJob.type}
                                            </td>
                                            <td className="px-6 py-4">
                                                {dentalJob.material}
                                            </td>
                                            <td className="px-6 py-4">
                                                {dentalJob.qty}
                                            </td>
                                            <td className="px-6 py-4">
                                                {dentalJob.price}
                                            </td>
                                            <td
                                                className={`px-6 py-4 ${getDateClass(
                                                    dentalJob.deadline
                                                )}`}
                                            >
                                                {dentalJob.deadline}
                                            </td>
                                            <td className="px-5 py-3 text-right">
                                                <PrimaryButton href="#">
                                                    Módosítás
                                                </PrimaryButton>
                                            </td>
                                            <td className="px-5 py-3 text-right">
                                                <DangerButton href="#">
                                                    Törlés
                                                </DangerButton>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination links={dentalJobs.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
