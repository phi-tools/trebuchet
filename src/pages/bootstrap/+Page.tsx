import { useState } from "react";
import { navigate } from "vike/client/router";
import "./Page.css";

export const Page = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>Install Phi Tools</h1>
      </header>
      <main className="card">
        <p>
          Cyberactivism is a form of activism that uses the internet and digital
          media to create change. Phi tools aim to make it simple to participate
          in cyperactivism campaigns and digital direct action.
        </p>

        <ol
          style={{
            textAlign: "left",
          }}
        >
          <li>
            Install the necessary dependencies to download the project source
            code.
          </li>
          <li>
            Guide you through the process of creating a GitHub account if you
            don't already have one.
          </li>
          <li>Download the project from GitHub.</li>
          <li>Install the project dependencies.</li>
          <li>Run the project locally on your computer.</li>
        </ol>

        <p>
          Press "Install" to begin the installation process, or "Cancel" to exit
          the wizard.
        </p>
      </main>
      <footer className="actions">
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            console.log("close window");
            window.close();
            return false;
          }}
        >
          Cancel
        </button>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/bootstrap/configure/fast-forward");
          }}
        >
          Next
        </button>
      </footer>
    </>
  );
};
