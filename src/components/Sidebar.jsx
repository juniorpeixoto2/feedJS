import style from "./Sidebar.module.css";
export default function Sidebar() {
  return (
    <div>
      <aside className={style.sidebar}>
        <img
          className={style.cover}
          src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
          alt=""
          width="100"
        />
        <div className={style.profile}>
          <strong>Joao da Silva</strong>
          <strong>Web Developer</strong>
        </div>

        <footer>
          <a href="">Editar Perfil</a>
        </footer>
      </aside>
    </div>
  );
}
