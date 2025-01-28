import { useEffect,useState } from "react";
import { Card, Flex, Table, Text } from "@radix-ui/themes";
import { getCategories } from "@/services/category.services";
import { TypeCategoriesAll} from "@/types/response/reponse.category";
import DialogAdd from "./components/dilogAddCategory";
import DialogEdit from "./components/dilogEditCategort";
import AlertDialogDelete from "./components/alertdilogdeleteCategory"
export default function CategoriesFeature(){
    const [categories,setCatgories] = useState<TypeCategoriesAll[]>([]);

    const getCategoriesData = () => {
        getCategories().then((res) => {
            console.log(res);

            setCatgories(res.responseObject);
        })
    }

    useEffect(() => {
        getCategoriesData();
    }, []);

    return (
        <div className="container w-full pt-2">
           <Card variant="surface" className="w-600 m-auto">
            <Flex className="w-full" direction="row" gap="2">
                <Text as="div" size="2" weight="bold">
                    Categories
                </Text>
                <DialogAdd 
                    getCategoriesData={getCategoriesData}
                />
            </Flex>
                <div className="w-full mt-2">
                    <Table.Root variant="surface">
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Catergory Name</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Edit</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Delete</Table.ColumnHeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {categories && categories.map((category : TypeCategoriesAll) => (
                               <Table.Row key={category.id}>
                               <Table.RowHeaderCell>{category.id}</Table.RowHeaderCell>
                               <Table.Cell>{category.category_name}</Table.Cell>
                               <Table.Cell>
                                <DialogEdit 
                                    getCategoriesData={getCategoriesData}
                                    id={category.id}
                                    category_name={category.category_name}
                                />
                               </Table.Cell>
                               <Table.Cell>
                                <AlertDialogDelete 
                                    getCategoriesData={getCategoriesData}
                                    id={category.id}
                                    category_name={category.category_name}
                                />
                               </Table.Cell>
                           </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
                </div>
           </Card>
        </div>
    )
}