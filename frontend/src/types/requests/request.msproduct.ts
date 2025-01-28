export type PayloadCreateMasterproduct = {
    master_product_name: string;
    scale_product: string;
    height: number;
    length: number;
    width: number;
    cubic_centimeter_product: number;
    description: string;
    image: string;
};

export type PayloadUpdateMsproduct = {
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
};

export type PayloadDeteleMsproduct = {
    master_product_id: string;
};
