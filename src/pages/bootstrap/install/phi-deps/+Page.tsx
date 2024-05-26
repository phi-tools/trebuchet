import { InstallStep } from "../../../../components/InstallStep";

export const Page = () => {
  return (
    <InstallStep
      name={"Brew"}
      title="Install Brew"
      description={
        "Brew is a package manager for macOS. It allows you to install software packages from the command line. "
      }
      next="/install-git"
      nextName="Install Git"
    />
  );
};
