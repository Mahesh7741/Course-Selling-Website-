function AppBar() {
  return (
    <div
      style={{
        width: "100vw",
        height: "8vh",
        backgroundColor: "#007BFF", // Bootstrap blue for consistency
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        boxSizing: "border-box",
        position: "fixed", // Fix the AppBar at the top of the viewport
        top: 0, // Ensure it stays at the top
        left: 0,
        zIndex: 1000, // Ensure it stays above other content
      }}
    >
      <div>
        <h1
          style={{
            color: "white",
            margin: 0,
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Courses
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button
          style={{
            backgroundColor: "white",
            color: "#007BFF", // Match button color with AppBar
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s, color 0.3s",
            height: "40px", // Consistent button height
            lineHeight: "20px", // Vertically align text
          }} onClick={()=>{
            window.location.href="/signin"
          }}
        >
          Sign In
        </button>
        <button
          style={{
            backgroundColor: "white",
            color: "#007BFF", // Match button color with AppBar
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s, color 0.3s",
            height: "40px", // Consistent button height
            lineHeight: "20px", // Vertically align text
          }} onClick={()=>{
            window.location.href="/signup"
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
export default AppBar;
