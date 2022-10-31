import { Link } from 'react-router-dom'

const NavigationBar = () => {

    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/formpage">New Rollercoaster</Link>
            </nav>
        </header>
    )
}

export default NavigationBar