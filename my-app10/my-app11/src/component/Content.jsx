import React, { useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Content = () => {

  const {
    isDark,
    name,
    setName
  } = React.useContext(ThemeContext);

  // 입력 전용 state
  const [inputValue, setInputValue] = useState('');

  // 버튼 클릭 시 이름 적용
  const handleSave = () => {
    setName(inputValue);
  };

  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
      }}
    >

      <input
        type="text"
        value={inputValue}
        placeholder="이름 입력"
        onChange={(e) => setInputValue(e.target.value)}
      />

    
      <button onClick={handleSave}>
        저장
      </button>

      <p>
        {name} 님!! 리액트 Hooks 공부 중입니다.
      </p>

    </div>
  );
};

export default Content;