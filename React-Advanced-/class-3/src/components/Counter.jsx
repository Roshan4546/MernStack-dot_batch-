import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/CounterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-6">Redux Counter</h1>

            <div className="flex items-center gap-4 bg-gray-800 px-6 py-4 rounded-2xl shadow-lg">
                {/* Decrement */}
                <button
                    onClick={() => dispatch(decrement())}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-xl text-lg font-semibold transition"
                >
                    ➖
                </button>

                {/* Value */}
                <div className="text-2xl font-bold w-12 text-center">{count}</div>

                {/* Increment */}
                <button
                    onClick={() => dispatch(increment())}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-xl text-lg font-semibold transition"
                >
                    ➕
                </button>
            </div>

            {/* Reset */}
            <button
                onClick={() => dispatch(reset())}
                className="mt-6 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-xl text-lg font-semibold transition"
            >
                Reset
            </button>
        </div>
    )
}

export default Counter
