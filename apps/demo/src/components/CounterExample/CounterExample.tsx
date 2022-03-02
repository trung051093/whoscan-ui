import { useAppDispatch, useAppSelector } from "../../store";
import { increment, selectCount } from "../../store/counter/coutner.slice";

const CounterExample = () => {
    const counter = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

    return (
        <>
        <button onClick={() => dispatch(increment())}>counter: {counter}</button>
        </>
    )
}

export default CounterExample;