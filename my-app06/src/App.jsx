import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "React 복습하기", done: false },
    { id: 2, text: "과제 제출하기", done: true }
   
  ]);
  
 const updateTodo = (id) => {
    const updatedTodos = todos.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo); 
    //todos 요소들을 맵 함수로 출력하는데 아이디를 비교하여 같으면 done의 상태가 반대가 되고 다르면 그대로 유지
    setTodos(updatedTodos);
    //기존의 todo에 지금 시간을 아이디로, 텍스트 박스에 입력하는 걸 텍스트로, 상태는 거짓으로 저장
  };



  const addTodo = () => {
    if (input.trim() === "") return;
    //스페이스 바 입력을 차단시킴

    const newTodo = {
      id: Date.now(),
      text: input,
      done: false
    };
    // 기존의 todo에 값을 추가하는 함수

    setTodos([...todos, newTodo]);
    setInput("");
    // 추가 한 뒤에 텍스트 박스를 다시 공백으로 바꿔줌
    
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} // 값 받아오기
        placeholder="할 일을 입력하세요"
      />
      <button onClick={addTodo}>추가</button>
     

      {todos.length === 0 ? (<p>등록된 할 일이 없습니다.</p>) : 
      (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text} - {todo.done ? "완료" : "미완료"}
              <button onClick={() => updateTodo(todo.id)}>
                {todo.done ? "미완료로" : "완료로"}
              </button>
            </li>
          ))}
        </ul>
      ) 
      }
    </div>
  );
}

export default App;