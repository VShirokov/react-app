import axios from 'axios';

export const handleCreateUser = () => {
    axios.post(
        'http://localhost:3636/api/users',
        {
            username: 'Fred',
            email: 'Flintstone',
            password: '1234'
        }
    )
    .then((res)=>{ console.log(res); })
    .catch((e)=>{ console.log('error - ' + e); })
    .finally(console.log(`we try to create user`));
};

export const handleGetUser = () => {
    axios.get('http://localhost:3636/api/users/')
    .then((res)=>{ console.log(res); })
    .catch((e)=>{ console.log('error - ' + e); });
};

export const handleUpdateUser = (id) => {
    const uid = "3d7aa484-1d01-4f71-9194-4a4ace1fa371";
    axios.patch(
        `http://localhost:3636/api/users/${uid}`,
        {
            username: 'Eva'
        }
    )
    .then((res)=>{ console.log(res); })
    .catch((e)=>{ console.log('error in axios request - ' + e); });
};

export const handleDeleteUser = () => {
    axios.delete('http://localhost:3636/api/users/3d7aa484-1d01-4f71-9194-4a4ace1fa371')
    .then((res)=>{ console.log(res); })
    .catch((e)=>{ console.log('error in axios request - ' + e); });
};
