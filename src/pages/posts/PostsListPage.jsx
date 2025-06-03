import axios from "axios";
import { useEffect, useState } from "react";

export default function PostsListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setPosts(res.data.data.posts);
    });
  }, []);

  console.log(posts);
  return (
    <>
      <div className="container text-center">
        <h2>I Post</h2>
        <div className="row">
          {posts.map((post) => (
            <div className="col-3" key={post.id}>
              <div className="card">
                <div className="card-media">
                  <img src={post.image} alt="" />
                </div>
                <div className="card-header">{post.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
