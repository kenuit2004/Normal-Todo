import {useState,useMemo,memo} from "react"
const TODO=memo(({todos,del})=>{
    console.log("Rendering");
    if(todos.length===0)
    {
        return <p>Todo List is Empty</p>
    }
    return(
        <div>
            <ul>
                {todos.map((todo,index)=>(
                    <li key={index}>
                        {todo}
                        <button onClick={()=>del(index)}>
                            Delete Todo
                        </button>
                    </li>
            ))}
            </ul>
        </div>
    )
});
function Ken()
{
    const [todo,newTodo]=useState("");
    const [todoArray,newTodoArray]=useState([]);
    const [filter,newFilter]=useState("");
    const add=()=>{
        if(todo!=="")
        {
            newTodoArray(prev=>[...prev,todo]);
            newTodo("");
        }
    }
    const deleteTodo=(index)=>{
        return newTodoArray(prev=>prev.filter((_,i)=>i!==index))
    }
    const filterTodo=useMemo(()=>{
        console.log("Filtering");
        return todoArray.filter((todo=>todo.toLowerCase().includes(filter.toLowerCase())));
    },[todoArray,filter])
    return(
        <div>
            <div>
                <input type="text" placeholder="Enter the name" value={todo} onChange={(e)=>newTodo(e.target.value)}/>
                <button onClick={add}>Add Todo</button>
            </div>
            <div>
                <input type="text" placeholder="Enter the Filter" value={filter} onChange={(e)=>newFilter(e.target.value)}/>
            </div>
            <div>
                {filterTodo.length===0 && todoArray.length!==0 &&(<p>Matching Not Fouund</p>)}
            </div>
            <TODO todos={filterTodo} del={deleteTodo} />
        </div>
    );
}
export default Ken;