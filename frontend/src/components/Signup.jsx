
function Signup() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f4f4f4"
        }}>
            <div style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                maxWidth: "400px",
                width: "100%"
            }}>
                <h1 style={{
                    marginBottom: "20px",
                    textAlign: "center",
                    color: "#333"
                }}>Sign Up</h1>
                <form>
                    <div style={{
                        marginBottom: "15px"
                    }}>
                        <label htmlFor="username" style={{
                            display: "block",
                            marginBottom: "5px",
                            color: "#555"
                        }}>Username</label>
                        <input type="text" id="username" name="username" required style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            boxSizing: "border-box"
                        }} />
                    </div>
                    <div style={{
                        marginBottom: "15px"
                    }}>
                        <label htmlFor="password" style={{
                            display: "block",
                            marginBottom: "5px",
                            color: "#555"
                        }}>Password</label>
                        <input type="password" id="password" name="password" required style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            boxSizing: "border-box"
                        }} />
                    </div>
                    <button type="submit" style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "#007BFF",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        fontSize: "16px",
                        cursor: "pointer",
                        transition: "background-color 0.3s"
                    }}>Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
