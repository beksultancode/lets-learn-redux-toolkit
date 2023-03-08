import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../feature/counterSlice";

function Counter() {
    // get value from redux use hook useSelector()
    const count = useSelector((state) => state.counter.count)

    // UseDispatch helps us to execute reducers which is manages state
    const dispatch = useDispatch();

    return (
        <div className="counter">
            <h1>{count}</h1>
            <button className="btn" onClick={() => dispatch(increment())}>+</button>
            <button className="btn" onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default Counter;