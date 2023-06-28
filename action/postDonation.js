import APIClient from '../services/api-client';
import { useRouter } from 'next/router';
import { useSetAtom } from 'jotai';
import { loadingAtom } from '../customComp/cardDonasi';

// const apiClient = new APIClient('http://localhost:3005/api/contact');
const apiClient = new APIClient('/api/contact');

const postDonation = () => {
  const setCount = useSetAtom(loadingAtom);
  const router = useRouter();
  // time data
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  // uniq id
  const randomNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);
  const uniqId = `${day}${month}${year}`;
  return {
    mutationFn: (data) => {
      return apiClient.post(data);
    },
    onError: (error, variables, context) => {
      //handle error
      console.log(error);
    },
    onSuccess: (data, variables, context) => {
      //handle success
      router.push(
        {
          pathname: `/invoice/INV-${uniqId}-${randomNumber}`,
        },
        `/invoice/INV-${uniqId}-${randomNumber}`
      );
      setCount(false);
    },
  };
};

export default postDonation;
