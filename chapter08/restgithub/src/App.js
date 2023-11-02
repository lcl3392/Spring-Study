import React, { useState } from 'react';
import './App.css';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';


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

  const Columns = [
    {field: 'full_name' , sortable: true, filter: true},
    {field: 'html_url', sortable: true, filter: true},
    {field: 'owner.login',sortable: true, filter: true},
    
    //버튼을 누르면 full_name 셀의 값을 보여주는 alert 창을 표시한다. 
    {
      field: 'full_name.Message',
      cellRenderer: params =>
      <button 
      onClick={()=> alert(params.value)}>
      Press me 
      </button>
    }
  ]

  return (
    <div className="App">
      <input value={keyword} 
        onChange={e => setKeyword(e.target.value)} />
      <button onClick={fetchData}>Fetch</button>
      <div className='ag-theme-material' style={{height: 500, width: '50%'}}>
        <AgGridReact
        rowData={data}
        columnDefs={Columns}
        pagination={true}
        paginationPageSize={8}
        />
      </div>
    </div>
  );
}

export default App;
