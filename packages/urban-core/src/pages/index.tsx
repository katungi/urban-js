import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1 style={{color: '#000'}}>Home</h1>
            <Link to={'/about'}>About</Link>
        </div>
    )
}