interface IState{
    isAuth:boolean
}

interface IUserNode{
    id:number;
    name:String;
    auth:Array<number>
}

export  {
    IState,
    IUserNode
}