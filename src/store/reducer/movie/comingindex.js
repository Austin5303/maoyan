import inintState from "../../state/index"
const reducer = function (state = inintState, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    if (type === "UP_COMIMGLIST") {
        state.cominglist = payload.cominglist
        state.morecominglistId = payload.morecominglistId
    } else if (type === "UP_EXPECTED") {
        state.expected = payload
    } else if (type === "UPMORELIST") {
        state.morecominglist = payload
        state.cominglist = state.cominglist.concat(state.morecominglist)
    }
    return state
}
export default reducer