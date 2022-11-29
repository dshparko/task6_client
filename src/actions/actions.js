import axios from 'axios'


export const registration = async (name) => {
    try {
        const response = await axios.post(`https://task6server-production-5502.up.railway.app//api/auth/registration`, {
            name
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const send = async (sender, recipient, title, content, stime) => {
    try {
        const response = await axios.post(`https://task6server-production-5502.up.railway.app//api/auth/send`, {
            sender, recipient, title, content, stime
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}

// export const registration =  (name) => {
//     return async dispatch => {
//         try {
//             const response = await axios.post(`http://https://task6server-production-5502.up.railway.app//api/auth/registration`, {
//                 name
//             })
//             dispatch(setUser(response.data.user))
//         } catch (e) {
//             alert(e.response.data.message)
//         }
//     }
// }