import Login from './components/Login';
import Messanger from './components/Messanger';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

	const [data, setData] = useState([])

	const [updateState, setUpdateState] = useState(0)


	const getAll = async () => {
        try {
			let arr = []
            const res = await axios.get(`http://localhost:5000/api/auth/allmessages`,

                    {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
        )

			arr.unshift(res.data)
            setData(...arr)
            return res.data

        } catch (e) {
            console.log(e);
        }
    }

	const refresh = () => {
		setUpdateState(updateState+1)
	}


	useEffect(() => {

		const interval = setInterval(() => {
			getAll()
			console.log('hey');
		  }, 3000);
		  return () => clearInterval(interval);
	}, [updateState])

	return (
		<>
			<Header/>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/chat" element={<Messanger data={data} refresh={refresh}/>} />
			</Routes>
		</>
	);
}

export default App;
