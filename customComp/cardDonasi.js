import { Card, Button, SegmentedControl, NumberInput, Textarea } from '@mantine/core';
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { useFocusWithin } from '@mantine/hooks';
import { useRouter } from 'next/router';

function CardDonasi() {
  const [value, setValue] = useState('');
  const [valueInput, setValueInput] = useState('');
  const { ref, focused } = useFocusWithin();
  const router = useRouter();
  const id = new Date().valueOf();
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

  async function handleSubmit(value) {
    const response = await fetch('/api/pay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: form.values.amount,
        order_id: id,
      }),
    });
    const data = await response.json();
    // router.push(data.redirect_url);
    window.open(data.redirect_url, '_blank');

    console.log('data : ', data);
    console.log(value);
  }

  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder style={{ height: 400 }}>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          {!focused || !form.values.amount ? (
            <Card.Section>
              <div style={{ marginLeft: 5, marginRight: 5 }}>
                <SegmentedControl
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
                  color="cyan"
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
