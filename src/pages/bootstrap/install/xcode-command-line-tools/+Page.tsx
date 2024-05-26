export const Page = () => {
  return (
    <>
      <header>
        <h1>Install Phi Tools</h1>
      </header>
      <main
        className="card"
        style={{
          position: "relative",
        }}
      >
        <h2>Install XCode Command Line Tools</h2>
        <p>
          To install Phi Tools, you need to have XCode Command Line Tools
          installed. XCode command line tools are a set of additional tools that
          are required to compile and build software on macOS.
        </p>
      </main>
      <footer className="actions">
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "1rem",
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            window.history.back();

            return false;
          }}
        >
          Back
        </button>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "1rem",
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
          }}
          onClick={async (e) => {
            e.stopPropagation();
            const response = await fetch(
              "/api/install-xcode-command-line-tools",
              {
                method: "POST",
              },
            );
            const result = await response.json();
            console.log(result);
            return false;
          }}
        >
          Install
        </button>
      </footer>
    </>
  );
};
