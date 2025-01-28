import { CREATE_CATGORY, GET_CATGORY_ALL, UPDATE_CATGORY, DELETE_CATGORY } from "@/apis/endpoint.api";
import mainApi from "@/apis/main.api";
import { PayloadCreateCategory, PayloadUpdateCategory, PayloadDeteleCategory } from "@/types/requests/request.category";
import { CategoryResponse } from "@/types/response/reponse.category";

export const getCategories = async () => {
  const { data: response } = await mainApi.get(
    GET_CATGORY_ALL
  );
  return response;
};

export const postCategory = async (data: PayloadCreateCategory) => {
  const { data: response } = await mainApi.post<CategoryResponse>(
    CREATE_CATGORY,
    data
  );
  return response;
};

export const patchCategory = async (data: PayloadUpdateCategory) => {
  const { data: response } = await mainApi.patch<CategoryResponse>(
    UPDATE_CATGORY,
    data
  );
  return response;
};

export const deleteCategory = async (data: PayloadDeteleCategory) => {
  const { data: response } = await mainApi.delete<CategoryResponse>(
    DELETE_CATGORY + "/" + data.id
  );
  return response;
}

