import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Conversation from './pages/Conversation'
import Inbox from './pages/Inbox'
import Login from './pages/Login'
import Register from './pages/Register'
import useAuthCheck from './hooks/useAuthCheck'
import Private from './private/Private'
import Public from './private/Public'

function App() {
    const authChecked = useAuthCheck()

    return !authChecked ? (
        <div>Checking authentication....</div>
    ) : (
        <Router>
            <Routes>
                <Route path='/' element={ <Public><Login /></Public> } />
                <Route path='/register' element={ <Public><Register /> </Public> } />
                <Route path='/inbox' element={ <Private><Conversation /></Private> } />
                <Route path='/inbox/:id' element={ <Private><Inbox /></Private> } />
            </Routes>
        </Router>
    )
}

export default App
