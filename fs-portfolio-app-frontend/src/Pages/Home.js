import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { UserContext } from '../App';

const Home = () => {
    const AS = useContext(UserContext)

    return (
        <>
        {console.log(AS.auth)}
        {
            AS.auth ? <>User is Logged</>: <>User is not Logged</>
        }
        </>
    )
}
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('')
//   const [info, setInfo] = useState(false)
//   const [formData, setFormData] = useState ({
//     name: '',
//     email: '',
//     password: ''
//   })
//   const API = process.env.REACT_APP_API_URL

//   const handleInputChange = event => {
//     setFormData({
//         ...formData,
//         [event.target.name]: event.target.value
//     })
//   }

//   console.log(formData)
//   const handleSubmit = event => {
//     event.preventDefault()
//     axios
//     .post(`${API}/users/login`, formData)
//     .then(() => {

//         console.log(formData)
//         console.log('signing in !')
//     })
//     .catch((error) => console.log(error))

//     }

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//         <div>
//             <label htmlFor="email">Email: </label>
//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     />
//         </div>
//         <div>
//             <label htmlFor="password">Password: </label>
//                 <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     />
//         </div>
//         <button type="submit">Login</button>
//     </form>
// </>
//   );
// }

export default Home;
