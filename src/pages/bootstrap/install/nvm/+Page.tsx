import { InstallStep } from "../../../../components/InstallStep";

export const Page = () => {
  return (
    <InstallStep
      name={"nvm"}
      title={"Install Node Version Manager (nvm)"}
      description={
        "Node Version Manager (nvm) is a tool used to manage multiple versions of Node.js on your machine. Node.js is the programming language that Phi.tools is built on."
      }
      next="/clone-repo"
      nextName="Clone the Phi Tools repository"
    />
  );
};
