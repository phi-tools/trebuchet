// Use tauri command to install brew
import { invoke } from "@tauri-apps/api/core";

import { InstallStep } from "../../../../components/InstallStep";

export const Page = () => {
  return (
    <InstallStep
      name={"Brew"}
      description={
        <>
          <p>
            "Brew is a package manager for macOS. It allows you to install
            software packages from the command line. "
          </p>
          <p>
            Press install to install Brew. This will take a few minutes. You
            will need to enter your password.
          </p>
        </>
      }
      action={async () => {
        const res = await invoke("install_brew");
        console.log(res);
      }}
      checkAlreadyInstalled={() => {
        return invoke("check_brew");
      }}
      next="/bootstrap/install/git"
      nextName="Next: Installing Git"
    />
  );
};
