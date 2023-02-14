import React, { useState } from 'react'
import useJsonFetch from '../hooks/useJsonFetch';
import Details from './Details';


function List() {
    const [{ data, loading, error }] = useJsonFetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json");
    const [info, setInfo] = useState();

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (loading) {
        return <div>Загрузка...</div>;
    } else if (data !== undefined) {
        return (
            <div>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            <button onClick={() => {
                                setInfo({
                                    id: item.id,
                                    name: item.name
                                })
                            }}>
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
                {info && <Details info={info} />}
            </div>
        );
    }
}

export default List;