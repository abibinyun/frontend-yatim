import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, Select } from '@mantine/core';
import { useState } from 'react';

export default function ModalComp() {
  const [opened, { open, close }] = useDisclosure(false);
  const [valueBank, setValueBank] = useState()

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
        <Select
      data={['React', 'Angular', 'Svelte', 'Vue']}
      placeholder="Pilih Metode Pembayaran"
      label="Metode Pembayaran"
      variant="filled"
      radius="md"
      size="md"
      withAsterisk
    />
      </Modal>

      <Group position="center">
        <input type="text" placeholder='Metode Pembayaran' />
        <Button onClick={open} size='xs'>Pilih</Button>
      </Group>
    </>
  );
}