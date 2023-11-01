//비동기 API 호출을 수행하는 함수와 이러한 호출의 성공과 실패 시 호출되는 콜백 함수
import React from 'react';

function doAsynCall(success, failure) {
    // API 호출
    if (SUCCEED)
        success(resp);
    else
        failure(err);
}

success(response) {
    //응답으로 필요한 작업을 수행
}

failure(error) {
    // 오류 처리
}

doAsynCall(success, failure);

export default doAsynCall;