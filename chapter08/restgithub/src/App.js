import React, { useState } from 'react';
import './App.css';

function App() {
  const [keyword, setKeyword] = useState('');     //검색어를 저장하는 상태 변수
  const [data, setData] = useState([]);           //API에서 가져온 검색 결과를 저장하는 배열 상태 변수

  // 사용자가 입력한 검색어를 사용하여 GitHub API를 호출하고 검색 결과를 가져온다.
  const fetchData = () => {
    fetch(`https://api.github.com/search/repositories?q=${keyword}`)   //GitHub API에 GET 요청
    .then(response => response.json())
    .then(data => setData(data.items))   //GitHub 저장소의 정보가 포함된 items 배열을 setData 함수를 사용하여 data에 저장
    .catch(err => console.error(err))    //API 호출이 실패하면, err
  }

  return (
    <div className="App">
      <input value={keyword} 
        onChange={e => setKeyword(e.target.value)} />
      <button onClick={fetchData}>Fetch</button>
      <table style={{margin: 'auto'}}>
        <tbody>
          {/* data 배열에 있는 각 저장소에 대해 반복하며, 각 저장소의 이름과 HTML URL을 <tr> 요소로 표시 */}
          {
            data.map(repo => 
              <tr key={repo.id}>
                <td>{repo.full_name}</td>
                <td>
                  <a href={repo.html_url}>{repo.html_url}</a>
                </td>
              </tr>  
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
