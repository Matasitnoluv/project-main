export type PayloadCreateMasterbox = {
    master_box_name: string;
    scale_box: string;
    height: number;
    length: number;
    width: number;
    cubic_centimeter_box: number;
    description: string;
    image: string;
};

export type PayloadUpdateMsbox = {
    master_box_id: string;
    master_box_name: string;
    scale_box: string;
    height: number;
    length: number;
    width: number;
    cubic_centimeter_box: number;
    update_by: string;
    update_date: string;
    description: string;
    image: string;
};

export type PayloadDeteleMsbox = {
    master_box_id: string;
};
