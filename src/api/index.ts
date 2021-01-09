import axios, { AxiosPromise } from "axios"

import  request  from 'axios'
import { IUserNode } from "../typings"

export const loginByUserId = (id:number):AxiosPromise<IUserNode[]> =>request({
    url: '/user_login_auth',
    method: 'post',
    data: {
       id   
    }
})
