import { ActionIcon, Avatar, CopyButton, Tooltip, createStyles, em } from '@mantine/core';
import { FormatRupiah } from '@arismun/format-rupiah';
import {
  IconAddressBook,
  IconCheck,
  IconCopy,
  IconMoneybag,
  Icon24Hours,
  IconMessage2,
} from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { Box, Card, Center, Flex, Space, Text } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  card: {
    padding: ' 10px 50px 10px 50px',
    [`@media (max-width: ${em(605)})`]: {
      width: '75%',
      margin: '10px 5px 10px 10px',
    },
    [`@media (max-width: ${em(505)})`]: {
      width: '85%',
      margin: '10px 8px 10px 25px',
      padding: ' 10px 5px 10px 5px',
    },
    [`@media (max-width: ${em(380)})`]: {
      width: '80%',
      margin: '10px 8px 10px 25px',
      padding: ' 10px 5px 10px 5px',
      fontWeight: '10px',
      fontSize: '15px',
    },
    [`@media (max-width: ${em(346)})`]: {
      width: '85%',
      margin: '10px 8px 10px 25px',
      padding: ' 10px 0px 10px 0px',
      fontWeight: '10px',
      fontSize: '15px',
    },
    [`@media (max-width: ${em(336)})`]: {
      width: '85%',
      margin: '10px 8px 10px 25px',
      padding: ' 10px 0px 10px 0px',
      fontWeight: '10px',
      fontSize: '14px',
    },
    [`@media (max-width: ${em(281)})`]: {
      width: '95%',
      margin: '10px 2px 10px 5px',
      padding: ' 10px 0px 10px 0px',
      fontWeight: '10px',
      fontSize: '14px',
    },
  },
  flexCon: {
    display: 'flex',
    alignItems: 'center',
    [`@media (max-width: ${em(505)})`]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  iconBox: {
    width: '30%',
    [`@media (max-width: ${em(505)})`]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  itemBox: {
    width: '70%',
    display: 'inline',
  },
  divItem: {
    [`@media (max-width: ${em(281)})`]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  itemTitle: {
    display: 'block',
    [`@media (max-width: ${em(505)})`]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  itemText: {
    display: 'flex',
    justifyContent: 'space-between',
    [`@media (max-width: ${em(505)})`]: {},
    [`@media (max-width: ${em(281)})`]: {
      display: 'inline-block',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
}));

function CopyBtn({ value }) {
  return (
    <CopyButton value={value} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
            {copied ? <IconCheck size="1rem" /> : <IconCopy size="1rem" />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}

export default function Invoice() {
  const [dataLocal, setDataLocal] = useState({});
  const { classes, cx } = useStyles();

  useEffect(() => {
    const data = localStorage.getItem('dataForm');
    if (data !== null) {
      setDataLocal(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      {/* <Container> */}
      <Flex justify={'center'}>
        <Card shadow="lg" m={'0'}>
          <Center>
            <Text weight={500} size="lg" mt="md">
              {dataLocal.id}
            </Text>
          </Center>
          <Center>
            <Text m={10} color="dark" size="sm">
              Terimakasih{' '}
              <span style={{ color: 'green', fontWeight: 'bold' }}>{dataLocal.nama}</span> atas
              Donasi yang akan anda berikan pada program
            </Text>
          </Center>
          <Center>
            <Text mt="xs" color="dark" size="md" tt="uppercase" fw={700}>
              {dataLocal.subject}
            </Text>
          </Center>
          <Space h={20} />
          {/* BOX 1 */}
          <Center>
            <Box
              className={classes.card}
              style={{
                borderRadius: 20,
                boxShadow:
                  'rgba(0, 0, 0, 0.02) 2px 2px 2px 2px, rgba(27, 31, 35, 0.15) 2px 2px 1px 1px',
                overflow: 'auto',
              }}
              w={360}
            >
              <div className={classes.flexCon}>
                <div className={classes.iconBox}>
                  <IconAddressBook opacity="50%" size="3.125rem" />
                </div>
                <div className={classes.itemBox}>
                  <Text color="dark" size="md" fw={500} className={classes.itemTitle}>
                    Data detail
                  </Text>
                  <div className={classes.divItem}>
                    <div className={classes.itemText}>
                      <Text>Nama </Text>

                      <Space w={20} />

                      <Text fw={500}>{dataLocal.nama}</Text>
                    </div>
                    <div className={classes.itemText}>
                      <Text>Donasi </Text>

                      <Space w={20} />

                      <Text fw={500}>
                        <FormatRupiah value={dataLocal.amount} />
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Center>
          <Space h={20} />
          {/* BOX 2 */}
          <Center>
            <Box
              className={classes.card}
              style={{
                borderRadius: 20,
                boxShadow:
                  'rgba(0, 0, 0, 0.02) 2px 2px 2px 2px, rgba(27, 31, 35, 0.15) 2px 2px 1px 1px',

                overflow: 'auto',
              }}
              w={360}
            >
              <div className={classes.flexCon}>
                <div className={classes.iconBox}>
                  <Avatar size={'xl'} src={`/asset/logo/${dataLocal.bank}.png`} />
                </div>
                <Space w={20} />
                <div className={classes.itemBox}>
                  <div className={classes.divItem}>
                    <div className={classes.itemText}>
                      <div>
                        <Text fw={500}>{dataLocal.noReq}</Text>
                        <Space h={10} />
                        <Text size={'xs'}>YAYASAN TAMAN HARAPAN INSAN MULIA</Text>
                      </div>
                      <Flex justify={'flex-end'} align={'center'}>
                        <CopyBtn value={dataLocal.noReq} /> <Text size={'xs'}>Copy</Text>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Center>
          <Space h={20} />
          <Center>
            <Box
              className={classes.card}
              style={{
                borderRadius: 20,
                boxShadow:
                  'rgba(0, 0, 0, 0.02) 2px 2px 2px 2px, rgba(27, 31, 35, 0.15) 2px 2px 1px 1px',

                overflow: 'auto',
              }}
              w={360}
            >
              <div className={classes.flexCon}>
                <div className={classes.iconBox}>
                  <IconMoneybag opacity="50%" size="3.125rem" />
                </div>
                <div className={classes.itemBox}>
                  <div className={classes.divItem}>
                    <div className={classes.itemText}>
                      <div>
                        <Text size={'lg'} fw={500}>
                          <FormatRupiah value={dataLocal.amount} />
                        </Text>
                      </div>
                      <Flex justify={'flex-end'} align={'center'}>
                        <CopyBtn value={dataLocal.amount} /> <Text size={'xs'}>Copy</Text>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Center>
          <Space h={25} />
          {/* KONFIRMASI TRANSFER TEXT */}
          <Flex justify={'center'} align={'center'} m={10}>
            <Text w={360} size={'sm'}>
              Harap transfer sesuai nominal diatas (sampai 3 digit terakhir) agar dapat
              terkonfirmasi otomatis dan kebaikan ini dapat kami teruskan.
            </Text>
          </Flex>
          <Space h={25} />
          {/* BOX 4 */}
          <Center>
            <Box
              className={classes.card}
              style={{
                borderRadius: 20,
                boxShadow:
                  'rgba(0, 0, 0, 0.02) 2px 2px 2px 2px, rgba(27, 31, 35, 0.15) 2px 2px 1px 1px',
                overflow: 'auto',
                backgroundColor: 'rgba(167, 255, 143, 2)',
              }}
              w={360}
            >
              <div className={classes.flexCon}>
                <div className={classes.iconBox}>
                  <IconMessage2 opacity="50%" size="3.125rem" />
                </div>
                <Flex direction={'column'}>
                  <Link
                    style={{ textDecoration: 'none' }}
                    href={'https://wa.me/6282210127321'}
                    target="blank"
                  >
                    <div>
                      <Center>
                        <Text size={'md'} fw={400}>
                          Klik disini untuk
                        </Text>
                      </Center>
                    </div>
                    <div>
                      <Center>
                        <Text size={'md'} fw={500}>
                          Konfirmasi Pembayaran
                        </Text>
                      </Center>
                    </div>
                  </Link>
                </Flex>
                <div></div>
              </div>
            </Box>
          </Center>
          <Space h={20} />
          {/* BOX 5 */}
          <Center>
            <Box
              className={classes.card}
              style={{
                borderRadius: 20,
                boxShadow:
                  'rgba(0, 0, 0, 0.02) 2px 2px 2px 2px, rgba(27, 31, 35, 0.15) 2px 2px 1px 1px',

                overflow: 'auto',
              }}
              w={360}
            >
              <div className={classes.flexCon}>
                <div className={classes.iconBox}>
                  <Icon24Hours opacity="50%" size="3.125rem" />
                </div>
                <div>
                  <Text size={'md'} fw={500}>
                    Transfer sebelum :
                  </Text>
                </div>
                <div>
                  <Text size={'md'} fw={500}>
                    {dataLocal.time}
                  </Text>
                </div>
              </div>
            </Box>
          </Center>
          <Space h={50} />
          {/* ACCORDION ITEM */}
          {/* <Box
            className={classes.card}
            style={{
              borderRadius: 20,
              boxShadow:
                'rgba(0, 0, 0, 0.02) 2px 2px 2px 2px, rgba(27, 31, 35, 0.15) 2px 2px 1px 1px',
              // padding: ' 10px 50px 10px 50px',
              overflow: 'auto',
            }}
            w={360}
          >
            <Center>
              <Text size={'lg'} fw={500}>
                {' '}
                Intruksi Pembayaran{' '}
              </Text>
            </Center>
            <Accordion
            // defaultValue="item-1"
            >
              <Accordion.Item value="item-1">
                <Accordion.Control>{`${bank} Mobile`}</Accordion.Control>
                <Accordion.Panel>
                  <ol>
                    <li> Buka BCA mobile.</li>
                    <li> Masukkan Kode Akses.</li>
                    <li> Pilih menu m-Transfer.</li>
                    <li> Klik Antar Rekening di Daftar Transfer.</li>
                    <li> Daftarkan Nomor Rekening Tujuan.</li>
                    <li> Kembali ke menu Transfer.</li>
                    <li> Klik Antar Rekening di Transfer.</li>
                    <li>
                      {' '}
                      Pilih Daftar Rekening :{' '}
                      <span style={{ color: 'blue' }}>{dataLocal.noReq}</span>.
                    </li>
                    <li>
                      {' '}
                      Masukkan nominal transfer BCA :{' '}
                      <span style={{ color: 'blue' }}>{dataLocal.amount}</span>.
                    </li>
                    <li> Klik Send.</li>
                    <li> Masukkan PIN Mobile BCA.</li>
                    <li> Tunggu transfer BCA berhasil.</li>
                  </ol>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="item-2">
                <Accordion.Control>{`ATM ${bank}`}</Accordion.Control>
                <Accordion.Panel>panel-2</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Box> */}
        </Card>
      </Flex>
      {/* </Container> */}
    </div>
  );
}
