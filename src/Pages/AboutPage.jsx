import Card from "../components/shared/card";
import { Link } from "react-router-dom";
import React from "react";

function AboutPage() {
  return (
    <Card>
      <div className="card">
        <h1>About This Project </h1>
        <p>This is a React app to leave feedback for a products or service</p>
        <p>Version 1.0.0</p>
        <p>
          <Link to="/"> Back to Home </Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
