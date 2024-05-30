import {create, set} from 'zustand';




const useCategoryStore=create(set=>({
    
categories:[],
removeCategory:(category)=>{
    set((state)=>({
        categories:state.categories.filter(c=>c !==category)
    }));


},

addCategory:(category)=>{
    set((state)=>({
        categories:[...state.categories,category]
    }))
}

}));