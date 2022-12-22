// 명령행 인자(Command Line Argument)
console.log(process.argv);

// 설치된 노드의 버전
console.log(process.version);

// 프로세서 아키텍처 정보. arm, ia32 등의 값일 수도 있다
console.log(process.arch);

// 운영체제 플랫폼 정보. linux나 darwin, freebsd등의 값일 수도 있다
console.log(process.platform);

// 현재 프로세스의 아이디. 프로세스를 여러 개 가질 때 구분할 수 있다
console.log(process.pid);

// 프로세스가 시작된 후 흐른 시간. 단위는 초
console.log(process.uptime());

// 노드 실행파일의 경로
console.log(process.execPath);

// 현재 프로세스가 실행되는 위치
console.log(process.cwd());

// 현재 cpu 사용량
console.log(process.cpuUsage());

// 현재 메모리 상태
console.log(process.memoryUsage());

// 여러가지 환경 변수
console.log(process.env);

// NODE_ENV=development nodse node.js/3ch/3.4.6-process.js
const {NODE_ENV} = process.env;
if (NODE_ENV === 'development') {
    console.log('개발 환경입니다.')
}
