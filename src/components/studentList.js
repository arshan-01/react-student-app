function StudentList({student,index,updateHandler,deleteHandler}) {
    // Here we are extracting the student data from the object student
    return (
        <tbody>
          <tr>
          <th scope="row">{index}</th>
              <td>{student.Name}</td>
              <td>{student.Gender}</td>
              <td>{student.Physics}</td>
              <td>{student.Math}</td>
              <td>{student.English}</td>
              <th>{Number(student.English)+Number(student.Math)+Number(student.Physics)}</th>
              <td><button type="button" class="btn btn-primary" onClick={()=>updateHandler(student,index)}>Update</button></td>
              <td><button type="button" class="btn btn-danger" onClick={()=>deleteHandler(index)}>Delete</button></td>
          </tr>
          </tbody>
      
    )
  }
  
// alternate 

// function StudentList(props) {
//   return (
//     <div>
//         <tr>
//             <td>{props.name}</td>
//             <td>{props.gender}</td>
//             <td>{props.physics}</td>
//             <td>{props.Math}</td>
//             <td>{props.english}</td>
//         </tr>
//     </div>
//   )
// }

export default StudentList