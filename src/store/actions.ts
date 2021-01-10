import { Commit } from "vuex";
import { IRouterItem, IState } from "../typings";
import { getUserRoters } from "../api/index";
import { formatRouterTree } from "../utils/routerHelper";

interface IContext {
  commit: Commit;
  state: IState;
}

export default {
  async setUserRouters({ commit, state }: IContext) {
    let payload = new Array<IRouterItem>();
    const { data, status } = await getUserRoters(state.uid);
    if (status === 200) {
      payload = formatRouterTree(data);    
    }
    commit("setUserRouters", payload);
    commit("setAuth", true);
  },
};
