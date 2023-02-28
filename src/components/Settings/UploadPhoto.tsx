import { useState } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

function UploadAvatar() {
  const [file, setFile] = useState<File | null>(null);
  return (
    <>
      <Group position="left">
        <FileButton onChange={setFile} accept="image/png,image/jpeg">
          {(props) => <Button {...props}>Загрузить</Button>}
        </FileButton>
      </Group>
      {file && (
        <Text size="sm" align="left" mt="sm">
          Загруженный файл: {file.name}
        </Text>
      )}
    </>
  );
}

export default UploadAvatar