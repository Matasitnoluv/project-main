import { Text, Dialog, Button, Flex, TextField } from "@radix-ui/themes";
import { patchMsproduct } from "@/services/msproduct.services"
import { useState } from "react";

type DialogMsproductProps = {
    getMsproductData: Function;
    master_product_id: string;
    master_product_name: string;
    scale_product: string;
    height: number;
    length: number;
    width: number;
    cubic_centimeter_product: number;
    update_by: string;
    update_date: string;
    description: string;
    image: string;
}

const DialogEdit = ({
    getMsproductData,
    master_product_id,
    master_product_name,
    scale_product,
    height,
    length,
    width,
    cubic_centimeter_product,
    update_by,
    update_date,
    description,
    image,
}: DialogMsproductProps) => {
    const [patchMaster_product_name, setMaster_product_name] = useState(master_product_name);
    const [patchScale_product, setScale_product] = useState(scale_product);
    const [patchHeight, setHeight] = useState(height);
    const [patchLength, setLength] = useState(length);
    const [patchWidth, setWidth] = useState(width);
    const [patchCubic_centimeter_product, setCubic_centimeter_product] = useState(cubic_centimeter_product);
    const [patchUpdate_by, setUpdate_by] = useState(update_by);
    const [patchUpdate_date, setUpdate_date] = useState(update_date);
    const [patchDescription, setDescription] = useState(description);
    const [patchImage, setImage] = useState(image);

    const handleUpdateMsproduct = async () => {
        if (!patchMaster_product_name ||
            !patchScale_product ||
            !patchUpdate_by ||
            !patchUpdate_date ||
            !patchHeight ||
            !patchLength ||
            !patchWidth ||
            !patchCubic_centimeter_product ||
            !patchDescription
        ) {
            alert("error Edit");
            return;
        }
        patchMsproduct({
            master_product_id,
            master_product_name: patchMaster_product_name,
            scale_product: patchScale_product,
            height: patchHeight,
            length: patchLength,
            width: patchWidth,
            cubic_centimeter_product: patchCubic_centimeter_product,
            update_by: patchUpdate_by,
            update_date: patchUpdate_date,
            description: patchDescription,
            image: patchImage,

        })
            .then((response) => {
                if (response.statusCode === 200) {
                    alert("Update success");
                    getMsproductData();
                } else if (response.statusCode === 400) {
                    alert(response.message);
                    setMaster_product_name(master_product_name);
                    setScale_product(scale_product);
                    setHeight(height);
                    setLength(length);
                    setWidth(width);
                    setCubic_centimeter_product(cubic_centimeter_product);
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
                <Button className="bg-yellow-400 hover:bg-yellow-500 hover:cursor-pointer text-white font-bold py-2 px-4 rounded shadow-xl" size="2" variant="soft">Edit</Button>
            </Dialog.Trigger>
            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Edit</Dialog.Title>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Product ID
                        </Text>
                        <text>
                            {master_product_id}
                        </text>
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Product Name
                        </Text>
                        <TextField.Root
                            defaultValue={master_product_name}
                            placeholder="Enter your Product name"
                            onChange={(event) => setMaster_product_name(event.target.value)}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            scale_product
                        </Text>
                        <TextField.Root
                            defaultValue={scale_product}
                            placeholder="Enter your Scale product"
                            onChange={(event) => setScale_product(event.target.value)}
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
                            cubic_centimeter_product
                        </Text>
                        <TextField.Root
                            defaultValue={cubic_centimeter_product}
                            placeholder="Enter your cubic_centimeter_product"
                            onChange={(event) => setCubic_centimeter_product(parseFloat(event.target.value))}
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
                {/* <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            image
                        </Text>
                        <TextField.Root
                            defaultValue={image}
                            placeholder="Enter your image"
                            onChange={(event) => setImage(event.target.value)}
                        />
                    </label>
                </Flex> */}
                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button onClick={handleUpdateMsproduct} className="bg-red-400 hover:bg-red-500 hover:cursor-pointer text-white font-bold py-2 px-4 rounded shadow-xl">Save</Button>
                    </Dialog.Close>.
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}

export default DialogEdit