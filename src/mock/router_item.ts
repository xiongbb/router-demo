import { IRouterItem } from "../typings";


export const routerItem:Array<IRouterItem>=[
    {
        id:1,
        pid:0,
        path:'/computer',
        name:'Computer',
        title:'Computer'
    },
    {
        id:2,
        pid:1,
        path:'desktops',
        name:'Desktops',
        link:'/computer/desktop',
        title:'Desktop'
    },
    {
        id:3,
        pid:1,
        path:'workstations',
        name:'Workstations',
        link:'/computer/workstations',
        title:'Workstations'
    },    
    {
        id:4,
        pid:1,
        path:'laptops',
        name:'Laptops',
        link:'/computer/laptops',
        title:'Laptops'
    },
    {
        id:5,
        pid:0,
        path:'/tablets',
        name:'Tablets',      
        title:'Tablets'
    },
    {
        id:6,
        pid:5,
        path:'ipads',
        name:'iPads',   
        link:'/tablets/ipads',   
        title:'iPads'
    },
    {
        id:7,
        pid:5,
        path:'surfaces',
        name:'Surfaces',   
        link:'/tablets/surfaces',   
        title:'Surfaces'
    },
    {
        id:8,
        pid:4,
        path:'macbooks',
        name:'Macbooks',
        link:'/computer/laptops/macbooks',
        title:'Macbooks'
    },
    {
        id:9,
        pid:4,
        path:'notebooks',
        name:'Notebooks',
        link:'/computer/laptops/notebooks',
        title:'Notebooks'
    },
]
