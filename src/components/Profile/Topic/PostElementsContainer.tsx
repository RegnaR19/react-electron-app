import { connect } from "react-redux";
import { compose } from "redux";
import PostElements from "./PostElements";

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.profilePage
    }
}

export default compose(
    connect(mapStateToProps)
)
    (PostElements);