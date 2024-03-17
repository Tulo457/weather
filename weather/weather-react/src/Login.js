import "./Login.css";

const Login = () => {
  return( 
    <div className="Login">

        <div class="modal" id="exampleModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-body">
                <h1>Login</h1>
                
                <input
                    type="text"
                    class="username form-control"
                    placeholder="Username"
                    aria-label="text"
                ></input>

                <input
                    type="password"
                    class="password form-control"
                    placeholder="Password"
                    aria-label="text"
                ></input>
            </div>
            <div class="d-flex justify-content-around">
                <button type="button" class="btn" data-bs-dismiss="modal">Login</button>
                <button type="button" class="btn">Register</button>
            </div>
            </div>
        </div>
        </div>

    </div>
  );
};

export default Login;
