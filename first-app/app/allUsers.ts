export default async function allUsers() {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
   return await response.json()
}
