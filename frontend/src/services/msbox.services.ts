import { CREATE_MSBOX, GET_MSBOX, UPDATE_MSBOX, DELETE_MSBOX } from "@/apis/endpoint.api";
import mainApi from "@/apis/main.api";
import { PayloadCreateMasterbox, PayloadUpdateMsbox, PayloadDeteleMsbox } from "@/types/requests/request.msbox";
import { MsboxResponse } from '@/types/response/reponse.msbox';

export const getMsbox = async () => {
    const { data: response } = await mainApi.get(
        GET_MSBOX
    );
    return response;
};

export const postMsbox = async (data: PayloadCreateMasterbox) => {
    const { data: response } = await mainApi.post<MsboxResponse>(
        CREATE_MSBOX,
        data
    );
    return response;
};

export const patchMsbox = async (data: PayloadUpdateMsbox) => {
    const { data: response } = await mainApi.patch<MsboxResponse>(
        UPDATE_MSBOX,
        data
    );
    return response;
};

export const deleteBox = async (params: PayloadDeteleMsbox) => {
    const { data: response } = await mainApi.delete<MsboxResponse>(
        DELETE_MSBOX + "/" + params.master_box_id
    );
    return response;
}

