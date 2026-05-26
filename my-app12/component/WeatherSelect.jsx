import React from 'react';
export default function WeatherSelect({city,setCity}){
    return (
    <div className='dashboard'>
      <h2>실시간 날씨 </h2>
      <label htmlFor="city-select">도시 선택:</label>

      <select
        id="city-select"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="Seoul">서울</option>
        <option value="New York">뉴욕</option>
        <option value="Tokyo">도쿄</option>
      </select>
    </div>
  );
}