import { Text, Dialog, Button, Flex, TextField, TextArea } from "@radix-ui/themes";
import { postMsbox } from "@/services/msbox.services";
import { useState } from "react";

type DialogMsboxProps = {
    getMsboxData: Function;
}

const DialogAdd = ({ getMsboxData }: DialogMsboxProps) => {
    const [master_box_name, setMaster_box_name] = useState("");
    const [scale_box, setScale_box] = useState("");
    const [height, setHeight] = useState(0);
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    const [cubic_centimeter_box, setCubic_centimeter_box] = useState(0);
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const handleCreateMsbox = async () => {
        if (!master_box_name ||
            !scale_box ||
            !height ||
            !length ||
            !width ||
            !cubic_centimeter_box ||
            !description) {
            alert("Please enter a box name");
            return;
        }
        postMsbox({
            master_box_name: master_box_name,
            scale_box,
            height: height,
            length: length,
            width: width,
            cubic_centimeter_box: cubic_centimeter_box,
            description,
            image,
        })
            .then((response) => {
                if (response.statusCode === 200) {
                    setMaster_box_name("");
                    setScale_box("");
                    setHeight(0);
                    setLength(0);
                    setWidth(0);
                    setCubic_centimeter_box(0);
                    setDescription("");
                    setImage("");
                    getMsboxData();
                } else if (response.statusCode === 400) {
                    alert(response.message);
                    console.log(
                        master_box_name, height, length, width, cubic_centimeter_box, image
                    )
                } else {
                    alert("Unexpected error:" + response.message);
                }
            }).catch((error) => {
                console.error("Error createing product", error.response?.date || error.message);
                alert("Failed to create product. Please try again");
            });
    };
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button size="2" className="bg-green-400 hover:bg-green-500 hover:cursor-pointer text-white font-bold py-2 px-4 rounded shadow-xl">Create</Button>
            </Dialog.Trigger>
            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Create Box</Dialog.Title>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Box Name
                        </Text>
                        <TextField.Root
                            defaultValue=""
                            placeholder="Enter your Box name"
                            onChange={(event) => setMaster_box_name(event.target.value)}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            scale_box
                        </Text>
                        <TextField.Root
                            defaultValue=""
                            placeholder="Enter your scale_box"
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
                            defaultValue=""
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
                            defaultValue=""
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
                            defaultValue=""
                            placeholder="Enter your width"
                            onChange={(event) => setWidth(parseFloat(event.target.value))}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            cubic_centimeter_box
                        </Text>
                        <TextField.Root
                            defaultValue=""
                            placeholder="Enter your CC"
                            onChange={(event) => setCubic_centimeter_box(parseFloat(event.target.value))}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            description
                        </Text>
                        <TextArea placeholder="Enter Description…"
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                image
                            </Text>
                            <input
                                disabled
                                type="file"
                                id="avatar"
                                name="avatar"
                                placeholder="Enter Description…"
                            // onChange={handleFileChange}
                            />
                        </label>
                    </Flex>
                </Flex>
                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button onClick={handleCreateMsbox} className="bg-red-400 hover:bg-red-500 hover:cursor-pointer text-white font-bold py-2 px-4 rounded shadow-xl">Save</Button>
                    </Dialog.Close>.
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
};

export default DialogAdd