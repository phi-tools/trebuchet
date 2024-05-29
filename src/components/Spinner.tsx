import "./Spinner.css";

export const Spinner = () => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        borderRadius: "1rem",
        backgroundColor: "rgba(100, 100, 100, 0.5)",
        display: "flex",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
      }}
    >
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
