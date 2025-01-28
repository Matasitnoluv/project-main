import {Text, Dialog, Button, Flex, TextField, Strong} from "@radix-ui/themes";
import { patchCategory } from "@/services/category.services"
import { useState } from "react";
// import { error } from "console";
// import { eventNames } from "process";

type DialogCategoryProps = {
    getCategoriesData: Function;
    id: string;
    category_name: string;
}
const DialogEdit = ({getCategoriesData, id, category_name} : DialogCategoryProps) => {
    const [patchCategoryName, setPostCategoryName] = useState("");

    const handleUpdateCategory = async () => {
        if (!patchCategoryName) {
        alert("Please enter a category name.");
        return;
        }
        patchCategory({
            id: id,
            category_name: patchCategoryName
        })
        .then((response) => {
            if (response.statusCode === 200){
                setPostCategoryName("");
                getCategoriesData();
            } else if (response.statusCode === 400) {
                alert( response.message);
            } else {
                alert("Unexpected error:" + response.message);
            }
        })
        .catch((error) => {
            console.error("Error update category", error.response?.date || error.message);
            alert ("Failed to update category. Please try again");
        });
    };

    return (
        <Dialog.Root>
        <Dialog.Trigger>
            <Button size="1" color="orange" variant="soft" >Edit</Button>
        </Dialog.Trigger>
        <Dialog.Content maxWidth="450px">
            <Dialog.Title>Edit Category</Dialog.Title>
            <Flex direction="column" gap="3">
            <label>
                <Text size="2">Id : <Strong>{id}</Strong></Text>
            </label>
            <label>
                <Text size="2"> <Strong> Before Category name : </Strong>{category_name}</Text>
            </label>
            <label> 
                <Text as="div" size="2" mb="1" weight="bold">
                New Category Name
                </Text>
                <TextField.Root
                    defaultValue=""
                    placeholder="Enter your category name : "
                    onChange={(event) => setPostCategoryName (event.target.value)}
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
                    <Button onClick={handleUpdateCategory}>Save</Button>
                </Dialog.Close>.
            </Flex>
        </Dialog.Content>
    </Dialog.Root>
    )
};


export default DialogEdit