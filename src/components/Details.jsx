import useJsonFetch from "../hooks/useJsonFetch";

function Details({ info }) {
    const [{ data, loading, error }] = useJsonFetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`);

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (loading) {
        return <div>Загрузка...</div>;
    } else if (data !== undefined) {
        return (
            <div>
                <img src={data.avatar} alt="avatar" />
                <div>{data.name}</div>
                <div>City: {data.details.city}</div>
                <div>Company: {data.details.company}</div>
                <div>Position: {data.details.position}</div>
            </div>
        );
    }
}

export default Details;