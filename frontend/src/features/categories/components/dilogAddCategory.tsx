import { Text, Dialog, Button, Flex, TextField } from "@radix-ui/themes";
import { postCategory } from "@/services/category.services";
import { useState } from "react";

type DialogCategoryProps = {
    getCategoriesData: Function;
}
const DialogAdd = ({ getCategoriesData }: DialogCategoryProps) => {
    const [postCategoryName, setPostCategoryName] = useState("");
    const handleCreateCategory = async () => {
        if (!postCategoryName) {
            alert("Please enter a category name.");
            return;
        }
        postCategory({ category_name: postCategoryName })
            .then((response) => {
                if (response.statusCode === 200) {
                    setPostCategoryName("");
                    getCategoriesData();
                } else if (response.statusCode === 400) {
                    alert(response.message);
                } else {
                    alert("Unexpected error:" + response.message);
                }
            })
            .catch((error) => {
                console.error("Error creating category", error.response?.date || error.message);
                alert("Failed to create category. Please try again");
            });
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button size="1">Create</Button>
            </Dialog.Trigger>
            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Create Category</Dialog.Title>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Category Name
                        </Text>
                        <TextField.Root
                            defaultValue=""
                            placeholder="Enter your category name"
                            onChange={(event) => setPostCategoryName(event.target.value)}
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
                        <Button onClick={handleCreateCategory}>Save</Button>
                    </Dialog.Close>.
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
};


export default DialogAdd