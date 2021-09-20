import request from 'superagent';

export const fetchAPI = async (url, method, userJson ) => {
    console.log(url, method, userJson);
    if(method === 'GET') {
        const postRes = await request.get(url);
        return postRes.body;
    }
    if(method === 'POST') {
        const postRes = await request.post(url).send(userJson)
        return postRes.body;
    }
    if(method === 'PUT') {
        const putRes = await request.put(url).send(userJson);
        return putRes.body;
    }
    if(method === 'PATCH') {
        const patchRes = await request.patch(url).send(userJson);
        return patchRes.body;
    }
    if(method === 'DELETE') {
        const deleteRes = await request.delete(url);
        return deleteRes.body;
    }
};




// console.log(url, method, userJson);
// if(method === 'GET') {
//     const getRes = await fetch(url, {
//         method: method,
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         }
//     })
//     const json = await getRes.json();
//     console.log(json);
//     return json;

// }