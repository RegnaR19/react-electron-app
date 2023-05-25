import { useState } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

const UploadAvatar = ({}) => {

   const [file, setFile] = useState<File | null>(null);

   return (
      <>
            <FileButton onChange={setFile} accept="image/png,image/jpeg">
               {(props) => <Button {...props} color="red">Загрузить</Button>}
            </FileButton>
         {file && (
            <Text size="sm" mt="sm">
               {file.name}
            </Text>
         )}
      </>
   );
}

export default UploadAvatar