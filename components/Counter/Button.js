import useRQGlobalState from '../../pages/useRQGlobalState';

const ButtonCount = () => {
  const [count, setCount] = useRQGlobalState('count', 0);
  const add = () => {
    setCount(count + 1);
  };
  const subtract = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
    </div>
  );
};

export default ButtonCount;
