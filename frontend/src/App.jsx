import React from 'react';
import './login.css';  // import the CSS file

function App() {
  return (
    <div className="app-container">
      <div className="content-wrapper">

        {/* Left Panel (You already had this — keep or also migrate) */}
        <div className="left-panel">
          <header className="left-panel-header">A WISE QUOTE</header>
          <div className="left-panel-content">
            <h1 className="quote-heading">
              Get <br />
              Everything <br />
              You Want
            </h1>
            <p className="quote-text">
              You can get everything you want if you work hard, <br />
              trust the process, and stick to the plan.
            </p>
          </div>
        </div>

        {/* Right Panel (Login Form Side) */}
        <div className="right-panel">
          <header className="header-logo">
            <span className="logo-dot"></span> Cogle
          </header>

          <div className="login-content">
            <div> {/* wrapper for top form content */}
              <h1 className="welcome-heading">Welcome Back</h1>
              <p className="welcome-subtext">
                Enter your email and password to access your account
              </p>

              <form className="form">
                <div className="input-group">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input"
                  />
                </div>

                <div className="input-group">
                  <label className="label">Password</label>
                  <div className="password-wrapper">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="input"
                    />
                    <span className="password-eye-icon">&#9678;</span>
                  </div>
                </div>

                <div className="options-row">
                  <label className="remember-me-label">
                    <input type="checkbox" className="checkbox" /> Remember me
                  </label>
                  <a href="/forgot" className="forgot-password">Forgot Password</a>
                </div>

                <button type="submit" className="button sign-in-button">
                  Sign In
                </button>

                <button type="button" className="button google-signin-button">
                  <img
                    src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png"
                    alt="Google G"
                    className="google-icon"
                  />
                  Sign In with Google
                </button>
              </form>
            </div>

            <p className="signup-link">
              Don't have an account? <a href="/signup" className="signup-anchor">Sign Up</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
