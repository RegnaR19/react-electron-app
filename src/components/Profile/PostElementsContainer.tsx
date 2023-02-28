import { connect } from "react-redux";
import PostElements from "./PostElements";

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.profilePage
    }
}

const PostElementsContainer = connect(mapStateToProps)(PostElements)

export default PostElementsContainer;