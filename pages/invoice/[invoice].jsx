import { ActionIcon, Avatar, CopyButton, Tooltip } from '@mantine/core';
import { FormatRupiah } from '@arismun/format-rupiah';
import {
  IconAddressBook,
  IconCheck,
  IconCopy,
  IconMoneybag,
  IconRotateClockwise,
} from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { Box, Card, Center, Container, Flex, Space, Text } from '@mantine/core';

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
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const data = localStorage.getItem('dataForm');
    if (data !== null) {
      console.log('data local : ', data);
      setDataLocal(JSON.parse(data));
    }
    setLoading(false);
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  if (!dataLocal) return <h1>No profile data</h1>;

  console.log('datalocal', dataLocal);

  return (
    <div>
      <Container>
        <Flex justify={'center'}>
          <Card shadow="lg" padding="xl">
            <Center>
              <Text weight={500} size="lg" mt="md">
                INVOICE
              </Text>
            </Center>
            <Center>
              <Text mt="xs" color="dark" size="sm">
                Terimakasih {dataLocal.nama} atas Donasi yang akan anda berikan pada program :
              </Text>
            </Center>
            <Center>
              <Text mt="xs" color="dark" size="md" tt="uppercase" fw={700}>
                Berbagi kebaikan
              </Text>
            </Center>
            <Space h={20} />
            <Box
              style={{
                borderRadius: 20,
                boxShadow:
                  'rgba(0, 0, 0, 0.02) 2px 2px 2px 2px, rgba(27, 31, 35, 0.15) 2px 2px 1px 1px',
                padding: ' 10px 50px 10px 50px',
                overflow: 'auto',
              }}
              w={360}
            >
              <Flex justify={'flex-start'} align={'center'}>
                <IconAddressBook opacity="50%" size="3.125rem" />
                <Space h={10} />
                <Flex justify={'center'} style={{ marginLeft: '50px' }}>
                  <div>
                    <Text mt="xs" color="dark" size="md" tt="inherit" fw={500}>
                      Data detail
                    </Text>
                    <Space h={10} />

                    <Flex align={'center'}>
                      <label>Nama:</label>
                      <Space w={10} /> <Text fw={500}>{dataLocal.nama}</Text>
                    </Flex>

                    <Flex align={'center'}>
                      <label>Donasi:</label>
                      <Space w={10} />
                      <Text fw={500}>
                        <FormatRupiah value={dataLocal.amount} />
                      </Text>
                    </Flex>
                  </div>
                </Flex>
              </Flex>
            </Box>
            <Space h={20} />
            <Box
              style={{
                borderRadius: 20,
                boxShadow:
                  'rgba(0, 0, 0, 0.02) 2px 2px 2px 2px, rgba(27, 31, 35, 0.15) 2px 2px 1px 1px',
                padding: ' 10px 50px 10px 50px',
                overflow: 'auto',
              }}
              w={360}
            >
              <Flex justify={'center'} align={'center'}>
                <Avatar size={'xl'} src={`/asset/logo/${dataLocal.bank}.png`} />
                {/* <p>{dataLocal.bank}</p> <Space w={20} /> */}
                <Space w={20} />
                <div>
                  {/* <Flex justify={'space-between'}> */}
                  <Text fw={500}>{dataLocal.noReq}</Text>
                  {/* </Flex> */}
                  <Text size={'sm'}>YAYASAN TAMAN HARAPAN INSAN MULIA</Text>
                </div>
                <Flex justify={'flex-end'} align={'center'}>
                  <CopyBtn value={dataLocal.noReq} /> <Text size={'xs'}>Copy</Text>
                </Flex>
              </Flex>
            </Box>
            <Space h={20} />
            <Box
              style={{
                borderRadius: 20,
                boxShadow:
                  'rgba(0, 0, 0, 0.02) 2px 2px 2px 2px, rgba(27, 31, 35, 0.15) 2px 2px 1px 1px',
                padding: ' 10px 50px 10px 50px',
                overflow: 'auto',
              }}
              w={360}
            >
              <Flex justify={'space-between'} align={'center'}>
                <IconMoneybag opacity="50%" size="3.125rem" />
                <div>
                  <Text size={'lg'} fw={500}>
                    <FormatRupiah value={dataLocal.amount} />
                  </Text>
                </div>
                <Flex justify={'flex-end'} align={'center'}>
                  <CopyBtn value={dataLocal.amount} /> <Text size={'xs'}>Copy</Text>
                </Flex>
              </Flex>
            </Box>
            <Space h={10} />
            <Flex justify={'center'} align={'center'}>
              <Text w={360} size={'xs'}>
                Harap transfer sesuai nominal diatas (sampai 3 digit terakhir) agar dapat
                terkonfirmasi otomatis dan kebaikan ini dapat kami teruskan.
              </Text>
            </Flex>
            <Box
              style={{
                borderRadius: 20,
                boxShadow:
                  'rgba(0, 0, 0, 0.02) 2px 2px 2px 2px, rgba(27, 31, 35, 0.15) 2px 2px 1px 1px',
                padding: ' 10px 50px 10px 50px',
                overflow: 'auto',
              }}
              w={360}
            >
              <Flex justify={'space-between'} align={'center'}>
                <IconRotateClockwise opacity="50%" size="3.125rem" />
                <div>
                  <Text size={'lg'} fw={500}>
                    {/* <FormatRupiah value={dataLocal.amount} /> */}
                    Transfer sebelum :
                  </Text>
                </div>
                <div>
                  <Text size={'lg'} fw={500}>
                    {/* <FormatRupiah value={dataLocal.amount} /> */}
                    {dataLocal.time}
                  </Text>
                  {/* {tomorrow} */}
                </div>
                {/* <Flex justify={'flex-end'} align={'center'}>
                  <CopyBtn value={dataLocal.amount} /> <Text size={'xs'}>Copy</Text>
                </Flex> */}
              </Flex>
            </Box>
          </Card>
        </Flex>
      </Container>
    </div>
  );
}
