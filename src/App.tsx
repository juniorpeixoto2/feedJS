import Header from "./components/Header";
import Post from "./components/Post";
import style from "./App.module.css";
import Sidebar from "./components/Sidebar";

import "./global.css";

const post = [
  {
    id: 1,
    author: {
      avatar:
        "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50",
      name: "Joao",
      role: "Editor",
    },
    content: {
      text: "Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Integer vulputate sem a nibh rutrum consequat.",
    },
    publishedAt: new Date("2023-01-01 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatar:
        "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50",
      name: "Jose",
      role: "Escritor",
    },
    content: {
      text: "Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Integer vulputate sem a nibh rutrum consequat.",
    },
    publishedAt: new Date("2023-01-10 20:00:00"),
  },
  {
    id: 3,
    author: {
      avatar:
        "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50",
      name: "Maria",
      role: "Editora",
    },
    content: {
      text: "Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Integer vulputate sem a nibh rutrum consequat.",
    },
    publishedAt: new Date("2023-01-11 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar></Sidebar>
        <main>
          {post.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
