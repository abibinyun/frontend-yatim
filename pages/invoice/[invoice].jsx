import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import { Flex } from '@mantine/core';

export default function Invoice() {
  // const router = useRouter();
  // const { invoice, amount, message, nama, bank, noReq } = router.query;
  const [dataLocal, setDataLocal] = useState({});

  useEffect(() => {
    const data = localStorage.getItem('dataForm');
    // const datainv = localStorage.getItem('inv');
    if (data !== null) {
      console.log('data local : ', data);
      setDataLocal(JSON.parse({ data }));
      // setDataLocalinv(JSON.parse(datainv));
    }
  }, []);

  console.log('local state', dataLocal);
  // console.log('local state inv', dataLocalinv);

  return (
    <div>
      <Flex justify={'center'}>
        <div>
          <h1>invoice page</h1>
          <ul>
            <li>{dataLocal.data.id}</li>
            <li>{dataLocal.data.amount}</li>
            <li>{dataLocal.data.message}</li>
            <li>{dataLocal.data.nama}</li>
            <li>{dataLocal.data.bank}</li>
            <li>{dataLocal.data.noReq}</li>
          </ul>
        </div>
      </Flex>
    </div>
  );
}
