export type PayloadCreateCategory = {
    category_name: string;
};

export type PayloadUpdateCategory = {
    category_name: string;
    id: string;
};

export type PayloadDeteleCategory = {
    id: string;
};