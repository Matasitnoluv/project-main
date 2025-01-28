import { CREATE_MSPRODUCT, GET_MSPRODUCT, UPDARE_MSPRODUCT, DELETE_MSPRODUCT } from "@/apis/endpoint.api";
// import { CREATE_CATGORY, GET_CATGORY_ALL, UPDATE_CATGORY, DELETE_CATGORY } from "@/apis/endpoint.api";
import mainApi from "@/apis/main.api";
import { PayloadCreateMasterproduct, PayloadUpdateMsproduct, PayloadDeteleMsproduct } from "@/types/requests/request.msproduct";
// import { PayloadCreateCategory, PayloadUpdateCategory, PayloadDeteleCategory } from "@/types/requests/request.category";
import { MsproductResponse } from "@/types/response/reponse.msproduct";
// import { CategoryResponse } from "@/types/response/reponse.category";

export const getMsproduct = async () => {
    const { data: response } = await mainApi.get(
        GET_MSPRODUCT
    );
    return response;
};

export const postMsproduct = async (data: PayloadCreateMasterproduct) => {
    const { data: response } = await mainApi.post<MsproductResponse>(
        CREATE_MSPRODUCT,
        data
    );
    return response;
};

export const patchMsproduct = async (data: PayloadUpdateMsproduct) => {
    const { data: response } = await mainApi.patch<MsproductResponse>(
        UPDARE_MSPRODUCT,
        data
    );
    return response;
};

export const deleteProduct = async (params: PayloadDeteleMsproduct) => {
    const { data: response } = await mainApi.delete<MsproductResponse>(
        DELETE_MSPRODUCT + "/" + params.master_product_id
    );
    return response;
}

