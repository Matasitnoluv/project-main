import {Text, Dialog, Button, Flex, Strong} from "@radix-ui/themes";
import { deleteCategory } from "@/services/category.services";
// import { error } from "console";
// import { eventNames } from "process";

type DialogCategoryProps = {
    getCategoriesData: Function;
    id: string;
    category_name : string;
}
const AlertDialogDelete = ({getCategoriesData , id , category_name} : DialogCategoryProps) => {
    const handleDeleteCategory = async () => {
       try {
        await deleteCategory({
            id:id,
        })
        .then((response) => {
            if (response.statusCode === 200){
                getCategoriesData();
            } else if (response.statusCode === 400) {
                alert( response.message);
            } else {
                alert("Unexpected error:" + response.message);
            }
        })
        .catch((error) => {
            console.error("Error creating category", error.response?.date || error.message);
            alert ("Failed to create category. Please try again");
        });
       } catch (error){
        console.error("Error Delete category",error);
       }
        
    };

    return (
        <Dialog.Root>
        <Dialog.Trigger>
            <Button size="1" color="red" variant="soft" >Delete</Button>
        </Dialog.Trigger>

        <Dialog.Content maxWidth="450px">
            <Dialog.Title>Delete Category</Dialog.Title>
            <Flex direction="column" gap="3">
            <label>
                <Text size="2">Id : <Strong>{id}</Strong></Text>
            </label>
            <label>
                <Text size="2"> <Strong> Before Category name : </Strong>{category_name}</Text>
            </label>
            </Flex>
            <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                    <Button variant="soft" color="gray">
                    Cancel
                    </Button>
                </Dialog.Close>
                <Dialog.Close>
                    <Button onClick={handleDeleteCategory}>Save</Button>
                </Dialog.Close>.
            </Flex>
        </Dialog.Content>
    </Dialog.Root>
    )
};


export default AlertDialogDelete;