import { useQuery } from '@tanstack/react-query';
import client from '../client';
const useRQGlobalState = (key, initialData) => [
  useQuery([key], () => initialData, { enabled: false, initialData }).data,
  (value) => client.setQueriesData([key], value),
];

export default useRQGlobalState;
