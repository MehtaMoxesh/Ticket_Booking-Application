import React from "react";
import { Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const HeroPage = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", // Aligns from top
        paddingTop: "1rem",       // Reduced top space
        backgroundColor: "#f8f9fa",
      }}
    >
      <Container className="d-flex justify-content-center">
        <Card
          className="p-4 text-center shadow"
          style={{
            width: "100%",
            maxWidth: "720px",
            marginTop: "0", // Removed any additional top margin
          }}
        >
          <h1 className="text-primary fw-bold mb-3">
            FlyPulse ✈️
          </h1>
          <p className="mb-3">
            Book and manage your domestic & international flights with ease using SkyReserve — a modern MERN stack web app.
          </p>
          <p>
            <strong>Frontend:</strong> React, Vite, React-Bootstrap, Redux Toolkit, Toastify, React Router
          </p>
          <p>
            <strong>Backend:</strong> Node.js, Express, MongoDB, JWT, bcrypt, dotenv
          </p>

          {userInfo ? (
            <>
              <p>You are logged in.</p>
              <strong>Use the side menu to book flights or view bookings.</strong>
            </>
          ) : (
            <>
              <p>Please <strong>Sign In</strong> or <strong>Sign Up</strong> to get started.</p>
              <Card className="mt-3 p-3 bg-light">
                <strong>Admin Test Account</strong><br />
                <strong>Email:</strong> admin123@gmail.com<br />
                <strong>Password:</strong> admin123
              </Card>
            </>
          )}

        </Card>
      </Container>
    </div>
  );
};

export default HeroPage;
