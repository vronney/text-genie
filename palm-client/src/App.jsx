import { useState } from "react";
import loader from "./assets/loader.svg";

function App() {
  const [serverData, setServerData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userPrompt, setUserPrompt] = useState("");

  const handleSubmit = () => {
    setIsLoading(true);
    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: userPrompt }),
    })
      .then((res) => res.json())
      .then((data) => {
        setServerData(data);
        setIsLoading(false);
      });
  };

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ padding: "10px", marginBottom: "0px" }}>Text Genie</h1>
      <div style={{ margin: "0", flexGrow: "1" }}>
        <div style={{ width: "100%", height: "100%" }}>
          {isLoading ? (
            <img src={loader} alt="loading" />
          ) : (
            <article style={{ margin: "0" }}>
              {!serverData ? (
                <div>
                  <h2>Welcome to Text Genie!</h2>
                  <p>To get started:</p>
                  <ol>
                    <li>
                      Type your prompt in the text area at the bottom of the
                      screen.
                    </li>
                    <li>
                      Click the &apos;Go&apos; button to generate your article.
                    </li>
                  </ol>
                  <p>Enjoy using the app!</p>
                </div>
              ) : (
                serverData
              )}
            </article>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "end",
          padding: "10px",
          width: "100%",
        }}
      >
        <textarea
          onChange={(e) => setUserPrompt(e.target.value)}
          style={{ margin: "0", flexGrow: "1", overflowY: "hidden" }}
          placeholder="Type in Prompt"
        />
        <button
          onClick={handleSubmit}
          type="button"
          style={{ margin: "0", flex: "1", marginLeft: "10px", height: "100%" }}
        >
          Go
        </button>
      </div>
    </main>
  );
}

export default App;
