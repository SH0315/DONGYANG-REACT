// 리액트에서 상태 관리를 위해 useState 불러오기
import {useState} from "react";

// VideoCard 컴포넌트
function VideoCard({title, channel, views}){
     
     // 좋아요수의 초기값 설정
     const [likes , setLikes] = useState(0);
     
     // 카드 클릭수의 초기값 설정
     const [clicks , setClicks] = useState(0);
     
     // 커드를 클릭할때마다 클릭수가 하나 씩 증가
     const handleCardClick = () => {
      setClicks(clicks + 1);
     };

     // 버튼 클릭이 카드를 클릭하는것으로 인식되는걸 방지
     const handleLikeClick = (event) => {
      event.stopPropagation();
      setLikes(likes + 1);
     };


return(
  <div onClick={handleCardClick}     //카드 클릭시 클릭수 하나 증가하도록 실행
    style={{
      border: "1px solid #ccc",
      borderRadius : " 12px"
    }}>

    <h3>{title}</h3>
    <p>채널: {channel}</p>                              {/* 채널 이름 출력 */}
    <p>조회수: {views}</p>                              {/* 조회수 출력 */}
    <p>클릭수: {clicks}</p>                             {/* 클릭 수 출력 */}
    <p>좋아요수: {likes}</p>                             {/* 좋아요 수 출력 */}
    <button onClick={handleLikeClick}>좋아요</button>   {/* 좋아요 버튼 클릭시에 좋아요 수만 증가하도록 실행 */}
    
    </div>
    
);
}
  
//VideoList 컴포넌트
function VideoList({videos}){
    return(
      <div >
        {videos.map((video, index) => (
          // videos 배열을 map 함수를 이용하여 리스트 렌더링
          <VideoCard
            key = {index}               // 리스트 렌더링을 위해 키값이 필요
            title = {video.title}       // VideoCard에 title 값을 전달
            channel ={video.channel}    // VideoCard에 channel 값을 전달
            views = {video.views}       // VideoCard에 views 값 전달
            />
        ))}
      </div>
    );
  }

//메인 컴포넌트
function App (){
  const [filter, setFilter] = useState("전체"); //filter 변수 설정 후 setFilter를 통해 값 변경 가능 초기값은 "전체"
 
  //비디오 데이터 배열
  const videos = [
  {
    title: "리액트 기초 강의",
    channel: "코딩채널",
    views: "10만",
    category: "공부"
  },
  {
    title: "자바스크립트 완벽 정리",
    channel: "개발자TV",
    views: "25만",
    category: "자바스크립트"
  },
  {
    title: "프론트엔트 취업 로드맵",
    channel: "코딩랩",
    views: "5만",
    category: "취업"
  }
];

// 필터를 적용 (전체 선택시에는 모든 비디오, 카테고리 선택시 해당 카테고리에 대한 내용 출력)
  const filteredVideos = 
    filter == "전체"      
     ? videos
     : videos.filter((video) => video.category === filter);
  
  
    return (
  <div>
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => setFilter("전체")}>전체</button>
      <button onClick={() => setFilter("공부")}>공부</button>
      <button onClick={() => setFilter("자바스크립트")}>자바스크립트</button>
      <button onClick={() => setFilter("취업")}>취업</button>
    </div>

    <div>
      <p>현재 필터: {filter}</p>                {/* 현재 선택된 필터 표시 */}
      <VideoList videos={filteredVideos} />     {/* 필터링된 비디오 리스트 렌더링 */}
    </div>
  </div>
);
}

export default App;
// App 컴포넌트가 외부에서 사용 될 수 있게 내보냄