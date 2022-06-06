import React from "react";
import { Link } from "react-router-dom";
import StudentTable from "./StudentTable";

class Students extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="mt-5">
          <h1 className="text-center">Students</h1>
        </header>
        <main className="mt-5">
          <div>
            <StudentTable />
          </div>
        </main>
        <footer className=" mt-5 mb-5">
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/student-add" className="btn btn-warning mx-3">
              Create new Student
            </Link>
            <Link to="/" className="btn btn-success mx-3">
              Home
            </Link>
          </div>
        </footer>
      </div>
    );
  }
}

export default Students;
