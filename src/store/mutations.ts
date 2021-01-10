import { IRouterItem, IState } from "../typings";

export default {
    setAuth (state:IState,auth:boolean){
        state.hasAuth=auth
    },
    setUserRouters (state:IState,userRouters:Array<IRouterItem>){
        state.userRouters=userRouters
    }
}