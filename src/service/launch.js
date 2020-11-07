import axios from 'axios';

// const baseUrl='http://localhost:3001/api/hackthon'
const baseUrl='/api/hackthon'
// const start=(data)=>{
//     const req=axios.post(baseUrl,data)
//     return req.then(res=>res.data)
// }
const start=()=>{
    const req=axios.get(baseUrl)
    return req.then(res=>res.data)
}

export default {start}