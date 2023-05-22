import {
  Card,
  Button,
  SegmentedControl,
  NumberInput,
  Textarea,
  createStyles,
  Flex,
  Space,
  Popover,
  Input,
  CopyButton,
  Tooltip,
  ActionIcon,
} from '@mantine/core';
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { useFocusWithin } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { IconCheck, IconCopy } from '@tabler/icons-react';
import Swal from 'sweetalert2';

const useStyles = createStyles((theme) => ({
  img: {
    color: theme.colors[theme.primaryColor][4],
  },
}));

function withAllert() {
  setTimeout(() => {
    Swal.fire({
      icon: 'success',
      title: 'Terimakasih🙏',
      text: 'Mohon konfirmasi jika sudah melakukan transfer ke nomor dibawah ini',
      footer:
        '<a href="https://wa.me/62811102890" target="_blank" style={{ textDecoration: "none" }} >Konfirmasi Transfer</a>',
    });
  }, 100);
  return <IconCheck size="1rem" />;
}

function CopyBtn({ value }) {
  return (
    <CopyButton value={value} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
            {copied ? withAllert() : <IconCopy size="1rem" />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}

export function CardDonasi() {
  const { classes } = useStyles();
  const [value, setValue] = useState('');
  const [valueInput, setValueInput] = useState('');
  const { ref, focused } = useFocusWithin();
  const uniqId = new Date().valueOf();
  const orderId = `Yathim-${uniqId}`;
  const router = useRouter();
  const params = router.query;

  const form = useForm({
    initialValues: {
      amount: '',
      message: '',
    },
    validate: {
      amount: (value) =>
        value.length === 0
          ? 'tidak boleh kosong'
          : value < 10000
          ? 'minimum donasi Rp. 10.000'
          : null,
      message: (value) => (value.length === 0 ? 'tidak boleh kosong' : null),
    },
  });

  async function handleSubmit() {
    const response = await fetch('/api/pay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: form.values.amount,
        order_id: orderId,
        message: form.values.message,
        params,
      }),
    });
    const data = await response.json();
    // router.push(data.redirect_url);
    window.open(data.redirect_url, '_blank');
  }

  return (
    <>
      <Card shadow="lg" padding="lg" radius="md" withBorder style={{ height: 450, color: 'green' }}>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          {!focused || !form.values.amount ? (
            <Card.Section>
              <div style={{ marginLeft: 5, marginRight: 5 }}>
                <SegmentedControl
                  className={classes.img}
                  value={value}
                  onChange={setValue}
                  data={[
                    { label: '10rb', value: 10000 },
                    { label: '20rb', value: 20000 },
                    { label: '50rb', value: 50000 },
                    { label: '100rb', value: 100000 },
                  ]}
                  size="md"
                  fullWidth
                  color="green"
                  {...form.getInputProps('amount')}
                />
              </div>
            </Card.Section>
          ) : (
            <></>
          )}
          <div ref={ref}>
            <div style={{ marginTop: 20 }}>
              <NumberInput
                label="Masukan jumlah donasi"
                placeholder="Rp.100.000"
                value={valueInput}
                onChange={setValueInput}
                {...form.getInputProps('amount')}
              />
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            <Textarea
              placeholder="sampaikan salam serta doa"
              label="Tulis pesan anda dibawah"
              autosize
              minRows={4}
              {...form.getInputProps('message')}
            />
          </div>
          <div style={{ marginTop: 15 }}>
            {/* HAPUS POPOVER BUTTON DONASI DI BAWAH, JIKA PAYMENT GATEWAY SUDAH BISA DIGUNAKAN */}

            <Button
              color="green"
              type="submit"
              onClick={() => {
                Swal.fire({
                  icon: 'error',
                  title: 'Saat ini sedang dalam perbaikan',
                  text: 'Klik tombol dibawah untuk Manual Transfer',
                });
              }}
            >
              {' '}
              Donasi{' '}
            </Button>

            {/* <Button color="green" type="submit">
              {' '}
              Donasi{' '}
            </Button> */}

            <Space h={'20px'} />
            <Popover width="300px" position="top" withArrow shadow="md">
              <Popover.Target>
                <Button size="xs" color="gray">
                  <p>Klik disini untuk Manual Transfer</p>
                </Button>
              </Popover.Target>
              <Popover.Dropdown>
                <div style={{ fontSize: 15, padding: 'auto' }}>
                  <p>AMANAH ZISWAF melalui rekening{<br />} Yayasan Taman Harapan Insan Mulia</p>
                </div>
                <Flex direction={'column'} justify={'center'}>
                  <div>
                    <label htmlFor="">BRI</label>
                    <Flex>
                      <Input value={`0919-0103-4216-531`} disabled />
                      <CopyBtn value={`0919-0103-4216-531`} />
                    </Flex>
                  </div>
                  <Space h={'10px'} />
                  <div>
                    <label htmlFor="">Mandiri</label>
                    <Flex>
                      <Input value={`1640003525443`} disabled />
                      <CopyBtn value={`1640003525443`} />
                    </Flex>
                  </div>
                  <Space h={'10px'} />
                  <div>
                    <label htmlFor="">BSI</label>
                    <Flex>
                      <Input value={`7232168247`} disabled />
                      <CopyBtn value={`7232168247`} />
                    </Flex>
                  </div>
                  <Space h={'10px'} />
                  <div>
                    <label htmlFor="">BCA</label>
                    <Flex>
                      <Input value={`4731682873`} disabled />
                      <CopyBtn value={`4731682873`} />
                    </Flex>
                  </div>
                </Flex>
              </Popover.Dropdown>
            </Popover>
          </div>
        </form>
      </Card>
    </>
  );
}
export default CardDonasi;
