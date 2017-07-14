async function blogService() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');

  return await response.json();
}

export default blogService;
