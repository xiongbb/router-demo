import { IUserNode ,IRouterItem} from "../typings";
import { mock, Random } from "mockjs";
import { routerItem }  from './router_item'

const userList: Array<IUserNode> = [
  {
    id: 1,
    name: Random.name(),
    auth: [1,2,3,4,5,6,7,8,9],
  },
  {
    id: 2,
    name: Random.name(),
    auth: [1,2,3,4,8,9],
  },
  {
    id: 3,
    name: Random.name(),
    auth: [1,2,3,5,6,7],
  },
];

export default (isMock:boolean) => {
  if(!isMock){
    return;
  }
  mock("/user_login_auth", "post", (option: { body: string; }) => {    
    const uid:number = JSON.parse(option.body).id;
    if (uid) {
      let authRouterItems=new Array<IRouterItem>();
      
      const userinfo=userList.filter(user=>user.id===uid)[0];   
    

      userinfo.auth.map(rid=>{
        routerItem.map(router=>{
          if(router.id===rid){
            authRouterItems.push(router);
          }
        })
      })       

      return authRouterItems
    } else {
      return [];
    }
  });
  
};
