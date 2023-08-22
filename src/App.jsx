import { useLocation } from 'react-router-dom'
import Router from '~/router/Router'
import { useEffect } from 'react'

function App() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return <Router />
}

export default App