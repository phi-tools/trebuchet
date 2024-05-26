import { InstallStep } from "../../../../components/InstallStep";

export const Page = () => {
  return (
    <InstallStep
      name={"Phi Tools Dependencies"}
      title="Install Phi Tools Dependencies"
      description={
        "Phi Tools requires some dependencies to be installed on your system such as Playwright, which enables browser input automation."
      }
      next="/done"
      nextName="Finish"
    />
  );
};
