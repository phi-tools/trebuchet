import React from "react";
import { renderToString } from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import { PageLayout } from "./PageLayout";

// https://vike.dev/onRenderHtml
export const onRenderHtml = async (pageContext: {
  Page: React.ComponentType;
}) => {
  const { Page } = pageContext;
  const pageHtml = dangerouslySkipEscape(
    renderToString(
      <PageLayout>
        <Page />
      </PageLayout>,
    ),
  );

  return escapeInject`
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root">${pageHtml}</div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
};
