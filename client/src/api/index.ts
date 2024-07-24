import request from "../utils/request";

interface HomeDataItem {
  id: number;
  name: string;
}

type HomeDataList = HomeDataItem[];

export const getHomeDataApi = () => {
  return request.get<any, HomeDataList>("/home/data");
};

export const getAboutDataApi = () => {
  return request.get<any, HomeDataList>("/about/data");
};
