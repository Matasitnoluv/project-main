
export type TypeMsboxAll = {
    master_box_id: string;
    master_box_name: string;
    scale_box: string;
    height: number;
    length: number;
    width: number;
    cubic_centimeter_box: number;
    create_by: string;
    create_date: string;
    update_by: string;
    update_date: string;
    description: string;
    image: string;
}

export type TypeMsbox = {
    master_box_id: string;
    master_box_name: string;
    scale_box: string;
    height: number;
    length: number;
    width: number;
    cubic_centimeter_box: number;
    create_by: string;
    create_date: string;
    update_by: string;
    update_date: string;
    description: string;
    image: string;
}

export type MsboxResponse = {
    success: boolean;
    message: string;
    responseObject: TypeMsbox;
    statusCode: number;
};
