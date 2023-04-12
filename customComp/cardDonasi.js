import { Card, Button, SegmentedControl, NumberInput, Textarea, createStyles } from '@mantine/core';
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { useFocusWithin } from '@mantine/hooks';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  img: {
    color: theme.colors[theme.primaryColor][4],
  },
}));

export function CardDonasi() {
  const { classes } = useStyles();
  const [value, setValue] = useState('');
  const [valueInput, setValueInput] = useState('');
  const { ref, focused } = useFocusWithin();
  const uniqId = new Date().valueOf();
  const orderId = `Yathim-Public-${uniqId}`;
  // const name = 'abi test detail';
  const router = useRouter();
  console.log('router : ', router);
  const params = router.query;
  console.log('params : ', params);
  const paramName = params.name;
  const paramId = params.id;
  console.log('params name : ', paramName, 'params id : ', paramId);

  const form = useForm({
    initialValues: {
      amount: '',
      message: '',
    },
    validate: {
      amount: (value) => (value.length === 0 ? 'tidak boleh kosong' : null),
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
        first_name: 'param test',
        params,
      }),
    });
    const data = await response.json();
    // router.push(data.redirect_url);
    window.open(data.redirect_url, '_blank');
  }

  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder style={{ height: 400, color: 'green' }}>
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
            <Button color="green" type="submit">
              {' '}
              Donasi !{' '}
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
}
export default CardDonasi;
