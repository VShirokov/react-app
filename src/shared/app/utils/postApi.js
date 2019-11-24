import axios from 'axios';

export const handleCreatePost = () => {
    axios.post(
        'http://localhost:3636/api/posts',
        {
            title: 'What i think about my api',
            content: 'Flintstoneolololdo roej ifv ujefhiv hefi hv uirehvb hrbv uirbv uiyebr ',
            userId: '3d7aa484-1d01-4f71-9194-4a4ace1fa371',
            author: 'Fred'
        }
    )
    .then((res)=>{ console.log(res); })
    .catch((e)=>{ console.log('error - ' + e); })
    .finally(console.log(`we try to create post`));
};

export const handleGetPost = () => {
    axios.get('http://localhost:3636/api/posts/')
    .then((res)=>{ console.log(res); })
    .catch((e)=>{ console.log('error in axios request - ' + e); });
};

export const handleUpdatePost = (pid, updates) => {
    axios.patch(
        `http://localhost:3636/api/posts/${pid}`,
        { ...updates }
    )
    .then((res)=>{ console.log(res); })
    .catch((e)=>{ console.log('error in axios request - ' + e); });
};

export const handleDeletePost = (pid) => {
    axios.delete(`http://localhost:3636/api/posts/${pid}`)
    .then((res)=>{ console.log(res); })
    .catch((e)=>{ console.log('error in axios request - ' + e); });
};
