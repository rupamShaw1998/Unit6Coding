import { useState ,useEffect } from 'react'
import './App.css'

function App() {

  const [post, setpost] = useState([{}]);
  const [isFetching, setIsFetching] = useState(false);
  let [page , setPage] = useState(1)
  let limit = 5;

  const getpost = async () => {
    setIsFetching(true)
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );
    const data = await response.json();
    setpost([...post, ...data]);
    setIsFetching(false)
  };

  function getMorepost() {
    setTimeout(() => {
      setPage(page++)
      getpost();
    }, 3000);
  }

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setIsFetching(true);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(
    () => {
      getpost();
    }, //eslint-disable-next-line
    []
  );
  useEffect(() => {
    if (!isFetching) return;
    getMorepost();
  }, [isFetching]);

  return (
  
    <div className="App">
      {post.map((post, index) => (
        <div key={index} className="post">
          <div className="number">{post.id}</div>
          <div className="post-info">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
          </div>
        </div>
      ))}
      {isFetching && (
        <div className="loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      )}
    </div>
  )
}

export default App