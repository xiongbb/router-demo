import { IState } from "../typings";

export default {
    ['LoginByUserId'](state:IState,id:number){
        state.isAuth=true
    }
}