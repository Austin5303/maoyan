import initState from "../../state"
export default function(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
        return state
}