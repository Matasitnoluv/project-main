
export type TypeCategoriesAll = {
    category_name: string;
    id: string
}

export type TypeCategory = {
    id: string;
    category_name: string;
    created_at: string;
    updated_at: string;
}

export type CategoryResponse = {
    success: boolean;
    message: string;
    responseObject: TypeCategory;
    statusCode: number;
};
