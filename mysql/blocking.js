function longRunningTask() {
    // 오래 걸리는 작업
    for(let i = 0; i < 999999999; i++); // 작업이 오래걸리게 임의로 한거
    console.log('작업 끝');
}
console.log('시작');
longRunningTask();
console.log('다음 작업');
