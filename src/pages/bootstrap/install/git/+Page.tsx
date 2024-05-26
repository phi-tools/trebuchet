import { InstallStep } from "../../../../components/InstallStep";

export const Page = () => {
  return (
    <InstallStep
      name={"git"}
      title="Install Git"
      checkAlreadyInstalled={async () => false}
      description={
        "Git is a version control system that is used to track changes in source code during software development. Phi tools use Git to manage versions of different tools and configurations."
      }
      next="/bootstrap/install/create-github-account"
      nextName="Create a GitHub account"
    />
  );
};
