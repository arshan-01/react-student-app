import { useState } from "react";
import { data } from "./data";
import StudentList from "./studentList";

function Student() {
  const [student, setStudent] = useState(data);
  const [alertmsg, setAlert] = useState("");
  const [Name, setName] = useState("");
  const [Gender, setGender] = useState("");
  const [Physics, setPhysics] = useState("");
  const [Math, setMath] = useState("");
  const [English, setEnglish] = useState("");
  const [Flag, setFlag] = useState(false);
  const [updatedIndex, setUpdatedIndex] = useState(0);

  //Update Operation
  const updateHandler = (student,index) => {
    setUpdatedIndex(index);
    setName(student.Name);
    setGender(student.Gender);
    setPhysics(student.Physics);
    setMath(student.Math);
    setEnglish(student.English);
    setFlag(true);
  }

  const ctaupdateHandler = () => {
    if (
      Name !== "" &&
      Gender !== "" &&
      Gender !== "" &&
      Physics !== "" &&
      Math !== "" &&
      English !== ""
    ) {
      setAlert(
        <div
          className="alert alert-success"
          role="alert"
          style={{ width: "90.5%" }}
        >
          Data has been successfully updated
        </div>
      );
      let students = {
        Name: Name,
        Gender: Gender,
        Physics: Physics,
        Math: Math,
        English: English,
      };

      let updatestudent =student.map((stu,index)=> {
        if (updatedIndex===index) {
          return students
        } else {
          return stu;
        }
      });
       
      setStudent([...updatestudent]);
      setName("");
      setGender("");
      setPhysics("");
      setMath("");
      setEnglish("");
      setFlag(false);
     
    } else
      setAlert(
        <div
          className="alert alert-danger"
          role="alert"
          style={{ width: "90.5%" }}
        >
          Please fill out all required fields.
        </div>
      );
  };
  
  // Delete Operation

  const deleteHandler = (index) => {
    let newstudent = student.filter((student, i) => {
      if (i !== index) {
        return student;
      }
    });
    setStudent([...newstudent]);
    {
      setAlert(
        <div
          className="alert alert-danger"
          role="alert"
          style={{ width: "90.5%" }}>
          Student Deleted Successfully
        </div>
      );
    }
  };
  const ctahandler = () => {
    if (
      Name !== "" &&
      Gender !== "" &&
      Gender !== "" &&
      Physics !== "" &&
      Math !== "" &&
      English !== ""
    ) {
      setAlert(
        <div
          className="alert alert-success"
          role="alert"
          style={{ width: "90.5%" }}
        >
          Data has been successfully added
        </div>
      );
      let students = {
        Name: Name,
        Gender: Gender,
        Physics: Physics,
        Math: Math,
        English: English,
      };
      setStudent([...student, students]);
      setName("");
      setGender("");
      setPhysics("");
      setMath("");
      setEnglish("");
    } else
      setAlert(
        <div
          className="alert alert-danger"
          role="alert"
          style={{ width: "90.5%" }}
        >
          Please fill out all required fields.
        </div>
      );
  };

  return (
    <div className="container my-2">
      {alertmsg}
      <h3 className="my-2 mx-2">Add New Student</h3>
      <input
        type="text"
        placeholder="Name"
        value={Name}
        onChange={(e) => setName(e.target.value)}
        className="my-2 mx-2"
      />
      <input
        type="text"
        placeholder="Gender"
        value={Gender}
        onChange={(e) => setGender(e.target.value)}
        className="my-2 mx-2"
      />
      <input
        type="text"
        placeholder="Physics"
        value={Physics}
        onChange={(e) => setPhysics(e.target.value)}
        className="my-2 mx-2"
      />
      <input
        type="text"
        placeholder="Math"
        value={Math}
        onChange={(e) => setMath(e.target.value)}
        className="my-2 mx-2"
      />
      <input
        type="text"
        placeholder="English"
        value={English}
        onChange={(e) => setEnglish(e.target.value)}
        className="my-2 mx-2"
      />
      {Flag ? (
        <button
          type="submit"
          class="btn btn-primary my-2 mx-2"
          onClick={ctaupdateHandler}
        >
          Update
        </button>
      ) : (
        <button
          type="submit"
          class="btn btn-primary my-2 mx-2"
          onClick={ctahandler}
        >
          Submit
        </button>
      )}

      <h3 className="my-2 mx-2">List Of Students</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Physics</th>
            <th scope="col">Math</th>
            <th scope="col">English</th>
            <th scope="col">Total Marks</th>
          </tr>
        </thead>

        {student.map((item, index) => {
          return (
            <StudentList
              index={index}
              student={item}
              deleteHandler={deleteHandler}
              updateHandler={updateHandler}
            />
          );
        })}
      </table>
    </div>
  );
}

export default Student;
