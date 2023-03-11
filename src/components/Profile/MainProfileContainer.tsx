import React from 'react';
import MainProfile from './MainProfile';

class MainProfileContainer extends React.Component {

   componentDidMount() {
      
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