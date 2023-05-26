import { ActionIcon, Avatar, CopyButton, Tooltip, createStyles, em } from '@mantine/core';
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
import { useMediaQuery } from '@mantine/hooks';

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
      // padding: ' 10px 50px 10px 50px',
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
    [`@media (max-width: ${em(505)})`]: {
      // justifyContent: 'space-between',
    },
    [`@media (max-width: ${em(281)})`]: {
      display: 'inline-block',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    // [`@media (max-width: ${em(450)})`]: {
    //   justifyContent: 'space-between',
    // },
  },
  // span: {
  //   textIndent: '5px',
  //   display: 'block',
  // },
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
  const [isLoading, setLoading] = useState(false);
  const { classes, cx } = useStyles();
  const largeScreen = useMediaQuery('(min-width: 505em)');

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
      {/* <Container> */}
      <Flex justify={'center'}>
        <Card shadow="lg" m={'0'}>
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

          {/* BOX 1 */}
          <Box
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
                    {/* <label> */}
                    <Text>Nama </Text>
                    {/* </label> */}
                    <Space w={20} />
                    {/* <Text>:&nbsp;</Text> */}
                    <Text fw={500}>{dataLocal.nama}</Text>
                  </div>
                  <div className={classes.itemText}>
                    {/* <label> */}
                    <Text>Donasi </Text>
                    {/* </label> */}
                    <Space w={20} />
                    {/* <Text>:&nbsp;</Text> */}
                    <Text fw={500}>
                      <FormatRupiah value={dataLocal.amount} />
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </Box>

          <Space h={20} />
          {/* BOX 2 */}
          <Box
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
            {/* <Flex justify={'center'} align={'center'}> */}
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
            {/* </Flex> */}
          </Box>
          <Space h={20} />
          {/* BOX 3 */}
          <Box
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
            {/* <Flex justify={'space-between'} align={'center'}> */}
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
            {/* </Flex> */}
          </Box>
          <Space h={25} />
          {/* KONFIRMASI TRANSFER TEXT */}
          <Flex justify={'center'} align={'center'}>
            <Text w={360} size={'xs'}>
              Harap transfer sesuai nominal diatas (sampai 3 digit terakhir) agar dapat
              terkonfirmasi otomatis dan kebaikan ini dapat kami teruskan.
            </Text>
          </Flex>
          <Space h={25} />
          {/* BOX 4 */}
          <Box
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
            {/* <Flex justify={'space-between'} align={'center'}> */}
            <div className={classes.flexCon}>
              <div className={classes.iconBox}>
                <IconRotateClockwise opacity="50%" size="3.125rem" />
              </div>
              <div>
                <Text size={'lg'} fw={500}>
                  Transfer sebelum :
                </Text>
              </div>
              <div>
                <Text size={'lg'} fw={500}>
                  {dataLocal.time}
                </Text>
              </div>
            </div>
            {/* </Flex> */}
          </Box>
        </Card>
      </Flex>
      {/* </Container> */}
    </div>
  );
}
