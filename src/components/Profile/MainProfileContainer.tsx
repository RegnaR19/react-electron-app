import axios from 'axios';
import React from 'react';
import MainProfile from './MainProfile';

class MainProfileContainer extends React.Component {

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

export default MainProfileContainer;