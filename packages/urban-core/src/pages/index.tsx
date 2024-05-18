import { Link } from "react-router-dom";
import { useSignal } from "../../utils/signals"

export default function Home() {
    const count = useSignal(0);

    return (
        <div>
            <span className="text-underline">Routing Demo</span>
            <h3 style={{ color: '#000' }}>Home</h3>
            <Link to={'/about'}>About</Link>

            <div>
                <span className="text-underline mb-8">Signals Demo</span>
                <p>
                    <>Value: {count}</>
                </p>
                <button onClick={() => count.value++}>Increment</button>
                <button onClick={() => count.value--}>Decrement</button>
            </div>
        </div>
    )
} 