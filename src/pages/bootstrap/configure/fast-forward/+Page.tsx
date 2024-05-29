import { useState } from "react";

import { platform } from "@tauri-apps/plugin-os";
import { navigate } from "vike/client/router";

export const Page = () => {
  const [fastForward, setFastForward] = useState(
    window?.localStorage?.getItem?.("fast-forward") === "true",
  );
  return (
    <>
      <header>
        <h1>Install Phi Tools</h1>
      </header>
      <main className="card">
        <h2>Auto Fast-Forward Installation</h2>
        <p>
          Phi Tools depends on several other tools to work. This installer will
          guide you through the installation of these dependencies and provide
          information on what each tool does.
        </p>
        <p>
          If you would like to skip the explanation and just install the tools,
          the installer has a fast-forward mode that will fast-forward through
          informational prompts where possible.
        </p>
        <form>
          <fieldset
            style={{
              padding: "1.0rem 0",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              gap: "1.0rem",
            }}
          >
            <input
              style={{
                fontSize: "1.7rem",
                width: "1.7rem",
                height: "1.7rem",
                cursor: "pointer",
              }}
              type="checkbox"
              id="fast-forward"
              checked={fastForward}
              onChange={(e) => {
                setFastForward(e.target.checked);
                window.localStorage.setItem(
                  "fast-forward",
                  String(e.target.checked),
                );
              }}
            />
            <label
              style={{
                fontSize: "1.7rem",
                cursor: "pointer",
              }}
              htmlFor="fast-forward"
            >
              Enable fast-forward mode
            </label>
          </fieldset>
          <output>
            <p
              style={{
                fontSize: "1.7rem",
                marginTop: "1.0rem",
              }}
            >
              Fast-forward mode is{" "}
              {fastForward ? (
                <span style={{ color: "green" }}>enabled</span>
              ) : (
                <span style={{ color: "red" }}>disabled</span>
              )}
              .
            </p>
          </output>
        </form>
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
          onClick={() => {
            window.history.back();
          }}
        >
          Back
        </button>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
          }}
          onClick={async () => {
            return {
              macos: () => navigate("/bootstrap/install/brew"),
              windows: () => navigate("/bootstrap/install/choco"),
              linux: () => navigate("/bootstrap/install/linux"),
              dragonfly: () => navigate("/bootstrap/unsupported"),
              ios: () => navigate("/bootstrap/unsupported"),
              freebsd: () => navigate("/bootstrap/unsupported"),
              netbsd: () => navigate("/bootstrap/unsupported"),
              openbsd: () => navigate("/bootstrap/unsupported"),
              solaris: () => navigate("/bootstrap/unsupported"),
              android: () => navigate("/bootstrap/unsupported"),
            }[await platform()]();
          }}
        >
          Next
        </button>
      </footer>
    </>
  );
};
