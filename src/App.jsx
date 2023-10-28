import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
    avatar: faker.image.urlLoremFlickr({ category: 'abstract' })
  };
}
createRandomPost()

function App() {
  const [posts,setPosts] = useState(()=> Array.from({length:30},()=> createRandomPost()));


  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  const [searchQuery, setSearchQuery] = useState([]);
  console.log(searchQuery);

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) => `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

      
  

  return (
    <section>
      {/* <button
       
        className="btn-fake-dark-mode"
      >
        "☀️" : "🌙"
      </button> */}

      <Header  
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        posts={searchedPosts}
        />
      <Main posts={searchedPosts} onAddPost={handleAddPost}/>
     
      <Footer />
    </section>
  );
}

function Header({searchQuery,setSearchQuery,posts}) {
  return (
    <header>
      <h1>
        <span>🇮🇶</span>Blog Posts React
      </h1>
      <div>
        <Results  posts={posts}/>
        <SearchPosts
         searchQuery={searchQuery}
         setSearchQuery={setSearchQuery}
        />
        <button >Clear posts</button>
      </div>
    </header>
  );
}

function SearchPosts({searchQuery,setSearchQuery}) {
  return (
    <input
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

function Results({ posts }) {
  return <p>🚀 {posts.length} atomic posts found</p>;
}

function Main({posts,onAddPost}) {
  return (
    <main>
      <FormAddPost  onAddPost={onAddPost}/>
      <Posts posts={posts}/>
    </main>
  );
}

function Posts({posts}) {
  return (
    <section>
      <List  posts={posts}/>
    </section>
  );
}

function FormAddPost({onAddPost}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = function (e) {
    e.preventDefault();
   
    onAddPost({ title, body, avatar });
    setTitle("");
    setBody("");
    setAvatar(null);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
         value={title}
         onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      
      <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
      />
      <input
       type="file"
       placeholder="Post title"
       onChange={e=> setAvatar(URL.createObjectURL(e.target.files[0]))}
     />
      <button>Add post</button>
    </form>
  );
}

function List({posts}) {
  return (
    <ul>
       {posts.map(function(value,index){
        return <li key={index}> <img  src={value.avatar} alt="" /> <h3>{value.title}</h3> <p>{value.body}</p> </li>
       })}
    </ul>
  );
}



function Footer() {
  return <footer>&copy; by The Atomic Blog ✌️</footer>;
}

export default App;
