// https://vike.dev/onRenderClient
import React from "react";
import { hydrateRoot } from "react-dom/client";
import { PageLayout } from "./PageLayout";

export const onRenderClient = async ({
  Page,
}: {
  Page: React.ComponentType;
}) => {
  hydrateRoot(
    document.getElementById("root") as HTMLElement,
    <PageLayout>
      <Page />
    </PageLayout>,
  );
};
