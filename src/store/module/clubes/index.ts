import data from '../../data.json'

const initialState ={
    clubes : data,
    team: null
} 

const clubesReducer  = (prevState : any = initialState, action:any) =>{ 
    // console.log(prevState,action)
    switch (action.type) {
        case 'CLUBES_ADD':
            return{
                clubes: [...prevState.clubes, action.payload]
            }
        case 'CLUBES_DELETE':
            const new_list = prevState.clubes.filter((club: { id: number }) => club.id !== action.payload)
            return{
                clubes: new_list
            }
        case 'CLUBES_GET_DATA':
                                
            const dataFound = [...prevState.clubes].find((search: any) => search.id === action.payload)            
            return{
                team: dataFound
            }   
            case 'CLUBES_EDIT':
                                
            const clubEdited = [...prevState.clubes].find((search: any) => search.id === action.payload.id)
            clubEdited.equipo = action.payload.equipo
            clubEdited.categoria = action.payload.categoria
            clubEdited.logo = action.payload.logo
            
            return{
                clubes : [...prevState.clubes]
            }  
        default:
            return prevState;
    }
}
export default clubesReducer