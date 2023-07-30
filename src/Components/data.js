import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const Comp1 = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setData(response.data)
            })
    }, [])

    return (
        <div>
            {
                data.map(({ id, title }) => {
                    return (
                        <div key={id}>
                            {title}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Comp1