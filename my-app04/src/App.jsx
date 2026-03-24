function Book(props){
  return(
    <div>
      <h2>이 책의 제목은 {props.title}입니다.</h2>
      <p>이 책의 제목은 {props.author}입니다.</p>
      <p>이 책의 제목은 {props.price}입니다.</p>
    </div>
  );
}

function GreetingCard({name, message}) {
  return(
    <div>
      <h3>{name}님께</h3>
      <p>{message}</p>
    </div>
  );
}

function Button ({text, color}){
  return(
    <button style={{backgroundColor : color, color : "white"}}>
      {text}
    </button>
  );
}

function VideoCard({title, channel, views}){
  return(
  <div>
    <h3>{title}</h3>
    <p>{channel}</p>
    <p>{views}</p>
  </div>
  );
}
  function VideoList({videos}){
    return(
      <div>
        {videos.map((video, index) => (
          <VideoCard
            key = {index}
            title = {video.title}
            channel ={video.channel}
            views = {video.views}
            />
        ))}
      </div>
    );
  }
  



function App (){
  const videos = [
   {
    title: "리액트 기초 강의",
    channel: "코딩채널",
    views: "10만"
   } ,
   
   {
    title: "자바스크립트 완벽 정리",
    channel: "개발자TV",
    views: "25만"
   } ,
   
   {
    title: "프론트엔트 취업 로드맵",
    channel: "코딩랩",
    views: "5만"
   } 
  
  ]


  return( 
  <div>
    <h1>4주차 실습 과제1</h1>
    <hr/>
    <Book title = "파이썬" author= "김길동" price = {30000}></Book>
    <Book title = "데이터베이스" author= "황길동" price = {35000}></Book>
    <Book title = "인공지능" author= "우길동" price = {45000}></Book>
    <Book title = "리액트" author= "최길동" price = {25000}></Book>
    
   
    <h1>4주차 실습 과제2</h1>
    <hr/>
    <GreetingCard name ="민지" message={"생일 축하해!"}/>
    <GreetingCard name ="철수" message={"시험 화이팅!"}/>
    <GreetingCard name ="영희" message={"오늘도 좋은 하루!"}/>
    
     <h1>4주차 실습 과제3</h1>
    <hr/>
    <Button text = "로그인" color = "blue"/>
    <Button text = "삭제" color = "red"/>
    <Button text = "확인" color = "green"/>

    <h1>4주차 실습 과제4</h1>
    <hr/>
    <h1>📺️추천영상</h1>
    <VideoList videos = {videos}/>
  
  </div>
  );

 
}

export default App;