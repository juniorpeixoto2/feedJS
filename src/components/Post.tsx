import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, useState } from "react";
import { Comment } from "./Comment";
import style from "./Post.module.css";

interface Post {
  author: {
    name: string;
    role: string;
  };
  content: {
    text: String;
  };
  publishedAt: Date;
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  // const dateAt = new Intl.DateTimeFormat("pt-BR", {
  //   day: "2-digit",
  //   month: "long",
  //   year: "numeric",
  // }).format(post.publishedAt);
  const dateAt = format(post.publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBR,
  });

  const datePast = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [comments, setComments] = useState(["muito bom!"]);
  const [newCommentText, setNewCommentText] = useState("");

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value);
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function deleteComment(content: String) {
    const commentsWithoutDeleted = comments.filter((comment) => {
      return comment !== content;
    });

    setComments(commentsWithoutDeleted);
  }

  function handleNewCommentInvalid(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Obrigatório");
  }

  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <img
            className={style.avatar}
            src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            alt=""
          />
          <div className={style.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time dateTime="2022-01-01 00:00:00">
          <div>{dateAt}</div>
          {datePast}
        </time>
      </header>
      <div className={style.content}>
        <p>{post.content.text}</p>
        <p>
          <a>#hastag</a>
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={style.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea
          onChange={handleNewCommentChange}
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
        />

        <button type="submit" disabled={newCommentText.length === 0}>
          Publicar
        </button>
      </form>

      <div className={style.commentList}>
        {comments.map((comments) => {
          return (
            <Comment
              key={comments}
              content={comments}
              deleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
