import React ,{useState
} from "react";
function App() {
  const [task , setTask]= useState("");
  const [todos,setTodos]= useState([]);
  const changeHandler = e =>{
    setTask(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault();
      const newTodos=  [...todos, task];
      setTodos(newTodos);
      setTask("");
  }
  return (
<div>
  <center>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">TODO MANAGEMENT</h5>
        <form onSubmit={submitHandler}>
          <input type="text" name="task" value={task} onChange={changeHandler}/>  &nbsp; &nbsp;
          <input type="submit" value="Add" name="Add"/>
        </form>
      </div>
    </div>
  </center>
 
</div>
  );
}

export default App;
