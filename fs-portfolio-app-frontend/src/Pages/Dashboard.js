import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { fetchProtectedInfo, onLogout } from '../API/auth';
import { UserContext } from '../App';

const Dashboard = () => {
    const [loading, setLoading] = useState(true)
    const [protectedData, setProtectedData] = useState(null)

    console.log('Dashboard localstorage isAuth state:',localStorage.getItem('isAuth'))
    console.log('Dashboard useContext auth state:',localStorage.getItem('isAuth'))

    const logout = async () => {
        try {
            await onLogout()
            localStorage.removeItem('isAuth')
            window.location.reload();
        } catch (error) {
            console.log(error.response)
        }
    }

    const protectedInfo = async () => {
        try {
            const { data } = await fetchProtectedInfo()

            setProtectedData(data.info)
            setLoading(false)
        } catch (error) {
            logout()
        }
    }

    useEffect(() => {
        protectedInfo()
    })

    return loading ? (
        <div>
            <h1>Loading...</h1>
        </div>
    ) : (
        <div>
            <h1>Dashboard</h1>
            <h2>{protectedData}</h2>

            <button onClick={() => logout()} className='logout-button'>Log Out</button>
        </div>
    )
};

export default Dashboard;