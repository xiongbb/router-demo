import { IUserNode } from "../typings";
import { mock, Random, setup } from "mockjs";

const userList: Array<IUserNode> = [
  {
    id: 1,
    name: Random.name(),
    auth: [0],
  },
  {
    id: 2,
    name: Random.name(),
    auth: [0],
  },
  {
    id: 3,
    name: Random.name(),
    auth: [0],
  },
];

export default () => {
  // setup({
  //   timeout:'200-600'
  // })
  mock("/user_login_auth", "post", (option) => {
    let param = JSON.parse(option.body).id;
    if (param) {
      return userList.filter((u) => {
        return u.id === param;
      });
    } else {
      return [];
    }
  });
};
