import useRQGlobalState from '../../pages/useRQGlobalState';

const CounterLabel = () => {
  const [count] = useRQGlobalState('count', 0);
  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default CounterLabel;
