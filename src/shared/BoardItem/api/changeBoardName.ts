import { $api } from '@app/api';
import { AxiosResponse } from 'axios';

interface IRequestBody {
  name: string;
  boardId: string;
}

interface IApiResponse {
  message: string;
}

export const changeBoardName = async (
  requestBody: IRequestBody,
): Promise<AxiosResponse<IApiResponse>> => {
  try {
    const response: AxiosResponse<IApiResponse> = $api.put(
      '/board/editBoard',
      requestBody,
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
