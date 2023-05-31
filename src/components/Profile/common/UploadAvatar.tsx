import { FileInput } from '@mantine/core';
import { useRef } from 'react';

const UploadAvatar = ({savePhoto}) => {

   const onMainPhotoSelected = (e: any) => {
      console.log(e)
      let partName = e.target.files[0];
      if (e.target.files.length) {
         savePhoto(partName)
      }
   }

   return (
      <>
         <input type="file" onChange={onMainPhotoSelected} />
      </>
   );
}

export default UploadAvatar