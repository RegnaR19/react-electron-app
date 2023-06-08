import { connect } from "react-redux";
import { compose } from "redux";
import PostElements from "./PostElements";
import { AppStateType } from "@/redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.profilePage
    }
}

export default compose(
    connect(mapStateToProps)
)
    (PostElements);