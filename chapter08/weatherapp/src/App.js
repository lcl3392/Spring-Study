import React, { useState } from 'react';
import './App.css';

function App() {
  const [temp, setTemp] = useState('');          //온도 정보를 저장하는 상태 변수
  const [desc, setDesc] = useState('');          //날씨 설명을 저장
  const [icon, setIcon] = useState('');          //날씨 아이콘을 저장
  const [isReady, setReady] = useState(false);   //데이터를 성공적으로 가져온 경우 true로 설정되는 상태 변수

  React.useEffect(() => {   
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=7d4edf8....your key...&units=metric`)
    // fetch 함수를 사용하여 OpenWeatherMap API에 GET 요청 ,날씨 api key를 받아서 넣어준다.
    
    //API 응답이 성공적으로 돌아오면 .then 메서드를 사용하여 JSON 형식으로 변환하고, 해당 데이터를 사용하여 상태 변수를 업데이트
    .then(result => result.json()) 
    .then(jsonresult => {
      setTemp(jsonresult.main.temp);  //jsonresult 객체에서 날씨 정보 중에서 온도(main.temp)를 추출,setTemp 함수를 사용하여 React 상태 변수인 temp에 저장
      setDesc(jsonresult.weather[0].main); //jsonresult 객체에서 날씨 설명(weather[0].main)을 추출하고, setDesc 함수를 사용 desc에 저장
      setIcon(jsonresult.weather[0].icon);
      setReady(true);       //데이터를 모두 처리하고 필요한 상태 변수에 저장한 후, setReady 함수를 사용하여 isReady 상태 변수를 true로 설정
    })
    .catch(err => console.error(err))  //API 요청이 실패하는 경우 .catch 메서드를 사용하여 에러를 콘솔에 출력
  }, [])

  //isReady 상태 변수가 true인 경우, 온도, 날씨 설명 및 아이콘을 화면에 표시합니다. 그렇지 않은 경우 "Loading..."이 표시
  if (isReady) {
    return (
      <div className="App">
        <p>Temperature: {temp} °C</p>   
        <p>Description: {desc}</p>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}   
          //날씨 아이콘을 표시하려면 아이콘 코드 앞에 http://openweathermap.org/img/wn/ 과 뒤에@2x.png 추가   
          alt="Weather icon" />
      </div>
    );
  }
  else {
    return <div>Loading...</div>
  }
}
export default App;