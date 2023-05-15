export default async function getUser() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

    if(!res.ok) throw new Error('failed to fetch user');
    return res.json();
}