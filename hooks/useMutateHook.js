import { useMutation } from '@tanstack/react-query';

const useMutateHook = (props) => {
  return useMutation(props);
};

export default useMutateHook;
