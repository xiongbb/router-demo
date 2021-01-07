import { Commit } from "vuex";
import { IState } from "../typings";

interface IContext{
    commit:Commit;
    state:IState
}

export default {
    ['LoginByUserId']({commit}:IContext,id:number):void{
        commit('LoginByUserId',id)
    }
}