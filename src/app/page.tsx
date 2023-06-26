import {LoginButton} from "../components/button.component";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>
        <LoginButton/>
      </div>
    </main>
  );
}
