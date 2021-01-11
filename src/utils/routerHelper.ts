import { RouteRecordRaw } from "vue-router";
import { IRouterItem } from "../typings";

export const formatRouterTree = (
  data: Array<IRouterItem>
): Array<IRouterItem> => {
  let parents = data.filter((p) => p.pid === 0);
  let childrens = data.filter((c) => c.pid !== 0);

  arrayToTree(parents, childrens);

  /**
   * 递归算法，找到pid为当前id的节点，然后将当前节点作为父节点，将当前节点删除后的结果作为新的子节点数组再次传入递归
   * @param parents
   * @param children
   */
  function arrayToTree(
    parents: Array<IRouterItem>,
    children: Array<IRouterItem>
  ) {
    parents.map((p) => {
      children.map((c, i) => {
        if (c.pid === p.id) {
          let _c = JSON.parse(JSON.stringify(children)) as Array<IRouterItem>;
          _c.splice(i, 1);
          arrayToTree([c], _c);

          if (p.children) {
            p.children.push(c);
          } else {
            p.children = [c];
          }
        }
      });
    });
  }

  return parents;
};

export const genrateRouter = (
  userRouters: Array<IRouterItem>
): Array<RouteRecordRaw> => {
  let newRouters: Array<RouteRecordRaw> = userRouters.map((r) => {
    let router: RouteRecordRaw = {
      path: r.path,
      name: r.name,
      component: () => import(`../views/${r.name}.vue`),
    };

    if (r.children) {
      router.children = genrateRouter(r.children);
    }

    return router;
  });

  return newRouters;
};
