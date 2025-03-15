let target = document.querySelector("#dynamic");


function randomString() {
  let stringArr = [
    "Learn to HTML",
    "Learn to CSS",
    "Learn to Javascript",
    "Learn to Python",
    "Learn to MySQL",
  ];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");

  return selectStringArr;
}

//타이핑 리셋
function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randomString());

// 마우스 오버: highlight 클래스 추가
smTarget = document.querySelector(".sm-text")
smTarget.addEventListener("mouseover", function () {
  smTarget.classList.add("highlight");
});

// 마우스 아웃: highlight 클래스 제거
smTarget.addEventListener("mouseout", function () {
    smTarget.classList.remove("highlight");
});

// 커서 깜빡임 효과
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);

// 공식 문서 정보 배열
const docs = [
  { title: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { title: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  {
    title: "Javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { title: "Python", url: "https://docs.python.org/3/" },
  { title: "MySQL", url: "https://dev.mysql.com/doc/" },
];

// docs-links 영역 선택
const linksContainer = document.getElementById("docs-links");

// 각 항목마다 링크 생성
docs.forEach((item) => {
  let link = document.createElement("a");
  link.href = item.url;
  link.textContent = item.title;
  link.target = "_blank"; // 새 탭에서 열기
  link.classList.add("doc-link"); // CSS 스타일링을 위한 클래스 추가
  linksContainer.appendChild(link);
});
