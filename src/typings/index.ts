interface IState{
    uid:number,
    hasAuth:boolean,
    userRouters:Array<IRouterItem>
}

interface IUserNode{
    id:number;
    name:string;
    auth:Array<number>
}

interface IRouterItem{
    id:number;
    pid:number;
    path:string;
    name:string;
    link?:string;
    title:string;
    children?:Array<IRouterItem>
}

export  {
    IState,
    IUserNode,
    IRouterItem
}