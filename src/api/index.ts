import request, { AxiosPromise } from "axios";
import { IRouterItem } from "../typings";

export const getUserRoters = (id: number): AxiosPromise<IRouterItem[]> => {
  return  request({
    url: "/user_login_auth",
    method: "post",
    data: {
      id,
    },
  })
};
