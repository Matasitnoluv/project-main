import { Table, Card, AlertDialog, Text, } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { getMsbox } from "@/services/msbox.services";
import { TypeMsboxAll } from "@/types/response/reponse.msbox";
import DialogAdd from "./components/dilogAddMsbox";
import DialogEdit from "./components/dilogEditMsbox";
import AlertDialogDelete from "./components/alertdilogDeleteMsbox";

export default function MsboxFeature() {
    const [msbox, setMsbox] = useState<TypeMsboxAll[]>([]);
    const getMsboxData = () => {
        getMsbox().then((res) => {
            console.log(res);

            setMsbox(res.responseObject)
        })
    }
    useEffect(() => {
        getMsboxData();
    }, []);

    return (
        <>
            <div className="">

                <div className="flex flex-row w-1/2 m-auto p-14">
                    <div className="basis-1/4">Report box </div>

                    <div className="basis-1/2 ">
                        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                            <input
                                type="search"
                                className="relative m-0 l-5 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon2" />

                            {/* <!--Search icon--> */}
                            <span
                                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                                id="basic-addon2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clipRule="evenodd" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div>
                        <AlertDialog.Root>
                            <DialogAdd
                                getMsboxData={getMsboxData}
                            />
                        </AlertDialog.Root>
                    </div>
                </div>

                <Card variant="ghost" className="w-3/4 m-auto">
                    <Table.Root variant="ghost">
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeaderCell>Name box</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Scale box</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>size box("cc")</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Image</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {msbox && msbox.map((msbox: TypeMsboxAll) => (
                                <Table.Row key={msbox.master_box_id}>
                                    <Table.RowHeaderCell>{msbox.master_box_name}</Table.RowHeaderCell>
                                    <Table.Cell>{msbox.length} * {msbox.width} * {msbox.height}</Table.Cell>
                                    <Table.Cell>{msbox.cubic_centimeter_box}</Table.Cell>
                                    <Table.Cell>{msbox.cubic_centimeter_box}</Table.Cell>

                                    <Table.Cell>
                                        <DialogEdit
                                            getMsboxData={getMsboxData}
                                            master_box_id={msbox.master_box_id}
                                            master_box_name={msbox.master_box_name}
                                            scale_box={msbox.scale_box}
                                            height={msbox.height}
                                            length={msbox.length}
                                            width={msbox.width}
                                            cubic_centimeter_box={msbox.cubic_centimeter_box}
                                            update_by={msbox.create_by}
                                            update_date={msbox.update_date}
                                            description={msbox.description}
                                            image={msbox.image}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <AlertDialogDelete
                                            getMsboxData={getMsboxData}
                                            master_box_id={msbox.master_box_id}
                                            master_box_name={msbox.master_box_name}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                            ))}


                        </Table.Body>
                    </Table.Root>

                </Card>
            </div>
        </>
    )
}
