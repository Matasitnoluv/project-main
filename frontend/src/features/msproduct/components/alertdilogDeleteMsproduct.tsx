import { deleteProduct } from "@/services/msproduct.services";
import { Text, Dialog, Button, Flex, Strong } from "@radix-ui/themes";


type DialogMsproductProps = {
    getMsproductData: Function;
    master_product_id: string;
    master_product_name: string;
}

const AlertDialogDelete = ({ getMsproductData, master_product_id, master_product_name }: DialogMsproductProps) => {
    const handleDeleteMsproduct = async () => {
        try {
            await deleteProduct({
                master_product_id: master_product_id,
            })
                .then((response) => {
                    if (response.statusCode === 200) {
                        getMsproductData();
                        window.location.reload();
                    } else if (response.statusCode === 400) {
                        alert(response.message);
                    } else {
                        alert("Unexpected error:" + response.message);
                    }
                })
                .catch((error) => {
                    console.error("Error Delete product", error.response?.date || error.message);
                    alert("Failed to Delete product. Please try again");
                });
        } catch (error) {
            console.error("Error Delete product", error);
        }

    };
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button className="bg-red-400 hover:bg-red-500 hover:cursor-pointer text-white font-bold py-2 px-4 rounded shadow-xl" size="2" variant="soft" >Delete</Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Delete Category</Dialog.Title>
                <Flex direction="column" gap="3">
                    <label>
                        <Text size="2">Id : <Strong>{master_product_id}</Strong></Text>
                    </label>
                    <label>
                        <Text size="2"> <Strong> Before Category name : </Strong>{master_product_name}</Text>
                    </label>
                </Flex>
                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button onClick={handleDeleteMsproduct} className="bg-red-400 hover:bg-red-500 hover:cursor-pointer text-white font-bold py-2 px-4 rounded shadow-xl">Confirm</Button>
                    </Dialog.Close>.
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
};


export default AlertDialogDelete;