import { Text, Dialog, Button, Flex, TextField, TextArea } from "@radix-ui/themes";
import { postMsproduct } from "@/services/msproduct.services";
import { useState } from "react";
// import axios from "axios";
// import { PayloadCreateMasterproduct } from "@/types/requests/request.msproduct";

type DialogMsproductProps = {
    getMsproductData: Function;
}

const DialogAdd = ({ getMsproductData }: DialogMsproductProps) => {
    const [master_product_name, setMaster_product_name] = useState("");
    const [scale_product, setScale_product] = useState("");
    const [height, setHeight] = useState(0);
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    const [cubic_centimeter_product, setCubic_centimeter_product] = useState(0);
    const [description, setDescription] = useState("");
    const [image, setSelectedFile] = useState("");
    // const [image, setSelectedFile] = useState<File | null>(null);

    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = event.target.files?.[0];
    //     if (file) {
    //         setSelectedFile(file);
    //     }
    // };

    // const handleUpload = async () => {
    //     if (!image) return;

    //     const formData = new FormData();
    //     formData.append("image", image);

    //     try {
    //         const Data: PayloadCreateMasterproduct = {
    //             master_product_name: master_product_name,
    //             scale_product,
    //             create_by,
    //             description,
    //             image: formData,
    //             height: height,
    //             length: length,
    //             width: width,
    //             cubic_centimeter_product: cubic_centimeter_product,
    //         }
    //         const response = await axios.post("http://localhost:8081/v1/msproduct/create", Data, {
    //             headers: { "Content-Type": "multipart/form-data" },
    //         });
    //         alert("Upload successful!");
    //         //   if (response.statusCode === 200) {
    //         //     setMaster_product_name("");
    //         //     setScale_product("");
    //         //     setHeight(0);
    //         //     setLength(0);
    //         //     setWidth(0);
    //         //     setCubic_centimeter_product(0);
    //         //     setCreate_by("");
    //         //     setDescription("");
    //         //     setSelectedFile("");
    //         //     getMsproductData();
    //         // } else if (response.statusCode === 400) {
    //         //     alert(response.message);
    //         // } else {
    //         //     alert("Unexpected error:" + response.message);
    //         // }
    //         console.log(response);
    //     } catch (error) {
    //         console.error("Error uploading file:", error);
    //         alert("Failed to upload file.");
    //     }
    // };

    const handleCreateMsproduct = async () => {
        if (!master_product_name || !scale_product || !height || !length || !width || !cubic_centimeter_product || !description) {
            alert("Please enter a product name.");
            return;
        }
        postMsproduct({
            master_product_name: master_product_name,
            scale_product,
            description,
            image,
            height: height,
            length: length,
            width: width,
            cubic_centimeter_product: cubic_centimeter_product,
        })
            .then((response) => {
                if (response.statusCode === 200) {
                    setMaster_product_name("");
                    setScale_product("");
                    setHeight(0);
                    setLength(0);
                    setWidth(0);
                    setCubic_centimeter_product(0);
                    setDescription("");
                    setSelectedFile("");
                    getMsproductData();
                } else if (response.statusCode === 400) {
                    alert(response.message);
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
                <Button size="2" className="bg-green-400 hover:bg-green-500 hover:cursor-pointer text-white font-bold py-2 px-4 rounded shadow-xl">Create</Button>
            </Dialog.Trigger>
            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Create Product</Dialog.Title>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Product Name
                        </Text>
                        <TextField.Root
                            defaultValue=""
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
                            defaultValue=""
                            placeholder="Enter your secale product"
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
                            cubic_centimeter_product
                        </Text>
                        <TextField.Root
                            defaultValue=""
                            placeholder="Enter your CC"
                            onChange={(event) => setCubic_centimeter_product(parseFloat(event.target.value))}
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
                        <Button onClick={handleCreateMsproduct} className="bg-red-400 hover:bg-red-500 hover:cursor-pointer text-white font-bold py-2 px-4 rounded shadow-xl">Save</Button>
                    </Dialog.Close>.
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )

};

export default DialogAdd