import { Text, Dialog, Button, Flex, TextField } from "@radix-ui/themes";
import { patchMsbox } from "@/services/msbox.services";
import { useState } from "react";

type DialogMsboxProps = {
    getMsboxData: Function;
    master_box_id: string;
    master_box_name: string;
    scale_box: string;
    height: number;
    length: number;
    width: number;
    cubic_centimeter_box: number;
    update_by: string;
    update_date: string;
    description: string;
    image: string;
}

const DialogEdit = ({
    getMsboxData,
    master_box_id,
    master_box_name,
    scale_box,
    height,
    length,
    width,
    cubic_centimeter_box,
    update_by,
    update_date,
    description,
    image,
}: DialogMsboxProps) => {
    const [patchMaster_box_name, setMaster_box_name] = useState(master_box_name);
    const [patchScale_box, setScale_box] = useState(scale_box);
    const [patchHeight, setHeight] = useState(height);
    const [patchLength, setLength] = useState(length);
    const [patchWidth, setWidth] = useState(width);
    const [patchCubic_centimeter_box, setCubic_centimeter_box] = useState(cubic_centimeter_box);
    const [patchUpdate_by, setUpdate_by] = useState(update_by);
    const [patchUpdate_date, setUpdate_date] = useState(update_date);
    const [patchDescription, setDescription] = useState(description);
    const [patchImage, setImage] = useState(image);

    const handleUpdateMsbox = async () => {
        if (!patchMaster_box_name ||
            !patchScale_box ||
            !patchUpdate_by ||
            !patchUpdate_date ||
            !patchHeight ||
            !patchLength ||
            !patchWidth ||
            !patchCubic_centimeter_box ||
            !patchDescription
        ) {
            alert("error Edit");
            return;
        }
        patchMsbox({
            master_box_id,
            master_box_name: patchMaster_box_name,
            scale_box: patchScale_box,
            height: patchHeight,
            length: patchLength,
            width: patchWidth,
            cubic_centimeter_box: patchCubic_centimeter_box,
            update_by: patchUpdate_by,
            update_date: patchUpdate_date,
            description: patchDescription,
            image: patchImage,

        })
            .then((response) => {
                if (response.statusCode === 200) {
                    alert("Update success");
                    getMsboxData();
                } else if (response.statusCode === 400) {
                    alert(response.message);
                    setMaster_box_name(master_box_name);
                    setScale_box(scale_box);
                    setHeight(height);
                    setLength(length);
                    setWidth(width);
                    setCubic_centimeter_box(cubic_centimeter_box);
                    setUpdate_by(update_by);
                    setUpdate_date(update_date);
                    setDescription(description);
                    setImage(image);
                } else {
                    alert("Unexpected error:" + response.message);
                }
            })
            .catch((error) => {
                console.error("Error createing product", error.response?.date || error.message);
                alert("Failed to create product. Please try again");
            });
    };


    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button className="bg-yellow-400 hover:bg-yellow-500 hover:cursor-pointer text-white font-bold py-2 px-4 rounded shadow-xl" >Edit </Button>
            </Dialog.Trigger>
            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Edit</Dialog.Title>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Product ID
                        </Text>
                        <text>
                            {master_box_id}
                        </text>
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Box Name
                        </Text>
                        <TextField.Root
                            defaultValue={master_box_name}
                            placeholder="Enter your Product name"
                            onChange={(event) => setMaster_box_name(event.target.value)}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            scale box
                        </Text>
                        <TextField.Root
                            defaultValue={scale_box}
                            placeholder="Enter your Scale product"
                            onChange={(event) => setScale_box(event.target.value)}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            height
                        </Text>
                        <TextField.Root
                            defaultValue={height}
                            placeholder="Enter your height"
                            onChange={(event) => setHeight(parseFloat(event.target.value))}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            length
                        </Text>
                        <TextField.Root
                            defaultValue={length}
                            placeholder="Enter your length"
                            onChange={(event) => setLength(parseFloat(event.target.value))}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            width
                        </Text>
                        <TextField.Root
                            defaultValue={width}
                            placeholder="Enter your width"
                            onChange={(event) => setWidth(parseFloat(event.target.value))}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            cubic centimeter box
                        </Text>
                        <TextField.Root
                            defaultValue={cubic_centimeter_box}
                            placeholder="Enter your cubic_centimeter_product"
                            onChange={(event) => setCubic_centimeter_box(parseFloat(event.target.value))}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            update_by
                        </Text>
                        <TextField.Root
                            defaultValue={update_by}
                            placeholder="Enter your update_by"
                            onChange={(event) => setUpdate_by(event.target.value)}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            update_date
                        </Text>
                        <TextField.Root
                            defaultValue={update_date}
                            placeholder="Enter your update_date"
                            onChange={(event) => setUpdate_date(event.target.value)}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            description
                        </Text>
                        <TextField.Root
                            defaultValue={description}
                            placeholder="Enter your description"
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </label>
                </Flex>
                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button onClick={handleUpdateMsbox} className="bg-red-400 hover:bg-red-500 hover:cursor-pointer text-white font-bold py-2 px-4 rounded shadow-xl">Save</Button>
                    </Dialog.Close>.
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}

export default DialogEdit