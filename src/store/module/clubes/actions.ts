export const addClubAction = (club:any) =>{
    return{
        type : 'CLUBES_ADD',
        payload: club
    }
}

export const getClubAction = (id:number)=>{    
    return {
        type: 'CLUBES_GET_DATA',
        payload: id
    }    
}

export const deleteClubAction = (id:number)=>{    
    return {
        type: 'CLUBES_DELETE',
        payload: id
    }    
}
export const editClubAction = (data:Object)=>{    
    return {
        type: 'CLUBES_EDIT',
        payload: data
    }    
}