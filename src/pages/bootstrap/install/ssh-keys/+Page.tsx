import { InstallStep } from "../../../../components/InstallStep";

export const Page = () => {
  return (
    <InstallStep
      name={"SSH Keys"}
      title="Generate SSH Keys"
      description={
        "SSH keys are used to securely connect to remote servers. A private key is held on the device, and the public key is uploaded to GitHub. When connecting, this device will use the private key to encrypt the connection. Github can use the public key to verify the connection can only come from a device that has that private key. If you don't have an SSH keypair, you can generate one now."
      }
      next="/install-nvm"
      nextName="Install nvm"
    />
  );
};
