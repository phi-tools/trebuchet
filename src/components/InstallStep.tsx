import React, { useEffect, useState } from "react";

import { navigate } from "vike/client/router";

import { Spinner } from "./Spinner";

export const InstallStep = ({
  title,
  name,
  description,
  checkAlreadyInstalled = async () => false,
  skippable = false,
  action = async () => {},
  next,
  nextName,
}: {
  title?: string;
  name: string;
  description: string | JSX.Element;
  skippable?: boolean;
  action?: () => Promise<void>;
  checkAlreadyInstalled?: () => Promise<boolean>;
  next: string;
  nextName: string;
}) => {
  const [loading, setLoading] = useState(Boolean(checkAlreadyInstalled));
  const [installed, setInstalled] = useState(false);
  const [checkingInstalled, setCheckingInstalled] = useState<string | boolean>(
    Boolean(checkAlreadyInstalled),
  );

  useEffect(() => {
    (async () => {
      if (checkAlreadyInstalled && checkingInstalled !== "DONE") {
        setCheckingInstalled(true);
        setLoading(true);
        setInstalled((await fetch(`/api/install-${name.toLowerCase()}`)).ok);

        setCheckingInstalled("DONE");
        setLoading(false);
      }
    })();
  }, [checkAlreadyInstalled, checkingInstalled]);

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
        <h2>{title ?? `Install ${name}`}</h2>
        <p>{description}</p>
        {installed ? (
          <>
            <p
              style={{
                fontSize: "4rem",
                textAlign: "center",
              }}
            >
              <span role="img" aria-label="checkmark">
                ✅
              </span>
            </p>
            <p style={{ color: "green" }}>
              {name} has been installed successfully. Press <code>Next</code> to
              install <code>{nextName}</code>
            </p>
          </>
        ) : (
          <button
            style={{
              backgroundColor: "green",
              color: "white",
              borderRadius: "0.5rem",
              fontSize: "2.0rem",
              alignSelf: "center",
              border: "none",
              cursor: "pointer",
            }}
            onClick={async (e) => {
              e.stopPropagation();
              setLoading(true);
              await action();
              setLoading(false);
              setInstalled(true);
              return false;
            }}
          >
            Install
          </button>
        )}

        {loading && <Spinner />}
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
            window.history.back();

            return false;
          }}
        >
          Back
        </button>
        <button
          disabled={!installed && !skippable}
          style={{
            backgroundColor: "green",
            color: "white",
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate(next);
          }}
        >
          Next
        </button>
      </footer>
    </>
  );
};
