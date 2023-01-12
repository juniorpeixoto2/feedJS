import style from "./Header.module.css";
import vite from "../assets/vite.svg";

export default function Header() {
  return (
    <div>
      <header className={style.header}>
        <img src={vite} alt="" />
      </header>
    </div>
  );
}
