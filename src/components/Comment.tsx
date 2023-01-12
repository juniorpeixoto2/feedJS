import { Trash, TrashSimple } from "phosphor-react";
import { useState } from "react";
import style from "./Comment.module.css";

interface CommentsProps {
  deleteComment: (comment: String) => void;
  content: String;
}

export function Comment({ content, deleteComment }: CommentsProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    deleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={style.comment}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
        width="100"
      />
      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>João da Silva</strong>
              <time dateTime="2022-01-01 00:00:00">Há uma Hora</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>Aplaudir</button>
          <span>{likeCount}</span>
        </footer>
      </div>
    </div>
  );
}
