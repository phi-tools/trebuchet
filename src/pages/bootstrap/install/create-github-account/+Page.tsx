import { InstallStep } from "../../../../components/InstallStep";

declare global {
  interface Window {
    phi: any;
  }
}

export const Page = () => {
  return (
    <InstallStep
      name={"Create Github Account"}
      title={"Create Github Account"}
      description={
        "Phi tools use Github to save changes to lists and browser automation and review those changes in order to share them with others, in addition to tracking feature requests. If you don't have an account, you can create one for free."
      }
      next="/install-ssh-keys"
      nextName="Install SSH Keys"
      skippable={true}
      action={() => {
        window.phi.launchGithubSignup();
        return new Promise((resolve) => {
          const interval = setInterval(() => {
            if (window.phi.ghCliDeviceToken) {
              clearInterval(interval);
              resolve();
            }
          }, 1000);
        });
      }}
    />
  );
};
