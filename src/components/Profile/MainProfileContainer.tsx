import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import MainProfile from './MainProfile';
import { setUserProfile } from "../../redux/profileReducer";

type Props = {
   setUserProfile: any
}

class MainProfileContainer extends React.Component<Props> {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
         .then((response: any) => {
            this.props.setUserProfile(response.data)
         })
   }

   render() {
      return (
         <>
            <MainProfile {...this.props} />
         </>
      );
   }
}

let mapStateToProps = (state) => {

}

export default connect(mapStateToProps, { setUserProfile })(MainProfileContainer);