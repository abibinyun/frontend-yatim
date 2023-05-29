import {
  Card,
  Button,
  SegmentedControl,
  NumberInput,
  Textarea,
  createStyles,
  Space,
  Input,
  CopyButton,
  Tooltip,
  ActionIcon,
  Select,
  Group,
  Avatar,
  Text,
} from '@mantine/core';
import { sendContactForm } from '../lib/api';
import { forwardRef, useState } from 'react';
import { useForm } from '@mantine/form';
import { useFocusWithin } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { IconCheck, IconCopy } from '@tabler/icons-react';
import Swal from 'sweetalert2';
import moment from 'moment/moment';

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

const SelectItem = forwardRef(({ image, label, description, ...others }, ref) => (
  <div ref={ref} {...others}>
    <Group noWrap>
      <Avatar src={image} size="lg" />
      <div>
        <Text size="sm">{label}</Text>
        <Text size="xs" opacity={0.65}>
          {description}
        </Text>
      </div>
    </Group>
  </div>
));

export function CardDonasi({ subject }) {
  const { classes } = useStyles();
  const [value, setValue] = useState('');
  const [valueInput, setValueInput] = useState('');
  const { ref, focused } = useFocusWithin();
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const uniqId = `${day}${month}${year}`;
  const randomNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);
  const orderId = `Yathim-${uniqId}-${randomNumber}`;
  const router = useRouter();
  const params = router.query;
  let tomorrow = moment().add(1, 'day').format('DD MMM YYYY - hh:mm A');

  const form = useForm({
    initialValues: {
      amount: '',
      bank: '',
      noReq: '',
      message: '',
      nama: '',
    },
    validate: {
      amount: (value) =>
        value.length === 0
          ? 'tidak boleh kosong'
          : value < 10000
          ? 'minimum donasi Rp. 10.000'
          : null,
      message: (value) => (value.length === 0 ? 'tidak boleh kosong' : null),
      noReq: (value) => (value.length === 0 ? 'silahkan pilih metode pembayaran' : null),
    },
  });

  // handle submit untuk button DONASI
  async function handleSubmit() {
    // api untuk MIDTRANS
    // ===
    // const response = await fetch('/api/pay', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     amount: form.values.amount,
    //     order_id: orderId,
    //     message: form.values.message,
    //     params,
    //   }),
    // });
    // const data = await response.json();
    // router.push(data.redirect_url);
    // window.open(data.redirect_url, '_blank');
    // ===
    const data = {
      ...form.values,
      id: `INV-${uniqId}-${randomNumber}`,
      time: `${tomorrow}`,
      subject,
    };

    await sendContactForm(data).then(() => {
      localStorage.setItem('dataForm', JSON.stringify(data));
      router.push(
        {
          pathname: `/invoice/INV-${uniqId}-${randomNumber}`,
          // query: data,
        },
        `/invoice/INV-${uniqId}-${randomNumber}`
      );
    });
  }

  return (
    <>
      <Card shadow="lg" padding="lg" radius="md" withBorder style={{ color: 'green' }}>
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
          <Space h={'20px'} />
          {/* <Flex justify={'flex-end'}> */}
          <div>
            {/* <ModalComp /> */}
            <Select
              data={[
                {
                  image: '/asset/logo/bri.png',
                  label: 'Transfer Bank BRI',
                  value: 91901034216531,
                },
                {
                  image: '/asset/logo/mandiri.png',
                  label: 'Transfer Bank Mandiri',
                  value: 1640003525443,
                },
                {
                  image: '/asset/logo/bca.png',
                  label: 'Transfer Bank BCA',
                  value: 4731682873,
                },
                {
                  image: '/asset/logo/bsi.png',
                  label: 'Transfer Bank Syariah Indonesia',
                  value: 7232168247,
                },
              ]}
              itemComponent={SelectItem}
              placeholder="Pilih Metode Pembayaran"
              label="Metode Pembayaran"
              description="Transfer Bank (Verifikasi Manual 1 x 24 jam)"
              variant="filled"
              radius="md"
              size="sm"
              dropdownComponent="div"
              withAsterisk
              {...form.getInputProps('noReq')}
            />
          </div>
          {/* </Flex> */}
          <Space h={10} />
          <div>
            <Input.Wrapper label="Nama">
              <Input
                // icon={<IconAt />}

                placeholder="masukan nama"
                radius="md"
                size="sm"
                {...form.getInputProps('nama')}
              />
            </Input.Wrapper>
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
            <Button
              color="green"
              type="submit"
              onClick={() => {
                form.values.noReq === 91901034216531
                  ? form.setValues({ bank: 'bri' })
                  : form.values.noReq === 1640003525443
                  ? form.setValues({ bank: 'mandiri' })
                  : form.values.noReq === 4731682873
                  ? form.setValues({ bank: 'bca' })
                  : form.values.noReq === 7232168247
                  ? form.setValues({ bank: 'bsi' })
                  : null;
              }}
            >
              Donasi
            </Button>

            {/* <Button color="green" type="submit">
              {' '}
              Donasi{' '}
            </Button> */}
          </div>
        </form>
      </Card>
    </>
  );
}
export default CardDonasi;
