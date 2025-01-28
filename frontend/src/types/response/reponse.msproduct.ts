
export type TypeMsproductAll = {
    master_product_id: string;
    master_product_name: string;
    scale_product: string;
    height: number;
    length: number;
    width: number;
    cubic_centimeter_product: number;
    create_by: string;
    create_date: string;
    update_by: string;
    update_date: string;
    description: string;
    image: string;
}

export type TypeMsproduct = {
    master_product_id: string;
    master_product_name: string;
    scale_product: string;
    height: number;
    length: number;
    width: number;
    cubic_centimeter_product: number;
    create_by: string;
    create_date: string;
    update_by: string;
    update_date: string;
    description: string;
    image: string;
}

export type MsproductResponse = {
    success: boolean;
    message: string;
    responseObject: TypeMsproduct;
    statusCode: number;
};
