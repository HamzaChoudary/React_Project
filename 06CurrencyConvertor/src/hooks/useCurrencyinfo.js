// this is also hook
// function hello() {
//     return []
// }

import { useEffect, useState } from "react";

// Here we make hook wanna call API when we need 

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json()) /*in (then) we get callback*/ 
        .then((res) => setData(res[currency]))
        console.log(data);
    },[currency])   
    console.log(data);
    
    return data
}

export default useCurrencyInfo