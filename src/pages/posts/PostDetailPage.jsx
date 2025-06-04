import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetailPage() {
  const { id } = useParams();

  const [post, setPost] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`).then((res) => {
      setPost(res.data.data);
    });
  }, []);

  console.log(post);

  return (
    <div>
      <div className="container text-center">
        {post ? (
          <>
            <div className="container text-center">
              <h4>{post.title}</h4>

              <img src={post.image} alt="" />

              <p className="text-center">{post.content}</p>

              <ul>
                {post.tags.map((tag) => {
                  <li>{tag}</li>;
                })}
              </ul>
            </div>
          </>
        ) : (
          <h1>Caricando la pizza</h1>
        )}
      </div>
    </div>
  );
}
