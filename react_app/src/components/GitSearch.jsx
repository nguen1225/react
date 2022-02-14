import { useEffect, useState } from 'react';

const GitSearch = () => {
    const [name, setName] = useState('')
    const [id, setId] = useState('nguen1225')
    const ids = [
        'nguen1225',
        'gaearon',
        'aws',
        'google',
        'facebook'
    ]
    const getRandomId = () => {
        const _id = ids[Math.floor(Math.random() * ids.length)]
        setId(_id)
    }

    

    console.log(`https://api.github.com/users/${id}`);

    useEffect(() => {
        fetch(`https://api.github.com/users/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setName(data.name)
            })
            .catch(error => {
                console.error(error)
            })
    },[id])

    return (
        <>
            <p>
                {id}の、GitHub上の名前は{name}です。
            </p>
            <button onClick={getRandomId}>
                IDを変更
            </button>
        </>
    )
}

export default GitSearch