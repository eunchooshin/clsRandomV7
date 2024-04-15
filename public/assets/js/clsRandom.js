



//Speaking Drill


const PEOPLE_S_All_K = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
const PEOPLE_S_All_E = new Array("I ", "You ", "He ", "She ", "It ", "We ", "You ", "They ");
const PEOPLE_S_All_Be_E = new Array("I am ", "You are ", "He is ", "She is ", "It is ", "We are ", "You are ", "They are ");
const PEOPLE_S_All_Be_INTERROGATIVE_E = new Array("Am I ", "Are you ", "Is he ", "Is she ", "Is it ", "Are we ", "Are you ", "Are they ");

const ADJECTIVE_VOCA_INTERROGATIVE_ALL_K = new Array("크니?", "작니?", "빠르니?", "용감하니?", "좋니?", "나쁘니?", "비니?", "싸니?", "두껍니?", "얇니?", "시끄럽니?", "조용하니?", "똑똑하니?", "멍청하니?", "젖었니?", "말랐니?", "무겁니?", "가볍니?", "딱딱하니?", "부드럽니?", "친절하니?", "따뜻하니?", "잘생겼니?", "화났니?", "배고프니?", "넓니?", "관대하니?", "약하니?", "강하니?", "부유하니?", "가난하니?", "젊니?", "늙었니?", "기니?", "짧니?", "높니?", "낮니?", "침착하니?", "옳니?", "진실이니?", "거짓이니?", "아름답니?", "못생겼니?", "새롭니?", "느리니?", "행복하니?", "슬프니?", "안전하니?", "위험하니?", "귀엽니?");
const ADJECTIVE_VOCA_NEGATIVE_ALL_K = new Array("크지 않다", "작지 않다", "빠르지 않다", "용감하지 않다", "좋지 않다", "나쁘지 않다", "비싸지 않다", "싸지 않다", "두껍지 않다", "얇지 않다", "시끄럽지 않다", "조용하지 않다", "똑똑하지 않다", "멍청하지 않다", "안 젖었다", "안 말랐다", "안 무겁다", "안 가볍다", "안 딱딱하다", "부드럽지 않다", "친절하지 않다", "따뜻하지 않다", "안 잘생겼다", "안 화난다", "안 배고프다", "넓지 않다", "관대하지 않다", "약하지 않다", "강하지 않다", "부유하지 않다", "가난하지 않다", "젊지 않다", "안 늙었다", "길지 않다", "짧지 않다", "높지 않다", "낮지 않다", "침착하지 않다", "옳지 않다", "진실이지 않다", "거짓이지 않다", "아름답지 않다", "안 못생겼다", "새롭지 않다", "느리지 않다", "행복하지 않다", "슬프지 않다", "안전하지 않다", "위험하지 않다", "귀엽지 않다");
const ADJECTIVE_VOCA_POSITIVE_ALL_K = new Array("크다", "작다", "빠르다", "용감하다", "좋다", "나쁘다", "비싸다", "싸다", "두껍다", "얇다", "시끄럽다", "조용하다", "똑똑하다", "멍청하다", "젖었다", "말랐다", "무겁다", "가볍다", "딱딱하다", "부드럽다", "친절하다", "따뜻하다", "잘생겼다", "화난다", "배고프다", "넓다", "관대하다", "약하다", "강하다", "부유하다", "가난하다", "젊다", "늙었다", "길다", "짧다", "높다", "낮다", "침착하다", "옳다", "진실이다", "거짓이다", "아름답다", "못생겼다", "새롭다", "느리다", "행복하다", "슬프다", "안전하다", "위험하다", "귀엽다");
const ADJECTIVE_VOCA_K = new Array("큰", "작은", "빠른", "용감한", "좋은", "나쁜", "비싼", "싼", "두꺼운", "얇은", "시끄러운", "조용한", "똑똑한", "멍청한", "젖은", "마른", "무거운", "가벼운", "딱딱한", "부드러운", "친절한", "따뜻한", "잘생긴", "화난", "배고픈", "넓은", "관대한", "약한", "강한", "부유한", "가난한", "젊은", "늙은", "긴", "짧은", "높은", "낮은", "침착한", "옳은", "진실한", "거짓의", "아름다운", "못생긴", "새로운", "느린", "행복한", "슬픈", "안전한", "위험한", "귀여운");
const ADJECTIVE_VOCA_E = new Array("big", "small", "fast", "brave", "good", "bad", "expensive", "cheap", "thick", "thin", "loud", "quiet", "smart", "stupid", "wet", "dry", "heavy", "light", "hard", "soft", "kind", "warm", "handsome", "angry", "hungry", "wide", "generous", "weak", "strong", "rich", "poor", "young", "old", "long", "short", "high", "low", "calm", "right", "true", "false", "beautiful", "ugly", "new", "slow", "happy", "sad", "safe", "dangerous", "cute");


function getDescriptionPageNumber1() {
  let pageNumber = Math.floor(Math.random() * (42 - 1) + 1);
  document.getElementById('clsRandom').innerHTML = "";
  document.getElementById('targetPtag').innerHTML = "";
  let y = '<div id="showProgressSconds"></div><div id="progress-bar"><div id="progress"></div></div> <img src="../images/description/description' + pageNumber + '.png' + '" alt="CLS Speaking Description Pictures">';
  document.getElementById('glAudioCard').innerHTML = y;
};
function getDescriptionPageNumber2() {
  let pageNumber = Math.floor(Math.random() * (84 - 42) + 1);
  document.getElementById('clsRandom').innerHTML = "";
  document.getElementById('targetPtag').innerHTML = "";
  let y = '<div id="showProgressSconds"></div><div id="progress-bar"><div id="progress"></div></div> <img src="../images/description/description' + pageNumber + '.png' + '" alt="CLS Speaking Description Pictures">';
  document.getElementById('glAudioCard').innerHTML = y;
};
function getDescriptionPageNumberAll() {
  let pageNumber = Math.floor(Math.random() * (84 - 1));
  document.getElementById('clsRandom').innerHTML = "";
  document.getElementById('targetPtag').innerHTML = "";
  let y = '<div id="showProgressSconds"></div><div id="progress-bar"><div id="progress"></div></div> <img src="../images/description/description' + pageNumber + '.png' + '" alt="CLS Speaking Description Pictures">';
  document.getElementById('glAudioCard').innerHTML = y;
};


function getSmallTalkPageNumber(pageNumber) {
  let z = '<audio controls><source src="../src/audio/' + pageNumber + '.m4a" ></audio>';

  document.getElementById('audioSetting').innerHTML = z;
  let y = '<img src="../src/images/grammar_image/glPage/smallTalk' + pageNumber + '.png' + '" alt="GrammarPage">';
  document.getElementById('glAudioCard').innerHTML = y;
};

// tabs
document.querySelectorAll('#nav li').forEach(function (navEl) {
  navEl.onclick = function () {
    toggleTab(this.id, this.dataset.target);
  };
});

function toggleTab(selectedNav, targetId) {
  var navEls = document.querySelectorAll('#nav li');

  navEls.forEach(function (navEl) {
    if (navEl.id == selectedNav) {
      navEl.classList.add('is-active');
    } else {
      if (navEl.classList.contains('is-active')) {
        navEl.classList.remove('is-active');
      }
    }
  });

  var tabs = document.querySelectorAll('.tab-pane');

  tabs.forEach(function (tab) {
    if (tab.id == targetId) {
      tab.style.display = 'block';
    } else {
      tab.style.display = 'none';
    }
  });
}
// // 글씨체
// document.getElementById('l1').style.fontFamily = 'Yeon Sung';
// document.getElementById('l2').style.fontFamily = 'Gamja Flower';
// document.getElementById('l3').style.fontFamily = 'Black Han Sans';
// document.getElementById('l4').style.fontFamily = 'Single Day';
// document.getElementById('l5').style.fontFamily = 'Gaegu';
// document.getElementById('l6').style.fontFamily = 'Jua';
// document.getElementById('l7').style.fontFamily = 'Nanum Gothic';

function changeFont1() {
  // 1. 대상 element 선택
  const element = document.getElementById('clsRandom');
  // 2. style 변경
  (element.style.fontFamily = 'Yeon Sung');
  const element1 = document.getElementById('clsRandom2');
  (element1.style.fontFamily = 'Yeon Sung');
}

function changeFont2() {
  const element = document.getElementById('clsRandom');
  (element.style.fontFamily = 'Gamja Flower');
  const element1 = document.getElementById('clsRandom2');
  (element1.style.fontFamily = 'Gamja Flower');
}

function changeFont3() {
  const element = document.getElementById('clsRandom');
  (element.style.fontFamily = 'Black Han Sans');
  const element1 = document.getElementById('clsRandom2');
  (element1.style.fontFamily = 'Black Han Sans');
}

function changeFont4() {
  const element = document.getElementById('clsRandom');
  (element.style.fontFamily = 'Single Day');
  const element1 = document.getElementById('clsRandom2');
  (element1.style.fontFamily = 'Single Day');
}
function changeFont5() {
  const element = document.getElementById('clsRandom');
  (element.style.fontFamily = 'Gaegu');
  const element1 = document.getElementById('clsRandom2');
  (element1.style.fontFamily = 'Gaegu');
}
function changeFont6() {
  const element = document.getElementById('clsRandom');
  (element.style.fontFamily = 'Jua');
  const element1 = document.getElementById('clsRandom2');
  (element1.style.fontFamily = 'Jua');
}
function changeFont7() {
  const element = document.getElementById('clsRandom');
  (element.style.fontFamily = 'Nanum Gothic');
  const element1 = document.getElementById('clsRandom2');
  (element1.style.fontFamily = 'Nanum Gothic');
}

function changeFontSize1() {
  // 1. 대상 element 선택
  const element = document.getElementById('clsRandom');
  const element2 = document.getElementById('clsRandom2');
  // 2. style 변경
  element.style.fontSize = '50px';
  element2.style.fontSize = '50px';
}

function changeFontSize2() {
  // 1. 대상 element 선택
  const element = document.getElementById('clsRandom');
  const element2 = document.getElementById('clsRandom2');

  // 2. style 변경
  element.style.fontSize = '100px';
  element2.style.fontSize = '100px';
}
function changeFontSize3() {
  // 1. 대상 element 선택
  const element = document.getElementById('clsRandom');
  const element2 = document.getElementById('clsRandom2');

  // 2. style 변경
  element.style.fontSize = '150px';
  element2.style.fontSize = '150px';
}


function changeTextAlignLeft() {
  // 1. 대상 element 선택
  const element = document.getElementById('clsRandom');
  const element2 = document.getElementById('clsRandom2');

  // 2. style 변경
  element.style.textAlign = 'left';
  element2.style.textAlign = 'left';
}
function changeTextAlignCenter() {
  // 1. 대상 element 선택
  const element = document.getElementById('clsRandom');
  const element2 = document.getElementById('clsRandom2');

  // 2. style 변경
  element.style.textAlign = 'center';
  element2.style.textAlign = 'center';
}
function changeTextAlignRight() {
  // 1. 대상 element 선택
  const element = document.getElementById('clsRandom');
  const element2 = document.getElementById('clsRandom2');

  // 2. style 변경
  element.style.textAlign = 'right';
  element2.style.textAlign = 'right';
}
function changeTextColorWhite() {
  // 1. 대상 element 선택
  const element2 = document.getElementById('clsRandom2');

  // 2. style 변경
  element2.style.color = 'white';
}
function changeTextColorBlack() {
  // 1. 대상 element 선택
  const element2 = document.getElementById('clsRandom2');

  // 2. style 변경
  element2.style.color = 'black';
}

// 전치사구 부사구 등
const MODIFIERS_K = new Array();
const MODIFIERS_E = new Array();

function irregularAll() {
  let valueNumber = Math.floor(Math.random() * IRREGULAR_VERB_Q.length);
  let kWord = IRREGULAR_VERB_Q[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}



///////////////////////////////    참고용 Speaking Drill Test ///////////////////////////////////////////////////////////////


const PRONOUN_PEOPLE = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");

const ADJECTIVE_POSITIVE_PEOPLE_E = new Array("fast", "brave", "good", "bad", "loud", "quiet", "smart", "stupid", "kind", "warm", "handsome", "angry", "hungry", "generous", "weak", "strong", "rich", "poor", "young", "old", "calm", "right", "beautiful", "ugly", "happy", "sad", "safe", "dangerous", "cute");
const ADJECTIVE_POSITIVE_PEOPLE_K = new Array("빠른", "용감한", "좋은", "나쁜", "시끄러운", "조용한", "똑똑한", "멍청한", "친절한", "따뜻한", "잘생긴", "화난", "배고픈", "관대한", "약한", "강한", "부유한", "가난한", "젊은", "늙은", "침착한", "옳은", "아름다운", "못생긴", "행복한", "슬픈", "안전한", "위험한", "귀여운");
const ADJECTIVE_POSITIVE_PEOPLE = new Array("빠르다", "용감하다", "좋다", "나쁘다", "시끄럽다", "조용하다", "똑똑하다", "멍청하다", "친절하다", "따뜻하다", "잘생겼다", "화난다", "배고프다", "관대하다", "약하다", "강하다", "부유하다", "가난하다", "젊다", "늙었다", "침착하다", "옳다", "아름답다", "못생겼다", "행복하다", "슬프다", "안전하다", "위험하다", "귀엽다");
const ADJECTIVE_NEGATIVE_PEOPLE = new Array("빠르지 않다", "용감하지 않다", "좋지 않다", "나쁘지 않다", "시끄럽지 않다", "조용하지 않다", "똑똑하지 않다", "멍청하지 않다", "친절하지 않다", "따뜻하지 않다", "안 잘생겼다", "안 화난다", "안 배고프다", "관대하지 않다", "약하지 않다", "강하지 않다", "부유하지 않다", "가난하지 않다", "젊지 않다", "안 늙었다", "침착하지 않다", "옳지 않다", "아름답지 않다", "안 못생겼다", "행복하지 않다", "슬프지 않다", "안전하지 않다", "위험하지 않다", "귀엽지 않다");
const ADJECTIVE_INTERROGATIVE_PEOPLE = new Array("빠르니?", "용감하니?", "좋니?", "나쁘니?", "시끄럽니?", "조용하니?", "똑똑하니?", "멍청하니?", "친절하니?", "따뜻하니?", "잘생겼니?", "화났니?", "배고프니?", "관대하니?", "약하니?", "강하니?", "부유하니?", "가난하니?", "젊니?", "늙었니?", "침착하니?", "옳니?", "아름답니?", "못생겼니?", "행복하니?", "슬프니?", "안전하니?", "위험하니?", "귀엽니?");
const ADJECTIVE_POSITIVE_THINGS_E = new Array("big", "small", "fast", "good", "bad", "expensive", "cheap", "thick", "thin", "loud", "quiet", "smart", "stupid", "wet", "dry", "heavy", "light", "hard", "soft", "wide", "weak", "strong", "long", "short", "high", "low", "right", "true", "false", "beautiful", "ugly", "new", "slow", "safe", "dangerous", "cute");
const ADJECTIVE_POSITIVE_THINGS_K = new Array("큰", "작은", "빠른", "좋은", "나쁜", "비싼", "싼", "두꺼운", "얇은", "시끄러운", "조용한", "똑똑한", "멍청한", "젖은", "마른", "무거운", "가벼운", "딱딱한", "부드러운", "넓은", "약한", "강한", "긴", "짧은", "높은", "낮은", "옳은", "참된", "거짓의", "아름다운", "못생긴", "새로운", "느린", "안전한", "위험한", "귀여운");
const ADJECTIVE_POSITIVE_THINGS = new Array("크다", "작다", "빠르다", "좋다", "나쁘다", "비싸다", "싸다", "두껍다", "얇다", "시끄럽다", "조용하다", "똑똑하다", "멍청하다", "젖었다", "말랐다", "무겁다", "가볍다", "딱딱하다", "부드럽다", "넓다", "약하다", "강하다", "길다", "짧다", "높다", "낮다", "옳다", "진실이다", "거짓이다", "아름답다", "못생겼다", "새롭다", "느리다", "안전하다", "위험하다", "귀엽다");
const ADJECTIVE_NEGATIVE_THINGS = new Array("크지 않다", "작지 않다", "빠르지 않다", "좋지 않다", "나쁘지 않다", "비싸지 않다", "싸지 않다", "두껍지 않다", "얇지 않다", "시끄럽지 않다", "조용하지 않다", "똑똑하지 않다", "멍청하지 않다", "안 젖었다", "안 말랐다", "안 무겁다", "안 가볍다", "안 딱딱하다", "부드럽지 않다", "넓지 않다", "약하지 않다", "강하지 않다", "길지 않다", "짧지 않다", "높지 않다", "낮지 않다", "옳지 않다", "진실이지 않다", "거짓이지 않다", "아름답지 않다", "안 못생겼다", "새롭지 않다", "느리지 않다", "안전하지 않다", "위험하지 않다", "귀엽지 않다");
const ADJECTIVE_INTERROGATIVE_THINGS = new Array("크니?", "작니?", "빠르니?", "좋니?", "나쁘니?", "비싸니?", "싸니?", "두껍니?", "얇니?", "시끄럽니?", "조용하니?", "똑똑하니?", "멍청하니?", "젖었니?", "말랐니?", "무겁니?", "가볍니?", "딱딱하니?", "부드럽니?", "넓니?", "약하니?", "강하니?", "기니?", "짧니?", "높니?", "낮니?", "옳니?", "진실이니?", "거짓이니?", "아름답니?", "못생겼니?", "새롭니?", "느리니?", "안전하니?", "위험하니?", "귀엽니?");

const VERB_GENERAL_PAST_PARTICIPLE_ALL_E = new Array("loved", "liked", "enjoyed", "begun", "stopped", "opened", "closed", "cooked", "eaten", "wanted", "run", "flown", "called", "made", "given", "gone", "come", "said", "met", "left", "had", "drunk", "jumped", "caught", "needed", "washed", "walked", "stood", "sat", "fallen", "played", "studied", "helped", "touched", "thought", "pulled", "pushed", "drawn", "brought", "sent", "cut", "read", "moved", "asked", "used", "done", "heard", "cried", "swum", "slept");
const VERB_GENERAL_PAST_ALL_E = new Array("loved", "liked", "enjoyed", "began", "stopped", "opened", "closed", "cooked", "ate", "wanted", "ran", "flew", "called", "made", "gave", "went", "came", "said", "met", "left", "had", "drank", "jumped", "caught", "needed", "washed", "walked", "stood", "sat", "fell", "played", "studied", "helped", "touched", "thought", "pulled", "pushed", "drew", "brought", "sent", "cut", "read", "moved", "asked", "used", "did", "heard", "cried", "swam", "slept");
const VERB_GENERAL_POSITIVE3_ALL_E = new Array("loves", "likes", "enjoys", "begins", "stops", "opens", "closes", "cooks", "eats", "wants", "runs", "flies", "calls", "makes", "gives", "goes", "comes", "says", "meets", "leaves", "has", "drinks", "jumps", "catches", "needs", "washes", "walks", "stands", "sits", "falls", "plays", "studies", "helps", "touches", "thinks", "pulls", "pushes", "draws", "brings", "sends", "cuts", "reads", "moves", "asks", "uses", "does", "hears", "cries", "swims", "sleeps");
const VERB_GENERAL_POSITIVE_ALL_E = new Array("love", "like", "enjoy", "begin", "stop", "open", "close", "cook", "eat", "want", "run", "fly", "call", "make", "give", "go", "come", "say", "meet", "leave", "have", "drink", "jump", "catch", "need", "wash", "walk", "stand", "sit", "fall", "play", "study", "help", "touch", "think", "pull", "push", "draw", "bring", "send", "cut", "read", "move", "ask", "use", "do", "hear", "cry", "swim", "sleep");
const VERB_GENERAL_POSITIVE_ALL = new Array("사랑한다", "좋아한다", "즐긴다", "시작한다", "멈춘다", "연다", "닫는다", "요리한다", "먹는다", "원한다", "달린다", "난다", "전화한다", "만든다", "준다", "간다", "온다", "말한다", "만난다", "떠난다", "가지고 있다", "마신다", "점프한다", "잡는다", "필요하다", "씻는다", "걷는다", "일어선다", "앉는다", "넘어진다", "논다", "공부한다", "돕는다", "만진다", "생각한다", "당긴다", "민다", "그린다", "가져온다", "보낸다", "자른다", "읽는다", "움직인다", "묻는다", "사용한다", "한다", "들린다", "운다", "수영한다", "잔다");
const VERB_GENERAL_NEGATIVE_ALL = new Array("사랑하지 않는다 ", "좋아하지 않는다 ", "즐기지 않는다 ", "시작하지 않는다 ", "멈추지 않는다", "열지 않는다", "닫지 않는다", "요리하지 않는다", "먹지 않는다", "안 원한다", "안 달린다", "안 난다", "전화 안한다", "안 만든다", "안 준다", "안 간다", "안 온다", "말하지 않는다", "안 만난다", "안 떠난다", "가지고 있지 않다", "마시지 않는다", "점프하지 않는다", "잡지 않는다", "안 필요하다", "씻지 않는다", "걷지 않는다", "일어서지 않는다", "앉지 않는다", "넘어지지 않는다", "놀지 않는다", "공부하지 않는다", "돕지 않는다", "안 만진다", "생각하지 않는다", "안 당긴다", "안 민다", "안 그린다", "안 가져온다", "안 보낸다", " 안 자른다", "안 읽는다", "안 움직인다", " 물어보지 않는다 ", "안 사용한다", "안 한다", "안 들린다", "안 운다", "수영하지 않는다", "안잔다");
const VERB_GENERAL_INTERROGATIVE_ALL = new Array("사랑하니?", "좋아하니?", "즐기니?", "시작하니?", "멈추니?", "여니?", "닫니?", "요리하니?", "먹니?", "원하니?", "달리니?", "나니?", "전화하니?", "만드니?", "주니?", "가니?", "오니?", "말하니?", "만나니?", "떠나니?", "가지고 있니?", "마시니?", "점프하니?", "잡니?", "필요하니?", "씻니?", "걷니?", "일어서니?", "앉니?", "넘어지니?", "노니?", "공부하니?", "돕니?", "만지니?", "생각하니?", "당기니?", "미니?", "그리니?", "가져오니?", "보내니?", "자르니?", "읽니?", "움직이니?", "묻니?", "사용하니?", "하니?", "들리니?", "우니?", "수영하니?", "자니?");
const VERB_GENERAL_ALL = new Array("사랑한다", "좋아한다", "즐긴다", "시작한다", "멈춘다", "연다", "닫는다", "요리한다", "먹는다", "원한다", "달린다", "난다", "전화한다", "만든다", "준다", "간다", "온다", "말한다", "만난다", "떠난다", "가지고 있다", "마신다", "점프한다", "잡는다", "필요하다", "씻는다", "걷는다", "일어선다", "앉는다", "넘어진다", "논다", "공부한다", "돕는다", "만진다", "생각한다", "당긴다", "민다", "그린다", "가져온다", "보낸다", "자른다", "읽는다", "움직인다", "묻는다", "사용한다", "한다", "들린다", "운다", "수영한다", "잔다", "사랑하지 않는다 ", "좋아하지 않는다 ", "즐기지 않는다 ", "시작하지 않는다 ", "멈추지 않는다", "열지 않는다", "닫지 않는다", "요리하지 않는다", "먹지 않는다", "안 원한다", "안 달린다", "안 난다", "전화 안한다", "안 만든다", "안 준다", "안 간다", "안 온다", "말하지 않는다", "안 만난다", "안 떠난다", "가지고 있지 않다", "마시지 않는다", "점프하지 않는다", "잡지 않는다", "안 필요하다", "씻지 않는다", "걷지 않는다", "일어서지 않는다", "앉지 않는다", "넘어지지 않는다", "놀지 않는다", "공부하지 않는다", "돕지 않는다", "안 만진다", "생각하지 않는다", "안 당긴다", "안 민다", "안 그린다", "안 가져온다", "안 보낸다", " 안 자른다", "안 읽는다", "안 움직인다", " 물어보지 않는다 ", "안 사용한다", "안 한다", "안 들린다", "안 운다", "수영하지 않는다", "안잔다", "사랑하니?", "좋아하니?", "즐기니?", "시작하니?", "멈추니?", "여니?", "닫니?", "요리하니?", "먹니?", "원하니?", "달리니?", "나니?", "전화하니?", "만드니?", "주니?", "가니?", "오니?", "말하니?", "만나니?", "떠나니?", "가지고 있니?", "마시니?", "점프하니?", "잡니?", "필요하니?", "씻니?", "걷니?", "일어서니?", "앉니?", "넘어지니?", "노니?", "공부하니?", "돕니?", "만지니?", "생각하니?", "당기니?", "미니?", "그리니?", "가져오니?", "보내니?", "자르니?", "읽니?", "움직이니?", "묻니?", "사용하니?", "하니?", "들리니?", "우니?", "수영하니?", "자니?");

const VERB_GENERAL_ADJECTIVE_ALL = new Array("사랑하는", "좋아하는", "즐기는", "시작하는", "멈추는", "여는", "닫는", "요리하는", "먹는", "원하는", "달리는", "나는", "전화하는", "만드는", "주는", "가는", "오는", "말하는", "만나는", "떠나는", "가지고 있는", "마시는", "점프하는", "잡는", "필요한", "씻는", "걷는", "일어서는", "앉는", "넘어지는", "노는", "공부하는", "돕는", "만지는", "생각하는", "당기는", "미는", "그리는", "가져오는", "보내는", "자르는", "읽는", "움직이는", "묻는", "사용하는", "하는", "들리는", "우는", "수영하는", "자는");
const VERB_GENERAL_PAST_ALL_K = new Array("사랑했다", "좋아했다", "즐겼다", "시작했다", "멈추었다", "열었다", "닫았다", "요리했다", "먹었다", "원했다", "달렸다", "날았다", "전화했다", "만들었다", "줬다", "갔다", "왔다", "말했다", "만났다", "떠났다", "가지고 있었다", "마셨다", "점프했다", "잡았다", "필요했다", "씻었다", "걸었다", "일어섰다", "앉았다", "넘어졌다", "놀았다", "공부했다", "도왔다", "만졌다", "생각했다", "당겼다", "민다", "그렸다", "가져왔다", "보냈다", "잘랐다", "읽었다", "움직였다", "물었다", "사용했다", "했다", "들렸다", "울었다", "수영했다", "잤다")


const THINGS_S_K = new Array('그것은'); // , '이것은', '저것은'
const THINGS_S_E = new Array('It'); //, 'This', 'That'
const THINGS_S_Be_E = new Array('It is'); //, 'This', 'That'
const THINGS_small_S_Be_E = new Array('it is'); //, 'This', 'That'
const THINGS_INTERROGATIVE_S_Be_E = new Array('Is it'); //, 'This', 'That'
const THINGS_NoS_K = new Array('그것들은'); //, '이것들은', '저것들은'
const THINGS_NoS_E = new Array('They'); //, 'These', 'Those'
const THINGS_NoS_Be_E = new Array('They are'); //, 'These', 'Those'
const THINGS_small_NoS_Be_E = new Array('they are'); //, 'These', 'Those'
const THINGS_INTERROGATIVE_NoS_Be_E = new Array('Are they'); //, 'These', 'Those'
const PEOPLE_S_K = new Array('그는', '그녀는');
const PEOPLE_S_E = new Array('He', 'She');
const PEOPLE_S_Be_E = new Array('He is', 'She is');
const PEOPLE_small_S_Be_E = new Array('he is', 'she is');
const PEOPLE_INTERROGATIVE_S_Be_E = new Array('Is he', 'Is she');
const PEOPLE_NoS_K = new Array('나는', '너는', '우리는', '너희들은', '그들은');
const PEOPLE_NoS_E = new Array('I', 'You', 'We', 'You', 'They');
const PEOPLE_NoS_Be_E = new Array('I am', 'You are', 'We are', 'You are', 'They are');
const PEOPLE_small_NoS_Be_E = new Array('I am', 'you are', 'we are', 'you are', 'they are');
const PEOPLE_Be_K_PAST = new Array('나는', '너는', '그는', '그녀는', '그것은', '우리는', '너희들은', '그들은');
const PEOPLE_Be_E_PAST = new Array('I was', 'You were', 'He was', 'She was', 'It was', 'We were', 'You were', 'They were');
const PEOPLE_INTERROGATIVE_NoS_Be_E = new Array('Am I', 'Are you', 'Are we', 'Are you', 'Are they');
const PEOPLE_small_INTERROGATIVE_NoS_Be_E = new Array('am I', 'are you', 'are we', 'are you', 'are they');
const PEOPLE_INTERROGATIVE_Be_E = new Array('Was I', 'Were you', 'Was he', 'Was she', 'Was it', 'Were we', 'Were you', 'Were they');

const S_2K = new Array('그것이', '그가', '그녀가'); // , '이것은', '저것은'
const S_K = new Array('그것은', '그는', '그녀는'); // , '이것은', '저것은'
const S_E = new Array('It', 'He', 'She'); //, 'This', 'That'
const small_S_E = new Array('it', 'he', 'she'); //, 'This', 'That'
const S_INTERROGATIVE_E = new Array('Does it', 'Does he', 'Does she'); //, 'This', 'That'
const NoS_2K = new Array('네가', '우리가', '너희들이', '그들이', '그것들이'); //, '이것들은', '저것들은'
const NoS_K = new Array('나는', '너는', '우리는', '너희들은', '그들은', '그것들은'); //, '이것들은', '저것들은'
const NoS_E = new Array('I', 'You', 'We', 'You', 'They', 'They'); //, 'These', 'Those'
const small_NoS_E = new Array('I', 'you', 'we', 'you', 'they', 'they'); //, 'These', 'Those'
const NoS_2E = new Array('You', 'We', 'You', 'They', 'They'); //, 'These', 'Those'
const NoS_INTERROGATIVE_E = new Array('Do I', 'Do you', 'Do we', 'Do you', 'Do they', 'Do they'); //, 'These', 'Those'
const NoS_INTERROGATIVE_E_PAST = new Array('Did I', 'Did you', 'Did he', 'Did she', 'Did it', 'Did we', 'Did you', 'Did they', 'Did they'); //, 'These', 'Those'


const ADJECTIVE_COMPARATIVE_POSITIVE_PEOPLE_E = new Array("faster", "braver", "better", "worse", "louder", "quieter", "smarter", "stupider", "kinder", "warmer", "handsomer", "angrier", "hungrier", "more generous", "weaker", "stronger", "richer", "poorer", "younger", "older", "calmer", "righter", "more beautiful", "uglier", "happier", "sadder", "safer", "more dangerous", "cuter");
const ADJECTIVE_SUPERATIVE_POSITIVE_PEOPLE_E = new Array("fastest", "bravest", "best", "worst", "loudest", "quietest", "smartest", "stupidest", "kindest", "warmest", "handsomest", "angriest", "hungriest", "most generous", "weakest", "strongest", "richest", "poorest", "youngest", "oldest", "calmest", "rightest", "most beautiful", "ugliest", "happiest", "saddest", "safest", "most dangerous", "cutest");
const ADJECTIVE_COMPARATIVE_POSITIVE_THINGS_E = new Array("bigger", "smaller", "faster", "better", "worse", "more expensive", "cheaper", "thicker", "thinner", "louder", "quieter", "smarter", "stupider", "wetter", "drier", "heavier", "lighter", "harder", "softer", "wider", "weaker", "stronger", "longer", "shorter", "higher", "lower", "righter", "truer", "falser", "more beautiful", "uglier", "newer", "slower", "safer", "more dangerous", "cuter"); // 비교급
const ADJECTIVE_SUPERATIVE_POSITIVE_THINGS_E = new Array("biggest", "smallest", "fastest", "best", "worst", "most expensive", "cheapest", "thickest", "thinnest", "loudest", "quietest", "smartest", "stupidest", "wettest", "driest", "heaviest", "lightest", "hardest", "softest", "widest", "weakest", "strongest", "longest", "shortest", "highest", "lowest", "rightest", "truest", "falsest", "most beautiful", "ugliest", "newest", "slowest", "safest", "most dangerous", "cutest"); // 최상급

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////



let chooseVerb = Math.floor(Math.random() * 2);

// Random Code 생성
function getRandomTwoChar(value) {
  return value[Math.floor(Math.random() * value.length)];
}

// Random Code 생성
function getRandomTwoChar2(valueK, valueE) {
  let valueNumber = Math.floor(Math.random() * valueK.length);
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById('clsRandom').innerText = valueK;
  document.getElementById('clsRandom2').innerText = valueE;
  return valueNumber;
}


const example = new Array();
const valueK = new Array();
const valueE = new Array();

function getRandomChar(value) {
  return value.charAt(Math.floor(Math.random() * value.length));
  // 문자열 특정 인덱스 단일문자 반환 / floor 반내림 / random 0-1사이 랜덤값 * 총 문자열의 수(21)
}


//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// const box /// constBox  /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////




//Small Talk
const day_K = new Array("0 이름이 뭐예요?", "1 몇 살 이예요?", "2 잘 지내요?", "3 날씨 어때요?", "4 몇 시 예요?", "5 오늘은 무슨 요일이예요? (어제는 무슨 요일이었어요?)", "6 날짜는? ex) 12/13", "7 생일이 언제예요?", "8 지금은 무슨 계절인가요?", "9 가장 좋아하는 계절은 뭐예요?", "10 _______을(를) 좋아합니까? ( 색상 / 음식 / 과목 / 계절 )", "11 무엇을 좋아해요?", "12 ______가 있어요? ( 물건 / 펜 / 애완 동물 / 취미 ...)", "13 당신은 무엇을 가지고 있어요?", "14 당신의 _____은(는) 어디에 있어요? ( 가방 / 연필 / 책 / 친구 / 엄마 / 아빠 / 숙제 ... )", "15 어디 사세요?", "16 이게 뭐야?", "17 _____ 할 수 있어요? (수영/달리기/점프/다이빙/말하기/밀기)", "18 무엇을 할 수 있어요?", "19 아침에 뭐해요?", "20 오후에 무엇을 합니까?", "21 저녁에 뭐해?", "22 뭐 하고 있어?", "23 뭐 입고 있어요?", "24 당신의 친구는 무엇을 입고 있어요? 뭐하고 있어요?", "25 어제 뭐했어요?", "26 지난 주말에 뭐 했어요?", "27 지난 주말에 어디 갔어요?", "28 주말은 어땠어요?", "29 CLS 끝나고 뭐 할꺼야?", "30 이번 주말에 무엇을 할 거예요?", "31 어느 것이 더 작아요? (크다/강하다/빠르다/약하다)", "32 어느 것이 가장 작아요?", "33 당신은 __________을(를) 몇 개 가지고 있어요? ( 귀 / 눈 / 다리 / 손가락 ... )", "34 일년에 몇개의 계절이 있어요?", "35 어디 사세요?", "36 몇 시에 일어나요?", "37 당신의 방에 __________가 있습니까? ( 책상 / 의자 / 창문 ... )", "38 가족은 몇 명이예요?", "39 일주일에 책을 몇 권 읽어요?", "40 가장 좋아하는 과목은 뭐예요? 왜요?", "41 취미가 있나요?", "42 좋아하는 선생님은? 왜 그 분을 좋아해요?", "43 가장 친한 친구는 누구예요?", "44 주말에 어디 가고 싶어요?", "45 휴가를 어디로 가고 싶어요?", "46 휴가에 무엇을 하고 싶어요?", "47 다른 나라에 가본 적이 있어요?", "48 여가 시간에 뭐 하는 것을 좋아해요?", "49 어느 나라에서나 살 수 있다면 어느 나라를 선택하고 싶어요? 그 이유는?", "50 언제 행복하세요?");
const day_E = new Array("What's your name? ", "How old are you?", "How are you?", "How's the weather?", "What time is it?", "What day is it today? (What day was it yesterday?)", "What's the date? 12/1", "When is your birthday?", "What season is it?", "What's your favorite season?", "Do you like _______? ( color / food / subjects / season )", "What do you like?", "Do you have ______? ( things / pens / pets / hobbies ...)", "What do you have?", "Where is your _____? ( bag / pencil / book / friend / mom / dad / homework ... )", "Where do you live?", "What is this?", "Can you _____? (swim / run / jump / dive / talk / slide )", "What can you do?", "What do you do in the morning? ", "What do you do in the afternoon? ", "What do you do in the evening?", "What are you doing?", "What are you wearing?", "What is your friend wearing? / doing?", "What did you do yesterday?", "What did you do last weekend?", "Where did you go last weekend?", "How was your weekend?", "What will you do after CLS?", "What will you do this weekend?", "Which one is smaller? ( big / strong / fast / weak )", "32 Which one is the smallest?", "How many __________ do you have ? ( ears / eyes / legs / fingers ... )", "How many seasons are there in a year?", "Where do you live?", "What time do you get up?", "Is there __________ in your room? ( a desk / chair / window ... )", "38 How big is your family?", "How many books do you read a week?", "What’s your favorite subject? Why?", "Do you have any hobbies?", "Who is your favorite teacher? Why do you like her/him?", "Who is your best friend?", "Where do you want to go on the weekend?", "Where do you want to go on a vacation?", "What do you want to do on a vacation?", "Have you ever been to another country?", "What do you like to do in your free time?", "If you could live in any country, which would you pick and why?", "When are you happy?");
const day1_K = new Array("0 이름이 뭐예요?", "1 몇 살 이예요?", "2 잘 지내요?", "3 날씨 어때요?", "4 몇 시 예요?", "5 오늘은 무슨 요일이예요? (어제는 무슨 요일이었어요?)", "6 날짜는? ex) 12/13", "7 생일이 언제예요?", "8 지금은 무슨 계절인가요?", "9 가장 좋아하는 계절은 뭐예요?", "10 _______을(를) 좋아합니까? ( 색상 / 음식 / 과목 / 계절 )");
const day1_E = new Array("What's your name? ", "How old are you?", "How are you?", "How's the weather?", "What time is it?", "What day is it today? (What day was it yesterday?)", "What's the date? 12/1", "When is your birthday?", "What season is it?", "What's your favorite season?", "Do you like _______? ( color / food / subjects / season )");
const day2_K = new Array("11 무엇을 좋아해요?", "12 ______가 있어요? ( 물건 / 펜 / 애완 동물 / 취미 ...)", "13 당신은 무엇을 가지고 있어요?", "14 당신의 _____은(는) 어디에 있어요? ( 가방 / 연필 / 책 / 친구 / 엄마 / 아빠 / 숙제 ... )", "15 어디 사세요?", "16 이게 뭐야?", "17 _____ 할 수 있어요? (수영/달리기/점프/다이빙/말하기/밀기)", "18 무엇을 할 수 있어요?", "19 아침에 뭐해요?", "20 오후에 무엇을 합니까?");
const day2_E = new Array("What do you like?", "Do you have ______? ( things / pens / pets / hobbies ...)", "What do you have?", "Where is your _____? ( bag / pencil / book / friend / mom / dad / homework ... )", "Where do you live?", "What is this?", "Can you _____? (swim / run / jump / dive / talk / slide )", "What can you do?", "What do you do in the morning? ", "What do you do in the afternoon?");
const day3_K = new Array("21 저녁에 뭐해?", "22 뭐 하고 있어?", "23 뭐 입고 있어요?", "24 당신의 친구는 무엇을 입고 있어요? 뭐하고 있어요?", "25 어제 뭐했어요?", "26 지난 주말에 뭐 했어요?", "27 지난 주말에 어디 갔어요?", "28 주말은 어땠어요?", "29 CLS 끝나고 뭐 할꺼야?", "30 이번 주말에 무엇을 할 거예요?");
const day3_E = new Array("What do you do in the evening?", "What are you doing?", "What are you wearing?", "What is your friend wearing? / doing?", "What did you do yesterday?", "What did you do last weekend?", "Where did you go last weekend?", "How was your weekend?", "What will you do after CLS?", "What will you do this weekend?");
const day4_K = new Array("31 어느 것이 더 작아요? (크다/강하다/빠르다/약하다)", "32 어느 것이 가장 작아요?", "33 당신은 __________을(를) 몇 개 가지고 있어요? ( 귀 / 눈 / 다리 / 손가락 ... )", "34 일년에 몇개의 계절이 있어요?", "35 어디 사세요?", "36 몇 시에 일어나요?", "37 당신의 방에 __________가 있습니까? ( 책상 / 의자 / 창문 ... )", "38 가족은 몇 명이예요?", "39 일주일에 책을 몇 권 읽어요?", "40 가장 좋아하는 과목은 뭐예요? 왜요?");
const day4_E = new Array("Which one is smaller? ( big / strong / fast / weak )", "Which one is the smallest?", "How many __________ do you have ? ( ears / eyes / legs / fingers ... )", "How many seasons are there in a year?", "Where do you live?", "What time do you get up?", "Is there __________ in your room? ( a desk / chair / window ... )", "How big is your family?", "How many books do you read a week?", "What’s your favorite subject? Why?");
const day5_K = new Array("41 취미가 있나요?", "42 좋아하는 선생님은? 왜 그 분을 좋아해요?", "43 가장 친한 친구는 누구예요?", "44 주말에 어디 가고 싶어요?", "45 휴가를 어디로 가고 싶어요?", "46 휴가에 무엇을 하고 싶어요?", "47 다른 나라에 가본 적이 있어요?", "48 여가 시간에 뭐 하는 것을 좋아해요?", "49 어느 나라에서나 살 수 있다면 어느 나라를 선택하고 싶어요? 그 이유는?", "50 언제 행복하세요?");
const day5_E = new Array("Do you have any hobbies?", "Who is your favorite teacher? Why do you like her/him?", "Who is your best friend?", "Where do you want to go on the weekend?", "Where do you want to go on a vacation?", "What do you want to do on a vacation?", "Have you ever been to another country?", "What do you like to do in your free time?", "If you could live in any country, which would you pick and why?", "When are you happy?");




// 아래쪽 CLS Speaking Random
// TODO const 대문자로 변경
const consonantVal = 'bcdfghjklmnpqrstvwxyz';
const vowelVal = 'aeiou';
const constantUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const constantLowerCase = 'abcdefghijklmnopqrstuvwxyz';
const pronounBox = new Array('나는 ', '너는 ', '그는 ', '그녀는 ', '그것은 ', '우리는 ', '너희들은 ', '그들은 ');
const pronounBoxK = new Array('나는 ', '너는 ', '그는 ', '그녀는 ', '그것은 ', '우리는 ', '너희들은 ', '그들은 ');
const pronounBoxE = new Array('I ', 'You ', 'He ', 'She ', 'It ', 'We ', 'You ', 'They ');
const pronounBoxElow = new Array('I ', 'you ', 'he ', 'she ', 'it ', 'we ', 'you ', 'they ');
const pronounBoxBeE = new Array('I am ', 'You are ', 'He is ', 'She is ', 'It is ', 'We are ', 'You are ', 'They are ');
const pronounBoxBeE_Q = new Array('Am I ', 'Are you ', 'Is he ', 'Is she ', 'Is it ', 'Are we ', 'Are you ', 'Are they ');
const pronounBoxBeE_smallQ = new Array('am I ', 'are you ', 'is he ', 'is she ', 'is it ', 'are we ', 'are you ', 'are they ');
const pronounBoxBePastE = new Array('I was ', 'You were ', 'He was ', 'She was ', 'It was ', 'We were ', 'You were ', 'They were ');
const pronounBoxHaveE = new Array('I have ', 'You have ', 'He has ', 'She has ', 'It has ', 'We have ', 'You have ', 'They have ');

const prepositionK = new Array();
const prepositionE = new Array();

const ONE_SHOT_CONCEPT_K = new Array("명사", "동사", "형용사", "부사", "대명사", "접속사", "감탄사", "전치사", "관사", "시제", "조동사", "동명사", "분사", "수동태", "부정사", "비교구문", "관계사", "가정법", "의문사", "일치", "화법", "특수구문", "문장", "문장의 종류", "문장의 구성요소", "문장의 5형식");
const ONE_SHOT_CONCEPT_E = new Array("이름", "움직임/상태를 나타내는 말", "[명사수식] 모양/성질 같은 특징", "[명사 빼고 다 수식] 성질 > 부가적; 동사, 형용사, 다른 부사, 문장 전체)", "명사 대신", "(말과 말을) 이어주는 말; 단어-단어, 구-구, 절-절, 문장-문장", "감탄하는 말", "앞에서 치사하게 힌트 주는 말; 힌트 - 시간 장소 위치 >> 어디서 찾나? 인터넷", "명사 짝궁", "시간, 때를 알려주는 말 / 12시제", "동사를 돕는 말", "동사를 명사로", "동사를 형용사로 ", "당할 때 쓰는 말", "동사를 명형부로", "비교할 때 쓰는 표현", "[형용사절] 관계대명사 (접속사+대명사), 관계부사 (접속사+부사) (전치사 + 관계대명사)", "~라면", "물어볼 때 쓰는 말 - 5W1H", "주동(SV)일치, 수, 시제 일치", "말을 전달하는 방법", "강조, 도치 하려고", "SV 한 개씩 + 0개 안 됨, 2개 안 됨", "평부의감명청제", "S V O C", "SV SVC SVO SVOO SVOC");
const ONE_SHOT_CONCEPT_2E = new Array("Nicole, sky, desk 등등", "eat, sleep, am 등등", "pretty, beautiful, hungry 등등", "very, beautifully 등등", "he, she, it 등등", "and, but, or, so, because 등등", "Wow! 등등", "in on at 등등", "a an the", "Verb ", "can, will + Verb", "Verb + -ing", "Verb + -ing/p.p (ing 현재분사/p.p.과거분사)", "be p.p. (by 목적격)", "to Verb", "형부er than, more 형부 + than, the –형부est, the most 형부", "who whose which that 등", "If", "Who What Where When Why How", "", "직접화법, 간접화법", "", "", "", "", "");

const clsDailyExpressionsAllK = new Array("들어가도 되나요?", "한국말로 해도 되나요?", "화장실 다녀와도 되나요?", "물 좀 마셔도 되나요?", "전화 좀 써도 되나요?", "부탁 들어줄 수 있나요?", "도와줄 수 있나요? ", "기다려줄 수 있나요? ", "다시 말해줄 수 있나요? ", "저에게 [뭐] 좀 줄 수 있나요? ", "이쪽으로 와줄 수 있나요? ", "가자! ", "먹자!", "뛰자!", "시작하자!", "하자!", "같이 하자!", "가야 되요?", "먹어야 되요?", "뛰어야 되요?", "시작해야 되요?", "해야 되요?", "써야 되요?");
const clsDailyExpressionsAllE = new Array("May I come in?", "May I speak in Korean?", "May I go to the restroom?", "May I drink some water?", "May I borrow your phone?", "Could you do me a favor?", "Could you help me?", "Could you wait for me?", "Could you say it again?", "Could you give me [something]?", "Could you come here, please?", "Let’s go!", "Let’s eat!", "Let’s run!", "Let’s start!", "Let’s do it!", "Let’s do it together!", "Should I go? Do I have to go?", "Should I eat? Do I have to eat?", "Should I run? Do I have to run?", "Should I start Do I have to start?", "Should I do it? Do I have to do it?", "Should I write it? Do I have to write it?");
const clsDailyExpressionsDay1K = new Array("들어가도 되나요?", "한국말로 해도 되나요?", "화장실 다녀와도 되나요?", "물 좀 마셔도 되나요?", "전화 좀 써도 되나요?");
const clsDailyExpressionsDay1E = new Array("May I come in?", "May I speak in Korean?", "May I go to the restroom?", "May I drink some water?", "May I borrow your phone?");
const clsDailyExpressionsDay2K = new Array("부탁 들어줄 수 있나요?", "도와줄 수 있나요? ", "기다려줄 수 있나요? ", "다시 말해줄 수 있나요? ", "저에게 [뭐] 좀 줄 수 있나요? ", "이쪽으로 와줄 수 있나요? ");
const clsDailyExpressionsDay2E = new Array("Could you do me a favor?", "Could you help me?", "Could you wait for me?", "Could you say it again?", "Could you give me [something]?", "Could you come here, please?");
const clsDailyExpressionsDay3K = new Array("가자! ", "먹자!", "뛰자!", "시작하자!", "하자!", "같이 하자!");
const clsDailyExpressionsDay3E = new Array("Let’s go!", "Let’s eat!", "Let’s run!", "Let’s start!", "Let’s do it!", "Let’s do it together!");
const clsDailyExpressionsDay4K = new Array("가야 되요?", "먹어야 되요?", "뛰어야 되요?", "시작해야 되요?", "해야 되요?", "써야 되요?");
const clsDailyExpressionsDay4E = new Array("Should I go? \n Do I have to go?", "Should I eat? Do I have to eat?", "Should I run? Do I have to run?", "Should I start Do I have to start?", "Should I do it? Do I have to do it?", "Should I write it? Do I have to write it?");

const noun1personK = new Array("성인", "천사", "이모", "아기", "상사", "소년", "형제", "선장", "직원", "부부", "사촌", "고객", "아빠", "딸", "치과의사", "의사", "기술자", "가족", "아버지", "바보", "친구", "신사", "소녀", "할아버지", "사람", "영웅", "인간", "남편", "아이", "왕", "여성", "어머니", "간호사", "부모", "경찰", "왕자", "여왕", "여동생", "아들", "학생", "10대의", "삼촌", "아내", "여성", "농부", "외국인", "여걸", "소방관", "충고하는 사람", "10대 소년", "여행자", "동료", "학급친구", "한 방 친구", "인간", "육군 대장", "거지", "승객", "시민", "어릿광대", "상인", "거짓말쟁이", "주인", "적", "지배자", "도둑", "방문자", "여행자", "단짝", "교수", "고용주", "피고용인", "음악가", "배우", "여배우", "하인", "지도자", "해녀", "계산원", "뱃사람", "사냥꾼", "경영자", "변호사", "시장", "고객", "이발사", "남자", "여성", "운동선수", "지원자", "악마", "요정", "반대자", "청중", "탐험가", "백만장자", "(기어)오르는 사람", "동무", "주인", "이야기하는 사람", "상인", "지휘자", "시민", "일반인", "목수", "교대자", "선조", "범죄자", "사람들", "비서", "유권자", "우두머리", "조카", "조카딸", "시인", "강도", "겁쟁이", "교사", "디저트", "노예", "해군", "벌목꾼", "불교도", "소비자", "저자", "의사", "정치가", "천재", "살인자", "작곡가", "해군대장", "황제", "공주");
const noun1personE = new Array("adult", "angel", "aunt", "baby", "boss", "boy", "brother", "captain", "clerk", "couple", "cousin", "customer", "dad", "daughter", "dentist", "doctor", "engineer", "family", "father", "fool", "friend", "gentleman", "girl", "grandfather", "guy", "hero", "human", "husband", "kid", "king", "lady", "mother", "nurse", "parent", "police", "prince", "queen", "sister", "son", "student", "teen", "uncle", "wife", "woman", "farmer", "foreigner", "heroine", "fireman", "adviser", "teenager", "tourist", "mate", "classmate", "roommate", "mankind", "general", "beggar", "passenger", "citizen", "clown", "trader", "liar", "owner", "enemy", "ruler", "thief", "visitor", "traveler", "pal", "professor", "employer", "employee", "musician", "actor", "actress", "servant", "leader", "diver", "cashier", "sailor", "hunter", "manager", "lawyer", "mayor", "client", "barber", "male", "female", "athlete", "volunteer", "devil", "fairy", "opponent", "audience", "explorer", "millionaire", "climber", "fellow", "host", "narrator", "merchant", "director", "civil", "civilian", "carpenter", "relay", "ancestor", "criminal", "folk", "secretary", "voter", "chief", "nephew", "niece", "poet", "robbery", "coward", "instructor", "dessert", "slave", "navy", "logger", "Buddhist", "consumer", "author", "physician", "politician", "genius", "murderer", "composer", "admiral", "emperor", "princess");
const noun2objectK = new Array("사고", "오후", "나이", "항공사", "비행기", "사과", "팔", "등", "공", "풍선", "바구니", "박쥐", "화장실", "건전지", "콩", "침대", "침실", "쇠고기", "종", "자전거", "영수증", "혈액", "게시판", "배", "몸", "폭탄", "뼈", "책", "부츠", "병", "바닥", "그릇", "뇌", "브레이크", "가지", "브랜드", "빵", "다리", "거품", "단추", "(동물)우리", "사탕", "모자", "자동차", "당근", "수레", "현금", "성", "체인점", "의자", "원", "교실", "동영상", "시계", "천", "구름", "동전", "쿠키", "구석", "비용", "면 목화", "관", "커튼", "책상", "일기", "접시", "인형", "문", "귀", "지구", "달걀", "엔진", "지우개", "눈", "얼굴", "부채", "농장", "파일", "손가락", "화재", "국기", "꽃", "안개", "음식", "발", "축구", "과일", "유령", "선물", "유리", "장갑", "접착제", "금", "포도", "풀", "머리카락", "손", "모자", "머리", "심장", "열", "헬기", "숙제", "꿀", "얼음", "그것", "청바지", "열쇠", "칼", "잎", "다리", "편지", "선", "입술", "우편", "남자", "지도", "고기", "우유", "거울", "돈", "달", "산", "입", "영화관", "목", "신문", "코", "메모", "석유", "바지", "종이", "배", "사진", "주머니", "감자", "상", "경주", "비", "무지개", "반지", "바위", "지붕", "소금", "모래", "가위", "선박", "신발", "피부", "치마", "눈", "양말", "숟가락", "돌", "딸기", "지하철", "설탕", "태양", "탁자", "꼬리", "테이프", "전화", "교과서", "것", "치아", "장난감", "나무", "우산", "채소", "수박", "창문", "목재", "비누", "총", "쓰레기", "옷", "의복", "지갑", "양배추", "지갑", "팔꿈치", "무기", "초", "발가락", "손수건", "요리기구", "쓰레기", "무덤", "사전", "쟁반", "소나기", "껍질", "발목", "맥주", "베개", "약", "철도", "바지", "식물", "완두콩", "견과", "땅콩", "목구멍", "철", "손톱", "뺨", "밧줄", "위", "연", "담장", "마늘", "강철", "기둥", "우편엽서", "눈물", "막대기", "분수", "서랍", "소설", "상록수", "생산품", "짐", "저널", "뒤꿈치", "여권", "자동차", "입방체", "지느러미", "여과기", "꾸러미", "꾸러미", "잡지", "막대기", "자물쇠", "구멍", "후추", "손잡이", "파도", "식품", "수레바퀴", "오이", "손목", "꽃병", "식초", "씨", "발톱", "곡물", "묘", "약", "버섯", "갈고리", "연료", "내용물", "(여행의) 수하물", "땀", "건설", "동화", "복숭아", "잔디", "혀", "꽃", "창조물", "깃털", "풍자만화", "둥지", "식료품류", "칠판", "벽돌", "항아리", "제분기", "풍차", "젓가락", "소지품", "면허", "돼지고기", "(특정 작업을 위해 고안된) 장치", "눈썹", "단지", "온도계", "소매", "뿌리", "추첨", "실", "바늘", "컨테이너", "발자국", "상품", "눈금", "온실", "보물", "굴뚝", "성냥", "활", "뿔", "주먹", "폐", "막대", "사다리", "모서리", "농작물", "주름", "시집", "시", "위성", "물질", "꾸러미", "표면", "무거운 짐", "연장", "근육", "신경", "얼굴의 생김새", "불꽃", "반도", "주전자", "꼬리표", "양상추", "탄알", "통나무", "삽", "자석", "물살", "도끼", "콩", "곡식", "매", "대륙", "엄지손가락", "끈", "화살", "손바닥", "수도꼭지", "덫", "세포", "세탁", "기계", "빵 한 덩어리", "자원", "액체", "독감");
const noun2objectE = new Array("accident", "afternoon", "age", "airline", "airplane", "apple", "arm", "back", "ball", "balloon", "basket", "bat", "bathroom", "battery", "bean", "bed", "bedroom", "beef", "bell", "bicycle", "bill", "blood", "board", "boat", "body", "bomb", "bone", "book", "boot", "bottle", "bottom", "bowl", "brain", "brake", "branch", "brand", "bread", "bridge", "bubble", "button", "cage", "candy", "cap", "car", "carrot", "cart", "cash", "castle", "chain", "chair", "circle", "classroom", "clip", "clock", "cloth", "cloud", "coin", "cookie", "corner", "cost", "cotton", "crown", "curtain", "desk", "diary", "dish", "doll", "door", "ear", "earth", "egg", "engine", "eraser", "eye", "face", "fan", "farm", "file", "finger", "fire", "flag", "flower", "fog", "food", "foot", "football", "fruit", "ghost", "gift", "glass", "glove", "glue", "gold", "grape", "grass", "hair", "hand", "hat", "head", "heart", "heat", "helicopter", "homework", "honey", "ice", "it", "jeans", "key", "knife", "leaf", "leg", "letter", "line", "lip", "mail", "man", "map", "meat", "milk", "mirror", "money", "moon", "mountain", "mouth", "movie", "neck", "newspaper", "nose", "note", "oil", "pants", "paper", "pear", "picture", "pocket", "potato", "prize", "race", "rain", "rainbow", "ring", "rock", "roof", "salt", "sand", "scissors", "ship", "shoe", "skin", "skirt", "snow", "sock", "spoon", "stone", "strawberry", "subway", "sugar", "sun", "table", "tail", "tape", "telephone", "textbook", "thing", "tooth", "toy", "tree", "umbrella", "vegetable", "watermelon", "window", "wood", "soap", "gun", "trash", "clothes", "clothing", "wallet", "cabbage", "purse", "elbow", "weapon", "candle", "toe", "handkerchief", "cooker", "garbage", "grave", "dictionary", "tray", "shower", "shell", "ankle", "beer", "pillow", "medicine", "railroad", "trousers", "plant", "pea", "nut", "peanut", "throat", "iron", "nail", "cheek", "rope", "stomach", "kite", "fence", "garlic", "steel", "post", "postcard", "tear", "pole", "fountain", "drawer", "novel", "evergreen", "product", "load", "journal", "heel", "passport", "automobile", "cube", "fin", "filter", "pack", "package", "magazine", "bar", "lock", "hole", "pepper", "handle", "wave", "diet", "wheel", "cucumber", "wrist", "vase", "vinegar", "seed", "claw", "grain", "tomb", "drug", "mushroom", "hook", "fuel", "content", "baggage", "sweat", "construction", "fairy tale", "peach", "lawn", "tongue", "bloom", "creature", "feather", "cartoon", "nest", "grocery", "blackboard", "brick", "jar", "mill", "windmill", "chopstick", "belonging", "license", "pork", "device", "eyebrow", "pot", "thermometer", "sleeve", "root", "lot", "thread", "needle", "container", "footprint", "merchandise", "scale", "greenhouse", "treasure", "chimney", "match", "bow", "horn", "fist", "lung", "rod", "ladder", "edge", "crop", "wrinkle", "poetry", "poem", "satellite", "material", "parcel", "surface", "burden", "tool", "muscle", "nerve", "feature", "flame", "peninsula", "kettle", "label", "lettuce", "bullet", "log", "spade", "magnet", "current", "ax", "soy", "cereal", "falcon", "continent", "thumb", "string", "arrow", "palm", "faucet", "trap", "cell", "laundry", "instrument", "loaf", "resource", "fluid", "influenza");
const noun3animalK = new Array("개미", "곰", "벌", "새", "벌레", "고양이", "소", "개", "돌고래", "오리", "코끼리", "여우", "개구리", "말", "사자", "원숭이", "돼지", "강아지", "토끼", "호랑이", "얼룩말", "어린 양", "상어", "매", "올빼미", "거북이", "게", "비둘기", "참새", "달팽이", "당나귀", "염소", "새끼 새", "황소", "표범", "수탉", "칠면조", "암탉", "곤충", "두꺼비");
const noun3animalE = new Array("ant", "bear", "bee", "bird", "bug", "cat", "cow", "dog", "dolphin", "duck", "elephant", "fox", "frog", "horse", "lion", "monkey", "pig", "puppy", "rabbit", "tiger", "zebra", "lamb", "shark", "hawk", "owl", "turtle", "crab", "pigeon", "sparrow", "snail", "donkey", "goat", "chick", "bull", "leopard", "cock", "turkey", "hen", "insect", "toad");
const noun4placeK = new Array("아카데미", "공항", "지역", "은행", "해변", "교회", "영화관", "도시", "동아리", "대학", "회사", "콘서트", "대회", "나라", "시골", "출구", "공장", "분야", "바닥", "숲", "앞", "정원", "문", "땅", "천국", "언덕", "집; 가정의", "병원", "집", "부엌", "호수", "땅", "도서관", "거실", "박물관", "바다", "사무소", "궁전", "공원", "연필", "장소", "식당", "화장실", "강", "도로", "방", "학교", "바다", "상점", "하늘", "남", "공간", "가게", "거리", "마을", "벽", "동물원", "계단", "입구", "유치원", "지옥", "물웅덩이", "운동장", "항구", "마을", "연못", "굴", "골짜기", "해안", "작은 길", "극장", "횡단보도", "시청", "중심가", "도시의 주택가", "바닷가", "오두막집", "그늘", "법정", "화성", "우체국", "형무소", "항구", "빵집", "지하실", "사찰", "태평양", "대서양", "과수원", "교도소", "지대", "경사면", "체육관", "길", "국경", "행성", "도랑", "진료소", "차고", "장소", "시내", "우주");
const noun4placeE = new Array("academy", "airport", "area", "bank", "beach", "church", "cinema", "city", "club", "college", "company", "concert", "contest", "country", "countryside", "exit", "factory", "field", "floor", "forest", "front", "garden", "gate", "ground", "heaven", "hill", "home", "hospital", "house", "kitchen", "lake", "land", "library", "living room", "museum", "ocean", "office", "palace", "park", "pencil", "place", "restaurant", "restroom", "river", "road", "room", "school", "sea", "shop", "sky", "south", "space", "store", "street", "town", "wall", "zoo", "stair", "entrance", "kindergarten", "hell", "pool", "playground", "harbor", "village", "pond", "cave", "valley", "coast", "path", "theater", "crosswalk", "city hall", "downtown", "uptown", "shore", "hut", "shade", "court", "Mars", "post office", "prison", "port", "bakery", "basement", "temple", "Pacific", "Atlantic", "orchard", "jail", "zone", "slope", "gym", "route", "frontier", "planet", "ditch", "clinic", "garage", "location", "stream", "universe");
const noun5conceptK = new Array("억양", "주소", "모험", "공기", "분노", "예술", "기반", "야구", "농구", "목욕", "전투", "아름다움", "탄생", "생일", "아침 식사", "기업", "달력", "경우", "기회", "수업", "감기", "색", "코미디", "조건", "군중", "문화", "주기", "위험", "데이트", "날", "죽음", "대화", "저녁식사", "동쪽", "오차", "저녁", "시험", "예", "사실", "열", "미래", "몸짓", "목표", "신", "그룹", "습관", "두통", "역사", "취미", "휴일", "시간", "생각", "직무", "기쁨", "교훈", "빛", "운", "점심", "수학", "기억", "마음", "개월", "아침", "음악", "이름", "국가", "자연", "밤", "정오", "북", "아무것도 없음", "수", "하나", "부분", "평화", "소풍", "분홍색", "요점", "힘", "현재", "문제", "퍼즐", "질문", "권리", "판매", "과학", "점수", "계절", "측면", "크기", "축구", "노래", "소리", "속도", "이야기", "스트레스", "만찬", "시험", "저것", "그들", "갈증", "이것", "시간", "위쪽의", "관광", "탑", "삼각형", "여행", "유형", "목소리", "전쟁", "물", "방법", "날씨", "결혼", "주", "주말", "체중", "서부", "바람", "단어", "세계", "연도", "슬픔", "정신이상", "선택", "아픔", "정직", "현명함", "배구", "암흑", "상상력", "웃음", "새벽", "나약함", "골칫거리", "명예", "값", "아픔", "고독", "소음", "논쟁", "초대", "햇빛", "해돋이", "일몰", "영광", "필요", "반", "미움", "기쁨", "충고", "의미", "지루함", "수학", "두려움", "운", "편의", "교통", "언어", "한밤중", "거리", "실패", "도입", "개발", "감정", "위치", "보호", "불쌍히 여김", "우아함", "경제", "12개", "친절", "손해", "식사", "고난", "자랑", "발견", "기쁨", "도착", "인내", "대화", "침묵", "차이", "통행", "이유", "사회", "배달", "경이", "별명", "한 쌍", "상징", "웅장", "발명", "기침", "능력", "용기", "외관", "생각하기", "지정", "실망", "속임수", "가을", "1야드", "공학", "왕국", "거래", "싸움", "지식", "등급", "매력", "경험", "조각", "시력", "관광", "합계", "요약", "기록", "주의", "부", "조화", "비용", "지출", "이야기", "직사각형", "사과", "작은 조각", "준비", "요술", "축하", "각도", "경향", "힘", "분리", "물질", "규칙", "시기", "북극", "남극", "만족", "야생", "기간", "도보여행", "숨", "정보", "제안", "졸업", "순간", "자신감", "결과", "의견", "감탄", "교육", "호의", "대화", "고용", "실업", "지역", "산업", "공포", "안전", "대중(사회)", "치료", "시험", "살아남음", "휴식", "1센트", "1세기", "센티미터", "섭씨", "연구", "되풀이", "회복", "끝", "자유", "연설", "행동", "활동", "어린 시절", "비행", "힘", "길이", "높이", "말", "우정", "혼합", "지불", "접촉", "계급", "자기", "장면", "신용", "재주", "규칙", "신청", "사생활", "커뮤니케이션", "임무", "법률", "놀람", "비율", "폭풍", "보랏빛", "관습", "운동", "문법", "상해", "나쁜", "상처", "양", "의식", "병", "경고", "공포", "격노", "온도", "슬픔", "열", "가려움", "정사각형", "인기", "위험", "존재", "정부", "실험", "정도", "수수께끼", "예외", "노동", "치료", "노력", "처벌", "성취", "봄", "환경", "위치", "탐험", "환경", "근원", "대부분", "소수", "호기심", "일", "발음", "중간", "간격", "종교", "불평", "종류", "장애", "가치", "이익", "연결", "재산", "윤곽", "직업", "유사점", "엷은 안개", "이야기", "경우", "서두름", "의도", "투쟁", "방향", "위치", "요청", "요구", "번역", "파괴", "민주주의", "부족", "덩어리", "산성", "틈", "예", "끌어당김", "완성", "관계", "관계", "방어", "결합", "정정", "안락", "곡조", "원인", "죄", "한계", "한정", "세금", "걱정", "성가", "대조", "전통", "주제", "해결", "경향", "선거", "전기", "결점", "홍수", "자유", "목적", "책임", "합", "환경", "오염", "행동", "식욕", "유리", "불리", "수확", "폭력", "장식", "우화", "반대", "물리학", "연합", "위협", "실행", "감사", "기후", "오염", "손해", "헌신", "광고", "인구", "숫자", "효과", "가난", "부서", "공동체", "겁", "증명", "용기", "범위", "세부 사항", "수술", "교육", "조직", "실마리", "산뜻한", "수집", "책임", "의심", "운임", "여행", "신화", "기간", "임금", "자세", "증거", "향상", "공격", "맥박", "지시", "지휘자", "적용", "질", "계산", "방법", "인내", "운명", "출발", "개념", "평판", "불교", "농업", "구역", "기회", "운송 수단", "입장", "무질서", "허가", "목적지", "지나간 자국", "소비", "자취", "전설", "구조", "몫", "지름", "안전", "충돌", "번영", "정치", "범위", "분쟁", "응답", "진화", "혁명", "살인", "침입", "구성", "항해", "상황", "기능", "분석", "재활용", "복습", "보수", "거절", "예약", "응답", "퇴직", "반작용", "구제", "환불", "제한", "결합", "중심", "집중", "영향", "압력", "의기소침", "표현", "인상", "원리", "감정", "(미래의) 전망", "광경", "의심");
const noun5conceptE = new Array("accent", "address", "adventure", "air", "anger", "art", "base", "baseball", "basketball", "bath", "battle", "beauty", "birth", "birthday", "breakfast", "business", "calendar", "case", "chance", "class", "cold", "color", "comedy", "condition", "crowd", "culture", "cycle", "danger", "date", "day", "death", "dialogue", "dinner", "east", "error", "evening", "exam", "example", "fact", "fever", "future", "gesture", "goal", "god", "group", "habit", "headache", "history", "hobby", "holiday", "hour", "idea", "job", "joy", "lesson", "light", "luck", "lunch", "mathematics", "memory", "mind", "month", "morning", "music", "name", "nation", "nature", "night", "noon", "north", "nothing", "number", "one", "part", "peace", "picnic", "pink", "point", "power", "present", "problem", "puzzle", "question", "right", "sale", "science", "score", "season", "side", "size", "soccer", "song", "sound", "speed", "story", "stress", "supper", "test", "that", "they", "thirst", "this", "time", "top", "tour", "tower", "triangle", "trip", "type", "voice", "war", "water", "way", "weather", "wedding", "week", "weekend", "weight", "west", "wind", "word", "world", "year", "sadness", "madness", "choice", "ache", "honesty", "wisdom", "volleyball", "darkness", "imagination", "laughter", "dawn", "weakness", "trouble", "honor", "price", "pain", "loneliness", "noise", "argument", "invitation", "sunlight", "sunrise", "sunset", "glory", "necessity", "half", "hatefulness", "pleasure", "advice", "meaning", "boredom", "math", "fear", "fortune", "convenience", "traffic", "language", "midnight", "distance", "failure", "introduction", "development", "emotion", "position", "protection", "pity", "grace", "economy", "dozen", "kindness", "damage", "meal", "hardship", "pride", "discovery", "delight", "arrival", "patience", "dialog", "silence", "difference", "passage", "reason", "society", "delivery", "wonder", "nickname", "pair", "symbol", "grandeur", "invention", "cough", "ability", "courage", "appearance", "thought", "appointment", "disappointment", "trick", "autumn", "yard", "engineering", "kingdom", "trade", "quarrel", "knowledge", "grade", "charm", "experience", "piece", "sight", "sightseeing", "sum", "summary", "record", "attention", "wealth", "harmony", "expense", "expenditure", "tale", "rectangle", "apology", "bit", "preparation", "magic", "celebration", "angle", "tendency", "force", "separation", "matter", "regulation", "envy", "the North Pole", "the South Pole", "satisfaction", "wildness", "period", "hiking", "breath", "information", "suggestion", "graduation", "moment", "confidence", "result", "opinion", "admiration", "education", "favor", "conversation", "employment", "unemployment", "region", "industry", "fright", "safety", "public", "treatment", "examination", "survival", "rest", "cent", "century", "centimeter", "centigrade", "research", "repetition", "recovery", "finale", "freedom", "speech", "action", "activity", "childhood", "flight", "strength", "length", "height", "saying", "friendship", "mixture", "payment", "contact", "rank", "self", "scene", "credit", "talent", "rule", "proposal", "privacy", "communication", "mission", "law", "alarm", "rate", "storm", "violet", "custom", "movement", "grammar", "injury", "evil", "wound", "amount", "ceremony", "disease", "warning", "horror", "fury", "temperature", "grief", "row", "itch", "square", "popularity", "risk", "existence", "government", "experiment", "degree", "riddle", "exception", "labor", "cure", "effort", "punishment", "achievement", "view", "atmosphere", "situation", "exploration", "environment", "source", "majority", "minority", "curiosity", "task", "pronunciation", "medium", "interval", "religion", "complaint", "sort", "handicap", "value", "profit", "connection", "property", "outline", "profession", "similarity", "mist", "narration", "occasion", "haste", "intention", "conflict", "direction", "site", "request", "requirement", "translation", "destruction", "democracy", "lack", "lump", "acid", "gap", "instance", "attraction", "completion", "relation", "relationship", "defense", "combination", "correction", "comfort", "tune", "cause", "crime", "limit", "limitation", "tax", "anxiety", "anthem", "contrast", "tradition", "subject", "solution", "trend", "election", "electricity", "fault", "flood", "liberty", "purpose", "charge", "addition", "surroundings", "contamination", "behavior", "appetite", "advantage", "disadvantage", "harvest", "violence", "decoration", "fable", "objection", "physics", "association", "threat", "performance", "appreciation", "climate", "pollution", "harm", "devotion", "advertisement", "population", "figure", "effect", "poverty", "department", "community", "cowardice", "proof", "bravery", "extent", "detail", "operation", "instruction", "organization", "clue", "neat", "collection", "responsibility", "doubt", "fare", "journey", "myth", "term", "wage", "posture", "evidence", "improvement", "attack", "pulse", "indication", "conductor", "application", "quality", "account", "method", "endurance", "fate", "departure", "concept", "reputation", "Buddhism", "agriculture", "district", "opportunity", "vehicle", "admission", "disorder", "permission", "destination", "track", "consumption", "trace", "legend", "structure", "share", "diameter", "security", "impact", "prosperity", "politics", "range", "dispute", "response", "evolution", "revolution", "murder", "invasion", "composition", "voyage", "circumstance", "function", "analysis", "recycling", "review", "reward", "rejection", "reservation", "reply", "retirement", "reaction", "relief", "refund", "restriction", "union", "center", "concentration", "influence", "pressure", "depression", "expression", "impression", "principle", "sentiment", "prospect", "spectacle", "suspicion");

const NOUN_POSITION_K = new Array("주어 (자리)?", "목적어 (자리)?", "보어 (자리)?", "전치사의 목적어 (자리)?");
const NOUN_POSITION_E = new Array("맨 앞", "일반동사 뒤", "Be동사 뒤", "전치사 뒤");



const verb1personK = new Array();
const verb1personE = new Array();
const verb2objectK = new Array();
const verb2objectE = new Array();
const verb3animalK = new Array();
const verb3animalE = new Array();
const verb4placeK = new Array();
const verb4placeE = new Array();
const verb5conceptK = new Array();
const verb5conceptE = new Array();

//TODO 동사 자료 넣기
// 동사 Speaking Drill 20221123V
const VERB_BASIC100_ADJECTIVE_K = new Array("사랑하는", "좋아하는", "즐기는", "시작하는", "멈추는", "여는", "닫는", "요리하는", "먹는", "원하는", "달리는", "나는", "전화하는", "만드는", "주는", "가는", "오는", "말하는", "만나는", "떠나는", "가지는", "마시는", "뛰는", "잡는", "필요한", "씻는", "걷는", "서는", "앉는", "넘어지는", "노는", "공부하는", "도와주는", "만지는", "생각하는", "당기는", "미는", "그리는", "가져오는", "보내는", "자르는", "읽는", "움직이는", "묻는", "사용하는", "하는", "듣는", "우는", "수영하는", "자는", "대화하는", "말하는", "이야기하는", "느끼는", "듣는", "시작하는", "보는", "바라는", "사는", "그만두는", "부수는", "옮기는", "치는", "희망하는", "집는", "입는", "채우는", "자라는", "아는", "보는", "일하는", "사는", "죽는", "알아차리는", "얻는", "잃는", "머무르는", "배우는", "하게 하는", "주문하는", "계획하는", "지불하는", "유지하는", "깨닫는", "잡는", "꺼리는", "받는", "따르는", "도착하는", "두는", "제자리에 놓는", "짓는", "선택하는", "믿는", "제공하는", "다루는", "연기내는", "신경쓰는");
const VERB_BASIC100_K = new Array("사랑한다", "좋아하다", "즐기다", "시작하다", "멈추다", "열다", "닫다", "요리하다", "먹다", "원하다", "달리다", "날다", "전화하다", "만들다", "주다", "가다", "오다", "말하다", "만나다", "떠나다", "가지다", "마시다", "뛰다", "잡다", "필요하다", "씻다", "걷다", "서다", "앉다", "넘어지다", "놀다", "공부하다", "돕다", "만지다", "생각하다", "당기다", "밀다", "그리다", "가져오다", "보내다", "자르다", "읽다", "움직이다", "묻다", "사용하다", "하다", "들리다", "울다", "수영하다", "자다", "대화하다", "말하다", "이야기하다", "느끼다", "듣다", "시작하다", "보다", "바라다", "사다", "그만두다", "부수다", "옮기다", "치다", "희망하다", "집다", "입다", "채우다", "자라다", "알다", "보다", "일하다", "살다", "죽다", "알아차리다", "얻다", "잃다", "머무르다", "배우다", "하게 하다", "주문하다", "계획하다", "지불하다", "유지하다", "깨닫다", "잡다", "꺼리다", "받다", "따르다", "도착하다", "두다", "제자리에 놓다", "짓다", "선택하다", "믿다", "제공하다", "다루다", "연기내다", "신경쓰다");
const VERB_BASIC100_E = new Array("love", "like", "enjoy", "begin", "stop", "open", "close", "cook", "eat", "want", "run", "fly", "call", "make", "give", "go", "come", "say", "meet", "leave", "have", "drink", "jump", "catch", "need", "wash", "walk", "stand", "sit", "fall", "play", "study", "help", "touch", "think", "pull", "push", "draw", "bring", "send", "cut", "read", "move", "ask", "use", "do", "hear", "cry", "swim", "sleep", "talk", "speak", "tell", "feel", "listen", "start", "see", "wish", "buy", "quit", "break", "carry", "hit", "hope", "pick", "wear", "fill", "grow", "know", "watch", "work", "live", "die", "notice", "get", "lose", "stay", "learn", "let", "order", "plan", "pay", "keep", "realize", "take", "mind", "receive", "follow", "arrive", "put", "set", "build", "choose", "believe", "serve", "deal", "smoke", "care");
const VERB_BASIC100_3E = new Array("loves", "likes", "enjoys", "begins", "stops", "opens", "closes", "cooks", "eats", "wants", "runs", "flies", "calls", "makes", "gives", "goes", "comes", "says", "meets", "leaves", "has", "drinks", "jumps", "catches", "needs", "washes", "walks", "stands", "sits", "falls", "plays", "studies", "helps", "touches", "thinks", "pulls", "pushes", "draws", "brings", "sends", "cuts", "reads", "moves", "asks", "uses", "does", "hears", "cries", "swims", "sleeps", "talks", "speaks", "tells", "feels", "listens", "starts", "sees", "wishes", "buys", "quits", "breaks", "carries", "hits", "hopes", "picks", "wears", "fills", "grows", "knows", "watches", "works", "lives", "dies", "notices", "gets", "loses", "stays", "learns", "lets", "orders", "plans", "pays", "keeps", "realizes", "takes", "minds", "receives", "follows", "arrives", "puts", "sets", "builds", "chooses", "believes", "serves", "deals", "smokes", "cares");
const VERB_ALL_K = new Array("행동한다", "더한다", "조언한다", "동의한다", "대답한다", "도착한다", "묻는다", "굽는다", "이다", "된다", "시작한다", "믿는다", "문다", "막는다", "빌린다", "깨뜨린다", "가져온다", "닦는다", "만든다", "탄다", "산다", "전화한다", "보살핀다", "나른다", "잡는다", "변경한다", "확인한다", "선택한다", "오른다", "모은다", "된다", "축하한다", "제어한다", "요리한다", "복사한다", "덮는다", "건넌다", "오른다", "자른다", "춤춘다", "결정한다", "설계한다", "죽는다", "논의한다", "나눈다", "한다", "그린다", "꿈꾼다", "마신다", "운전한다", "떨어진다", "먹는다", "끝낸다", "즐긴다", "입장한다", "운동한다", "실패한다", "떨어진다", "느낀다", "싸운다", "채운다", "찾는다", "마친다", "고친다", "고정한다", "난다", "집중한다", "잊는다", "형성한다", "튀긴다", "받는다", "준다", "간다", "성장한다", "추측한다", "안내한다", "건다", "싫어한다", "가진다", "돕는다", "친다", "버틴다", "잡는다", "희망한다", "사냥한다", "서두른다", "소개한다", "초대한다", "참여한다", "유지한다", "찬다", "죽인다", "안다", "배운다", "거짓말한다", "좋아한다", "듣는다", "산다", "본다", "사랑한다", "만든다", "결혼한다", "만난다", "놓친다", "움직인다", "필요로 한다", "연다", "그린다", "통과한다", "지불한다", "선택한다", "계획한다", "논다", "인쇄한다", "민다", "놓는다", "읽는다", "기억한다", "돌아간다", "달린다", "구한다", "말한다", "본다", "판다", "보낸다", "놀라게 한다", "보여준다", "노래한다", "앉는다", "잔다", "냄새를 맡는다", "웃는다", "말한다", "일어선다", "시작한다", "머무른다", "멈춘다", "공부한다", "수영한다", "걸린다", "말한다", "가르친다", "말한다", "감사하다", "생각한다", "만진다", "훈련한다", "여행한다", "노력한다", "돌린다", "이해한다", "이용한다", "방문한다", "기다린다", "깬다", "걷는다", "원한다", "씻는다", "본다", "입는다", "환영한다", "우승한다", "바란다", "일한다", "걱정한다", "쓴다", "울린다", "가라앉는다", "뿌린다", "먹인다", "쏜다", "이끈다", "긴다", "쓴다", "운다", "떠난다", "구부린다", "빌린다", "잃는다", "소비한다", "의미한다", "찾는다", "묶는다", "감는다", "둔다", "듣는다", "미끄러진다", "판다", "빛난다", "돈다", "때린다", "때린다", "깨운다", "낳는다", "찢는다", "감춘다", "언다", "훔친다", "부른다", "던진다", "일어난다", "탄다", "오른다", "흔든다");
const VERB_ALL_E = new Array("act", "add", "advise", "agree", "answer", "arrive", "ask", "bake", "be", "become", "begin", "believe", "bite", "block", "borrow", "break", "bring", "brush", "build", "burn", "buy", "call", "care", "carry", "catch", "change", "check", "choose", "climb", "collect", "come", "congratulate", "control", "cook", "copy", "cover", "cross", "cry", "cut", "dance", "decide", "design", "die", "discuss", "divide", "do", "draw", "dream", "drink", "drive", "drop", "eat", "end", "enjoy", "enter", "exercise", "fail", "fall", "feel", "fight", "fill", "find", "finish", "fix", "fix", "fly", "focus", "forget", "form", "fry", "get", "give", "go", "grow", "guess", "guide", "hang", "hate", "have", "help", "hit", "hold", "hold", "hope", "hunt", "hurry", "introduce", "invite", "join", "keep", "kick", "kill", "know", "learn", "lie", "like", "listen", "live", "look", "love", "make", "marry", "meet", "miss", "move", "need", "open", "paint", "pass", "pay", "pick", "plan", "play", "print", "push", "put", "read", "remember", "return", "run", "save", "say", "see", "sell", "send", "shock", "show", "sing", "sit", "sleep", "smell", "smile", "speak", "stand", "start", "stay", "stop", "study", "swim", "take", "talk", "teach", "tell", "thank", "think", "touch", "train", "travel", "try", "turn", "understand", "use", "visit", "wait", "wake", "walk", "want", "wash", "watch", "wear", "welcome", "win", "wish", "work", "worry", "write", "ring", "sink", "sow", "feed", "shoot", "lead", "creep", "sweep", "weep", "leave", "bend", "lend", "lose", "spend", "mean", "seek", "bind", "wind", "lay", "hear", "slide", "dig", "shine", "spin", "strike", "beat", "awake", "bear", "tear", "hide", "freeze", "steal", "blow", "throw", "arise", "ride", "rise", "shake");
const VERB_ALL_3E = new Array("acts", "adds", "advises", "agrees", "answers", "arrives", "asks", "bakes", "is", "becomes", "begins", "believes", "bites", "blocks", "borrows", "breaks", "brings", "brushes", "builds", "burns", "buys", "calls", "cares", "carries", "catches", "changes", "checks", "chooses", "climbs", "collects", "comes", "congratulates", "controls", "cooks", "copies", "covers", "crosses", "cries", "cuts", "dances", "decides", "designs", "dies", "discusses", "divides", "does", "draws", "dreams", "drinks", "drives", "drops", "eats", "ends", "enjoys", "enters", "exercises", "fails", "falls", "feels", "fights", "fills", "finds", "finishes", "fixes", "flies", "focuses", "forgets", "forms", "fries", "gets", "gives", "goes", "grows", "guesses", "guides", "hangs", "hates", "has", "helps", "hits", "holds", "hopes", "hunts", "hurries", "introduces", "invites", "joins", "keeps", "kicks", "kills", "knows", "learns", "lies", "likes", "listens", "lives", "looks", "loves", "makes", "marries", "meets", "misses", "moves", "needs", "opens", "paints", "passes", "pays", "picks", "plans", "plays", "prints", "pushes", "puts", "reads", "remembers", "returns", "runs", "saves", "says", "sees", "sells", "sends", "shocks", "shows", "sings", "sits", "sleeps", "smells", "smiles", "speaks", "stands", "starts", "stays", "stops", "studies", "swims", "takes", "talks", "teaches", "tells", "thanks", "thinks", "touches", "trains", "travels", "tries", "turns", "understands", "uses", "visits", "waits", "wakes", "walks", "wants", "washes", "watches", "wears", "welcomes", "wins", "wishes", "works", "worries", "writes", "rings", "sinks", "sows", "feeds", "shoots", "leads", "creeps", "sweeps", "weeps", "leaves", "bends", "lends", "loses", "spends", "means", "seeks", "binds", "winds", "lays", "hears", "slides", "digs", "shines", "spins", "strikes", "beats", "awakes", "bears", "tears", "hides", "freezes", "steals", "blows", "throws", "arises", "rides", "rises", "shakes");
const VERB_ALL_PAST_K = new Array();
const VERB_ALL_PAST_E = new Array("acted", "added", "advise", "agreed", "answered", "arrived", "asked", "baked", "was, were", "became", "began", "believed", "bit", "blocked", "borrowed", "broke", "brought", "brushed", "built", "burned", "bought", "called", "cared", "carried", "caught", "changed", "checked", "chose", "climbed", "collected", "came", "congratulated", "controled", "cooked", "copied", "covered", "crossed", "cried", "cut", "danced", "decided", "designed", "died", "discussed", "divided", "did", "drew", "dreamed", "drank", "drove", "dropped", "ate", "ended", "enjoyed", "entered", "exercised", "failed", "fell", "felt", "fought", "filled", "found", "finished", "fixed", "fixed", "flew", "focused", "forgot", "formed", "fried", "got", "gave", "went", "grew", "guessed", "guided", "hung", "hated", "had", "helped", "hit", "held", "held", "hoped", "hunted", "hurried", "introduced", "invited", "joined", "kept", "kicked", "killed", "knew", "learned", "lied", "liked", "listened", "lived", "looked", "loved", "made", "married", "met", "missed", "moved", "needed", "opened", "painted", "passed", "paid", "picked", "planned", "played", "printed", "pushed", "put", "read", "remembered", "returned", "ran", "saved", "said", "saw", "sold", "sent", "shocked", "showed", "sang", "sat", "slept", "smelled", "smiled", "spoke", "stood", "started", "stayed", "stopped", "studied", "swam", "took", "talked", "taught", "told", "thanked", "thought", "touched", "trained", "traveled", "tried", "turned", "understood", "used", "visited", "waited", "woke", "walked", "wanted", "washed", "watched", "wore", "welcomed", "won", "wished", "worked", "worried", "wrote", "rang", "sank", "sowed", "fed", "shot", "led", "crept", "swept", "wept", "left", "bent", "lent", "lost", "spent", "meant", "sought", "bound", "wound", "laid", "heard", "slid", "dug", "shone", "spun", "struck", "beat", "awoke", "bore", "tore", "hid", "froze", "stole", "blew", "threw", "arose", "rode", "rose", "shook");
const VERB_ALL_PAST_PARTICIPLE_K = new Array("행동된", "더해진", "조언받는", "동의된", "대답된", "도착된", "요청된", "구워진", "인", "되는", "시작된", "믿어진", "물린", "막아진", "빌려진", "깨뜨려진", "가져와진", "닦아진", "만들어진", "타진", "사진", "전화된", "보살펴진", "휴대된", "잡힌", "변경된", "확인된", "선택된", "올라진", "모아진", "와진", "축하된", "제어된", "요리된", "복사된", "덮어진", "건너진", "울려진", "잘라진", "춤춰진", "결정된", "설계된", "죽어진", "논의된", "나눠진", "된", "그려진", "꿈꿔진", "마셔진", "운전된", "떨어진", "먹힌", "끝내진", "즐겨진", "입장된", "훈련된", "실패된", "떨어진", "느껴진", "싸워진", "채워진", "찾아진", "마쳐진", "고쳐진", "고정된", "날려진", "집중된", "잊힌", "형성된", "튀겨진", "얻은", "주어진", "간", "성장된", "추측된", "안내된", "걸린", "싫어진", "소유된", "도움받는", "쳐진", "버텨진", "잡힌", "희망된", "사냥된", "서둘러진", "소개된", "초대된", "참여된", "유지된", "차인", "죽임을 당한", "알려진", "배워진", "거짓말된", "좋아해진", "들린", "살아진", "보아진", "사랑된", "만들어진", "결혼된", "만나진", "놓쳐진", "움직여진", "필요해진", "열려진", "그려진", "통과된", "지불된", "선택된", "계획된", "놀아진", "인쇄된", "밀린", "놓아진", "읽어진", "기억된", "돌아와진", "달려진", "절약된", "말해진", "보여진", "팔려진", "보내진", "놀라게 된", "보여진", "노래된", "앉혀진", "재워진", "냄새를 맡아진", "웃어진", "말해진", "세워진", "시작된", "머물러진", "멈추어진", "공부된", "수영된", "걸려진", "말해진", "가르쳐진", "말해진", "고마움을 받는", "생각된", "만져진", "훈련된", "여행된", "노력된", "돌려진", "이해된", "이용된", "방문된", "기다려진", "깨진", "걸어진", "원해진", "씻긴", "관람된", "입힌", "환영받는", "우승된", "바라진", "일해진", "걱정된", "쓰인", "울려진", "가라앉힌", "뿌려진", "먹힌", "쏘아진", "이끌어진", "기어진", "쓸린", "울린", "떠나진", "구부려진", "빌려진", "잃어버려진", "소비된", "의미된", "찾아진", "묶어진", "감아진", "두어진", "들린", "미끄러진", "파인", "밝아진", "돌아진", "때려진", "때려진", "깨워진", "낳아진", "찢어진", "감춰진", "얼려진", "훔쳐진", "불어진", "던져진", "일어나진", "태워진", "올라진", "흔들린");
const VERB_ALL_PAST_PARTICIPLE_E = new Array("acted", "added", "advised", "agreed", "answered", "arrived", "asked", "baked", "been", "become", "begun", "believed", "bitten", "blocked", "borrowed", "broken", "brought", "brushed", "built", "burned", "bought", "called", "cared", "carried", "caught", "changed", "checked", "chosen", "climbed", "collected", "come", "congratulated", "controled", "cooked", "copied", "covered", "crossed", "cried", "cut", "danced", "decided", "designed", "died", "discussed", "divided", "done", "drawn", "dreamed", "drunk", "driven", "dropped", "eaten", "ended", "enjoyed", "entered", "exercised", "failed", "fallen", "felt", "fought", "filled", "found", "finished", "fixed", "fixed", "flown", "focused", "forgotten", "formed", "fried", "gotten", "given", "gone", "grown", "guessed", "guided", "hung", "hated", "had", "helped", "hit", "held", "held", "hoped", "hunted", "hurried", "introduced", "invited", "joined", "kept", "kicked", "killed", "known", "learned", "lied", "liked", "listened", "lived", "looked", "loved", "made", "married", "met", "missed", "moved", "needed", "opened", "painted", "passed", "paid", "picked", "planned", "played", "printed", "pushed", "put", "read", "remembered", "returned", "run", "saved", "said", "seen", "sold", "sent", "shocked", "showed", "sung", "sat", "slept", "smelled", "smiled", "spoken", "stood", "started", "stayed", "stopped", "studied", "swum", "taken", "talked", "taught", "told", "thanked", "thought", "touched", "trained", "traveled", "tried", "turned", "understood", "used", "visited", "waited", "woken", "walked", "wanted", "washed", "watched", "worn", "welcomed", "won", "wished", "worked", "worried", "written", "rung", "sunk", "sowed", "fed", "shot", "led", "crept", "swept", "wept", "left", "bent", "lent", "lost", "spent", "meant", "sought", "bound", "wound", "laid", "heard", "slid", "dug", "shone", "spun", "struck", "beaten", "awoken", "born", "torn", "hidden", "frozen", "stolen", "blown", "thrown", "arisen", "ridden", "risen", "shaken");
const VERB_ALL_PRESENT_PARTICIPLE_K = new Array("행동하는", "더하는", "조언하는", "동의하는", "대답하는", "도착하는", "요청하는", "굽는", "인", "되는", "시작하는", "믿는", "무는", "막는", "빌리는", "깨뜨리는", "가져오는", "닦는", "만드는", "타는", "사는", "전화하는", "보살피는", "휴대하는", "잡는", "변경하는", "확인하는", "선택하는", "오르는", "모으는", "하는", "축하하는", "제어하는", "요리하는", "복사하는", "덮는", "건너는", "우는", "자르는", "춤추는", "결정하는", "설계하는", "죽는", "논의하는", "나누는", "되는", "그리는", "꿈꾸는", "마시는", "운전하는", "떨어지는", "먹는", "끝내는", "즐기는", "입장하는", "훈련하는", "실패하는", "떨어지는", "느끼는", "싸우는", "채우는", "찾는", "마치는", "고치는", "고정하는", "나는", "집중하는", "잊는", "형성하는", "튀기는", "얻는", "주는", "가는", "자라는", "추측하는", "안내하는", "거는", "미워하는", "가지는", "돕는", "치는", "버티는", "잡는", "희망하는", "사냥하는", "서두르는", "소개하는", "초대하는", "참여하는", "유지하는", "차는", "죽이는", "아는", "배우는", "거짓말하는", "좋아하는", "듣는", "사는", "보는", "사랑하는", "만드는", "결혼하는", "만나는", "놓치는", "움직이는", "필요한", "여는", "그리는", "통과하는", "지불하는", "선택하는", "계획하는", "노는", "인쇄하는", "미는", "놓는", "읽는", "기억하는", "되돌리는", "달리는", "절약하는", "말하는", "보는", "파는", "보내는", "놀라게 하는", "보여주는", "노래하는", "앉는", "자는", "냄새를 맡는", "웃는", "말하는", "일어서는", "시작하는", "머무르는", "멈추는", "공부하는", "수영하는", "걸리는", "말하는", "가르치는", "말하는", "고마워하는", "생각하는", "만지는", "훈련하는", "여행하는", "노력하는", "돌리는", "이해하는", "이용하는", "방문하는", "기다리는", "깨는", "걷는", "원하는", "씻는", "관람하는", "입는", "환영하는", "우승하는", "바라는", "일하는", "걱정하는", "쓰는", "울리는", "가라앉는", "뿌리는", "먹이는", "쏘는", "이끄는", "기는", "쓰는", "우는", "떠나는", "구부리는", "빌리는", "잃는", "소비하는", "의미하는", "찾는", "묶는", "감는", "두는", "듣는", "미끄러지는", "파는", "밝은", "도는", "때리는", "때리는", "깨는", "낳는", "찢는", "감추는", "얼리는", "훔치는", "부는", "던지는", "일어나는", "타는", "오르는", "흔드는");
const VERB_ALL_PRESENT_PARTICIPLE_E = new Array("acting", "adding", "advising", "agreeing", "answering", "arriving", "asking", "baking", "being", "becoming", "beginning", "believing", "biting", "blocking", "borrowing", "breaking", "bringing", "brushing", "building", "burning", "buying", "calling", "caring", "carrying", "catching", "changing", "checking", "choosing", "climbing", "collecting", "coming", "congratulating", "controlling", "cooking", "copying", "covering", "crossing", "crying", "cutting", "dancing", "deciding", "designing", "dying", "discussing", "dividing", "doing", "drawing", "dreaming", "drinking", "driving", "dropping", "eating", "ending", "enjoying", "entering", "exercising", "failing", "falling", "feeling", "fighting", "filling", "finding", "finishing", "fixing", "fixing", "flying", "focusing", "forgetting", "forming", "frying", "getting", "giving", "going", "growing", "guessing", "guiding", "hanging", "hating", "having", "helping", "hitting", "holding", "holding", "hoping", "hunting", "hurrying", "introducing", "inviting", "joining", "keeping", "kicking", "killing", "knowing", "learning", "lying", "liking", "listening", "living", "looking", "loving", "making", "marrying", "meeting", "missing", "moving", "needing", "opening", "painting", "passing", "paying", "picking", "planning", "playing", "printing", "pusing", "putting", "reading", "remembering", "returning", "running", "saving", "saying", "seeing", "selling", "sending", "shocking", "showing", "singing", "sitting", "sleeping", "smelling", "smiling", "speaking", "standing", "starting", "staying", "stopping", "studying", "swimming", "taking", "talking", "teaching", "telling", "thanking", "thinking", "touching", "training", "traveling", "trying", "turning", "understanding", "using", "visiting", "waiting", "waking", "walking", "wanting", "washing", "watching", "wearing", "welcoming", "winning", "wishing", "working", "worrying", "writing", "ringing", "singing", "sowing", "feeding", "shooting", "leading", "creeping", "sweeping", "weeping", "leaving", "bending", "lending", "losing", "spending", "meaning", "seeking", "binding", "winding", "laying", "hearing", "sliding", "digging", "shining", "spinning", "striking", "beating", "awaking", "bearing", "tearing", "hiding", "freezing", "stealing", "blowing", "throwing", "arising", "riding", "rising", "shaking");

const VERB_0202_K = new Array("be동사?");
const VERB_0202_E = new Array("am is are was were be, 이다 있다 입니다 있습니다");
const VERB_0203_K = new Array("be동사의 부정문?");
const VERB_0203_E = new Array("be 뒤에 not, 아니다 없다 아니에요 없어요 아닙니다 없습니다");
const VERB_0204_K = new Array("be동사의 의문문?");
const VERB_0204_E = new Array("be를 맨 앞, 이니? 있니? 이나요? 있나요? 입니까? 있습니까?");
const VERB_0205_K = new Array("일반동사?");
const VERB_0205_E = new Array("be동사를 제외한 나머지 모든 동사, -다 로 끝나는 말");
const VERB_0206_K = new Array("일반동사의 부정문?");
const VERB_0206_E = new Array("두더지(do/does/did) 뒤에 not 동사 원형, 안한다 안해요 안합니다");
const VERB_0207_K = new Array("일반동사의 의문문?");
const VERB_0207_E = new Array("두더지(do/does/did) 를 맨 앞 동사 원형, 하니? 하나요? 합니까?");

const VERB_COMPLETE_INTRANSITIVE_VERB_3E = new Array("runs", "flies", "goes", "comes", "leaves", "drinks", "jumps", "washes", "walks", "stands", "sits", "falls", "plays", "studies", "thinks", "draws", "cuts", "reads", "moves", "hears", "cries", "swims", "sleeps", "talks", "speaks", "listens", "starts", "sees", "wishes", "quits", "breaks", "hits", "hopes", "grows", "knows", "watches", "works", "notices", "loses", "stays", "learns", "arrives");
const VERB_COMPLETE_INTRANSITIVE_VERB_E = new Array("run", "fly", "go", "come", "leave", "drink", "jump", "wash", "walk", "stand", "sit", "fall", "play", "study", "think", "draw", "cut", "read", "move", "hear", "cry", "swim", "sleep", "talk", "speak", "listen", "start", "see", "wish", "quit", "break", "hit", "hope", "grow", "know", "watch", "work", "notice", "lose", "stay", "learn", "arrive");
const VERB_COMPLETE_INTRANSITIVE_VERB_K = new Array("달린다", "날다", "가다", "오다", "떠난다", "마신다", "뛴다", "씻는다", "걷는다", "서다", "앉는다", "떨어진다", "놀다", "공부한다", "생각한다", "그린다", "자른다", "읽는다", "움직인다", "들은다", "울다", "수영한다", "잔다", "대화한다", "말한다", "듣다", "시작한다", "본다", "바란다", "그만둔다", "부순다", "친다", "희망한다", "자라다", "안다", "본다", "일한다", "알아차린다", "잃다", "머무른다", "배운다", "도착한다");
const VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K = new Array("달리는", "나는", "가는", "오는", "떠나는", "마시는", "뛰는", "씻는", "걷는", "서는", "앉는", "떨어지는", "노는", "공부하는", "생각하는", "그리는", "자르는", "읽는", "움직이는", "듣는", "우는", "수영하는", "자는", "대화하는", "말하는", "듣는", "시작하는", "보는", "바라는", "그만두는", "부수는", "치는", "희망하는", "자라는", "아는", "보는", "일하는", "알아차리는", "잃는", "머무르는", "배우는", "도착하는");
const VERB_COMPLETE_INTRANSITIVE_CONCESSIVE_VERB_K = new Array("달리더라도", "날더라도", "가더라도", "오더라도", "떠나더라도", "마시더라도", "뛰더라도", "씻더라도", "걷더라도", "서더라도", "앉더라도", "떨어지더라도", "놀더라도", "공부하더라도", "생각하더라도", "그리더라도", "자르더라도", "읽더라도", "움직이더라도", "듣더라도", "울더라도", "수영하더라도", "자더라도", "대화하더라도", "말하더라도", "듣더라도", "시작하더라도", "보더라도", "바라더라도", "그만두더라도", "부수더라도", "치더라도", "희망하더라도", "자라더라도", "알더라도", "보더라도", "일하더라도", "알아차리더라도", "잃더라도", "머무르더라도", "배우더라도", "도착하더라도");

const VERB_SENTENCE_FORM_1_K = new Array("행동한다", "조언한다", "동의한다", "도착한다", "묻는다", "굽는다", "시작한다", "믿는다", "깨뜨린다", "탄다", "보살핀다", "바꾼다", "확인한다", "선택한다", "오른다", "온다", "요리한다", "복사한다", "건넌다", "운다", "자른다", "춤춘다", "결정한다", "죽는다", "한다", "그린다", "꿈꾼다", "마신다", "운전한다", "떨어진다", "먹는다", "끝난다", "들어간다", "운동간다", "실패한다", "떨어진다", "느낀다", "싸운다", "마친다", "고정한다", "난다", "집중한다", "잊는다", "형성한다", "튀긴다", "간다", "자란다", "추측한다", "걷는다", "돕는다", "친다", "잡는다", "희망한다", "서두른다", "참여한다", "계속한다", "찬다", "안다", "거짓말한다", "듣는다", "산다", "본다", "사랑한다", "움직인다", "연다", "통과한다", "지불한다", "논다", "민다", "읽는다", "돌아온다", "달린다", "노래한다", "앉는다", "잔다", "냄새맡는다", "미소짓는다", "말한다", "일어선다", "시작한다", "머무른다", "멈춘다", "수영한다", "말한다", "이야기한다", "여행한다", "노력한다", "돌린다", "방문한다", "기다린다", "깬다", "걷는다", "씻는다", "입는다", "이긴다", "바란다", "일한다", "걱정한다", "쓴다", "울린다", "가라앉는다", "먹인다", "쏜다", "이끈다", "긴다", "바닥을 쓴다", "운다", "떠난다", "구부린다", "잃는다", "감는다", "미끄러진다", "판다", "빛난다", "돌린다", "때린다", "깨운다", "낳는다", "찢는다", "얼린다", "훔친다", "분다", "던진다", "탄다", "오른다", "흔든다");
const VERB_SENTENCE_FORM_1_E = new Array("act", "advise", "agree", "arrive", "ask", "bake", "begin", "believe", "break", "burn", "care", "change", "check", "choose", "climb", "come", "cook", "copy", "cross", "cry", "cut", "dance", "decide", "die", "do", "draw", "dream", "drink", "drive", "drop", "eat", "end", "enter", "exercise", "fail", "fall", "feel", "fight", "finish", "fix", "fly", "focus", "forget", "form", "fry", "go", "grow", "guess", "hang", "help", "hit", "hold", "hope", "hurry", "join", "keep", "kick", "know", "lie", "listen", "live", "look", "love", "move", "open", "pass", "pay", "play", "push", "read", "return", "run", "sing", "sit", "sleep", "smell", "smile", "speak", "stand", "start", "stay", "stop", "swim", "talk", "tell", "travel", "try", "turn", "visit", "wait", "wake", "walk", "wash", "wear", "win", "wish", "work", "worry", "write", "ring", "sink", "feed", "shoot", "lead", "creep", "sweep", "weep", "leave", "bend", "lose", "wind", "slide", "dig", "shine", "spin", "strike", "awake", "bear", "tear", "freeze", "steal", "blow", "throw", "ride", "rise", "shake");
const VERB_SENTENCE_FORM_1_3E = new Array("acts", "advises", "agrees", "arrives", "asks", "bakes", "begins", "believes", "breaks", "burns", "cares", "changes", "checks", "chooses", "climbs", "comes", "cooks", "copies", "crosses", "cries", "cuts", "dances", "decides", "dies", "does", "draws", "dreams", "drinks", "drives", "drops", "eats", "ends", "enters", "exercises", "fails", "falls", "feels", "fights", "finishes", "fixes", "flies", "focuses", "forgets", "forms", "fries", "goes", "grows", "guesses", "hangs", "helps", "hits", "holds", "hopes", "hurries", "joins", "keeps", "kicks", "knows", "lies", "listens", "lives", "looks", "loves", "moves", "opens", "passes", "pays", "plays", "pushes", "reads", "returns", "runs", "sings", "sits", "sleeps", "smells", "smiles", "speaks", "stands", "starts", "stays", "stops", "swims", "talks", "tells", "travels", "tries", "turns", "visits", "waits", "wakes", "walks", "washes", "wears", "wins", "wishes", "works", "worries", "writes", "rings", "sinks", "feeds", "shoots", "leads", "creeps", "sweeps", "weeps", "leaves", "bends", "loses", "winds", "slides", "digs", "shines", "spins", "strikes", "awakes", "bears", "tears", "freezes", "steals", "blows", "throws", "rides", "rises", "shakes");
const VERB_SENTENCE_FORM_1_PAST_PARTICIPLE_E = new Array("acted", "advised", "agreed", "arrived", "asked", "baked", "begun", "believed", "broken", "burnt", "cared", "changed", "checked", "chosen", "climbed", "come", "cooked", "copied", "crossed", "cried", "cut", "danced", "decided", "died", "done", "drawn", "dreamt", "drunk", "driven", "dropped", "eaten", "ended", "entered", "exercised", "failed", "fallen", "felt", "fought", "finished", "fixed", "flown", "focused", "forgotten", "formed", "fried", "gone", "grown", "guessed", "hung", "helped", "hit", "held", "hoped", "hurried", "joined", "kept", "kicked", "known", "lain", "listened", "lived", "looked", "loved", "moved", "opened", "passed", "paid", "played", "pushed", "read", "returned", "run", "sung", "sat", "slept", "smelt", "smiled", "spoken", "stood", "started", "stayed", "stopped", "swum", "talked", "told", "travelled", "tried", "turned", "visited", "waited", "woken", "walked", "washed", "worn", "won", "wished", "worked", "worried", "written", "rung", "sunk", "fed", "shot", "led", "crept", "swept", "wept", "left", "bent", "lost", "wound", "slid", "dug", "shone", "spun", "struck", "awoken", "borne", "torn", "frozen", "stolen", "blown", "thrown", "ridden", "risen", "shaken");

const VERB_SENTENCE_FORM_2_K = new Array();
const VERB_SENTENCE_FORM_2_E = new Array();
const VERB_SENTENCE_CONCESSIVE_FORM_3_K = new Array("답하더라도", "막더라도", "가져오더라도", "부르더라도", "선택하더라도", "축하하더라도", "그리더라도", "찾더라도", "주더라도", "도와주더라도", "잡더라도", "소개하더라도", "초대하더라도", "좋아하더라도", "사랑하더라도", "결혼하더라도", "만나더라도", "그리워하더라도", "필요하더라도", "밀더라도", "기억하더라도", "보더라도", "보여주더라도", "멈추더라도", "가르치더라도", "훈련하더라도", "이해하더라도", "방문하더라도", "원하더라도", "보더라도", "인도하더라도", "먹이더라도", "잃더라도", "듣더라도");
const VERB_SENTENCE_ADJECTIVE_FORM_3_K = new Array("답하는", "막는", "가져오는", "부르는", "선택하는", "축하하는", "그리는", "찾는", "주는", "도와주는", "잡는", "소개하는", "초대하는", "좋아하는", "사랑하는", "결혼하는", "만나는", "그리워하는", "필요한", "미는", "기억하는", "보는", "보여주는", "멈추는", "가르치는", "훈련하는", "이해하는", "방문하는", "원하는", "보는", "인도하는", "먹이는", "잃는", "듣는");
const VERB_SENTENCE_FORM_3_K = new Array("답하다", "막다", "가져오다", "부르다", "선택하다", "축하하다", "그리다", "찾다", "주다", "도와주다", "잡다", "소개하다", "초대하다", "좋아하다", "사랑하다", "결혼하다", "만나다", "그리워하다", "필요하다", "밀다", "기억하다", "보다", "보여주다", "멈추다", "가르치다", "훈련하다", "이해하다", "방문하다", "원하다", "보다", "인도하다", "먹이다", "잃다", "듣다");
const VERB_SENTENCE_FORM_3_3K = new Array("답한다", "막는다", "가져온다", "부른다", "선택한다", "축하한다", "그린다", "찾는다", "준다", "도와준다", "잡는다", "소개한다", "초대한다", "좋아한다", "사랑한다", "결혼한다", "만난다", "그리워한다", "필요로 한다", "민다", "기억한다", "본다", "보여준다", "멈춘다", "가르친다", "훈련한다", "이해한다", "방문한다", "원한다", "본다", "인도한다", "먹인다", "잃는다", "듣는다");
const VERB_SENTENCE_FORM_3_PAST_K = new Array("답했다", "막았다", "가져왔다", "전화했다", "선택했다", "축하했다", "그렸다", "찾았다", "줬다", "도와주었다", "잡고 있었다", "소개했다", "초대했다", "좋아했다", "사랑했다", "결혼했다", "만났다", "그리워했다", "필요했다", "밀었다", "기억했다", "봤다", "보여주었다", "멈췄다", "가르쳤다", "훈련시켰다", "이해했다", "방문했다", "원했다", "보았다", "이끌었다", "먹였다", "잃어버렸다", "들었다");
const VERB_SENTENCE_FORM_3_PAST_2K = new Array("답했던", "막았던", "가져왔던", "전화했던", "선택했던", "축하했던", "그렸던", "찾았던", "줬던", "도와주었던", "잡고 있었던", "소개했던", "초대했던", "좋아했던", "사랑했던", "결혼했던", "만났던", "그리워했던", "필요했던", "밀었던", "기억했던", "봤던", "보여주었던", "멈췄던", "가르쳤던", "훈련시켰던", "이해했던", "방문했던", "원했던", "보았던", "이끌었던", "먹였던", "잃어버렸던", "들었던");
const VERB_SENTENCE_FORM_3_E = new Array("answer", "block", "bring", "call", "choose", "congratulate", "draw", "find", "give", "help", "hold", "introduce", "invite", "like", "love", "marry", "meet", "miss", "need", "push", "remember", "see", "show", "stop", "teach", "train", "understand", "visit", "want", "watch", "lead", "feed", "lose", "hear");
const VERB_SENTENCE_FORM_3_3E = new Array("answers", "blocks", "brings", "calls", "chooses", "congratulates", "draws", "finds", "gives", "helps", "holds", "introduces", "invites", "likes", "loves", "marries", "meets", "misses", "needs", "pushes", "remembers", "sees", "shows", "stops", "teaches", "trains", "understands", "visits", "wants", "watches", "leads", "feeds", "loses", "hears");
const VERB_SENTENCE_FORM_3_PAST_E = new Array("answered", "blocked", "brought", "called", "chose", "congratulated", "drew", "found", "gave", "helped", "held", "introduced", "invited", "liked", "loved", "married", "met", "missed", "needed", "pushed", "remembered", "saw", "showed", "stopped", "taught", "trained", "understood", "visited", "wanted", "watched", "led", "fed", "lost", "heard");
const VERB_SENTENCE_FORM_4_K = new Array();
const VERB_SENTENCE_FORM_4_E = new Array();
const VERB_SENTENCE_FORM_5_K = new Array();
const VERB_SENTENCE_FORM_5_E = new Array();
const VERB_CONCEPT_K = new Array();
const VERB_CONCEPT_E = new Array();
const VERB_DISTINGUISHMENT_K = new Array("Be동사의 부정문은?", "Be동사의 의문문은?", "일반동사의 부정문은?", "일반동사의 의문문은?");
const VERB_DISTINGUISHMENT_E = new Array("Be 뒤에 not", "Be를 맨 앞", "두더지 뒤에 not 동사원형", "두더지를 맨 앞 동사원형");


const ADJECTIVE_RULE_K = new Array('제한적 용법', '서술적 용법');
const ADJECTIVE_RULE_E = new Array('보통 : 명사 앞에서 수식,\n -thing -body -one : 뒤에서 앞으로 수식', 'C자리, a로 시작하는 단어');

const adjective1personK = new Array("혼자", "나쁜", "큰", "검은", "파란", "용감한", "갈색", "바쁜", "차분한", "특정한", "깨끗한", "영리한", "멋진", "미쳐있는", "궁금한", "귀여운", "죽은", "더러운", "유명한", "환상적인", "빨리", "지방", "좋아하는", "좋은", "자유의", "재미있는", "거대한", "기쁜", "좋은", "위대한", "잘 생긴", "행복한", " 어려운", "무거운", "솔직한", "더운", "배고픈", "친절한", "게으른", "작은", "화난", "많은", "많은", "새로운", "멋진", "나이든", "가난한", "예쁜", "빠른", "조용한", "준비된", "빨간", "부자의", "슬픈", "안전한", "같은", "짧은", "수줍은", "아픈", "느린", "작은", "똑똑한", "부드러운", "일부", "미안한", "강한", "키가 큰", "추한", "따뜻한", "젖은", "하얀", "잘못된", "노란색", "젊은", "두려운");
const adjective1personE = new Array("alone", "bad", "big", "black", "blue", "brave", "brown", "busy", "calm", "certain", "clean", "clever", "cool", "crazy", "curious", "cute", "dead", "dirty", "famous", "fantastic", "fast", "fat", "favorite", "fine", "free", "fun", "giant", "glad", "good", "great", "handsome", "happy", "hard", "heavy", "honest", "hot", "hungry", "kind", "lazy", "little", "mad", "many", "much", "new", "nice", "old", "poor", "pretty", "quick", "quiet", "ready", "red", "rich", "sad", "safe", "same", "short", "shy", "sick", "slow", "small", "smart", "soft", "some", "sorry", "strong", "tall", "ugly", "warm", "wet", "white", "wrong", "yellow", "young", "afraid");
const adjective2objectK = new Array("나쁜", "기본적인", "큰", "검은", "파란", "갈색", "특정한", "싼", "깨끗한", "가까운", "다른", "어려운", "더러운", "건조한", "쉬운", "유명한", "환상적인", "좋아하는", "좋은", "재미있는", "좋은", "위대한", "녹색", "회색", "무거운", "중요한", "큰", "작은", "긴", "많은", "새로운", "다음의", "멋진", "나이든", "예쁜", "빠른", "조용한", "준비된", "빨간", "슬픈", "안전한", "같은", "짧은", "수줍은", "아픈", "느린", "작은", "똑똑한", "부드러운", "일부", "신맛이 나는", "키가 큰", "추한", "따뜻한", "젖은", "하얀", "잘못된", "노란색", "젊은");
const adjective2objectE = new Array("bad", "basic", "big", "black", "blue", "brown", "certain", "cheap", "clean", "close", "different", "difficult", "dirty", "dry", "easy", "famous", "fantastic", "favorite", "fine", "fun", "good", "great", "green", "grey", "heavy", "important", "large", "little", "long", "many", "new", "next", "nice", "old", "pretty", "quick", "quiet", "ready", "red", "sad", "safe", "same", "short", "shy", "sick", "slow", "small", "smart", "soft", "some", "sour", "tall", "ugly", "warm", "wet", "white", "wrong", "yellow", "young");
const adjective3animalK = new Array("혼자", "나쁜", "큰", "검은", "파란", "용감한", "갈색", "바쁜", "차분한", "특정한", "깨끗한", "영리한", "멋진", "미쳐있는", "궁금한", "귀여운", "죽은", "더러운", "유명한", "환상적인", "빨리", "지방", "좋아하는", "좋은", "자유의", "재미있는", "거대한", "기쁜", "좋은", "위대한", "잘 생긴", "행복한", " 어려운", "무거운", "솔직한", "더운", "배고픈", "친절한", "게으른", "작은", "화난", "많은", "많은", "새로운", "멋진", "나이든", "가난한", "예쁜", "빠른", "조용한", "준비된", "빨간", "부자의", "슬픈", "안전한", "같은", "짧은", "수줍은", "아픈", "느린", "작은", "똑똑한", "부드러운", "일부", "미안한", "강한", "키가 큰", "추한", "따뜻한", "젖은", "하얀", "잘못된", "노란색", "젊은", "두려운");
const adjective3animalE = new Array("alone", "bad", "big", "black", "blue", "brave", "brown", "busy", "calm", "certain", "clean", "clever", "cool", "crazy", "curious", "cute", "dead", "dirty", "famous", "fantastic", "fast", "fat", "favorite", "fine", "free", "fun", "giant", "glad", "good", "great", "handsome", "happy", "hard", "heavy", "honest", "hot", "hungry", "kind", "lazy", "little", "mad", "many", "much", "new", "nice", "old", "poor", "pretty", "quick", "quiet", "ready", "red", "rich", "sad", "safe", "same", "short", "shy", "sick", "slow", "small", "smart", "soft", "some", "sorry", "strong", "tall", "ugly", "warm", "wet", "white", "wrong", "yellow", "young", "afraid");
const adjective4placeK = new Array("나쁜", "큰", "검은", "파란", "갈색", "특정한", "깨끗한", "가까운", "어두운", "더러운", "건조한", "유명한", "환상적인", "먼", "좋아하는", "좋은", "가득한", "재미있는", "좋은", "위대한", "큰", "지난", "중앙의", "새로운", "다음의", "멋진", "나이든", "예쁜", "조용한", "빨간", "부자의", "안전한", "같은", "작은", "일부", "추한", "따뜻한", "젖은", "하얀", "잘못된", "노란색");
const adjective4placeE = new Array("bad", "big", "black", "blue", "brown", "certain", "clean", "close", "dark", "dirty", "dry", "famous", "fantastic", "far", "favorite", "fine", "full", "fun", "good", "great", "large", "last", "middle", "new", "next", "nice", "old", "pretty", "quiet", "red", "rich", "safe", "same", "small", "some", "ugly", "warm", "wet", "white", "wrong", "yellow");
const adjectiveADVERB_1K = new Array("깔끔한", "가까운", "어두운", "더러운", "건조한", "유명한", "환상적인", "가득한", "큰", "새로운", "착한", "예쁜", "조용한", "안전한", "따뜻한", "젖은", "잘못된");
const adjectiveADVERB_2K = new Array("깔끔하게", "가깝게", "어둡게", "더럽게", "건조하게", "유명하게", "환상적으로", "완전하게", "크게", "새로", "멋지게", "예쁘게", "조용하게", "안전하게", "따뜻하게", "축축하게", "잘못되게(부당하게)");
const adjectiveADVERB_1E = new Array("clean", "close", "dark", "dirty", "dry", "famous", "fantastic", "full", "large", "new", "nice", "pretty", "quiet", "safe", "warm", "wet", "wrong");
const adjectiveADVERB_2E = new Array("cleanly", "closely", "darkly", "dirtily", "drily", "famously", "fantastically", "fully", "largely", "newly", "nicely", "prettily", "quietly", "safely", "warmly", "wetly", "wrongly");
const adjective5conceptK = new Array("어떤", "나쁜", "기본적인", "큰", "특정한", "분명한", "멋진", "죽은", "깊은", "어려운", "더러운", "쉬운", "유명한", "환상적인", "좋아하는", "좋은", "좋은", "위대한", "중요한", "작은", "새로운", "멋진", "같은", "작은", "일부", "사실", "잘못된");
const adjective5conceptE = new Array("나쁘게", "깔끔하게", "가깝게", "어둡게", "더럽게", "건조하게", "유명하게", "환상적으로", "멀리", "정교하게", "완전하게", "훌륭하게", "크게", "새로", "멋지게", "예쁘게", "조용하게", "안전하게", "작게", "따뜻하게", "젖게", "잘못하게");
const adjectiveCountableK1 = new Array("조금, 약간", "많은", "거의 없는(적은)");
const adjectiveCountableE1 = new Array("some, any, a few, a little", "a lot of, lots of, plenty of, many, much", "few, little");
const adjectiveCountableE2 = new Array("some", "any", "a lot of", "lots of", "plenty of", "many", "much", "a few", "few", "a little", "little");
const adjectiveCountableK2 = new Array("조금, 약간", "조금, 약간", "많은", "많은", "많은", "많은", "많은", "조금, 약간", "거의 없는", "조금, 약간", "거의 없는");

const adjectiveCountableK3 = new Array("조금, 약간의", "많은", "거의 없는(적은)");
const adjectiveCountableE3 = new Array("some/any/a few", "a lot of/lots of/plenty of/many", "few");
const adjectiveUncountableK1 = new Array("조금, 약간의", "많은", "거의 없는(적은)");
const adjectiveUncountableE1 = new Array("some/any/a little", "a lot of/lots of/plenty of, much", "little");
const adjectiveCountableK4 = new Array("some", "any", "a lot of", "lots of", "plenty of", "many", "much", "a few", "few", "a little", "little");
const adjectiveCountableE4 = new Array("셀 수 O & X", "셀 수 O & X", "셀 수 O & X", "셀 수 O & X", "셀 수 O & X", "셀 수 O", "셀 수 X", "셀 수 O", "셀 수 O", "셀 수 X", "셀 수 X");

const function0103K = new Array("하나 + 자음", "하나 + b", "하나 + c", "하나 + d", "하나 + f", "하나 + g", "하나 + h", "하나 + j", "하나 + k", "하나 + l", "하나 + m", "하나 + n", "하나 + p", "하나 + q", "하나 + r", "하나 + s", "하나 + t", "하나 + v", "하나 + w", "하나 + x", "하나 + y", "하나 + z", "하나 + 모음", "하나 + a", "하나 + e", "하나 + i", "하나 + o", "하나 + u");
const function0103E = new Array("a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "an +", "an +", "an +", "an +", "an +", "an +");
const function0105K = new Array("물고기 한 마리 - 물고기들", "양 한 마리 - 양들", "사슴 한 마리 - 사슴들", "남자 한 명 - 남자들", "여자 한 명 - 여자들", "발 하나 - 발들", "이(빨) 하나 - 이(빨)들", "거위 한 마리 - 거위들", "쥐 한 마리 - 쥐들", "황소 한 마리 - 황소들", "어린이 한 명 - 어린이들", "사람 한 명 - 사람들");
const function0105E = new Array("a fish - fish", "a sheep - sheep", "a deer -deer", "a man - men", "a woman - women", "a foot - feet", "a tooth - teeth", "a goose - geese", "a mouse - mice", "an ox - oxen", "a child - children", "a person - people");
const function0106K = new Array("고유명사", "추상명사", "물질명사");
const function0106E = new Array("셀 수 X", "셀 수 X", "셀 수 X");
const function0107K = new Array("잔(cold drink)", "잔(hot drink) ", "조각/점", "얇은 조각", "그릇", "병", "덩어리", "무게(파운드)");
const function0107E = new Array("glass", "cup", "piece", "slice", "bowl", "bottle", "loaf", "pound");

const uncountableNounK = new Array('물', '쥬스', '우유', '커피', '티');

const adjectiveFractionK = new Array("1/2", "1/4", "1/3", "2/3", "4 5/7");
const adjectiveFractionE = new Array("one half, a half", "one quarter, a quarter", "one third", "two thirds", "four and five sevenths");
const adjectiveCardinalOrdinalK = new Array("하나(의)", "둘", "셋", "넷", "다섯", "여섯", "일곱", "여덟", "아홉", "열", "첫 번째(의)", "두 번째", "세 번째", "네 번째", "다섯 번째", "여섯 번째", "일곱 번째", "여덟 번째", "아홉 번째", "열 번째");
const adjectiveCardinalOrdinal2K = new Array("한", "두", "세", "네", "다섯", "여섯", "일곱", "여덟", "아홉", "열", "첫 번째(의)", "두 번째", "세 번째", "네 번째", "다섯 번째", "여섯 번째", "일곱 번째", "여덟 번째", "아홉 번째", "열 번째");
const adjectiveCardinalOrdinalE = new Array("one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth");
const adjectiveCardinalOrdinal = new Array("기수", "기수", "기수", "기수", "기수", "기수", "기수", "기수", "기수", "기수", "서수", "서수", "서수", "서수", "서수", "서수", "서수", "서수", "서수", "서수");

const ADJECTIVE_TIMES_1K = new Array("두 배", "세 배", "네 배", "다섯 배", "여섯 배", "일곱 배", "여덟 배", "아홉 배", "열 배");
const ADJECTIVE_TIMES_1E = new Array("twice, two times, twofold, double", "three times, threefold, triple", "four times, fourfold", "five times, fivefold", "six times, sixfold", "seven times, sevenfold", "eight times, eightfold", "nine times, ninefold", "ten times, tenfold");
const ADJECTIVE_TIMES_1e = new Array("twice", "three times", "four times", "five times", "six times", "seven times", "eight times", "nine times", "ten times");

const ADJECTIVE_TIMES_2K = new Array("한 번", "두 번", "세 번", "네 번", "다섯 번", "여섯 번", "일곱 번", "여덟 번", "아홉 번", "열 번");
const ADJECTIVE_TIMES_2E = new Array("once", "twice", "three times", "four times", "five times", "six times", "seven times", "eight times", "nine times", "ten times");

const ADJECTIVE_MATH_K = new Array('더하기(+)', '빼기(-)', '곱하기(*)', '나누기(÷)', '는(=)? ');
const ADJECTIVE_MATH_E = new Array('plus, and', 'minus', 'multiplied by, times', 'divided by', 'is, equals');
const ADJECTIVE_MATH_2K = new Array('1 + 2 = 3', ' 9 - 2 = 7', '1 * 5 = 5', '4 ÷ 2 = 2');
const ADJECTIVE_MATH_2E = new Array('One plus two is three', 'Nine minus two is seven', 'One multiplied by five is five', 'Four divided by two is two');

const adverbOfFrequencyK = new Array('항상', '보통', '종종', '가끔', '거의 ~않은', '거의 ~않은', '거의 ~않은', '절대 ~않은');
const adverbOfFrequencyE = new Array('always', 'usually', 'often', 'sometimes', 'hardly, rarely, seldom', 'hardly, rarely, seldom', 'hardly, rarely, seldom', 'never');
const adverbTooEitherNeitherK = new Array('역시, 또한 (긍정문)', '역시, 또한 (부정문)', '역시, 또한 (not + either)');
const adverbTooEitherNeitherE = new Array('too', 'either', 'neither');
const sameInAdjectvieAndAdverbK = new Array('좋은', '건강한, 잘', '빠른, 빠르게', '이른, 일찍', '늦은, 늦게', '마지막의, 마지막으로', '오래된, 오래', '바른, 바로, 곧장', '높은, 높게', '어려운, 딱딱한, 열심히', '예쁜, 꽤');
const sameInAdjectvieAndAdverbE = new Array('good', 'well', 'fast', 'early', 'late', 'last', 'long', 'right', 'high', 'hard', 'pretty');

const adverbSimilarK = new Array("늦게", "가까이", "높게", "열심히", "짧은", "최근에", "거의", "매우", "거의 ~않은", "곧");
const adverbSimilarE = new Array("late", "near", "high", "hard", "short", "lately", "nearly", "highly", "hardly", "shortly");
const adjectiveConfusingK = new Array("남자다운", "상냥한", "사랑스러운", "값비싼", "매일", "매주", "매월", "매년");
const adjectiveConfusingE = new Array("manly", "friendly", "lovely", "costly", "daily", "weekly,", "monthly", "yearly");
const adverbAlreadyYetK = new Array("이미, 벌써", "아직, 벌써, 이제", "아직, 여전히", "매우", "훨씬", "그 밖에", "조차");
const adverbAlreadyYetE = new Array("already", "yet", "still", "very ", "much", "else ", "even ");
const adverbWithVerbK = new Array("입다 ", "미루다 ", "태워오다 ", "깨우다 ", "기르다 ", "취소하다 ", "수행하다 ", "포기하다 ", "찾다 ", "보충하다 ", "입어보다 ", "켜다/끄다 ");
const adverbWithVerbE = new Array("put it on", "put it off", "pick it up", "wake it up", "bring it up", "call it off", "carry it out", "give it up", "look it up", "make it up", "try it on", "turn it on/off");

const PRONOUN_NAMES_K = new Array("관계 대명사", "의문 대명사", "소유 대명사", "재귀 대명사", "지시 대명사", "부정 대명사", "인칭 대명사");
const PRONOUN_NAMES_E = new Array("관계가 있는 것을 연결해주는 말", "궁금한 것을 물어볼 때 쓰는 말", "누구의 것인지 소유를 말해주는 말", "스스로를 부를 때 쓰는 말", "가리킬 때 쓰는 말", "딱 정하지 않은 것을 표현할 때 쓰는 말", "인간을 칭하는 이름 대신 쓰는 말");
const PRONOUN_DEMONSTRATIVE_K = new Array("이것", "저것", "그것", "이것들", "저것들", "그것들");
const PRONOUN_DEMONSTRATIVE_E = new Array("this", "that", "it", "these", "those", "they");
const PRONOUN_DEMONSTRATIVE_Capital_E = new Array("This", "That", "It", "These", "Those", "They");
const PRONOUN_DEMONSTRATIVE_Capital_Be_E = new Array("This is", "That is", "It is", "These are", "Those are", "They are");
const PRONOUN_DEMONSTRATIVE_Capital_Be_Question_E = new Array("Is this", "Is that", "Is it", "Are these", "Are those", "Are they");
const PRONOUN_DEMONSTRATIVE_Capital_PAST_Be_E = new Array("This was", "That was", "It was", "These were", "Those were", "They were");
const PRONOUN_DEMONSTRATIVE_Capital_HAVE_E = new Array("This has", "That has", "It has", "These have", "Those have", "They have");
const PRONOUN_DEMONSTRATIVE_2K = new Array("소개, 전화할 때", "앞에 나온 명사", "(~하는) 사람들", "이", "저", "이 정도로", "저 정도로");
const PRONOUN_DEMONSTRATIVE_2E = new Array("this", "that / those ", "those (who) ", "this, these", "that, those", "this", "that");
const IMPERSONAL_SUBJECT_K = new Array("비인칭주어 it ( 날짜 )", "비인칭주어 it ( 날씨 )", "비인칭주어 it ( 요일 )", "비인칭주어 it ( 거리 )", "비인칭주어 it ( 시간 )", "비인칭주어 it ( 계절 )", "비인칭주어 it ( 명암 )");
const IMPERSONAL_SUBJECT_E = new Array("It is July 30th.", "It is sunny.", "It is Sunday.", "It is far.", "It is 7 o’clock.", "It is winter.", "It is dark.");
const PRONOUN_PERSONAL_SUBJECTIVE_3K = new Array("나", "너", "그", "그녀", "그것", "우리", "너희들", "그들", "그것들");
const PRONOUN_PERSONAL_SUBJECTIVE_2K = new Array("내가", "네가", "그가", "그녀가", "그것이", "우리들이", "너희들이", "그들이", "그것들이");
const PRONOUN_PERSONAL_SUBJECTIVE_K = new Array("나는", "너는", "그는", "그녀는", "그것은", "우리들은", "너희들은", "그들은", "그것들은");
const PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K = new Array("나는", "너는", "우리들은", "너희들은", "그들은", "그것들은");
const PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_2K = new Array("내가", "네가", "우리들이", "너희들이", "그들이", "그것들이");
const PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_2K = new Array("그가", "그녀가", "그것이");
const PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_K = new Array("그는", "그녀는", "그것은");
const PRONOUN_PERSONAL_SUBJECTIVE_E = new Array("I", "You", "He", "She", "It", "We", "You", "They", "They");
const PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_E = new Array("I", "You", "We", "You", "They", "They");
const PRONOUN_PERSONAL_SUBJECTIVE_SMALL_PLURAL_E = new Array("I", "you", "we", "you", "they", "they");
const PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_E = new Array("He", "She", "It");
const PRONOUN_PERSONAL_SUBJECTIVE_SMALL_SINGULAR_E = new Array("he", "she", "it");
const PRONOUN_PERSONAL_SUBJECTIVE_ALL_K = new Array("나는", " 내가", "너는", " 네가", "그는", " 그가", "그녀는", " 그녀가", "그것은", " 그것이", "우리들은", " 우리들이", "너희들은", " 너희들이", "그들은", " 그들이", "그것들은", " 그것들이");
const PRONOUN_PERSONAL_SUBJECTIVE_ALL_E = new Array("I", "I", "You", "You", "He", "He", "She", "She", "It", "It", "We", "We", "You", "You", "They", "They", "They", "They");
const PRONOUN_PERSONAL_SUBJECTIVE_ALL_AP = new Array("1인칭 단수", "1인칭 단수", "2인칭 단수", "2인칭 단수", "3인칭 단수", "3인칭 단수", "3인칭 단수", "3인칭 단수", "3인칭 단수", "3인칭 단수", "1인칭 복수", "1인칭 복수", "2인칭 복수", "2인칭 복수", "3인칭 복수", "3인칭 복수", "3인칭 복수", "3인칭 복수")
const PRONOUN_PERSONAL_SUBJECTIVE_ALL_AP1 = new Array("1인칭", "1인칭", "2인칭", "2인칭", "3인칭", "3인칭", "3인칭", "3인칭", "3인칭", "3인칭", "1인칭", "1인칭", "2인칭", "2인칭", "3인칭", "3인칭", "3인칭", "3인칭")
const PRONOUN_PERSONAL_SUBJECTIVE_ALL_AP2 = new Array("단수", "단수", "단수", "단수", "단수", "단수", "단수", "단수", "단수", "단수", "복수", "복수", "복수", "복수", "복수", "복수", "복수", "복수")
const PRONOUN_PERSONAL_SUBJECTIVE_DO_NEGATIVE_ALL_E = new Array("I don't", "I don't", "You don't", "You don't", "He doesn't", "He doesn't", "She doesn't", "She doesn't", "It doesn't", "It doesn't", "We don't", "We don't", "You don't", "You don't", "They don't", "They don't", "They don't", "They don't");
const PRONOUN_PERSONAL_SUBJECTIVE_DO_QUESTION_ALL_E = new Array("Do I", "Do I", "Do you", "Do you", "Does he", "Does he", "Does she", "Does she", "Does it", "Does it", "Do we", "Do we", "Do you", "Do you", "Do they", "Do they", "Do they", "Do they");
const PRONOUN_PERSONAL_SUBJECTIVE_ALL_TOGETHER_E = new Array("I", "I", "You", "You", "He", "He", "She", "She", "It", "It", "We", "We", "You", "You", "They", "They", "They", "They");
const PRONOUN_PERSONAL_SUBJECTIVE_ALL_TOGETHER_K = new Array("나는, 내가", "너는, 네가", "그는, 그가", "그녀는, 그녀가", "그것은, 그것이", "우리들은, 우리들이", "너희들은, 너희들이", "그들은, 그들이", "그것들은, 그것들이");
const PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E = new Array("I", "you", "he", "she", "it", "we", "you", "they", "they");
const PRONOUN_PERSONAL_SUBJECTIVE_SMALL_DOUBLE_E = new Array("I", "I", "you", "you", "he", "he", "she", "she", "it", "it", "we", "we", "you", "you", "they", "they", "they", "they");
const PRONOUN_PERSONAL_SUBJECTIVE_WITH_BE_K = new Array("나는, 내가 ~이다", "너는, 네가 ~이다", "그는, 그가 ~이다", "그녀는, 그녀가 ~이다", "그것은, 그것이 ~이다", "우리들은, 우리들이 ~이다", "너희들은, 너희들이 ~이다", "그들은, 그들이 ~이다", "그것들은, 그것들이 ~이다");
const PRONOUN_PERSONAL_SUBJECTIVE_WITH_BE_E = new Array("I am", "You are", "He is", "She is", "It is", "We are", "You are", "They are", "They are");
const PRONOUN_PERSONAL_SUBJECTIVE_WITH_PAST_BE_E = new Array("I was", "You were", "He was", "She was", "It was", "We were", "You were", "They were", "They were");
const BE_VERB_E = new Array("Am", "Are", "Is", "Is", "Is", "Are", "Are", "Are", "Are");
const BE_VERB_DOUBLE_E = new Array("Am", "Am", "Are", "Are", "Is", "Is", "Is", "Is", "Is", "Is", "Are", "Are", "Are", "Are", "Are", "Are", "Are", "Are");
const BE_VERB_SMALL_DOUBLE_E = new Array("am", "am", "are", "are", "is", "is", "is", "is", "is", "is", "are", "are", "are", "are", "are", "are", "are", "are");
const PRONOUN_PERSONAL_POSSESSIVE_K = new Array();
const PRONOUN_PERSONAL_POSSESSIVE_2K = new Array("나의", "너의", "그의", "그녀의", "그것의", "우리들의", "너희들의", "그들의, 그것들의");
const PRONOUN_PERSONAL_POSSESSIVE_2E = new Array("my", "your", "his", "her", "its", "our", "your", "their");
const PRONOUN_PERSONAL_POSSESSIVE_E = new Array("my", "your", "his", "her", "its", "our", "your", "their", "their");
const PRONOUN_PERSONAL_POSSESSIVE_PRONOUN_K = new Array("나의 것, 내꺼", "너의 것, 니꺼", "그의 것", "그녀의 것", "그것의 것", "우리들의 것", "너희들의 것", "그들의 것", "그것들의 것");
const PRONOUN_PERSONAL_POSSESSIVE_PRONOUN_E = new Array("mine", "yours", "his", "hers", "its", "ours", "yours", "theirs", "theirs");
const PRONOUN_PERSONAL_OBJECTIVE_4K = new Array("나에게", "너에게", "그에게", "그녀에게", "그것에게", "우리들에게", "너희들에게", "그들에게");
const PRONOUN_PERSONAL_OBJECTIVE_3K = new Array("나를", "너를", "그를", "그녀를", "그것을", "우리들을", "너희들을", "그들을");
const PRONOUN_PERSONAL_OBJECTIVE_K = new Array("나를, 나에게", "너를, 너에게", "그를, 그에게", "그녀를, 그녀에게", "그것을, 그것에게", "우리들을, 우리들에게", "너희들을, 너희들에게", "그들을, 그들에게");
const PRONOUN_PERSONAL_OBJECTIVE_E = new Array("me", "you", "him", "her", "it", "us", "you", "them", "them");
const PRONOUN_PERSONAL_ALL_K = new Array();
const PRONOUN_PERSONAL_ALL_E = new Array();
const PRONOUN_PERSONAL_PLURAL_CONCEPT_K = new Array("I를 포함한 여러 명?", "You를 포함한 여러 명?", "You & I는?", "You도 I도 없으면?");
const PRONOUN_PERSONAL_PLURAL_CONCEPT_E = new Array("We", "You", "We", "They");
const PRONOUN_PERSONAL_PLURAL_K = new Array("Nicole and I", "You and Nicole", "You and I", "Nicole and a cat");
const PRONOUN_PERSONAL_PLURAL_E = new Array("We", "You", "We", "They");
const PRONOUN_QUESTION_ANSWER_K = new Array("I 로 물어보면?", "You 로 물어보면?", "We 로 물어보면?", "He 는?", "She 는?", "It 은?", "They 는?");
const PRONOUN_QUESTION_ANSWER_E = new Array("You", "I / We", "We / You", "He", "She", "It", "They");
const PRONOUN_REFLEXIVE_K = new Array("- 자신/들", "나자신", "너자신", "그자신", "그녀자신", "그것자신", "우리자신들", "너희자신들", "그들자신들");
const PRONOUN_REFLEXIVE_E = new Array("-self/selves", "myself", "yourself", "himself", "herself", "itself", "ourselves", "yourselves", "themselves");
const PRONOUN_REFLEXIVE_USAGE_K = new Array("재귀용법", "강조용법");
const PRONOUN_REFLEXIVE_USAGE_E = new Array("(목적어자리) 생략 X ", "(‘직접’이라해석) 생략 O ");
const PRONOUN_REFLEXIVE_IDIOMATIC_USAGE_K = new Array("홀로 (bye~bye~)", "혼자 힘으로, 스스로", "저절로", "본래", "마음껏 먹다", "혼잣말하다", "즐기다");
const PRONOUN_REFLEXIVE_IDIOMATIC_USAGE_E = new Array("by oneself", "for oneself", "of itself", "in oneself", "help oneself", "talk/say to oneself", "enjoy oneself");
const PRONOUN_INDEFINITE_K = new Array();
const PRONOUN_INDEFINITE_E = new Array();
const PRONOUN_INDEFINITE_2K = new Array("앞에 나온 명사와 같은 종류의 하나", "앞에 나온 명사와 같은 종류 두 개 이상", "일반 사람 ", "특정한 그것 하나");
const PRONOUN_INDEFINITE_2E = new Array("one", "ones", "one", "it");
const PRONOUN_INDEFINITE_3K = new Array("긍정, 권유", "부정, 의문, 조건");
const PRONOUN_INDEFINITE_3E = new Array("Some", "Any");
const PRONOUN_INDEFINITE_4K = new Array("2 아무거나 하나, 나머지 하나", "3 아무거나 하나, 또 다른 하나, 나머지 하나", "여럿 -몇몇은, 다른 몇몇은", "여럿 -몇몇은, 나머지 모두는");
const PRONOUN_INDEFINITE_4E = new Array("one, the other", "one, another, the other", "some, others", "some, the others");
const PRONOUN_INDEFINITE_5K = new Array("서로서로 (2명)", "서로서로 (3명 이상)");
const PRONOUN_INDEFINITE_5E = new Array("each other", "one another");
const PRONOUN_INDEFINITE_6K = new Array("단명 단동 (모두)", "단명 단동 (각각)", "복명 단동 (각각)", "단명 단동 (셀수 X)", "복명 복동 (셀수 O)", "복명 복동 (둘다)", "~마다, ~에 한 번");
const PRONOUN_INDEFINITE_6E = new Array("every ", "each ", "each of ", "all (of) ", "all (of) ", "both (of) ", "every 서수 단명 \n every 기수 복명");
const PRONOUN_INDEFINITE_7K = new Array("둘 중 어느쪽이든", "둘 다 아닌", "아무(것)도 아닌");
const PRONOUN_INDEFINITE_7E = new Array("either 단명 단동 \n either of 복명 단동 ", "neither 단명 단동 \n neither of 복명 단동", "none of 단명 단동 (셀수 X) \n none of 복명 단동");
const PRONOUN_COMPLETE_PARTIAL_NEGATION_K = new Array("전혀 아니다, \n 아무도 ~아니다", "모두가 ~한 것은 아니다, \n 항상 ~한 것은 아니다");
const PRONOUN_COMPLETE_PARTIAL_NEGATION_E = new Array("no, none, nothing, nobody, neither, not(never) ~ any", "부정어 + 전체를 나타내는 부사,\n 부정어 + all every both,\n 부정어 + always completely, entirely, absolutely, necessarily");
const PRONOUN_INTERROGATIVE_K = new Array("누구", "무엇", "어느 것");
const PRONOUN_INTERROGATIVE_E = new Array("Who", "What", "Which");

const CONJUNCTION_CONCEPT_K = new Array("접속사?", "등위접속사?", "종속접속사?", "상관접속사?");
const CONJUNCTION_CONCEPT_E = new Array("말과 말을 이어주는 말", "대등하게 이어주는 말", "종같이 속하는 접속사", "상관있는 접속사");
const conjunctionCoordinateK = new Array("등위접속사?");
const conjunctionCoordinateE = new Array("대등하게 이어주는 말?");
const conjunctionCoordinate2K = new Array("그리고, 그래서", "앞뒤 내용이 대등할 때", "그러나, 하지만", "앞뒤 내용이 반대될 때", "혹은, 또는", "둘 이상 중에서 선택할 때", "그래서, 그 결과", "앞-원인, 뒤-결과");
const conjunctionCoordinate2E = new Array("and", "and", "but", "but", "or", "or", "so", "so");
const CONJUNCTION_Subordinate_K = new Array("종속접속사?");
const CONJUNCTION_Subordinate_E = new Array("종같이 속하는 접속사");
const CONJUNCTION_RELATIVE_K = new Array("상관접속사?");
const CONJUNCTION_RELATIVE_E = new Array("상관있는 접속사");

const conjunctionSubordinateNounK = new Array("~하는 것", "~인지 아닌지");
const conjunctionSubordinateNounE = new Array("that ", "if/whether ~ (or not)");
const conjunctionSubordinateAdverbK = new Array("SV 할 때 SV 한다", "SV 이후로 SV", "SV 동안에 SV", "SV 전에 SV", "SV 후에 SV", "SV 하자마자 SV", "SV 때까지 SV");
const conjunctionSubordinateAdverbE = new Array("SV when, as SV ", "SV since SV ", "SV while SV ", "SV before SV ", "SV after SV ", "SV as soon as SV ", "SV until/till SV ");
const conjunctionSubordinateAdverb2K = new Array("~때문에", "만약~라면", "만약~하지 않는다면", "~에도 불구하고 ", "~하기 위해서", "매우 (원인)해서 (결과)하다");
const conjunctionSubordinateAdverb2E = new Array("because since as", "if", "unless (= if ~ not)", "even though, even if", "so that, in order that", "so 형/부(원인) that (결과)");
const conjunctionRelativeK = new Array("A B 둘 다", "A B 둘 중 하나", "A B 둘 다 아닌", "A뿐만 아니라 B도", "A가 아니라 B");
const conjunctionRelativeE = new Array("both A and B ", "either A or B", "neither A nor B", "not only A but (also) B, \n B as well as A", "not A but B");
const conjunctiveAdverb1K = new Array("그러나", "반대로", "반면", "그와 대조적으로", "게다가", "요약하면", "그렇지 않으면", "예를 들면");
const conjunctiveAdverb1E = new Array("however", "on the contrary", "on the other hand", "by contrast", "besides, moreover, \n furthermore, in addition", "in short", "otherwise", "for example, for instance");
const conjunctiveAdverb2K = new Array("그러므로", "결국", "그 결과", "결과적으로", "사실", "특히", "다시 말해서", "그런데", "대신에");
const conjunctiveAdverb2E = new Array("so, therefore, hence", "finally", "consequently", "as a result", "in fact, as a matter of fact", "above all", "in other words", "by the way", "instead");


const PREPOSITION_CONCEPT_K = new Array("전치사");
const PREPOSITION_CONCEPT_E = new Array("(명사) 앞에서 치사하게 힌트주는 말 - 시간, 장소, 위치");
const PREPOSITION_BASIC_K = new Array("안에", "위에", "아래", "옆에 ", "뒤에", "앞에"); // , "사이에"
const PREPOSITION_BASIC_E = new Array("in", "on", "under", "next to ", "behind", "in front of"); // , "between"
const PREPOSITION_TIME_K = new Array("– 긴 시간/하루의 때에", "- 세기 연도 계절 월에", "___ the morning", "___ Sunday morning", "– 요일 날짜 특정한 날에", "– 정확한 때에", "- 구체적 시간, 특정한 시점에");
const PREPOSITION_TIME_E = new Array("in", "in", "in", "on ", "on ", "at", "at");
const PREPOSITION_TIME_ETC_K = new Array("경에, 무렵에", "전에", "후에", "동안에(구체적 숫자)", "동안에(특정기간)", "~까지(계속)", "~까지(완료)", "부터 ", "이후로");
const PREPOSITION_TIME_ETC_E = new Array("around ", "before ", "after ", "for ", "during ", "until ", "by ", "from", "since");
const PREPOSITION_PLACE_K = new Array("– 넓은 장소, 내부 안에", "- 도시 국가, 건물, 사물 내부", "– 표면에 접촉한 상태 위에", "– 비교적 좁은 장소", "- 하나의 지점에");
const PREPOSITION_PLACE_E = new Array("in", "in", "on ", "at", "at");
const PREPOSITION_PLACE_ETC_K = new Array("근처에", "위에 (떨어져)", "아래 (떨어져)", "~로(목적지)", "뒤에");
const PREPOSITION_PLACE_ETC_E = new Array("near", "over", "under", "to", "behind");
const PREPOSITION_POSITION_K = new Array("위에(막연히)", "아래(막연히)");
const PREPOSITION_POSITION_E = new Array("above", "below");
const PREPOSITION_DIRECTION_K = new Array("안으로", "밖으로", "~으로(~행의)", "쪽으로", "가로질러", "통과하여", "따라", "주위에", "위로", "아래로");
const PREPOSITION_DIRECTION_E = new Array("into ", "out of ", "for ", "toward ", "across ", "through ", "along ", "around ", "up ", "down ");
const PREPOSITION_ETC_K = new Array("~을 타고, ~으로(수단)", "~을 가지고(도구), ~와 함께", "~없이", "~와 같이, 처럼", "앞에 ", "옆에 ", "맞은편에 ", "A부터 B까지", "A와 B 사이에", "중에", "쪽으로", "향해서");
const PREPOSITION_ETC_E = new Array("by", "with ", "without ", "like ", "in front of", "next to, by", "across from", "from A to B", "between A and B", "among ", "to", "for");

const PREPOSITION_PLACE_2K = new Array("공원에서", "박물관에서", "학교에서", "식당에서", "구내식당에서", "도서관에서", "뉴욕에서", "파리에서", "한국에서", "집에서", "서점에서", "서점 앞에서", "은행에서", "교실에서", "소파 위에서", "침대 위에서", "방 안에서", "거실에서", "안방에서", "부엌에서", "화장실에서", "화장실에서");
const PREPOSITION_PLACE_2E = new Array("at the park", "at the museum", "at school", "at a restaurant", "at the cafeteria", "in the library", "in New York", "in Paris", "in Korea", "at home", "in the bookstore", "in front of the bookstore", "at a bank", "in the classroom", "on the sofa", "on the bed", "in the room", "in the living room", "in the bedroom", "in the kitchen", "in the bathroom", "in the restroom");



const articleK = new Array('하나의 ', '하나의 ', '그 ');
const articleE = new Array('a ', 'an ', 'the ');
const ARTICLE_K = new Array('하나의 + 자음', '하나의 + 모음', '그 ');
const ARTICLE_E = new Array('a ', 'an ', 'the ');
const ARTICLE_INFINITIVE_K = new Array("① 막연한(아무거나) 하나", "② 개수 하나", "③ ~당, ~마다 (per)", "④ 종족대표 (단수)", "⑤ 어떤", "⑥ 약간");
const ARTICLE_INFINITIVE_E = new Array("a/an", "a/an", "a/an", "a/an", "a/an", "a/an");
const ARTICLE_THE_NUMERIC_K = new Array("the 단수명사", "the 복수명사(s)", "the 셀 수 X 명사", "the pen", "the pens", "the water");
const ARTICLE_THE_NUMERIC_E = new Array("단수", "복수", "단수", "단수", "복수", "단수");
const ARTICLE_INFINITIVE_BASIC_K = new Array("하루에 한 번", "하루에 두 번", "하루에 세 번", "하루에 네 번", "하루에 다섯 번", "하루에 여러 번", "한 달에 한 번", "일 년에 한 번");
const ARTICLE_INFINITIVE_BASIC_E = new Array("once a day", "twice a day", "three times a day", "four times a day", "five times a day", " a day", "once a month", "once a year");

const ARTICLE_THE_K = new Array("① 유일한 것 말할 때", "② 너도 알고 나도 아는 것 말할 때", "③ 했던 말 또 할 때", "④ 동서남북 말할 때", "⑤ 제한/한정 수식될 때", "⑥ 악기 이름 말할 때", "⑦ 서수, 최상급 말할 때", "⑧ ___ only, ___ very, ___ same", "⑨ 종족대표 말할 때");
const ARTICLE_THE_E = new Array("the", "the", "the", "the", "the", "the", "the", "the", "the");
const NO_ARTICLE_K = new Array("① 식사 / 운동 / 학과(과목) 앞에", "② 고유한 이름 앞에", "(나라, 도시, 사람, 등)", "③ By 교통수단", "④ 소유격", "⑤ 건물 본래 목적", "⑥ 신분 / 관직");
const NO_ARTICLE_E = new Array("No a/an/the (무관사)", "No a/an/the (무관사)", "No a/an/the (무관사)", "No a/an/the (무관사)", "No a/an/the (무관사)", "No a/an/the (무관사)", "No a/an/the (무관사)");

const TENSE_K = new Array();
const TENSE_CONCEPT_K = new Array("시제");
const TENSE_CONCEPT_E = new Array("시간 때를 알려주는 말, 12시제");
const TENSE_12_K = new Array("나는 춤춘다", "나는 춤췄다", "나는 춤 출 것이다", "나는 춤추고 있다", "나는 춤추고 있었다", "나는 춤추고 있을 것이다", "나는 춤춰왔다", "나는 춤춰왔었다", "나는 춤춰 갈 것이다", "나는 춤췄고 지금도 춤추고 있다", "나는 춤췄었고 그 때도 춤추고 있었다", "나는 춤추고 있고 그 때도 춤추고 있을 것이다");
const TENSE_12_E = new Array("현재 시제", "과거 시제", "미래 시제", "현재 진행 시제", "과거 진행 시제", "미래 진행 시제", "현재 완료 시제", "과거 완료 시제", "미래 완료 시제", "현재 완료 진행 시제", "과거 완료 진행 시제", "미래 완료 진행 시제");
const TENSE_12_2K = new Array("나는 춤춘다", "나는 춤췄다", "나는 춤 출 것이다", "나는 춤추고 있다", "나는 춤추고 있었다", "나는 춤추고 있을 것이다", "나는 춤춰왔다", "나는 춤춰왔었다", "나는 춤춰 갈 것이다", "나는 춤췄고 지금도 춤추고 있다", "나는 춤췄었고 그 때도 춤추고 있었다", "나는 춤추고 있고 그 때도 춤추고 있을 것이다");
const TENSE_12_2E = new Array("I dance.", "I danced.", "I will dance.", "I am dancing.", "I was dancing.", "I will be dancing.", "I have danced.", "I had danced.", "I will have danced.", "I have been dancing.", "I had been dancing.", "I will have been dancing.");
const TENSE_PRESENT_K = VERB_ALL_K;
const TENSE_PAST_K = new Array("행동했다", "더했다", "조언했다", "동의했다", "대답했다", "도착했다", "물었다", "구었다", "이었다", "되었다", "시작했다", "믿었다", "물었다", "막았다", "빌렸다", "깼다", "가져왔다", "닦았다", "만들었다", "탔다", "샀다", "전화했다", "보살폈다", "날랐다", "잡았다", "바꿨다", "확인했다", "선택했다", "올랐다", "모았다", "왔다", "축하했다", "제어했다", "요리했다", "복사했다", "덮었다", "건넜다", "울었다", "잘랐다", "춤췄다", "결정했다", "설계했다", "죽었다", "논의했다", "나누었다", "했다", "그렸다", "꿈꿨다", "마셨다", "운전했다", "떨어졌다", "먹었다", "끝냈다", "즐겼다", "입장했다", "운동했다", "실패했다", "떨어졌다", "느꼈다", "싸웠다", "채웠다", "찾았다", "마쳤다", "고쳤다", "고정했다", "날았다", "집중했다", "잊었다", "형성했다", "튀겼다", "받았다", "전했다", "갔다", "성장했다", "추측했다", "안내했다", "걸었다", "싫어했다", "가졌다", "도왔다", "쳤다", "버텼다", "잡았다", "희망했다", "사냥했다", "서둘렀다", "소개했다", "초대했다", "참여했다", "유지했다", "찼다", "죽였다", "알았다", "배웠다", "거짓말했다", "좋아했다", "들었다", "살았다", "봤다", "사랑했다", "만들었다", "결혼했다", "만났다", "놓았다", "움직였다", "필요로 했다", "열었다", "그렸다", "통과했다", "지불했다", "선택했다", "계획했다", "놀았다", "인쇄했다", "밀었다", "넣었다", "읽었다", "기억했다", "돌아왔다", "달렸다", "구했다", "말했다", "봤다", "팔았다", "보냈다", "놀라게 했다", "보여줬다", "노래했다", "앉았다", "잤다", "냄새를 맡았다", "웃었다", "말했다", "일어섰다", "시작했다", "머물렀다", "멈췄다", "공부했다", "수영했다", "걸렸다", "말했다", "가르쳤다", "말했다", "감사했다", "생각했다", "만졌다", "훈련했다", "여행했다", "노력했다", "돌렸다", "이해했다", "이용했다", "방문했다", "기다렸다", "깼다", "걸었다", "원했다", "씻었다", "봤다(관람했다)", "입었다", "환영했다", "우승했다", "바랐다", "일했다", "걱정했다", "썼다", "울었다", "가라앉았다", "뿌렸다", "먹였다", "쐈다", "이끌었다", "기었다", "쓸었다", "울었다", "떠났다", "구부렸다", "빌렸다", "잃었다", "소비했다", "의미했다", "찾았다", "묶었다", "감았다", "두었다(l)", "들었다", "미끄러졌다", "팠다", "빛났다", "돌았다", "때렸다(s)", "때렸다(b)", "깨웠다", "낳았다", "찢었다", "감췄다", "얼렸다", "훔쳤다", "불었다", "던졌다", "일어났다", "탔다", "올랐다", "흔들었다");
const TENSE_PAST_E = new Array("acted", "added", "advised", "agreed", "answered", "arrived", "asked", "baked", "was, were", "became", "began", "believed", "bit", "blocked", "borrowed", "broke", "brought", "brushed", "built", "burned", "bought", "called", "cared", "carried", "caught", "changed", "checked", "chose", "climbed", "collected", "came", "congratulated", "controlled", "cooked", "copied", "covered", "crossed", "cried", "cut", "danced", "decided", "designed", "died", "discussed", "divided", "did", "drew", "dreamed", "drank", "drove", "dropped", "ate", "ended", "enjoyed", "entered", "exercised", "failed", "fell", "felt", "fought", "filled", "found", "finished", "fixed", "fixed", "flew", "focused", "forgot", "formed", "fried", "got", "gave", "went", "grew", "guessed", "guided", "hung", "hated", "had", "helped", "hit", "held", "held", "hoped", "hunted", "hurried", "introduced", "invited", "joined", "kept", "kicked", "killed", "knew", "learned", "lied", "liked", "listened", "lived", "looked", "loved", "made", "married", "met", "missed", "moved", "needed", "opened", "painted", "passed", "paid", "picked", "planned", "played", "printed", "pushed", "put", "read", "remembered", "returned", "ran", "saved", "said", "saw", "sold", "sent", "shocked", "showed", "sang", "sat", "slept", "smelled", "smiled", "spoke", "stood", "started", "stayed", "stopped", "studied", "swam", "took", "talked", "taught", "told", "thanked", "thought", "touched", "trained", "traveled", "tried", "turned", "understood", "used", "visited", "waited", "woke", "walked", "wanted", "washed", "watched", "wore", "welcomed", "won", "wished", "worked", "worried", "wrote", "rang", "sank", "sowed", "fed", "shot", "led", "crept", "swept", "wept", "left", "bent", "lent", "lost", "spent", "meant", "sought", "bound", "wound", "laid", "heard", "slid", "dug", "shone", "spun", "struck", "beat", "awoke", "bore", "tore", "hid", "froze", "stole", "blew", "threw", "arose", "rode", "rose", "shook");
const TENSE_PAST_2K = new Array("보통은?", "e로 끝나면?", " y앞에 자음이면?", "y앞에 모음이면?", "cvc는?", "불규칙은?");
const TENSE_PAST_2E = new Array("ed", "d", "y kill - ied", "그냥 ed", "ced", "외운다");
const TENSE_PASTv2_2K = new Array("보통은?", "p f s k sh ch는?", "t d 는?");
const TENSE_PASTv2_2E = new Array("/d/", "/t/", "/id/");
const TENSE_PAST_2K_ALL = new Array("ed 붙이는 규칙 1 보통은 ", "ed 붙이는 규칙 2 e로 끝나면 ", "ed 붙이는 규칙 3 y앞에 자음이면", "ed 붙이는 규칙 4 y앞에 모음이면", "ed 붙이는 규칙 5 cvc는 ", "ed 붙이는 규칙 6 불규칙은 ", "ed 발음하는 규칙 1 보통은 ", "ed 발음하는 규칙 2 p f s k sh ch는 ", "ed 발음하는 규칙 3 t d 는 ");
const TENSE_PAST_2E_ALL = new Array("ed", "d", "y kill - ied", "그냥 ed", "ced", "외운다", "/d/", "/t/", "/id/");
const SENTENCE_NEGATIVE_INTERROGATIVE_K = new Array("Be동사의 부정문은?", "Be동사의 의문문은?", "일반동사의 부정문은?", "일반동사의 의문문은?");
const SENTENCE_NEGATIVE_INTERROGATIVE_E = new Array("Be 뒤에 not", "Be를 맨 앞", "두더지 뒤에 not 동사원형", "두더지를 맨 앞 동사원형");
// TODO 나중에 진행형 불가동사 뺄 것 "한국말만 빈 칸 처리"
const TENSE_CONTINUOUS_K = new Array("행동하는", "더하는", "조언하는", "동의하는", "답하는", "도착하는", "묻는", "굽는", "시작하는", "물어뜯는", "막는", "빌려오는", "깨뜨리는", "가져오는", "짓는", "불태우는", "사는", "부르는", "신경쓰는", "옮기는", "바꾸는", "검사하는", "고르는", "오르는", "모으는", "오는", "축하하는", "제어하는", "요리하는", "복사하는", "덮는", "건너는", "우는", "자르는", "춤추는", "결정하는", "디자인하는", "죽는", "논의하는", "그리는", "꿈꾸는", "마시는", "운전하는", "떨어뜨리는", "먹는", "끝내는", "즐기는", "들어가는", "운동하는", "실패하는", "떨어지는", "싸우는", "채우는", "완성하는", "고치는", "나는", "집중하는",
  "형성하는", "튀기는", "얻는", "주는", "가는", "자라는", "추측하는", "안내하는", "도와주는", "치는", "잡는", "사냥하는", "서두르는", "소개하는", "초대하는", "참가하는", "보관하는", "차는", "죽이는", "거짓말하는", "듣는", "살아가는", "만드는", "결혼하는", "만나는", "그리워하는", "움직이는", "여는", "지나는", "지불하는", "골라내는", "계획하는", "인쇄하는", "두는", "읽는", "돌아오는", "달리는", "저장하는", "파는", "보내는", "놀라게 하는", "보여주는", "앉는", "자는", "웃는", "말하는", "서는", "시작하는", "머무는", "멈추는", "공부하는", "수영하는", "얘기하는", "가르치는", "이야기하는", "감사하는", "생각하는", "만지는", "훈련하는", "여행하는", "시도하는", "방문하는", "기다리는", "걷는", "입는", "이기는", "일하는", "걱정하는", "쓰는", "울리는", "먹이를 주는", "이끄는", "떠나는", "구부리는", "빌려주는", "미끄러지는", "땅을 파는", "빛나는", "찢는", "숨는", "얼어붙는", "훔치는", "던지는", "흔드는");
const TENSE_CONTINUOUS_E = new Array("acting", "adding", "advising", "agreeing", "answering", "arriving", "asking", "baking", "beginning", "biting", "blocking", "borrowing", "breaking", "bringing", "building", "burning", "buying", "calling", "caring", "carrying", "changing", "checking", "choosing", "climbing", "collecting", "coming", "congratulating", "controlling", "cooking", "copying", "covering", "crossing", "crying", "cutting", "dancing", "deciding", "designing", "dying", "discussing", "drawing", "dreaming", "drinking", "driving", "dropping", "eating", "ending", "enjoying", "entering", "exercising", "failing", "falling", "fighting", "filling", "finishing", "fixing", "flying", "focusing",
  "forming", "frying", "getting", "giving", "going", "growing", "guessing", "guiding", "helping", "hitting", "holding", "hunting", "hurrying", "introducing", "inviting", "joining", "keeping", "kicking", "killing", "lying", "listening", "living", "making", "marrying", "meeting", "missing", "moving", "opening", "passing", "paying", "picking", "planning", "printing", "putting", "reading", "returning", "running", "saving", "selling", "sending", "shocking", "showing", "sitting", "sleeping", "smiling", "speaking", "standing", "starting", "staying", "stopping", "studying", "swimming", "talking", "teaching", "telling", "thanking", "thinking", "touching", "training", "traveling", "trying", "visiting", "waiting", "walking", "wearing", "winning", "working", "worrying", "writing", "ringing", "feeding", "leading", "leaving", "bending", "lending", "sliding", "digging", "shining", "tearing", "hiding", "freezing", "stealing", "throwing", "shaking");
const TENSE_CONTINUOUS_PAST_K = TENSE_CONTINUOUS_K;
const TENSE_CONTINUOUS_PAST_E = TENSE_CONTINUOUS_E;
const TENSE_CONTINUOUS_FUTURE_K = TENSE_CONTINUOUS_K;
const TENSE_CONTINUOUS_FUTURE_E = TENSE_CONTINUOUS_E;

// const RULE_OF_ING_K = new Array("ing붙이는 규칙 ① 보통  ", "ing붙이는 규칙 ② e로 끝나면", "ing붙이는 규칙 ③ ie로 끝나면", "ing붙이는 규칙 ④ cvc로 끝나면", "ing붙이는 규칙 ④ cvc인데 w, x, y, z 로 끝나면", "ing붙이는 규칙 ⑤ 1음절 강세", "ing붙이는 규칙 ⑥ 2음절 강세");
const RULE_OF_ING_K = new Array("보통?", "e로 끝나면?", "ie로 끝나면?", "cvc로 끝나면?", "cvc인데 w, x, y, z 로 끝나면?", "1음절 강세?", "2음절 강세?");
const RULE_OF_ING_E = new Array("ing", "e 빼고 ing", "ie > y ing", "cvc는 cing", "그냥 ing", " ing", " c ing");
const VERB_NOT_CONTINUOUS_1K = new Array("소유/상태동사");
const VERB_NOT_CONTINUOUS_1E = new Array("be have resemble belong");
const VERB_NOT_CONTINUOUS_2K = new Array("감정/생각동사");
const VERB_NOT_CONTINUOUS_2E = new Array("want love (dis)like hate \n understand know \n remember forget believe");
const VERB_NOT_CONTINUOUS_3K = new Array("지각/감각동사");
const VERB_NOT_CONTINUOUS_3E = new Array("sound hear see feel \n need cost own matter");
const TENSE_CONTINUOUS_2K = new Array("현재 진행형?", "과거 진행형?", "미래 진행형?");
const TENSE_CONTINUOUS_2E = new Array("하고 있다, 하는 중이다", "하고 있었다, 하는 중이었다", "하고 있을거다, 하는 중일거다");
const TENSE_FUTURE_K = new Array();
const TENSE_FUTURE_2K = new Array("- 시간, 조건의 부사절", "- 왕래발착동사 go come start leave arrive reach + 가까운 미래 나타내는 부사구", "be going to", "be about to ");
const TENSE_FUTURE_2E = new Array("현재로 미래", "현재로 미래", "예정이다 ", "막 ~하려고 하다");
const TENSE_PRESENT_PERFECT_K = new Array("행동해왔다", "더해왔다", "조언해왔다", "동의해왔다", "대답해왔다", "도착해왔다", "물어왔다", "구워왔다", "이어왔다", "되어왔다", "시작해왔다", "믿어왔다", "물어왔다", "막아왔다", "빌려왔다", "깨뜨려왔다", "가져왔다", "닦아왔다", "만들어왔다", "타왔다", "사왔다", "전화해왔다", "보살펴왔다", "휴대해왔다", "잡아왔다", "변경해왔다", "확인해왔다", "선택해왔다", "올라왔다", "모아왔다", "되어왔다", "축하해왔다", "제어해왔다", "요리해왔다", "복사해왔다", "덮어왔다", "건너왔다", "울어왔다", "잘라왔다", "춤춰왔다", "결정해왔다", "설계해왔다", "죽어왔다", "논의해왔다", "나눠왔다", "해왔다", "그려왔다", "꿈꿔왔다", "마셔왔다", "운전해왔다", "떨어져왔다", "먹어왔다", "끝나왔다", "즐겨왔다", "입장해왔다", "훈련해왔다", "실패해왔다", "떨어져왔다", "느껴왔다", "싸워왔다", "채워왔다", "찾아왔다", "마쳐왔다", "고쳐왔다", "고정해왔다", "날아왔다", "집중해왔다", "잊어왔다", "형성해왔다", "튀겨왔다", "받아왔다", "전해왔다", "가왔다", "성장해왔다", "~ 라고 생각해왔다", "안내해왔다", "걸어왔다", "싫어해왔다", "가져왔다", "도와왔다", "쳐왔다", "버텨왔다", "잡아왔다", "희망해왔다", "사냥해왔다", "빨리 ~해왔다", "소개해왔다", "초대해왔다", "참여해왔다", "유지해왔다", "차왔다", "죽여왔다", "알아왔다", "배워왔다", "거짓말해왔다", "좋아해왔다", "들어왔다", "살아왔다", "보아왔다", "사랑해왔다", "만들어왔다", "결혼해왔다", "만나왔다", "놓쳐왔다", "움직여왔다", "필요해왔다", "열어왔다", "그려왔다", "통과해왔다", "지불해왔다", "선택해왔다", "계획해왔다", "놀아왔다", "인쇄해왔다", "밀어왔다", "넣어왔다", "읽어왔다", "기억해왔다", "돌아가왔다", "달려왔다", "절약해왔다", "말해왔다", "보아왔다", "팔아왔다", "보내왔다", "놀라게 해왔다", "보여줘왔다", "노래해왔다", "앉아왔다", "자왔다", "냄새를 맡아왔다", "웃어왔다", "말해왔다", "세워왔다", "시작해왔다", "머물러왔다", "멈춰왔다", "공부해왔다", "수영해왔다", "걸려왔다", "말해왔다", "가르쳐왔다", "말해왔다", "말해왔다", "생각해왔다", "만져왔다", "훈련해왔다", "여행해왔다", "노력해왔다", "돌려왔다", "이해해왔다", "이용해왔다", "방문해왔다", "기다려왔다", "깨왔다", "걸어왔다", "원해왔다", "씻어왔다", "관람해왔다", "입어왔다", "환영해왔다", "우승해왔다", "바라왔다", "일해왔다", "걱정해왔다", "쓰여왔다", "울려왔다", "가라앉아왔다", "뿌려왔다", "먹여왔다", "쏘아왔다", "이끌어왔다", "기어왔다", "쓸어왔다", "울어왔다", "떠나왔다", "구부려왔다", "빌려왔다", "잃어왔다", "소비해왔다", "의미해왔다", "찾아왔다", "묶어왔다", "감아왔다", "두어왔다", "들어왔다", "미끄러져왔다", "파왔다", "빛나왔다", "돌아왔다", "때려왔다", "때려왔다", "깨왔다", "낳아왔다", "찢어왔다", "감춰왔다", "얼어왔다", "훔쳐왔다", "불어왔다", "던져왔다", "일어나왔다", "타왔다", "올라왔다", "흔들어왔다");
const TENSE_PRESENT_PERFECT_E = new Array("acted", "added", "adviseed", "agreeed", "answered", "arrived", "asked", "baked", "been", "become", "begun", "believed", "bitten", "blocked", "borrowed", "broken", "brought", "brushed", "built", "burned", "bought", "called", "cared", "carried", "caught", "changed", "checked", "chosen", "climbed", "collected", "come", "congratulated", "controled", "cooked", "copied", "covered", "crossed", "cried", "cut", "danced", "decided", "designed", "died", "discussed", "divided", "done", "drawn", "dreamed", "drunk", "driven", "dropped", "eaten", "ended", "enjoyed", "entered", "exercised", "failed", "fallen", "felt", "fought", "filled", "found", "finished", "fixed", "fixed", "flown", "focused", "forgotten", "formed", "fried", "gotten", "given", "gone", "grown", "guessed", "guided", "hung", "hated", "had", "helped", "hit", "held", "held", "hoped", "hunted", "hurried", "introduced", "invited", "joined", "kept", "kicked", "killed", "known", "learned", "lied", "liked", "listened", "lived", "looked", "loved", "made", "married", "met", "missed", "moved", "needed", "opened", "painted", "passed", "paid", "picked", "planned", "played", "printed", "pushed", "put", "read", "remembered", "returned", "run", "saved", "said", "seen", "sold", "sent", "shocked", "showed", "sung", "sat", "slept", "smelled", "smiled", "spoken", "stood", "started", "stayed", "stopped", "studied", "swum", "taken", "talked", "taught", "told", "thanked", "tought", "touched", "trained", "traveled", "tried", "turned", "understood", "used", "visited", "waited", "woken", "walked", "wanted", "washed", "watched", "worn", "welcomed", "won", "wished", "worked", "worried", "written", "rung", "sunk", "sowed", "fed", "shot", "led", "crept", "swept", "wept", "left", "bent", "lent", "lost", "spent", "meant", "sought", "bound", "wound", "laid", "heard", "slid", "dug", "shone", "spun", "struck", "beaten", "awoken", "born", "torn", "hidden", "frozen", "stolen", "blown", "thrown", "arisen", "ridden", "risen", "shaken");
const TENSE_PRESENT_VS_PRESENT_CONTINUOUS_K = new Array("일상적인 일", "습관", "반복", "현재 또는 항상 사실적인 일", "usually, every, on Sundays", "now, at this moment");
const TENSE_PRESENT_VS_PRESENT_CONTINUOUS_E = new Array("현재", "현재", "현재", "현재", "현재", "현재 진행");


const PRESENT_PERFECT_USAGE_K = new Array("ever", "never", "before", "often", "once", "twice", "three times", "just", "already", "yet");
const PRESENT_PERFECT_USAGE_E = new Array("현재완료-경험", "현재완료-경험", "현재완료-경험", "현재완료-경험", "현재완료-경험", "현재완료-경험", "현재완료-경험", "현재완료-완료", "현재완료-완료", "현재완료-완료");
const PRESENT_PERFECT_USAGE_2K = new Array("since", "for", "gone", "come", "left", "lost", "bought");
const PRESENT_PERFECT_USAGE_2E = new Array("현재완료-계속", "현재완료-계속", "현재완료-결과", "현재완료-결과", "현재완료-결과", "현재완료-결과", "현재완료-결과");
const PAST_VS_PRESENT_PERFECT_K = new Array("yesterday", "when", "last", "ago", "ever", "never", "before", "just", "already", "yet", "for", "since", "how long", "lost", "gone");
const PAST_VS_PRESENT_PERFECT_E = new Array("과거", "과거", "과거", "과거", "현재완료-경험", "현재완료-경험", "현재완료-경험", "현재완료-완료", "현재완료-완료", "현재완료-완료", "현재완료-계속", "현재완료-계속", "현재완료-계속", "현재완료-결과", "현재완료-결과");
const TENSE_PAST_PERFECT_K = new Array("행동해왔었다", "더해왔었다", "조언해왔었다", "동의해왔었다", "대답해왔었다", "도착해왔었다", "물어왔었다", "구워왔었다", "이어왔었다", "되어왔었다", "시작해왔었다", "믿어왔었다", "물어왔었다", "막아왔었다", "빌려왔었다", "깨뜨려왔었다", "가져왔었다", "닦아왔었다", "만들어왔었다", "타왔었다", "사왔었다", "전화해왔었다", "보살펴왔었다", "휴대해왔었다", "잡아왔었다", "변경해왔었다", "확인해왔었다", "선택해왔었다", "올라왔었다", "모아왔었다", "되어왔었다", "축하해왔었다", "제어해왔었다", "요리해왔었다", "복사해왔었다", "덮어왔었다", "건너왔었다", "울어왔었다", "잘라왔었다", "춤춰왔었다", "결정해왔었다", "설계해왔었다", "죽어왔었다", "논의해왔었다", "나눠왔었다", "해왔었다", "그려왔었다", "꿈꿔왔었다", "마셔왔었다", "운전해왔었다", "떨어져왔었다", "먹어왔었다", "끝나왔었다", "즐겨왔었다", "입장해왔었다", "훈련해왔었다", "실패해왔었다", "떨어져왔었다", "느껴왔었다", "싸워왔었다", "채워왔었다", "찾아왔었다", "마쳐왔었다", "고쳐왔었다", "고정해왔었다", "날아왔었다", "집중해왔었다", "잊어왔었다", "형성해왔었다", "튀겨왔었다", "받아왔었다", "전해왔었다", "가왔었다", "성장해왔었다", "~라고 생각해왔었다", "안내해왔었다", "걸어왔었다", "싫어해왔었다", "가져왔었다", "도와왔었다", "쳐왔었다", "버텨왔었다", "잡아왔었다", "희망해왔었다", "사냥해왔었다", "빨리~해왔었다", "소개해왔었다", "초대해왔었다", "참여해왔었다", "유지해왔었다", "차왔었다", "죽여왔었다", "알아왔었다", "배워왔었다", "거짓말해왔었다", "좋아해왔었다", "들어왔었다", "살아왔었다", "보아왔었다", "사랑해왔었다", "만들어왔었다", "결혼해왔었다", "만나왔었다", "놓쳐왔었다", "움직여왔었다", "필요해왔었다", "열어왔었다", "그려왔었다", "통과해왔었다", "지불해왔었다", "선택왔었다", "계획해왔었다", "놀아왔었다", "인쇄해왔었다", "밀어왔었다", "넣어왔었다", "읽어왔었다", "기억해왔었다", "돌려줘왔었다", "달려왔었다", "절약해왔었다", "말해왔었다", "보아왔었다", "팔아왔었다", "보내왔었다", "놀라게 해왔었다", "보여줘왔었다", "노래해왔었다", "앉아왔었다", "자왔었다", "냄새를 맡아왔었다", "웃어왔었다", "말해왔었다", "세워왔었다", "시작해왔었다", "머물러왔었다", "멈춰왔었다", "공부해왔었다", "수영해왔었다", "걸려왔었다", "말해왔었다", "가르쳐왔었다", "말해왔었다", "말해왔었다", "생각해왔었다", "만져왔었다", "훈련해왔었다", "여행해왔었다", "노력해왔었다", "돌려왔었다", "이해해왔었다", "이용해왔었다", "방문해왔었다", "기다려왔었다", "깨왔었다", "걸어왔었다", "원해왔었다", "씻어왔었다", "관람왔었다", "입어왔었다", "환영해왔었다", "우승해왔었다", "바라왔었다", "일해왔었다", "걱정해왔었다", "쓰여왔었다", "울려왔었다", "가라앉아왔었다", "뿌려왔었다", "먹여왔었다", "쏘아왔었다", "이끌어왔었다", "기어왔었다", "쓸어왔었다", "울어왔었다", "떠나왔었다", "구부려왔었다", "빌려왔었다", "잃어왔었다", "소비해왔었다", "의미해왔었다", "찾아왔었다", "묶어왔었다", "감아왔었다", "두어왔었다", "들어왔었다", "미끄러져왔었다", "파왔었다", "빛나왔었다", "돌아왔었다", "때려왔었다", "때려왔었다", "깨왔었다", "낳아왔었다", "찢어왔었다", "감춰왔었다", "얼어왔었다", "훔쳐왔었다", "불어왔었다", "던져왔었다", "일어나왔었다", "타왔었다", "올라왔었다", "흔들어왔었다");
const TENSE_PAST_PERFECT_E = new Array();
const TENSE_FUTURE_PERFECT_K = new Array("행동해 갈 거다", "더해 갈 거다", "조언해 갈 거다", "동의해 갈 거다", "대답해 갈 거다", "도착해 갈 거다", "물어갈 거다", "구워갈 거다", "이어갈 거다", "되어갈 거다", "시작해 갈 거다", "믿어갈 거다", "물어갈 거다", "막아갈 거다", "빌려갈 거다", "깨뜨려갈 거다", "가져갈 거다", "닦아갈 거다", "만들어갈 거다", "타갈 거다", "사갈 거다", "전화해 갈 거다", "보살펴 갈 거다", "휴대해 갈 거다", "잡아갈 거다", "변경해 갈 거다", "확인해 갈 거다", "선택해 갈 거다", "올라갈 거다", "모아갈 거다", "되어갈 거다", "축하해 갈 거다", "제어해 갈 거다", "요리해 갈 거다", "복사해 갈 거다", "덮어갈 거다", "건너갈 거다", "울어갈 거다", "잘라갈 거다", "춤춰갈 거다", "결정해 갈 거다", "설계해 갈 거다", "죽어갈 거다", "논의해 갈 거다", "나눠갈 거다", "해 갈 거다", "그려갈 거다", "꿈꿔갈 거다", "마셔갈 거다", "운전해 갈 거다", "떨어져 갈 거다", "먹어갈 거다", "끝나갈 거다", "즐겨갈 거다", "입장해 갈 거다", "훈련해 갈 거다", "실패해 갈 거다", "떨어져갈 거다", "느껴갈 거다", "싸워갈 거다", "채워갈 거다", "찾아갈 거다", "마쳐갈 거다", "고쳐갈 거다", "고정해 갈 거다", "날아갈 거다", "집중해 갈 거다", "잊어갈 거다", "형성해 갈 거다", "튀겨갈 거다", "받아갈 거다", "전해갈 거다", "갈 거다", "성장해 갈 거다", "~라고 생각해 갈 거다", "안내해 갈 거다", "걸어갈 거다", "싫어해 갈 거다", "가져갈거다", "도와갈 거다", "쳐갈 거다", "버텨갈 거다", "잡아갈 거다", "희망해 갈 거다", "사냥해 갈 거다", "빨리 ~해 갈 거다", "소개해 갈 거다", "초대해 갈 거다", "참여해 갈 거다", "유지해 갈 거다", "차갈 거다", "죽여갈 거다", "알아갈 거다", "배워갈 거다", "거짓말해 갈 거다", "좋아해 갈 거다", "들어와갈 거다", "살아갈 거다", "보아갈 거다", "사랑해 갈 거다", "만들어갈 거다", "결혼해 갈 거다", "만나갈 거다", "놓쳐갈 거다", "움직여갈 거다", "필요해 갈 거다", "열어갈 거다", "그려갈 거다", "통과해 갈 거다", "지불해 갈 거다", "선택해 갈 거다", "계획해 갈 거다", "놀아갈 거다", "인쇄해 갈 거다", "밀어갈 거다", "넣어갈 거다", "읽어갈 거다", "기억해 갈 거다", "돌려줘 갈 거다", "달려갈 거다", "절약해 갈 거다", "말해 갈 거다", "보아갈 거다", "팔아갈 거다", "보내갈 거다", "놀라게 해 갈 거다", "보여줘 갈 거다", "노래해 갈 거다", "앉아갈 거다", "자 갈 거다", "냄새를 맡아갈 거다", "웃어 갈 거다", "말해 갈 거다", "세워 갈 거다", "시작해 갈 거다", "머물러 갈 거다", "멈춰갈 거다", "공부해 갈 거다", "수영해 갈 거다", "걸려갈 거다", "말해 갈 거다", "가르쳐갈 거다", "말해 갈 거다", "말해 갈 거다", "생각해 갈 거다", "만져갈 거다", "훈련해 갈 거다", "여행해 갈 거다", "노력해 갈 거다", "돌려갈 거다", "이해해 갈 거다", "이용해 갈 거다", "방문해 갈 거다", "기다려갈 거다", "깨갈 거다", "걸어갈 거다", "원해 갈 거다", "씻어갈 거다", "관람해 갈 거다", "입어갈 거다", "환영해 갈 거다", "우승해 갈 거다", "바라갈 거다", "일해 갈 거다", "걱정해 갈 거다", "쓰여갈 거다", "울려갈 거다", "가라앉아 갈 거다", "뿌려갈 거다", "먹여갈 거다", "쏘아갈 거다", "이끌어갈 거다", "기어갈 거다", "쓸어갈 거다", "울어갈 거다", "떠나갈 거다", "구부려갈 거다", "빌려갈 거다", "잃어갈 거다", "소비해 갈 거다", "의미해 갈 거다", "찾아갈 거다", "묶어갈 거다", "감아갈 거다", "두어갈 거다", "들어갈 거다", "미끄러져갈 거다", "파갈 거다", "빛나갈 거다", "돌아갈 거다", "때려갈 거다", "때려갈 거다", "깨갈 거다", "낳아갈 거다", "찢어갈 거다", "감춰갈 거다", "얼어갈 거다", "훔쳐갈 거다", "불어갈 거다", "던져갈 거다", "일어나갈 거다", "타갈 거다", "올라갈 거다");
const TENSE_FUTURE_PERFECT_E = new Array();
const TENSE_PAST_PERFECT_AND_FUTURE_PERFECT_K = new Array();
const TENSE_PAST_PERFECT_AND_FUTURE_PERFECT_E = new Array();
const PERFECT_CONTINUOUS_K = new Array("행동해오는", "더해오는", "조언해오는", "동의해오는", "답해오는", "도착해오는", "물어봐오는", "구워오는", "시작해오는", "물어뜯어오는", "막아오는", "빌려와오는", "깨뜨려오는", "가져와오는", "지어오는", "불태워오는", "사오는", "불러오는", "신경써오는", "옮겨오는", "바꿔오는", "검사해오는", "선택해오는", "올라오는", "모아오는", "와오는", "축하해오는", "제어해오는", "요리해오는", "복사해오는", "덮어오는", "건너와 오는", "울어오는", "잘라오는", "춤춰오는", "결정해오는", "디자인해오는", "죽어오는", "논의해오는", "그려오는", "꿈꿔오는", "마셔오는", "운전해오는", "떨어뜨려오는", "먹어오는", "끝내오는", "즐겨오는", "들어오는", "운동해오는", "실패해오는", "떨어져오는", "싸워오는", "채워오는", "완성해오는", "고쳐오는", "날아오는", "집중해오는", "형성해오는", "튀겨오는", "얻어오는", "줘오는", "가오는", "자라와 오는", "추측해오는", "안내해오는", "도와오는", "쳐오는", "잡어 오는", "사냥해오는", "서둘러오는", "소개해오는", "초대해오는", "참가해오는", "보관해오는", "차오는", "죽여 오는", "거짓말해오는", "들어오는", "살아오는", "만들어오는", "결혼해오는", "만나오는", "그리워해오는", "움직여오는", "열어오는", "지나와오는", "지불해오는", "골라내어오는", "계획해오는", "인쇄해오는", "놔두어오는", "읽어오는", "돌아와 오는", "달려오는", "저장해오는", "팔아오는", "보내오는", "놀라게 해오는", "보여줘 오는", "앉아와 오는", "자오는", "웃어오는", "말해오는", "서오는", "시작해오는", "머물러오는", "멈추어오는", "공부해오는", "수영해오는", "얘기해오는", "가르쳐오는", "말해오는", "감사해오는", "생각해오는", "만져오는", "훈련해오는", "여행해오는", "시도해오는", "방문해오는", "기다려오는", "걸어오는", "입어오는", "이겨오는", "일 해오는", "걱정해오는", "써오는", "울려오는", "먹이를 줘오는", "이끌어오는", "떠나오는", "구부려오는", "빌려줘 오는", "미끄러져오는", "파오는", "빛나오는", "찢어오는", "숨어오는", "얼어붙어오는", "훔쳐오는", "던져오는", "흔들어오는");
const PERFECT_CONTINUOUS_E = TENSE_CONTINUOUS_E;
const PERFECT_PAST_CONTINUOUS_K = PERFECT_CONTINUOUS_K;
const PERFECT_PAST_CONTINUOUS_E = new Array();

const AUXILIARY_ALL_K = new Array("할 수 있다", "일지도 모른다", "할 것이다", "하곤 했다", "하고 싶다", "해야한다", "하는 게 낫다", "차라리 하는 게 낫다", "하곤 했다", "했어야 했다", "했음에 틀림없다", "했을리가 없다", "했을지도 모른다", "할 수도 있었다");
const AUXILIARY_ALL_E = new Array("can", "may", "will, be going to", "would", "would like to", "must, have to, should, ought to", "had better", "would rather", "used to", "should have p.p.", "must have p.p.", "cannot have p.p.", "may have p.p.", "could have p.p.");
const AUXILIARY_FEATURE_K = new Array("조동사의 특징?");
const AUXILIARY_FEATURE_E = new Array("① 원형 불변, 동사 원형 \n ② 두 개 안 됨 \n ③ 조 not(부정문) 조 주(의문문) ");


const AUXILIARY_CAN_K = new Array("행동할 수 있다", "조언할 수 있다", "동의할 수 있다", "도착할 수 있다", "물어볼 수 있다", "구울 수 있다", "시작할 수 있다", "믿을 수 있다", "깨뜨릴 수 있다", "탈 수 있다", "보살필 수 있다", "바꿀 수 있다", "확인할 수 있다", "선택할 수 있다", "오를 수 있다", "올 수 있다", "요리할 수 있다", "복사할 수 있다", "건널 수 있다", "울 수 있다", "자를 수 있다", "춤출 수 있다", "결정할 수 있다", "죽을 수 있다", "할 수 있다", "그릴 수 있다", "꿈꿀 수 있다", "마실 수 있다", "운전할 수 있다", "떨어뜨릴 수 있다", "먹을 수 있다", "끝날 수 있다", "들어갈 수 있다", "운동할 수 있다", "실패할 수 있다", "떨어질 수 있다", "느낄 수 있다", "싸울 수 있다", "마칠 수 있다", "고정할 수 있다", "날 수 있다", "집중할 수 있다", "잊을 수 있다", "형성할 수 있다", "튀길 수 있다", "갈 수 있다", "자랄 수 있다", "추측할 수 있다", "걸 수 있다", "도울 수 있다", "칠 수 있다", "잡을 수 있다", "희망할 수 있다", "서두를 수 있다", "참여할 수 있다", "계속할 수 있다", "찰 수 있다", "알 수 있다", "거짓말 할 수 있다", "들을 수 있다", "살 수 있다", "볼 수 있다", "사랑할 수 있다", "움직일 수 있다", "열 수 있다", "통과할 수 있다", "지불할 수 있다", "놀 수 있다", "밀 수 있다", "읽을 수 있다", "돌아갈 수 있다", "달릴 수 있다", "노래할 수 있다", "앉을 수 있다", "잘 수 있다", "냄새날 수 있다", "미소지을 수 있다", "말할 수 있다", "일어설 수 있다", "시작할 수 있다", "머무를 수 있다", "멈출 수 있다", "수영할 수 있다", "말할 수 있다", "이야기할 수 있다", "여행할 수 있다", "노력할 수 있다", "돌릴 수 있다", "방문할 수 있다", "기다릴 수 있다", "깰 수 있다", "걸을 수 있다", "씻을 수 있다", "입을 수 있다", "이길 수 있다", "바랄 수 있다", "일할 수 있다", "걱정할 수 있다", "쓸 수 있다", "울릴 수 있다", "가라앉을 수 있다", "먹일 수 있다", "쏠 수 있다", "이끌 수 있다", "기어갈 수 있다", "바닥을 쓸 수 있다", "울 수 있다", "떠날 수 있다", "구부릴 수 있다", "잃을 수 있다", "감을 수 있다", "미끄러질 수 있다", "팔 수 있다", "빛날 수 있다", "돌 수 있다", "때릴 수 있다", "깨울 수 있다", "낳을 수 있다", "찢을 수 있다", "얼 수 있다", "훔칠 수 있다", "불 수 있다", "던질 수 있다", "탈 수 있다", "오를 수 있다", "흔들 수 있다");
const AUXILIARY_MAY_K = new Array("행동할지도 모른다", "조언할지도 모른다", "동의할지도 모른다", "도착할지도 모른다", "물어볼 지도 모른다", "구울 지도 모른다", "시작할지도 모른다", "믿을 지도 모른다", "깨뜨릴 지도 모른다", "탈 지도 모른다", "보살필 지도 모른다", "바꿀 지도 모른다", "확인할지도 모른다", "선택할지도 모른다", "오를지도 모른다", "올지도 모른다", "요리할지도 모른다", "복사할지도 모른다", "건널지도 모른다", "울지도 모른다", "자를지도 모른다", "춤출지도 모른다", "결정할지도 모른다", "죽을지도 모른다", "할지도 모른다", "그릴지도 모른다", "꿈꿀지도 모른다", "마실지도 모른다", "운전할지도 모른다", "떨어뜨릴지도 모른다", "먹을지도 모른다", "끝날지도 모른다", "들어갈지도 모른다", "운동할지도 모른다", "실패할지도 모른다", "떨어질지도 모른다", "느낄지도 모른다", "싸울지도 모른다", "마칠지도 모른다", "고정할지도 모른다", "날지도 모른다", "집중할지도 모른다", "잊을지도 모른다", "형성할지도 모른다", "튀길지도 모른다", "갈지도 모른다", "자랄지도 모른다", "추측할지도 모른다", "걸지도 모른다", "도울지도 모른다", "칠지도 모른다", "잡을 지도 모른다", "희망할지도 모른다", "서두를 지도 모른다", "참여할지도 모른다", "계속할지도 모른다", "찰 지도 모른다", "알 지도 모른다", "거짓말 할지도 모른다", "들을 지도 모른다", "살 지도 모른다", "볼 지도 모른다", "사랑할지도 모른다", "움직일 지도 모른다", "열 지도 모른다", "통과할지도 모른다", "지불할지도 모른다", "놀 지도 모른다", "밀지도 모른다", "읽을 지도 모른다", "돌아갈 지도 모른다", "달릴 지도 모른다", "노래할지도 모른다", "앉을 지도 모른다", "잘 지도 모른다", "냄새날 지도 모른다", "미소질 지도 모른다", "말할지도 모른다", "일어설 지도 모른다", "시작할지도 모른다", "머무를 지도 모른다", "멈출 지도 모른다", "수영할지도 모른다", "말할지도 모른다", "이야기할지도 모른다", "여행할지도 모른다", "노력할지도 모른다", "돌릴 지도 모른다", "방문할지도 모른다", "기어갈지도 모른다", "깰 지도 모른다", "걸을 지도 모른다", "씻을 지도 모른다", "입을 지도 모른다", "이길 지도 모른다", "바랄 지도 모른다", "일할지도 모른다", "걱정할지도 모른다", "쓸지도 모른다", "울릴지도 모른다", "가라앉을지도 모른다", "먹일지도 모른다", "쏠지도 모른다", "이끌 지도 모른다", "기다릴지도 모른다", "바닥을 쓸지도 모른다", "울지도 모른다", "떠날지도 모른다", "구부릴지도 모른다", "잃을지도 모른다", "감을지도 모른다", "미끄러질지도 모른다", "팔지도 모른다", "빛날지도 모른다", "돌 지도 모른다", "때릴지도 모른다", "깨울지도 모른다", "낳을지도 모른다", "찢을지도 모른다", "얼지도 모른다", "훔칠지도 모른다", "불지도 모른다", "던질지도 모른다", "탈지도 모른다", "오를지도 모른다", "흔들지도 모른다");
const AUXILIARY_WILL_K = new Array("행동할 것이다", "조언할 것이다", "동의할 것이다", "도착할 것이다", "물어볼 것이다", "구울 것이다", "시작할 것이다", "믿을 것이다", "깨뜨릴 것이다", "탈 것이다", "보살필 것이다", "바꿀 것이다", "확인할 것이다", "선택할 것이다", "오를 것이다", "올 것이다", "요리할 것이다", "복사할 것이다", "건널 것이다", "울 것이다", "자를 것이다", "춤출 것이다", "결정할 것이다", "죽을 것이다", "할 것이다", "그릴 것이다", "꿈꿀 것이다", "마실 것이다", "운전할 것이다", "떨어뜨릴 것이다", "먹을 것이다", "끝날 것이다", "들어갈 것이다", "운동할 것이다", "실패할 것이다", "떨어질 것이다", "느낄 것이다", "싸울 것이다", "마칠 것이다", "고정할 것이다", "날 것이다", "집중할 것이다", "잊을 것이다", "형성할 것이다", "튀길 것이다", "갈 것이다", "자랄 것이다", "추측할 것이다", "걸 것이다", "도울 것이다", "칠 것이다", "잡을 것이다", "희망할 것이다", "서두를 것이다", "참여할 것이다", "계속할 것이다", "찰 것이다", "알 것이다", "거짓말 할 것이다", "들을 것이다", "살 것이다", "볼 것이다", "사랑할 것이다", "움직일 것이다", "열 것이다", "통과할 것이다", "지불할 것이다", "놀 것이다", "밀 것이다", "읽을 것이다", "돌아갈 것이다", "달릴 것이다", "노래할 것이다", "앉을 것이다", "잘 것이다", "냄새날 것이다", "미소지을 것이다", "말할 것이다", "일어설 것이다", "시작할 것이다", "머무를 것이다", "멈출 것이다", "수영할 것이다", "말할 것이다", "이야기할 것이다", "여행할 것이다", "노력할 것이다", "돌릴 것이다", "방문할 것이다", "기다릴 것이다", "깰 것이다", "걸을 것이다", "씻을 것이다", "입을 것이다", "이길 것이다", "바랄 것이다", "일할 것이다", "걱정할 것이다", "쓸 것이다", "울릴 것이다", "가라앉을 것이다", "먹일 것이다", "쏠 것이다", "이끌 것이다", "기어갈 것이다", "바닥을 쓸 것이다", "울 것이다", "떠날 것이다", "구부릴 것이다", "잃을 것이다", "감을 것이다", "미끄러질 것이다", "팔 것이다", "빛날 것이다", "돌 것이다", "때릴 것이다", "깨울 것이다", "낳을 것이다", "찢을 것이다", "얼 것이다", "훔칠 것이다", "불 것이다", "던질 것이다", "탈 것이다", "오를 것이다", "흔들 것이다");
const AUXILIARY_BeGoingTo_K = AUXILIARY_WILL_K
const AUXILIARY_WOULD_K = new Array("행동하곤 했다", "더하곤 했다", "조언하곤 했다", "동의하곤 했다", "대답하곤 했다", "도착하곤 했다", "물어보곤 했다", "굽곤 했다", "이곤 했다", "되곤 했다", "시작하곤 했다", "믿곤 했다", "물곤 했다", "막곤 했다", "빌리곤 했다", "깨뜨리곤 했다", "가져오곤 했다", "닦곤 했다", "만들곤 했다", "타곤 했다", "사오곤 했다", "전화하곤 했다", "보살피곤 했다", "휴대하곤 했다", "잡곤 했다", "변경하곤 했다", "확인하곤 했다", "선택하곤 했다", "오르곤 했다", "모으곤 했다", "되곤 했다", "축하하곤 했다", "제어하곤 했다", "요리하곤 했다", "복사하곤 했다", "덮곤 했다", "건너곤 했다", "오르곤 했다", "자르곤 했다", "춤추곤 했다", "결정하곤 했다", "설계하곤 했다", "죽곤 했다", "논의하곤 했다", "나누곤 했다", "하곤 했다", "그리곤 했다", "꿈꾸곤 했다", "마시곤 했다", "운전하곤 했다", "떨어지곤 했다", "먹곤 했다", "끝내곤 했다", "즐기곤 했다", "입장하곤 했다", "훈련하곤 했다", "실패하곤 했다", "떨어지곤 했다", "느끼곤 했다", "싸우곤 했다", "채우곤 했다", "찾곤 했다", "마치곤 했다", "고치곤 했다", "고정하곤 했다", "날곤 했다", "집중하곤 했다", "잊곤 했다", "형성해오곤 했다", "튀기곤 했다", "받곤 했다", "전하곤 했다", "가곤 했다", "성장하곤 했다", "~라고 생각하곤 했다", "안내하곤 했다", "걸곤 했다", "싫어하곤 했다", "가지곤 했다", "돕곤 했다", "치곤 했다", "버티곤 했다", "잡곤 했다", "희망하곤 했다", "사냥하곤 했다", "빨리 ~하곤 했다", "소개하곤 했다", "초대하곤 했다", "참여하곤 했다", "유지하곤 했다", "차곤 했다", "죽이곤 했다", "알곤 했다", "배우곤 했다", "거짓말하곤 했다", "좋아하곤 했다", "듣곤 했다", "살곤 했다", "보곤 했다", "사랑하곤 했다", "만들곤 했다", "결혼하곤 했다", "만나곤 했다", "놓곤 했다", "움직이곤 했다", "필요하곤 했다", "열곤 했다", "그리곤 했다", "통과하곤 했다", "지불하곤 했다", "선택하곤 했다", "계획하곤 했다", "놀곤 했다", "인쇄하곤 했다", "밀곤 했다", "넣곤 했다", "읽곤 했다", "기억하곤 했다", "돌아오곤 했다", "달리곤 했다", "절약하곤 했다", "말하곤 했다", "보곤 했다", "팔곤 했다", "보내곤 했다", "놀라게하곤 했다", "보여주곤 했다", "노래하곤 했다", "앉곤 했다", "자곤 했다", "냄새를 맡곤 했다", "웃곤 했다", "말하곤 했다", "세우곤 했다", "시작하곤 했다", "머무르곤 했다", "멈추곤 했다", "공부하곤 했다", "수영하곤 했다", "걸려오곤 했다", "말하곤 했다", "가르치곤 했다", "말하곤 했다", "말하곤 했다", "생각하곤 했다", "만지곤 했다", "훈련하곤 했다", "여행하곤 했다", "노력하곤 했다", "돌리곤 했다", "이해하곤 했다", "이용하곤 했다", "방문하곤 했다", "기다리곤 했다", "깨곤 했다", "걷곤 했다", "원하곤 했다", "씻곤 했다", "관람하곤 했다", "입곤 했다", "환영하곤 했다", "우승하곤 했다", "바라곤 했다", "일하곤 했다", "걱정하곤 했다", "쓰곤 했다", "울려오곤 했다", "가라앉곤 했다", "뿌리곤 했다", "먹이곤 했다", "쏘아오곤 했다", "이끌곤 했다", "기곤 했다", "쓸곤 했다", "울곤 했다", "떠나오곤 했다", "구부리곤 했다", "빌리곤 했다", "잃곤 했다", "소비하곤 했다", "의미하곤 했다", "찾곤 했다", "묶곤 했다", "감곤 했다", "두곤 했다", "듣곤 했다", "미끄러지곤 했다", "파곤 했다", "빛나곤 했다", "돌곤 했다", "때리곤 했다", "때리곤 했다", "깨우곤 했다", "낳곤 했다", "찢곤 했다", "감추곤 했다", "얼곤 했다", "훔치곤 했다", "불곤 했다", "던져오곤 했다", "일어나곤 했다", "타오곤 했다", "오르곤 했다", "흔들곤 했다");
const AUXILIARY_WOULD_LIKE_TO_K = new Array("행동하고 싶다", "더하고 싶다", "조언하고 싶다", "동의하고 싶다", "대답하고 싶다", "도착하고 싶다", "물어보고 싶다", "굽고 싶다", "이고 싶다", "되고 싶다", "시작하고 싶다", "믿고 싶다", "물고 싶다", "막고 싶다", "빌리고 싶다", "깨뜨리고 싶다", "가져오고 싶다", "닦고 싶다", "만들고 싶다", "타고 싶다", "사고 싶다", "전화하고 싶다", "보살피고 싶다", "휴대하고 싶다", "잡고 싶다", "변경하고 싶다", "확인하고 싶다", "선택하고 싶다", "오르고 싶다", "모으고 싶다", "되고 싶다", "축하하고 싶다", "제어하고 싶다", "요리하고 싶다", "복사하고 싶다", "덮고 싶다", "건너고 싶다", "오르고 싶다", "자르고 싶다", "춤추고 싶다", "결정하고 싶다", "설계하고 싶다", "죽고 싶다", "논의하고 싶다", "나누고 싶다", "하고 싶다", "그리고 싶다", "꿈꾸고 싶다", "마시고 싶다", "운전하고 싶다", "떨어지고 싶다", "먹고 싶다", "끝내고 싶다", "즐기고 싶다", "입장하고 싶다", "훈련하고 싶다", "실패하고 싶다", "떨어지고 싶다", "느끼고 싶다", "싸우고 싶다", "채우고 싶다", "찾고 싶다", "미치고 싶다", "고치고 싶다", "고정하고 싶다", "날고 싶다", "집중하고 싶다", "잊고 싶다", "형성하고 싶다", "튀기고 싶다", "받고 싶다", "전하고 싶다", "가고 싶다", "성장하고 싶다", "~라고 생각하고 싶다", "안내하고 싶다", "걸고 싶다", "싫어하고 싶다", "가지고 싶다", "돕고 싶다", "치고 싶다", "버티고 싶다", "잡고 싶다", "희망하고 싶다", "사냥하고 싶다", "빨리 ~하고 싶다", "소개하고 싶다", "초대하고 싶다", "참여하고 싶다", "유지하고 싶다", "치고 싶다", "죽이고 싶다", "알고 싶다", "배우고 싶다", "거짓말하고 싶다", "좋아하고 싶다", "듣고 싶다", "살고 싶다", "보고 싶다", "사랑하고 싶다", "만들고 싶다", "결혼하고 싶다", "만나고 싶다", "놓고 싶다", "움직이고 싶다", "필요하고 싶다", "열고 싶다", "그리고 싶다", "통과하고 싶다", "지불하고 싶다", "선택하고 싶다", "계획하고 싶다", "놀고 싶다", "인쇄하고 싶다", "밀고 싶다", "넣고 싶다", "읽고 싶다", "기억하고 싶다", "돌아가고 싶다", "달리고 싶다", "절약하고 싶다", "말하고 싶다", "보고 싶다", "팔고 싶다", "보내고 싶다", "놀라게하고 싶다", "보여주고 싶다", "노래하고 싶다", "앉고 싶다", "자고 싶다", "냄새를 맡고 싶다", "웃고 싶다", "말하고 싶다", "세우고 싶다", "시작하고 싶다", "머무르고 싶다", "멈추고 싶다", "공부하고 싶다", "수영하고 싶다", "걸리고 싶다", "말하고 싶다", "가르치고 싶다", "말하고 싶다", "말하고 싶다", "생각하고 싶다", "만지고 싶다", "훈련하고 싶다", "여행하고 싶다", "노력하고 싶다", "돌리고 싶다", "이해하고 싶다", "이용하고 싶다", "방문하고 싶다", "기다리고 싶다", "깨고 싶다", "걷고 싶다", "원하고 싶다", "씻고 싶다", "관람하고 싶다", "입고 싶다", "환영하고 싶다", "우승하고 싶다", "바라고 싶다", "일하고 싶다", "걱정하고 싶다", "쓰이고 싶다", "울려오고 싶다", "가라앉고 싶다", "뿌리고 싶다", "먹이고 싶다", "쏘고 싶다", "이끌고 싶다", "기고 싶다", "쓸고 싶다", "울고 싶다", "떠나오고 싶다", "구부리고 싶다", "빌리고 싶다", "잃고 싶다", "소비하고 싶다", "의미하고 싶다", "찾고 싶다", "묶고 싶다", "감고 싶다", "두고 싶다", "듣고 싶다", "미끄러지고 싶다", "파고 싶다", "빛나고 싶다", "돌고 싶다", "때리고 싶다", "때리고 싶다", "깨우고 싶다", "낳고 싶다", "찢고 싶다", "감추고 싶다", "얼고 싶다", "훔치고 싶다", "불고 싶다", "던지고 싶다", "일어나고 싶다", "타고 싶다", "오르고 싶다", "흔들고 싶다");
const AUXILIARY_MUST_K = new Array("행동해야 한다", "조언해야 한다", "동의해야 한다", "도착해야 한다", "물어봐야 한다", "구워야 한다", "시작해야 한다", "믿어야 한다", "깨뜨려야 한다", "태워야 한다", "보살펴야 한다", "바꿔야 한다", "확인해야 한다", "선택해야 한다", "올라야 한다", "와야 한다", "요리해야 한다", "복사해야 한다", "건너야 한다", "울어야 한다", "잘라야 한다", "춤춰야 한다", "결정해야 한다", "죽어야 한다", "해야 한다", "그려야 한다", "꿈꿔야 한다", "마셔야 한다", "운전해야 한다", "떨어져야 한다", "먹어야 한다", "끝나야 한다", "들어가야 한다", "운동해야 한다", "실패해야 한다", "떨어져야 한다", "느껴야 한다", "싸워야 한다", "마쳐야 한다", "고정해야 한다", "날아야 한다", "집중해야 한다", "잊어야 한다", "형성해야 한다", "튀겨야 한다", "가야 한다", "자라야 한다", "추측해야 한다", "걸어야 한다", "도와야 한다", "쳐야 한다", "잡아야 한다", "희망해야 한다", "서둘러야 한다", "참여해야 한다", "계속해야 한다", "차야 한다", "알아야 한다", "거짓말해야 한다", "들어야 한다", "살아야 한다", "봐야 한다", "사랑해야 한다", "움직여야 한다", "열어야 한다", "통과해야 한다", "지불해야 한다", "놀아야 한다", "밀어야 한다", "읽어야 한다", "돌아가야 한다", "달려야 한다", "노래해야 한다", "앉아야 한다", "자야 한다", "냄새맡아야 한다", "미소지어야 한다", "말해야 한다", "일어서야 한다", "시작해야 한다", "머물러야 한다", "멈춰야 한다", "수영해야 한다", "말해야 한다", "이야기해야 한다", "여행해야 한다", "노력해야 한다", "돌려야 한다", "방문해야 한다", "기다려야 한다", "깨야 한다", "걸어야 한다", "씻어야 한다", "입어야 한다", "이겨야 한다", "바라야 한다", "일해야 한다", "걱정해야 한다", "써야 한다", "울려야 한다", "가라앉아야 한다", "먹여야 한다", "쏘아야 한다", "이끌어야 한다", "기어야 한다", "쓸어야 한다", "울어야 한다", "떠나야 한다", "구부려야 한다", "잃어야 한다", "감아야 한다", "미끄러져야 한다", "파야 한다", "빛나야 한다", "돌려야 한다", "때려야 한다", "깨우쳐야 한다", "낳아야 한다", "찢어야 한다", "얼려야 한다", "훔쳐야 한다", "불어야 한다", "던져야 한다", "타야 한다", "올라야 한다", "흔들어야 한다");
const AUXILIARY_HaveTo_K = new Array("행동해야 한다", "조언해야 한다", "동의해야 한다", "도착해야 한다", "물어봐야 한다", "구워야 한다", "시작해야 한다", "믿어야 한다", "깨뜨려야 한다", "태워야 한다", "보살펴야 한다", "바꿔야 한다", "확인해야 한다", "선택해야 한다", "올라야 한다", "와야 한다", "요리해야 한다", "복사해야 한다", "건너야 한다", "울어야 한다", "잘라야 한다", "춤춰야 한다", "결정해야 한다", "죽어야 한다", "해야 한다", "그려야 한다", "꿈꿔야 한다", "마셔야 한다", "운전해야 한다", "떨어져야 한다", "먹어야 한다", "끝나야 한다", "들어가야 한다", "운동해야 한다", "실패해야 한다", "떨어져야 한다", "느껴야 한다", "싸워야 한다", "마쳐야 한다", "고정해야 한다", "날아야 한다", "집중해야 한다", "잊어야 한다", "형성해야 한다", "튀겨야 한다", "가야 한다", "자라야 한다", "추측해야 한다", "걸어야 한다", "도와야 한다", "쳐야 한다", "잡아야 한다", "희망해야 한다", "서둘러야 한다", "참여해야 한다", "계속해야 한다", "차야 한다", "알아야 한다", "거짓말해야 한다", "들어야 한다", "살아야 한다", "봐야 한다", "사랑해야 한다", "움직여야 한다", "열어야 한다", "통과해야 한다", "지불해야 한다", "놀아야 한다", "밀어야 한다", "읽어야 한다", "돌아가야 한다", "달려야 한다", "노래해야 한다", "앉아야 한다", "자야 한다", "냄새맡아야 한다", "미소지어야 한다", "말해야 한다", "일어서야 한다", "시작해야 한다", "머물러야 한다", "멈춰야 한다", "수영해야 한다", "말해야 한다", "이야기해야 한다", "여행해야 한다", "노력해야 한다", "돌려야 한다", "방문해야 한다", "기다려야 한다", "깨야 한다", "걸어야 한다", "씻어야 한다", "입어야 한다", "이겨야 한다", "바라야 한다", "일해야 한다", "걱정해야 한다", "써야 한다", "울려야 한다", "가라앉아야 한다", "먹여야 한다", "쏘아야 한다", "이끌어야 한다", "기어야 한다", "쓸어야 한다", "울어야 한다", "떠나야 한다", "구부려야 한다", "잃어야 한다", "감아야 한다", "미끄러져야 한다", "파야 한다", "빛나야 한다", "돌려야 한다", "때려야 한다", "깨우쳐야 한다", "낳아야 한다", "찢어야 한다", "얼려야 한다", "훔쳐야 한다", "불어야 한다", "던져야 한다", "타야 한다", "올라야 한다", "흔들어야 한다");
const AUXILIARY_SHOULD_K = new Array("행동해야 한다", "조언해야 한다", "동의해야 한다", "도착해야 한다", "물어봐야 한다", "구워야 한다", "시작해야 한다", "믿어야 한다", "깨뜨려야 한다", "태워야 한다", "보살펴야 한다", "바꿔야 한다", "확인해야 한다", "선택해야 한다", "올라야 한다", "와야 한다", "요리해야 한다", "복사해야 한다", "건너야 한다", "울어야 한다", "잘라야 한다", "춤춰야 한다", "결정해야 한다", "죽어야 한다", "해야 한다", "그려야 한다", "꿈꿔야 한다", "마셔야 한다", "운전해야 한다", "떨어져야 한다", "먹어야 한다", "끝나야 한다", "들어가야 한다", "운동해야 한다", "실패해야 한다", "떨어져야 한다", "느껴야 한다", "싸워야 한다", "마쳐야 한다", "고정해야 한다", "날아야 한다", "집중해야 한다", "잊어야 한다", "형성해야 한다", "튀겨야 한다", "가야 한다", "자라야 한다", "추측해야 한다", "걸어야 한다", "도와야 한다", "쳐야 한다", "잡아야 한다", "희망해야 한다", "서둘러야 한다", "참여해야 한다", "계속해야 한다", "차야 한다", "알아야 한다", "거짓말해야 한다", "들어야 한다", "살아야 한다", "봐야 한다", "사랑해야 한다", "움직여야 한다", "열어야 한다", "통과해야 한다", "지불해야 한다", "놀아야 한다", "밀어야 한다", "읽어야 한다", "돌아가야 한다", "달려야 한다", "노래해야 한다", "앉아야 한다", "자야 한다", "냄새맡아야 한다", "미소지어야 한다", "말해야 한다", "일어서야 한다", "시작해야 한다", "머물러야 한다", "멈춰야 한다", "수영해야 한다", "말해야 한다", "이야기해야 한다", "여행해야 한다", "노력해야 한다", "돌려야 한다", "방문해야 한다", "기다려야 한다", "깨야 한다", "걸어야 한다", "씻어야 한다", "입어야 한다", "이겨야 한다", "바라야 한다", "일해야 한다", "걱정해야 한다", "써야 한다", "울려야 한다", "가라앉아야 한다", "먹여야 한다", "쏘아야 한다", "이끌어야 한다", "기어야 한다", "쓸어야 한다", "울어야 한다", "떠나야 한다", "구부려야 한다", "잃어야 한다", "감아야 한다", "미끄러져야 한다", "파야 한다", "빛나야 한다", "돌려야 한다", "때려야 한다", "깨우쳐야 한다", "낳아야 한다", "찢어야 한다", "얼려야 한다", "훔쳐야 한다", "불어야 한다", "던져야 한다", "타야 한다", "올라야 한다", "흔들어야 한다");
const AUXILIARY_OughtTo_K = new Array("행동해야 한다", "조언해야 한다", "동의해야 한다", "도착해야 한다", "물어봐야 한다", "구워야 한다", "시작해야 한다", "믿어야 한다", "깨뜨려야 한다", "태워야 한다", "보살펴야 한다", "바꿔야 한다", "확인해야 한다", "선택해야 한다", "올라야 한다", "와야 한다", "요리해야 한다", "복사해야 한다", "건너야 한다", "울어야 한다", "잘라야 한다", "춤춰야 한다", "결정해야 한다", "죽어야 한다", "해야 한다", "그려야 한다", "꿈꿔야 한다", "마셔야 한다", "운전해야 한다", "떨어져야 한다", "먹어야 한다", "끝나야 한다", "들어가야 한다", "운동해야 한다", "실패해야 한다", "떨어져야 한다", "느껴야 한다", "싸워야 한다", "마쳐야 한다", "고정해야 한다", "날아야 한다", "집중해야 한다", "잊어야 한다", "형성해야 한다", "튀겨야 한다", "가야 한다", "자라야 한다", "추측해야 한다", "걸어야 한다", "도와야 한다", "쳐야 한다", "잡아야 한다", "희망해야 한다", "서둘러야 한다", "참여해야 한다", "계속해야 한다", "차야 한다", "알아야 한다", "거짓말해야 한다", "들어야 한다", "살아야 한다", "봐야 한다", "사랑해야 한다", "움직여야 한다", "열어야 한다", "통과해야 한다", "지불해야 한다", "놀아야 한다", "밀어야 한다", "읽어야 한다", "돌아가야 한다", "달려야 한다", "노래해야 한다", "앉아야 한다", "자야 한다", "냄새맡아야 한다", "미소지어야 한다", "말해야 한다", "일어서야 한다", "시작해야 한다", "머물러야 한다", "멈춰야 한다", "수영해야 한다", "말해야 한다", "이야기해야 한다", "여행해야 한다", "노력해야 한다", "돌려야 한다", "방문해야 한다", "기다려야 한다", "깨야 한다", "걸어야 한다", "씻어야 한다", "입어야 한다", "이겨야 한다", "바라야 한다", "일해야 한다", "걱정해야 한다", "써야 한다", "울려야 한다", "가라앉아야 한다", "먹여야 한다", "쏘아야 한다", "이끌어야 한다", "기어야 한다", "쓸어야 한다", "울어야 한다", "떠나야 한다", "구부려야 한다", "잃어야 한다", "감아야 한다", "미끄러져야 한다", "파야 한다", "빛나야 한다", "돌려야 한다", "때려야 한다", "깨우쳐야 한다", "낳아야 한다", "찢어야 한다", "얼려야 한다", "훔쳐야 한다", "불어야 한다", "던져야 한다", "타야 한다", "올라야 한다", "흔들어야 한다");
const AUXILIARY_HAD_BETTER_K = new Array("행동하는 게 낫다", "더하는 게 낫다", "조언하는 게 낫다", "동의하는 게 낫다", "대답하는 게 낫다", "도착하는 게 낫다", "물어보는 게 낫다", "굽는 게 낫다", "~인 게 낫다", "되는 게 낫다", "시작하는 게 낫다", "믿는 게 낫다", "무는 게 낫다", "막는 게 낫다", "빌리는 게 낫다", "깨뜨리는 게 낫다", "가져오는 게 낫다", "닦는 게 낫다", "만드는 게 낫다", "타는 게 낫다", "사는 게 낫다", "전화하는 게 낫다", "보살피는 게 낫다", "휴대하는 게 낫다", "잡는 게 낫다", "변경하는 게 낫다", "확인하는 게 낫다", "선택하는 게 낫다", "오르는 게 낫다", "모으는 게 낫다", "되는 게 낫다", "축하하는 게 낫다", "제어하는 게 낫다", "요리하는 게 낫다", "복사하는 게 낫다", "덮는 게 낫다", "건너는 게 낫다", "오르는 게 낫다", "자르는 게 낫다", "춤추는 게 낫다", "결정하는 게 낫다", "설계하는 게 낫다", "죽는 게 낫다", "논의하는 게 낫다", "나누는 게 낫다", "하는 게 낫다", "그리는 게 낫다", "꿈꾸는 게 낫다", "마시는 게 낫다", "운전하는 게 낫다", "떨어지는 게 낫다", "먹는 게 낫다", "끝내는 게 낫다", "즐기는 게 낫다", "입장하는 게 낫다", "훈련하는 게 낫다", "실패하는 게 낫다", "떨어지는 게 낫다", "느끼는 게 낫다", "싸우는 게 낫다", "채우는 게 낫다", "찾는 게 낫다", "마치는 게 낫다", "고치는 게 낫다", "고정하는 게 낫다", "나는 게 낫다", "집중하는 게 낫다", "잊는 게 낫다", "형성하는 게 낫다", "튀기는 게 낫다", "받는 게 낫다", "전하는 게 낫다", "가는 게 낫다", "성장하는 게 낫다", "~라고 생각하는 게 낫다", "안내하는 게 낫다", "거는 게 낫다", "싫어하는 게 낫다", "가지는 게 낫다", "돕는 게 낫다", "치는 게 낫다", "버티는 게 낫다", "잡는 게 낫다", "희망하는 게 낫다", "사냥하는 게 낫다", "빨리 ~하는 게 낫다", "소개하는 게 낫다", "초대하는 게 낫다", "참여하는 게 낫다", "유지하는 게 낫다", "치는 게 낫다", "죽이는 게 낫다", "아는 게 낫다", "배우는 게 낫다", "거짓말하는 게 낫다", "좋아하는 게 낫다", "듣는 게 낫다", "사는 게 낫다", "보는 게 낫다", "사랑하는 게 낫다", "만드는 게 낫다", "결혼하는 게 낫다", "만나는 게 낫다", "놓는 게 낫다", "움직이는 게 낫다", "필요하는 게 낫다", "여는 게 낫다", "그리는 게 낫다", "통과하는 게 낫다", "지불하는 게 낫다", "선택하는 게 낫다", "계획하는 게 낫다", "노는 게 낫다", "인쇄하는 게 낫다", "미는 게 낫다", "하는 게 낫다", "읽는 게 낫다", "기억하는 게 낫다", "돌아가는 게 낫다", "달리는 게 낫다", "절약하는 게 낫다", "말하는 게 낫다", "보는 게 낫다", "파는 게 낫다", "보내는 게 낫다", "놀라는 게 낫다", "보여주는 게 낫다", "노래하는 게 낫다", "앉는 게 낫다", "자는 게 낫다", "냄새맡는 게 낫다", "웃는 게 낫다", "말하는 게 낫다", "세우는 게 낫다", "시작하는 게 낫다", "머무르는 게 낫다", "멈추는 게 낫다", "공부하는 게 낫다", "수영하는 게 낫다", "걸리는 게 낫다", "말하는 게 낫다", "가르치는 게 낫다", "말하는 게 낫다", "말하는 게 낫다", "생각하는 게 낫다", "만지는 게 낫다", "훈련하는 게 낫다", "여행하는 게 낫다", "노력하는 게 낫다", "돌리는 게 낫다", "이해하는 게 낫다", "이용하는 게 낫다", "방문하는 게 낫다", "기다리는 게 낫다", "깨는 게 낫다", "걷는 게 낫다", "원하는 게 낫다", "씻는 게 낫다", "관람하는 게 낫다", "입는 게 낫다", "환영하는 게 낫다", "우승하는 게 낫다", "바라는 게 낫다", "일하는 게 낫다", "걱정하는 게 낫다", "쓰이는 게 낫다", "울려오는 게 낫다", "가라앉는 게 낫다", "뿌리는 게 낫다", "먹이는 게 낫다", "쏘는 게 낫다", "이끄는 게 낫다", "기는 게 낫다", "쓰는 게 낫다", "우는 게 낫다", "떠나는 게 낫다", "구부리는 게 낫다", "빌리는 게 낫다", "잃는 게 낫다", "소비하는 게 낫다", "의미하는 게 낫다", "찾는 게 낫다", "묶는 게 낫다", "감는 게 낫다", "두는 게 낫다", "듣는 게 낫다", "미끄러지는 게 낫다", "파는 게 낫다", "빛나는 게 낫다", "도는 게 낫다", "때리는 게 낫다", "때리는 게 낫다", "깨우는 게 낫다", "낳는 게 낫다", "찢는 게 낫다", "감추는 게 낫다", "어는 게 낫다", "훔치는 게 낫다", "부는 게 낫다", "던지는 게 낫다", "일어나는 게 낫다", "타는 게 낫다", "오르는 게 낫다", "흔드는 게 낫다");
const AUXILIARY_WOULD_RATHER_K = new Array("차라리 행동하는 게 낫다", "차라리 더하는 게 낫다", "차라리 조언하는 게 낫다", "차라리 동의하는 게 낫다", "차라리 대답하는 게 낫다", "차라리 도착하는 게 낫다", "차라리 물어보는 게 낫다", "차라리 굽는 게 낫다", "차라리 ~인 게 낫다", "차라리 되는 게 낫다", "차라리 시작하는 게 낫다", "차라리 믿는 게 낫다", "차라리 무는 게 낫다", "차라리 막는 게 낫다", "차라리 빌리는 게 낫다", "차라리 깨뜨리는 게 낫다", "차라리 가져오는 게 낫다", "차라리 닦는 게 낫다", "차라리 만드는 게 낫다", "차라리 타는 게 낫다", "차라리 사는 게 낫다", "차라리 전화하는 게 낫다", "차라리 보살피는 게 낫다", "차라리 휴대하는 게 낫다", "차라리 잡는 게 낫다", "차라리 변경하는 게 낫다", "차라리 확인하는 게 낫다", "차라리 선택하는 게 낫다", "차라리 오르는 게 낫다", "차라리 모으는 게 낫다", "차라리 되는 게 낫다", "차라리 축하하는 게 낫다", "차라리 제어하는 게 낫다", "차라리 요리하는 게 낫다", "차라리 복사하는 게 낫다", "차라리 덮는 게 낫다", "차라리 건너는 게 낫다", "차라리 오르는 게 낫다", "차라리 자르는 게 낫다", "차라리 춤추는 게 낫다", "차라리 결정하는 게 낫다", "차라리 설계하는 게 낫다", "차라리 죽는 게 낫다", "차라리 논의하는 게 낫다", "차라리 나누는 게 낫다", "차라리 하는 게 낫다", "차라리 그리는 게 낫다", "차라리 꿈꾸는 게 낫다", "차라리 마시는 게 낫다", "차라리 운전하는 게 낫다", "차라리 떨어지는 게 낫다", "차라리 먹는 게 낫다", "차라리 끝내는 게 낫다", "차라리 즐기는 게 낫다", "차라리 입장하는 게 낫다", "차라리 훈련하는 게 낫다", "차라리 실패하는 게 낫다", "차라리 떨어지는 게 낫다", "차라리 느끼는 게 낫다", "차라리 싸우는 게 낫다", "차라리 채우는 게 낫다", "차라리 찾는 게 낫다", "차라리 마치는 게 낫다", "차라리 고치는 게 낫다", "차라리 고정하는 게 낫다", "차라리 나는 게 낫다", "차라리 집중하는 게 낫다", "차라리 잊는 게 낫다", "차라리 형성하는 게 낫다", "차라리 튀기는 게 낫다", "차라리 받는 게 낫다", "차라리 전하는 게 낫다", "차라리 가는 게 낫다", "차라리 성장하는 게 낫다", "차라리 ~라고 생각하는 게 낫다", "차라리 안내하는 게 낫다", "차라리 거는 게 낫다", "차라리 싫어하는 게 낫다", "차라리 가지는 게 낫다", "차라리 돕는 게 낫다", "차라리 치는 게 낫다", "차라리 버티는 게 낫다", "차라리 잡는 게 낫다", "차라리 희망하는 게 낫다", "차라리 사냥하는 게 낫다", "차라리 빨리 ~하는 게 낫다", "차라리 소개하는 게 낫다", "차라리 초대하는 게 낫다", "차라리 참여하는 게 낫다", "차라리 유지하는 게 낫다", "차라리 치는 게 낫다", "차라리 죽이는 게 낫다", "차라리 아는 게 낫다", "차라리 배우는 게 낫다", "차라리 거짓말하는 게 낫다", "차라리 좋아하는 게 낫다", "차라리 듣는 게 낫다", "차라리 사는 게 낫다", "차라리 보는 게 낫다", "차라리 사랑하는 게 낫다", "차라리 만드는 게 낫다", "차라리 결혼하는 게 낫다", "차라리 만나는 게 낫다", "차라리 놓는 게 낫다", "차라리 움직이는 게 낫다", "차라리 필요하는 게 낫다", "차라리 여는 게 낫다", "차라리 그리는 게 낫다", "차라리 통과하는 게 낫다", "차라리 지불하는 게 낫다", "차라리 선택하는 게 낫다", "차라리 계획하는 게 낫다", "차라리 노는 게 낫다", "차라리 인쇄하는 게 낫다", "차라리 미는 게 낫다", "차라리 하는 게 낫다", "차라리 읽는 게 낫다", "차라리 기억하는 게 낫다", "차라리 돌아가는 게 낫다", "차라리 달리는 게 낫다", "차라리 절약하는 게 낫다", "차라리 말하는 게 낫다", "차라리 보는 게 낫다", "차라리 파는 게 낫다", "차라리 보내는 게 낫다", "차라리 놀라는 게 낫다", "차라리 보여주는 게 낫다", "차라리 노래하는 게 낫다", "차라리 앉는 게 낫다", "차라리 자는 게 낫다", "차라리 냄새맡는 게 낫다", "차라리 웃는 게 낫다", "차라리 말하는 게 낫다", "차라리 세우는 게 낫다", "차라리 시작하는 게 낫다", "차라리 머무르는 게 낫다", "차라리 멈추는 게 낫다", "차라리 공부하는 게 낫다", "차라리 수영하는 게 낫다", "차라리 걸리는 게 낫다", "차라리 말하는 게 낫다", "차라리 가르치는 게 낫다", "차라리 말하는 게 낫다", "차라리 말하는 게 낫다", "차라리 생각하는 게 낫다", "차라리 만지는 게 낫다", "차라리 훈련하는 게 낫다", "차라리 여행하는 게 낫다", "차라리 노력하는 게 낫다", "차라리 돌리는 게 낫다", "차라리 이해하는 게 낫다", "차라리 이용하는 게 낫다", "차라리 방문하는 게 낫다", "차라리 기다리는 게 낫다", "차라리 깨는 게 낫다", "차라리 걷는 게 낫다", "차라리 원하는 게 낫다", "차라리 씻는 게 낫다", "차라리 관람하는 게 낫다", "차라리 입는 게 낫다", "차라리 환영하는 게 낫다", "차라리 우승하는 게 낫다", "차라리 바라는 게 낫다", "차라리 일하는 게 낫다", "차라리 걱정하는 게 낫다", "차라리 쓰이는 게 낫다", "차라리 울려오는 게 낫다", "차라리 가라앉는 게 낫다", "차라리 뿌리는 게 낫다", "차라리 먹이는 게 낫다", "차라리 쏘는 게 낫다", "차라리 이끄는 게 낫다", "차라리 기는 게 낫다", "차라리 쓰는 게 낫다", "차라리 우는 게 낫다", "차라리 떠나는 게 낫다", "차라리 구부리는 게 낫다", "차라리 빌리는 게 낫다", "차라리 잃는 게 낫다", "차라리 소비하는 게 낫다", "차라리 의미하는 게 낫다", "차라리 찾는 게 낫다", "차라리 묶는 게 낫다", "차라리 감는 게 낫다", "차라리 두는 게 낫다", "차라리 듣는 게 낫다", "차라리 미끄러지는 게 낫다", "차라리 파는 게 낫다", "차라리 빛나는 게 낫다", "차라리 도는 게 낫다", "차라리 때리는 게 낫다", "차라리 때리는 게 낫다", "차라리 깨우는 게 낫다", "차라리 낳는 게 낫다", "차라리 찢는 게 낫다", "차라리 감추는 게 낫다", "차라리 어는 게 낫다", "차라리 훔치는 게 낫다", "차라리 부는 게 낫다", "차라리 던지는 게 낫다", "차라리 일어나는 게 낫다", "차라리 타는 게 낫다", "차라리 오르는 게 낫다", "차라리 흔드는 게 낫다");
const AUXILIARY_USED_TO_K = AUXILIARY_WOULD_K
const AUXILIARY_SHOULD_HAVE_PP_K = new Array("행동했어야 했다", "더했어야 했다", "조언했어야 했다", "동의했어야 했다", "대답했어야 했다", "도착했어야 했다", "물어봤어야 했다", "구웠어야 했다", "이었어야 했다", "됐어야 했다", "시작했어야 했다", "믿었어야 했다", "물었어야 했다", "막았어야 했다", "빌렸어야 했다", "깨뜨렸어야 했다", "가져왔어야 했다", "닦았어야 했다", "만들었어야 했다", "탔어야 했다", "사왔어야 했다", "전화했어야 했다", "보살폈어야 했다", "휴대했어야 했다", "잡았어야 했다", "변경했어야 했다", "확인했어야 했다", "선택했어야 했다", "올랐어야 했다", "모았어야 했다", "되었어야 했다", "축하했어야 했다", "제어했어야 했다", "요리했어야 했다", "복사했어야 했다", "덮었어야 했다", "건넜어야 했다", "올랐어야 했다", "잘랐어야 했다", "춤췄어야 했다", "결정했어야 했다", "설계했어야 했다", "죽었어야 했다", "논의했어야 했다", "나눴어야 했다", "했어야 했다", "그렸어야 했다", "꿈꾸었어야 했다", "마셨어야 했다", "운전했어야 했다", "떨어졌어야 했다", "먹어야 했다", "끝냈어야 했다", "즐겼어야 했다", "입장했어야 했다", "훈련했어야 했다", "실패했어야 했다", "떨어졌어야 했다", "느꼈어야 했다", "싸웠어야 했다", "채웠어야 했다", "찾았어야 했다", "마쳤어야 했다", "고쳤어야 했다", "고정했어야 했다", "날았어야 했다", "집중했어야 했다", "잊었어야 했다", "형성했어야 했다", "튀겼어야 했다", "받았어야 했다", "전했어야 했다", "갔어야 했다", "성장했어야 했다", "~라고 생각했어야 했다", "안내했어야 했다", "걸었어야 했다", "싫어했어야 했다", "가졌어야 했다", "도왔어야 했다", "쳤어야 했다", "버텼어야 했다", "잡았어야 했다", "희망했어야 했다", "사냥했어야 했다", "빨리 ~했어야 했다", "소개했어야 했다", "초대했어야 했다", "참여했어야 했다", "유지했어야 했다", "찼어야 했다", "죽였어야 했다", "알았어야 했다", "배웠어야 했다", "거짓말했어야 했다", "좋아했어야 했다", "들었어야 했다", "살았어야 했다", "봤어야 했다", "사랑했어야 했다", "만들었어야 했다", "결혼했어야 했다", "만났어야 했다", "놓았어야 했다", "움직였어야 했다", "필요했어야 했다", "열었어야 했다", "그렸어야 했다", "통과했어야 했다", "지불했어야 했다", "선택했어야 했다", "계획했어야 했다", "놀았어야 했다", "인쇄했어야 했다", "밀었어야 했다", "넣었어야 했다", "읽었어야 했다", "기억했어야 했다", "돌아갔어야 했다", "달렸어야 했다", "절약했어야 했다", "말했어야 했다", "보았어야 했다", "팔았어야 했다", "보냈어야 했다", "놀라게했어야 했다", "보여줬어야 했다", "노래했어야 했다", "앉았어야 했다", "잤어야 했다", "냄새를 맡어야 했다", "웃었어야 했다", "말했어야 했다", "세웠어야 했다", "시작했어야 했다", "머물렀어야 했다", "멈췄어야 했다", "공부했어야 했다", "수영했어야 했다", "걸렸어야 했다", "말했어야 했다", "가르쳤어야 했다", "말했어야 했다", "말했어야 했다", "생각했어야 했다", "만졌어야 했다", "훈련했어야 했다", "여행했어야 했다", "노력했어야 했다", "돌렸어야 했다", "이해했어야 했다", "이용했어야 했다", "방문했어야 했다", "기다렸어야 했다", "깼어야 했다", "걸었어야 했다", "원했어야 했다", "씻었어야 했다", "관람했어야 했다", "입었어야 했다", "환영했어야 했다", "우승했어야 했다", "바랐어야 했다", "일했어야 했다", "걱정했어야 했다", "쓰였어야 했다", "울렸어야 했다", "가라앉았어야 했다", "뿌렸어야 했다", "먹였어야 했다", "쏘았어야 했다", "이끌었어야 했다", "기었어야 했다", "쓸었어야 했다", "울었어야 했다", "떠났어야 했다", "구부렸어야 했다", "빌렸어야 했다", "잃었어야 했다", "소비했어야 했다", "의미했어야 했다", "찾았어야 했다", "묶었어야 했다", "감았어야 했다", "두었어야 했다", "들었어야 했다", "미끄러졌어야 했다", "팠어야 했다", "빛났어야 했다", "돌았어야 했다", "때렸어야 했다", "때렸어야 했다", "깨웠어야 했다", "낳았어야 했다", "찢었어야 했다", "감췄어야 했다", "얼었어야 했다", "훔쳤어야 했다", "불었어야 했다", "던졌어야 했다", "일어났어야 했다", "탔어야 했다", "올랐어야 했다", "흔들었어야 했다");
const AUXILIARY_MUST_HAVE_PP_K = new Array("행동했음에 틀림없다", "더했음에 틀림없다", "조언했음에 틀림없다", "동의했음에 틀림없다", "대답했음에 틀림없다", "도착했음에 틀림없다", "물어봤음에 틀림없다", "구웠음에 틀림없다", "이었음에 틀림없다", "됐음에 틀림없다", "시작했음에 틀림없다", "믿었음에 틀림없다", "물었음에 틀림없다", "막았음에 틀림없다", "빌렸음에 틀림없다", "깨뜨렸음에 틀림없다", "가져왔음에 틀림없다", "닦았음에 틀림없다", "만들었음에 틀림없다", "탔음에 틀림없다", "샀음에 틀림없다", "전화했음에 틀림없다", "보살폈음에 틀림없다", "휴대했음에 틀림없다", "잡았음에 틀림없다", "변경했음에 틀림없다", "확인했음에 틀림없다", "선택했음에 틀림없다");
const AUXILIARY_CANNOT_HAVE_PP_K = new Array("행동했을 리가 없다", "더했을 리가 없다", "조언했을 리가 없다", "동의했을 리가 없다", "대답했을 리가 없다", "도착했을 리가 없다", "물어볼 리가 없다", "구웠을 리가 없다", "이었을 리가 없다", "됐을 리가 없다", "시작했을 리가 없다", "믿었을 리가 없다", "물었을 리가 없다", "막았을 리가 없다", "빌렸을 리가 없다", "깨뜨렸을 리가 없다", "가졌을 리가 없다", "닦았을 리가 없다", "만들었을 리가 없다", "탔을 리가 없다", "샀을 리가 없다", "전화했을 리가 없다", "보살폈을 리가 없다", "휴대했을 리가 없다", "잡을 리가 없다", "변경했을 리가 없다", "확인했을 리가 없다", "선택했을 리가 없다");
const AUXILIARY_MAY_HAVE_PP_K = new Array("행동했을지도 모른다", "더했을지도 모른다", "조언했을지도 모른다", "동의했을지도 모른다", "대답했을지도 모른다", "도착했을지도 모른다", "물어봤을지도 모른다", "구웠을지도 모른다", "이었을지도 모른다", "됐을지도 모른다", "시작했을지도 모른다", "믿었을지도 모른다", "물었을지도 모른다", "막았을지도 모른다", "빌렸을지도 모른다", "깨뜨렸을지도 모른다", "가졌을지도 모른다", "닦았을지도 모른다", "만들었을지도 모른다", "태웠을지도 모른다", "샀을지도 모른다", "전화했을지도 모른다", "보살폈을지도 모른다", "휴대했을지도 모른다", "잡았을지도 모른다", "변경했을지도 모른다", "확인했을지도 모른다", "선택했을지도 모른다");
const AUXILIARY_COULD_HAVE_PP_K = new Array("행동할 수도 있었다", "더할 수도 있었다", "조언할 수도 있었다", "동의할 수도 있었다", "대답할 수도 있었다", "도착할 수도 있었다", "물어봤을 수도 있었다", "구울 수도 있었다", "일 수도 있었다", "될 수도 있었다", "시작할 수도 있었다", "믿을 수도 있었다", "물었을 수도 있었다", "막았을 수도 있었다", "빌릴 수도 있었다", "깨뜨릴 수도 있었다", "가졌을 수도 있었다", "닦았을 수도 있었다", "만들었을 수도 있었다", "탈 수도 있었다", "살수도 있었다", "전화할 수도 있었다", "보살필 수도 있었다", "휴대할 수도 있었다", "잡을 수도 있었다", "변경할 수도 있었다", "확인할 수도 있었다", "선택할 수도 있었다");
const MAY_IDIOMATIC_EXPRESSION_1K = new Array("행동하는 것이 당연하다", "더하는 것이 당연하다", "조언하는 것이 당연하다", "동의하는 것이 당연하다", "대답하는 것이 당연하다", "도착하는 것이 당연하다", "물어보는 것이 당연하다", "굽는 것이 당연하다", "인 것이 당연하다", "되는 것이 당연하다", "시작하는 것이 당연하다", "믿는 것이 당연하다", "무는 것이 당연하다", "막는 것이 당연하다", "빌리는 것이 당연하다", "깨뜨리는 것이 당연하다", "가져오는 것이 당연하다", "닦는 것이 당연하다", "만드는 것이 당연하다", "타는 것이 당연하다", "사는 것이 당연하다", "전화하는 것이 당연하다", "보살피는 것이 당연하다", "휴대하는 것이 당연하다", "잡는 것이 당연하다", "변경하는 것이 당연하다", "확인하는 것이 당연하다", "선택하는 것이 당연하다");
const MAY_IDIOMATIC_EXPRESSION_2K = new Array("행동하는 편이 낫다", "더하는 편이 낫다", "조언하는 편이 낫다", "동의하는 편이 낫다", "대답하는 편이 낫다", "도착하는 편이 낫다", "물어보는 편이 낫다", "굽는 편이 낫다", "인 편이 낫다", "되는 편이 낫다", "시작하는 편이 낫다", "믿는 편이 낫다", "무는 편이 낫다", "막는 편이 낫다", "빌리는 편이 낫다", "깨뜨리는 편이 낫다", "가져오는 편이 낫다", "닦는 편이 낫다", "만드는 편이 낫다", "타는 편이 낫다", "사는 편이 낫다", "전화하는 편이 낫다", "보살피는 편이 낫다", "휴대하는 편이 낫다", "잡는 편이 낫다", "변경하는 편이 낫다", "확인하는 편이 낫다", "선택하는 편이 낫다");

const GERUND_K = new Array("행동하는 것", "조언하는 것", "동의하는 것", "도착하는 것", "물어보는 것", "굽는 것", "시작하는 것", "믿는 것", "깨뜨리는 것", "타는 것", "보살피는 것", "바꾸는 것", "확인하는 것", "선택하는 것", "오르는 것", "오는 것", "요리하는 것", "복사하는 것", "건너는 것", "우는 것", "자르는 것", "춤추는 것", "결정하는 것", "죽는 것", "하는 것", "그리는 것", "꿈꾸는 것", "마시는 것");
const GERUND_E = new Array("acting", "advising", "agreeing", "arriving", "asking", "baking", "beginning", "believing", "breaking", "burning", "caring", "changing", "checking", "choosing", "climbing", "coming", "cooking", "copying", "crossing", "crying", "cutting", "dancing", "deciding", "dying", "doing", "drawing", "dreaming", "drinking");
const GERUND_TYPE_K = new Array("은 좋다", "을 사랑한다", "을 잘한다");
const GERUND_TYPE_E = new Array("주어", "목적어", "전치사의 목적어");
const GERUND_NEGATIVE_K = new Array("안 ", "절대 안 ");
const GERUND_NEGATIVE_E = new Array("not ", "never ");
const GERUND_SENSE_SUBJECT_K = new Array();
const GERUND_SENSE_SUBJECT_SENTENCE_K = new Array("에 감사합니다");
const GERUND_SENSE_SUBJECT_SENTENCE_E = new Array("Thank you for ");
const GERUND_VS_PRESENT_PARTICIPLE_K = new Array("to만 쓰는 동사 ", "ing만 쓰는 동사", "", "둘 다 쓰는 동사 - 뜻 같음", "둘 다 쓰는 동사 - 뜻 다름");
const VERB_WITH_K = new Array("to만 쓰는 동사 ", "ing만 쓰는 동사", "둘 다 쓰는 동사 - 뜻 같음", "둘 다 쓰는 동사 - 뜻 다름");
const VERB_WITH_E = new Array("언제 답을 출래 ", "피마디인 스키어 기쁘", "사랑동사", "기억동사");
const VERB_WITH_TO_K = new Array("원한다", "소망한다", "희망한다", "기대한다", "필요하다", "요구한다", "결정한다", "동의한다", "계획한다", "약속한다", "선택한다", "거절한다");
const VERB_WITH_TO_3E = new Array("wants", "wishes", "hopes", "expects", "needs", "demands", "decides", "agrees", "plans", "promises", "chooses", "refuses");
const VERB_WITH_TO_2E = new Array("to", "to", "to", "to", "to", "to", "to", "to", "to", "to", "to", "to");
const VERB_WITH_TO_E = new Array("want", "wish", "hope", "expect", "need", "demand", "decide", "agree", "plan", "promise", "choose", "refuse");
const VERB_WITH_ING_K = new Array("끝나다", "꺼리다", "부인하다", "즐기다", "멈추다", "유지하다", "피하다", "인정하다", "포기하다", "연습하다");
const VERB_WITH_ING_E = new Array("finish", "mind", "deny", "enjoy", "stop", "keep", "avoid", "admit", "give up", "practice");
const VERB_WITH_ING_2E = new Array("-ing", "-ing", "-ing", "-ing", "-ing", "-ing", "-ing", "-ing", "-ing", "-ing");
const VERB_WITH_BOTH_K = new Array("좋아한다", "시작한다", "계속한다", "사랑한다", "싫어한다", "시작한다");
const VERB_WITH_BOTH_E2 = new Array("to/-ing", "to/-ing", "to/-ing", "to/-ing", "to/-ing", "to/-ing");
const VERB_WITH_BOTH_E = new Array("like", "start ", "continue", "love ", "hate", "begin");
const VERB_WITH_BOTH_2K = new Array("기억한다 ", "노력한다", "잊는다", " 멈춘다", "후회한다");
const VERB_WITH_BOTH_2E = new Array("remember", "try", "forget", "stop", "regret");
const VERB_WITH_BOTH_3K = new Array("할 것을 기억하다", "했던 것을 기억하다", "할 것을 잊다", "했던 것을 잊다", "하게 되어 유감이다", "했던 것을 후회하다", "하기 위해 멈추다", "하는 것을 멈추다", "노력하다", "시험 삼아 해보다");
const VERB_WITH_BOTH_3E = new Array("remember to", "remember -ing", "forget to", "forget -ing ", "regret to", "regret -ing ", "stop to", "stop -ing ", "try to", "try -ing");
const GERUND_IDIOMATIC_EXPRESSION_K = new Array("-하는 게 어때?", "하고싶다", "고대하다 ", "-하는 데 어려움을 겪다", "-하는 데 어려움을 겪다", "반대하다 ", "못하게 하다", "익숙하다", "-해도 소용없다", "-해도 소용없다", "-하지 않을 수 없다", "-하지 않을 수 없다", "-은 불가능하다", "-은 불가능하다", "계속해서 -하다");
const GERUND_IDIOMATIC_EXPRESSION_E = new Array("How(What) about -ing", "feel like -ing", "look forward to -ing", "have a hard time -ing", "have trouble /difficulty -ing", "object to -ing", "prevent/keep/stop 목 from -ing", "be/get used to -ing", "it is no use –ing", "It is useless to V", "cannot help –ing", "cannot help but V", "There is no –ing", " It is impossible to V", "keep –ing =go on -ing");
const GERUND_IDIOMATIC_EXPRESSION_2K = new Array("막 ~하려고 하다", "막 ~하려고 하다", "-하자마자", "-하느라 바쁘다", "시간/돈 쓰다", "-하러 가다", "할 가치가 있다", "~해줘서 고맙다");
const GERUND_IDIOMATIC_EXPRESSION_2E = new Array("be at the point of –ing", "be about to V", "on -ing", "be busy -ing", "spend 시간/돈 (on) ing", "go -ing", "be worth -ing", "thank ~ for -ing");
const GERUND_TENSE_K = new Array("행동했던 것", "조언했던 것", "동의했던 것", "도착했던 것", "물었던 것", "구웠던 것", "시작했던 것", "믿었던 것", "깨뜨렸던 것", "태웠던 것", "보살폈던 것", "바꿨던 것", "확인했던 것", "선택했던 것", "올랐던 것", "왔던 것", "요리했던 것", "복사했던 것", "건넜던 것", "울었던 것", "잘랐던 것", "춤췄던 것", "결정했던 것", "죽었던 것", "했던 것", "그렸던 것", "꿈꿨던 것", "마셨던 것");
const GERUND_TENSE_E = new Array("having acted", "having advised", "having agreed", "having arrived", "having asked", "having baked", "having begun", "having believed", "having broken", "having burnt", "having cared", "having changed", "having checked", "having chosen", "having climbed", "having come", "having cooked", "having copied", "having crossed", "having cried", "having cut", "having danced", "having decided", "having died", "having done", "having drawn", "having dreamt", "having drunk");
const GERUND_PASSIVE_K = new Array("행동되는 것", "더해지는 것", "조언받는 것", "동의되는 것", "대답되는 것", "도착되는 것", "요청되는 것", "구워지는 것", "인 것", "되는 것", "시작되는 것", "믿어지는 것", "물리는 것", "막아지는 것", "빌려지는 것", "깨뜨려지는 것", "가져와지는 것", "닦아지는 것", "만들어지는 것", "타지는 것", "사지는 것", "전화되는 것", "보살펴지는 것", "휴대되는 것", "잡히는 것", "변경되는 것", "확인되는 것", "선택되는 것", "올라지는 것", "모아지는 것", "와지는 것", "축하되는 것", "제어되는 것", "요리되는 것", "복사되는 것", "덮어지는 것", "건너지는 것", "울려지는 것", "잘라지는 것", "춤춰지는 것", "결정되는 것", "설계되는 것", "죽어지는 것", "논의되는 것", "나눠지는 것", "되는 것", "그려지는 것", "꿈꿔지는 것", "마셔지는 것", "운전되는 것", "떨어진 것", "먹히는 것", "끝내지는 것", "즐겨지는 것", "입장되는 것", "훈련되는 것", "실패되는 것", "떨어지는 것", "느껴지는 것", "싸워지는 것", "채워지는 것", "찾아지는 것", "마쳐지는 것", "고쳐지는 것", "고정되는 것", "날려지는 것", "집중되는 것", "잊히는 것", "형성되는 것", "튀겨지는 것", "받아지는 것", "주어진 것", "가지는 것", "성장되는 것", "추측되는 것", "안내되는 것", "걸어지는 것", "싫어지는 것", "가져지는 것", "도움받는 것", "쳐지는 것", "버텨지는 것", "잡히는 것", "희망되는 것", "사냥되는 것", "서둘러지는 것", "소개되는 것", "초대되는 것", "참여되는 것", "유지되는 것", "차지는 것", "죽여지는 것", "알아지는 것", "배워지는 것", "거짓말되는 것", "좋아해지는 것", "들어지는 것", "사지는 것", "봐지는 것", "사랑되는 것", "만들어지는 것", "결혼되는 것", "만나지는 것", "놓쳐지는 것", "움직여지는 것", "필요해지는 것", "열어지는 것", "그려지는 것", "통과되는 것", "지불되는 것", "선택되는 것", "계획되는 것", "놀아지는 것", "인쇄되는 것", "밀어지는 것", "놓아지는 것", "읽어지는 것", "기억되는 것", "돌아와지는 것", "달려지는 것", "절약되는 것", "말해지는 것", "보여지는 것", "파이는 것", "보내지는 것", "놀라게 되는 것", "보여지는 것", "노래되는 것", "앉아지는 것", "재워지는 것", "냄새를 맡아지는 것", "웃어지는 것", "말해지는 것", "세워지는 것", "시작되는 것", "머물러지는 것", "멈추어지는 것", "공부되는 것", "수영되는 것", "걸려지는 것", "말해지는 것", "가르쳐지는 것", "말해지는 것", "고마움을 받는 것", "생각되는 것", "만져지는 것", "훈련되는 것", "여행되는 것", "노력되는 것", "돌려지는 것", "이해되는 것", "이용되는 것", "방문되는 것", "기다려지는 것", "깨지는 것", "걸어지는 것", "원해지는 것", "씻히는 것", "관람되는 것", "입어지는 것", "환영받는 것", "우승되는 것", "바라지는 것", "일해지는 것", "걱정되는 것", "쓰이는 것", "울려지는 것", "가라앉아지는 것", "뿌려지는 것", "먹히는 것", "쏘아지는 것", "이끌어지는 것", "기어지는 것", "쓸리는 것", "울리는 것", "떠나지는 것", "구부려지는 것", "빌려지는 것", "잃어버려지는 것", "소비되는 것", "의미되는 것", "찾아지는 것", "묶어지는 것", "감아지는 것", "두어지는 것", "들어지는 것", "미끄러져지는 것", "파인 것", "밝아지는 것", "돌아지는 것", "때려지는 것", "때려지는 것", "깨워지는 것", "낳아지는 것", "찢어지는 것", "감춰지는 것", "얼려지는 것", "훔쳐지는 것", "불어지는 것", "던져지는 것", "일어나지는 것", "태워지는 것", "올라지는 것", "흔들어지는 것");
const GERUND_PASSIVE_E = new Array("acted", "added", "advised", "agreed", "answered", "arrived", "asked", "baked", "been", "become", "begun", "believed", "bitten", "blocked", "borrowed", "broken", "brought", "brushed", "built", "burned", "bought", "called", "cared", "carried", "caught", "changed", "checked", "chosen", "climbed", "collected", "come", "congratulated", "controled", "cooked", "copied", "covered", "crossed", "cried", "cut", "danced", "decided", "designed", "died", "discussed", "divided", "done", "drawn", "dreamed", "drunk", "driven", "dropped", "eaten", "ended", "enjoyed", "entered", "exercised", "failed", "fallen", "felt", "fought", "filled", "found", "finished", "fixed", "fixed", "flown", "focused", "forgotten", "formed", "fried", "gotten", "given", "gone", "grown", "guessed", "guided", "hung", "hated", "had", "helped", "hit", "held", "held", "hoped", "hunted", "hurried", "introduced", "invited", "joined", "kept", "kicked", "killed", "known", "learned", "lied", "liked", "listened", "lived", "looked", "loved", "made", "married", "met", "missed", "moved", "needed", "opened", "painted", "passed", "paid", "picked", "planned", "played", "printed", "pushed", "put", "read", "remembered", "returned", "run", "saved", "said", "seen", "sold", "sent", "shocked", "showed", "sung", "sat", "slept", "smelled", "smiled", "spoken", "stood", "started", "stayed", "stopped", "studied", "swum", "taken", "talked", "taught", "told", "thanked", "thought", "touched", "trained", "traveled", "tried", "turned", "understood", "used", "visited", "waited", "woken", "walked", "wanted", "washed", "watched", "worn", "welcomed", "won", "wished", "worked", "worried", "written", "rung", "sunk", "sowed", "fed", "shot", "led", "crept", "swept", "wept", "left", "bent", "lent", "lost", "spent", "meant", "sought", "bound", "wound", "laid", "heard", "slid", "dug", "shone", "spun", "struck", "beaten", "awoken", "born", "torn", "hidden", "frozen", "stolen", "blown", "thrown", "arisen", "ridden", "risen", "shaken");


const PARTICIPLE_K = new Array("행동하는", "더하는", "조언하는", "동의하는", "대답하는", "도착하는", "요청하는", "굽는", "인", "되는", "시작하는", "믿는", "무는", "막는", "빌리는", "깨뜨리는", "가져오는", "닦는", "만드는", "타는", "사는", "전화하는", "보살피는", "휴대하는", "잡는", "변경하는", "확인하는", "선택하는", "오르는", "모으는", "하는", "축하하는", "제어하는", "요리하는", "복사하는", "덮는", "건너는", "우는", "자르는", "춤추는", "결정하는", "설계하는", "죽는", "논의하는", "나누는", "되는", "그리는", "꿈꾸는", "마시는", "운전하는", "떨어지는", "먹는", "끝내는", "즐기는", "입장하는", "훈련하는", "실패하는", "떨어지는", "느끼는", "싸우는", "채우는", "찾는", "마치는", "고치는", "고정하는", "나는", "집중하는", "잊는", "형성하는", "튀기는", "얻는", "주는", "가는", "자라는", "추측하는", "안내하는", "거는", "미워하는", "가지는", "돕는", "치는", "버티는", "잡는", "희망하는", "사냥하는", "서두르는", "소개하는", "초대하는", "참여하는", "유지하는", "차는", "죽이는", "아는", "배우는", "거짓말하는", "좋아하는", "듣는", "사는", "보는", "사랑하는", "만드는", "결혼하는", "만나는", "놓는", "움직이는", "필요한", "여는", "그리는", "통과하는", "지불하는", "선택하는", "계획하는", "노는", "인쇄하는", "미는", "놓는", "읽는", "기억하는", "되돌리는", "달리는", "절약하는", "말하는", "보는", "파는", "보내는", "놀라게 하는", "보여주는", "노래하는", "앉는", "자는", "냄새를 맡는", "웃는", "말하는", "일어서는", "시작하는", "머무르는", "멈추는", "공부하는", "수영하는", "걸리는", "말하는", "가르치는", "말하는", "고마워하는", "생각하는", "만지는", "훈련하는", "여행하는", "노력하는", "돌리는", "이해하는", "이용하는", "방문하는", "기다리는", "깨는", "걷는", "원하는", "씻는", "관람하는", "입는", "환영하는", "우승하는", "바라는", "일하는", "걱정하는", "쓰는", "울리는", "가라앉는", "뿌리는", "먹이는", "쏘는", "이끄는", "기는", "쓰는", "우는", "떠나는", "구부리는", "빌리는", "잃는", "소비하는", "의미하는", "찾는", "묶는", "감는", "두는", "듣는", "미끄러지는", "파는", "밝은", "도는", "때리는", "때리는", "깨는", "낳는", "찢는", "감추는", "얼리는", "훔치는", "부는", "던지는", "일어나는", "타는", "오르는", "흔드는");
const PARTICIPLE_E = GERUND_E;

const PARTICIPLE_MODIFY_NOUN_K = new Array();
const PARTICIPLE_AS_COMPLEMENT_K = new Array("C자리에 동사가 있는 경우?");
const PARTICIPLE_AS_COMPLEMENT_E = new Array("보통은 to 동사원형, \n 지각동사 - 동사원형 or 분사 \n (S나 O와의 관계가 능동 - 현재분사 ing, \n 수동이나 동작의 대상 - 과거분사 p.p.), ");
const PARTICIPLE_EMOTION_K = new Array("감정의 원인 제공", "감정을 느끼면/받으면");
const PARTICIPLE_EMOTION_E = new Array("현재분사 -ing (감정을 유발하는)", "과거분사 –p.p. (감정을 느끼는)");
const PARTICIPIAL_CONSTRUCTION_K = new Array("분사구문 – 만드는 방법 ①②③ ?", "생략 가능?");
const PARTICIPIAL_CONSTRUCTION_E = new Array("① 접속사 생략 (의미 명확할 때) \n ② 주어(같으면) 생략 \n 냅두면(다르면) > (독립분사구문) \n ③ 동사 ing \n 당하면(being) p.p. \n 시제 다르면 having p.p.", "① (being) \n ② (having been)");
const PARTICIPIAL_CONSTRUCTION_MEANING_K = new Array("~할 때", "~하기 전에", "~한 후에", "~라면", "~때문에", "불구하고", "하면서", "하고 했다");
const PARTICIPIAL_CONSTRUCTION_MEANING_E = new Array("when", "before", "after", "if", "because, since, as", "(al)though, even though, even if", "as, while", "and");
const PARTICIPIAL_CONSTRUCTION_MEANING_2K = new Array("때", "라면", "때문에", "불구하고", "하면서", "하고 했다");
const PARTICIPIAL_CONSTRUCTION_MEANING_2E = new Array("시간", "조건", "원인, 이유", "양보", "동시동작 ", "연속동작");
const PARTICIPIAL_CONSTRUCTION_NEGATIVE_K = new Array("분사 구문의 부정?");
const PARTICIPIAL_CONSTRUCTION_NEGATIVE_E = new Array("not/never 분사");
const PARTICIPLE_IDIOMATIC_EXPRESSION_K = new Array("일반적으로 말해서", "솔직히 말해서", "엄밀히 말해서", "대략적으로 말해서", "~와 비교해 보면", "만일 ~라면", "~을 고려하면", "~로 판단하건데", "~얘기가 나와서 말인데");
const PARTICIPLE_IDIOMATIC_EXPRESSION_E = new Array("generally speaking", "frankly speaking", "strictly speaking", "roughly speaking", "compared with", "supposing (that)", "considering (that)", "judging from", "speaking(talking) of");
const PARTICIPLE_WITH_K = new Array('~한 채로 ', '~된 채로 ');
const PARTICIPLE_WITH_E = new Array('with 목적어 현재분사(ing) ', 'with 목적어 과거분사(p.p.)');

const PASSIVE_2K = new Array("수동태", "능동태를 수동태로 만드는 법?");
const PASSIVE_2E = new Array("당할 때 쓰는 말 \n be p.p. (by 목적격) \n 되어지다, 하여지다", "1 목적어(O)를 주어(S, 맨 앞)로 \n 2 동사는 be p.p. \n 3 주어(S)는 by 목적격 \n > 수 / 인칭 새 주어에, \n 시제는 능동태에 일치");

const PASSIVE_K = new Array("조언받는다", "답받는다", "요청받는다", "믿어진다", "물린다", "막힌다", "빌려진다", "깨뜨려진다", "가져와진다", "닦인다", "지어진다", "태워진다", "사진다", "불린다", "신경 쓰여진다", "들고 와진다", "잡힌다", "바뀐다", "확인된다", "선택된다", "모아진다", "축하받는다", "제어된다", "요리된다", "복사된다", "덮인다", "가로질러진다", "잘린다", "결정된다", "설계된다", "논의된다", "나눠진다", "그려진다", "마셔진다", "운전된다", "떨어뜨려진다", "먹힌다", "즐겨진다", "들어가진다", "운동된다", "실패된다", "느껴진다", "싸워진다", "채워진다", "찾아진다", "끝내진다", "고쳐진다", "날린다", "집중받는다", "잊혀진다", "형성된다", "튀겨진다", "얻어진다", "주어진다", "추측된다", "안내받는다", "걸려진다", "도움을 받는다", "치인다", "잡힌다", "사냥당한다", "소개된다", "초대받는다", "참여된다", "보관된다", "차인다", "죽임을 당한다", "알려진다", "배워진다", "사랑받는다", "만들어진다", "놓쳐진다", "움직여진다", "열린다", "그려진다", "지나가진다", "지불된다", "주워진다", "계획된다", "인쇄된다", "밀린다", "놓여진다", "읽힌다", "기억된다", "돌아와진다", "구해진다", "말해진다", "보여진다", "보내진다", "충격을 받는다", "말해진다", "시작된다", "멈춰진다", "공부된다", "가져와진다", "가르쳐진다", "생각된다", "훈련받는다", "돌려진다", "이해받는다", "사용된다", "방문받는다", "씻겨진다", "입혀진다", "환영받는다", "걱정된다", "쓰여진다", "뿌려진다", "먹여진다", "쏘아진다", "이끌어진다", "떠나진다", "구부려진다", "잃어버려진다", "소비된다", "의미된다", "묶인다", "감긴다", "놓아진다", "들린다", "미끄러져진다", "파여진다", "돌려진다", "때려진다", "찢겨진다", "숨겨진다", "얼려진다", "훔쳐진다", "던져진다", "흔들린다");
const PASSIVE_E = new Array("advised", "answered", "asked", "believed", "bitten", "blocked", "borrowed", "broken", "brought", "brushed", "built", "burned", "bought", "called", "cared", "carried", "caught", "changed", "checked", "chosen", "collected", "congratulated", "controlled", "cooked", "copied", "covered", "crossed", "cut", "decided", "designed", "discussed", "divided", "drawn", "drunk", "driven", "dropped", "eaten", "enjoyed", "entered", "exercised", "failed", "felt", "fought", "filled", "found", "finished", "fixed", "flown", "focused", "forgotten", "formed", "fried", "gotten", "given", "guessed", "guided", "hung", "helped", "hit", "held", "hunted", "introduced", "invited", "joined", "kept", "kicked", "killed", "known", "learned", "loved", "made", "missed", "moved", "opened", "painted", "passed", "paid", "picked", "planned", "printed", "pushed", "put", "read", "remembered", "returned", "saved", "said", "seen", "sent", "shocked", "spoken", "started", "stopped", "studied", "taken", "taught", "thought", "trained", "turned", "understood", "used", "visited", "washed", "worn", "welcomed", "worried", "written", "sown", "fed", "shot", "led", "left", "bent", "lost", "spent", "meant", "bound", "wound", "laid", "heard", "slid", "dug", "spun", "beaten", "torn", "hidden", "frozen", "stolen", "thrown", "shaken");
const PASSIVE_SENTENCE_K = new Array("수동태", "수동태 - 부정문", "수동태 - 의문문", "수동태 - 조동사", "수동태 - 의문사X의문문", "수동태 - 의문사O의문문", "수동태 - 의문사 Who 의문문", "수동태 - (긍정) 명령문", "수동태 - 부정 명령문");
const PASSIVE_SENTENCE_E = new Array("be p.p.", "be not p.p.", "be 주어 p.p.", "조 be p.p.", "be 주어 p.p.", "의문사 be p.p.", "By whom be 주어 p.p.", "Let 목 be p.p.", "Don't let 목 be p.p.");
const PASSIVE_TENSE_K = new Array("단순 수동태?", "진행 수동태?", "완료 수동태?");
const PASSIVE_TENSE_E = new Array("be p.p.", "be being p.p.", "have been p.p.");
const PASSIVE_SENTENCE_2K = new Array("행동되었다", "더해졌다", "조언받았다", "동의되었다", "대답되었다", "도착되었다", "요청되었다", "구워졌다", "되었다", "되었다", "시작되었다", "믿어졌다", "물렸다", "막아졌다", "빌려졌다", "깨뜨려졌다", "가져와졌다", "닦아졌다", "만들어졌다", "타졌다", "사졌다", "전화되었다", "보살펴졌다", "휴대되었다", "잡아졌다", "변경되었다", "확인되었다", "선택되었다");
const PASSIVE_TENSE_SIMPLE_PRESENT_K = new Array("행동되다", "더해지다", "조언받다", "동의되다", "대답되다", "도착되다", "요청되다", "구워지다", "되다", "되다", "시작되다", "믿어지다", "물리다", "막아지다", "빌려지다", "깨뜨려지다", "가져와지다", "닦아지다", "만들어지다", "타지다", "사지다", "전화되다", "보살펴지다", "휴대되다", "잡아지다", "변경되다", "확인되다", "선택되다");
const PASSIVE_TENSE_SIMPLE_PAST_K = new Array("행동되었다", "더해졌다", "조언받았다", "동의되었다", "대답되었다", "도착되었다", "요청되었다", "구워졌다", "되었다", "되었다", "시작되었다", "믿어졌다", "물렸다", "막아졌다", "빌려졌다", "깨뜨려졌다", "가져와졌다", "닦아졌다", "만들어졌다", "타졌다", "사졌다", "전화되었다", "보살펴졌다", "휴대되었다", "잡아졌다", "변경되었다", "확인되었다", "선택되었다");
const PASSIVE_TENSE_SIMPLE_FUTURE_K = new Array("행동될 것이다", "더해질 것이다", "조언받을 것이다", "동의될 것이다", "대답될 것이다", "도착될 것이다", "요청될 것이다", "구워질 것이다", "될 것이다", "될 것이다", "시작될 것이다", "믿어질 것이다", "물릴 것이다", "막아질 것이다", "빌려질 것이다", "깨뜨려질 것이다", "가져와질 것이다", "닦아질 것이다", "만들어질 것이다", "타질 것이다", "사질 것이다", "전화될 것이다", "보살펴질 것이다", "휴대될 것이다", "잡아질 것이다", "변경될 것이다", "확인될 것이다", "선택될 것이다");
const PASSIVE_TENSE_PROGRESSIVE_PRESENT_K = new Array("행동되고 있다", "더해지고 있다", "조언받고 있다", "동의되고 있다", "대답되고 있다", "도착되고 있다", "요청되고 있다", "구워지고 있다", "되고 있다", "되고 있다", "시작되고 있다", "믿어지고 있다", "물리고 있다", "막아지고 있다", "빌려지고 있다", "깨뜨려지고 있다", "가져와지고 있다", "닦아지고 있다", "만들어지고 있다", "타지고 있다", "사지고 있다", "전화되고 있다", "보살펴지고 있다", "휴대되고 있다", "잡아지고 있다", "변경되고 있다", "확인되고 있다", "선택되고 있다");
const PASSIVE_TENSE_PROGRESSIVE_PAST_K = new Array("행동되고 있었다", "더해지고 있었다", "조언받아지고 있었다", "동의되고 있었다", "대답되고 있었다", "도착되고 있었다", "요청되고 있었다", "구워지고 있었다", "되어지고 있었다", "되어지고 있었다", "시작되어지고 있었다", "믿어지고 있었다", "물리고 있었다", "막아지고 있었다", "빌려지고 있었다", "깨뜨려지고 있었다", "가져와지고 있었다", "닦아지고 있었다", "만들어지고 있었다", "타지고 있었다", "사지고 있었다", "전화되고 있었다", "보살펴지고 있었다", "휴대되고 있었다", "잡아지고 있었다", "변경되고 있었다", "확인되고 있었다", "선택되고 있었다");
const PASSIVE_TENSE_PERFECT_PRESENT_K = new Array("행동되어 왔다", "더해져 왔다", "조언되어 왔다", "동의되어 왔다", "대답되어 왔다", "도착되어 왔다", "요청되어 왔다", "구워지고 왔다", "되어 왔다", "되어 왔다", "시작되어 왔다", "믿어져 왔다", "물어 왔다", "막아지고 왔다", "빌려져 왔다", "깨뜨려져 왔다", "가져 왔다", "닦아져 왔다", "만들어져 왔다", "타져 왔다", "사져 왔다", "전화되어 왔다", "보살펴 왔다", "휴대되어 왔다", "잡아져 왔다", "변경되어 왔다", "확인되어 왔다", "선택되어 왔다");
const PASSIVE_TENSE_PERFECT_PAST_K = new Array("행동되어 왔었다", "더해져 왔었다", "조언되어 왔었다", "동의되어 왔었다", "대답되어 왔었다", "도착되어 왔었다", "요청되어 왔었다", "구워져 왔었다", "되어 왔었다", "되어 왔었다", "시작되어 왔었다", "믿어져 왔었다", "물어 왔었다", "막아져 왔었다", "빌려져 왔었다", "깨뜨려져 왔었다", "가져 왔었다", "닦아져 왔었다", "만들어져 왔었다", "타져 왔었다", "사져 왔었다", "전화되어 왔었다", "보살펴 왔었다", "휴대되어 왔었다", "잡아져 왔었다", "변경되어 왔었다", "확인되어 왔었다", "선택되어 왔었다");
const PASSIVE_TENSE_PERFECT_FUTURE_K = new Array("행동되어질 것이다", "더해질 것이다", "조언되어질 것이다", "동의되어질 것이다", "대답되어질 것이다", "도착되어질 것이다", "요청되어질 것이다", "구워질 것이다", "되어질 것이다", "되어질 것이다", "시작되어질 것이다", "믿어질 것이다", "물어질 것이다", "막아질 것이다", "빌려질 것이다", "깨뜨려질 것이다", "가져질 것이다", "닦아질 것이다", "만들어질 것이다", "타질 것이다", "사질 것이다", "전화되어질 것이다", "보살펴질 것이다", "휴대되어질 것이다", "잡아질 것이다", "변경되어질 것이다", "확인되어질 것이다", "선택되어질 것이다");
const PASSIVE_NO_OBJECTIVE_K = new Array("수동태 by 목적격 생략");
const PASSIVE_NO_OBJECTIVE_E = new Array("① 행위자가(you we they people 등) \n 막연한 일반인일 때 \n ② 행위자가 확실하지 않을 때 \n (누가 했는지 상관 없거나, 확실하지 않을 때)");
const PASSIVE_IDIOMATIC_PREP_K = new Array("로서 알려져 있다", "로 유명하다", "에게 알려져 있다", "로 가득 차 있다", "로 덮여 있다", "로 붐비다", "에 흥미가 있다", "에 대해 기뻐하다", "에 만족하다", "에 실망하다", "에 진저리가 나다");
const PASSIVE_IDIOMATIC_PREP_E = new Array("be known as ", "be known for ", "be known to ", "be filled with ", "be covered with ", "be crowded with ", "be interested in ", "be pleased with/about ", "be satisfied with ", "be disappointed with/at/in ", "be fed up with ");
const PASSIVE_IDIOMATIC_PREP_2K = new Array("로 만들어지다", "로 만들어지다", "로 만들어지다", "에 놀라다", "에 대해 들뜨다", "에 대해 걱정하다", "와 관련되어있다", "로 구성되어있다", "에 기초하다");
const PASSIVE_IDIOMATIC_PREP_2E = new Array("be made from ", "be made (out) of ", "be made into ", "be surprised at/by ", "be excited about ", "be worried/concerned about ", "be involved in ", "be composed of ", "be based on ");
const PASSIVE_SENTENCE_PATTERN_K = new Array("1형식 SV\n - 수동태 가능?", "2형식 SVC\n - 수동태 가능?", "3형식 SVO\n - 수동태 가능?", "4형식 SVOO\n - 수동태 가능?", "5형식 SVOC\n - 수동태 가능?");
const PASSIVE_SENTENCE_PATTERN_E = new Array("X", "X", "O", "O - 2개 가능", "O");
const PASSIVE_SENTENCE_PATTERN_4TH_K = new Array("보통은?", "사물(O2, 직목)이 주어면?", "사물(O2, 직목)만 주어인 경우?");
const PASSIVE_SENTENCE_PATTERN_4TH_E = new Array("사람/사물 주어 둘 다 가능", "사람(O1, 간목) 앞에 전치사 - to, for, of (보통 - to \n MBC개판 + choose, do - for \n ask inquire - of )", "MBC개판 + read write sell bring");
const PASSIVE_SENTENCE_PATTERN_5TH_K = new Array("C자리에 명/형은?", "C자리에 동사는?");
const PASSIVE_SENTENCE_PATTERN_5TH_E = new Array("그냥 쓴다", "사역/지각 동사 - 원형 부정사를 to부정사로 \n have - be asked to 부정사로 \n let - be allowed to 부정사로");
const VERB_NOT_PASSIVE_K = new Array("수동태 불가동사?", "수동태 불가동사1\n - 자동사?", "수동태 불가동사2\n - 상태/소유동사?");
const VERB_NOT_PASSIVE_E = new Array("자동사, 상태/소유동사", "arrive, rise, happen, (dis)appear, look", "have, meet, resemble, belong to, fit, lack, cost 등");
const PASSIVE_VERB_PHRASE_K = new Array("을 따라잡다", "을 수행하다", "을 없애다", "을 돌보다", "을 돌보다", "을 업신여기다", "을 비웃다", "(차로) 태워오다", "을 참다", "(차가) 을 치다", "을 칭찬(험담)하다", "을 이용하다", "을 켜다(끄다)");
const PASSIVE_VERB_PHRASE_E = new Array("catch up with ", "carry out ", "do away with ", "look after ", "take care of ", "look down on ", "laugh at ", "pick up", "put up with ", "run over ", "speak well(ill) of ", "take advantage of ", "turn on(off) ");
const PASSIVE_THAT_CLAUSE_OBJECT_K = new Array("");
const PASSIVE_THAT_CLAUSE_OBJECT_E = new Array("");

const INFINITIVE_K = new Array();
const TO_INFINITIVE_VS_TO_PREPOSITION_K = new Array();
const TO_INFINITIVE_E = new Array("act", "advise", "agree", "arrive", "ask", "bake", "begin", "believe", "break", "burn", "care", "change", "check", "choose", "climb", "come", "cook", "copy", "cross", "cry", "cut", "dance", "decide", "die", "do", "draw", "dream", "drink");
const TO_INFINITIVE_ING_E = new Array("acting", "advising", "agreeing", "arriving", "asking", "baking", "beginning", "believing", "breaking", "burning", "caring", "changing", "checking", "choosing", "climbing", "coming", "cooking", "copying", "crossing", "crying", "cutting", "dancing", "deciding", "dying", "doing", "drawing", "dreaming", "drinking");

// 형용사를 부사로 >>> "나쁘게", "기본적으로", "크게", "검은색으로", "파란색으로", "갈색으로", "특정하게", "싸게", "깨끗하게", "가까이", "다르게", "어렵게", "더러워서", "건조하게", "쉽게", "유명하게", "환상적으로", "좋아하며", "잘", "재미있게", "잘", "위대하게", "녹색으로", "회색으로", "무거운 상태로", "중요하게", "크게", "작게", "길게", "많이", "새롭게", "다음의", "멋지게", "나이들어서", "예쁘게", "빠르게", "조용하게", "준비되어", "빨간색으로", "슬프게", "안전하게", "같이", "짧게", "수줍게", "아프게", "느리게", "작게", "똑똑하게", "부드럽게", "일부로", "신맛으로", "키가 크게", "추하게", "따뜻하게", "젖은 상태로", "하얀색으로", "잘못되어", "노란색으로", "젊게"
const TO_INFINITIVE_AS_NOUN_3K = new Array("행동하게", "조언하게", "동의하게", "도착하게", "묻게", "굽게", "시작하게", "믿게", "깨뜨리게", "타게", "보살피게", "바꾸게", "확인하게", "선택하게", "오르게", "오게", "요리하게", "복사하게", "건너게", "울게", "자르게", "춤추게", "결정하게", "죽게", "하게", "그리게", "꿈꾸게", "마시게");
const TO_INFINITIVE_AS_NOUN_2K = new Array("행동하기", "조언하기", "동의하기", "도착하기", "묻기", "굽기", "시작하기", "믿기", "깨뜨리기", "타기", "보살피기", "바꾸기", "확인하기", "선택하기", "오르기", "오기", "요리하기", "복사하기", "건너기", "울기", "자르기", "춤추기", "결정하기", "죽기", "하기", "그리기", "꿈꾸기", "마시기");
const TO_INFINITIVE_AS_NOUN_K = new Array("행동하는 것", "조언하는 것", "동의하는 것", "도착하는 것", "묻는 것", "굽는 것", "시작하는 것", "믿는 것", "깨뜨리는 것", "타는 것", "보살피는 것", "바꾸는 것", "확인하는 것", "선택하는 것", "오르는 것", "오는 것", "요리하는 것", "복사하는 것", "건너는 것", "우는 것", "자르는 것", "춤추는 것", "결정하는 것", "죽는 것", "하는 것", "그리는 것", "꿈꾸는 것", "마시는 것");
const TO_INFINITIVE_AS_NOUN_E = new Array("to act", "to advise", "to agree", "to arrive", "to ask", "to bake", "to begin", "to believe", "to break", "to burn", "to care", "to change", "to check", "to choose", "to climb", "to come", "to cook", "to copy", "to cross", "to cry", "to cut", "to dance", "to decide", "to die", "to do", "to draw", "to dream", "to drink");
const TO_INFINITIVE_AS_NOUN_IT_TO_E = new Array("To act", "To advise", "To agree", "To arrive", "To ask", "To bake", "To begin", "To believe", "To break", "To burn", "To care", "To change", "To check", "To choose", "To climb", "To come", "To cook", "To copy", "To cross", "To cry", "To cut", "To dance", "To decide", "To die", "To do", "To draw", "To dream", "To drink");
const TO_INFINITIVE_AS_NOUN_INTERROGATIVE_K = new Array("누구를 ~할지", "무엇을 ~할지", "어디서 ~할지", "언제 ~할지", "어떻게 ~할지", "어느것을 ~할지");
const TO_INFINITIVE_AS_NOUN_INTERROGATIVE_E = new Array("who(m) to부정사", "what to부정사", "where to부정사", "when to부정사", "how to부정사", "which to부정사");
const TO_INFINITIVE_AS_NOUN_INTERROGATIVE_2K = new Array("누구를 ", "무엇을 ", "어디서 ", "언제 ", "어떻게 ", "어느 것을 ");
const TO_INFINITIVE_AS_NOUN_INTERROGATIVE_2E = new Array("who(m) to", "what to", "where to", "when to", "how to", "which to");
const TO_INFINITIVE_AS_NOUN_INTERROGATIVE_3K = new Array("행동할 지", "조언할 지", "동의할 지", "도착할 지", "물을 지", "구울 지", "시작할 지", "믿을 지", "깨뜨릴 지", "탈 지", "보살필 지", "바꿀 지", "확인할 지", "선택할 지", "오를 지", "올 지", "요리할 지", "복사할 지", "건널 지", "울 지", "자를 지", "춤출 지", "결정할 지", "죽을 지", "할 지", "그릴 지", "꿈꿀 지", "마실 지")
const TO_INFINITIVE_AS_ADJECTIVE_K = new Array("행동할", "조언할", "동의할", "도착할", "물을", "구울", "시작할", "믿을", "깨뜨릴", "탈", "보살필", "바꿀", "확인할", "선택할", "오를", "올", "요리할", "복사할", "건널", "울", "자를", "춤출", "결정할", "죽을", "할", "그릴", "꿈꿀", "마실");
const TO_INFINITIVE_AS_ADVERB_K = new Array("목적", "감정 ", "판단 ", "결과", "형용사 수식");
const TO_INFINITIVE_AS_ADVERB_E = new Array("~하기 위해", "~해서", "~하는 걸 보니", "~해서 ~하다", "~하기에");
const TO_INFINITIVE_AS_ADVERB_2K = new Array("행동하기에", "조언하기에", "동의하기에", "도착하기에", "묻기에", "굽기에", "시작하기에", "믿기에", "깨뜨리기에", "타기에", "보살피기에", "바꾸기에", "확인하기에", "선택하기에", "오르기에", "오기에", "요리하기에", "복사하기에", "건너기에", "울기에", "자르기에", "춤추기에", "결정하기에", "죽기에", "하기에", "그리기에", "꿈꾸기에", "마시기에");
const TO_INFINITIVE_AS_ADVERB_2E = new Array();
const INFINITIVE_USAGE_K = new Array();
const INFINITIVE_IDIOMATIC_EXPRESSION_K = new Array("~하기 위하여", "하기에");
const INFINITIVE_IDIOMATIC_EXPRESSION_E = new Array("in order to \n = so as to \n = to 부 : 목적", "too 형/부 to 부정사 \n = so 형/부 that 주어 cannot \n  형/부 enough to \n = so 형/부 that 주어 can ");
const INFINITIVE_IDIOMATIC_EXPRESSION_TOO_TO_K = new Array();
const INFINITIVE_IDIOMATIC_EXPRESSION_ENOUGH_TO_K = new Array();
const INFINITIVE_SENSE_SUBJECT_1_K = new Array("재미있다", "흥미롭다", "어렵다", "쉽다", "불가능하다", "가능하다", "중요하다", "위험하다", "안전하다", "평범하다", "힘들다", "필요하다", "최고다", "더 좋다", "바보같다");
const INFINITIVE_SENSE_SUBJECT_1_E = new Array("fun", "interesting", "difficult", "easy", "impossible", "possible", "important", "dangerous", "safe", "usual", "hard", "necessary", "best", "better", "foolish");
const INFINITIVE_SENSE_SUBJECT_2_K = new Array("친절하다", "현명하다", "예의바르다", "정직하다", "좋다", "영리하다", "관대하다", "어리석다", "바보같다", "무례하다", "부주의하다");
const INFINITIVE_SENSE_SUBJECT_2_E = new Array("kind", "wise", "polite", "honest", "nice", "clever", "generous", "foolish", "silly", "rude", "careless");
const INFINITIVE_NEGATIVE_SENSE_SUBJECT_TENSE_K = new Array("행동했던 것", "조언했던 것", "동의했던 것", "도착했던 것", "물었던 것", "구웠던 것", "시작했던 것", "믿었던 것", "깨뜨렸던 것", "탔던 것", "보살폈다던 것", "바꿨던 것", "확인했던 것", "선택했던 것", "올랐던 것", "왔던 것", "요리했던 것", "복사했던 것", "건넜던 것", "울었던 것", "잘랐던 것", "춤췄던 것", "결정했던 것", "죽었던 것", "했던 것", "그렸던 것", "꿈꿨던 것", "마셨던 것", "행동했을", "조언했을", "동의했을", "도착했을", "물었을", "구웠을", "시작했을", "믿었을", "깨뜨렸을", "탔을", "보살폈을", "바꿨을", "확인했을", "선택했을", "올랐을", "왔을", "요리했을", "복사했을", "건넜을", "울었을", "잘랐을", "춤췄을", "결정했을", "죽었을", "했을", "그렸을", "꿈꿨을", "마셨을", "행동했기에", "조언했기에", "동의했기에", "도착했기에", "물었기에", "구웠기에", "시작했기에", "믿었기에", "깨뜨렸기에", "탔기에", "보살폈기에", "바꿨기에", "확인했기에", "선택했기에", "올랐기에", "왔기에", "요리했기에", "복사했기에", "건넜기에", "울었기에", "잘랐기에", "춤췄기에", "결정했기에", "죽었기에", "했기에", "그렸기에", "꿈꿨기에", "마셨기에");
const INFINITIVE_NEGATIVE_SENSE_SUBJECT_TENSE_E = new Array("to have acted", "to have advised", "to have agreed", "to have arrived", "to have asked", "to have baked", "to have begun", "to have believed", "to have broken", "to have burned", "to have cared", "to have changed", "to have checked", "to have chosen", "to have climbed", "to have come", "to have cooked", "to have copied", "to have crossed", "to have cried", "to have cut", "to have danced", "to have decided", "to have died", "to have done", "to have drawn", "to have dreamed", "to have drunk", "to have acted", "to have advised", "to have agreed", "to have arrived", "to have asked", "to have baked", "to have begun", "to have believed", "to have broken", "to have burned", "to have cared", "to have changed", "to have checked", "to have chosen", "to have climbed", "to have come", "to have cooked", "to have copied", "to have crossed", "to have cried", "to have cut", "to have danced", "to have decided", "to have died", "to have done", "to have drawn", "to have dreamed", "to have drunk", "to have acted", "to have advised", "to have agreed", "to have arrived", "to have asked", "to have baked", "to have begun", "to have believed", "to have broken", "to have burned", "to have cared", "to have changed", "to have checked", "to have chosen", "to have climbed", "to have come", "to have cooked", "to have copied", "to have crossed", "to have cried", "to have cut", "to have danced", "to have decided", "to have died", "to have done", "to have drawn", "to have dreamed", "to have drunk");
const INFINITIVE_VERB_WITH_TO_K = new Array("원한다", "말한다", "요청한다", "조언한다", "하고 싶다", "얻는다", "기대한다", "원인이 된다", "격려한다", "명령한다", "강요한다");
const INFINITIVE_VERB_WITH_TO_E = new Array("want", "tell", "ask", "advise", "would like", "get", "expect", "cause", "encourage", "order", "force");
const INFINITIVE_VERB_WITH_TO_2E = new Array("to", "to", "to", "to", "to", "to", "to", "to", "to", "to", "to");
const INFINITIVE_VERB_WITH_TO_3E = new Array("wants", "tells", "asks", "advises", "would like", "gets", "expects", "causes", "encourages", "orders", "forces");
const INFINITIVE_COMPLEMENT_K = new Array("사역동사?", "준사역동사?", "지각동사?");
const INFINITIVE_COMPLEMENT_E = new Array("make, have, let", "help, get", "see, watch, hear, listen to, feel, notice");
const INFINITIVE_COMPLEMENT_CAUSATIVE_K = new Array("만든다", "시킨다", "한다");
const INFINITIVE_COMPLEMENT_CAUSATIVE_E = new Array("make", "have", "let");
const INFINITIVE_COMPLEMENT_CAUSATIVE_3E = new Array("makes", "has", "lets");
const INFINITIVE_COMPLEMENT_CAUSATIVE_2K = new Array("돕는다", "한다");
const INFINITIVE_COMPLEMENT_CAUSATIVE_2E = new Array("help", "get");
const INFINITIVE_COMPLEMENT_CAUSATIVE_23E = new Array("helps", "gets");
const INFINITIVE_COMPLEMENT_PERCEPTION_K = new Array("본다", "지켜본다", "듣는다", "듣는다", "느낀다", "알아차린다");
const INFINITIVE_COMPLEMENT_PERCEPTION_E = new Array("see", "watch", "hear", "listen to", "feel", "notice");
const INFINITIVE_COMPLEMENT_PERCEPTION_3E = new Array("sees", "watches", "hears", "listens to", "feels", "notices");
const INFINITIVE_BE_TO_K = new Array("예정", "의무", "가능", "운명", "의도");
const INFINITIVE_BE_TO_E = new Array("~할 예정이다", "~해야 한다", "~할 수 있다", "~할 운명이다", "~하려 하다");
const INFINITIVE_BE_TO_2K = new Array("예정 (~할 예정이다)", "의무 (~해야 한다)", "가능 (~할 수 있다)", "운명 (~할 운명이다)", "의도 (~하려 하다)");
const INFINITIVE_BE_TO_2E = new Array("will, be going to", "should, have to", "can, be able to", "be destined to", "intend to");
const INFINITIVE_BE_TO_aK = new Array("예정"); //~할 예정이다"
const INFINITIVE_BE_TO_bK = new Array("행동해야", "조언해야", "동의해야", "도착해야", "묻어야", "구워야", "시작해야", "믿어야", "깨뜨려야", "태워야", "보살펴야", "바꿔야", "확인해야", "선택해야", "올라야", "와야", "요리해야", "복사해야", "건너야", "울어야", "잘라야", "춤춰야", "결정해야", "죽어야", "해야", "그려야", "꿈꾸어야", "마셔야"); //"~해야 한다"
const INFINITIVE_BE_TO_cK = new Array("가능"); //"~할 수 있다"
const INFINITIVE_BE_TO_dK = new Array("운명"); //"~할 운명이다"
const INFINITIVE_BE_TO_eK = new Array("행동하려", "조언하려", "동의하려", "도착하려", "물으려", "구우려", "시작하려", "믿으려", "깨뜨리려", "태우려", "보살피려", "바꾸려", "확인하려", "선택하려", "오르려", "오려고", "요리하려", "복사하려", "건너려", "울려", "자르려", "춤추려", "결정하려", "죽으려", "하려", "그리려", "꿈꾸려", "마시려"); //"~하려 하다"

const INFINITIVE_INDEPENDENT_IDIOMATIC_EXPRESSION_K = new Array("말할 필요도 없이", "~은 말할 것도 없이", "~은 말할 것도 없이", "말하자면", "이상한 이야기지만", "우선, 먼저", "솔직히 말하면", "확실히", "간단히 말하면", "설상가상으로", "사실대로 말하면");
const INFINITIVE_INDEPENDENT_IDIOMATIC_EXPRESSION_E = new Array("needless to say", "not to mention", "not to speak of", "so to speak", "strange to say", "to begin with", "to be frank", "to be sure", "to make a long story short", "to make matters worse", "to tell the truth");

const COMPARATIVE_K = new Array();
const COMPARATIVE_ORIGINAL_K = new Array("비교구문 - 원급?");
const COMPARATIVE_ORIGINAL_E = new Array("A 만큼 형 / 부한 \n as 형 / 부 as A \n 	as 원급 as \n 애  원  애 \n not 애  원  애 \n not so  원  애 \n 배 애  원  애 \n 애  원  애 possible \n 애  원  애 S can");
const COMPARATIVE_COMPARATIVE_BASIC_K = new Array("빠른", "큰", "키가 큰", "무거운", "느린", "더 빠른", "더 큰", "더 키가 큰", "더 무거운", "더 느린");
const COMPARATIVE_COMPARATIVE_BASIC_E = new Array("fast", "big", "tall", "heavy", "slow", "faster", "bigger", "taller", "heavier", "slower");
const COMPARATIVE_COMPARATIVE_K = new Array("비교구문 - 비교급?", "비교급 강조?");
const COMPARATIVE_COMPARATIVE_E = new Array("A 보다 더 형/부한 \n 형 / 부er than A \n more 형 / 부   than A \n A 보다 덜 형 / 부한 \n less  원급    than A", "이머스마야 \n 이파스마야 \n even, far, still, much, a lot \n ‘훨씬’이라 해석 / ‘very’는 안됨");
const COMPARATIVE_SUPERATIVE_K = new Array("비교구문 - 최상급?");
const COMPARATIVE_SUPERATIVE_E = new Array("가장      형 / 부한 \n the       형 / 부 est \n the most 형 / 부  \n 인단수에 빠진 심청이 \n 오~복수하리라 \n in 단수 \n of / among 복수 \n (of 기간 - of the day / week / year) \n one of the 최상급 복명(단동) \n 가장 ~한 것들 중에 하나 \n the least 원급 명사  \n 가장~하지 않는 \n ");
const COMPARATIVE_COMPARATIVE_RULE_K = new Array("① 보통은?", "② e로 끝나면?", "③ cvc는?", "④ y앞에 자음이면?", "⑤ y앞에 모음이면?", "⑥ er/est말고 more/most?");
const COMPARATIVE_COMPARATIVE_RULE_E = new Array("형부er/the 형부est", "r/st", "cer/cest", "y-kill -ier/iest", "그냥 er/est", "대부분의 3음절, -풀 –어블 –리스 –어스 –이브 –잉 -ful -ble -less -ous –ive -ing 등으로 끝날 때");
const COMPARATIVE_COMPARATIVE_IRREGULAR_K = new Array("__________-better-best", "__________-better-best", "__________-worse-worst", "__________-worse-worst", "__________-more-most", "__________-more-most", "__________-less-least");
const COMPARATIVE_COMPARATIVE_IRREGULAR_E = new Array("good", "well", "bad(ly)", "ill", "many", "much", "little");
const COMPARATIVE_COMPARATIVE_IRREGULAR_2K = new Array("good-__________-best", "well-__________-best", "bad(ly)-__________-worst", "ill-__________-worst", "many-__________-most", "much-__________-most", "little-__________-least");
const COMPARATIVE_COMPARATIVE_IRREGULAR_2E = new Array("better", "better", "worse", "worse", "more", "more", "less");
const COMPARATIVE_COMPARATIVE_IRREGULAR_3K = new Array("good-better-__________", "well-better-__________", "bad(ly)-worse-__________", "ill-worse-__________", "many-more-__________", "much-more-__________", "little-less-__________");
const COMPARATIVE_COMPARATIVE_IRREGULAR_3E = new Array("best", "best", "worst", "worst", "most", "most", "least");
const COMPARATIVE_COMPARATIVE_IRREGULAR_4K = new Array("낡은", "손위", "거리", "정도", "시간", "순서");
const COMPARATIVE_COMPARATIVE_IRREGULAR_4E = new Array("old-older-oldest", "old-elder-eldest", "far-farther-farthest", "far-further-furthest", "late-later-latest", "late-latter-last");
const COMPARATIVE_IDIOMATIC_EXPRESSION_K = new Array("~하면 할수록, 더욱 ~한", "점점 더 ~한", "점점 더 ~한", "점점 더 ~한");
const COMPARATIVE_IDIOMATIC_EXPRESSION_E = new Array("The 비교급 S+V, the 비교급 S+V", "get 비교급 and 비교급", "비교급 and 비교급", "more and more 원급");
const COMPARATIVE_VARIOUS_EXPRESSION_K = new Array("원급으로 비교급", "원급/비교급으로 최상급");
const COMPARATIVE_VARIOUS_EXPRESSION_E = new Array("    A 보다 덜 형/부 한 \n not 애 원급 애  A \n less  원급 than A", "비교급  any   other 단명 \n 비교급 all the other 복명 \n no other 단명  비교 \n no other 단명 애원애 \n There is no ");
const COMPARATIVE_COMPARATIVE_TO_NOT_THAN_K = new Array("~보다 나은", "~보다 열등한", "~보다 앞선", "~보다 어린", "~보다 손위인");
const COMPARATIVE_COMPARATIVE_TO_NOT_THAN_E = new Array("superior to ", "inferior to ", "prior to ", "junior to ", "senior to ");
const COMPARATIVE_COMPARATIVE_TO_NOT_THAN_2K = new Array("보다 낫다", "보다 열등하다", "보다 앞서있다", "보다 어리다", "보다 손위이다");



const RELATIVES_K = new Array();
const RELATIVES_ADJECTIVE_E = new Array("fast", "brave", "good", "bad", "loud", "quiet", "smart", "stupid", "kind", "generous", "weak", "old", "right", "beautiful", "ugly", "dangerous",);
const RELATIVES_ADJECTIVE_K = new Array("빠른", "용감한", "좋은", "나쁜", "시끄러운", "조용한", "똑똑한", "어리석은", "친절한", "관대한", "약한", "늙은", "옳은", "아름다운", "추한", "위험한");
const RELATIVES_ADJECTIVE_2K = new Array("빠르다", "용감하다", "좋다", "나쁘다", "시끄럽다", "조용하다", "똑똑하다", "어리석다", "친절하다", "관대하다", "약하다", "늙다", "옳다", "아름답다", "추하다", "위험하다");
const RELATIVES_ADJECTIVE__2K = new Array("빨라요", "용감해요", "좋아요", "나빠요", "시끄러워요", "조용해요", "똑똑해요", "어리석어요", "친절해요", "관대해요", "약해요", "늙어요", "옳아요", "아름다워요", "추해요", "위험해요");
const RELATIVES_ADJECTIVE_3K = new Array();
const RELATIVE_PRONOUN_USAGE_K = new Array();
const RELATIVE_PRONOUN_WHO_WHICH_THAT_K = new Array();
const RELATIVE_PRONOUN_THAT_K = new Array();
//Interrogative Sentences (Questions) 질문 문장
// Requests 요청
// Opinions 의견
// Uncertainty/Confusion 불확실성/혼란
// Expressions of Surprise/Disbelief 놀람/의심 표현
// Curiosity/Interest 호기심/관심

//클릭된 코드 만들기 showMe
// const showMe = document.getElementById('showMe');
// showMe.classList.add('clicked');


const RELATIVE_PRONOUN_WHAT_K = new Array();
const RELATIVE_PRONOUN_OMIT_K = new Array();
const DEFINING_RELATIVE_CLAUSE_K = new Array();
const RELATIVE_PRONOUN_WITH_PREP_K = new Array();
const RELATIVE_ADVERB_K = new Array("the place", "the time", "the reason", "the way", "장소", "시간", "이유", "방법");
const RELATIVE_ADVERB_E = new Array("where", "when", "why", "(how)", "where", "when", "why", "how");
const RELATIVE_ADVERB_2K = new Array("where", "when", "why", "how");
const RELATIVE_ADVERB_2E = new Array("in/on/at which", "in/at/to which", "for which", "in which");
const RELATIVE_ADVERB_2Kv2 = new Array("어디에서", "언제", "왜", "어떻게");
const RELATIVE_ADVERB_2Ev2 = new Array("Where", "When", "Why", "How");
const DEFINING_RELATIVE_CLAUSE_2K = new Array();
const RELATIVE_ADVERB_ANTECEDENT_K = new Array();
const COMPOUND_RELATIVE_PRONOUN_K = new Array(" 누구든지 ", " 어느 것이든지 ", " 무엇이든지 ");
const COMPOUND_RELATIVE_PRONOUN_E = new Array("Whoever", "Whichever", "Whatever");
const COMPOUND_RELATIVE_PRONOUN_2K = new Array(" 누가 ", " 어느 것이 ", " 무엇이 ");
const COMPOUND_RELATIVE_ADVERB_K = new Array(" 언제든지 ", " 어디든지 ");
const COMPOUND_RELATIVE_ADVERB_E = new Array("Whenever", "Wherever");
const COMPOUND_RELATIVE_ADVERB_2K = new Array(" 언제 ", " 어디에서 ", " 아무리 ");
const COMPOUND_RELATIVE_ADVERB_2E = new Array("Whenever", "Wherever", "However");
const COMPOUND_RELATIVES_K = new Array();






const SUBJUNCTIVE_K = new Array();
const SUBJUNCTIVE_AUXILIARY_K = new Array("~할 텐데", "~해야 할 텐데", "~할 수 있을 텐데", "아마도 ~할 텐데");
const SUBJUNCTIVE_AUXILIARY_E = new Array("would", "should", "could", "might");
const SUBJUNCTIVE_AUXILIARY_COULD_K = new Array("행동할 수 있을 텐데", "조언할 수 있을 텐데", "동의할 수 있을 텐데", "도착할 수 있을 텐데", "물어볼 수 있을 텐데", "구울 수 있을 텐데", "시작할 수 있을 텐데", "믿을 수 있을 텐데", "깨뜨릴 수 있을 텐데", "탈 수 있을 텐데", "보살필 수 있을 텐데", "바꿀 수 있을 텐데", "확인할 수 있을 텐데", "선택할 수 있을 텐데", "오를 수 있을 텐데", "올 수 있을 텐데", "요리할 수 있을 텐데", "복사할 수 있을 텐데", "건널 수 있을 텐데", "울 수 있을 텐데", "자를 수 있을 텐데", "춤출 수 있을 텐데", "결정할 수 있을 텐데", "죽을 수 있을 텐데", "할 수 있을 텐데", "그릴 수 있을 텐데", "꿈꿀 수 있을 텐데", "마실 수 있을 텐데", "운전할 수 있을 텐데", "떨어뜨릴 수 있을 텐데", "먹을 수 있을 텐데", "끝날 수 있을 텐데", "들어갈 수 있을 텐데", "운동할 수 있을 텐데", "실패할 수 있을 텐데", "떨어질 수 있을 텐데", "느낄 수 있을 텐데", "싸울 수 있을 텐데", "마칠 수 있을 텐데", "고정할 수 있을 텐데", "날 수 있을 텐데", "집중할 수 있을 텐데", "잊을 수 있을 텐데", "형성할 수 있을 텐데", "튀길 수 있을 텐데", "갈 수 있을 텐데", "자랄 수 있을 텐데", "추측할 수 있을 텐데", "걸 수 있을 텐데", "도울 수 있을 텐데", "칠 수 있을 텐데", "잡을 수 있을 텐데", "희망할 수 있을 텐데", "서두를 수 있을 텐데", "참여할 수 있을 텐데", "계속할 수 있을 텐데", "찰 수 있을 텐데", "알 수 있을 텐데", "거짓말 할 수 있을 텐데", "들을 수 있을 텐데", "살 수 있을 텐데", "볼 수 있을 텐데", "사랑할 수 있을 텐데", "움직일 수 있을 텐데", "열 수 있을 텐데", "통과할 수 있을 텐데", "지불할 수 있을 텐데", "놀 수 있을 텐데", "밀 수 있을 텐데", "읽을 수 있을 텐데", "돌아갈 수 있을 텐데", "달릴 수 있을 텐데", "노래할 수 있을 텐데", "앉을 수 있을 텐데", "잘 수 있을 텐데", "냄새날 수 있을 텐데", "미소지을 수 있을 텐데", "말할 수 있을 텐데", "일어설 수 있을 텐데", "시작할 수 있을 텐데", "머무를 수 있을 텐데", "멈출 수 있을 텐데", "수영할 수 있을 텐데", "말할 수 있을 텐데", "이야기할 수 있을 텐데", "여행할 수 있을 텐데", "노력할 수 있을 텐데", "돌릴 수 있을 텐데", "방문할 수 있을 텐데", "기다릴 수 있을 텐데", "깰 수 있을 텐데", "걸을 수 있을 텐데", "씻을 수 있을 텐데", "입을 수 있을 텐데", "이길 수 있을 텐데", "바랄 수 있을 텐데", "일할 수 있을 텐데", "걱정할 수 있을 텐데", "쓸 수 있을 텐데", "울릴 수 있을 텐데", "가라앉을 수 있을 텐데", "먹일 수 있을 텐데", "쏠 수 있을 텐데", "이끌 수 있을 텐데", "기다릴 수 있을 텐데", "바닥을 쓸 수 있을 텐데", "울 수 있을 텐데", "떠날 수 있을 텐데", "구부릴 수 있을 텐데", "잃을 수 있을 텐데", "감을 수 있을 텐데", "미끄러질 수 있을 텐데", "팔 수 있을 텐데", "빛날 수 있을 텐데", "돌 수 있을 텐데", "때릴 수 있을 텐데", "깨울 수 있을 텐데", "낳을 수 있을 텐데", "찢을 수 있을 텐데", "얼 수 있을 텐데", "훔칠 수 있을 텐데", "불 수 있을 텐데", "던질 수 있을 텐데", "탈 수 있을 텐데", "오를 수 있을 텐데", "흔들 수 있을 텐데");
const SUBJUNCTIVE_AUXILIARY_COULD_HAVE_K = new Array(
  "행동할 수 있었을 텐데", "조언할 수 있었을 텐데", "동의할 수 있었을 텐데", "도착할 수 있었을 텐데", "물어볼 수 있었을 텐데", "구울 수 있었을 텐데", "시작할 수 있었을 텐데", "믿을 수 있었을 텐데", "깨뜨릴 수 있었을 텐데", "탈 수 있었을 텐데", "보살필 수 있었을 텐데", "바꿀 수 있었을 텐데", "확인할 수 있었을 텐데", "선택할 수 있었을 텐데", "오를 수 있었을 텐데", "올 수 있었을 텐데", "요리할 수 있었을 텐데", "복사할 수 있었을 텐데", "건널 수 있었을 텐데", "울 수 있었을 텐데", "자를 수 있었을 텐데", "춤출 수 있었을 텐데", "결정할 수 있었을 텐데", "죽을 수 있었을 텐데", "할 수 있었을 텐데", "그릴 수 있었을 텐데", "꿈꿀 수 있었을 텐데", "마실 수 있었을 텐데", "운전할 수 있었을 텐데", "떨어뜨릴 수 있었을 텐데", "먹을 수 있었을 텐데", "끝낼 수 있었을 텐데", "들어갈 수 있었을 텐데", "운동할 수 있었을 텐데", "실패할 수 있었을 텐데", "떨어질 수 있었을 텐데", "느낄 수 있었을 텐데", "싸울 수 있었을 텐데", "마칠 수 있었을 텐데", "고정할 수 있었을 텐데", "날 수 있었을 텐데", "집중할 수 있었을 텐데", "잊을 수 있었을 텐데", "형성할 수 있었을 텐데", "튀길 수 있었을 텐데", "갈 수 있었을 텐데", "자랄 수 있었을 텐데", "추측할 수 있었을 텐데", "걸 수 있었을 텐데", "도울 수 있었을 텐데", "칠 수 있었을 텐데", "잡을 수 있었을 텐데", "희망할 수 있었을 텐데", "서두를 수 있었을 텐데", "참여할 수 있었을 텐데", "계속할 수 있었을 텐데", "찰 수 있었을 텐데", "알 수 있었을 텐데", "거짓말 할 수 있었을 텐데", "들을 수 있었을 텐데", "살 수 있었을 텐데", "볼 수 있었을 텐데", "사랑할 수 있었을 텐데", "움직일 수 있었을 텐데", "열 수 있었을 텐데", "통과할 수 있었을 텐데", "지불할 수 있었을 텐데", "놀 수 있었을 텐데", "밀 수 있었을 텐데", "읽을 수 있었을 텐데", "돌아갈 수 있었을 텐데", "달릴 수 있었을 텐데", "노래할 수 있었을 텐데", "앉을 수 있었을 텐데", "잘 수 있었을 텐데", "냄새날 수 있었을 텐데", "미소지을 수 있었을 텐데", "말할 수 있었을 텐데", "일어설 수 있었을 텐데", "시작할 수 있었을 텐데", "머무를 수 있었을 텐데", "멈출 수 있었을 텐데", "수영할 수 있었을 텐데", "말할 수 있었을 텐데", "이야기할 수 있었을 텐데", "여행할 수 있었을 텐데", "노력할 수 있었을 텐데", "돌릴 수 있었을 텐데", "방문할 수 있었을 텐데", "기다릴 수 있었을 텐데", "깰 수 있었을 텐데", "걸을 수 있었을 텐데", "씻을 수 있었을 텐데", "입을 수 있었을 텐데", "이길 수 있었을 텐데", "바랄 수 있었을 텐데", "일할 수 있었을 텐데", "걱정할 수 있었을 텐데", "쓸 수 있었을 텐데", "울릴 수 있었을 텐데", "가라앉을 수 있었을 텐데", "먹일 수 있었을 텐데", "쏠 수 있었을 텐데", "이끌 수 있었을 텐데", "기다릴 수 있었을 텐데", "바닥을 쓸 수 있었을 텐데", "울 수 있었을 텐데", "떠날 수 있었을 텐데", "구부릴 수 있었을 텐데", "잃을 수 있었을 텐데", "감을 수 있었을 텐데", "미끄러질 수 있었을 텐데", "팔 수 있었을 텐데", "빛날 수 있었을 텐데", "돌 수 있었을 텐데", "때릴 수 있었을 텐데", "깨울 수 있었을 텐데", "낳을 수 있었을 텐데", "찢을 수 있었을 텐데", "얼 수 있었을 텐데", "훔칠 수 있었을 텐데", "불 수 있었을 텐데", "던질 수 있었을 텐데", "탈 수 있었을 텐데", "오를 수 있었을 텐데", "흔들 수 있었을 텐데");
const SUBJUNCTIVE_AUXILIARY_WOULD_K = new Array("행동할 텐데", "조언할 텐데", "동의할 텐데", "도착할 텐데", "물어볼 텐데", "구울 텐데", "시작할 텐데", "믿을 텐데", "깨뜨릴 텐데", "탈 텐데", "보살필 텐데", "바꿀 텐데", "확인할 텐데", "선택할 텐데", "오를 텐데", "올 텐데", "요리할 텐데", "복사할 텐데", "건널 텐데", "울 텐데", "자를 텐데", "춤출 텐데", "결정할 텐데", "죽을 텐데", "할 텐데", "그릴 텐데", "꿈꿀 텐데", "마실 텐데", "운전할 텐데", "떨어뜨릴 텐데", "먹을 텐데", "끝날 텐데", "들어갈 텐데", "운동할 텐데", "실패할 텐데", "떨어질 텐데", "느낄 텐데", "싸울 텐데", "마칠 텐데", "고정할 텐데", "날 텐데", "집중할 텐데", "잊을 텐데", "형성할 텐데", "튀길 텐데", "갈 텐데", "자랄 텐데", "추측할 텐데", "걸 텐데", "도울 텐데", "칠 텐데", "잡을 텐데", "희망할 텐데", "서두를 텐데", "참여할 텐데", "계속할 텐데", "찰 텐데", "알 텐데", "거짓말 할 텐데", "들을 텐데", "살 텐데", "볼 텐데", "사랑할 텐데", "움직일 텐데", "열 텐데", "통과할 텐데", "지불할 텐데", "놀 텐데", "밀 텐데", "읽을 텐데", "돌아갈 텐데", "달릴 텐데", "노래할 텐데", "앉을 텐데", "잘 텐데", "냄새날 텐데", "미소지을 텐데", "말할 텐데", "일어설 텐데", "시작할 텐데", "머무를 텐데", "멈출 텐데", "수영할 텐데", "말할 텐데", "이야기할 텐데", "여행할 텐데", "노력할 텐데", "돌릴 텐데", "방문할 텐데", "기다릴 텐데", "깰 텐데", "걸 텐데", "씻을 텐데", "입을 텐데", "이길 텐데", "바랄 텐데", "일할 텐데", "걱정할 텐데", "쓸 텐데", "울릴 텐데", "가라앉을 텐데", "먹일 텐데", "쏠 텐데", "이끌 텐데", "기다릴 텐데", "바닥을 쓸 텐데", "울 텐데", "떠날 텐데", "구부릴 텐데", "잃을 텐데", "감을 텐데", "미끄러질 텐데", "팔 텐데", "빛날 텐데", "돌 텐데", "때릴 텐데", "깨울 텐데", "낳을 텐데", "찢을 텐데", "얼 텐데", "훔칠 텐데", "불 텐데", "던질 텐데", "탈 텐데", "오를 텐데", "흔들 텐데");
const SUBJUNCTIVE_AUXILIARY_WOULD_HAVE_K = new Array("행동했을 텐데", "조언했을 텐데", "동의했을 텐데", "도착했을 텐데", "물어봤을 텐데", "구웠을 텐데", "시작했을 텐데", "믿었을 텐데", "깨뜨렸을 텐데", "탈 텐데", "보살펴줬을 텐데", "바꿨을 텐데", "확인했을 텐데", "선택했을 텐데", "올랐을 텐데", "왔을 텐데", "요리했을 텐데", "복사했을 텐데", "건넜을 텐데", "울었을 텐데", "잘랐을 텐데", "춤췄을 텐데", "결정했을 텐데", "죽었을 텐데", "했을 텐데", "그렸을 텐데", "꿈꿨을 텐데", "마셨을 텐데", "운전했을 텐데", "떨어뜨렸을 텐데", "먹었을 텐데", "끝냈을 텐데", "들어갔을 텐데", "운동했을 텐데", "실패했을 텐데", "떨어졌을 텐데", "느꼈을 텐데", "싸웠을 텐데", "마쳤을 텐데", "고정했을 텐데", "날렸을 텐데", "집중했을 텐데", "잊었을 텐데", "형성했을 텐데", "튀긴 텐데", "갔을 텐데", "자랐을 텐데", "추측했을 텐데", "걸었을 텐데", "도왔을 텐데", "칠했을 텐데", "잡았을 텐데", "희망했을 텐데", "서둘렀을 텐데", "참여했을 텐데", "계속했을 텐데", "찼을 텐데", "알았을 텐데", "거짓말했을 텐데", "들었을 텐데", "살았을 텐데", "봤을 텐데", "사랑했을 텐데", "움직였을 텐데", "열었을 텐데", "통과했을 텐데", "지불했을 텐데", "놀았을 텐데", "밀었을 텐데", "읽었을 텐데", "돌아갔을 텐데", "달렸을 텐데", "노래했을 텐데", "앉았을 텐데", "잤을 텐데", "냄새났을 텐데", "미소 지었을 텐데", "말했을 텐데", "일어났을 텐데", "시작했을 텐데", "머무를 텐데", "멈췄을 텐데", "수영했을 텐데", "말했을 텐데", "이야기했을 텐데", "여행했을 텐데", "노력했을 텐데", "돌렸을 텐데", "방문했을 텐데", "기다렸을 텐데", "깨웠을 텐데", "걸었을 텐데", "씻었을 텐데", "입었을 텐데", "이겼을 텐데", "바랐을 텐데", "일했을 텐데", "걱정했을 텐데", "썼을 텐데", "울렸을 텐데", "가라앉았을 텐데", "먹였을 텐데", "쐈을 텐데", "이끌었을 텐데", "기다렸을 텐데", "바닥을 썼을 텐데", "울었을 텐데", "떠났을 텐데", "구부렸을 텐데", "잃었을 텐데", "감았을 텐데", "미끄러졌을 텐데", "팔았을 텐데", "빛났을 텐데", "돌았을 텐데", "때렸을 텐데", "깨웠을 텐데", "났을 텐데", "찢었을 텐데", "얼었을 텐데", "훔쳤을 텐데", "붙었을 텐데", "던졌을 텐데", "탔을 텐데", "올랐을 텐데", "흔들었을 텐데");
const SUBJUNCTIVE_AUXILIARY_SHOULD_K = new Array("행동해야 할 텐데", "조언해야 할 텐데", "동의해야 할 텐데", "도착해야 할 텐데", "물어봐야 할 텐데", "구워야 할 텐데", "시작해야 할 텐데", "믿어야 할 텐데", "깨뜨려야 할 텐데", "타야 할 텐데", "보살펴야 할 텐데", "바꿔야 할 텐데", "확인해야 할 텐데", "선택해야 할 텐데", "오르야 할 텐데", "올라야 할 텐데", "요리해야 할 텐데", "복사해야 할 텐데", "건너야 할 텐데", "울어야 할 텐데", "잘라야 할 텐데", "춤춰야 할 텐데", "결정해야 할 텐데", "죽어야 할 텐데", "해야 할 텐데", "그려야 할 텐데", "꿈꾸어야 할 텐데", "마셔야 할 텐데", "운전해야 할 텐데", "떨어뜨려야 할 텐데", "먹어야 할 텐데", "끝내야 할 텐데", "들어가야 할 텐데", "운동해야 할 텐데", "실패해야 할 텐데", "떨어져야 할 텐데", "느껴야 할 텐데", "싸워야 할 텐데", "마무리해야 할 텐데", "고정해야 할 텐데", "날아야 할 텐데", "집중해야 할 텐데", "잊어야 할 텐데", "형성해야 할 텐데", "튀겨야 할 텐데", "가야 할 텐데", "자라야 할 텐데", "추측해야 할 텐데", "걸어야 할 텐데", "도와야 할 텐데", "칠해야 할 텐데", "잡아야 할 텐데", "희망해야 할 텐데", "서둘러야 할 텐데", "참여해야 할 텐데", "계속해야 할 텐데", "차려야 할 텐데", "알아야 할 텐데", "거짓말해야 할 텐데", "들어야 할 텐데", "살아야 할 텐데", "봐야 할 텐데", "사랑해야 할 텐데", "움직여야 할 텐데", "열어야 할 텐데", "통과해야 할 텐데", "지불해야 할 텐데", "놀아야 할 텐데", "밀어야 할 텐데", "읽어야 할 텐데", "돌아가야 할 텐데", "달려야 할 텐데", "노래해야 할 텐데", "앉아야 할 텐데", "잘해야 할 텐데", "냄새가 날 텐데", "미소지을 텐데", "말해야 할 텐데", "일어서야 할 텐데", "시작해야 할 텐데", "머무를 텐데", "멈춰야 할 텐데", "수영해야 할 텐데", "말해야 할 텐데", "이야기해야 할 텐데", "여행해야 할 텐데", "노력해야 할 텐데", "돌려야 할 텐데", "방문해야 할 텐데", "기다려야 할 텐데", "깨야 할 텐데", "걸어야 할 텐데", "씻어야 할 텐데", "입어야 할 텐데", "이기야 할 텐데", "바라야 할 텐데", "일해야 할 텐데", "걱정해야 할 텐데", "써야 할 텐데", "울려야 할 텐데", "가라앉아야 할 텐데", "먹여야 할 텐데", "쏘아야 할 텐데", "이끌어야 할 텐데", "기다려야 할 텐데", "바닥을 쓰러야 할 텐데", "울야 할 텐데", "떠나야 할 텐데", "구부려야 할 텐데", "잃어야 할 텐데", "감아야 할 텐데", "미끄러져야 할 텐데", "팔아야 할 텐데", "빛나야 할 텐데", "돌아야 할 텐데", "때려야 할 텐데", "깨워야 할 텐데", "낳아야 할 텐데", "찢어야 할 텐데", "얼어야 할 텐데", "훔쳐야 할 텐데", "불어야 할 텐데", "던져야 할 텐데", "타야 할 텐데", "올라야 할 텐데", "흔들어야 할 텐데");
const SUBJUNCTIVE_AUXILIARY_SHOULD_HAVE_K = new Array("행동해야 했을 텐데", "조언해야 했을 텐데", "동의해야 했을 텐데", "도착해야 했을 텐데", "물어봐야 했을 텐데", "구워야 했을 텐데", "시작해야 했을 텐데", "믿어야 했을 텐데", "깨뜨려야 했을 텐데", "타야 했을 텐데", "보살펴야 했을 텐데", "바꿔야 했을 텐데", "확인해야 했을 텐데", "선택해야 했을 텐데", "오르야 했을 텐데", "올라야 했을 텐데", "요리해야 했을 텐데", "복사해야 했을 텐데", "건너야 했을 텐데", "울어야 했을 텐데", "잘라야 했을 텐데", "춤춰야 했을 텐데", "결정해야 했을 텐데", "죽어야 했을 텐데", "해야 했을 텐데", "그려야 했을 텐데", "꿈꾸어야 했을 텐데", "마셔야 했을 텐데", "운전해야 했을 텐데", "떨어뜨려야 했을 텐데", "먹어야 했을 텐데", "끝내야 했을 텐데", "들어가야 했을 텐데", "운동해야 했을 텐데", "실패해야 했을 텐데", "떨어져야 했을 텐데", "느껴야 했을 텐데", "싸워야 했을 텐데", "마무리해야 했을 텐데", "고정해야 했을 텐데", "날아야 했을 텐데", "집중해야 했을 텐데", "잊어야 했을 텐데", "형성해야 했을 텐데", "튀겨야 했을 텐데", "가야 했을 텐데", "자라야 했을 텐데", "추측해야 했을 텐데", "걸어야 했을 텐데", "도와야 했을 텐데", "칠해야 했을 텐데", "잡아야 했을 텐데", "희망해야 했을 텐데", "서둘러야 했을 텐데", "참여해야 했을 텐데", "계속해야 했을 텐데", "차려야 했을 텐데", "알아야 했을 텐데", "거짓말해야 했을 텐데", "들어야 했을 텐데", "살아야 했을 텐데", "봐야 했을 텐데", "사랑해야 했을 텐데", "움직여야 했을 텐데", "열어야 했을 텐데", "통과해야 했을 텐데", "지불해야 했을 텐데", "놀아야 했을 텐데", "밀어야 했을 텐데", "읽어야 했을 텐데", "돌아가야 했을 텐데", "달려야 했을 텐데", "노래해야 했을 텐데", "앉아야 했을 텐데", "잘해야 했을 텐데", "냄새낼 텐데", "미소짓을 텐데", "말해야 했을 텐데", "일어서야 했을 텐데", "시작해야 했을 텐데", "머무를 텐데", "멈춰야 했을 텐데", "수영해야 했을 텐데", "말해야 했을 텐데", "이야기해야 했을 텐데", "여행해야 했을 텐데", "노력해야 했을 텐데", "돌려야 했을 텐데", "방문해야 했을 텐데", "기다려야 했을 텐데", "깨야 했을 텐데", "걸어야 했을 텐데", "씻어야 했을 텐데", "입어야 했을 텐데", "이기야 했을 텐데", "바라야 했을 텐데", "일해야 했을 텐데", "걱정해야 했을 텐데", "써야 했을 텐데", "울려야 했을 텐데", "가라앉아야 했을 텐데", "먹여야 했을 텐데", "쏘아야 했을 텐데", "이끌어야 했을 텐데", "기다려야 했을 텐데", "바닥을 쓰러야 했을 텐데", "울야 했을 텐데", "떠나야 했을 텐데", "구부려야 했을 텐데", "잃어야 했을 텐데", "감아야 했을 텐데", "미끄러져야 했을 텐데", "팔아야 했을 텐데", "빛나야 했을 텐데", "돌아야 했을 텐데", "때려야 했을 텐데", "깨워야 했을 텐데", "낳아야 했을 텐데", "찢어야 했을 텐데", "얼어야 했을 텐데", "훔쳐야 했을 텐데", "불어야 했을 텐데", "던져야 했을 텐데", "타야 했을 텐데", "올라야 했을 텐데", "흔들어야 했을 텐데");
const SUBJUNCTIVE_AUXILIARY_MIGHT_K = SUBJUNCTIVE_AUXILIARY_WOULD_K
const SUBJUNCTIVE_AUXILIARY_MIGHT_HAVE_K = SUBJUNCTIVE_AUXILIARY_WOULD_HAVE_K
const SUBJUNCTIVE_PAST_K = new Array("가정법 과거?");
const SUBJUNCTIVE_PAST_E = new Array("현재 사실 반대 가정 \n 만일 ~라면, ~일텐데 \n If S 과거동사, S 우슈쿠마 동사원형 \n 우슈쿠마 would should could might");
const SUBJUNCTIVE_PAST_PERFECT_K = new Array("가정법 과거 완료?");
const SUBJUNCTIVE_PAST_PERFECT_E = new Array("과거 사실 반대 가정 \n 만일 ~했더라면, ~했을텐데 \n If S had p.p., S 우슈쿠마 have p.p.");
const SUBJUNCTIVE_I_WISH_K = new Array("좋을텐데", "~라면 좋을텐데", "~했다면 좋을텐데");
const SUBJUNCTIVE_I_WISH_E = new Array("I wish ", "I wish S 과거", "I wish S 과거 완료");
const SUBJUNCTIVE_AS_IF_K = new Array("마치 ~인 것처럼", "마치 ~였던 것처럼");
const SUBJUNCTIVE_AS_IF_E = new Array("as if S 과거", "as if S 과거 완료");
const SUBJUNCTIVE_MIXED_K = new Array("- (과거) ~했더라면, \n (현재) ~할 텐데");
const SUBJUNCTIVE_MIXED_E = new Array("If S had p.p.,\n S 우슈쿠마 동사원형");
const SUBJUNCTIVE_PRESENT_K = new Array("만약 ~라면, ~한다", "만약 ~라면, ~할 수 있다", "만약 ~라면, ~할지도 모른다");
const SUBJUNCTIVE_PRESENT_E = new Array("If S 현재, S will 동사원형", "If S 현재, S can 동사원형", "If S 현재, S may 동사원형");
const SUBJUNCTIVE_FUTURE_K = new Array("만약 ~라면, ~할 것이다");
const SUBJUNCTIVE_FUTURE_E = new Array("If S should 동사원형, S V");
const SUBJUNCTIVE_SUGGEST_K = new Array("요구", "주장", "제안", "명령");
const SUBJUNCTIVE_SUGGEST_E = new Array("demand/require that S (should) 동사원형", "insist that S (should) 동사원형", "suggest/propse/advise/recommend that S (should) 동사원형", "order that S (should) 동사원형");
const SUBJUNCTIVE_OTHERS_K = new Array("if 생략", "A가 없다면", "A가 없었다면", "~할 때이다");
const SUBJUNCTIVE_OTHERS_E = new Array("의문문 순서로 \n= were, should, had를 맨 앞", "without A = but for A \n= were it not for A \n= if it were not for A", "without A = but for A \n= had it not been for A \n= if it had not been for A", "It’s time that S 과거 / 슈 동사원형 ");

const INTERROGATIVE_K = new Array("의문사", "의문문");
const INTERROGATIVE_E = new Array("물어볼 때 쓰는 단어", "물어볼 때 쓰는 문장");
const INTERROGATIVE_Ka = new Array("누구", "무엇(뭐)", "어디", "언제", "왜", "어떻게", "누구의");
const INTERROGATIVE_Ea = new Array("Who", "What", "Where ", "When", "Why ", "How", "Whose");
const INTERROGATIVE_USAGE_K = new Array("be/조동사로 시작", "Wh-로 시작");
const INTERROGATIVE_USAGE_E = new Array("Yes/No로 대답한다", "Yes/No로 대답하지 않는다");
const INTERROGATIVE_PRONOUN_K = new Array("사람/신분 물어볼 때", "사물/직업 물어볼 때", "선택하는 질문 할 때", "무슨? 어느?");
const INTERROGATIVE_PRONOUN_E = new Array("who", "what", "which", "what/which 명사");
const INTERROGATIVE_PRONOUN_BASIC_K = new Array("무슨 일이야? 괜찮니?")
const INTERROGATIVE_PRONOUN_BASIC_E = new Array("What's wrong? What's the matter? What happened? Are you okay?")
const INTERROGATIVE_ADVERB_K = new Array("장소를 물어볼 때", "날짜/시간 물어볼 때", "이유를 물어볼 때", "~하는 게 어때?");
const INTERROGATIVE_ADVERB_E = new Array("where", "when", "why", "Why don’t you 동사원형?");
const INTERROGATIVE_HOW_K = new Array("어떤? 어떻게? 얼마나?", "몇 살?", "얼마나 많이? (몇개)", "얼마나 많이? (가격)", "얼마나 자주?", "얼마나 멀리? (거리)", "얼마나 오래?", "얼마나 긴? (기간/길이)", "얼마나 큰지?", "얼마나 키가큰지?");
const INTERROGATIVE_HOW_E = new Array("How", "How old ?", "How many ?", "How much ?", "How often ?", "How far ? ", "How long ?", "How long ?", "How big ?", "How tall ?");
const INTERROGATIVE_ALTERNATIVE_NEGATIVE_K = new Array("선택 의문문?", "부정 의문문?");
const INTERROGATIVE_ALTERNATIVE_NEGATIVE_E = new Array("A or B 둘 중, 무엇을 선택할지 묻는 의문문", "~지 않니? Yes 아니 No 응");
const TAG_QUESTION_K = new Array("그렇지? 그렇지 않니?", "명령문, 그렇지?", "청유문(Let's~), 그렇지?", "I am ~, 그렇지?");
const TAG_QUESTION_E = new Array(", (조)동사 + 대명사?", ", will you?", ", shall we?", ", aren’t I?");
const INDIRECT_QUESTION_K = new Array("간접 의문문?", "의문사O 간접의문문", "의문사X 간접의문문");
const INDIRECT_QUESTION_E = new Array("문장속의 의문문", "의문사 S V", "if/whether S V");
const INTERROGATIVE_WHAT_HOW_K = new Array("직업", "첫 만남", "날씨", "성격", "외모", "요일", "날짜", "안부");
const INTERROGATIVE_WHAT_HOW_E = new Array("What do you do? ", "How do you do?", "How’s the weather?\n What’s the weather like?", "What’s he like?", "What does he look like?\n How does he look?", "What day is it today?", "What date is it today?", "How is he? How are you?");

const AGREEMENT_K = new Array();
const AGREEMENT_E = new Array();
const AGREEMENT_ON_NUMBER_K = new Array("① every/each/thing/body/one", "② 학문 ics, 국가 단체 질병 s로 끝", "③ 거금무시(거리 금액 무게 시간) 명사", "④ A and B가 한 가지 사물", "⑤ 동명사구/부정사구 주어", "⑥ The number of", "① 쌍을 이루는 명사 – scissors, glasses", "② The 형용사", "③ a number of");
const AGREEMENT_ON_NUMBER_E = new Array("단수 주어 ", "단수 주어 ", "단수 주어 ", "단수 주어 ", "단수 주어 ", "복명 단동 ~의 수 - 단수 주어 ", "복수 주어", " = 형용사 people = ~한 사람들 - 복수 주어", "복명 복동 – 많은 - 복수 주어");
const AGREEMENT_ON_NUMBER_2K = new Array("부분 of 단명", "부분 of 복명", "most all some half percent 분수 of 단명", "most all some half percent 분수 of 복명", "all (the) 단명", "all (the) 복명");
const AGREEMENT_ON_NUMBER_2E = new Array("단동", "복동", "단동", "복동", "단동", "복동");
const AGREEMENT_ON_NUMBER_3E = new Array("A B 둘 중 하나", "A B 둘 다 아닌", "A가 아니라 B", "A뿐만 아니라 B도", "A뿐만 아니라 B도");
const AGREEMENT_ON_NUMBER_3K = new Array("either A or B", "neither A nor B", "not A but B", "not only A but (also) B", "B as well as A");
const AGREEMENT_TENSE_K = new Array("주절이 현재 > 종속절의 시제는?", "주절이 과거 > 종속절의 시제는? ", "진리, 격언, 과학적 사실, 현재 상태, 습관", "과거 사건, 역사적 사실");
const AGREEMENT_TENSE_E = new Array("종속절 아무 시제 가능", "과거/과거진행/과거완료만 가능", "항상 현재 시제", "항상 과거");

const SPEECH_K = new Array("말을 전달하는 방법 2가지");
const SPEECH_E = new Array("직접 화법, 간접 화법");
const SPEECH_QUOTED_REPORTED_K = new Array("say 를\n 간접화법으로", "say to 를\n 간접화법으로", "② 쉼표따옴표 ( , “ ” )", "③번은?");
const SPEECH_QUOTED_REPORTED_E = new Array("say", "tell", "( that ) S V", "③ 시인지부 일치 \n시제, 인칭대명사, 지시어, 부사(구) 일치");
const SPEECH_ADVERB_PHRASE_K = new Array("ago ", "this ", "these ", "here ", "today ", "now ", "next ", "tomorrow ", "yesterday ", "last week", "last month", "last year");
const SPEECH_ADVERB_PHRASE_E = new Array("before", "that", "those", "there", "that day", "then, at that time", "the following", "the next day, the following day ", "the day before, the previous day", "the previous week", "the previous month", "the previous year");
const SPEECH_INTERROGATIVE_K = new Array("의문문의 say (to)\n 간접 화법으로", "의문사 X 의문문의 쉼따 (,“ ”)\n 간접 화법으로", "의문사 O 의문문의 쉼따 (,“ ”)\n 간접 화법으로", "③번은?");
const SPEECH_INTERROGATIVE_E = new Array("ask", "if/whether S V", "의문사 SV", "시인지부 일치");
const SPEECH_IMPERATIVE_K = new Array("명령문\n 명령하는 의미의 say (to)\n 간접화법으로", "명령문\n 부탁하는 의미의 say (to)\n 간접화법으로", "명령문\n 충고하는 의미의 say (to)\n 간접화법으로", "명령문\n 쉼따 (,“ ”) 간접화법으로", "③번은?");
const SPEECH_IMPERATIVE_E = new Array("tell / order / instruct", "ask / beg / request", "advise", "(not) to 부정사", "시인지부 일치");
const SPEECH_MINDMAP_K = new Array();

const SPECIAL_SYNTAX_K = new Array();
const SPECIAL_SYNTAX_EMPHASIS_K = new Array("동사 강조", "명사 강조", "부정어 강조", "의문사 강조", "비교급 강조");
const SPECIAL_SYNTAX_EMPHASIS_E = new Array("두더지 + 동사원형", "the very 명사", "not ~ at all, not ~ in the least", "의문사 뒤에 on earth, in the world", "even far still much, a lot \n (이머스마야 = 이파스마야)");
const SPECIAL_SYNTAX_IT_THAT_K = new Array("동사 빼고 다 강조", "명사 부사 강조", "그건 바로 ~ 야!", "it that의 의문사 강조");
const SPECIAL_SYNTAX_IT_THAT_E = new Array("It ~ that", "It ~ that", "It ~ that", "의문사 is/was it that");
const SPECIAL_SYNTAX_INVERSION_K = new Array("방향/장소 부사(구)", "There/Here", "There/Here S가 대명사면 ", "부정어(구) ");
const SPECIAL_SYNTAX_INVERSION_E = new Array("부사(구) V S", "There/Here V S", "There/Here S V", "부정어(구) 조동사 S V ");
const SPECIAL_SYNTAX_SO_NEITHER_K = new Array("~도 그렇다 ", "~도 안 그렇다");
const SPECIAL_SYNTAX_SO_NEITHER_E = new Array("So V S", "Neither V S ");
const SPECIAL_SYNTAX_OMIT_K = new Array();
const SPECIAL_SYNTAX_OMIT_E = new Array();
const SPECIAL_SYNTAX_INANIMATES_SUBJECT_K = new Array();

const SENTENCE_BASIC_K = new Array("문장에 가장 중요한 요소는?", "주어?", "동사?", "행동이 없으면?");
const SENTENCE_BASIC_E = new Array("S V", "주인공", "행동", "be 동사");
const SENTENCE_BASIC_2K = new Array("이다 동사?", "하다 동사?");
const SENTENCE_BASIC_2E = new Array("be 동사", "일반 동사");
const SENTENCE_EXTENDED_K = new Array("문장을 늘리는 3가지 방법은?", "명사 늘리는 방법은?", "문장 늘리는 방법은?", "동사 늘리는 방법은?");
const SENTENCE_EXTENDED_E = new Array("① 명사 ② 문장(절) ③ 동사", "명사 앞에 전치사", "문장 앞에 접속사", "to ing p.p. (투 잉 피피)");
const SENTENCE_TYPE_K = new Array("평소에 쓰는 말", "아니아니 not", "물어볼 때 쓰는 말", "감탄할 때 쓰는 말", "명령하는 말", "~하자고 권유하는 말");
const SENTENCE_TYPE_E = new Array("평서문", "부정문", "의문문", "감탄문", "명령문", "청유/제안문");
const EXCLAMATORY_K = new Array("감탄문");
const EXCLAMATORY_E = new Array("매우 ~구나! \n What a 형 명 (S V) \n How    형    (S V) \n How    부    (S V)");
const EXCLAMATORY_SOLUTION_K = new Array("S V 지우고, 명사 있으면?", "S V 지우고, 명사 없으면?");
const EXCLAMATORY_SOLUTION_E = new Array("what 감탄문", "how 감탄문");
const SENTENCE_IMPERATIVE_Basic_K = new Array("~해라 ", "~하지마라 ", "절대~하지마라 ");
const SENTENCE_IMPERATIVE_Basic_E = new Array("주어 빼고, 동사원형", "Don't 동사원형", "Never 동사원형");

const SENTENCE_IMPERATIVE_K = new Array("~해라 ", "~하지마라 ", "절대~하지마라 ", "명령문 만드는 법", "부정명령문 만드는 법", "명령문, and", "명령문, or");
const SENTENCE_IMPERATIVE_E = new Array("주어 빼고, 동사원형", "Don't 동사원형", "Never 동사원형", "주어 빼고, 동사원형", "Don't / Never 동사원형", "~해라. 그러면 If", "~해라. 그렇지 않으면 If~not / Unless");
const SENTENCE_IMPERATIVE_2K = new Array("구워라", "사라", "전화해라", "올라라", "닫아라", "와라", "울어라", "춤춰라", "꿈꿔라", "마셔라", "먹어라", "고쳐라", "줘라", "가라", "도와줘라", "때려라", "깡총 뛰어라", "점프해라", "발차기 해라", "웃어라", "떠나라", "들어라", "만들어라", "움직여라", "열어라", "놀아라", "눌러라", "읽어라", "달려라", "보내라", "외쳐라", "노래해라", "앉아라", "웃어라", "일어서라", "얘기해라", "생각해라", "던져라", "만져라", "돌려라", "방문해라", "투표해라", "기다려라", "걸어라", "써라");
const SENTENCE_IMPERATIVE_2E = new Array("Bake", "Buy", "Call", "Climb", "Close", "Come", "Cry", "Dance", "Dream", "Drink", "Eat", "Fix", "Give", "Go", "Help", "Hit", "Hop", "Jump", "Kick", "Laugh", "Leave", "Listen", "Make", "Move", "Open", "Play", "Push", "Read", "Run", "Send", "Shout", "Sing", "Sit", "Smile", "Stand", "Talk", "Think", "Throw", "Touch", "Turn", "Visit", "Vote", "Wait", "Walk", "Write");
const SENTENCE_IMPERATIVE_KvN = new Array("굽지 마라", "사지 마라", "전화하지 마라", "오르지 마라", "닫지 마라", "오지 마라", "울지 마라", "춤추지 마라", "꿈꾸지 마라", "마시지 마라", "먹지 마라", "고치지 마라", "주지 마라", "가지 마라", "도와주지 마라", "때리지 마라", "깡총 뛰지 마라", "점프하지 마라", "발차기 하지 마라", "웃지 마라", "떠나지 마라", "듣지 마라", "만들지 마라", "움직이지 마라", "열지 마라", "놀지 마라", "누르지 마라", "읽지 마라", "달리지 마라", "보내지 마라", "외치지 마라", "노래하지 마라", "앉지 마라", "웃지 마라", "일어서지 마라", "얘기하지 마라", "생각하지 마라", "던지지 마라", "만지지 마라", "돌리지 마라", "방문하지 마라", "투표하지 마라", "기다리지 마라", "걷지 마라", "쓰지 마라");
const SENTENCE_IMPERATIVE_EvN = new Array("bake", "buy", "call", "climb", "close", "come", "cry", "dance", "dream", "drink", "eat", "fix", "give", "go", "help", "hit", "hop", "jump", "kick", "laugh", "leave", "listen", "make", "move", "open", "play", "push", "read", "run", "send", "shout", "sing", "sit", "smile", "stand", "talk", "think", "throw", "touch", "turn", "visit", "vote", "wait", "walk", "write");
const SENTENCE_SUGGESTION_K = new Array("~하자 ", "그래, 하자. ", "하지말자. ");
const SENTENCE_SUGGESTION_E = new Array("Let's 동사원형 !", "Yes, let's.", "No, let's not.");
const SENTENCE_SUGGESTION_Kv2 = new Array("굽자", "사자", "전화하자", "오르자", "닫자", "오자", "울자", "춤추자", "꿈꾸자", "마시자", "먹자", "고치자", "주자", "가자", "도와주자", "때리자", "깡총 뛰자", "점프하자", "발차기 하자", "웃자", "떠나자", "듣자", "만들자", "움직이자", "열자", "놀자", "누르자", "읽자", "달리자", "보내자", "외치자", "노래하자", "앉자", "웃자", "일어서자", "얘기하자", "생각하자", "던지자", "만지자", "돌리자", "방문하자", "투표하자", "기다리자", "걷자", "쓰자");
const SENTENCE_SUGGESTION_Kv2Negative = new Array("굽지 말자", "사지 말자", "전화하지 말자", "오르지 말자", "닫지 말자", "오지 말자", "울지 말자", "춤추지 말자", "꿈꾸지 말자", "마시지 말자", "먹지 말자", "고치지 말자", "주지 말자", "가지 말자", "도와주지 말자", "때리지 말자", "깡총 뛰지 말자", "점프하지 말자", "발차기 하지 말자", "웃지 말자", "떠나지 말자", "듣지 말자", "만들지 말자", "움직이지 말자", "열지 말자", "놀지 말자", "누르지 말자", "읽지 말자", "달리지 말자", "보내지 말자", "외치지 말자", "노래하지 말자", "앉지 말자", "웃지 말자", "일어서지 말자", "얘기하지 말자", "생각하지 말자", "던지지 말자", "만지지 말자", "돌리지 말자", "방문하지 말자", "투표하지 말자", "기다리지 말자", "걷지 말자", "쓰지 말자");
const SENTENCE_SUGGESTION_Ev2 = new Array("bake", "buy", "call", "climb", "close", "come", "cry", "dance", "dream", "drink", "eat", "fix", "give", "go", "help", "hit", "hop", "jump", "kick", "laugh", "leave", "listen", "make", "move", "open", "play", "push", "read", "run", "send", "shout", "sing", "sit", "smile", "stand", "talk", "think", "throw", "touch", "turn", "visit", "vote", "wait", "walk", "write");
const SENTENCE_SUGGESTION_2K = new Array("우리가 할 것 제안하기 ", "네가 할 것 제안하기");
const SENTENCE_SUGGESTION_2E = new Array("Let's 동사원형, Shall we 동사원형, Why don't we 동사원형, How about –ing, What about –ing", "Why don't you 동사원형, How about -ing, What about -ing");

const SENTENCE_ELEMENTS_K = new Array("S?", "V?", "O?", "C?", "주어?", "동사?", "목적어?", "보어?");
const SENTENCE_ELEMENTS_E = new Array("주어 ", "동사 ", "목적어", "보어", "주인공", "행동", "대상", "보충어");
const SENTENCE_PATTERN_K = new Array("1형식 - 문장의 구성요소", "2형식 - 문장의 구성요소", "3형식 - 문장의 구성요소", "4형식 - 문장의 구성요소", "5형식 - 문장의 구성요소", "1형식 - 품사로", "2형식 - 품사로", "3형식 - 품사로", "4형식 - 품사로", "5형식 - 품사로");
const SENTENCE_PATTERN_E = new Array("S V", "S V C", "S V O", "S V O O", "S V O C", "명 동", "명 동 명/형", "명 동 명", "명 동 명 명", "명 동 명 명/형");
const SENTENCE_PATTERN_2K = new Array("1형식 동사", "2형식 동사", "3형식 동사", "4형식 동사", "5형식 동사");
const SENTENCE_PATTERN_2E = new Array("안자\n완전 자동사", "불자\n불완전 자동사", "안타\n완전 타동사", "안타\n완전 타동사", "불타\n불완전 타동사");
const SENTENCE_THERE_BE_PRESENT_K = new Array("가 있다", "들이 있다");
const SENTENCE_THERE_BE_PRESENT_E = new Array("There is ", "There are ");
const SENTENCE_THERE_BE_K = new Array("가 있다", "들이 있다", "가 있었다", "들이 있었다");
const SENTENCE_THERE_BE_E = new Array("There is ", "There are ", "There was ", "There were ");
const SENTENCE_PATTERN_15_K = new Array("1형식", "2형식", "3형식", "4형식", "5형식");
const SENTENCE_PATTERN_15_E = new Array("Here be/There be 구문", "대표동사 be동사, ① 상태동사-바뀌는동사 ② 상태동사-유지하는동사 ③ 감각동사", "대부분의 영어 문장", "수여동사", "5형식 동사, 사역동사, 지각동사");
const SENTENCE_PATTERN_All_K = new Array("I fly.", "This is Nicole.", "She is a very good teacher.", "She is happy.", "I love her.", "I give her chocolate.", "She calls me Barbie.", "She makes me happy.", "I ask her to dance.", "I make her dance.", "I see her dancing.");
const SENTENCE_PATTERN_All_E = new Array("1형식", "2형식", "2형식", "2형식", "3형식", "4형식", "5형식", "5형식", "5형식", "5형식", "5형식");
const SENTENCE_PATTERN_1_K = new Array("I fly.");

const SENTENCE_PATTERN_1_E = new Array();
const SENTENCE_PATTERN_2_K = new Array();
const SENTENCE_PATTERN_2b_K = new Array("감각동사?");
const SENTENCE_PATTERN_2b_E = new Array("sound look smell taste feel");
const SENTENCE_PATTERN_2bv2_K = new Array("~하게 들리다", "~하게 보이다", "~한 냄새가 나다", "~한 맛이 나다", "~하게 느끼다", "감각동사 + 형용사", "감각동사 + 부사", "감각동사 + 명사");
const SENTENCE_PATTERN_2bv2_E = new Array("sound", "look / seem", "smell", "taste", "feel", "된다", "안 된다", "명사 앞에 like");
const SENTENCE_PATTERN_2bv2p_K = new Array("들린다", "보인다", "냄새가 난다", "맛이 난다", "느껴진다");
const SENTENCE_PATTERN_2bv2p_E = new Array("sound", "look", "smell", "taste", "feel");
const SENTENCE_PATTERN_2bv2p_2K = new Array("좋게 ", "훌륭하게 ", "끔찍하게 ", "사과 같이 ");
const SENTENCE_PATTERN_2bv2p_2E = new Array("good", "great", "terrible", "like an apple");

const SENTENCE_PATTERN_2_E = new Array();
const SENTENCE_PATTERN_3_K = new Array();
const SENTENCE_PATTERN_4_K = new Array("준다", "말한다", "보여준다", "제안한다", "건네준다", "보낸다", "물어본다", "사준다", "가르친다", "약속한다", "쓴다", "낭독한다", "가져온다", "건네준다", "빌려준다", "조리한다", "판다", "던진다");
const SENTENCE_PATTERN_4_E = new Array("give", "tell", "show", "offer", "pass", "send", "ask", "buy", "teach", "promise", "write", "read", "bring", "hand", "lend", "make", "sell", "throw");
const SENTENCE_PATTERN_5_K = new Array("고려한다", "부른다", "이름 붙인다", "선출한다", "임명한다", "만든다", "선택한다", "표시한다", "발음한다");
const SENTENCE_PATTERN_5_E = new Array("consider", "call", "name", "elect", "appoint", "make", "choose", "label", "pronounce");
const SENTENCE_PATTERN_5_2K = new Array("발견한다", "고려한다", "믿는다", "느낀다", "생각한다", "만든다", "유지한다", "남긴다", "원한다", "바란다");
const SENTENCE_PATTERN_5_2E = new Array("find", "consider", "believe", "feel", "think", "make", "keep", "leave", "want", "wish");
const SENTENCE_PATTERN_5_3K = new Array();
const SENTENCE_PATTERN_5b_3K = new Array("사역동사?", "준사역동사?");
const SENTENCE_PATTERN_5b_3E = new Array("make have let O 동사 원형", "help O 원형/to \n get O to");
const SENTENCE_PATTERN_5c_3K = new Array("지각동사?");
const SENTENCE_PATTERN_5c_3E = new Array("see, watch, hear, listen to, feel, observe, notice O 동사원형/동사ing");



//////////////////////////////////// 옛날버젼///////////////////////////////////////////////////////////////


const VERB_BE_POSITIVE_K = new Array("이다", "있다", "입니다", "있습니다", "이예요", "있어요", "이야", "있어");
const VERB_BE_POSITIVE_E = new Array("Be동사 / 평서문", "Be동사 / 평서문", "Be동사 / 평서문", "Be동사 / 평서문", "Be동사 / 평서문", "Be동사 / 평서문", "Be동사 / 평서문", "Be동사 / 평서문");
const VERB_BE_NEGATIVE_K = new Array("아니다", "없다", "아니예요", "없어요", "아닙니다", "없습니다", "아니야", "없어");
const VERB_BE_NEGATIVE_E = new Array("Be동사 / 부정문", "Be동사 / 부정문", "Be동사 / 부정문", "Be동사 / 부정문", "Be동사 / 부정문", "Be동사 / 부정문", "Be동사 / 부정문", "Be동사 / 부정문");
const VERB_BE_QUESTION_K = new Array("이니?", "있니?", "이나요?", "있나요?", "입니까?", "있습니까?", "이야?", "있어?");
const VERB_BE_QUESTION_E = new Array("Be동사 / 의문문", "Be동사 / 의문문", "Be동사 / 의문문", "Be동사 / 의문문", "Be동사 / 의문문", "Be동사 / 의문문", "Be동사 / 의문문", "Be동사 / 의문문");
const VERB_GENERAL_POSITIVE_K = new Array("한다", "다", "합니다", "해요", "~야", "~해");
const VERB_GENERAL_POSITIVE_E = new Array("일반동사 / 평서문", "일반동사 / 평서문", "일반동사 / 평서문", "일반동사 / 평서문", "일반동사 / 평서문", "일반동사 / 평서문");
const VERB_GENERAL_NEGATIVE_K = new Array("안 한다", "안 해요", "안 합니다", "안 해");
const VERB_GENERAL_NEGATIVE_E = new Array("일반동사 / 부정문", "일반동사 / 부정문", "일반동사 / 부정문", "일반동사 / 부정문");
const VERB_GENERAL_QUESTION_K = new Array("하니?", "하나요?", "합니까?", "하십니까?");
const VERB_GENERAL_QUESTION_E = new Array("일반동사 / 의문문", "일반동사 / 의문문", "일반동사 / 의문문", "일반동사 / 의문문");
const VERB_BE_POSITIVE_NEGATIVE_QUESTION_K = new Array('새롭다 ', '학생이다 ', '선생님이다 ', '거기에 있다 ', '교실에 있다 ', '책상 위에 있다 ', '크다', '작다', '빠르다', '느리다', '좋다', '나쁘다', '비싸다', '싸다', '두껍다', '얇다', '시끄럽다', '조용하다', '똑똑하다', '멍청하다', '젖었다', '말랐다', '무겁다', '가볍다', '딱딱하다', '부드럽다', '얕다', '깊다', '쉽다', '어렵다', '좁다', '넓다', '광대하다', '약하다', '강하다', '부유하다', '가난하다', '젊다', '늙다', '길다', '짧다', '높다', '낮다', '관대하다', '인색하다', '진실하다  ', '거짓이다', '아름답다', '못생겼다', '새롭다', '오래됐다', '행복하다', '슬프다', '안전하다', '위험하다', '이르다', '크지 않다', '작지 않다', '빠르지 않다', '느리지 않다', '좋지 않다', '나쁘지 않다', '비싸지 않다', '싸지 않다', '두껍지 않다', '얇지 않다', '시끄럽지 않다', '조용하지 않다', '똑똑하지 않다', '멍청하지 않다', '젖지 않았다', '마르지 않다', '무겁지 않다', '가볍지 않다', '딱딱하지 않다', '부드럽지 않다', '얕지 않다', '깊지 않다', '쉽지 않다', '어렵지 않다', '좁지 않다', '넓지 않다', '광대하지 않다', '약하지 않다', '강하지 않다', '부유하지 않다', '가난하지 않다', '젊지 않다', '늙지 않다', '길지 않다', '짧지 않다', '높지 않다', '낮지 않다', '관대하지 않다', '인색하지 않다', '진실하지 않다  ', '거짓이지 않다', '아름답지 않다', '못생기지 않다', '새롭지 않다', '안오래됐다', '행복하지 않다', '슬프지 않다', '안전하지 않다', '위험하지 않다', '이르지 않다', '크니?', '작니?', '빠르니?', '느리니?', '좋니?', '나쁘니?', '비싸니?', '싸니?', '두껍니?', '얇니?', '시끄럽니?', '조용하니?', '똑똑하니?', '멍청하니?', '젖었니?', '말랐니?', '무겁니?', '가볍니?', '딱딱하니?', '부드럽니?', '얕니?', '깊니?', '쉽니?', '어렵니?', '좁니?', '넓니?', '광대하니?', '약하니?', '강하니?', '부유하니?', '가난하니?', '젊니?', '늙었니?', '기니?', '짧니?', '높니?', '낮니?', '관대하니?', '인색하니?', '진실하니?  ', '거짓이니?', '아름답니?', '못생겼니?', '새롭니?', '오래됐니?  ', '행복하니?', '슬프니?', '안전하니?', '위험하니?', '이르니?');
const VERB_BE_POSITIVE_NEGATIVE_QUESTION_E = new Array();
const VERB_100_POSITIVE_NEGATIVE_QUESTION = new Array('사랑한다 ', '좋아한다 ', '즐긴다 ', '시작한다 ', '멈춘다', '연다', '닫는다', '요리한다', '먹는다', '대화한다', '달린다', '난다', '시작한다', '그만둔다', '말한다', '간다', '온다', '말한다', '본다', '보인다', '가지고 있다', '마신다', '점프한다', '잡는다', '이야기한다', '씻는다', '걷는다', '일어선다', '앉는다', '넘어진다', '논다', '공부한다', '돕는다', '듣는다', '본다', '당긴다', '민다', '그린다', '들린다', '보인다  ', '자른다', '읽는다', '움직인다', '묻는다', '사용한다  ', '한다', '하게 한다', '운다', '수영한다', '잔다', '사랑하지 않는다 ', '좋아하지 않는다 ', '즐기지 않는다 ', '시작하지 않는다 ', '멈추지 않는다', '열지 않는다', '닫지 않는다', '요리하지 않는다', '먹지 않는다', '대화하지 않는다', '달리지 않는다', '날지 않는다', '시작하지 않는다', '그만두지 않는다', '말하지 않는다', '가지 않는다', '오지 않는다', '말하지 않는다', '보지 않는다', '보이지 않는다', '가지고 있지 않다', '마시지 않는다', '점프하지 않는다', '잡지 않는다', '이야기하지 않는다', '씻지 않는다', '걷지 않는다', '일어서지 않는다', '앉지 않는다', '넘어지지 않는다', '놀지 않는다', '공부하지 않는다', '돕지 않는다', '듣지 않는다', '보지 않는다', '안당긴다', '안민다', '안그린다', '안들린다', '안보인다  ', '안자른다', '안읽는다', '안움직인다', '안묻는다', '안사용한다  ', '안한다', '하게 안한다', '울지 않는다', '안잔다', '사랑하니? ', '좋아하니? ', '즐기니? ', '시작하니? ', '멈추니?', '여니?', '닫니?', '요리하니?', '먹니?', '대화하니?', '달리니?', '날아가니?', '시작하니?', '그만두니?', '말하니?', '가니?', '오니?', '말하니?', '보니?', '보이니?', '가지니?', '마시니?', '점프하니?', '잡니?', '이야기하니?', '씻니?', '걷니?', '서있니?', '앉니?', '넘어지니?', '노니?', '공부하니?', '돕니?', '듣니?', '보니?', '당기니?', '미니?', '그리니?', '들리니?', '보이니?  ', '자르니?', '읽니?', '움직이니?', '묻니?', '사용하니?  ', '하니?', '하게 하니?', '우니?', '수영하니?', '자니?');



///////////////////////////////////////  과거시제 /////////////////////////////////////////////////

//be동사 평서문
function getRandomBeVerb1Past() {
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;
  switch (chooseNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * THINGS_S_K.length);
      let valueNumber11 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      kWord = THINGS_S_K[valueNumber1] + " " + ADJECTIVE_POSITIVE_THINGS[valueNumber11];
      eWord = THINGS_S_Be_E[valueNumber1] + " " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber11];
      console.log(chooseNumbers, valueNumber1, valueNumber11)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2:
      let valueNumber2 = Math.floor(Math.random() * THINGS_NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      kWord = THINGS_NoS_K[valueNumber2] + " " + ADJECTIVE_POSITIVE_THINGS[valueNumber22];
      eWord = THINGS_NoS_Be_E[valueNumber2] + " " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber22];
      console.log(chooseNumbers, valueNumber2, valueNumber22)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 3:
      let valueNumber3 = Math.floor(Math.random() * PEOPLE_S_K.length);
      let valueNumber33 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      kWord = PEOPLE_S_K[valueNumber3] + " " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber33];
      eWord = PEOPLE_S_Be_E[valueNumber3] + " " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber33];
      console.log(chooseNumbers, valueNumber3, valueNumber33)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 4:
      let valueNumber4 = Math.floor(Math.random() * PEOPLE_NoS_K.length);
      let valueNumber44 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      kWord = PEOPLE_NoS_K[valueNumber4] + " " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber44];
      eWord = PEOPLE_NoS_Be_E[valueNumber4] + " " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber44];
      console.log(chooseNumbers, valueNumber4, valueNumber44)
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//be동사 부정문
function getRandomBeVerb2Past() {
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;
  switch (chooseNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * THINGS_S_K.length);
      let valueNumber11 = Math.floor(Math.random() * ADJECTIVE_NEGATIVE_THINGS.length);
      kWord = THINGS_S_K[valueNumber1] + " " + ADJECTIVE_NEGATIVE_THINGS[valueNumber11];
      eWord = THINGS_S_Be_E[valueNumber1] + " not " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber11];
      console.log(chooseNumbers, valueNumber1, valueNumber11)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2:
      let valueNumber2 = Math.floor(Math.random() * THINGS_NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * ADJECTIVE_NEGATIVE_THINGS.length);
      kWord = THINGS_NoS_K[valueNumber2] + " " + ADJECTIVE_NEGATIVE_THINGS[valueNumber22];
      eWord = THINGS_NoS_Be_E[valueNumber2] + " not " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber22];
      console.log(chooseNumbers, valueNumber2, valueNumber22)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 3:
      let valueNumber3 = Math.floor(Math.random() * PEOPLE_S_K.length);
      let valueNumber33 = Math.floor(Math.random() * ADJECTIVE_NEGATIVE_PEOPLE.length);
      kWord = PEOPLE_S_K[valueNumber3] + " " + ADJECTIVE_NEGATIVE_PEOPLE[valueNumber33];
      eWord = PEOPLE_S_Be_E[valueNumber3] + " not " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber33];
      console.log(chooseNumbers, valueNumber3, valueNumber33)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 4:
      let valueNumber4 = Math.floor(Math.random() * PEOPLE_NoS_K.length);
      let valueNumber44 = Math.floor(Math.random() * ADJECTIVE_NEGATIVE_PEOPLE.length);
      kWord = PEOPLE_NoS_K[valueNumber4] + " " + ADJECTIVE_NEGATIVE_PEOPLE[valueNumber44];
      eWord = PEOPLE_NoS_Be_E[valueNumber4] + " not " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber44];
      console.log(chooseNumbers, valueNumber4, valueNumber44)
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//be동사 의문문
function getRandomBeVerb3Past() {
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;
  switch (chooseNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * THINGS_S_K.length);
      let valueNumber11 = Math.floor(Math.random() * ADJECTIVE_INTERROGATIVE_THINGS.length);
      kWord = THINGS_S_K[valueNumber1] + " " + ADJECTIVE_INTERROGATIVE_THINGS[valueNumber11];
      eWord = THINGS_INTERROGATIVE_S_Be_E[valueNumber1] + " " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber11] + "?";
      console.log(chooseNumbers, valueNumber1, valueNumber11)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2:
      let valueNumber2 = Math.floor(Math.random() * THINGS_NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * ADJECTIVE_INTERROGATIVE_THINGS.length);
      kWord = THINGS_NoS_K[valueNumber2] + " " + ADJECTIVE_INTERROGATIVE_THINGS[valueNumber22];
      eWord = THINGS_INTERROGATIVE_NoS_Be_E[valueNumber2] + " " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + "?";
      console.log(chooseNumbers, valueNumber2, valueNumber22)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 3:
      let valueNumber3 = Math.floor(Math.random() * PEOPLE_S_K.length);
      let valueNumber33 = Math.floor(Math.random() * ADJECTIVE_INTERROGATIVE_PEOPLE.length);
      kWord = PEOPLE_S_K[valueNumber3] + " " + ADJECTIVE_INTERROGATIVE_PEOPLE[valueNumber33];
      eWord = PEOPLE_INTERROGATIVE_S_Be_E[valueNumber3] + " " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber33] + "?";
      console.log(chooseNumbers, valueNumber3, valueNumber33)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 4:
      let valueNumber4 = Math.floor(Math.random() * PEOPLE_NoS_K.length);
      let valueNumber44 = Math.floor(Math.random() * ADJECTIVE_INTERROGATIVE_PEOPLE.length);
      kWord = PEOPLE_NoS_K[valueNumber4] + " " + ADJECTIVE_INTERROGATIVE_PEOPLE[valueNumber44];
      eWord = PEOPLE_INTERROGATIVE_NoS_Be_E[valueNumber4] + " " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber44] + "?";
      console.log(chooseNumbers, valueNumber4, valueNumber44)
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 평서문
function getRandomGVerb1Past() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      let valueNumber11 = Math.floor(Math.random() * VERB_GENERAL_POSITIVE_ALL.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL[valueNumber11];
      eWord = S_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE3_ALL_E[valueNumber11];
      console.log(chooseNumbers, valueNumber1, valueNumber11)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * VERB_GENERAL_POSITIVE_ALL.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL[valueNumber22];
      eWord = NoS_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[valueNumber22];
      console.log(chooseNumbers, valueNumber2, valueNumber22)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 부정문
function getRandomGVerb2Past() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      let valueNumber11 = Math.floor(Math.random() * VERB_GENERAL_NEGATIVE_ALL.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_NEGATIVE_ALL[valueNumber11];
      eWord = S_E[valueNumber1] + " doesn't " + VERB_GENERAL_POSITIVE_ALL_E[valueNumber11];
      console.log(chooseNumbers, valueNumber1, valueNumber11)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * VERB_GENERAL_NEGATIVE_ALL.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_NEGATIVE_ALL[valueNumber22];
      eWord = NoS_E[valueNumber2] + " don't " + VERB_GENERAL_POSITIVE_ALL_E[valueNumber22];
      console.log(chooseNumbers, valueNumber2, valueNumber22)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 의문문
function getRandomGVerb3Past() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      let valueNumber11 = Math.floor(Math.random() * VERB_GENERAL_INTERROGATIVE_ALL.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_INTERROGATIVE_ALL[valueNumber11];
      eWord = S_INTERROGATIVE_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL_E[valueNumber11] + "?";
      console.log(chooseNumbers, valueNumber1, valueNumber11)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * VERB_GENERAL_INTERROGATIVE_ALL.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_INTERROGATIVE_ALL[valueNumber22];
      eWord = NoS_INTERROGATIVE_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[valueNumber22] + "?";
      console.log(chooseNumbers, valueNumber2, valueNumber22)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
//평서문 - 전체
function getRandomVerb1All() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getRandomBeVerb1();
      break;
    case 2:
      getRandomGVerb1();
      break;
  }
}
//부정문 - 전체
function getRandomVerb2All() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getRandomBeVerb1();
      break;
    case 2:
      getRandomGVerb1();
      break;
  }
}
//평서문 - 전체
function getRandomVerb3All() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getRandomBeVerb1();
      break;
    case 2:
      getRandomGVerb1();
      break;
  }
}
//Be동사 - 전체
function getRandomBeVerbAll() {
  let chooseNumbers = Math.floor(Math.random() * 3) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getRandomBeVerb1();
      break;
    case 2:
      getRandomBeVerb2();
      break;
    case 3:
      getRandomBeVerb3();
      break;
  }
}
//일반동사 - 전체
function getRandomGVerbAll() {
  let chooseNumbers = Math.floor(Math.random() * 3) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getRandomGVerb1();
      break;
    case 2:
      getRandomGVerb2();
      break;
    case 3:
      getRandomGVerb3();
      break;
  }
}


function getRandomVerbAll() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getRandomBeVerbAll();
      break;
    case 2:
      getRandomGVerbAll();
      break;
  }
}

///////////////////////////////////////  현재시제 /////////////////////////////////////////////////
//be동사 평서문
function getRandomBeVerb1() {
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;
  switch (chooseNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * THINGS_S_K.length);
      let valueNumber11 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      kWord = THINGS_S_K[valueNumber1] + " " + ADJECTIVE_POSITIVE_THINGS[valueNumber11];
      eWord = THINGS_S_Be_E[valueNumber1] + " " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber11];
      console.log(chooseNumbers, valueNumber1, valueNumber11)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2:
      let valueNumber2 = Math.floor(Math.random() * THINGS_NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      kWord = THINGS_NoS_K[valueNumber2] + " " + ADJECTIVE_POSITIVE_THINGS[valueNumber22];
      eWord = THINGS_NoS_Be_E[valueNumber2] + " " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber22];
      console.log(chooseNumbers, valueNumber2, valueNumber22)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 3:
      let valueNumber3 = Math.floor(Math.random() * PEOPLE_S_K.length);
      let valueNumber33 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      kWord = PEOPLE_S_K[valueNumber3] + " " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber33];
      eWord = PEOPLE_S_Be_E[valueNumber3] + " " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber33];
      console.log(chooseNumbers, valueNumber3, valueNumber33)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 4:
      let valueNumber4 = Math.floor(Math.random() * PEOPLE_NoS_K.length);
      let valueNumber44 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      kWord = PEOPLE_NoS_K[valueNumber4] + " " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber44];
      eWord = PEOPLE_NoS_Be_E[valueNumber4] + " " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber44];
      console.log(chooseNumbers, valueNumber4, valueNumber44)
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//be동사 부정문
function getRandomBeVerb2() {
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;
  switch (chooseNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * THINGS_S_K.length);
      let valueNumber11 = Math.floor(Math.random() * ADJECTIVE_NEGATIVE_THINGS.length);
      kWord = THINGS_S_K[valueNumber1] + " " + ADJECTIVE_NEGATIVE_THINGS[valueNumber11];
      eWord = THINGS_S_Be_E[valueNumber1] + " not " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber11];
      console.log(chooseNumbers, valueNumber1, valueNumber11)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2:
      let valueNumber2 = Math.floor(Math.random() * THINGS_NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * ADJECTIVE_NEGATIVE_THINGS.length);
      kWord = THINGS_NoS_K[valueNumber2] + " " + ADJECTIVE_NEGATIVE_THINGS[valueNumber22];
      eWord = THINGS_NoS_Be_E[valueNumber2] + " not " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber22];
      console.log(chooseNumbers, valueNumber2, valueNumber22)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 3:
      let valueNumber3 = Math.floor(Math.random() * PEOPLE_S_K.length);
      let valueNumber33 = Math.floor(Math.random() * ADJECTIVE_NEGATIVE_PEOPLE.length);
      kWord = PEOPLE_S_K[valueNumber3] + " " + ADJECTIVE_NEGATIVE_PEOPLE[valueNumber33];
      eWord = PEOPLE_S_Be_E[valueNumber3] + " not " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber33];
      console.log(chooseNumbers, valueNumber3, valueNumber33)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 4:
      let valueNumber4 = Math.floor(Math.random() * PEOPLE_NoS_K.length);
      let valueNumber44 = Math.floor(Math.random() * ADJECTIVE_NEGATIVE_PEOPLE.length);
      kWord = PEOPLE_NoS_K[valueNumber4] + " " + ADJECTIVE_NEGATIVE_PEOPLE[valueNumber44];
      eWord = PEOPLE_NoS_Be_E[valueNumber4] + " not " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber44];
      console.log(chooseNumbers, valueNumber4, valueNumber44)
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//be동사 의문문
function getRandomBeVerb3() {
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;
  switch (chooseNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * THINGS_S_K.length);
      let valueNumber11 = Math.floor(Math.random() * ADJECTIVE_INTERROGATIVE_THINGS.length);
      kWord = THINGS_S_K[valueNumber1] + " " + ADJECTIVE_INTERROGATIVE_THINGS[valueNumber11];
      eWord = THINGS_INTERROGATIVE_S_Be_E[valueNumber1] + " " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber11] + "?";
      console.log(chooseNumbers, valueNumber1, valueNumber11)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2:
      let valueNumber2 = Math.floor(Math.random() * THINGS_NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * ADJECTIVE_INTERROGATIVE_THINGS.length);
      kWord = THINGS_NoS_K[valueNumber2] + " " + ADJECTIVE_INTERROGATIVE_THINGS[valueNumber22];
      eWord = THINGS_INTERROGATIVE_NoS_Be_E[valueNumber2] + " " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + "?";
      console.log(chooseNumbers, valueNumber2, valueNumber22)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 3:
      let valueNumber3 = Math.floor(Math.random() * PEOPLE_S_K.length);
      let valueNumber33 = Math.floor(Math.random() * ADJECTIVE_INTERROGATIVE_PEOPLE.length);
      kWord = PEOPLE_S_K[valueNumber3] + " " + ADJECTIVE_INTERROGATIVE_PEOPLE[valueNumber33];
      eWord = PEOPLE_INTERROGATIVE_S_Be_E[valueNumber3] + " " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber33] + "?";
      console.log(chooseNumbers, valueNumber3, valueNumber33)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 4:
      let valueNumber4 = Math.floor(Math.random() * PEOPLE_NoS_K.length);
      let valueNumber44 = Math.floor(Math.random() * ADJECTIVE_INTERROGATIVE_PEOPLE.length);
      kWord = PEOPLE_NoS_K[valueNumber4] + " " + ADJECTIVE_INTERROGATIVE_PEOPLE[valueNumber44];
      eWord = PEOPLE_INTERROGATIVE_NoS_Be_E[valueNumber4] + " " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber44] + "?";
      console.log(chooseNumbers, valueNumber4, valueNumber44)
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 평서문
function getRandomGVerb1() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  let kWord;
  let eWord;
  let valueNumber1 = Math.floor(Math.random() * S_K.length);
  let valueNumber11 = Math.floor(Math.random() * VERB_GENERAL_POSITIVE_ALL.length);
  let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
  switch (chooseNumbers) {
    case 1: // s파
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL[valueNumber11];
      eWord = S_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE3_ALL_E[valueNumber11];
      break;
    case 2: // No s파
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL[valueNumber11];
      eWord = NoS_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[valueNumber11];
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//일반동사 부정문
function getRandomGVerb2() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      let valueNumber11 = Math.floor(Math.random() * VERB_GENERAL_NEGATIVE_ALL.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_NEGATIVE_ALL[valueNumber11];
      eWord = S_E[valueNumber1] + " doesn't " + VERB_GENERAL_POSITIVE_ALL_E[valueNumber11];
      console.log(chooseNumbers, valueNumber1, valueNumber11)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * VERB_GENERAL_NEGATIVE_ALL.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_NEGATIVE_ALL[valueNumber22];
      eWord = NoS_E[valueNumber2] + " don't " + VERB_GENERAL_POSITIVE_ALL_E[valueNumber22];
      console.log(chooseNumbers, valueNumber2, valueNumber22)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 의문문
function getRandomGVerb3() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      let valueNumber11 = Math.floor(Math.random() * VERB_GENERAL_INTERROGATIVE_ALL.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_INTERROGATIVE_ALL[valueNumber11];
      eWord = S_INTERROGATIVE_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL_E[valueNumber11] + "?";
      console.log(chooseNumbers, valueNumber1, valueNumber11)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * VERB_GENERAL_INTERROGATIVE_ALL.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_INTERROGATIVE_ALL[valueNumber22];
      eWord = NoS_INTERROGATIVE_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[valueNumber22] + "?";
      console.log(chooseNumbers, valueNumber2, valueNumber22)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
//평서문 - 전체
function getRandomVerb1All() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getRandomBeVerb1();
      break;
    case 2:
      getRandomGVerb1();
      break;
  }
}
//부정문 - 전체
function getRandomVerb2All() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getRandomBeVerb2();
      break;
    case 2:
      getRandomGVerb2();
      break;
  }
}
//평서문 - 전체
function getRandomVerb3All() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getRandomBeVerb3();
      break;
    case 2:
      getRandomGVerb3();
      break;
  }
}
//Be동사 - 전체
function getRandomBeVerbAll() {
  let chooseNumbers = Math.floor(Math.random() * 3) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getRandomBeVerb1();
      break;
    case 2:
      getRandomBeVerb2();
      break;
    case 3:
      getRandomBeVerb3();
      break;
  }
}
//일반동사 - 전체
function getRandomGVerbAll() {
  let chooseNumbers = Math.floor(Math.random() * 3) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getRandomGVerb1();
      break;
    case 2:
      getRandomGVerb2();
      break;
    case 3:
      getRandomGVerb3();
      break;
  }
}


function getRandomVerbAll() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getRandomBeVerbAll();
      break;
    case 2:
      getRandomGVerbAll();
      break;
  }
}


//////////////////////////////////// Speaking Drill Daily ///////////////////////////////////////////////////////////////

function getPronoun1() {
  let valueNumber1 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_K.length);
  kWord = PRONOUN_PERSONAL_SUBJECTIVE_K[valueNumber1];
  eWord = PRONOUN_PERSONAL_SUBJECTIVE_E[valueNumber1];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getPronoun2() {
  let valueNumber1 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
  kWord = PRONOUN_DEMONSTRATIVE_K[valueNumber1];
  eWord = PRONOUN_DEMONSTRATIVE_E[valueNumber1];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// Day 1 ////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

// var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
function getDay1BeVoca() {
  let numberDay1 = Math.floor(Math.random() * (5 - 1)) + 1;
  console.log(numberDay1)
  kWord = ADJECTIVE_VOCA_K[numberDay1];
  eWord = ADJECTIVE_VOCA_E[numberDay1];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDay1GeVoca() {
  let numberDay1 = Math.floor(Math.random() * (5 - 1)) + 1;
  console.log(numberDay1)
  kWord = VERB_GENERAL_POSITIVE_ALL[numberDay1];
  eWord = VERB_GENERAL_POSITIVE_ALL_E[numberDay1];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDay1AllVoca() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay1BeVoca();
      break;
    case 2:
      getDay1GeVoca();
      break;
  }
}
function getDay1VocaPlus() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay1BeVoca();
      break;
    case 2:
      getDay1GeVoca();
      break;
  }
}

//be동사 평서문
function getDay1BeSentence1() {
  let numberDay1 = Math.floor(Math.random() * (5 - 1)) + 1;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_POSITIVE_ALL_K[numberDay1];
  eWord = PEOPLE_S_All_Be_E[valueNumber1] + " " + ADJECTIVE_VOCA_E[numberDay1];
  console.log(numberDay1, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 부정문
function getDay1BeSentence2() {
  let numberDay1 = Math.floor(Math.random() * (5 - 1)) + 1;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_NEGATIVE_ALL_K[numberDay1];
  eWord = PEOPLE_S_All_Be_E[valueNumber1] + "not " + ADJECTIVE_VOCA_E[numberDay1];
  console.log(numberDay1, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 의문문
function getDay1BeSentence3() {
  let numberDay1 = Math.floor(Math.random() * (5 - 1)) + 1;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_INTERROGATIVE_ALL_K[numberDay1];
  eWord = PEOPLE_S_All_Be_INTERROGATIVE_E[valueNumber1] + " " + ADJECTIVE_VOCA_E[numberDay1] + "?";
  console.log(numberDay1, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//일반동사 평서문
function getDay1GeSentence1() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay1 = Math.floor(Math.random() * (5 - 1)) + 1;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL[numberDay1];
      eWord = S_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE3_ALL_E[numberDay1];
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL[numberDay1];
      eWord = NoS_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay1];
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 부정문
function getDay1GeSentence2() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay1 = Math.floor(Math.random() * (5 - 1)) + 1;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_NEGATIVE_ALL[numberDay1];
      eWord = S_E[valueNumber1] + " doesn't " + VERB_GENERAL_POSITIVE_ALL_E[numberDay1];
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_NEGATIVE_ALL[numberDay1];
      eWord = NoS_E[valueNumber2] + " don't " + VERB_GENERAL_POSITIVE_ALL_E[numberDay1];
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 의문문
function getDay1GeSentence3() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay1 = Math.floor(Math.random() * (5 - 1)) + 1;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_INTERROGATIVE_ALL[numberDay1];
      eWord = S_INTERROGATIVE_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay1] + "?";
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_INTERROGATIVE_ALL[numberDay1];
      eWord = NoS_INTERROGATIVE_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay1] + "?";
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
function getDay1Sentence1() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay1BeSentence1();
      break;
    case 2:
      getDay1GeSentence1();
      break;
  }
}
function getDay1Sentence2() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay1BeSentence2();
      break;
    case 2:
      getDay1GeSentence2();
      break;
  }
}
function getDay1Sentence3() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay1BeSentence3();
      break;
    case 2:
      getDay1GeSentence3();
      break;
  }
}

function getDay1RandomVerbAll() {
  let chosenNumbers = Math.floor(Math.random() * 6) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay1BeSentence1();
      break;
    case 2:
      getDay1BeSentence2();
      break;
    case 3:
      getDay1BeSentence3();
      break;
    case 4:
      getDay1GeSentence1();
      break;
    case 5:
      getDay1GeSentence2();
      break;
    case 6:
      getDay1GeSentence3();
      break;
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// Day 2 ////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
function getDay2BeVoca() {
  let numberDay2 = Math.floor(Math.random() * (10 - 5)) + 5;
  console.log(numberDay2)
  kWord = ADJECTIVE_VOCA_K[numberDay2];
  eWord = ADJECTIVE_VOCA_E[numberDay2];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDay2GeVoca() {
  let numberDay2 = Math.floor(Math.random() * (10 - 5)) + 5;
  console.log(numberDay2)
  kWord = VERB_GENERAL_POSITIVE_ALL[numberDay2];
  eWord = VERB_GENERAL_POSITIVE_ALL_E[numberDay2];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDay2AllVoca() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay2BeVoca();
      break;
    case 2:
      getDay2GeVoca();
      break;
  }
}
function getDay2VocaPlus() {
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay1BeVoca();
      break;
    case 2:
      getDay1GeVoca();
      break;
    case 3:
      getDay2BeVoca();
      break;
    case 4:
      getDay2GeVoca();
      break;
  }
}

//be동사 평서문
function getDay2BeSentence1() {
  let numberDay2 = Math.floor(Math.random() * (10 - 5)) + 5;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_POSITIVE_ALL_K[numberDay2];
  eWord = PEOPLE_S_All_Be_E[valueNumber1] + " " + ADJECTIVE_VOCA_E[numberDay2];
  console.log(numberDay2, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 부정문
function getDay2BeSentence2() {
  let numberDay2 = Math.floor(Math.random() * (5 - 1)) + 1;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_NEGATIVE_ALL_K[numberDay2];
  eWord = PEOPLE_S_All_Be_E[valueNumber1] + "not " + ADJECTIVE_VOCA_E[numberDay2];
  console.log(numberDay2, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 의문문
function getDay2BeSentence3() {
  let numberDay2 = Math.floor(Math.random() * (5 - 1)) + 1;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_INTERROGATIVE_ALL_K[numberDay2];
  eWord = PEOPLE_S_All_Be_INTERROGATIVE_E[valueNumber1] + " " + ADJECTIVE_VOCA_E[numberDay2] + "?";
  console.log(numberDay2, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//일반동사 평서문
function getDay2GeSentence1() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay2 = Math.floor(Math.random() * (5 - 1)) + 1;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL[numberDay2];
      eWord = S_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE3_ALL_E[numberDay2];
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL[numberDay2];
      eWord = NoS_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay2];
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 부정문
function getDay2GeSentence2() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay2 = Math.floor(Math.random() * (5 - 1)) + 1;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_NEGATIVE_ALL[numberDay2];
      eWord = S_E[valueNumber1] + " doesn't " + VERB_GENERAL_POSITIVE_ALL_E[numberDay2];
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_NEGATIVE_ALL[numberDay2];
      eWord = NoS_E[valueNumber2] + " don't " + VERB_GENERAL_POSITIVE_ALL_E[numberDay2];
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 의문문
function getDay2GeSentence3() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay2 = Math.floor(Math.random() * (5 - 1)) + 1;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_INTERROGATIVE_ALL[numberDay2];
      eWord = S_INTERROGATIVE_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay2] + "?";
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_INTERROGATIVE_ALL[numberDay2];
      eWord = NoS_INTERROGATIVE_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay2] + "?";
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
function getDay2Sentence1() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay2BeSentence1();
      break;
    case 2:
      getDay2GeSentence1();
      break;
  }
}
function getDay2Sentence2() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay2BeSentence2();
      break;
    case 2:
      getDay2GeSentence2();
      break;
  }
}
function getDay2Sentence3() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay2BeSentence3();
      break;
    case 2:
      getDay2GeSentence3();
      break;
  }
}

function getDay2RandomVerbAll() {
  let chosenNumbers = Math.floor(Math.random() * 6) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay2BeSentence1();
      break;
    case 2:
      getDay2BeSentence2();
      break;
    case 3:
      getDay2BeSentence3();
      break;
    case 4:
      getDay2GeSentence1();
      break;
    case 5:
      getDay2GeSentence2();
      break;
    case 6:
      getDay2GeSentence3();
      break;
  }
}
////////////////////////////////////////////// Day 2 //////////////////////////////////////////////
////////////////////////////////////////////// Day 3 ///////////////////////////////////////////////
function getDay3BeVoca() {
  let numberDay3 = Math.floor(Math.random() * (15 - 11)) + 11;
  console.log(numberDay3)
  kWord = ADJECTIVE_VOCA_K[numberDay3];
  eWord = ADJECTIVE_VOCA_E[numberDay3];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDay3GeVoca() {
  let numberDay3 = Math.floor(Math.random() * (15 - 11)) + 11;
  console.log(numberDay3)
  kWord = VERB_GENERAL_POSITIVE_ALL[numberDay3];
  eWord = VERB_GENERAL_POSITIVE_ALL_E[numberDay3];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDay3AllVoca() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay3BeVoca();
      break;
    case 2:
      getDay3GeVoca();
      break;
  }
}
function getDay3VocaPlus() {
  let chooseNumbers = Math.floor(Math.random() * 6) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay1BeVoca();
      break;
    case 2:
      getDay1GeVoca();
      break;
    case 3:
      getDay2BeVoca();
      break;
    case 4:
      getDay2GeVoca();
      break;
    case 5:
      getDay3BeVoca();
      break;
    case 6:
      getDay3GeVoca();
      break;
  }
}
//be동사 평서문
function getDay3BeSentence1() {
  let numberDay3 = Math.floor(Math.random() * (15 - 11)) + 11;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_POSITIVE_ALL_K[numberDay3];
  eWord = PEOPLE_S_All_Be_E[valueNumber1] + " " + ADJECTIVE_VOCA_E[numberDay3];
  console.log(numberDay3, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 부정문
function getDay3BeSentence2() {
  let numberDay3 = Math.floor(Math.random() * (15 - 11)) + 11;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_NEGATIVE_ALL_K[numberDay3];
  eWord = PEOPLE_S_All_Be_E[valueNumber1] + "not " + ADJECTIVE_VOCA_E[numberDay3];
  console.log(numberDay3, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 의문문
function getDay3BeSentence3() {
  let numberDay3 = Math.floor(Math.random() * (15 - 11)) + 11;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_INTERROGATIVE_ALL_K[numberDay3];
  eWord = PEOPLE_S_All_Be_INTERROGATIVE_E[valueNumber1] + " " + ADJECTIVE_VOCA_E[numberDay3] + "?";
  console.log(numberDay3, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//일반동사 평서문
function getDay3GeSentence1() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay3 = Math.floor(Math.random() * (15 - 11)) + 11;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL[numberDay3];
      eWord = S_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE3_ALL_E[numberDay3];
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL[numberDay3];
      eWord = NoS_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay3];
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 부정문
function getDay3GeSentence2() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay3 = Math.floor(Math.random() * (15 - 11)) + 11;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_NEGATIVE_ALL[numberDay3];
      eWord = S_E[valueNumber1] + " doesn't " + VERB_GENERAL_POSITIVE_ALL_E[numberDay3];
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_NEGATIVE_ALL[numberDay3];
      eWord = NoS_E[valueNumber2] + " don't " + VERB_GENERAL_POSITIVE_ALL_E[numberDay3];
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 의문문
function getDay3GeSentence3() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay3 = Math.floor(Math.random() * (15 - 11)) + 11;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_INTERROGATIVE_ALL[numberDay3];
      eWord = S_INTERROGATIVE_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay3] + "?";
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_INTERROGATIVE_ALL[numberDay3];
      eWord = NoS_INTERROGATIVE_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay3] + "?";
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
function getDay3Sentence1() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay3BeSentence1();
      break;
    case 2:
      getDay3GeSentence1();
      break;
  }
}
function getDay3Sentence2() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay3BeSentence2();
      break;
    case 2:
      getDay3GeSentence2();
      break;
  }
}
function getDay3Sentence3() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay3BeSentence3();
      break;
    case 2:
      getDay3GeSentence3();
      break;
  }
}

function getDay3RandomVerbAll() {
  let chosenNumbers = Math.floor(Math.random() * 6) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay3BeSentence1();
      break;
    case 2:
      getDay3BeSentence2();
      break;
    case 3:
      getDay3BeSentence3();
      break;
    case 4:
      getDay3GeSentence1();
      break;
    case 5:
      getDay3GeSentence2();
      break;
    case 6:
      getDay3GeSentence3();
      break;
  }
}
////////////////////////////////////////////// Day 3 //////////////////////////////////////////////
////////////////////////////////////////////// Day 4 ///////////////////////////////////////////////
function getDay4BeVoca() {
  let numberDay4 = Math.floor(Math.random() * (20 - 15)) + 15;
  console.log(numberDay4)
  kWord = ADJECTIVE_VOCA_K[numberDay4];
  eWord = ADJECTIVE_VOCA_E[numberDay4];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDay4GeVoca() {
  let numberDay4 = Math.floor(Math.random() * (20 - 15)) + 15;
  console.log(numberDay4)
  kWord = VERB_GENERAL_POSITIVE_ALL[numberDay4];
  eWord = VERB_GENERAL_POSITIVE_ALL_E[numberDay4];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDay4AllVoca() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay4BeVoca();
      break;
    case 2:
      getDay4GeVoca();
      break;
  }
}

function getDay4VocaPlus() {
  let chooseNumbers = Math.floor(Math.random() * 8) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay1BeVoca();
      break;
    case 2:
      getDay1GeVoca();
      break;
    case 3:
      getDay2BeVoca();
      break;
    case 4:
      getDay2GeVoca();
      break;
    case 5:
      getDay3BeVoca();
      break;
    case 6:
      getDay3GeVoca();
      break;
    case 7:
      getDay4BeVoca();
      break;
    case 8:
      getDay4GeVoca();
      break;
  }
}
//be동사 평서문
function getDay4BeSentence1() {
  let numberDay4 = Math.floor(Math.random() * (20 - 15)) + 15;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_POSITIVE_ALL_K[numberDay4];
  eWord = PEOPLE_S_All_Be_E[valueNumber1] + " " + ADJECTIVE_VOCA_E[numberDay4];
  console.log(numberDay4, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 부정문
function getDay4BeSentence2() {
  let numberDay4 = Math.floor(Math.random() * (20 - 15)) + 15;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_NEGATIVE_ALL_K[numberDay4];
  eWord = PEOPLE_S_All_Be_E[valueNumber1] + "not " + ADJECTIVE_VOCA_E[numberDay4];
  console.log(numberDay4, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 의문문
function getDay4BeSentence3() {
  let numberDay4 = Math.floor(Math.random() * (20 - 15)) + 15;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_INTERROGATIVE_ALL_K[numberDay4];
  eWord = PEOPLE_S_All_Be_INTERROGATIVE_E[valueNumber1] + " " + ADJECTIVE_VOCA_E[numberDay4] + "?";
  console.log(numberDay4, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//일반동사 평서문
function getDay4GeSentence1() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay4 = Math.floor(Math.random() * (20 - 15)) + 15;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL[numberDay4];
      eWord = S_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE3_ALL_E[numberDay4];
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL[numberDay4];
      eWord = NoS_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay4];
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 부정문
function getDay4GeSentence2() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay4 = Math.floor(Math.random() * (20 - 15)) + 15;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_NEGATIVE_ALL[numberDay4];
      eWord = S_E[valueNumber1] + " doesn't " + VERB_GENERAL_POSITIVE_ALL_E[numberDay4];
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_NEGATIVE_ALL[numberDay4];
      eWord = NoS_E[valueNumber2] + " don't " + VERB_GENERAL_POSITIVE_ALL_E[numberDay4];
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 의문문
function getDay4GeSentence3() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay4 = Math.floor(Math.random() * (20 - 15)) + 15;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_INTERROGATIVE_ALL[numberDay4];
      eWord = S_INTERROGATIVE_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay4] + "?";
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_INTERROGATIVE_ALL[numberDay4];
      eWord = NoS_INTERROGATIVE_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay4] + "?";
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
function getDay4Sentence1() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay4BeSentence1();
      break;
    case 2:
      getDay4GeSentence1();
      break;
  }
}
function getDay4Sentence2() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay4BeSentence2();
      break;
    case 2:
      getDay4GeSentence2();
      break;
  }
}
function getDay4Sentence3() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay4BeSentence3();
      break;
    case 2:
      getDay4GeSentence3();
      break;
  }
}

function getDay4RandomVerbAll() {
  let chosenNumbers = Math.floor(Math.random() * 6) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay4BeSentence1();
      break;
    case 2:
      getDay4BeSentence2();
      break;
    case 3:
      getDay4BeSentence3();
      break;
    case 4:
      getDay4GeSentence1();
      break;
    case 5:
      getDay4GeSentence2();
      break;
    case 6:
      getDay4GeSentence3();
      break;
  }
}
////////////////////////////////////////////// Day 4 //////////////////////////////////////////////
////////////////////////////////////////////// Day 5 ///////////////////////////////////////////////
function getDay5BeVoca() {
  let numberDay5 = Math.floor(Math.random() * (25 - 20)) + 20;
  console.log(numberDay5)
  kWord = ADJECTIVE_VOCA_K[numberDay5];
  eWord = ADJECTIVE_VOCA_E[numberDay5];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDay5GeVoca() {
  let numberDay5 = Math.floor(Math.random() * (25 - 20)) + 20;
  console.log(numberDay5)
  kWord = VERB_GENERAL_POSITIVE_ALL[numberDay5];
  eWord = VERB_GENERAL_POSITIVE_ALL_E[numberDay5];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDay5AllVoca() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay5BeVoca();
      break;
    case 2:
      getDay5GeVoca();
      break;
  }
}

function getDay5VocaPlus() {
  let chooseNumbers = Math.floor(Math.random() * 10) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay1BeVoca();
      break;
    case 2:
      getDay1GeVoca();
      break;
    case 3:
      getDay2BeVoca();
      break;
    case 4:
      getDay2GeVoca();
      break;
    case 5:
      getDay3BeVoca();
      break;
    case 6:
      getDay3GeVoca();
      break;
    case 7:
      getDay4BeVoca();
      break;
    case 8:
      getDay4GeVoca();
      break;
    case 9:
      getDay5BeVoca();
      break;
    case 10:
      getDay5GeVoca();
      break;
  }
}
//be동사 평서문
function getDay5BeSentence1() {
  let numberDay5 = Math.floor(Math.random() * (25 - 20)) + 20;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_POSITIVE_ALL_K[numberDay5];
  eWord = PEOPLE_S_All_Be_E[valueNumber1] + " " + ADJECTIVE_VOCA_E[numberDay5];
  console.log(numberDay5, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 부정문
function getDay5BeSentence2() {
  let numberDay5 = Math.floor(Math.random() * (25 - 20)) + 20;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_NEGATIVE_ALL_K[numberDay5];
  eWord = PEOPLE_S_All_Be_E[valueNumber1] + "not " + ADJECTIVE_VOCA_E[numberDay5];
  console.log(numberDay5, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 의문문
function getDay5BeSentence3() {
  let numberDay5 = Math.floor(Math.random() * (25 - 20)) + 20;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_INTERROGATIVE_ALL_K[numberDay5];
  eWord = PEOPLE_S_All_Be_INTERROGATIVE_E[valueNumber1] + " " + ADJECTIVE_VOCA_E[numberDay5] + "?";
  console.log(numberDay5, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//일반동사 평서문
function getDay5GeSentence1() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay5 = Math.floor(Math.random() * (25 - 20)) + 20;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL[numberDay5];
      eWord = S_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE3_ALL_E[numberDay5];
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL[numberDay5];
      eWord = NoS_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay5];
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 부정문
function getDay5GeSentence2() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay5 = Math.floor(Math.random() * (25 - 20)) + 20;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_NEGATIVE_ALL[numberDay5];
      eWord = S_E[valueNumber1] + " doesn't " + VERB_GENERAL_POSITIVE_ALL_E[numberDay5];
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_NEGATIVE_ALL[numberDay5];
      eWord = NoS_E[valueNumber2] + " don't " + VERB_GENERAL_POSITIVE_ALL_E[numberDay5];
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}




//일반동사 의문문
function getDay5GeSentence3() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay5 = Math.floor(Math.random() * (25 - 20)) + 20;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_INTERROGATIVE_ALL[numberDay5];
      eWord = S_INTERROGATIVE_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay5] + "?";
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_INTERROGATIVE_ALL[numberDay5];
      eWord = NoS_INTERROGATIVE_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay5] + "?";
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
function getDay5Sentence1() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay5BeSentence1();
      break;
    case 2:
      getDay5GeSentence1();
      break;
  }
}
function getDay5Sentence2() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay5BeSentence2();
      break;
    case 2:
      getDay5GeSentence2();
      break;
  }
}
function getDay5Sentence3() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay5BeSentence3();
      break;
    case 2:
      getDay5GeSentence3();
      break;
  }
}
function getDay5RandomVerbAll() {
  let chosenNumbers = Math.floor(Math.random() * 6) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay5BeSentence1();
      break;
    case 2:
      getDay5BeSentence2();
      break;
    case 3:
      getDay5BeSentence3();
      break;
    case 4:
      getDay5GeSentence1();
      break;
    case 5:
      getDay5GeSentence2();
      break;
    case 6:
      getDay5GeSentence3();
      break;
  }
}
////////////////////////////////////////////// Day 5 //////////////////////////////////////////////
////////////////////////////////////////////// Day 6 ///////////////////////////////////////////////
function getDay6BeVoca() {
  let numberDay6 = Math.floor(Math.random() * (30 - 25)) + 25;
  console.log(numberDay6)
  kWord = ADJECTIVE_VOCA_K[numberDay6];
  eWord = ADJECTIVE_VOCA_E[numberDay6];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDay6GeVoca() {
  let numberDay6 = Math.floor(Math.random() * (30 - 25)) + 25;
  console.log(numberDay6)
  kWord = VERB_GENERAL_POSITIVE_ALL[numberDay6];
  eWord = VERB_GENERAL_POSITIVE_ALL_E[numberDay6];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDay6AllVoca() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay6BeVoca();
      break;
    case 2:
      getDay6GeVoca();
      break;
  }
}
function getDay6VocaPlus() {
  let chooseNumbers = Math.floor(Math.random() * 12) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay1BeVoca();
      break;
    case 2:
      getDay1GeVoca();
      break;
    case 3:
      getDay2BeVoca();
      break;
    case 4:
      getDay2GeVoca();
      break;
    case 5:
      getDay3BeVoca();
      break;
    case 6:
      getDay3GeVoca();
      break;
    case 7:
      getDay4BeVoca();
      break;
    case 8:
      getDay4GeVoca();
      break;
    case 9:
      getDay5BeVoca();
      break;
    case 10:
      getDay5GeVoca();
      break;
    case 11:
      getDay6BeVoca();
      break;
    case 12:
      getDay6GeVoca();
      break;
  }
}
//be동사 평서문
function getDay6BeSentence1() {
  let numberDay6 = Math.floor(Math.random() * (30 - 25)) + 25;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_POSITIVE_ALL_K[numberDay6];
  eWord = PEOPLE_S_All_Be_E[valueNumber1] + " " + ADJECTIVE_VOCA_E[numberDay6];
  console.log(numberDay6, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 부정문
function getDay6BeSentence2() {
  let numberDay6 = Math.floor(Math.random() * (30 - 25)) + 25;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_NEGATIVE_ALL_K[numberDay6];
  eWord = PEOPLE_S_All_Be_E[valueNumber1] + "not " + ADJECTIVE_VOCA_E[numberDay6];
  console.log(numberDay6, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 의문문
function getDay6BeSentence3() {
  let numberDay6 = Math.floor(Math.random() * (30 - 25)) + 25;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_INTERROGATIVE_ALL_K[numberDay6];
  eWord = PEOPLE_S_All_Be_INTERROGATIVE_E[valueNumber1] + " " + ADJECTIVE_VOCA_E[numberDay6] + "?";
  console.log(numberDay6, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//일반동사 평서문
function getDay6GeSentence1() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay6 = Math.floor(Math.random() * (30 - 25)) + 25;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL[numberDay6];
      eWord = S_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE3_ALL_E[numberDay6];
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL[numberDay6];
      eWord = NoS_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay6];
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 부정문
function getDay6GeSentence2() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay6 = Math.floor(Math.random() * (30 - 25)) + 25;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_NEGATIVE_ALL[numberDay6];
      eWord = S_E[valueNumber1] + " doesn't " + VERB_GENERAL_POSITIVE_ALL_E[numberDay6];
      console.log(chooseNumbers, valueNumber1, numberDay6)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_NEGATIVE_ALL[numberDay6];
      eWord = NoS_E[valueNumber2] + " don't " + VERB_GENERAL_POSITIVE_ALL_E[numberDay6];
      console.log(chooseNumbers, valueNumber2, numberDay6)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 의문문
function getDay6GeSentence3() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay6 = Math.floor(Math.random() * (30 - 25)) + 25;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_INTERROGATIVE_ALL[numberDay6];
      eWord = S_INTERROGATIVE_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay6] + "?";
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_INTERROGATIVE_ALL[numberDay6];
      eWord = NoS_INTERROGATIVE_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay6] + "?";
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
function getDay6Sentence1() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay6BeSentence1();
      break;
    case 2:
      getDay6GeSentence1();
      break;
  }
}
function getDay6Sentence2() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay6BeSentence2();
      break;
    case 2:
      getDay6GeSentence2();
      break;
  }
}
function getDay6Sentence3() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay6BeSentence3();
      break;
    case 2:
      getDay6GeSentence3();
      break;
  }
}
function getDay6RandomVerbAll() {
  let chosenNumbers = Math.floor(Math.random() * 6) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay6BeSentence1();
      break;
    case 2:
      getDay6BeSentence2();
      break;
    case 3:
      getDay6BeSentence3();
      break;
    case 4:
      getDay6GeSentence1();
      break;
    case 5:
      getDay6GeSentence2();
      break;
    case 6:
      getDay6GeSentence3();
      break;
  }
}
////////////////////////////////////////////// Day 6 //////////////////////////////////////////////
////////////////////////////////////////////// Day 7 ///////////////////////////////////////////////
function getDay7BeVoca() {
  let numberDay7 = Math.floor(Math.random() * (35 - 30)) + 30;
  console.log(numberDay7)
  kWord = ADJECTIVE_VOCA_K[numberDay7];
  eWord = ADJECTIVE_VOCA_E[numberDay7];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDay7GeVoca() {
  let numberDay7 = Math.floor(Math.random() * (35 - 30)) + 30;
  console.log(numberDay7)
  kWord = VERB_GENERAL_POSITIVE_ALL[numberDay7];
  eWord = VERB_GENERAL_POSITIVE_ALL_E[numberDay7];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDay7AllVoca() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay7BeVoca();
      break;
    case 2:
      getDay7GeVoca();
      break;
  }
}
function getDay7VocaPlus() {
  let chooseNumbers = Math.floor(Math.random() * 14) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay1BeVoca();
      break;
    case 2:
      getDay1GeVoca();
      break;
    case 3:
      getDay2BeVoca();
      break;
    case 4:
      getDay2GeVoca();
      break;
    case 5:
      getDay3BeVoca();
      break;
    case 6:
      getDay3GeVoca();
      break;
    case 7:
      getDay4BeVoca();
      break;
    case 8:
      getDay4GeVoca();
      break;
    case 9:
      getDay5BeVoca();
      break;
    case 10:
      getDay5GeVoca();
      break;
    case 11:
      getDay6BeVoca();
      break;
    case 12:
      getDay6GeVoca();
      break;
    case 13:
      getDay7BeVoca();
      break;
    case 14:
      getDay7GeVoca();
      break;
  }
}
//be동사 평서문
function getDay7BeSentence1() {
  let numberDay7 = Math.floor(Math.random() * (35 - 30)) + 30;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_POSITIVE_ALL_K[numberDay7];
  eWord = PEOPLE_S_All_Be_E[valueNumber1] + " " + ADJECTIVE_VOCA_E[numberDay7];
  console.log(numberDay7, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 부정문
function getDay7BeSentence2() {
  let numberDay7 = Math.floor(Math.random() * (35 - 30)) + 30;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_NEGATIVE_ALL_K[numberDay7];
  eWord = PEOPLE_S_All_Be_E[valueNumber1] + "not " + ADJECTIVE_VOCA_E[numberDay7];
  console.log(numberDay7, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 의문문
function getDay7BeSentence3() {
  let numberDay7 = Math.floor(Math.random() * (35 - 30)) + 30;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_INTERROGATIVE_ALL_K[numberDay7];
  eWord = PEOPLE_S_All_Be_INTERROGATIVE_E[valueNumber1] + " " + ADJECTIVE_VOCA_E[numberDay7] + "?";
  console.log(numberDay7, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//일반동사 평서문
function getDay7GeSentence1() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay7 = Math.floor(Math.random() * (35 - 30)) + 30;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL[numberDay7];
      eWord = S_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE3_ALL_E[numberDay7];
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL[numberDay7];
      eWord = NoS_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay7];
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 부정문
function getDay7GeSentence2() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay7 = Math.floor(Math.random() * (35 - 30)) + 30;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_NEGATIVE_ALL[numberDay7];
      eWord = S_E[valueNumber1] + " doesn't " + VERB_GENERAL_POSITIVE_ALL_E[numberDay7];
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_NEGATIVE_ALL[numberDay7];
      eWord = NoS_E[valueNumber2] + " don't " + VERB_GENERAL_POSITIVE_ALL_E[numberDay7];
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 의문문
function getDay7GeSentence3() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay7 = Math.floor(Math.random() * (35 - 30)) + 30;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_INTERROGATIVE_ALL[numberDay7];
      eWord = S_INTERROGATIVE_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay7] + "?";
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_INTERROGATIVE_ALL[numberDay7];
      eWord = NoS_INTERROGATIVE_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay7] + "?";
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
function getDay7Sentence1() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay7BeSentence1();
      break;
    case 2:
      getDay7GeSentence1();
      break;
  }
}
function getDay7Sentence2() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay7BeSentence2();
      break;
    case 2:
      getDay7GeSentence2();
      break;
  }
}
function getDay7Sentence3() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay7BeSentence3();
      break;
    case 2:
      getDay7GeSentence3();
      break;
  }
}
function getDay7RandomVerbAll() {
  let chosenNumbers = Math.floor(Math.random() * 6) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay7BeSentence1();
      break;
    case 2:
      getDay7BeSentence2();
      break;
    case 3:
      getDay7BeSentence3();
      break;
    case 4:
      getDay7GeSentence1();
      break;
    case 5:
      getDay7GeSentence2();
      break;
    case 6:
      getDay7GeSentence3();
      break;
  }
}
////////////////////////////////////////////// Day 7 //////////////////////////////////////////////
////////////////////////////////////////////// Day 8 ///////////////////////////////////////////////
function getDay8BeVoca() {
  let numberDay8 = Math.floor(Math.random() * (40 - 35)) + 35;
  console.log(numberDay8)
  kWord = ADJECTIVE_VOCA_K[numberDay8];
  eWord = ADJECTIVE_VOCA_E[numberDay8];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDay8GeVoca() {
  let numberDay8 = Math.floor(Math.random() * (40 - 35)) + 35;
  console.log(numberDay8)
  kWord = VERB_GENERAL_POSITIVE_ALL[numberDay8];
  eWord = VERB_GENERAL_POSITIVE_ALL_E[numberDay8];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDay8AllVoca() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay8BeVoca();
      break;
    case 2:
      getDay8GeVoca();
      break;
  }
}
function getDay8VocaPlus() {
  let chooseNumbers = Math.floor(Math.random() * 16) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay1BeVoca();
      break;
    case 2:
      getDay1GeVoca();
      break;
    case 3:
      getDay2BeVoca();
      break;
    case 4:
      getDay2GeVoca();
      break;
    case 5:
      getDay3BeVoca();
      break;
    case 6:
      getDay3GeVoca();
      break;
    case 7:
      getDay4BeVoca();
      break;
    case 8:
      getDay4GeVoca();
      break;
    case 9:
      getDay5BeVoca();
      break;
    case 10:
      getDay5GeVoca();
      break;
    case 11:
      getDay6BeVoca();
      break;
    case 12:
      getDay6GeVoca();
      break;
    case 13:
      getDay7BeVoca();
      break;
    case 14:
      getDay7GeVoca();
      break;
    case 15:
      getDay8BeVoca();
      break;
    case 16:
      getDay8GeVoca();
      break;
  }
}
//be동사 평서문
function getDay8BeSentence1() {
  let numberDay8 = Math.floor(Math.random() * (40 - 35)) + 35;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_POSITIVE_ALL_K[numberDay8];
  eWord = PEOPLE_S_All_Be_E[valueNumber1] + " " + ADJECTIVE_VOCA_E[numberDay8];
  console.log(numberDay8, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 부정문
function getDay8BeSentence2() {
  let numberDay8 = Math.floor(Math.random() * (40 - 35)) + 35;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_NEGATIVE_ALL_K[numberDay8];
  eWord = PEOPLE_S_All_Be_E[valueNumber1] + "not " + ADJECTIVE_VOCA_E[numberDay8];
  console.log(numberDay8, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 의문문
function getDay8BeSentence3() {
  let numberDay8 = Math.floor(Math.random() * (40 - 35)) + 35;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_INTERROGATIVE_ALL_K[numberDay8];
  eWord = PEOPLE_S_All_Be_INTERROGATIVE_E[valueNumber1] + " " + ADJECTIVE_VOCA_E[numberDay8] + "?";
  console.log(numberDay8, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//일반동사 평서문
function getDay8GeSentence1() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay8 = Math.floor(Math.random() * (40 - 35)) + 35;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL[numberDay8];
      eWord = S_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE3_ALL_E[numberDay8];
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL[numberDay8];
      eWord = NoS_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay8];
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 부정문
function getDay8GeSentence2() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay8 = Math.floor(Math.random() * (40 - 35)) + 35;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_NEGATIVE_ALL[numberDay8];
      eWord = S_E[valueNumber1] + " doesn't " + VERB_GENERAL_POSITIVE_ALL_E[numberDay8];
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_NEGATIVE_ALL[numberDay8];
      eWord = NoS_E[valueNumber2] + " don't " + VERB_GENERAL_POSITIVE_ALL_E[numberDay8];
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 의문문
function getDay8GeSentence3() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay8 = Math.floor(Math.random() * (40 - 35)) + 35;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_INTERROGATIVE_ALL[numberDay8];
      eWord = S_INTERROGATIVE_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay8] + "?";
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_INTERROGATIVE_ALL[numberDay8];
      eWord = NoS_INTERROGATIVE_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay8] + "?";
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
function getDay8Sentence1() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay8BeSentence1();
      break;
    case 2:
      getDay8GeSentence1();
      break;
  }
}
function getDay8Sentence2() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay8BeSentence2();
      break;
    case 2:
      getDay8GeSentence2();
      break;
  }
}
function getDay8Sentence3() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay8BeSentence3();
      break;
    case 2:
      getDay8GeSentence3();
      break;
  }
}
function getDay8RandomVerbAll() {
  let chosenNumbers = Math.floor(Math.random() * 6) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay8BeSentence1();
      break;
    case 2:
      getDay8BeSentence2();
      break;
    case 3:
      getDay8BeSentence3();
      break;
    case 4:
      getDay8GeSentence1();
      break;
    case 5:
      getDay8GeSentence2();
      break;
    case 6:
      getDay8GeSentence3();
      break;
  }
}
////////////////////////////////////////////// Day 8 //////////////////////////////////////////////
////////////////////////////////////////////// Day 9 ///////////////////////////////////////////////
function getDay9BeVoca() {
  let numberDay9 = Math.floor(Math.random() * (45 - 40)) + 40;
  console.log(numberDay9)
  kWord = ADJECTIVE_VOCA_K[numberDay9];
  eWord = ADJECTIVE_VOCA_E[numberDay9];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDay9GeVoca() {
  let numberDay9 = Math.floor(Math.random() * (45 - 40)) + 40;
  console.log(numberDay9)
  kWord = VERB_GENERAL_POSITIVE_ALL[numberDay9];
  eWord = VERB_GENERAL_POSITIVE_ALL_E[numberDay9];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDay9AllVoca() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay9BeVoca();
      break;
    case 2:
      getDay9GeVoca();
      break;
  }
}
function getDay9VocaPlus() {
  let chooseNumbers = Math.floor(Math.random() * 18) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay1BeVoca();
      break;
    case 2:
      getDay1GeVoca();
      break;
    case 3:
      getDay2BeVoca();
      break;
    case 4:
      getDay2GeVoca();
      break;
    case 5:
      getDay3BeVoca();
      break;
    case 6:
      getDay3GeVoca();
      break;
    case 7:
      getDay4BeVoca();
      break;
    case 8:
      getDay4GeVoca();
      break;
    case 9:
      getDay5BeVoca();
      break;
    case 10:
      getDay5GeVoca();
      break;
    case 11:
      getDay6BeVoca();
      break;
    case 12:
      getDay6GeVoca();
      break;
    case 13:
      getDay7BeVoca();
      break;
    case 14:
      getDay7GeVoca();
      break;
    case 15:
      getDay8BeVoca();
      break;
    case 16:
      getDay8GeVoca();
      break;
    case 17:
      getDay9BeVoca();
      break;
    case 18:
      getDay9GeVoca();
      break;
  }
}
//be동사 평서문
function getDay9BeSentence1() {
  let numberDay9 = Math.floor(Math.random() * (45 - 40)) + 40;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_POSITIVE_ALL_K[numberDay9];
  eWord = PEOPLE_S_All_Be_E[valueNumber1] + " " + ADJECTIVE_VOCA_E[numberDay9];
  console.log(numberDay9, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 부정문
function getDay9BeSentence2() {
  let numberDay9 = Math.floor(Math.random() * (45 - 40)) + 40;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_NEGATIVE_ALL_K[numberDay9];
  eWord = PEOPLE_S_All_Be_E[valueNumber1] + "not " + ADJECTIVE_VOCA_E[numberDay9];
  console.log(numberDay9, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 의문문
function getDay9BeSentence3() {
  let numberDay9 = Math.floor(Math.random() * (45 - 40)) + 40;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_INTERROGATIVE_ALL_K[numberDay9];
  eWord = PEOPLE_S_All_Be_INTERROGATIVE_E[valueNumber1] + " " + ADJECTIVE_VOCA_E[numberDay9] + "?";
  console.log(numberDay9, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//일반동사 평서문
function getDay9GeSentence1() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay9 = Math.floor(Math.random() * (45 - 40)) + 40;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL[numberDay9];
      eWord = S_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE3_ALL_E[numberDay9];
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL[numberDay9];
      eWord = NoS_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay9];
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 부정문
function getDay9GeSentence2() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay9 = Math.floor(Math.random() * (45 - 40)) + 40;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_NEGATIVE_ALL[numberDay9];
      eWord = S_E[valueNumber1] + " doesn't " + VERB_GENERAL_POSITIVE_ALL_E[numberDay9];
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_NEGATIVE_ALL[numberDay9];
      eWord = NoS_E[valueNumber2] + " don't " + VERB_GENERAL_POSITIVE_ALL_E[numberDay9];
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 의문문
function getDay9GeSentence3() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay9 = Math.floor(Math.random() * (45 - 40)) + 40;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_INTERROGATIVE_ALL[numberDay9];
      eWord = S_INTERROGATIVE_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay9] + "?";
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_INTERROGATIVE_ALL[numberDay9];
      eWord = NoS_INTERROGATIVE_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay9] + "?";
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
function getDay9Sentence1() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay9BeSentence1();
      break;
    case 2:
      getDay9GeSentence1();
      break;
  }
}
function getDay9Sentence2() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay9BeSentence2();
      break;
    case 2:
      getDay9GeSentence2();
      break;
  }
}
function getDay9Sentence3() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay9BeSentence3();
      break;
    case 2:
      getDay9GeSentence3();
      break;
  }
}
function getDay9RandomVerbAll() {
  let chosenNumbers = Math.floor(Math.random() * 6) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay9BeSentence1();
      break;
    case 2:
      getDay9BeSentence2();
      break;
    case 3:
      getDay9BeSentence3();
      break;
    case 4:
      getDay9GeSentence1();
      break;
    case 5:
      getDay9GeSentence2();
      break;
    case 6:
      getDay9GeSentence3();
      break;
  }
}
////////////////////////////////////////////// Day 9 //////////////////////////////////////////////
////////////////////////////////////////////// Day 10 ///////////////////////////////////////////////
function getDay10BeVoca() {
  let numberDay10 = Math.floor(Math.random() * (50 - 45)) + 45;
  console.log(numberDay10)
  kWord = ADJECTIVE_VOCA_K[numberDay10];
  eWord = ADJECTIVE_VOCA_E[numberDay10];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDay10GeVoca() {
  let numberDay10 = Math.floor(Math.random() * (50 - 45)) + 45;
  console.log(numberDay10)
  kWord = VERB_GENERAL_POSITIVE_ALL[numberDay10];
  eWord = VERB_GENERAL_POSITIVE_ALL_E[numberDay10];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDay10AllVoca() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay10BeVoca();
      break;
    case 2:
      getDay10GeVoca();
      break;
  }
}
function getDay10VocaPlus() {
  let chooseNumbers = Math.floor(Math.random() * 20) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay1BeVoca();
      break;
    case 2:
      getDay1GeVoca();
      break;
    case 3:
      getDay2BeVoca();
      break;
    case 4:
      getDay2GeVoca();
      break;
    case 5:
      getDay3BeVoca();
      break;
    case 6:
      getDay3GeVoca();
      break;
    case 7:
      getDay4BeVoca();
      break;
    case 8:
      getDay4GeVoca();
      break;
    case 9:
      getDay5BeVoca();
      break;
    case 10:
      getDay5GeVoca();
      break;
    case 11:
      getDay6BeVoca();
      break;
    case 12:
      getDay6GeVoca();
      break;
    case 13:
      getDay7BeVoca();
      break;
    case 14:
      getDay7GeVoca();
      break;
    case 15:
      getDay8BeVoca();
      break;
    case 16:
      getDay8GeVoca();
      break;
    case 17:
      getDay9BeVoca();
      break;
    case 18:
      getDay9GeVoca();
      break;
    case 19:
      getDay10BeVoca();
      break;
    case 20:
      getDay10GeVoca();
      break;
  }
}
//be동사 평서문
function getDay10BeSentence1() {
  let numberDay10 = Math.floor(Math.random() * (50 - 45)) + 45;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_POSITIVE_ALL_K[numberDay10];
  eWord = PEOPLE_S_All_Be_E[valueNumber1] + " " + ADJECTIVE_VOCA_E[numberDay10];
  console.log(numberDay10, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 부정문
function getDay10BeSentence2() {
  let numberDay10 = Math.floor(Math.random() * (50 - 45)) + 45;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_NEGATIVE_ALL_K[numberDay10];
  eWord = PEOPLE_S_All_Be_E[valueNumber1] + "not " + ADJECTIVE_VOCA_E[numberDay10];
  console.log(numberDay10, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 의문문
function getDay10BeSentence3() {
  let numberDay10 = Math.floor(Math.random() * (50 - 45)) + 45;
  let valueNumber1 = Math.floor(Math.random() * PEOPLE_S_All_Be_E.length);
  kWord = PEOPLE_S_All_K[valueNumber1] + " " + ADJECTIVE_VOCA_INTERROGATIVE_ALL_K[numberDay10];
  eWord = PEOPLE_S_All_Be_INTERROGATIVE_E[valueNumber1] + " " + ADJECTIVE_VOCA_E[numberDay10] + "?";
  console.log(numberDay10, valueNumber1)

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//일반동사 평서문
function getDay10GeSentence1() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay10 = Math.floor(Math.random() * (50 - 45)) + 45;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL[numberDay10];
      eWord = S_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE3_ALL_E[numberDay10];
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL[numberDay10];
      eWord = NoS_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay10];
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 부정문
function getDay10GeSentence2() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay10 = Math.floor(Math.random() * (50 - 45)) + 45;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_NEGATIVE_ALL[numberDay10];
      eWord = S_E[valueNumber1] + " doesn't " + VERB_GENERAL_POSITIVE_ALL_E[numberDay10];
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_NEGATIVE_ALL[numberDay10];
      eWord = NoS_E[valueNumber2] + " don't " + VERB_GENERAL_POSITIVE_ALL_E[numberDay10];
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//일반동사 의문문
function getDay10GeSentence3() {
  let chooseNumbers = Math.floor(Math.random() * 3);
  let numberDay10 = Math.floor(Math.random() * (50 - 45)) + 45;
  switch (chooseNumbers) {
    case 1: // s파
      let valueNumber1 = Math.floor(Math.random() * S_K.length);
      kWord = S_K[valueNumber1] + " " + VERB_GENERAL_INTERROGATIVE_ALL[numberDay10];
      eWord = S_INTERROGATIVE_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay10] + "?";
      console.log(chooseNumbers, valueNumber1)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2: // No s파
      let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
      kWord = NoS_K[valueNumber2] + " " + VERB_GENERAL_INTERROGATIVE_ALL[numberDay10];
      eWord = NoS_INTERROGATIVE_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[numberDay10] + "?";
      console.log(chooseNumbers, valueNumber2)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
function getDay10Sentence1() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay10BeSentence1();
      break;
    case 2:
      getDay10GeSentence1();
      break;
  }
}
function getDay10Sentence2() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay10BeSentence2();
      break;
    case 2:
      getDay10GeSentence2();
      break;
  }
}
function getDay10Sentence3() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay10BeSentence3();
      break;
    case 2:
      getDay10GeSentence3();
      break;
  }
}
function getDay10RandomVerbAll() {
  let chosenNumbers = Math.floor(Math.random() * 6) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getDay10BeSentence1();
      break;
    case 2:
      getDay10BeSentence2();
      break;
    case 3:
      getDay10BeSentence3();
      break;
    case 4:
      getDay10GeSentence1();
      break;
    case 5:
      getDay10GeSentence2();
      break;
    case 6:
      getDay10GeSentence3();
      break;
  }
}
////////////////////////////////////////////// Day 10 Finished //////////////////////////////////////////////

//평서문 - 전체
function getDay11Sentence1() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getRandomBeVerb1();
      break;
    case 2:
      getRandomGVerb1();
      break;
  }
}
//부정문 - 전체
function getDay11Sentence2() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getRandomBeVerb2();
      break;
    case 2:
      getRandomGVerb2();
      break;
  }
}
//의문문 - 전체
function getDay11Sentence3() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getRandomBeVerb3();
      break;
    case 2:
      getRandomGVerb3();
      break;
  }
}
////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////


let sessionData = [];
let sessionCount = 0;
let clickCount = -1;
let userName;

// document.getElementById("startButton").addEventListener("click", function () {
//   sessionData = [];  // 새 세션 시작
//   sessionCount += 1; // 시작을 눌러야 하기 때문에

// });

// HTML 문서에서 'div' 요소를 선택합니다.
var lastValue = ''; // 마지막 값이 저장될 변수입니다.

// 키보드 이벤트를 처리하는 함수입니다.
function handleKeyPress(event) {
  // 눌러진 키의 값('O' 또는 'X')을 가져옵니다.
  var key = event.key;

  // 입력된 값이 'O' 또는 'X'인 경우에만 입력합니다.
  if (key == 'O' || key == 'o' || key == 'X' || key == 'x') {
    lastValue = key; // 마지막 값으로 설정합니다.
  }
}

// 'keydown' 이벤트를 감지하고, 이벤트가 발생하면 handleKeyPress 함수를 호출합니다.
document.addEventListener('keydown', handleKeyPress);


// document.getElementById("endButton").addEventListener("click", function () {
//   let text = sessionData.join('\n');
//   let textBlob = new Blob([text], { type: "text/plain" });
//   let downloadURL = URL.createObjectURL(textBlob);
//   let downloadLink = document.createElement("a");
//   downloadLink.href = downloadURL;
//   userName = document.getElementById("userNameInput").value;
//   let date = new Date();


//   // 새 textarea 요소를 생성하고 텍스트를 설정
//   let textarea = document.createElement("textarea");
//   textarea.textContent = text;

//   // textarea 요소를 DOM에 추가
//   document.body.appendChild(textarea);

//   // textarea 내용을 선택하고 복사
//   textarea.select();
//   document.execCommand("copy");

//   // textarea 요소를 DOM에서 제거
//   document.body.removeChild(textarea);

//   alert("클립보드에 복사되었습니다.");


//   // 파일 이름에 세션 카운트를 포함
//   // downloadLink.download = userName + "_" + date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds() + ".txt";
//   downloadLink.download = userName + "_" + date.getFullYear() + (date.getMonth() + 1) + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds() + ".csv";

//   document.body.appendChild(downloadLink);
//   downloadLink.click();
//   document.body.removeChild(downloadLink);
//   clickCount = -1;
// });
// ////////////////////////////////////////////////////////////////////////////////////////


// 불규칙
const IRREGULAR_VERB_K = new Array("자르다", "치다", "아프게 하다", "~하게 시키다", "놓다/두다", "읽다", "두다", "닫다", "퍼뜨리다", "시작하다", "마시다", "울리다", "가라앉다", "노래하다", "수영하다", "뛰다", "오다", "~되다", "하다", "가다", "~이다", "~이다", "먹다", "주다", "떨어지다", "보다", "(씨를) 뿌리다", "보여주다,보이다", "할 수 있다", "할 것이다", "해도 좋다", "할 것이다", "해야 한다", "먹이다", "만나다", "쏘다", "이끌다", "기다", "유지하다", "자다", "쓸다", "울다", "떠나다", "구부리다", "세우다", "빌려주다", "잃다", "보내다", "소비하다", "의미하다", "가져오다", "사다", "잡다", "싸우다", "찾다", "가르치다", "생각하다", "묶다", "발견하다", "감다", "두다", "지불하다", "말하다", "가지다", "듣다", "잡다", "팔다", "말하다", "미끄러지다", "만들다", "파다", "느끼다", "걸다", "빛나다", "앉다", "돌다", "서다", "이기다", "때리다", "때리다", "깨우다", "날다", "낳다", "찢다", "입다", "물다", "잊다", "얻다", "감추다", "깨뜨리다", "고르다", "얼다", "말하다", "훔치다", "불다", "당기다, 그리다", "자라다", "알다", "던지다", "(일이) 일어나다", "운전하다", "타다", "일어서다", "쓰다", "잡다", "흔들다", "두다", "거짓말하다", "가로눕다");
const IRREGULAR_VERB_E = new Array("cut-cut-cut", "hit-hit-hit", "hurt-hurt-hurt", "let-let-let", "put-put-put", "read-read-read", "set-set-set", "shut-shut-shut", "spread-spread-spread", "begin-began-begun", "drink-drank-drunk", "ring-rang-rung", "sink-sank-sunk", "sing-sang-sung", "swim-swam-swum", "run-ran-run", "come-came-come", "become-became-become", "do, does-did-done", "go-went-gone", "be/am/is-was-been", "be/are-were-been", "eat-ate-eaten", "give-gave-given", "fall-fell-fallen", "see-saw-seen", "sow-sowed-sown", "show-showed-shown", "can-could", "will-would", "may-might", "shall-should", "must-had to", "feed-fed-fed", "meet-met-met", "shoot-shot-shot", "lead-led-led", "creep-crept-crept", "keep-kept-kept", "sleep-slept-slept", "sweep-swept-swept", "weep-wept-wept", "leave-left-left", "bend-bent-bent", "build-built-built", "lend-lent-lent", "lose-lost-lost", "send-sent-sent", "spend-spent-spent", "mean-meant-meant", "bring-brought-brought", "buy-bought-bought", "catch-caught-caught", "fight-fought-fought", "seek-sought-sought", "teach-taught-taught", "think-thought-thought", "bind-bound-bound", "find-found-found", "wind-wound-wound", "lay-laid-laid", "pay-paid-paid", "say-said-said", "have/has-had-had", "hear-heard-heard", "hold-held-held", "sell-sold-sold", "tell-told-told", "slide-slid-slid", "make-made-made", "dig-dug-dug", "feel-felt-felt", "hang-hung-hung", "shine-shone-shone", "sit-sat-sat", "spin-spun-spun", "stand-stood-stood", "win-won-won", "strike-struck-struck", "beat-beat-beaten", "awake-awoke-awoken", "fly-flew-flown", "bear-bore-born", "tear-tore-torn", "wear-wore-worn", "bite-bit-bitten", "forget-forgot-forgotten", "get-got-gotten", "hide-hid-hidden", "break-broke-broken", "choose-chose-chosen", "freeze-froze-frozen", "speak-spoke-spoken", "steal-stole-stolen", "blow-blew-blown", "draw-drew-drawn", "grow-grew-grown", "know-knew-known", "throw-threw-thrown", "arise-arose-arisen", "drive-drove-driven", "ride-rode-ridden", "rise-rose-risen", "write-wrote-written", "take-took-taken", "shake-shook-shaken", "lay-laid-laid", "lie-lied-lied", "lie-lay-lain");
const IRREGULAR_VERB_Q = new Array("cut", "hit", "hurt", "let", "put", "read", "set", "shut", "spread", "begin", "drink", "ring", "sink", "sing", "swim", "run", "come", "become", "do, does", "go", "be/am/is", "be/are", "eat", "give", "fall", "see", "sow", "show", "can", "will", "may", "shall", "must", "feed", "meet", "shoot", "lead", "creep", "keep", "sleep", "sweep", "weep", "leave", "bend", "build", "lend", "lose", "send", "spend", "mean", "bring", "buy", "catch", "fight", "seek", "teach", "think", "bind", "find", "wind", "lay", "pay", "say", "have/has", "hear", "hold", "sell", "tell", "slide", "make", "dig", "feel", "hang", "shine", "sit", "spin", "stand", "win", "strike", "beat", "awake", "fly", "bear", "tear", "wear", "bite", "forget", "get", "hide", "break", "choose", "freeze", "speak", "steal", "blow", "draw", "grow", "know", "throw", "arise", "drive", "ride", "rise", "write", "take", "shake", "lay", "lie", "lie");

function irregularAll() {
  let valueNumber = Math.floor(Math.random() * IRREGULAR_VERB_Q.length);
  let kWord = IRREGULAR_VERB_Q[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;

  // kWord와 eWord를 세션 데이터에 추가
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

// 다른 함수들도 비슷하게 sessionData에 데이터를 추가해야 합니다.
////////////////////////////////////////////////////////////////////////////////////////


function irregularAllK() {
  let valueNumber = Math.floor(Math.random() * IRREGULAR_VERB_K.length);
  let kWord = IRREGULAR_VERB_K[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
// Math.floor((Math.random() * (최대값 - 최소값)) + 최소값
function irregular1() {
  let valueNumber = Math.floor((Math.random() * (8 - 0)) + 0);
  console.log(valueNumber)
  let kWord = IRREGULAR_VERB_Q[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular1K() {
  let valueNumber = Math.floor((Math.random() * (8 - 0)) + 0);
  let kWord = IRREGULAR_VERB_K[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular2() {
  let valueNumber = Math.floor((Math.random() * (14 - 9)) + 9);
  console.log(valueNumber)
  let kWord = IRREGULAR_VERB_Q[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular2K() {
  let valueNumber = Math.floor((Math.random() * (14 - 9)) + 9);
  let kWord = IRREGULAR_VERB_K[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular3() {
  let valueNumber = Math.floor((Math.random() * (8 - 0)) + 0);
  console.log(valueNumber)
  let kWord = IRREGULAR_VERB_Q[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular3K() {
  let valueNumber = Math.floor((Math.random() * (19 - 15)) + 15);
  let kWord = IRREGULAR_VERB_K[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular4() {
  let valueNumber = Math.floor((Math.random() * (27 - 20)) + 20);
  console.log(valueNumber)
  let kWord = IRREGULAR_VERB_Q[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular4K() {
  let valueNumber = Math.floor((Math.random() * (27 - 20)) + 20);
  let kWord = IRREGULAR_VERB_K[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular5() {
  let valueNumber = Math.floor((Math.random() * (32 - 28)) + 28);
  console.log(valueNumber)
  let kWord = IRREGULAR_VERB_Q[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular5K() {
  let valueNumber = Math.floor((Math.random() * (32 - 28)) + 28);
  let kWord = IRREGULAR_VERB_K[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular6() {
  let valueNumber = Math.floor((Math.random() * (36 - 33)) + 33);
  console.log(valueNumber)
  let kWord = IRREGULAR_VERB_Q[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular6K() {
  let valueNumber = Math.floor((Math.random() * (36 - 33)) + 33);
  let kWord = IRREGULAR_VERB_K[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular7() {
  let valueNumber = Math.floor((Math.random() * (42 - 37)) + 37);
  console.log(valueNumber)
  let kWord = IRREGULAR_VERB_Q[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular7K() {
  let valueNumber = Math.floor((Math.random() * (42 - 37)) + 37);
  let kWord = IRREGULAR_VERB_K[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular8() {
  let valueNumber = Math.floor((Math.random() * (49 - 43)) + 43);
  console.log(valueNumber)
  let kWord = IRREGULAR_VERB_Q[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular8K() {
  let valueNumber = Math.floor((Math.random() * (49 - 43)) + 43);
  let kWord = IRREGULAR_VERB_K[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular9() {
  let valueNumber = Math.floor((Math.random() * (56 - 50)) + 50);
  console.log(valueNumber)
  let kWord = IRREGULAR_VERB_Q[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular9K() {
  let valueNumber = Math.floor((Math.random() * (56 - 50)) + 50);
  let kWord = IRREGULAR_VERB_K[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular10() {
  let valueNumber = Math.floor((Math.random() * (62 - 57)) + 57);
  console.log(valueNumber)
  let kWord = IRREGULAR_VERB_Q[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular10K() {
  let valueNumber = Math.floor((Math.random() * (62 - 57)) + 57);
  let kWord = IRREGULAR_VERB_K[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular11() {
  let valueNumber = Math.floor((Math.random() * (69 - 63)) + 63);
  console.log(valueNumber)
  let kWord = IRREGULAR_VERB_Q[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular11K() {
  let valueNumber = Math.floor((Math.random() * (69 - 63)) + 63);
  let kWord = IRREGULAR_VERB_K[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular12() {
  let valueNumber = Math.floor((Math.random() * (78 - 70)) + 70);
  console.log(valueNumber)
  let kWord = IRREGULAR_VERB_Q[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular12K() {
  let valueNumber = Math.floor((Math.random() * (78 - 70)) + 70);
  let kWord = IRREGULAR_VERB_K[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular13() {
  let valueNumber = Math.floor((Math.random() * (81 - 79)) + 79);
  console.log(valueNumber)
  let kWord = IRREGULAR_VERB_Q[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular13K() {
  let valueNumber = Math.floor((Math.random() * (81 - 79)) + 79);
  let kWord = IRREGULAR_VERB_K[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular14() {
  let valueNumber = Math.floor((Math.random() * (93 - 82)) + 82);
  console.log(valueNumber)
  let kWord = IRREGULAR_VERB_Q[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular14K() {
  let valueNumber = Math.floor((Math.random() * (93 - 82)) + 82);
  let kWord = IRREGULAR_VERB_K[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular15() {
  let valueNumber = Math.floor((Math.random() * (98 - 94)) + 94);
  console.log(valueNumber)
  let kWord = IRREGULAR_VERB_Q[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular15K() {
  let valueNumber = Math.floor((Math.random() * (98 - 94)) + 94);
  let kWord = IRREGULAR_VERB_K[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular16() {
  let valueNumber = Math.floor((Math.random() * (105 - 99)) + 99);
  console.log(valueNumber)
  let kWord = IRREGULAR_VERB_Q[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular16K() {
  let valueNumber = Math.floor((Math.random() * (105 - 99)) + 99);
  let kWord = IRREGULAR_VERB_K[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular17() {
  let valueNumber = Math.floor((Math.random() * (108 - 106)) + 106);
  console.log(valueNumber)
  let kWord = IRREGULAR_VERB_Q[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function irregular17K() {
  let valueNumber = Math.floor((Math.random() * (108 - 106)) + 106);
  let kWord = IRREGULAR_VERB_K[valueNumber];
  let eWord = IRREGULAR_VERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}


//Small Talk SmallTalk
function getSmallTalkAll() {
  let valueNumber = Math.floor(Math.random() * day_E.length);
  let kWord = day_K[valueNumber];
  let eWord = day_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
}

function getSmallTalkDay1() {
  let valueNumber = Math.floor(Math.random() * day1_E.length);
  let kWord = day1_K[valueNumber];
  let eWord = day1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
}
function getSmallTalkDay2() {
  let valueNumber = Math.floor(Math.random() * day2_E.length);
  let kWord = day2_K[valueNumber];
  let eWord = day2_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
}
function getSmallTalkDay3() {
  let valueNumber = Math.floor(Math.random() * day3_E.length);
  let kWord = day3_K[valueNumber];
  let eWord = day3_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
}
function getSmallTalkDay4() {
  let valueNumber = Math.floor(Math.random() * day4_E.length);
  let kWord = day4_K[valueNumber];
  let eWord = day4_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
}
function getSmallTalkDay5() {
  let valueNumber = Math.floor(Math.random() * day5_E.length);
  let kWord = day5_K[valueNumber];
  let eWord = day5_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
}



// 작업하던데로 돌아오기 ctrl+q
// TODO : 20220630 번역하는 기능 - 직역, 번역 둘 다 사용, kakao를 파파고로, result2
function translateAndPrint() {
  // html에서 값을 가져온다
  let koreanWord = document.getElementById('clsRandom').value;
  // TODO : 번역한다 - ajax & kakao
  let results = '';
  $.ajax({
    method: 'GET',
    url: 'https://dapi.kakao.com/v2/translation/translate',
    data: { query: koreanWord, src_lang: 'kr', target_lang: 'en' },
    headers: { Authorization: 'KakaoAK 4fa3a1890d37bd3c60507b53aad1d00b' },
  }).done(function (msg) {
    results = msg.translated_text[0];
  });

  // 화면에 뿌려준다
  document.getElementById('clsRandom2').innerText = resultOfKakao;

  // 리팩토링중 삭제 - 한번쓰이는건 literal > let result2 = getRandomTwoChar2(koreanWord);
  document.getElementById('clsRandom3').innerText =
    getRandomTwoChar2(koreanWord);
}


function getPageNumber(pageNumber) {
  let z = '<audio controls><source src="../src/audio/' + pageNumber + '.m4a" ></audio>';
  document.getElementById('audioSetting').innerHTML = z;
  let y = '<img src="../src/images/grammar_image/glPage/glpage' + pageNumber + '.png" alt="GrammarCard">';
  document.getElementById('glAudioCard').innerHTML = y;
};


function getJetPageNumber(pageNumber) {
  let z = '<audio controls><source src="../src/audio/' + pageNumber + '.m4a" ></audio>';
  document.getElementById('audioSetting').innerHTML = z;
  let y = '<img src="../src/images/grammar_image/glPage/jet34ks' + pageNumber + '.png' + '" alt="GrammarPage">';
  document.getElementById('glAudioCard').innerHTML = y;
};


function getCardNumber() {
  let cardNumber = document.getElementById('inputCardNumber').value;
  let z =
    '<audio controls><source src="../src/audio/' +
    cardNumber +
    '.m4a" ></audio>';
  document.getElementById('audioSetting').innerHTML = z;
  let y = '<img src="../src/images/grammar_image/glCard/glcard' + cardNumber + '.jpg" alt="GrammarCard">';

  document.getElementById('glAudioCard').innerHTML = y;
}
function putCardNumber(thisNumber) {
  let cardNumber = thisNumber;
  let z =
    '<audio controls><source src="../src/audio/' +
    cardNumber +
    '.m4a" ></audio>';
  document.getElementById('audioSetting').innerHTML = z;
  let y = '<img src="../src/images/grammar_image/glCard/glcard' + cardNumber + '.jpg" alt="GrammarCard">';

  document.getElementById('glAudioCard').innerHTML = y;
}


document.addEventListener('DOMContentLoaded', function() {
  const clsImage = document.getElementById('glAudioCard');

  // 클릭으로 이미지 크기 변경
  clsImage.addEventListener('click', function() {
    this.classList.toggle('zoomed');
    this.style.transform = this.classList.contains('zoomed') ? 'scale(3)' : 'scale(1)';
  });


  // 스크롤로 크기 조절
  clsImage.addEventListener('wheel', function(event) {
    event.preventDefault(); // 기본 스크롤 동작 방지
    const scaleAmount = event.deltaY * -0.01;
    const currentScale = Number(this.style.transform.replace('scale(', '').replace(')', '')) || 1;
    let newScale = currentScale + scaleAmount;
    newScale = Math.min(Math.max(.5, newScale), 3); // 최소 0.5배, 최대 3배로 제한
    this.style.transform = `scale(${newScale})`;
  });
});
			

// 카카오 번역
// let은 전역상수로 선언하지 않는다 >>> 지역 변수

// let valueOfRandomResult ='';

function printName(textForTranslation) {
  // const beforeTranslation = document.getElementById('inputTranslate').value;
  // let beforeTranslation = valueOfRandomResult;
  let results = '';

  $.ajax({
    method: 'GET',
    url: 'https://dapi.kakao.com/v2/translation/translate',
    //query : 질문할 문장 beforeTranslationSentence = 긴코드가 좋은 코드다
    data: { query: textForTranslation, src_lang: 'kr', target_lang: 'en' },
    headers: { Authorization: 'KakaoAK 4fa3a1890d37bd3c60507b53aad1d00b' },
  })

    //ajax의 리턴값 = msg >>> 다른 것으로 줘도 된다
    .done(function (msg) {
      // alert("Data Saved: " + msg); // 이건 나중에 지워도 됨
      // console.log(msg);
      // console.log(msg.translated_text[0]);
      // temp1.documents[0].translated_text.Array(1)
      // document.getElementById('clsRandom2').innerText = msg.translated_text[0];
      // document.getElementById('inputTranslate').value = '';
      results = msg.translated_text[0];
    });
  console.log(textForTranslation);
  return results;
}

//인칭대명사-주격
function pronoun5() {
  let result = getRandomTwoChar2(pronounBoxK, pronounBoxE);
  // valueK = valueK[valueNumber];
  // valueE = valueE[valueNumber];
  // document.getElementById("clsRandom").innerText = valueK;
  // document.getElementById("clsRandom2").innerText = valueE;
  // valueOfRandomResult = result;
  // document.getElementById('clsRandom2').innerText = " ";
}

//관사
function articles() {
  let result = getRandomTwoChar2(articleK, articleE);
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById('clsRandom').innerText = valueK;
  document.getElementById('clsRandom2').innerText = valueE;
}

function functionCLSDE0000() {
  let valueNumber = Math.floor(Math.random() * clsDailyExpressionsAllK.length);
  let kWord = clsDailyExpressionsAllK[valueNumber];
  let eWord = clsDailyExpressionsAllE[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function functionCLSDE0001() {
  let valueNumber = Math.floor(Math.random() * clsDailyExpressionsDay1K.length);
  let kWord = clsDailyExpressionsDay1K[valueNumber];
  let eWord = clsDailyExpressionsDay1E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function functionCLSDE0002() {
  let valueNumber = Math.floor(Math.random() * clsDailyExpressionsDay2K.length);
  let kWord = clsDailyExpressionsDay2K[valueNumber];
  let eWord = clsDailyExpressionsDay2E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function functionCLSDE0003() {
  let valueNumber = Math.floor(Math.random() * clsDailyExpressionsDay3K.length);
  let kWord = clsDailyExpressionsDay3K[valueNumber];
  let eWord = clsDailyExpressionsDay3E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function functionCLSDE0004() {
  let valueNumber = Math.floor(Math.random() * clsDailyExpressionsDay4K.length);
  let kWord = clsDailyExpressionsDay4K[valueNumber];
  let eWord = clsDailyExpressionsDay4E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function0000 한방에
// TODO 하나 여러개 넣기
function function0000() {
  let valueNumber = Math.floor(Math.random() * ONE_SHOT_CONCEPT_K.length);
  let kWord = ONE_SHOT_CONCEPT_K[valueNumber];
  let eWord = ONE_SHOT_CONCEPT_E[valueNumber] + " - " + ONE_SHOT_CONCEPT_2E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0101 명사-개념
// TODO 하나 여러개 넣기
function function0101() {
  let valueNumber = Math.floor(Math.random() * ONE_SHOT_CONCEPT_K.length);
  let kWord = ONE_SHOT_CONCEPT_K[0];
  let eWord = ONE_SHOT_CONCEPT_E[0] + " - " + ONE_SHOT_CONCEPT_2E[0];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0101 명사-개념
// TODO 하나 여러개 넣기
function function0101v2() {
  let chooseNumbers = Math.floor(Math.random() * 5) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getNoun1();
      break;
    case 2:
      getNoun2();
      break;
    case 3:
      getNoun3();
      break;
    case 4:
      getNoun4();
      break;
    case 5:
      getNoun5();
      break;
  }
}
function function0101v3() {
  let chooseNumbers = Math.floor(Math.random() * 5) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      guessNoun1();
      break;
    case 2:
      guessNoun2();
      break;
    case 3:
      guessNoun3();
      break;
    case 4:
      guessNoun4();
      break;
    case 5:
      guessNoun5();
      break;
  }
}
//명사1-사람
function getNoun1() {
  let valueNumber = Math.floor(Math.random() * noun1personK.length);
  let kWord = noun1personK[valueNumber];
  let eWord = noun1personE[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//명사2-사물
function getNoun2() {
  let valueNumber = Math.floor(Math.random() * noun2objectK.length);
  let kWord = noun2objectK[valueNumber];
  let eWord = noun2objectE[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//명사3-동물
function getNoun3() {
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let kWord = noun3animalK[valueNumber];
  let eWord = noun3animalE[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//명사4-장소
function getNoun4() {
  let valueNumber = Math.floor(Math.random() * noun4placeK.length);
  let kWord = noun4placeK[valueNumber];
  let eWord = noun4placeE[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//명사5-개념
function getNoun5() {
  let valueNumber = Math.floor(Math.random() * noun5conceptK.length);
  let kWord = noun5conceptK[valueNumber];
  let eWord = noun5conceptE[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//명사 맞추기 1-사람
function guessNoun1() {
  let valueNumber = Math.floor(Math.random() * noun1personK.length);
  let kWord = noun1personK[valueNumber] + " " + noun1personE[valueNumber];
  let eWord = ONE_SHOT_CONCEPT_K[0] + " (사람의 이름)";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//명사 맞추기 2-사물
function guessNoun2() {
  let valueNumber = Math.floor(Math.random() * noun2objectK.length);
  let kWord = noun2objectK[valueNumber] + " " + noun2objectE[valueNumber];
  let eWord = ONE_SHOT_CONCEPT_K[0] + " (사물의 이름)";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//명사 맞추기 3-동물
function guessNoun3() {
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let kWord = noun3animalK[valueNumber] + " " + noun3animalE[valueNumber];
  let eWord = ONE_SHOT_CONCEPT_K[0] + " (동물의 이름)";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//명사 맞추기 4-장소
function guessNoun4() {
  let valueNumber = Math.floor(Math.random() * noun4placeK.length);
  let kWord = noun4placeK[valueNumber] + " " + noun4placeE[valueNumber];
  let eWord = ONE_SHOT_CONCEPT_K[0] + " (장소의 이름)";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//명사 맞추기 5 -개념
function guessNoun5() {
  let valueNumber = Math.floor(Math.random() * noun5conceptK.length);
  let kWord = noun5conceptK[valueNumber] + " " + noun5conceptE[valueNumber];
  let eWord = ONE_SHOT_CONCEPT_K[0] + " (개념의 이름)";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//0102 명사-셀수 X 명사 세는 법
// TODO 하나 여러개 넣기
function function0102() {
  let valueNumber = Math.floor(Math.random() * noun2objectK.length);
  let kWord = noun2objectK[valueNumber];
  let eWord = noun2objectE[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0103 명사-셀수 X 명사 세는 법
function function0103() {
  let valueNumber = Math.floor(Math.random() * function0103K.length);
  let kWord = function0103K[valueNumber];
  let eWord = function0103E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0103 명사-셀수 X 명사 세는 법
//TODO a/an 판단 if문으로 구분
function function0103more() {
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let kWord = "하나의 " + noun3animalK[valueNumber] + " ( " + noun3animalE[valueNumber] + " )";
  let eWord = noun3animalE[valueNumber];
  if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
    eWord = "an " + eWord;
  } else {
    eWord = "a " + eWord;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0104 명사-복수 -s 붙이는 규칙
//TODO giraffe 어쩌지? 뺐음
function function0104() {
  let valueNumber = Math.floor(Math.random() * noun3animalE.length);
  let kWord = noun3animalK[valueNumber] + "들 ( " + noun3animalE[valueNumber] + " )";
  let eWord = noun3animalE[valueNumber];

  if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
    eWord = eWord + "es";
  } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
    eWord = eWord + "s";
  } else if (eWord.endsWith('y')) {
    eWord = eWord.slice(0, -1) + "ies";
  } else if (eWord.endsWith('fe')) {
    eWord = eWord.slice(0, -2) + "ves";
  } else if (eWord.endsWith('f')) {
    eWord = eWord.slice(0, -1) + "ves";
  } else {
    eWord = eWord + "s";
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function0104a() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function0103more();
      break;
    case 2:
      function0104();
      break;
  }
}
function function0104b() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let kWord;
  let eWord;
  switch (chosenNumbers) {
    case 1:
      kWord = "하나의 " + noun3animalK[valueNumber];
      eWord = noun3animalE[valueNumber];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2:
      kWord = noun3animalK[valueNumber] + "들 ";
      eWord = noun3animalE[valueNumber];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//0105 명사-복수 불규칙
function function0105() {
  let valueNumber = Math.floor(Math.random() * function0105K.length);
  let kWord = function0105K[valueNumber];
  let eWord = function0105E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//0106 명사
function function0106() {
  let valueNumber = Math.floor(Math.random() * function0106K.length);
  let kWord = function0106K[valueNumber];
  let eWord = function0106E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//0107 명사-셀수 X 명사 세는 법
function function0107() {
  let valueNumber = Math.floor(Math.random() * function0107K.length);
  let kWord = function0107K[valueNumber];
  let eWord = function0107E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
const uncountableNoun1K = new Array('물', '쥬스', '우유');
const uncountableNoun1E = new Array('water', 'juice', 'milk');
const uncountableNoun2K = new Array('커피', '티');
const uncountableNoun2E = new Array('coffee', 'tea');
const uncountableNoun3K = new Array('종이', '빵', '피자', '치즈', '가구', '정보', '조언');
const uncountableNoun3E = new Array('paper', 'bread', 'pizza', 'cheese', 'furniture', 'information', 'advice');
const uncountableNoun4K = new Array('빵', '치즈', '피자', '케이크', '고기');
const uncountableNoun4E = new Array('bread', 'cheese', 'pizza', 'cake', 'meat');
const uncountableNoun5K = new Array('쌀', '스프', '샐러드');
const uncountableNoun5E = new Array('rice', 'soup', 'salad');
const uncountableNoun6K = new Array('물', '쥬스', '우유');
const uncountableNoun6E = new Array('water', 'juice', 'milk');
const uncountableNoun7K = new Array('고기', '빵', '비누');
const uncountableNoun7E = new Array('meat', 'bread', 'soap');
const uncountableNoun8K = new Array('설탕', '고기', '밀가루');
const uncountableNoun8E = new Array('sugar', 'meat', 'flour');
//0108 명사-셀수 X 명사 세는 법 2
function function0108() {
  let chooseNumbers = Math.floor(Math.random() * 9);
  let chooseNumbers_1 = chooseNumbers - 1;
  let chooseContainers_k = new Array("잔(cold drink)", "잔(hot drink) ", "조각/점", "얇은 조각", "그릇", "병", "덩어리", "파운드(무게)");
  let chooseContainers_E = new Array("glass", "cup", "piece", "slice", "bowl", "bottle", "loaf", "pound");
  let chooseContainers_2E = new Array("glasses", "cups", "pieces", "slices", "bowls", "bottles", "loaves", "pounds");

  switch (chooseNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * uncountableNoun1K.length);
      kWord = uncountableNoun1K[valueNumber1] + " " + adjectiveCardinalOrdinal2K[chooseNumbers_1] + " " + chooseContainers_k[chooseNumbers_1];
      eWord = adjectiveCardinalOrdinalE[chooseNumbers_1] + " " + chooseContainers_E[chooseNumbers_1] + " of " + uncountableNoun1E[valueNumber1];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2:
      let valueNumber2 = Math.floor(Math.random() * uncountableNoun2K.length);
      kWord = uncountableNoun2K[valueNumber2] + " " + adjectiveCardinalOrdinal2K[chooseNumbers_1] + " " + chooseContainers_k[chooseNumbers_1];
      eWord = adjectiveCardinalOrdinalE[chooseNumbers_1] + " " + chooseContainers_2E[chooseNumbers_1] + " of " + uncountableNoun2E[valueNumber2];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 3:
      let valueNumber3 = Math.floor(Math.random() * uncountableNoun3K.length);
      kWord = uncountableNoun3K[valueNumber3] + " " + adjectiveCardinalOrdinal2K[chooseNumbers_1] + " " + chooseContainers_k[chooseNumbers_1];
      eWord = adjectiveCardinalOrdinalE[chooseNumbers_1] + " " + chooseContainers_2E[chooseNumbers_1] + " of " + uncountableNoun3E[valueNumber3];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 4:
      let valueNumber4 = Math.floor(Math.random() * uncountableNoun4K.length);
      kWord = uncountableNoun4K[valueNumber4] + " " + adjectiveCardinalOrdinal2K[chooseNumbers_1] + " " + chooseContainers_k[chooseNumbers_1];
      eWord = adjectiveCardinalOrdinalE[chooseNumbers_1] + " " + chooseContainers_2E[chooseNumbers_1] + " of " + uncountableNoun4E[valueNumber4];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 5:
      let valueNumber5 = Math.floor(Math.random() * uncountableNoun5K.length);
      kWord = uncountableNoun5K[valueNumber5] + " " + adjectiveCardinalOrdinal2K[chooseNumbers_1] + " " + chooseContainers_k[chooseNumbers_1];
      eWord = adjectiveCardinalOrdinalE[chooseNumbers_1] + " " + chooseContainers_2E[chooseNumbers_1] + " of " + uncountableNoun5E[valueNumber5];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 6:
      let valueNumber6 = Math.floor(Math.random() * uncountableNoun6K.length);
      kWord = uncountableNoun6K[valueNumber6] + " " + adjectiveCardinalOrdinal2K[chooseNumbers_1] + " " + chooseContainers_k[chooseNumbers_1];
      eWord = adjectiveCardinalOrdinalE[chooseNumbers_1] + " " + chooseContainers_2E[chooseNumbers_1] + " of " + uncountableNoun6E[valueNumber6];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 7:
      let valueNumber7 = Math.floor(Math.random() * uncountableNoun7K.length);
      kWord = uncountableNoun7K[valueNumber7] + " " + adjectiveCardinalOrdinal2K[chooseNumbers_1] + " " + chooseContainers_k[chooseNumbers_1];
      eWord = adjectiveCardinalOrdinalE[chooseNumbers_1] + " " + chooseContainers_2E[chooseNumbers_1] + " of " + uncountableNoun7E[valueNumber7];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 8:
      let valueNumber8 = Math.floor(Math.random() * uncountableNoun8K.length);
      kWord = uncountableNoun8K[valueNumber8] + " " + adjectiveCardinalOrdinal2K[chooseNumbers_1] + " " + chooseContainers_k[chooseNumbers_1];
      eWord = adjectiveCardinalOrdinalE[chooseNumbers_1] + " " + chooseContainers_2E[chooseNumbers_1] + " of " + uncountableNoun8E[valueNumber8];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
//function0109 명사 자리
function function0109() {
  let valueNumber = Math.floor(Math.random() * NOUN_POSITION_K.length);
  let kWord = NOUN_POSITION_K[valueNumber];
  let eWord = NOUN_POSITION_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function0110() {
  let chosenNumbers = Math.floor(Math.random() * 5) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function0104b();
      break;
    case 2:
      function0105();
      break;
    case 3:
      function0107();
      break;
    case 4:
      function0108();
      break;
    case 5:
      function0109();
      break;
  }
}
//0201 동사의 개념
function function0201() {
  let kWord = ONE_SHOT_CONCEPT_K[1];
  let eWord = ONE_SHOT_CONCEPT_E[1] + " - " + ONE_SHOT_CONCEPT_2E[1];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function getDayGeVoca() {
  let chooseNumbers = Math.floor(Math.random() * 10) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getDay1GeVoca();
      break;
    case 2:
      getDay2GeVoca();
      break;
    case 3:
      getDay3GeVoca();
      break;
    case 4:
      getDay4GeVoca();
      break;
    case 5:
      getDay5GeVoca();
      break;
    case 6:
      getDay6GeVoca();
      break;
    case 7:
      getDay7GeVoca();
      break;
    case 8:
      getDay8GeVoca();
      break;
    case 9:
      getDay9GeVoca();
      break;
    case 10:
      getDay10GeVoca();
      break;
  }
}
//동사 맞추기
function guessVerb() {
  let valueNumber = Math.floor(Math.random() * VERB_GENERAL_POSITIVE_ALL.length);
  let kWord = VERB_GENERAL_POSITIVE_ALL[valueNumber] + " " + VERB_GENERAL_POSITIVE_ALL_E[valueNumber];
  let eWord = ONE_SHOT_CONCEPT_K[1];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0202 Be동사 평서문 개념
function function0202() {
  let valueNumber = Math.floor(Math.random() * VERB_0202_K.length);
  let kWord = VERB_0202_K[valueNumber];
  let eWord = VERB_0202_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function0202 Be동사 평서문 응용
function function0202v1() {
  let valueNumber = Math.floor(Math.random() * VERB_BE_POSITIVE_K.length);
  let kWord = VERB_BE_POSITIVE_K[valueNumber];
  let eWord = VERB_BE_POSITIVE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0202 Be동사 평서문
function function0202v2() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_ALL_K.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_K[valueNumber] + " / be동사 / 평서문";
  let eWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_E[valueNumber] + " " + BE_VERB_SMALL_DOUBLE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0203 Be동사 부정문 개념
function function0203() {
  let valueNumber = Math.floor(Math.random() * VERB_0203_K.length);
  let kWord = VERB_0203_K[valueNumber];
  let eWord = VERB_0203_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0203 Be동사 부정문 응용1
function function0203v1() {
  let valueNumber = Math.floor(Math.random() * VERB_BE_NEGATIVE_K.length);
  let kWord = VERB_BE_NEGATIVE_K[valueNumber];
  let eWord = VERB_BE_NEGATIVE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0203 Be동사 부정문
function function0203v2() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_ALL_K.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_K[valueNumber] + " / be동사 / 부정문";
  let eWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_E[valueNumber] + " " + BE_VERB_SMALL_DOUBLE_E[valueNumber] + " not";
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0204 Be동사 의문문 개념
function function0204() {
  let valueNumber = Math.floor(Math.random() * VERB_0204_K.length);
  let kWord = VERB_0204_K[valueNumber];
  let eWord = VERB_0204_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0204 Be동사 의문문 응용
function function0204v1() {
  let valueNumber = Math.floor(Math.random() * VERB_BE_QUESTION_K.length);
  let kWord = VERB_BE_QUESTION_K[valueNumber];
  let eWord = VERB_BE_QUESTION_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0204v2 Be동사 의문문 응용2
function function0204v2() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_ALL_K.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_K[valueNumber] + " / be동사 / 의문문";
  let eWord = BE_VERB_DOUBLE_E[valueNumber] + " " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_DOUBLE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function0205 일반동사 평서문 개념
function function0205() {
  let valueNumber = Math.floor(Math.random() * VERB_0205_K.length);
  let kWord = VERB_0205_K[valueNumber];
  let eWord = VERB_0205_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0205 일반동사 평서문 응용
function function0205v1() {
  let valueNumber = Math.floor(Math.random() * VERB_GENERAL_POSITIVE_K.length);
  let kWord = VERB_GENERAL_POSITIVE_K[valueNumber];
  let eWord = VERB_GENERAL_POSITIVE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0205 일반동사 평서문 응용2
function function0205v2() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_ALL_K.length);
  let valueNumber2 = Math.floor(Math.random() * BE_VERB_SMALL_DOUBLE_E.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_K[valueNumber] + " / 일반동사 / 평서문";
  let eWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0205v2 일반동사 평서문-응용
function function0205v2() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_ALL_K.length);
  let valueNumber2 = Math.floor(Math.random() * BE_VERB_SMALL_DOUBLE_E.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_K[valueNumber] + " / 일반동사 / 평서문";
  let eWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_E[valueNumber] + " " + BE_VERB_SMALL_DOUBLE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function0206 일반동사 부정문 개념
function function0206() {
  let valueNumber = Math.floor(Math.random() * VERB_0206_K.length);
  let kWord = VERB_0206_K[valueNumber];
  let eWord = VERB_0206_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0206 일반동사 부정문 응용1
function function0206v1() {
  let valueNumber = Math.floor(Math.random() * VERB_GENERAL_NEGATIVE_K.length);
  let kWord = VERB_GENERAL_NEGATIVE_K[valueNumber];
  let eWord = VERB_GENERAL_NEGATIVE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0206 일반동사 부정문 응용2
function function0206v2() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_ALL_K.length);
  let valueNumber2 = Math.floor(Math.random() * BE_VERB_SMALL_DOUBLE_E.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_K[valueNumber] + " / 일반동사 / 부정문";
  let eWord = PRONOUN_PERSONAL_SUBJECTIVE_DO_NEGATIVE_ALL_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0207 일반동사 의문문 개념
function function0207() {
  let valueNumber = Math.floor(Math.random() * VERB_0207_K.length);
  let kWord = VERB_0207_K[valueNumber];
  let eWord = VERB_0207_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0207 일반동사 의문문 응용1
function function0207v1() {
  let valueNumber = Math.floor(Math.random() * VERB_GENERAL_QUESTION_K.length);
  let kWord = VERB_GENERAL_QUESTION_K[valueNumber];
  let eWord = VERB_GENERAL_QUESTION_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0207 일반동사 의문문 응용2
function function0207v2() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_ALL_K.length);
  let valueNumber2 = Math.floor(Math.random() * BE_VERB_DOUBLE_E.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_K[valueNumber] + " / 일반동사 / 의문문";
  let eWord = PRONOUN_PERSONAL_SUBJECTIVE_DO_QUESTION_ALL_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0208be Be동사 개념 전체
function function0208be() {
  let chooseNumbers = Math.floor(Math.random() * 3) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      function0202();
      break;
    case 2:
      function0203();
      break;
    case 3:
      function0204();
      break;
  }
}
//function0208be 일반동사  개념 전체
function function0208ge() {
  let chooseNumbers = Math.floor(Math.random() * 3) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      function0205();
      break;
    case 2:
      function0206();
      break;
    case 3:
      function0207();
      break;
  }
}
//function0208vPositive 평서문 개념 전체
function function0208vPositive() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      function0202();
      break;
    case 2:
      function0205();
      break;
  }
}
//function0208vNegative 부정문 개념 전체
function function0208vNegative() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      function0203();
      break;
    case 2:
      function0206();
      break;
  }
}
//function0208vQuestion 의문문 개념 전체
function function0208vQuestion() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      function0204();
      break;
    case 2:
      function0207();
      break;
  }
}

//function0208beV1 Be동사 응용 전체
function function0208beV1() {
  let chooseNumbers = Math.floor(Math.random() * 3) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getRandomBeVerb1();
      break;
    case 2:
      getRandomBeVerb2();
      break;
    case 3:
      getRandomBeVerb3();
      break;
  }
}
//function0208geV1 일반동사 응용 전체
function function0208geV1() {
  let chooseNumbers = Math.floor(Math.random() * 3) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getRandomGVerb1();
      break;
    case 2:
      getRandomGVerb2();
      break;
    case 3:
      getRandomGVerb3();
      break;
  }
}


//function0208All_All 동사 응용 전체
function function0208All_All() {
  let chooseNumbers = Math.floor(Math.random() * 6) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      getRandomBeVerb1();
      break;
    case 2:
      getRandomBeVerb2();
      break;
    case 3:
      getRandomBeVerb3();
      break;
    case 4:
      getRandomGVerb1();
      break;
    case 5:
      getRandomGVerb2();
      break;
    case 6:
      getRandomGVerb3();
      break;
  }
}
//function0208v2 부정문
function function0208Negative() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      function0203v2();
      break;
    case 2:
      function0206v2();
      break;
  }
}
//function0208v2 의문문
function function0208Question() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      function0204v2();
      break;
    case 2:
      function0207v2();
      break;
  }
}

//function0209 부정문 의문문
function function0209() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      function0208Negative();
      break;
    case 2:
      function0208Question();
      break;
  }
}
//function0209b
function function0209b() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_ALL_K.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_K[valueNumber];
  let eWord = PRONOUN_PERSONAL_SUBJECTIVE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function0301 형용사
function function0301() {
  let kWord = ONE_SHOT_CONCEPT_K[2];
  let eWord = ONE_SHOT_CONCEPT_E[2] + " - " + ONE_SHOT_CONCEPT_2E[2];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0302 형용사 용법
function function0302() {
  let valueNumber = Math.floor(Math.random() * ADJECTIVE_RULE_K.length);
  let kWord = ADJECTIVE_RULE_K[valueNumber];
  let eWord = ADJECTIVE_RULE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0303 수량 형용사
function function0303() {
  let valueNumber = Math.floor(Math.random() * adjectiveCountableK1.length);
  let kWord = adjectiveCountableK1[valueNumber];
  let eWord = adjectiveCountableE1[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function0303v2() {
  let valueNumber = Math.floor(Math.random() * adjectiveCountableE2.length);
  let kWord = adjectiveCountableK2[valueNumber];
  let eWord = adjectiveCountableE2[valueNumber];
  document.getElementById("clsRandom").innerText = eWord;
  document.getElementById('clsRandom2').innerText = kWord;
}
function function0303v3() {
  let chooseNumbers_1 = Math.floor(Math.random() * adjectiveUncountableK1.length);
  let valueNumber = Math.floor(Math.random() * uncountableNoun4K.length);
  let kWord = adjectiveUncountableK1[chooseNumbers_1] + " " + uncountableNoun4K[valueNumber];
  let eWord = adjectiveUncountableE1[chooseNumbers_1] + " " + uncountableNoun4E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function0303v4() {
  let valueNumber = Math.floor(Math.random() * noun3animalE.length);
  let kNoun = noun3animalK[valueNumber] + "들 ( " + noun3animalE[valueNumber] + " )";
  let eNoun = noun3animalE[valueNumber];

  if (eNoun.endsWith('s') || eNoun.endsWith('ss') || eNoun.endsWith('sh') || eNoun.endsWith('ch') || eNoun.endsWith('x') || eNoun.endsWith('o')) {
    eNoun = eNoun + "es";
  } else if (eNoun.endsWith('ay') || eNoun.endsWith('ey') || eNoun.endsWith('iy') || eNoun.endsWith('oy') || eNoun.endsWith('uy')) {
    eNoun = eNoun + "s";
  } else if (eNoun.endsWith('y')) {
    eNoun = eNoun.slice(0, -1) + "ies";
  } else if (eNoun.endsWith('fe')) {
    eNoun = eNoun.slice(0, -2) + "ves";
  } else if (eNoun.endsWith('f')) {
    eNoun = eNoun.slice(0, -1) + "ves";
  } else {
    eNoun = eNoun + "s";
  }

  let chooseNumbers_1 = Math.floor(Math.random() * adjectiveCountableK3.length);
  let kWord = adjectiveCountableK3[chooseNumbers_1] + " " + kNoun;
  let eWord = adjectiveCountableE3[chooseNumbers_1] + " " + eNoun;
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function0303v5() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      function0303v3();
      break;
    case 2:
      function0303v4();
      break;
  }
}
function function0303v6() {
  let valueNumber = Math.floor(Math.random() * adjectiveCountableK4.length);
  let kWord = adjectiveCountableK4[valueNumber];
  let eWord = adjectiveCountableE4[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}



//0304 the 형용사
function function0304() {
  let valueNumber = Math.floor(Math.random() * adjective1personK.length);
  let kWord = adjective1personK[valueNumber] + ' 사람들';
  let eWord = 'the ' + adjective1personE[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0305 수사(숫자) 표현법
function function0305() {
  let valueNumber = Math.floor(Math.random() * adjectiveCardinalOrdinalK.length);
  let kWord = adjectiveCardinalOrdinalK[valueNumber];
  let eWord = adjectiveCardinalOrdinalE[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0305v2 수사(숫자) 표현법
function function0305v2() {
  let valueNumber = Math.floor(Math.random() * adjectiveCardinalOrdinalK.length);
  let kWord = adjectiveCardinalOrdinalK[valueNumber];
  let eWord = adjectiveCardinalOrdinal[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0305v3 배수 표현법
function function0305v3() {
  let valueNumber = Math.floor(Math.random() * ADJECTIVE_TIMES_1K.length);
  let kWord = ADJECTIVE_TIMES_1K[valueNumber];
  let eWord = ADJECTIVE_TIMES_1E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0305v4 횟수 표현법
function function0305v4() {
  let valueNumber = Math.floor(Math.random() * ADJECTIVE_TIMES_2K.length);
  let kWord = ADJECTIVE_TIMES_2K[valueNumber];
  let eWord = ADJECTIVE_TIMES_2E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0306 분수 읽기
function function0306() {
  let valueNumber = Math.floor(Math.random() * adjectiveFractionK.length);
  let kWord = adjectiveFractionK[valueNumber];
  let eWord = adjectiveFractionE[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0307 형용사-어순
function function0307() {
  let result = getRandomTwoChar2(adjectiveFractionK, adjectiveFractionE);
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById('clsRandom').innerText = valueK;
  document.getElementById('clsRandom2').innerText = valueE;
}
//function0309 형용사-사칙연산
function function0309() {
  let valueNumber = Math.floor(Math.random() * ADJECTIVE_MATH_K.length);
  let kWord = ADJECTIVE_MATH_K[valueNumber];
  let eWord = ADJECTIVE_MATH_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0310 형용사-사칙연산
function function0310() {
  let valueNumber = Math.floor(Math.random() * ADJECTIVE_MATH_2K.length);
  let kWord = ADJECTIVE_MATH_2K[valueNumber];
  let eWord = ADJECTIVE_MATH_2E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function0311() {
  let chosenNumbers = Math.floor(Math.random() * 6) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function0303v5();
      break;
    case 2:
      function0304();
      break;
    case 3:
      function0305();
      break;
    case 4:
      function0305v3();
      break;
    case 5:
      function0305v4();
      break;
    case 6:
      function0306();
      break;
  }
}
//function0401 부사
function function0401() {
  let kWord = ONE_SHOT_CONCEPT_K[3];
  let eWord = ONE_SHOT_CONCEPT_E[3] + " - " + ONE_SHOT_CONCEPT_2E[3];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0402 부사
function function0402() {
  let valueNumber = Math.floor(Math.random() * adjectiveADVERB_1E.length);
  let kWord = adjectiveADVERB_1K[valueNumber] + " + ~하게";
  let eWord = adjectiveADVERB_1E[valueNumber] + ' + ly  \n' + adjectiveADVERB_2E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0402 부사
function function0402a() {
  let valueNumber = Math.floor(Math.random() * adjectiveADVERB_2K.length);
  let kWord = adjectiveADVERB_2K[valueNumber];
  let eWord = adjectiveADVERB_2E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//0403 빈도부사
function function0403() {
  let valueNumber = Math.floor(Math.random() * adverbOfFrequencyK.length);
  let kWord = adverbOfFrequencyK[valueNumber];
  let eWord = adverbOfFrequencyE[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0404 too, either, neither
function function0404() {
  let valueNumber = Math.floor(Math.random() * adverbTooEitherNeitherK.length);
  let kWord = adverbTooEitherNeitherK[valueNumber];
  let eWord = adverbTooEitherNeitherE[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0405 sameInAdjectvieAndAdverb
function function0405() {
  let valueNumber = Math.floor(Math.random() * sameInAdjectvieAndAdverbK.length);
  let kWord = sameInAdjectvieAndAdverbK[valueNumber];
  let eWord = sameInAdjectvieAndAdverbE[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0406 adverbSimilar
function function0406() {
  let valueNumber = Math.floor(Math.random() * adverbSimilarK.length);
  let kWord = adverbSimilarK[valueNumber];
  let eWord = adverbSimilarE[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0407 adjectiveConfusing
function function0407() {
  let valueNumber = Math.floor(Math.random() * adjectiveConfusingK.length);
  let kWord = adjectiveConfusingK[valueNumber];
  let eWord = adjectiveConfusingE[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0408 adverbAlreadyYet
function function0408() {
  let valueNumber = Math.floor(Math.random() * adverbAlreadyYetK.length);
  let kWord = adverbAlreadyYetK[valueNumber];
  let eWord = adverbAlreadyYetE[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0409 adverbWithVerb
function function0409() {
  let valueNumber = Math.floor(Math.random() * adverbWithVerbK.length);
  let kWord = adverbWithVerbK[valueNumber];
  let eWord = adverbWithVerbE[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function0410() {
  let chosenNumbers = Math.floor(Math.random() * 8) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function0402a();
      break;
    case 2:
      function0403();
      break;
    case 3:
      function0404();
      break;
    case 4:
      function0405();
      break;
    case 5:
      function0406();
      break;
    case 6:
      function0407();
      break;
    case 7:
      function0408();
      break;
    case 8:
      function0409();
      break;
  }
}



// 여기부터 JET
const JET34LESSON07_K = new Array("어땠어?", "어떻게 생겼어요?", "어제 뭐했어?", "지금 (그는) 뭐하고 있어?", "내일 뭐 할거야?");
const JET34LESSON07_E = new Array("How was ~ ?", "What does (it) look like?", "What did you do yesterday?", "What is (he) doing now?", "What will you do tomorrow?");
//jet34lesson07 JET중급34급Lesson07
function jet34lesson07() {
  let valueNumber = Math.floor(Math.random() * JET34LESSON07_K.length);
  let kWord = JET34LESSON07_K[valueNumber];
  let eWord = JET34LESSON07_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
const JET34LESSON08_K = new Array("해줄 수 있어? 할 수 있어?", "해도 될까??", "~하는 게 어때?", "~하는 게 어때?");
const JET34LESSON08_E = new Array("Can you ~ ?", "Can I ~?", "Why don't you ~?", "How about ~?");
//jet34lesson08 JET중급34급Lesson08
function jet34lesson08() {
  let valueNumber = Math.floor(Math.random() * JET34LESSON08_K.length);
  let kWord = JET34LESSON08_K[valueNumber];
  let eWord = JET34LESSON08_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
const JET34LESSON09_K = new Array("~ 어디서 찾을 수 있어요?", "~까지 길을 말해주시겠어요?", "직진하세요", "~를 따라 가세요", "오른쪽으로 도세요", "왼쪽으로 도세요", "왼쪽에 있어요", "왼쪽에 있어요", "옆에", "건너편에", "모퉁이에서 (코너에서)");
const JET34LESSON09_E = new Array("Where can I find ~ ?", "Can you tell me the way to ~ ?", "Go straight", "Go along ~", "Turn right", "Turn left", "It's on your left", "You can see it on your left", "next to", "across from", "at the corner");
//jet34lesson09 JET중급34급Lesson09
function jet34lesson09() {
  let valueNumber = Math.floor(Math.random() * JET34LESSON09_K.length);
  let kWord = JET34LESSON09_K[valueNumber];
  let eWord = JET34LESSON09_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
const JET34LESSON09b_K = new Array("어떻게 도와드릴까요?", "저는 ( )를 사고 싶어요", "다 팔렸어요", "주문 받을까요?", "네. 저는 ( )를 할게요.", "도와드릴까요? (무엇이 문제인 것 같나요?)", "목아픔 (인후염)", "두통", "배아픔 (복통)", "귓병", "이빨 아픔 (치통)", "허리,등 아픔 (요통)", "열", "기침", "감기");
const JET34LESSON09b_E = new Array("How can I help you?", "I'd like to buy (a jacket)", "It’s sold out", "May I take your order?", "Yes. I'll have (a potato pizza)", "What seems to be the problem?", "sore throat", "headache", "stomachache", "earache", "toothache", "backache", "fever", "cough", "cold");
//jet34lesson09b JET중급34급Lesson09b
function jet34lesson09b() {
  let valueNumber = Math.floor(Math.random() * JET34LESSON09b_K.length);
  let kWord = JET34LESSON09b_K[valueNumber];
  let eWord = JET34LESSON09b_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

const JET34LESSON10_K = new Array("(남자)는 무엇을 하고 있나요?", "(여자)는 무엇을 하고 있나요?", "(소년)은 무엇을 하고 있나요?", "(소녀)는 무엇을 하고 있나요?", "사람들은 무엇을 하고 있나요?", "(남자)는 무엇을 들고 있나요?", "(여자)는 무엇을 들고 있나요?", "(소년)은 무엇을 들고 있나요?", "(소녀)는 무엇을 들고 있나요?", "소년은 무엇을 가지고 있나요?");
const JET34LESSON10_E = new Array("What is (the man) doing?", "What is (the woman) doing?", "What is (the boy) doing? ", "What is (the girl) doing? ", "What are the people doing?", "What is (the man) holding?", "What is (the woman) holding?", "What is (the boy) holding? ", "What is (the girl) holding?", "What does (the boy) have?");
//jet34lesson10 JET중급34급Lesson10
function jet34lesson10() {
  let valueNumber = Math.floor(Math.random() * JET34LESSON10_K.length);
  let kWord = JET34LESSON10_K[valueNumber];
  let eWord = JET34LESSON10_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
const JET34LESSON11_K = new Array("누가 (앉아있는)가?", "누가 (수염을) 가지고 있는가?", "누가 (츄리닝을) 입고 있는가?");
const JET34LESSON11_E = new Array("Who is (sitting)?", "Who has (a mustache)?", "Who is wearing (a training suit)?");
//jet34lesson11 JET중급34급Lesson11
function jet34lesson11() {
  let valueNumber = Math.floor(Math.random() * JET34LESSON11_K.length);
  let kWord = JET34LESSON11_K[valueNumber];
  let eWord = JET34LESSON11_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
const JET34LESSON12_K = new Array("어디 있나요?", "어디 있나요?", "공항에", "병원에", "약국에", "정원에", "놀이공원에", "놀이터에", "벽에", "안에", "뒤에", "문 근처에", "문에", "체육관에", "도서관에", "강에", "위에", "앞에", "창문 근처에", "아래에", "옆에", "사이에");
const JET34LESSON12_E = new Array("Where is ~~~?", "Where are ~~~?", "at the airport", "at a hospital", "in a pharmacy", "in a garden", "at an amusement park", "on a playground", "on the wall", "in", "behind", "near the door", "at the gate", "at a gym", "in a library", "in a river", "on", "in front of", "near the windows", "under", "next to", "between");
//jet34lesson12 JET중급34급Lesson12
function jet34lesson12() {
  let valueNumber = Math.floor(Math.random() * JET34LESSON12_K.length);
  let kWord = JET34LESSON12_K[valueNumber];
  let eWord = JET34LESSON12_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
const JET34LESSON13_K = new Array("누가", "무엇", "어느", "어디",
  "언제", "왜", "어떻게", "얼마나 많이", "얼마나 많이", "얼마나 자주", "항상", "자주", "보통", "하루에 한 번", "일주일에 두 번");
const JET34LESSON13_E = new Array("Who", "What", "Which", "Where", "When", "Why", "How", "How many", "How much", "How often", "always", "often", "usually", "once a day", "twice a week");
//jet34lesson07 JET중급34급Lesson13
function jet34lesson13() {
  let valueNumber = Math.floor(Math.random() * JET34LESSON13_K.length);
  let kWord = JET34LESSON13_K[valueNumber];
  let eWord = JET34LESSON13_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
const JET34LESSON14_K = new Array("허락을 구할 때", "요청할 때", "물론이지", "물론이지", "잠깐 기다려", "Can으로 대답", "May로 대답", "Do/Does/Did로 대답", "Be로 대답", "You로 대답", "I 나 We로 대답", "We 나 You로 대답", "He / She / It / They");
const JET34LESSON14_E = new Array("Can I ~? May I ~? ", "Can you ~? Whould you ~? Could you ~?", "Of course.", "Sure.", "Wait a moment.", "Can으로 물어보면?", "May로 물어보면?", "Do/Does/Did로 물어보면?", "Be로 물어보면 ", "I로 물어보면?", "You로 물어보면?", "We로 물어보면?", "He/She/It/They로 물어보면?");
//jet34lesson07 JET중급34급Lesson14
function jet34lesson14() {
  let valueNumber = Math.floor(Math.random() * JET34LESSON14_K.length);
  let kWord = JET34LESSON14_K[valueNumber];
  let eWord = JET34LESSON14_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

const JET34LESSON15_K = new Array("~하자", "~하는 거 어때?", "~하는 거 어때?", "좋아", "좋아", "좋아", "좋아", "좋아");
const JET34LESSON15_E = new Array("Let’s ~", "How about ~", "Why don’t we ~", "Sounds great", "Sounds good", "That sounds good", "That’s a good idea", "All right");
//jet34lesson11 JET중급34급Lesson11
function jet34lesson15() {
  let valueNumber = Math.floor(Math.random() * JET34LESSON15_K.length);
  let kWord = JET34LESSON15_K[valueNumber];
  let eWord = JET34LESSON15_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
const JET34LESSON16_K = new Array("탁자 맞은 편에", "탁자 주위에", "탁자 뒤에", "탁자 아래에", "탁자 안에", "탁자 앞에", "탁자 안으로", "탁자로 부터", "탁자 위에", "학교 밖으로", "탁자 너머에");
const JET34LESSON16_E = new Array("across from the table", "around the table", "behind the table", "below the table", "in the table", "in front of the table", "into the table", "from the table", "on the table", "out of the school", "over the table");
//jet34lesson11 JET중급34급Lesson11
function jet34lesson16() {
  let valueNumber = Math.floor(Math.random() * JET34LESSON16_K.length);
  let kWord = JET34LESSON16_K[valueNumber];
  let eWord = JET34LESSON16_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
const JET34LESSON17_K = new Array("clean ( ) 청소하다", "get ( ) 올라타다 <> get ( ) 내리다", "look ( ) 둘러보다", "put ( ) 내려놓다 <> ( ) 들어올리다", "take ( ) 벗다 <> put ( ) 입다", "throw ( ) 버리다 <> pick ( ) 줍다", "try ( ) 입어보다(써보다, 신어보다)", "wait ( ) 기다리다", "wake ( ) 잠을 깨우다", "( )wrap 포장을 풀다 <> wrap 포장하다");
const JET34LESSON17_E = new Array("clean up", "get on <> get off", "look around", "put down <> lift", "take off <> put on", "throw away <> pick up", "try on", "wait for", "wake up", "unwrap <> wrap");
//jet34lesson11 JET중급34급Lesson11
function jet34lesson17() {
  let valueNumber = Math.floor(Math.random() * JET34LESSON17_K.length);
  let kWord = JET34LESSON17_K[valueNumber];
  let eWord = JET34LESSON17_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
const JET34LESSON21_K = new Array("건너서", "옆에", "동안에", "위한", "쪽으로", "와 함께");
const JET34LESSON21_E = new Array("across", "by", "during", "for", "to", "with");
//jet34lesson11 JET중급34급Lesson11
function jet34lesson21() {
  let valueNumber = Math.floor(Math.random() * JET34LESSON21_K.length);
  let kWord = JET34LESSON21_K[valueNumber];
  let eWord = JET34LESSON21_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
const JET34LESSON22_K = new Array("퍼센트", "맞는", "맞지 않는", "맞는, 적절한", "다음중 어느 것이", "~에 따르면", "발견 할 수 있다");
const JET34LESSON22_E = new Array("percentage", "true", "NOT true", "correct", "Which of the following", "according to", "can be found");
//jet34lesson11 JET중급34급Lesson22
function jet34lesson22() {
  let valueNumber = Math.floor(Math.random() * JET34LESSON22_K.length);
  let kWord = JET34LESSON22_K[valueNumber];
  let eWord = JET34LESSON22_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//일반동사 - 전체
function getPronounAll() {
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      function0501();
      break;
    case 2:
      function0502();
      break;
    case 3:
      function0503();
      break;
    case 4:
      function0505();
      break;
  }
}
//0501 PRONOUN_DEMONSTRATIVE_K
function function0501() {
  let kWord = ONE_SHOT_CONCEPT_K[4];
  let eWord = ONE_SHOT_CONCEPT_E[4] + " - " + ONE_SHOT_CONCEPT_2E[4];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0502 PRONOUN_DEMONSTRATIVE_K
function function0502() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
  let kWord = PRONOUN_DEMONSTRATIVE_K[valueNumber];
  let eWord = PRONOUN_DEMONSTRATIVE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0503 PRONOUN_DEMONSTRATIVE_2K
function function0503() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_2K.length);
  let kWord = PRONOUN_DEMONSTRATIVE_2K[valueNumber];
  let eWord = PRONOUN_DEMONSTRATIVE_2E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0504 IMPERSONAL_SUBJECT_K
function function0504() {
  let valueNumber = Math.floor(Math.random() * IMPERSONAL_SUBJECT_K.length);
  let kWord = IMPERSONAL_SUBJECT_E[valueNumber];
  let eWord = IMPERSONAL_SUBJECT_K[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0505 PRONOUN_PERSONAL_SUBJECTIVE_ALL_K
function function0505() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_ALL_K.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_K[valueNumber];
  let eWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0505 PRONOUN_PERSONAL_SUBJECTIVE_ALL_K
function function0505ap() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_ALL_K.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_K[valueNumber];
  let eWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_E[valueNumber];
  let apWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_AP[valueNumber];
  document.getElementById('clsRandom').innerText = eWord + " " + "- 몇 인칭? 단/복수?";
  document.getElementById('clsRandom2').innerText = apWord;
}
//0505 PRONOUN_PERSONAL_SUBJECTIVE_ALL_K
function function0505ap1() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_ALL_K.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_K[valueNumber];
  let eWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_E[valueNumber];
  let apWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_AP1[valueNumber];
  document.getElementById('clsRandom').innerText = eWord + " " + "- 몇 인칭?";
  document.getElementById('clsRandom2').innerText = apWord;
}
//0505 PRONOUN_PERSONAL_SUBJECTIVE_ALL_K
function function0505ap2() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_ALL_K.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_K[valueNumber];
  let eWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_E[valueNumber];
  let apWord = PRONOUN_PERSONAL_SUBJECTIVE_ALL_AP2[valueNumber];
  document.getElementById('clsRandom').innerText = eWord + " " + "- 단/복수?";
  document.getElementById('clsRandom2').innerText = apWord;
}
//0506 PRONOUN_PERSONAL_SUBJECTIVE_WITH_BE_K
function function0506() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_WITH_BE_K.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_WITH_BE_K[valueNumber];
  let eWord = PRONOUN_PERSONAL_SUBJECTIVE_WITH_BE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0507 PRONOUN_PERSONAL_POSSESSIVE_K
function function0507() {
  let valueNumber = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * noun2objectK.length);
  let kWord = noun1personK[valueNumber] + "의 " + noun2objectK[valueNumber2];
  let eWord = noun1personE[valueNumber] + "'s " + noun2objectE[valueNumber2];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0508 PRONOUN_PERSONAL_POSSESSIVE_2K
function function0508() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_POSSESSIVE_2K.length);
  let kWord = PRONOUN_PERSONAL_POSSESSIVE_2K[valueNumber];
  let eWord = PRONOUN_PERSONAL_POSSESSIVE_2E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0509 PRONOUN_PERSONAL_POSSESSIVE_PRONOUN_K
// TODO 컴마 따로 분리작업 
function function0509() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_POSSESSIVE_PRONOUN_K.length);
  let kWord = PRONOUN_PERSONAL_POSSESSIVE_PRONOUN_K[valueNumber];
  let eWord = PRONOUN_PERSONAL_POSSESSIVE_PRONOUN_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0510 PRONOUN_PERSONAL_OBJECTIVE_K
// TODO 컴마 따로 분리작업 
function function0510() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_OBJECTIVE_K.length);
  let kWord = PRONOUN_PERSONAL_OBJECTIVE_K[valueNumber];
  let eWord = PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0511 PRONOUN_PERSONAL_ALL_K
function function0511() {
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      function0505();
      break;
    case 2:
      function0508();
      break;
    case 3:
      function0509();
      break;
    case 4:
      function0510();
      break;
  }
}
//0511bp PRONOUN_PERSONAL_PLURAL_CONCEPT_K
function function0511bp() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_PLURAL_CONCEPT_K.length);
  let kWord = PRONOUN_PERSONAL_PLURAL_CONCEPT_K[valueNumber];
  let eWord = PRONOUN_PERSONAL_PLURAL_CONCEPT_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0511bp PRONOUN_PERSONAL_PLURAL_CONCEPT_K
function function0511bpp() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_PLURAL_K.length);
  let kWord = PRONOUN_PERSONAL_PLURAL_K[valueNumber];
  let eWord = PRONOUN_PERSONAL_PLURAL_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0512 PRONOUN_QUESTION_ANSWER_K
function function0512() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_QUESTION_ANSWER_K.length);
  let kWord = PRONOUN_QUESTION_ANSWER_K[valueNumber];
  let eWord = PRONOUN_QUESTION_ANSWER_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0511v2 PRONOUN_ALL_K
function function0511v2() {
  let chooseNumbers = Math.floor(Math.random() * 7) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      function0505();
      break;
    case 2:
      function0508();
      break;
    case 3:
      function0509();
      break;
    case 4:
      function0510();
      break;
    case 5:
      function0511bp();
      break;
    case 6:
      function0511bpp();
      break;
    case 7:
      function0512();
      break;
  }
}
//0513 PRONOUN_REFLEXIVE_K
function function0513() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_REFLEXIVE_K.length);
  let kWord = PRONOUN_REFLEXIVE_K[valueNumber];
  let eWord = PRONOUN_REFLEXIVE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0514 PRONOUN_REFLEXIVE_USAGE_K
function function0514() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_REFLEXIVE_USAGE_K.length);
  let kWord = PRONOUN_REFLEXIVE_USAGE_K[valueNumber];
  let eWord = PRONOUN_REFLEXIVE_USAGE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0515 PRONOUN_REFLEXIVE_IDIOMATIC_USAGE_K
function function0515() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_REFLEXIVE_IDIOMATIC_USAGE_K.length);
  let kWord = PRONOUN_REFLEXIVE_IDIOMATIC_USAGE_K[valueNumber];
  let eWord = PRONOUN_REFLEXIVE_IDIOMATIC_USAGE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function0515v2() {
  let chosenNumbers = Math.floor(Math.random() * 3) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function0513();
      break;
    case 2:
      function0514();
      break;
    case 3:
      function0515();
      break;
  }
}

//0516 PRONOUN_INDEFINITE_K
function function0516() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_INDEFINITE_K.length);
  let kWord = PRONOUN_INDEFINITE_K[valueNumber];
  let eWord = PRONOUN_INDEFINITE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0517 PRONOUN_INDEFINITE_2K
function function0517() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_INDEFINITE_2K.length);
  let kWord = PRONOUN_INDEFINITE_2K[valueNumber];
  let eWord = PRONOUN_INDEFINITE_2E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0518 PRONOUN_INDEFINITE_3K
function function0518() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_INDEFINITE_3K.length);
  let kWord = PRONOUN_INDEFINITE_3K[valueNumber];
  let eWord = PRONOUN_INDEFINITE_3E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0519 PRONOUN_INDEFINITE_4K
function function0519() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_INDEFINITE_4K.length);
  let kWord = PRONOUN_INDEFINITE_4K[valueNumber];
  let eWord = PRONOUN_INDEFINITE_4E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0520 PRONOUN_INDEFINITE_5K
// TODO 카드확인 
function function0520() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_INDEFINITE_5K.length);
  let kWord = PRONOUN_INDEFINITE_5K[valueNumber];
  let eWord = PRONOUN_INDEFINITE_5E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0521 PRONOUN_INDEFINITE_6K
function function0521() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_INDEFINITE_6K.length);
  let kWord = PRONOUN_INDEFINITE_6K[valueNumber];
  let eWord = PRONOUN_INDEFINITE_6E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0522 PRONOUN_INDEFINITE_7K
function function0522() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_INDEFINITE_7K.length);
  let kWord = PRONOUN_INDEFINITE_7K[valueNumber];
  let eWord = PRONOUN_INDEFINITE_7E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0522_v2 부정대명사-전체
function function0522_v2() {
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      function0517();
      break;
    case 2:
      function0518();
      break;
    case 3:
      function0519();
      break;
    case 4:
      function0520();
      break;
    case 5:
      function0521();
      break;
    case 6:
      function0522();
      break;
  }
}
//0523 PRONOUN_COMPLETE_PARTIAL_NEGATION_K
function function0523() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_COMPLETE_PARTIAL_NEGATION_K.length);
  let kWord = PRONOUN_COMPLETE_PARTIAL_NEGATION_K[valueNumber];
  let eWord = PRONOUN_COMPLETE_PARTIAL_NEGATION_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0524 PRONOUN_INTERROGATIVE_K
function function0524() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_INTERROGATIVE_K.length);
  let kWord = PRONOUN_INTERROGATIVE_K[valueNumber];
  let eWord = PRONOUN_INTERROGATIVE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0525 PRONOUN_NAMES_K
function function0525() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_NAMES_K.length);
  let kWord = PRONOUN_NAMES_K[valueNumber];
  let eWord = PRONOUN_NAMES_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function0526() {
  let chosenNumbers = Math.floor(Math.random() * 8) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function0502();
      break;
    case 2:
      function0503();
      break;
    case 3:
      function0504();
      break;
    case 4:
      function0511v2();
      break;
    case 5:
      function0513();
      break;
    case 6:
      function0514();
      break;
    case 7:
      function0515();
      break;
    case 8:
      function0522_v2();
      break;
  }
}

//function0601 ONE_SHOT_CONCEPT_K
function function0601() {
  let kWord = ONE_SHOT_CONCEPT_K[5];
  let eWord = ONE_SHOT_CONCEPT_E[5] + " - " + ONE_SHOT_CONCEPT_2E[5];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0601a CONJUNCTION_CONCEPT_K
function function0601a() {
  let valueNumber = Math.floor(Math.random() * CONJUNCTION_CONCEPT_K.length);
  let kWord = CONJUNCTION_CONCEPT_K[valueNumber];
  let eWord = CONJUNCTION_CONCEPT_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0602 conjunctionCoordinate
function function0602() {
  let valueNumber = Math.floor(Math.random() * conjunctionCoordinateK.length);
  let kWord = conjunctionCoordinateK[valueNumber];
  let eWord = conjunctionCoordinateE[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0602v2 conjunctionCoordinate
function function0602v2() {
  let valueNumber = Math.floor(Math.random() * conjunctionCoordinate2K.length);
  let kWord = conjunctionCoordinate2K[valueNumber];
  let eWord = conjunctionCoordinate2E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0603 conjunctionSubordinate
function function0603() {
  let valueNumber = Math.floor(Math.random() * CONJUNCTION_Subordinate_K.length);
  let kWord = CONJUNCTION_Subordinate_K[valueNumber];
  let eWord = CONJUNCTION_Subordinate_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0604 conjunctionSubordinateNoun
function function0604() {
  let valueNumber = Math.floor(Math.random() * conjunctionSubordinateNounK.length);
  let kWord = conjunctionSubordinateNounK[valueNumber];
  let eWord = conjunctionSubordinateNounE[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0605 conjunctionSubordinateAdverb
function function0605() {
  let valueNumber = Math.floor(Math.random() * conjunctionSubordinateAdverbK.length);
  let kWord = conjunctionSubordinateAdverbK[valueNumber];
  let eWord = conjunctionSubordinateAdverbE[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0606 conjunctionSubordinateAdverb2
function function0606() {
  let valueNumber = Math.floor(Math.random() * conjunctionSubordinateAdverb2K.length);
  let kWord = conjunctionSubordinateAdverb2K[valueNumber];
  let eWord = conjunctionSubordinateAdverb2E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0607 conjunctionRelative
// TODO Case 나눠서 loves 와 love 둘 중 하나로 해야함
function function0607() {
  let valueNumber = Math.floor(Math.random() * CONJUNCTION_RELATIVE_K.length);
  let kWord = CONJUNCTION_RELATIVE_K[valueNumber];
  let eWord = CONJUNCTION_RELATIVE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0607v2 
// TODO Case 나눠서 loves 와 love 둘 중 하나로 해야함
function function0607v2() {
  let valueNumber = Math.floor(Math.random() * conjunctionRelativeK.length);
  // let kWord = conjunctionRelativeK[valueNumber] + "가 니콜을 사랑한다";
  // let eWord = conjunctionRelativeE[valueNumber] + " loves Nicole";
  let kWord = conjunctionRelativeK[valueNumber];
  let eWord = conjunctionRelativeE[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0607v3
function function0607v3() {
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function0602v2();
      break;
    case 2:
      function0604();
      break;
    case 3:
      function0605();
      break;
    case 4:
      function0606();
      break;
    case 5:
      function0607v2();
      break;
  }
}

//0608 conjunctiveAdverb1
function function0608() {
  let valueNumber = Math.floor(Math.random() * conjunctiveAdverb1K.length);
  let kWord = conjunctiveAdverb1K[valueNumber];
  let eWord = conjunctiveAdverb1E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0609 conjunctiveAdverb2
function function0609() {
  let valueNumber = Math.floor(Math.random() * conjunctiveAdverb2K.length);
  let kWord = conjunctiveAdverb2K[valueNumber];
  let eWord = conjunctiveAdverb2E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0609v2 접속부사 전체
function function0609v2() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function0608();
      break;
    case 2:
      function0609();
      break;
  }
}
//function0607v3 접속사 전체
function function0609v3() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function0607v3();
      break;
    case 2:
      function0609v2();
      break;

  }
}
//function0701 ONE_SHOT_CONCEPT_K
function function0701() {
  let kWord = ONE_SHOT_CONCEPT_K[6];
  let eWord = ONE_SHOT_CONCEPT_E[6] + " - " + ONE_SHOT_CONCEPT_2E[6];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0701a TODO 감탄사 해야함
function function0701a() {
  let valueNumber = Math.floor(Math.random() * conjunctiveAdverb2K.length);
  let kWord = conjunctiveAdverb2K[valueNumber];
  let eWord = conjunctiveAdverb2E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0800 
function function0800() {
  let chosenNumbers = Math.floor(Math.random() * 8) + 1;
  switch (chosenNumbers) {
    case 1:
      function0801b();
      break;
    case 2:
      function0808();
      break;
    case 3:
      function0802();
      break;
    case 4:
      function0803();
      break;
    case 5:
      function0804();
      break;
    case 6:
      function0805();
      break;
    case 7:
      function0806();
      break;
    case 8:
      function0807();
      break;
  }
}
//function0801 ONE_SHOT_CONCEPT_K
function function0801() {
  let kWord = ONE_SHOT_CONCEPT_K[7];
  let eWord = ONE_SHOT_CONCEPT_E[7] + " - " + ONE_SHOT_CONCEPT_2E[7];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0801a PREPOSITION_CONCEPT_K
function function0801a() {
  let valueNumber = Math.floor(Math.random() * PREPOSITION_CONCEPT_K.length);
  let kWord = PREPOSITION_CONCEPT_K[valueNumber];
  let eWord = PREPOSITION_CONCEPT_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0801b PREPOSITION_BASIC_K
function function0801b() {
  let valueNumber = Math.floor(Math.random() * PREPOSITION_BASIC_K.length);
  let kWord = PREPOSITION_BASIC_K[valueNumber];
  let eWord = PREPOSITION_BASIC_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
// TODO 사이에 해야됨
//function0801bp PREPOSITION_BASIC_K
function function0801bp() {
  let valueNumber = Math.floor(Math.random() * PREPOSITION_BASIC_K.length);
  let valueNumber2 = Math.floor(Math.random() * noun2objectK.length);
  let kWord = noun2objectK[valueNumber2] + " " + PREPOSITION_BASIC_K[valueNumber];
  let eWord = PREPOSITION_BASIC_E[valueNumber] + " " + noun2objectE[valueNumber2];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0802 PREPOSITION_TIME
// TODO 구체적으로 풀 수 있음
function function0802() {
  let valueNumber = Math.floor(Math.random() * PREPOSITION_TIME_K.length);
  let kWord = PREPOSITION_TIME_K[valueNumber];
  let eWord = PREPOSITION_TIME_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0803 PREPOSITION_TIME_ETC
function function0803() {
  let valueNumber = Math.floor(Math.random() * PREPOSITION_TIME_ETC_K.length);
  let kWord = PREPOSITION_TIME_ETC_K[valueNumber];
  let eWord = PREPOSITION_TIME_ETC_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0803v2 PREPOSITION_DIRECTION
function function0803v2() {
  let valueNumber = Math.floor(Math.random() * PREPOSITION_DIRECTION_K.length);
  let kWord = "7시 " + PREPOSITION_DIRECTION_K[valueNumber];
  let eWord = PREPOSITION_DIRECTION_E[valueNumber] + " 7";
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0804 PREPOSITION_PLACE
// TODO 구체적으로 풀 수 있음
function function0804() {
  let valueNumber = Math.floor(Math.random() * PREPOSITION_PLACE_K.length);
  let kWord = PREPOSITION_PLACE_K[valueNumber];
  let eWord = PREPOSITION_PLACE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0804v2 PREPOSITION_PLACE
// TODO 구체적으로 풀 수 있음
function function0804v2() {
  let valueNumber = Math.floor(Math.random() * PREPOSITION_PLACE_2K.length);
  let kWord = PREPOSITION_PLACE_2K[valueNumber];
  let eWord = PREPOSITION_PLACE_2E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0805 PREPOSITION_PLACE_ETC
function function0805() {
  let valueNumber = Math.floor(Math.random() * PREPOSITION_PLACE_ETC_K.length);
  let kWord = PREPOSITION_PLACE_ETC_K[valueNumber];
  let eWord = PREPOSITION_PLACE_ETC_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0806 PREPOSITION_POSITION
function function0806() {
  let valueNumber = Math.floor(Math.random() * PREPOSITION_POSITION_K.length);
  let kWord = PREPOSITION_POSITION_K[valueNumber];
  let eWord = PREPOSITION_POSITION_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0807 PREPOSITION_DIRECTION
function function0807() {
  let valueNumber = Math.floor(Math.random() * PREPOSITION_DIRECTION_K.length);
  let kWord = PREPOSITION_DIRECTION_K[valueNumber];
  let eWord = PREPOSITION_DIRECTION_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0807v2 PREPOSITION_DIRECTION
function function0807v2() {
  let valueNumber = Math.floor(Math.random() * PREPOSITION_DIRECTION_K.length);
  let kWord = "상자 " + PREPOSITION_DIRECTION_K[valueNumber];
  let eWord = PREPOSITION_DIRECTION_E[valueNumber] + "the box";
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0808 PREPOSITION_ETC
// TODO 구체적으로 풀 수 있음
function function0808() {
  let valueNumber = Math.floor(Math.random() * PREPOSITION_ETC_K.length);
  let kWord = PREPOSITION_ETC_K[valueNumber];
  let eWord = PREPOSITION_ETC_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function0901 ONE_SHOT_CONCEPT_K
function function0901() {
  let kWord = ONE_SHOT_CONCEPT_K[8];
  let eWord = ONE_SHOT_CONCEPT_E[8] + " - " + ONE_SHOT_CONCEPT_2E[8];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0901 ARTICLE
function function0901a() {
  let valueNumber = Math.floor(Math.random() * ARTICLE_K.length);
  let kWord = ARTICLE_K[valueNumber];
  let eWord = ARTICLE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0902 ARTICLE_INFINITIVE
function function0902() {
  let valueNumber = Math.floor(Math.random() * ARTICLE_INFINITIVE_K.length);
  let kWord = ARTICLE_INFINITIVE_K[valueNumber];
  let eWord = ARTICLE_INFINITIVE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0902bARTICLE_INFINITIVE
function function0902b() {
  let valueNumber = Math.floor(Math.random() * ARTICLE_INFINITIVE_BASIC_K.length);
  let kWord = ARTICLE_INFINITIVE_BASIC_K[valueNumber];
  let eWord = ARTICLE_INFINITIVE_BASIC_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0903 ARTICLE_THE_NUMERIC
function function0903() {
  let valueNumber = Math.floor(Math.random() * ARTICLE_THE_NUMERIC_K.length);
  let kWord = "단수?복수? - " + ARTICLE_THE_NUMERIC_K[valueNumber];
  let eWord = ARTICLE_THE_NUMERIC_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0904 ARTICLE_THE
function function0904() {
  let valueNumber = Math.floor(Math.random() * ARTICLE_THE_K.length);
  let kWord = ARTICLE_THE_K[valueNumber];
  let eWord = ARTICLE_THE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0905 NO_ARTICLE
function function0905() {
  let valueNumber = Math.floor(Math.random() * NO_ARTICLE_K.length);
  let kWord = NO_ARTICLE_K[valueNumber];
  let eWord = NO_ARTICLE_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//0906 
function function0906() {
  let chosenNumbers = Math.floor(Math.random() * 3) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function0902();
      break;
    case 2:
      function0904();
      break;
    case 3:
      function0905();
      break;
  }
}


//function1001 ONE_SHOT_CONCEPT_K
function function1001() {
  let kWord = ONE_SHOT_CONCEPT_K[9];
  let eWord = ONE_SHOT_CONCEPT_E[9] + " - " + ONE_SHOT_CONCEPT_2E[9];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1001a TENSE_CONCEPT_K
function function1001a() {
  let valueNumber = Math.floor(Math.random() * TENSE_CONCEPT_K.length);
  let kWord = TENSE_CONCEPT_K[valueNumber];
  let eWord = TENSE_CONCEPT_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1001a TENSE_12_K
function function1001b() {
  let valueNumber = Math.floor(Math.random() * TENSE_12_K.length);
  let kWord = TENSE_12_K[valueNumber];
  let eWord = TENSE_12_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1001b TENSE_12_2K
function function1001c() {
  let valueNumber = Math.floor(Math.random() * TENSE_12_2K.length);
  let kWord = TENSE_12_2K[valueNumber];
  let eWord = TENSE_12_2E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1002 TENSE_PRESENT
// TODO Case로 3인칭 단수형
function function1002() {
  let valueNumber = Math.floor(Math.random() * VERB_SENTENCE_FORM_1_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + VERB_SENTENCE_FORM_1_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1003 TENSE_PAST
function function1003() {
  let valueNumber = Math.floor(Math.random() * TENSE_PAST_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + TENSE_PAST_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + TENSE_PAST_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1004 TENSE_PAST_2K
function function1004() {
  let valueNumber = Math.floor(Math.random() * TENSE_PAST_2K.length);
  let kWord = TENSE_PAST_2K[valueNumber];
  let eWord = TENSE_PAST_2E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1004 TENSE_PAST_2K
function function1004v2() {
  let valueNumber = Math.floor(Math.random() * TENSE_PAST_2K.length);
  let kWord = TENSE_PAST_2K[valueNumber];
  let eWord = TENSE_PAST_2E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1004 TENSE_PAST_2K
function function1004v3() {
  let valueNumber = Math.floor(Math.random() * TENSE_PASTv2_2K.length);
  let kWord = TENSE_PASTv2_2K[valueNumber];
  let eWord = TENSE_PASTv2_2E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1005 SENTENCE_NEGATIVE_INTERROGATIVE_K
function function1005() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_NEGATIVE_INTERROGATIVE_K.length);
  let kWord = SENTENCE_NEGATIVE_INTERROGATIVE_K[valueNumber];
  let eWord = SENTENCE_NEGATIVE_INTERROGATIVE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1006 TENSE_CONTINUOUS_K
function function1006() {
  let valueNumber = Math.floor(Math.random() * TENSE_CONTINUOUS_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + TENSE_CONTINUOUS_K[valueNumber] + " 중이다";
  let eWord = pronounBoxBeE[valueNumber2] + TENSE_CONTINUOUS_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1006v2 TENSE_CONTINUOUS_K
function function1006v2() {
  let valueNumber = Math.floor(Math.random() * TENSE_CONTINUOUS_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + "안 " + TENSE_CONTINUOUS_K[valueNumber] + " 중이다";
  let eWord = pronounBoxBeE[valueNumber2] + "not " + TENSE_CONTINUOUS_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1007 TENSE_RULE_ING_K
function function1007() {
  let valueNumber = Math.floor(Math.random() * RULE_OF_ING_K.length);
  let kWord = RULE_OF_ING_K[valueNumber];
  let eWord = RULE_OF_ING_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1008v1 소유/상태동사
function function1008v1() {
  let valueNumber = Math.floor(Math.random() * VERB_NOT_CONTINUOUS_1K.length);
  let kWord = VERB_NOT_CONTINUOUS_1K[valueNumber];
  let eWord = VERB_NOT_CONTINUOUS_1E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1008v2 감정/생각동사
function function1008v2() {
  let valueNumber = Math.floor(Math.random() * VERB_NOT_CONTINUOUS_2K.length);
  let kWord = VERB_NOT_CONTINUOUS_2K[valueNumber];
  let eWord = VERB_NOT_CONTINUOUS_2E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1008v3 지각/감각동사
function function1008v3() {
  let valueNumber = Math.floor(Math.random() * VERB_NOT_CONTINUOUS_3K.length);
  let kWord = VERB_NOT_CONTINUOUS_3K[valueNumber];
  let eWord = VERB_NOT_CONTINUOUS_3E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1008 진행형 불가 동사
function function1008v4() {
  let chosenNumbers = Math.floor(Math.random() * 3) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1008v1();
      break;
    case 2:
      function1008v2();
      break;
    case 3:
      function1008v3();
      break;
  }
}
//function1009 TENSE_CONTINUOUS_2K 
function function1009() {
  let valueNumber = Math.floor(Math.random() * TENSE_CONTINUOUS_2K.length);
  let kWord = TENSE_CONTINUOUS_2K[valueNumber];
  let eWord = TENSE_CONTINUOUS_2E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1009v3 TENSE_CONTINUOUS_PAST_K 과거 진행 응용
function function1009v3() {
  let valueNumber = Math.floor(Math.random() * TENSE_CONTINUOUS_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + TENSE_CONTINUOUS_K[valueNumber] + " 중이었다";
  let eWord = pronounBoxBePastE[valueNumber2] + TENSE_CONTINUOUS_PAST_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1009v4 TENSE_CONTINUOUS_FUTURE_K 미래 진행 응용
function function1009v4() {
  let valueNumber = Math.floor(Math.random() * TENSE_CONTINUOUS_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + TENSE_CONTINUOUS_K[valueNumber] + " 중 일 것이다";
  let eWord = pronounBoxE[valueNumber2] + "will be " + TENSE_CONTINUOUS_FUTURE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1009v2 TENSE_CONTINUOUS_K 현재 과거 미래 진행 응용
function function1009v2() {
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1006();
      break;
    case 2:
      function1009v3();
      break;
    case 3:
      function1009v4();
      break;
    case 4:
      function1006v2();
      break;
  }
}
//function1010 AUXILIARY_WILL_K
function function1010() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_WILL_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_WILL_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "will " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1010 AUXILIARY_WILL_K
function function1010v2() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_WILL_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_WILL_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "will " + VERB_SENTENCE_FORM_1_E[valueNumber] + "\n" +
    pronounBoxBeE[valueNumber2] + "going to " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

function function1010v3() {
  let chosenNumbers = Math.floor(Math.random() * 3) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getRandomVerb1All();
      break;
    case 2:
      function1003();
      break;
    case 3:
      function1010v2();
      break;
  }
}
function function1010v4() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1010v3();
      break;
    case 2:
      function1009v2();
      break;
  }
}
//function1011 
function function1011() {
  let valueNumber = Math.floor(Math.random() * TENSE_FUTURE_2K.length);
  let kWord = TENSE_FUTURE_2K[valueNumber];
  let eWord = TENSE_FUTURE_2E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1012 현재vs현재진행
function function1012() {
  let valueNumber = Math.floor(Math.random() * TENSE_PRESENT_VS_PRESENT_CONTINUOUS_K.length);
  let kWord = TENSE_PRESENT_VS_PRESENT_CONTINUOUS_K[valueNumber];
  let eWord = TENSE_PRESENT_VS_PRESENT_CONTINUOUS_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1013 TENSE_PRESENT_PERFECT_K
function function1013() {
  let valueNumber = Math.floor(Math.random() * TENSE_PRESENT_PERFECT_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + TENSE_PRESENT_PERFECT_K[valueNumber];
  let eWord = pronounBoxHaveE[valueNumber2] + TENSE_PRESENT_PERFECT_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1014 PRESENT_PERFECT_USAGE_K
function function1014() {
  let valueNumber2 = Math.floor(Math.random() * PRESENT_PERFECT_USAGE_K.length);
  let kWord = PRESENT_PERFECT_USAGE_K[valueNumber2];
  let eWord = PRESENT_PERFECT_USAGE_E[valueNumber2];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1015 PRESENT_PERFECT_USAGE_2K
function function1015() {
  let valueNumber2 = Math.floor(Math.random() * PRESENT_PERFECT_USAGE_2K.length);
  let kWord = PRESENT_PERFECT_USAGE_2K[valueNumber2];
  let eWord = PRESENT_PERFECT_USAGE_2E[valueNumber2];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

function function1015v2() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1014();
      break;
    case 2:
      function1015();
      break;
  }
}

//function1016 TENSE_RULE_ING_K
function function1016() {
  let valueNumber = Math.floor(Math.random() * PAST_VS_PRESENT_PERFECT_K.length);
  let kWord = PAST_VS_PRESENT_PERFECT_K[valueNumber];
  let eWord = PAST_VS_PRESENT_PERFECT_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1017 TENSE_PAST_PERFECT_K
function function1017() {
  let valueNumber = Math.floor(Math.random() * TENSE_PAST_PERFECT_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + TENSE_PAST_PERFECT_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "had " + TENSE_PRESENT_PERFECT_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1017v2 TENSE_FUTURE_PERFECT_K
function function1017v2() {
  let valueNumber = Math.floor(Math.random() * TENSE_FUTURE_PERFECT_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + TENSE_FUTURE_PERFECT_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "will have " + TENSE_PRESENT_PERFECT_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1018v3 시제-현재vs과거vs미래완료 - 전체
function function1017v3() {
  let chosenNumbers = Math.floor(Math.random() * 3) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1017();
      break;
    case 2:
      function1017v2();
      break;
    case 3:
      function1013();
      break;
  }
}
//function1018 PERFECT_CONTINUOUS_K 시제-현재완료 진행
function function1018() {
  let valueNumber = Math.floor(Math.random() * PERFECT_CONTINUOUS_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + PERFECT_CONTINUOUS_K[valueNumber] + " 중이다";
  let eWord = pronounBoxHaveE[valueNumber2] + "been " + PERFECT_CONTINUOUS_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1018 PERFECT_PAST_CONTINUOUS_K 시제-과거완료 진행
function function1018v2() {
  let valueNumber = Math.floor(Math.random() * PERFECT_PAST_CONTINUOUS_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + PERFECT_PAST_CONTINUOUS_K[valueNumber] + " 중이었다";
  let eWord = pronounBoxE[valueNumber2] + "had been " + PERFECT_CONTINUOUS_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1018v3 시제-현재vs과거완료 진행 - 전체
function function1018v3() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1018();
      break;
    case 2:
      function1018v2();
      break;
  }
}

function function1000() {
  let chosenNumbers = Math.floor(Math.random() * 19) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      getRandomVerb1All();
      break;
    case 2:
      function1003();
      break;
    case 3:
      function1004v2();
      break;
    case 4:
      function1004v3();
      break;
    case 5:
      function1005();
      break;
    case 6:
      function1006();
      break;
    case 7:
      function1007();
      break;
    case 8:
      function1008v4();
      break;
    case 9:
      function1009();
      break;
    case 10:
      function1009v2();
      break;
    case 11:
      function1010v2();
      break;
    case 12:
      function1010v3();
      break;
    case 13:
      function1011();
      break;
    case 14:
      function1012();
      break;
    case 15:
      function1013();
      break;
    case 16:
      function1015v2();
      break;
    case 17:
      function1016();
      break;
    case 18:
      function1017v3();
      break;
    case 19:
      function1018v3();
      break;
  }
}


//function1101 ONE_SHOT_CONCEPT_K
function function1101() {
  let kWord = ONE_SHOT_CONCEPT_K[10];
  let eWord = ONE_SHOT_CONCEPT_E[10] + " - " + ONE_SHOT_CONCEPT_2E[10];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1101 AUXILIARY
function function1101a() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  let kword;
  let eword;
  switch (chosenNumbers) {
    case 1:
      kWord = ONE_SHOT_CONCEPT_K[10];
      eWord = ONE_SHOT_CONCEPT_E[10] + " - " + ONE_SHOT_CONCEPT_2E[10];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2:
      let valueNumber = Math.floor(Math.random() * AUXILIARY_FEATURE_K.length);
      kWord = AUXILIARY_FEATURE_K[valueNumber];
      eWord = AUXILIARY_FEATURE_E[valueNumber];
      document.getElementById('clsRandom').innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      let date = new Date();
      let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`); break;
  }
}


//function1101 AUXILIARY
function function1101b() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_ALL_K.length);
  let kWord = AUXILIARY_ALL_K[valueNumber];
  let eWord = AUXILIARY_ALL_E[valueNumber];
  document.getElementById('clsRandom').innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1102 AUXILIARY_CAN_K
function function1102() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_CAN_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_CAN_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "can " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1102 AUXILIARY_CAN_K
function function1102n() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_CAN_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_CAN_K[valueNumber].slice(0, -2) + "없다";
  let eWord = pronounBoxE[valueNumber2] + "can't " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1102 AUXILIARY_CAN_K
function function1102q() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_CAN_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_CAN_K[valueNumber].slice(0, -1) + "니?";
  let eWord = "Can " + pronounBoxElow[valueNumber2] + VERB_SENTENCE_FORM_1_E[valueNumber] + "?";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1102 AUXILIARY_CAN_K
function function1102q2() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_CAN_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let valueNumber3 = Math.floor(Math.random() * RELATIVE_ADVERB_2Ev2.length);
  let kWord = pronounBoxK[valueNumber2] + RELATIVE_ADVERB_2Kv2[valueNumber3] + " " + AUXILIARY_CAN_K[valueNumber].slice(0, -1) + "니?";
  let eWord = RELATIVE_ADVERB_2Ev2[valueNumber3] + " can " + pronounBoxElow[valueNumber2] + VERB_SENTENCE_FORM_1_E[valueNumber] + "?";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1103 AUXILIARY_MAY_K
function function1103() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_MAY_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_MAY_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "may " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1104 AUXILIARY_WILL_K
function function1104() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_WILL_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_WILL_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "will " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1104 AUXILIARY_WILL_K
function function1104n() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_WILL_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + "안 " + AUXILIARY_WILL_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "will not " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1102 AUXILIARY_WILL_K
function function1104q() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_WILL_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_WILL_K[valueNumber].slice(0, -1) + "니?";
  let eWord = "Will " + pronounBoxElow[valueNumber2] + VERB_SENTENCE_FORM_1_E[valueNumber] + "?";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1102 AUXILIARY_WILL_K
function function1104q2() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_WILL_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let valueNumber3 = Math.floor(Math.random() * RELATIVE_ADVERB_2Ev2.length);
  let kWord = pronounBoxK[valueNumber2] + RELATIVE_ADVERB_2Kv2[valueNumber3] + " " + AUXILIARY_WILL_K[valueNumber].slice(0, -1) + "니?";
  let eWord = RELATIVE_ADVERB_2Ev2[valueNumber3] + " will " + pronounBoxElow[valueNumber2] + VERB_SENTENCE_FORM_1_E[valueNumber] + "?";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1104v2() {
  let chosenNumbers = Math.floor(Math.random() * 6) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1102();
      break;
    case 2:
      function1102q();
      break;
    case 3:
      function1102q2();
      break;
    case 4:
      function1104();
      break;
    case 5:
      function1104q();
      break;
    case 6:
      function1104q2();
      break;
  }
}
//function1105 AUXILIARY_BeGoingTo_K
function function1105() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_BeGoingTo_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_BeGoingTo_K[valueNumber];
  let eWord = pronounBoxBeE[valueNumber2] + "going to " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1105 AUXILIARY_BeGoingTo_K
function function1105n() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_BeGoingTo_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + "안 " + AUXILIARY_BeGoingTo_K[valueNumber];
  let eWord = pronounBoxBeE[valueNumber2] + "not going to " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1105 AUXILIARY_BeGoingTo_K
function function1105q() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_BeGoingTo_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_BeGoingTo_K[valueNumber].slice(0, -1) + "니?";
  let eWord = pronounBoxBeE_Q[valueNumber2] + " going to " + VERB_SENTENCE_FORM_1_E[valueNumber] + "?";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1105 AUXILIARY_BeGoingTo_K
function function1105q2() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_BeGoingTo_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let valueNumber3 = Math.floor(Math.random() * RELATIVE_ADVERB_2Ev2.length);
  let kWord = pronounBoxK[valueNumber2] + RELATIVE_ADVERB_2Kv2[valueNumber3] + " " + AUXILIARY_BeGoingTo_K[valueNumber].slice(0, -1) + "니?";
  let eWord = RELATIVE_ADVERB_2Ev2[valueNumber3] + " " + pronounBoxBeE_smallQ[valueNumber2] + " going to " + VERB_SENTENCE_FORM_1_E[valueNumber] + "?";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1105v2 AUXILIARY_WILL_K + BeGoingTo_K
function function1105v2() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_BeGoingTo_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_BeGoingTo_K[valueNumber];
  let eWord =
    pronounBoxE[valueNumber2] + "will " + VERB_SENTENCE_FORM_1_E[valueNumber] + "\n" +
    pronounBoxBeE[valueNumber2] + "going to " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1105 AUXILIARY_BeGoingTo_K
function function1105v2n() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_BeGoingTo_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + "안 " + AUXILIARY_BeGoingTo_K[valueNumber];
  let eWord =
    pronounBoxE[valueNumber2] + "will not " + VERB_SENTENCE_FORM_1_E[valueNumber] + "\n" +
    pronounBoxBeE[valueNumber2] + "not going to " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1105 AUXILIARY_BeGoingTo_K
function function1105v2q() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_BeGoingTo_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_BeGoingTo_K[valueNumber].slice(0, -1) + "니?";
  let eWord =
    "Will " + pronounBoxElow[valueNumber2] + VERB_SENTENCE_FORM_1_E[valueNumber] + "?" + "\n" +
    pronounBoxBeE_Q[valueNumber2] + " going to " + VERB_SENTENCE_FORM_1_E[valueNumber] + "?";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1105 AUXILIARY_BeGoingTo_K
function function1105v2qq() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_BeGoingTo_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let valueNumber3 = Math.floor(Math.random() * RELATIVE_ADVERB_2Ev2.length);
  let kWord = pronounBoxK[valueNumber2] + RELATIVE_ADVERB_2Kv2[valueNumber3] + " " + AUXILIARY_BeGoingTo_K[valueNumber].slice(0, -1) + "니?";
  let eWord =
    RELATIVE_ADVERB_2Ev2[valueNumber3] + " will " + pronounBoxElow[valueNumber2] + VERB_SENTENCE_FORM_1_E[valueNumber] + "?" + "\n" +
    RELATIVE_ADVERB_2Ev2[valueNumber3] + " " + pronounBoxBeE_smallQ[valueNumber2] + " going to " + VERB_SENTENCE_FORM_1_E[valueNumber] + "?";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1105v3() {
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1105v2();
      break;
    case 2:
      function1105v2n();
      break;
    case 3:
      function1105v2();
      break;
    case 4:
      function1105v2qq();
      break;

  }
}
//function1106 AUXILIARY_WOULD_K
function function1106() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_WOULD_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_WOULD_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "would " + VERB_ALL_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1106v2 AUXILIARY_WOULD_LIKE_TO_K
function function1106v2() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_WOULD_LIKE_TO_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_WOULD_LIKE_TO_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "would like to " + VERB_ALL_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1107 AUXILIARY_MUST_K
function function1107() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_MUST_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_MUST_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "must " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1108 AUXILIARY_HaveTo_K
function function1108() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_HaveTo_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_HaveTo_K[valueNumber];
  let eWord = pronounBoxHaveE[valueNumber2] + "to " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1109 AUXILIARY_SHOULD_K
function function1109() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_SHOULD_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_SHOULD_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "should " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1109v2 AUXILIARY_OughtTo_K
function function1109v2() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_OughtTo_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_OughtTo_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "ought to " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1109v2 AUXILIARY_OughtTo_K
function function1109v3() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_OughtTo_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);

  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_OughtTo_K[valueNumber];
  let eWord =
    pronounBoxE[valueNumber2] + "must " + VERB_SENTENCE_FORM_1_E[valueNumber] + "\n" +
    pronounBoxHaveE[valueNumber2] + "to " + VERB_SENTENCE_FORM_1_E[valueNumber] + "\n" +
    pronounBoxE[valueNumber2] + "should " + VERB_SENTENCE_FORM_1_E[valueNumber] + "\n" +
    pronounBoxE[valueNumber2] + "ought to " + VERB_SENTENCE_FORM_1_E[valueNumber] + "";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1110 AUXILIARY_HAD_BETTER_K
function function1110() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_HAD_BETTER_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_HAD_BETTER_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "had better " + VERB_ALL_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1111 AUXILIARY_WOULD_RATHER_K
function function1111() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_WOULD_RATHER_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_WOULD_RATHER_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "would rather " + VERB_ALL_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1112 AUXILIARY_USED_TO_K
function function1112() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_USED_TO_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_USED_TO_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "used to " + VERB_ALL_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1112 AUXILIARY_USED_TO_K
function function1112b() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_USED_TO_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_USED_TO_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "would " + VERB_ALL_E[valueNumber] + "\n" +
    pronounBoxE[valueNumber2] + "used to " + VERB_ALL_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

function function1112a() {
  let chosenNumbers = Math.floor(Math.random() * 7) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1102();
      break;
    case 2:
      function1103();
      break;
    case 3:
      function1104();
      break;
    case 4:
      function1105();
      break;
    case 5:
      function1112b();
      break;
    case 6:
      function1109v3();
      break;
    case 7:
      function1110();
      break;
  }
}
//function1113a AUXILIARY_SHOULD_HAVE_PP_K
function function1113a() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_SHOULD_HAVE_PP_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_SHOULD_HAVE_PP_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "should have " + VERB_ALL_PAST_PARTICIPLE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1113b AUXILIARY_MUST_HAVE_PP_K
function function1113b() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_MUST_HAVE_PP_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_MUST_HAVE_PP_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "must have " + VERB_ALL_PAST_PARTICIPLE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1113c AUXILIARY_CANNOT_HAVE_PP_K
function function1113c() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_CANNOT_HAVE_PP_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_CANNOT_HAVE_PP_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "cannot have " + VERB_ALL_PAST_PARTICIPLE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1113d AUXILIARY_MAY_HAVE_PP_K
function function1113d() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_MAY_HAVE_PP_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_MAY_HAVE_PP_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "may have " + VERB_ALL_PAST_PARTICIPLE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1113d AUXILIARY_COULD_HAVE_PP_K
function function1113e() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_COULD_HAVE_PP_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_COULD_HAVE_PP_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "could have " + VERB_ALL_PAST_PARTICIPLE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}



function function1113f() {
  let chosenNumbers = Math.floor(Math.random() * 5) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1113a();
      break;
    case 2:
      function1113b();
      break;
    case 3:
      function1113c();
      break;
    case 4:
      function1113d();
      break;
    case 5:
      function1113e();
      break;
  }
}

//function1114a MAY_IDIOMATIC_EXPRESSION_1K
function function1114a() {
  let valueNumber = Math.floor(Math.random() * MAY_IDIOMATIC_EXPRESSION_1K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + MAY_IDIOMATIC_EXPRESSION_1K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "may well " + VERB_ALL_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1114b MAY_IDIOMATIC_EXPRESSION_2K
function function1114b() {
  let valueNumber = Math.floor(Math.random() * MAY_IDIOMATIC_EXPRESSION_2K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + MAY_IDIOMATIC_EXPRESSION_2K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "may as well " + VERB_ALL_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1115 조동사 전체
function function1115() {
  let chosenNumbers = Math.floor(Math.random() * 14) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1114b();
      break;
    case 2:
      function1104v2();
      break;
    case 3:
      function1103();
      break;
    case 4:
      function1105v3();
      break;
    case 5:
      function1111();
      break;
    case 6:
      function1109v3();
      break;
    case 7:
      function1110();
      break;
    case 8:
      function1112b();
      break;
    case 9:
      function1113a();
      break;
    case 10:
      function1113b();
      break;
    case 11:
      function1113c();
      break;
    case 12:
      function1113d();
      break;
    case 13:
      function1113e();
      break;
    case 14:
      function1114a();
      break;
  }
}
//function1201 ONE_SHOT_CONCEPT_K
function function1201() {
  let kWord = ONE_SHOT_CONCEPT_K[11];
  let eWord = ONE_SHOT_CONCEPT_E[11] + " - " + ONE_SHOT_CONCEPT_2E[11];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1201a GERUND_K
function function1201a() {
  let valueNumber = Math.floor(Math.random() * GERUND_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = GERUND_K[valueNumber];
  let eWord = GERUND_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1202 GERUND_TYPE_K
function function1202() {
  let valueNumber = Math.floor(Math.random() * GERUND_TYPE_K.length);
  let valueNumber2 = Math.floor(Math.random() * GERUND_K.length);
  let kWord = GERUND_K[valueNumber2] + GERUND_TYPE_K[valueNumber];
  let eWord = GERUND_TYPE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1203 GERUND_NEGATIVE_K
function function1203() {
  let valueNumber = Math.floor(Math.random() * GERUND_K.length);
  let valueNumber2 = Math.floor(Math.random() * GERUND_NEGATIVE_K.length);
  let kWord = GERUND_NEGATIVE_K[valueNumber2] + GERUND_K[valueNumber];
  let eWord = GERUND_NEGATIVE_E[valueNumber2] + GERUND_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1204 GERUND_SENSE_SUBJECT_SENTENCE_K
function function1204() {
  let valueNumber = Math.floor(Math.random() * GERUND_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + GERUND_K[valueNumber];
  let eWord = PRONOUN_PERSONAL_POSSESSIVE_E[valueNumber2] + " " + GERUND_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1204 GERUND_SENSE_SUBJECT_K
function function1204v2() {
  let valueNumber = Math.floor(Math.random() * GERUND_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let valueNumber3 = Math.floor(Math.random() * GERUND_SENSE_SUBJECT_SENTENCE_E.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + GERUND_K[valueNumber] + GERUND_SENSE_SUBJECT_SENTENCE_K[valueNumber3];
  let eWord = GERUND_SENSE_SUBJECT_SENTENCE_E[valueNumber3] + PRONOUN_PERSONAL_POSSESSIVE_E[valueNumber2] + " " + GERUND_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;

}
//function1205 GERUND_VS_PRESENT_PARTICIPLE_K
function function1205() {
  let valueNumber = Math.floor(Math.random() * VERB_WITH_K.length);
  let kWord = "";
  let eWord = "";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1206 VERB_WITH_K
function function1206() {
  let valueNumber = Math.floor(Math.random() * VERB_WITH_K.length);
  let kWord = VERB_WITH_K[valueNumber];
  let eWord = VERB_WITH_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1206All 
function function1206All() {
  let chosenNumbers = Math.floor(Math.random() * 3) + 1;
  let kWord;
  let eWord;
  switch (chosenNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * VERB_WITH_BOTH_E2.length);
      kWord = VERB_WITH_BOTH_E[valueNumber1];
      eWord = VERB_WITH_BOTH_E2[valueNumber1];
      break;
    case 2:
      let valueNumber2 = Math.floor(Math.random() * VERB_WITH_TO_E.length);
      kWord = VERB_WITH_TO_E[valueNumber2];
      eWord = VERB_WITH_TO_2E[valueNumber2];
      break;
    case 3:
      let valueNumber3 = Math.floor(Math.random() * VERB_WITH_ING_E.length);
      kWord = VERB_WITH_ING_E[valueNumber3];
      eWord = VERB_WITH_ING_2E[valueNumber3];
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1207 VERB_WITH_TO_K
function function1207() {
  let valueNumber = Math.floor(Math.random() * VERB_WITH_TO_K.length);
  let kWord = VERB_WITH_TO_K[valueNumber];
  let eWord = VERB_WITH_TO_E[valueNumber] + " (to 동사원형) ";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1208 VERB_WITH_ING_K
function function1208() {
  let valueNumber = Math.floor(Math.random() * VERB_WITH_ING_K.length);
  let kWord = VERB_WITH_ING_K[valueNumber];
  let eWord = VERB_WITH_ING_E[valueNumber] + " (동사원형-ing)";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1209 VERB_WITH_BOTH_K
function function1209() {
  let valueNumber = Math.floor(Math.random() * VERB_WITH_BOTH_K.length);
  let kWord = VERB_WITH_BOTH_K[valueNumber];
  let eWord = VERB_WITH_BOTH_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1210 VERB_WITH_BOTH_2K
function function1210() {
  let valueNumber = Math.floor(Math.random() * VERB_WITH_BOTH_2K.length);
  let kWord = VERB_WITH_BOTH_2K[valueNumber];
  let eWord = VERB_WITH_BOTH_2E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//1210v2 VERB_WITH_BOTH_3K
function function1210v2() {
  let valueNumber = Math.floor(Math.random() * VERB_WITH_BOTH_3K.length);
  let kWord = VERB_WITH_BOTH_3K[valueNumber];
  let eWord = VERB_WITH_BOTH_3E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1211 GERUND_IDIOMATIC_EXPRESSION_K
function function1211() {
  let valueNumber = Math.floor(Math.random() * GERUND_IDIOMATIC_EXPRESSION_K.length);
  let kWord = GERUND_IDIOMATIC_EXPRESSION_K[valueNumber];
  let eWord = GERUND_IDIOMATIC_EXPRESSION_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1212 GERUND_IDIOMATIC_EXPRESSION_2K
function function1212() {
  let valueNumber = Math.floor(Math.random() * GERUND_IDIOMATIC_EXPRESSION_2K.length);
  let kWord = GERUND_IDIOMATIC_EXPRESSION_2K[valueNumber];
  let eWord = GERUND_IDIOMATIC_EXPRESSION_2E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1212v2 
function function1212v2() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1211();
      break;
    case 2:
      function1212();
      break;
  }
}
//1213 GERUND_TENSE_K
function function1213() {
  let valueNumber = Math.floor(Math.random() * GERUND_TENSE_K.length);
  let kWord = GERUND_TENSE_K[valueNumber];
  let eWord = GERUND_TENSE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1213v2 GERUND_TENSE_K alternative
function function1213v2() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1201a();
      break;
    case 2:
      function1213();
      break;
  }
}
//1214 GERUND_PASSIVE_K
function function1214() {
  let valueNumber = Math.floor(Math.random() * GERUND_PASSIVE_K.length);
  let kWord = GERUND_PASSIVE_K[valueNumber];
  let eWord = "being " + GERUND_PASSIVE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1214v2 GERUND_PASSIVE_K alternative
function function1214v2() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1201a();
      break;
    case 2:
      function1214();
      break;
  }
}
function function1215() {
  let chosenNumbers = Math.floor(Math.random() * 10) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1214v2();
      break;
    case 2:
      function1213v2();
      break;
    case 3:
      function1212();
      break;
    case 4:
      function1211();
      break;
    case 5:
      function1210v2();
      break;
    case 6:
      function1206All();
      break;
    case 7:
      function1204v2();
      break;
    case 8:
      function1204();
      break;
    case 9:
      function1203();
      break;
    case 10:
      function1202();
      break;
  }
}
//function1301 ONE_SHOT_CONCEPT_K
function function1301() {
  let kWord = ONE_SHOT_CONCEPT_K[12];
  let eWord = ONE_SHOT_CONCEPT_E[12] + " - " + ONE_SHOT_CONCEPT_2E[12];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1301a PARTICIPLE_K
function function1301a() {
  let valueNumber = Math.floor(Math.random() * VERB_ALL_PRESENT_PARTICIPLE_K.length);
  let kWord = VERB_ALL_PRESENT_PARTICIPLE_K[valueNumber];
  let eWord = VERB_ALL_PRESENT_PARTICIPLE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1301b PARTICIPLE_K
function function1301b() {
  let valueNumber = Math.floor(Math.random() * VERB_ALL_PAST_PARTICIPLE_K.length);
  let kWord = VERB_ALL_PAST_PARTICIPLE_K[valueNumber];
  let eWord = VERB_ALL_PAST_PARTICIPLE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1301c PARTICIPLE_K alternative
function function1301c() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1301a();
      break;
    case 2:
      function1301b();
      break;
  }
}

//function1301d PARTICIPLE_K
function function1302d() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log("chooseNumbers = ", chooseNumbers);
  let valueNumber = Math.floor(Math.random() * SENTENCE_THERE_BE_K.length);
  console.log("valueNumber = ", valueNumber);
  let valueNumber1 = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber5 = Math.floor(Math.random() * VERB_ALL_PRESENT_PARTICIPLE_K.length);
  let valueNumber6 = Math.floor(Math.random() * VERB_ALL_PAST_PARTICIPLE_K.length);

  let eWord;
  let kWord;

  switch (chooseNumbers) {
    case 1:

      let eWord = VERB_ALL_PRESENT_PARTICIPLE_E[valueNumber5];
      kWord = VERB_ALL_PRESENT_PARTICIPLE_K[valueNumber5] + " " + noun3animalK[valueNumber1] + " 한 마리가 있다";
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "There is an " + eWord + " " + noun3animalE[valueNumber1] + ".";
      } else {
        eWord = "There is a " + eWord + " " + noun3animalE[valueNumber1] + ".";
      }
      console.log("eWord = ", eWord);

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2:
      eWord = VERB_ALL_PAST_PARTICIPLE_E[valueNumber5];

      kWord = VERB_ALL_PAST_PARTICIPLE_K[valueNumber5] + " " + noun3animalK[valueNumber1] + " 한 마리가 있다";
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "There is an " + eWord + "장소" + ".";
      } else {
        eWord = "There is a " + eWord + "장소" + ".";
      }
      console.log("eWord = ", eWord);

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;


    case 3:
      let valueNumber3 = Math.floor(Math.random() * noun3animalE.length);

      kWord = noun3animalK[valueNumber3] + "들이 있다";
      eWord = noun3animalE[valueNumber3];

      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = "There are " + eWord + "es.";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = "There are " + eWord + "s.";
      } else if (eWord.endsWith('y')) {
        eWord = "There are " + eWord.slice(0, -1) + "ies.";
      } else if (eWord.endsWith('fe')) {
        eWord = "There are " + eWord.slice(0, -2) + "ves.";
      } else if (eWord.endsWith('f')) {
        eWord = "There are " + eWord.slice(0, -1) + "ves.";
      } else {
        eWord = "There are " + eWord + "s.";
      }

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 4:
      let valueNumber4 = Math.floor(Math.random() * noun3animalE.length);
      kWord = noun3animalK[valueNumber4] + "들이 있다";
      eWord = noun3animalE[valueNumber4];

      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = "There are " + eWord + "es.";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = "There are " + eWord + "s.";
      } else if (eWord.endsWith('y')) {
        eWord = "There are " + eWord.slice(0, -1) + "ies.";
      } else if (eWord.endsWith('fe')) {
        eWord = "There are " + eWord.slice(0, -2) + "ves.";
      } else if (eWord.endsWith('f')) {
        eWord = "There are " + eWord.slice(0, -1) + "ves.";
      } else {
        eWord = "There are " + eWord + "s.";
      }

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;

  }

}
//1302 PARTICIPLE_MODIFY_NOUN_K
function function1302() {
  let valueNumber2 = Math.floor(Math.random() * VERB_ALL_PAST_PARTICIPLE_K.length);
  let valueNumber3 = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber4 = Math.floor(Math.random() * noun1personK.length);
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  let kWord;
  let eWord;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      kWord = VERB_ALL_PRESENT_PARTICIPLE_K[valueNumber2] + " " + noun3animalK[valueNumber3] + " 한 마리 ";
      eWord = VERB_ALL_PRESENT_PARTICIPLE_E[valueNumber2];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      eWord = eWord + " " + noun3animalE[valueNumber3];
      break;
    case 2:
      kWord = VERB_ALL_PAST_PARTICIPLE_K[valueNumber2] + " " + noun3animalK[valueNumber3] + " 한 마리 ";
      eWord = VERB_ALL_PAST_PARTICIPLE_E[valueNumber2];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      eWord = eWord + " " + noun3animalE[valueNumber3];
      break;
    case 3:
      kWord = VERB_ALL_PRESENT_PARTICIPLE_K[valueNumber2] + " " + noun3animalK[valueNumber3] + "들 ";
      eWord = noun3animalE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s ";
      }
      eWord = VERB_ALL_PRESENT_PARTICIPLE_E[valueNumber2] + " " + eWord;
      break;
    case 4:
      kWord = VERB_ALL_PAST_PARTICIPLE_K[valueNumber2] + " " + noun3animalK[valueNumber3] + "들 ";
      eWord = noun3animalE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s ";
      }
      eWord = VERB_ALL_PAST_PARTICIPLE_E[valueNumber2] + " " + eWord;
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1303 PARTICIPLE_AS_COMPLEMENT_K
function function1303() {
  let valueNumber = Math.floor(Math.random() * PARTICIPLE_AS_COMPLEMENT_K.length);
  let kWord = PARTICIPLE_AS_COMPLEMENT_K[valueNumber];
  let eWord = PARTICIPLE_AS_COMPLEMENT_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1304 PARTICIPLE_EMOTION_K
function function1304() {
  let valueNumber = Math.floor(Math.random() * PARTICIPLE_EMOTION_K.length);
  let kWord = PARTICIPLE_EMOTION_K[valueNumber];
  let eWord = PARTICIPLE_EMOTION_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1305 PARTICIPIAL_CONSTRUCTION_K
function function1305() {
  let valueNumber = Math.floor(Math.random() * PARTICIPIAL_CONSTRUCTION_K.length);
  let kWord = PARTICIPIAL_CONSTRUCTION_K[valueNumber];
  let eWord = PARTICIPIAL_CONSTRUCTION_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1306 PARTICIPIAL_CONSTRUCTION_MEANING_K
function function1306() {
  let valueNumber = Math.floor(Math.random() * PARTICIPIAL_CONSTRUCTION_MEANING_K.length);
  let kWord = PARTICIPIAL_CONSTRUCTION_MEANING_K[valueNumber];
  let eWord = PARTICIPIAL_CONSTRUCTION_MEANING_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1306v2() {
  let valueNumber = Math.floor(Math.random() * PARTICIPIAL_CONSTRUCTION_MEANING_2K.length);
  let kWord = PARTICIPIAL_CONSTRUCTION_MEANING_2E[valueNumber];
  let eWord = PARTICIPIAL_CONSTRUCTION_MEANING_2K[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1306v3() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1306();
      break;
    case 2:
      function1306v2();
      break;
  }
}

VERB_ALL_PAST_PARTICIPLE_K
VERB_ALL_PAST_PARTICIPLE_E
VERB_ALL_PRESENT_PARTICIPLE_K
VERB_ALL_PRESENT_PARTICIPLE_E

//function1307 
function function1307() {
  let kWord;
  let eWord;
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  let valueNumber3 = Math.floor(Math.random() * GERUND_NEGATIVE_K.length);
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      let valueNumber = Math.floor(Math.random() * VERB_ALL_PRESENT_PARTICIPLE_K.length);
      kWord = VERB_ALL_PRESENT_PARTICIPLE_K[valueNumber];
      eWord = VERB_ALL_PRESENT_PARTICIPLE_E[valueNumber];
      break;
    case 2:
      let valueNumber2 = Math.floor(Math.random() * VERB_ALL_PAST_PARTICIPLE_K.length);
      kWord = VERB_ALL_PAST_PARTICIPLE_K[valueNumber2];
      eWord = VERB_ALL_PAST_PARTICIPLE_E[valueNumber2];
      break;
  }
  kWord = GERUND_NEGATIVE_K[valueNumber3] + kWord;
  eWord = GERUND_NEGATIVE_E[valueNumber3] + eWord;
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}


//1308 PARTICIPLE_IDIOMATIC_EXPRESSION_K
function function1308() {
  let valueNumber = Math.floor(Math.random() * PARTICIPLE_IDIOMATIC_EXPRESSION_K.length);
  let kWord = PARTICIPLE_IDIOMATIC_EXPRESSION_K[valueNumber];
  let eWord = PARTICIPLE_IDIOMATIC_EXPRESSION_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1309 PARTICIPLE_WITH_K
function function1309() {
  let valueNumber = Math.floor(Math.random() * PARTICIPLE_WITH_K.length);
  let kWord = PARTICIPLE_WITH_K[valueNumber];
  let eWord = PARTICIPLE_WITH_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1309v2 PARTICIPLE_WITH_2K
function function1309v2() {
  let valueNumber2 = Math.floor(Math.random() * VERB_ALL_PAST_PARTICIPLE_K.length);
  let valueNumber3 = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber4 = Math.floor(Math.random() * noun1personK.length);
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  let kWord;
  let eWord;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      kWord = noun1personK[valueNumber4] + " 한 명이 " + VERB_ALL_PRESENT_PARTICIPLE_K[valueNumber2] + " 채로";
      eWord = noun1personE[valueNumber4];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      eWord = "with " + eWord + " " + VERB_ALL_PRESENT_PARTICIPLE_E[valueNumber2];
      break;
    case 2:
      kWord = noun1personK[valueNumber4] + " 한 명이 " + VERB_ALL_PAST_PARTICIPLE_K[valueNumber2] + " 채로";
      eWord = noun1personE[valueNumber4];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      eWord = "with " + eWord + " " + VERB_ALL_PAST_PARTICIPLE_E[valueNumber2];
      break;
    case 3:
      kWord = noun1personK[valueNumber3] + "들이 " + VERB_ALL_PRESENT_PARTICIPLE_K[valueNumber2] + " 채로";
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s ";
      }
      eWord = "with " + eWord + " " + VERB_ALL_PRESENT_PARTICIPLE_E[valueNumber2];
      break;
    case 4:
      kWord = noun1personK[valueNumber3] + "들이 " + VERB_ALL_PAST_PARTICIPLE_K[valueNumber2] + " 채로";
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s ";
      }
      eWord = "with " + eWord + " " + VERB_ALL_PAST_PARTICIPLE_E[valueNumber2];

      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1310() {
  let chosenNumbers = Math.floor(Math.random() * 11) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1301c();
      break;
    case 2:
      function1302();
      break;
    case 3:
      function1302d();
      break;
    case 4:
      function1304();
      break;
    case 5:
      function1305();
      break;
    case 6:
      function1306();
      break;
    case 7:
      function1306v2();
      break;
    case 8:
      function1307();
      break;
    case 9:
      function1308();
      break;
    case 10:
      function1309();
      break;
    case 11:
      function1309v2();
      break;
  }
}

//function1401 ONE_SHOT_CONCEPT_K
function function1401() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_2K.length);
  let kWord = PASSIVE_2K[valueNumber];
  let eWord = PASSIVE_2E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1401a PASSIVE_K
function function1401a() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_K.length);
  let kWord = PASSIVE_K[valueNumber];
  let eWord = "be " + PASSIVE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//TODO animal이나 물건으로 다시 해야됨 function1403a 에서 가져옴
//function1401b PASSIVE_K
function function1401b() {
  let valueNumber1 = Math.floor(Math.random() * PASSIVE_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + PASSIVE_K[valueNumber1];
  let eWord = pronounBoxBeE[valueNumber2] + PASSIVE_E[valueNumber1];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1402 
function function1402() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_SENTENCE_K.length);
  let kWord = PASSIVE_SENTENCE_K[valueNumber];
  let eWord = PASSIVE_SENTENCE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1402a 
function function1402a() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
  let kWord = PRONOUN_DEMONSTRATIVE_K[valueNumber2] + "은 안 " + PASSIVE_K[valueNumber];
  let eWord = PRONOUN_DEMONSTRATIVE_Capital_Be_E[valueNumber2] + " not " + PASSIVE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1402b 
function function1402b() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
  let kWord = PRONOUN_DEMONSTRATIVE_K[valueNumber2] + "은 " + PASSIVE_K[valueNumber].slice(0, -1) + "니?";
  let eWord = PRONOUN_DEMONSTRATIVE_Capital_Be_Question_E[valueNumber2] + " " + PASSIVE_E[valueNumber] + "?";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1402c 조동사 function1403c을 참고하자!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function function1402c() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
  let kWord = PRONOUN_DEMONSTRATIVE_K[valueNumber2] + "은 " + PASSIVE_K[valueNumber];
  let eWord = PRONOUN_DEMONSTRATIVE_Capital_Be_E[valueNumber2] + " " + PASSIVE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1402d() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1402a();
      break;
    case 2:
      function1403a();
      break;
    case 3:
      function1402c();
      break;
    case 4:
      function1402b();
      break;
  }
}

//function1403 PASSIVE_TENSE_K
function function1403() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_TENSE_K.length);
  let kWord = PASSIVE_TENSE_K[valueNumber];
  let eWord = PASSIVE_TENSE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1403a PASSIVE_TENSE_K
function function1403a() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_E.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
  let kWord = PRONOUN_DEMONSTRATIVE_K[valueNumber2] + "은 " + PASSIVE_K[valueNumber];
  let eWord = PRONOUN_DEMONSTRATIVE_Capital_Be_E[valueNumber2] + " " + PASSIVE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1403b PASSIVE_TENSE_SIMPLE_PAST_K
function function1403b() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_TENSE_SIMPLE_PAST_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
  let kWord = PRONOUN_DEMONSTRATIVE_K[valueNumber2] + "은 " + PASSIVE_TENSE_SIMPLE_PAST_K[valueNumber];
  let eWord = PRONOUN_DEMONSTRATIVE_Capital_PAST_Be_E[valueNumber2] + " " + VERB_ALL_PAST_PARTICIPLE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1403c PASSIVE_TENSE_SIMPLE_FUTURE_K
function function1403c() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_TENSE_SIMPLE_FUTURE_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
  let kWord = PRONOUN_DEMONSTRATIVE_K[valueNumber2] + "은 " + PASSIVE_TENSE_SIMPLE_FUTURE_K[valueNumber];
  let eWord = PRONOUN_DEMONSTRATIVE_Capital_E[valueNumber2] + " will be " + VERB_ALL_PAST_PARTICIPLE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1403d PASSIVE_TENSE_SIMPLE_ALL
function function1403d() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1403a();
      break;
    case 2:
      function1403b();
      break;
    // case 3:
    //   function1403c();
    //   break;
  }
}

//function1403e PASSIVE_TENSE_PROGRESSIVE_PRESENT_K
function function1403e() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_TENSE_PROGRESSIVE_PRESENT_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
  let kWord = PRONOUN_DEMONSTRATIVE_K[valueNumber2] + "은 " + PASSIVE_TENSE_PROGRESSIVE_PRESENT_K[valueNumber];
  let eWord = PRONOUN_DEMONSTRATIVE_Capital_Be_E[valueNumber2] + " being " + VERB_ALL_PAST_PARTICIPLE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1403f PASSIVE_TENSE_PROGRESSIVE_PAST_K
function function1403f() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_TENSE_PROGRESSIVE_PAST_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
  let kWord = PRONOUN_DEMONSTRATIVE_K[valueNumber2] + "은 " + PASSIVE_TENSE_PROGRESSIVE_PAST_K[valueNumber];
  let eWord = PRONOUN_DEMONSTRATIVE_Capital_PAST_Be_E[valueNumber2] + " being " + VERB_ALL_PAST_PARTICIPLE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1403g PASSIVE_TENSE_PROGRESSIVE_ALL
function function1403g() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1403e();
      break;
    case 2:
      function1403f();
      break;
  }
}
//function1403h PASSIVE_TENSE_PERFECT_PRESENT_K
function function1403h() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_TENSE_PERFECT_PRESENT_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
  let kWord = PRONOUN_DEMONSTRATIVE_K[valueNumber2] + "은 " + PASSIVE_TENSE_PERFECT_PRESENT_K[valueNumber];
  let eWord = PRONOUN_DEMONSTRATIVE_Capital_HAVE_E[valueNumber2] + " been " + VERB_ALL_PAST_PARTICIPLE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1403i PASSIVE_TENSE_PERFECT_PAST_K
function function1403i() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_TENSE_PERFECT_PAST_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
  let kWord = PRONOUN_DEMONSTRATIVE_K[valueNumber2] + "은 " + PASSIVE_TENSE_PERFECT_PAST_K[valueNumber];
  let eWord = PRONOUN_DEMONSTRATIVE_Capital_E[valueNumber2] + " had been " + VERB_ALL_PAST_PARTICIPLE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1403j PASSIVE_TENSE_PERFECT_FUTURE_K
function function1403j() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_TENSE_PERFECT_FUTURE_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
  let kWord = PRONOUN_DEMONSTRATIVE_K[valueNumber2] + "은 " + PASSIVE_TENSE_PERFECT_FUTURE_K[valueNumber];
  let eWord = PRONOUN_DEMONSTRATIVE_Capital_E[valueNumber2] + " will have been " + VERB_ALL_PAST_PARTICIPLE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1403k PASSIVE_TENSE_PERFECT_ALL
function function1403k() {
  let chosenNumbers = Math.floor(Math.random() * 3) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1403h();
      break;
    case 2:
      function1403i();
      break;
    case 3:
      function1403j();
      break;
  }
}
//function1403l PASSIVE_TENSE_ALL
function function1403l() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1403d();
      break;
    case 2:
      function1403g();
      break;
    case 3:
      function1403k();
      break;
  }
}

//function1404 PASSIVE_NO_OBJECTIVE_K
function function1404() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_NO_OBJECTIVE_K.length);
  let kWord = PASSIVE_NO_OBJECTIVE_K[valueNumber];
  let eWord = PASSIVE_NO_OBJECTIVE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1405 PASSIVE_IDIOMATIC_PREP_K
function function1405() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_IDIOMATIC_PREP_K.length);
  let kWord = PASSIVE_IDIOMATIC_PREP_K[valueNumber];
  let eWord = PASSIVE_IDIOMATIC_PREP_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1406 PASSIVE_IDIOMATIC_PREP_2K
function function1406() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_IDIOMATIC_PREP_2K.length);
  let kWord = PASSIVE_IDIOMATIC_PREP_2K[valueNumber];
  let eWord = PASSIVE_IDIOMATIC_PREP_2E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1406v2() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1405();
      break;
    case 2:
      function1406();
      break;
  }
}
//function1407 PASSIVE_SENTENCE_PATTERN_K
function function1407() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_SENTENCE_PATTERN_K.length);
  let kWord = PASSIVE_SENTENCE_PATTERN_K[valueNumber];
  let eWord = PASSIVE_SENTENCE_PATTERN_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1408 PASSIVE_SENTENCE_PATTERN_4TH_K
function function1408() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_SENTENCE_PATTERN_4TH_K.length);
  let kWord = PASSIVE_SENTENCE_PATTERN_4TH_K[valueNumber];
  let eWord = PASSIVE_SENTENCE_PATTERN_4TH_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1409 PASSIVE_SENTENCE_PATTERN_5TH_K
function function1409() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_SENTENCE_PATTERN_5TH_K.length);
  let kWord = PASSIVE_SENTENCE_PATTERN_5TH_K[valueNumber];
  let eWord = PASSIVE_SENTENCE_PATTERN_5TH_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1410 VERB_NOT_PASSIVE_K
function function1410() {
  let valueNumber = Math.floor(Math.random() * VERB_NOT_PASSIVE_K.length);
  let kWord = VERB_NOT_PASSIVE_K[valueNumber];
  let eWord = VERB_NOT_PASSIVE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1411 PASSIVE_VERB_PHRASE_K
function function1411() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_VERB_PHRASE_K.length);
  let kWord = PASSIVE_VERB_PHRASE_K[valueNumber];
  let eWord = PASSIVE_VERB_PHRASE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1412 PASSIVE_THAT_CLAUSE_OBJECT_K
function function1412() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_THAT_CLAUSE_OBJECT_K.length);
  let kWord = PASSIVE_THAT_CLAUSE_OBJECT_K[valueNumber];
  let eWord = PASSIVE_THAT_CLAUSE_OBJECT_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1413() {
  let chosenNumbers = Math.floor(Math.random() * 9) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1403();
      break;
    case 2:
      function1403l();
      break;
    case 3:
      function1406v2();
      break;
    case 4:
      function1407();
      break;
    case 5:
      function1408();
      break;
    case 6:
      function1409();
      break;
    case 7:
      function1410();
      break;
    case 8:
      function1411();
      break;
    case 9:
      function1402d();
      break;
  }
}
//function1501 ONE_SHOT_CONCEPT_K
function function1501() {
  let kWord = ONE_SHOT_CONCEPT_K[14];
  let eWord = ONE_SHOT_CONCEPT_E[14] + " - " + ONE_SHOT_CONCEPT_2E[14];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1501a INFINITIVE_K
function function1501a() {
  let valueNumber = Math.floor(Math.random() * VERB_WITH_TO_K.length);
  let kWord = VERB_WITH_TO_K[valueNumber];
  let eWord = VERB_WITH_TO_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//1502 TO_INFINITIVE_VS_TO_PREPOSITION_K
function function1502() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  let kWord;
  let eWord;

  switch (chooseNumbers) {
    case 1:
      let chooseNumbers2 = Math.floor(Math.random() * 5) + 1;

      switch (chooseNumbers2) {
        case 1:
          makePluralWord = noun1personE[Math.floor(Math.random() * noun1personE.length)];
          if (makePluralWord.endsWith('s') || makePluralWord.endsWith('ss') || makePluralWord.endsWith('sh') || makePluralWord.endsWith('ch') || makePluralWord.endsWith('x') || makePluralWord.endsWith('o')) {
            makePluralWord = makePluralWord + "es";
          } else if (makePluralWord.endsWith('ay') || makePluralWord.endsWith('ey') || makePluralWord.endsWith('iy') || makePluralWord.endsWith('oy') || makePluralWord.endsWith('uy')) {
            makePluralWord = makePluralWord + "s";
          } else if (makePluralWord.endsWith('y')) {
            makePluralWord = makePluralWord.slice(0, -1) + "ies";
          } else if (makePluralWord.endsWith('fe')) {
            makePluralWord = makePluralWord.slice(0, -2) + "ves";
          } else if (makePluralWord.endsWith('f')) {
            makePluralWord = makePluralWord.slice(0, -1) + "ves";
          } else {
            makePluralWord = makePluralWord + "s";
          }

          kWord = "To " + makePluralWord;
          eWord = "To " + ONE_SHOT_CONCEPT_K[0] + " = To 전치사";
          break;
        case 2:
          makePluralWord = noun2objectE[Math.floor(Math.random() * noun2objectE.length)];
          if (makePluralWord.endsWith('s') || makePluralWord.endsWith('ss') || makePluralWord.endsWith('sh') || makePluralWord.endsWith('ch') || makePluralWord.endsWith('x') || makePluralWord.endsWith('o')) {
            makePluralWord = makePluralWord + "es";
          } else if (makePluralWord.endsWith('ay') || makePluralWord.endsWith('ey') || makePluralWord.endsWith('iy') || makePluralWord.endsWith('oy') || makePluralWord.endsWith('uy')) {
            makePluralWord = makePluralWord + "s";
          } else if (makePluralWord.endsWith('y')) {
            makePluralWord = makePluralWord.slice(0, -1) + "ies";
          } else if (makePluralWord.endsWith('fe')) {
            makePluralWord = makePluralWord.slice(0, -2) + "ves";
          } else if (makePluralWord.endsWith('f')) {
            makePluralWord = makePluralWord.slice(0, -1) + "ves";
          } else {
            makePluralWord = makePluralWord + "s";
          }

          kWord = "To " + makePluralWord;
          eWord = "To " + ONE_SHOT_CONCEPT_K[0] + " = To 전치사";
          break;
        case 3:
          makePluralWord = noun3animalE[Math.floor(Math.random() * noun3animalE.length)];
          if (makePluralWord.endsWith('s') || makePluralWord.endsWith('ss') || makePluralWord.endsWith('sh') || makePluralWord.endsWith('ch') || makePluralWord.endsWith('x') || makePluralWord.endsWith('o')) {
            makePluralWord = makePluralWord + "es";
          } else if (makePluralWord.endsWith('ay') || makePluralWord.endsWith('ey') || makePluralWord.endsWith('iy') || makePluralWord.endsWith('oy') || makePluralWord.endsWith('uy')) {
            makePluralWord = makePluralWord + "s";
          } else if (makePluralWord.endsWith('y')) {
            makePluralWord = makePluralWord.slice(0, -1) + "ies";
          } else if (makePluralWord.endsWith('fe')) {
            makePluralWord = makePluralWord.slice(0, -2) + "ves";
          } else if (makePluralWord.endsWith('f')) {
            makePluralWord = makePluralWord.slice(0, -1) + "ves";
          } else {
            makePluralWord = makePluralWord + "s";
          }

          kWord = "To " + makePluralWord;
          eWord = "To " + ONE_SHOT_CONCEPT_K[0] + " = To 전치사";
          break;
        case 4:
          makePluralWord = noun4placeE[Math.floor(Math.random() * noun4placeE.length)];
          if (makePluralWord.endsWith('s') || makePluralWord.endsWith('ss') || makePluralWord.endsWith('sh') || makePluralWord.endsWith('ch') || makePluralWord.endsWith('x') || makePluralWord.endsWith('o')) {
            makePluralWord = makePluralWord + "es";
          } else if (makePluralWord.endsWith('ay') || makePluralWord.endsWith('ey') || makePluralWord.endsWith('iy') || makePluralWord.endsWith('oy') || makePluralWord.endsWith('uy')) {
            makePluralWord = makePluralWord + "s";
          } else if (makePluralWord.endsWith('y')) {
            makePluralWord = makePluralWord.slice(0, -1) + "ies";
          } else if (makePluralWord.endsWith('fe')) {
            makePluralWord = makePluralWord.slice(0, -2) + "ves";
          } else if (makePluralWord.endsWith('f')) {
            makePluralWord = makePluralWord.slice(0, -1) + "ves";
          } else {
            makePluralWord = makePluralWord + "s";
          }

          kWord = "To " + makePluralWord;
          eWord = "To " + ONE_SHOT_CONCEPT_K[0] + " = To 전치사";
          break;
        case 5:
          makePluralWord = noun5conceptE[Math.floor(Math.random() * noun5conceptE.length)];
          if (makePluralWord.endsWith('s') || makePluralWord.endsWith('ss') || makePluralWord.endsWith('sh') || makePluralWord.endsWith('ch') || makePluralWord.endsWith('x') || makePluralWord.endsWith('o')) {
            makePluralWord = makePluralWord + "es";
          } else if (makePluralWord.endsWith('ay') || makePluralWord.endsWith('ey') || makePluralWord.endsWith('iy') || makePluralWord.endsWith('oy') || makePluralWord.endsWith('uy')) {
            makePluralWord = makePluralWord + "s";
          } else if (makePluralWord.endsWith('y')) {
            makePluralWord = makePluralWord.slice(0, -1) + "ies";
          } else if (makePluralWord.endsWith('fe')) {
            makePluralWord = makePluralWord.slice(0, -2) + "ves";
          } else if (makePluralWord.endsWith('f')) {
            makePluralWord = makePluralWord.slice(0, -1) + "ves";
          } else {
            makePluralWord = makePluralWord + "s";
          }

          kWord = "To " + makePluralWord;
          eWord = "To " + ONE_SHOT_CONCEPT_K[0] + " = To 전치사";
          break;
      }
      break;

    case 2:
      let valueNumber = Math.floor(Math.random() * VERB_GENERAL_POSITIVE_ALL.length);
      kWord = "To " + VERB_GENERAL_POSITIVE_ALL_E[valueNumber];
      eWord = "To " + ONE_SHOT_CONCEPT_K[1] + " = To 부정사";
      break;
  }

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//1503 TO_INFINITIVE_AS_NOUN_K
function function1503() {
  let valueNumber = Math.floor(Math.random() * TO_INFINITIVE_AS_NOUN_K.length);
  let kWord = TO_INFINITIVE_AS_NOUN_K[valueNumber];
  let eWord = TO_INFINITIVE_AS_NOUN_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1504 TO_INFINITIVE_AS_NOUN_IT_TO_K
function function1504() {
  let valueNumber = Math.floor(Math.random() * TO_INFINITIVE_AS_NOUN_K.length);
  let kWord = TO_INFINITIVE_AS_NOUN_K[valueNumber] + "은 재미있다";
  let eWord = TO_INFINITIVE_AS_NOUN_IT_TO_E[valueNumber] + " is fun. \n It is fun " + TO_INFINITIVE_AS_NOUN_E[valueNumber] + ".";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1505 TO_INFINITIVE_AS_NOUN_INTERROGATIVE_K
function function1505() {
  let valueNumber = Math.floor(Math.random() * TO_INFINITIVE_AS_NOUN_INTERROGATIVE_K.length);
  let kWord = TO_INFINITIVE_AS_NOUN_INTERROGATIVE_K[valueNumber];
  let eWord = TO_INFINITIVE_AS_NOUN_INTERROGATIVE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1505v2() {
  let valueNumber = Math.floor(Math.random() * TO_INFINITIVE_AS_NOUN_INTERROGATIVE_2K.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_SENTENCE_FORM_1_K.length);
  let kWord = TO_INFINITIVE_AS_NOUN_INTERROGATIVE_2K[valueNumber] + VERB_SENTENCE_FORM_1_K[valueNumber2] + "할지";
  let eWord = TO_INFINITIVE_AS_NOUN_INTERROGATIVE_2E[valueNumber] + " " + VERB_SENTENCE_FORM_1_E[valueNumber2];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1504 TO_INFINITIVE_AS_NOUN_IT_TO_K
function function1505a() {
  let valueNumber3 = Math.floor(Math.random() * TO_INFINITIVE_AS_NOUN_INTERROGATIVE_2K.length);
  let valueNumber1 = Math.floor(Math.random() * TO_INFINITIVE_AS_NOUN_K.length);
  let kWord = TO_INFINITIVE_AS_NOUN_INTERROGATIVE_2K[valueNumber3] + TO_INFINITIVE_AS_NOUN_INTERROGATIVE_3K[valueNumber1];
  let eWord = TO_INFINITIVE_AS_NOUN_INTERROGATIVE_2E[valueNumber3] + " " + TO_INFINITIVE_E[valueNumber1];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1506 TO_INFINITIVE_AS_ADJECTIVE_K
function function1506() {
  let valueNumber = Math.floor(Math.random() * TO_INFINITIVE_AS_ADJECTIVE_K.length);
  let kWord = TO_INFINITIVE_AS_ADJECTIVE_K[valueNumber];
  let eWord = TO_INFINITIVE_AS_NOUN_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1506 TO_INFINITIVE_AS_ADJECTIVE_K
function function1506a() {
  let valueNumber2 = Math.floor(Math.random() * noun3animalE.length);
  makePluralWord = noun3animalE[valueNumber2];
  if (makePluralWord.endsWith('s') || makePluralWord.endsWith('ss') || makePluralWord.endsWith('sh') || makePluralWord.endsWith('ch') || makePluralWord.endsWith('x') || makePluralWord.endsWith('o')) {
    makePluralWord = makePluralWord + "es";
  } else if (makePluralWord.endsWith('ay') || makePluralWord.endsWith('ey') || makePluralWord.endsWith('iy') || makePluralWord.endsWith('oy') || makePluralWord.endsWith('uy')) {
    makePluralWord = makePluralWord + "s";
  } else if (makePluralWord.endsWith('y')) {
    makePluralWord = makePluralWord.slice(0, -1) + "ies";
  } else if (makePluralWord.endsWith('fe')) {
    makePluralWord = makePluralWord.slice(0, -2) + "ves";
  } else if (makePluralWord.endsWith('f')) {
    makePluralWord = makePluralWord.slice(0, -1) + "ves";
  } else {
    makePluralWord = makePluralWord + "s";
  }
  let valueNumber = Math.floor(Math.random() * TO_INFINITIVE_AS_ADJECTIVE_K.length);
  let kWord = TO_INFINITIVE_AS_ADJECTIVE_K[valueNumber] + " " + noun3animalK[valueNumber2];
  let eWord = makePluralWord + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1506 TO_INFINITIVE_AS_ADJECTIVE_K
function function1506b() {
  let valueNumber2 = Math.floor(Math.random() * noun3animalE.length);
  makePluralWord = noun3animalE[valueNumber2];
  if (makePluralWord.endsWith('s') || makePluralWord.endsWith('ss') || makePluralWord.endsWith('sh') || makePluralWord.endsWith('ch') || makePluralWord.endsWith('x') || makePluralWord.endsWith('o')) {
    makePluralWord = makePluralWord + "es";
  } else if (makePluralWord.endsWith('ay') || makePluralWord.endsWith('ey') || makePluralWord.endsWith('iy') || makePluralWord.endsWith('oy') || makePluralWord.endsWith('uy')) {
    makePluralWord = makePluralWord + "s";
  } else if (makePluralWord.endsWith('y')) {
    makePluralWord = makePluralWord.slice(0, -1) + "ies";
  } else if (makePluralWord.endsWith('fe')) {
    makePluralWord = makePluralWord.slice(0, -2) + "ves";
  } else if (makePluralWord.endsWith('f')) {
    makePluralWord = makePluralWord.slice(0, -1) + "ves";
  } else {
    makePluralWord = makePluralWord + "s";
  }
  let valueNumber = Math.floor(Math.random() * TO_INFINITIVE_AS_ADJECTIVE_K.length);
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1: // there are 
      kWord = TO_INFINITIVE_AS_ADJECTIVE_K[valueNumber] + " " + noun3animalK[valueNumber2] + "들이 있다";
      eWord = "There are " + makePluralWord + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber];
      break;
    case 2: // I want
      kWord = "나는 " + TO_INFINITIVE_AS_ADJECTIVE_K[valueNumber] + " " + noun3animalK[valueNumber2] + "들을 원한다";
      eWord = "I want " + makePluralWord + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber];
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1507 TO_INFINITIVE_AS_ADVERB_K
function function1507() {
  let valueNumber = Math.floor(Math.random() * TO_INFINITIVE_AS_ADVERB_K.length);
  let kWord = TO_INFINITIVE_AS_ADVERB_K[valueNumber];
  let eWord = TO_INFINITIVE_AS_ADVERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1508 TO_INFINITIVE_AS_ADVERB_2K
function function1508a() {
  let valueNumber = Math.floor(Math.random() * adjective1personK.length);
  let valueNumber2 = Math.floor(Math.random() * TO_INFINITIVE_AS_ADVERB_2K.length);
  let kWord = TO_INFINITIVE_AS_ADVERB_2K[valueNumber2] + " " + adjective1personK[valueNumber];
  let eWord = adjective1personE[valueNumber] + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber2];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1508 TO_INFINITIVE_AS_ADVERB_2K
function function1508b() {
  let valueNumber = Math.floor(Math.random() * adjective1personK.length);
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;
  switch (chooseNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * THINGS_S_K.length);
      let valueNumber11 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      let valueNumber111 = Math.floor(Math.random() * TO_INFINITIVE_AS_ADVERB_2K.length);
      kWord = THINGS_S_K[valueNumber1] + " " + TO_INFINITIVE_AS_ADVERB_2K[valueNumber111] + " " + ADJECTIVE_POSITIVE_THINGS[valueNumber11];
      eWord = THINGS_S_Be_E[valueNumber1] + " " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber11] + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber111];
      break;
    case 2:
      let valueNumber2 = Math.floor(Math.random() * THINGS_NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      let valueNumber222 = Math.floor(Math.random() * TO_INFINITIVE_AS_ADVERB_2K.length);
      kWord = THINGS_NoS_K[valueNumber2] + " " + TO_INFINITIVE_AS_ADVERB_2K[valueNumber222] + " " + ADJECTIVE_POSITIVE_THINGS[valueNumber22];
      eWord = THINGS_NoS_Be_E[valueNumber2] + " " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber222];
      break;
    case 3:
      let valueNumber3 = Math.floor(Math.random() * PEOPLE_S_K.length);
      let valueNumber33 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      let valueNumber333 = Math.floor(Math.random() * TO_INFINITIVE_AS_ADVERB_2K.length);
      kWord = PEOPLE_S_K[valueNumber3] + " " + TO_INFINITIVE_AS_ADVERB_2K[valueNumber333] + " " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber33];
      eWord = PEOPLE_S_Be_E[valueNumber3] + " " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber33] + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber333];
      break;
    case 4:
      let valueNumber4 = Math.floor(Math.random() * PEOPLE_NoS_K.length);
      let valueNumber44 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      let valueNumber444 = Math.floor(Math.random() * TO_INFINITIVE_AS_ADVERB_2K.length);
      kWord = PEOPLE_NoS_K[valueNumber4] + " " + TO_INFINITIVE_AS_ADVERB_2K[valueNumber444] + " " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber44];
      eWord = PEOPLE_NoS_Be_E[valueNumber4] + " " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber44] + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber444];
      console.log(chooseNumbers, valueNumber4, valueNumber44)
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1511 INFINITIVE_IDIOMATIC_EXPRESSION_TOO_TO_K
function function1511() {
  let valueNumber = Math.floor(Math.random() * adjective1personK.length);
  let valueNumber2 = Math.floor(Math.random() * TO_INFINITIVE_AS_ADVERB_2K.length);
  let kWord = TO_INFINITIVE_AS_ADVERB_2K[valueNumber2] + " 너무 " + adjective1personK[valueNumber];
  let eWord = "too " + adjective1personE[valueNumber] + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber2];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1511b TO_INFINITIVE_AS_ADVERB_2K
function function1511b() {
  let valueNumber = Math.floor(Math.random() * adjective1personK.length);
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;
  switch (chooseNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * THINGS_S_K.length);
      let valueNumber11 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      let valueNumber111 = Math.floor(Math.random() * TO_INFINITIVE_AS_ADVERB_2K.length);
      kWord = THINGS_S_K[valueNumber1] + " " + TO_INFINITIVE_AS_ADVERB_2K[valueNumber111] + " 너무 " + ADJECTIVE_POSITIVE_THINGS[valueNumber11];
      eWord = THINGS_S_Be_E[valueNumber1] + " too " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber11] + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber111];
      break;
    case 2:
      let valueNumber2 = Math.floor(Math.random() * THINGS_NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      let valueNumber222 = Math.floor(Math.random() * TO_INFINITIVE_AS_ADVERB_2K.length);
      kWord = THINGS_NoS_K[valueNumber2] + " " + TO_INFINITIVE_AS_ADVERB_2K[valueNumber222] + " 너무 " + ADJECTIVE_POSITIVE_THINGS[valueNumber22];
      eWord = THINGS_NoS_Be_E[valueNumber2] + " too " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber222];
      break;
    case 3:
      let valueNumber3 = Math.floor(Math.random() * PEOPLE_S_K.length);
      let valueNumber33 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      let valueNumber333 = Math.floor(Math.random() * TO_INFINITIVE_AS_ADVERB_2K.length);
      kWord = PEOPLE_S_K[valueNumber3] + " " + TO_INFINITIVE_AS_ADVERB_2K[valueNumber333] + " 너무 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber33];
      eWord = PEOPLE_S_Be_E[valueNumber3] + " too " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber33] + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber333];
      break;
    case 4:
      let valueNumber4 = Math.floor(Math.random() * PEOPLE_NoS_K.length);
      let valueNumber44 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      let valueNumber444 = Math.floor(Math.random() * TO_INFINITIVE_AS_ADVERB_2K.length);
      kWord = PEOPLE_NoS_K[valueNumber4] + " " + TO_INFINITIVE_AS_ADVERB_2K[valueNumber444] + " 너무 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber44];
      eWord = PEOPLE_NoS_Be_E[valueNumber4] + " too " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber44] + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber444];
      console.log(chooseNumbers, valueNumber4, valueNumber44)
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

// TODO 대답에 무슨 적 용법인지 쓰기
//1509 INFINITIVE_USAGE_K 
function function1509() {
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1511b(); // 부사적 too to
      break;
    case 2:
      function1508b(); // 부사적 형용사 수식
      break;
    case 3:
      function1506b(); // 형용사 - 명사 수식
      break;
    case 2:
      function1504(); // 명사
      break;
  }
}

//1510 INFINITIVE_IDIOMATIC_EXPRESSION_K
function function1510() {
  let valueNumber = Math.floor(Math.random() * INFINITIVE_IDIOMATIC_EXPRESSION_K.length);
  let kWord = INFINITIVE_IDIOMATIC_EXPRESSION_K[valueNumber];
  let eWord = INFINITIVE_IDIOMATIC_EXPRESSION_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1512 INFINITIVE_IDIOMATIC_EXPRESSION_ENOUGH_TO_K
// 사람 표현이 안좋아서 빼둠
function function1512() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1; // 사람 표현이 안좋아서 빼둠
  console.log(chooseNumbers)
  let valueNumber = Math.floor(Math.random() * adjective1personK.length);
  let valueNumber1 = Math.floor(Math.random() * THINGS_S_K.length);
  let valueNumber11 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
  let valueNumber111 = Math.floor(Math.random() * TO_INFINITIVE_AS_ADVERB_2K.length);
  let valueNumber2 = Math.floor(Math.random() * THINGS_NoS_K.length);
  let valueNumber22 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
  let valueNumber222 = Math.floor(Math.random() * TO_INFINITIVE_AS_ADVERB_2K.length);
  switch (chooseNumbers) {
    case 1:
      kWord = THINGS_S_K[valueNumber1] + " " + TO_INFINITIVE_AS_ADVERB_2K[valueNumber111] + " 충분히 " + ADJECTIVE_POSITIVE_THINGS[valueNumber11];
      eWord = THINGS_S_Be_E[valueNumber1] + " " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber11] + " enough " + TO_INFINITIVE_AS_NOUN_E[valueNumber111];
      break;
    case 2:
      kWord = THINGS_NoS_K[valueNumber2] + " " + TO_INFINITIVE_AS_ADVERB_2K[valueNumber222] + " 충분히 " + ADJECTIVE_POSITIVE_THINGS[valueNumber22];
      eWord = THINGS_NoS_Be_E[valueNumber2] + " " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + " enough " + TO_INFINITIVE_AS_NOUN_E[valueNumber222];
      break;
    case 3:
      let valueNumber3 = Math.floor(Math.random() * PEOPLE_S_K.length);
      let valueNumber33 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      let valueNumber333 = Math.floor(Math.random() * TO_INFINITIVE_AS_ADVERB_2K.length);
      kWord = PEOPLE_S_K[valueNumber3] + " " + TO_INFINITIVE_AS_ADVERB_2K[valueNumber333] + " 충분히 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber33];
      eWord = PEOPLE_S_Be_E[valueNumber3] + " " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber33] + " enough " + TO_INFINITIVE_AS_NOUN_E[valueNumber333];
      break;
    case 4:
      let valueNumber4 = Math.floor(Math.random() * PEOPLE_NoS_K.length);
      let valueNumber44 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      let valueNumber444 = Math.floor(Math.random() * TO_INFINITIVE_AS_ADVERB_2K.length);
      kWord = PEOPLE_NoS_K[valueNumber4] + " " + TO_INFINITIVE_AS_ADVERB_2K[valueNumber444] + " 충분히 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber44];
      eWord = PEOPLE_NoS_Be_E[valueNumber4] + " " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber44] + " enough " + TO_INFINITIVE_AS_NOUN_E[valueNumber444];
      console.log(chooseNumbers, valueNumber4, valueNumber44)
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//1513 INFINITIVE_NEGATIVE_SENSE_SUBJECT_TENSE_K
function function1513() {
  let valueNumber = Math.floor(Math.random() * INFINITIVE_NEGATIVE_SENSE_SUBJECT_TENSE_K.length);
  let kWord = INFINITIVE_NEGATIVE_SENSE_SUBJECT_TENSE_K[valueNumber];
  let eWord = INFINITIVE_NEGATIVE_SENSE_SUBJECT_TENSE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1513v1 INFINITIVE_NEGATIVE_K 
function function1513a() {
  let valueNumber = Math.floor(Math.random() * TO_INFINITIVE_AS_NOUN_K.length);
  let kWord;
  let eWord = "not " + TO_INFINITIVE_AS_NOUN_E[valueNumber];
  let chooseNumbers = Math.floor(Math.random() * 3) + 1;
  switch (chooseNumbers) {
    case 1:
      kWord = "안 " + TO_INFINITIVE_AS_NOUN_K[valueNumber];
      break;
    case 2:
      kWord = "안 " + TO_INFINITIVE_AS_ADJECTIVE_K[valueNumber];
      break;
    case 3:
      kWord = "안 " + TO_INFINITIVE_AS_ADVERB_2K[valueNumber];
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1513v2 INFINITIVE_SENSE_SUBJECT_K 
function function1513b() {
  let valueNumber = Math.floor(Math.random() * TO_INFINITIVE_AS_NOUN_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);

  let kWord;
  let eWord;
  let chooseNumbers = Math.floor(Math.random() * 3) + 1;
  switch (chooseNumbers) {
    case 1:
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + TO_INFINITIVE_AS_NOUN_K[valueNumber];
      eWord = "for " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber2] + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber];
      break;
    case 2:
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + TO_INFINITIVE_AS_ADJECTIVE_K[valueNumber];
      eWord = "for " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber2] + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber];
      break;
    case 3:
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + TO_INFINITIVE_AS_ADVERB_2K[valueNumber];
      eWord = "for " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber2] + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber];
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1513bv2 INFINITIVE_SENSE_SUBJECT_K
function function1513bv2() {
  let valueNumber = Math.floor(Math.random() * TO_INFINITIVE_AS_NOUN_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let valueNumber3 = Math.floor(Math.random() * INFINITIVE_SENSE_SUBJECT_1_K.length);
  let valueNumber4 = Math.floor(Math.random() * INFINITIVE_SENSE_SUBJECT_2_K.length);
  let kWord;
  let eWord;
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  switch (chooseNumbers) {
    case 1:
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + TO_INFINITIVE_AS_NOUN_K[valueNumber] + "은 " + INFINITIVE_SENSE_SUBJECT_1_K[valueNumber3];
      eWord = "It is " + INFINITIVE_SENSE_SUBJECT_1_E[valueNumber3] + " for " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber2] + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber] + ".";
      break;
    case 2:
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + TO_INFINITIVE_AS_NOUN_K[valueNumber] + "은 " + INFINITIVE_SENSE_SUBJECT_2_K[valueNumber4];
      eWord = "It is " + INFINITIVE_SENSE_SUBJECT_2_E[valueNumber4] + " of " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber2] + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber] + ".";
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1513v3 INFINITIVE_TENSE_K
function function1513c() {
  let valueNumber = Math.floor(Math.random() * INFINITIVE_NEGATIVE_SENSE_SUBJECT_TENSE_K.length);
  let kWord = INFINITIVE_NEGATIVE_SENSE_SUBJECT_TENSE_K[valueNumber];
  let eWord = INFINITIVE_NEGATIVE_SENSE_SUBJECT_TENSE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1514 INFINITIVE_VERB_WITH_TO_K
function function1514() {
  let valueNumber = Math.floor(Math.random() * VERB_WITH_TO_K.length);
  let kWord = VERB_WITH_TO_K[valueNumber];
  let eWord = VERB_WITH_TO_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1514a INFINITIVE_VERB_WITH_TO_K
function function1514a() {
  let valueNumber4 = Math.floor(Math.random() * TO_INFINITIVE_AS_NOUN_K.length);
  let valueNumber1 = Math.floor(Math.random() * S_K.length);
  let valueNumber = Math.floor(Math.random() * VERB_WITH_TO_K.length);
  let valueNumber22 = Math.floor(Math.random() * NoS_K.length);
  // 은는 + ~하기를 + ~한다 //3단
  let kWord;
  let eWord;
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  switch (chooseNumbers) {
    case 1: // s파
      kWord = S_K[valueNumber1] + " " + TO_INFINITIVE_AS_NOUN_2K[valueNumber4] + "를 " + VERB_WITH_TO_K[valueNumber];
      eWord = S_E[valueNumber1] + " " + VERB_WITH_TO_3E[valueNumber] + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber4];
      break;
    case 2: // No s파
      kWord = NoS_K[valueNumber22] + " " + TO_INFINITIVE_AS_NOUN_2K[valueNumber4] + "를 " + VERB_WITH_TO_K[valueNumber];
      eWord = NoS_E[valueNumber22] + " " + VERB_WITH_TO_E[valueNumber] + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber4];
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}



//1515 INFINITIVE_COMPLEMENT_K
function function1515() {
  let valueNumber = Math.floor(Math.random() * INFINITIVE_VERB_WITH_TO_K.length);
  let kWord = INFINITIVE_VERB_WITH_TO_K[valueNumber];
  let eWord = INFINITIVE_VERB_WITH_TO_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1515a INFINITIVE_COMPLEMENT_K
// 은는 + 이가 + ~하기를 + ~한다 //3단
function function1515a() {
  let valueNumber4 = Math.floor(Math.random() * TO_INFINITIVE_AS_NOUN_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let valueNumber1 = Math.floor(Math.random() * S_K.length);
  let valueNumber = Math.floor(Math.random() * INFINITIVE_VERB_WITH_TO_K.length);
  let valueNumber22 = Math.floor(Math.random() * NoS_K.length);
  let kWord;
  let eWord;
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  switch (chooseNumbers) {
    case 1: // s파
      kWord = S_K[valueNumber1] + " " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + TO_INFINITIVE_AS_NOUN_2K[valueNumber4] + "를 " + INFINITIVE_VERB_WITH_TO_K[valueNumber];
      eWord = S_E[valueNumber1] + " " + INFINITIVE_VERB_WITH_TO_3E[valueNumber] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber2] + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber4];
      break;
    case 2: // No s파
      kWord = NoS_K[valueNumber22] + " " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + TO_INFINITIVE_AS_NOUN_2K[valueNumber4] + "를 " + INFINITIVE_VERB_WITH_TO_K[valueNumber];
      eWord = NoS_E[valueNumber22] + " " + INFINITIVE_VERB_WITH_TO_E[valueNumber] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber2] + " " + TO_INFINITIVE_AS_NOUN_E[valueNumber4];
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//1516 INFINITIVE_COMPLEMENT_K
function function1516() {
  let valueNumber = Math.floor(Math.random() * INFINITIVE_COMPLEMENT_K.length);
  let kWord = INFINITIVE_COMPLEMENT_K[valueNumber];
  let eWord = INFINITIVE_COMPLEMENT_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1516a INFINITIVE_COMPLEMENT_CAUSATIVE_K
// 은는 + 이가 + ~하기를 + ~한다 //3단
function function1516a() {
  let valueNumber4 = Math.floor(Math.random() * TO_INFINITIVE_AS_NOUN_3K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let valueNumber1 = Math.floor(Math.random() * S_K.length);
  let valueNumber = Math.floor(Math.random() * INFINITIVE_COMPLEMENT_CAUSATIVE_K.length);
  let valueNumber22 = Math.floor(Math.random() * NoS_K.length);
  let kWord;
  let eWord;
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  switch (chooseNumbers) {
    case 1: // s파
      kWord = S_K[valueNumber1] + " " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + TO_INFINITIVE_AS_NOUN_3K[valueNumber4] + " " + INFINITIVE_COMPLEMENT_CAUSATIVE_K[valueNumber];
      eWord = S_E[valueNumber1] + " " + INFINITIVE_COMPLEMENT_CAUSATIVE_3E[valueNumber] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber2] + " " + TO_INFINITIVE_E[valueNumber4];
      break;
    case 2: // No s파
      kWord = NoS_K[valueNumber22] + " " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + TO_INFINITIVE_AS_NOUN_3K[valueNumber4] + " " + INFINITIVE_COMPLEMENT_CAUSATIVE_K[valueNumber];
      eWord = NoS_E[valueNumber22] + " " + INFINITIVE_COMPLEMENT_CAUSATIVE_E[valueNumber] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber2] + " " + TO_INFINITIVE_E[valueNumber4];
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1516b INFINITIVE_COMPLEMENT_CAUSATIVE_2K
// 은는 + 이가 + ~하기를 + ~한다 //3단
function function1516b() {
  let valueNumber4 = Math.floor(Math.random() * TO_INFINITIVE_AS_NOUN_3K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let valueNumber1 = Math.floor(Math.random() * S_K.length);
  let valueNumber = Math.floor(Math.random() * INFINITIVE_COMPLEMENT_CAUSATIVE_2K.length);
  let valueNumber22 = Math.floor(Math.random() * NoS_K.length);
  let kWord;
  let eWord;
  //0 == help
  if (valueNumber == 0) {
    let chooseNumbers = Math.floor(Math.random() * 2) + 1;
    switch (chooseNumbers) {
      case 1: // s파
        kWord = S_K[valueNumber1] + " " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + TO_INFINITIVE_AS_NOUN_3K[valueNumber4] + " " + INFINITIVE_COMPLEMENT_CAUSATIVE_2K[valueNumber];
        eWord = S_E[valueNumber1] + " " + INFINITIVE_COMPLEMENT_CAUSATIVE_23E[valueNumber] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber2] + " to " + TO_INFINITIVE_E[valueNumber4] + "\n" + S_E[valueNumber1] + " " + INFINITIVE_COMPLEMENT_CAUSATIVE_23E[valueNumber] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber2] + " " + TO_INFINITIVE_E[valueNumber4];
        break;
      case 2: // No s파
        kWord = NoS_K[valueNumber22] + " " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + TO_INFINITIVE_AS_NOUN_3K[valueNumber4] + " " + INFINITIVE_COMPLEMENT_CAUSATIVE_2K[valueNumber];
        eWord = NoS_E[valueNumber22] + " " + INFINITIVE_COMPLEMENT_CAUSATIVE_23E[valueNumber] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber2] + " to " + TO_INFINITIVE_E[valueNumber4] + "\n" + NoS_E[valueNumber22] + " " + INFINITIVE_COMPLEMENT_CAUSATIVE_23E[valueNumber] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber2] + " " + TO_INFINITIVE_E[valueNumber4];
        break;
    }
  }
  else {
    let chooseNumbers = Math.floor(Math.random() * 2) + 1;
    switch (chooseNumbers) {
      case 1: // s파
        kWord = S_K[valueNumber1] + " " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + TO_INFINITIVE_AS_NOUN_3K[valueNumber4] + " " + INFINITIVE_COMPLEMENT_CAUSATIVE_2K[valueNumber];
        eWord = S_E[valueNumber1] + " " + INFINITIVE_COMPLEMENT_CAUSATIVE_23E[valueNumber] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber2] + " to " + TO_INFINITIVE_E[valueNumber4];
        break;
      case 2: // No s파
        kWord = NoS_K[valueNumber22] + " " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + TO_INFINITIVE_AS_NOUN_3K[valueNumber4] + " " + INFINITIVE_COMPLEMENT_CAUSATIVE_2K[valueNumber];
        eWord = NoS_E[valueNumber22] + " " + INFINITIVE_COMPLEMENT_CAUSATIVE_2E[valueNumber] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber2] + " to " + TO_INFINITIVE_E[valueNumber4];
        break;
    }
  }

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1516c INFINITIVE_COMPLEMENT_PERCEPTION_K
// 은는 + 이가 + ~하기를 + ~한다 //3단
function function1516c() {
  let valueNumber4 = Math.floor(Math.random() * TO_INFINITIVE_AS_NOUN_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let valueNumber1 = Math.floor(Math.random() * S_K.length);
  let valueNumber = Math.floor(Math.random() * INFINITIVE_COMPLEMENT_PERCEPTION_K.length);
  let valueNumber22 = Math.floor(Math.random() * NoS_K.length);
  let kWord;
  let eWord;
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  switch (chooseNumbers) {
    case 1: // s파
      kWord = S_K[valueNumber1] + " " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + TO_INFINITIVE_AS_NOUN_K[valueNumber4] + "을 " + INFINITIVE_COMPLEMENT_PERCEPTION_K[valueNumber];
      eWord = S_E[valueNumber1] + " " + INFINITIVE_COMPLEMENT_PERCEPTION_2E[valueNumber] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber2] + " " + TO_INFINITIVE_E[valueNumber4] + "\n" + S_E[valueNumber1] + " " + INFINITIVE_COMPLEMENT_PERCEPTION_2E[valueNumber] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber2] + " " + TO_INFINITIVE_E[valueNumber4];
      break;
    case 2: // No s파
      kWord = NoS_K[valueNumber22] + " " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + TO_INFINITIVE_AS_NOUN_K[valueNumber4] + "을 " + INFINITIVE_COMPLEMENT_PERCEPTION_K[valueNumber];
      eWord = NoS_E[valueNumber22] + " " + INFINITIVE_COMPLEMENT_PERCEPTION_E[valueNumber] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber2] + " " + TO_INFINITIVE_E[valueNumber4] + "\n" + NoS_E[valueNumber22] + " " + INFINITIVE_COMPLEMENT_PERCEPTION_E[valueNumber] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber2] + " " + TO_INFINITIVE_ING_E[valueNumber4];
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

function function1516d() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1516a();
      break;
    case 2:
      function1516b();
      break;
    case 3:
      function1516c();
      break;
    case 4:
      function1515a();
      break;
  }
}

//1517 INFINITIVE_BE_TO_K
function function1517() {
  let valueNumber = Math.floor(Math.random() * INFINITIVE_BE_TO_K.length);
  let kWord = INFINITIVE_BE_TO_K[valueNumber];
  let eWord = INFINITIVE_BE_TO_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1517 INFINITIVE_BE_TO_2K
function function1517v2() {
  let valueNumber = Math.floor(Math.random() * INFINITIVE_BE_TO_2K.length);
  let kWord = INFINITIVE_BE_TO_2K[valueNumber];
  let eWord = INFINITIVE_BE_TO_2E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//INFINITIVE_BE_TO_K
//"~할 예정이다"
function function1517a() {
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let valueNumber = Math.floor(Math.random() * TO_INFINITIVE_AS_ADJECTIVE_K.length);
  let kWord = pronounBoxK[valueNumber2] + TO_INFINITIVE_AS_ADJECTIVE_K[valueNumber] + " 예정이다";
  let eWord = pronounBoxBeE[valueNumber2] + TO_INFINITIVE_AS_NOUN_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//INFINITIVE_BE_TO_K
//"~해야 한다"
function function1517b() {
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let valueNumber = Math.floor(Math.random() * INFINITIVE_BE_TO_bK.length);
  let kWord = pronounBoxK[valueNumber2] + INFINITIVE_BE_TO_bK[valueNumber] + " 한다";
  let eWord = pronounBoxBeE[valueNumber2] + TO_INFINITIVE_AS_NOUN_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//INFINITIVE_BE_TO_K
//"~할 수 있다"
function function1517c() {
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let valueNumber = Math.floor(Math.random() * TO_INFINITIVE_AS_ADJECTIVE_K.length);
  let kWord = pronounBoxK[valueNumber2] + TO_INFINITIVE_AS_ADJECTIVE_K[valueNumber] + " 수 있다";
  let eWord = pronounBoxBeE[valueNumber2] + TO_INFINITIVE_AS_NOUN_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//INFINITIVE_BE_TO_K
//"~할 운명이다"
function function1517d() {
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let valueNumber = Math.floor(Math.random() * TO_INFINITIVE_AS_ADJECTIVE_K.length);
  let kWord = pronounBoxK[valueNumber2] + TO_INFINITIVE_AS_ADJECTIVE_K[valueNumber] + " 운명이다";
  let eWord = pronounBoxBeE[valueNumber2] + TO_INFINITIVE_AS_NOUN_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//INFINITIVE_BE_TO_K
//~하려 하다
function function1517e() {
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let valueNumber = Math.floor(Math.random() * INFINITIVE_BE_TO_eK.length);
  let kWord = pronounBoxK[valueNumber2] + INFINITIVE_BE_TO_eK[valueNumber] + " 한다";
  let eWord = pronounBoxBeE[valueNumber2] + TO_INFINITIVE_AS_NOUN_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//INFINITIVE_BE_TO_K
function function1517f() {
  let chosenNumbers = Math.floor(Math.random() * 5) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1517a();
      break;
    case 2:
      function1517b();
      break;
    case 3:
      function1517c();
      break;
    case 4:
      function1517d();
      break;
    case 5:
      function1517e();
      break;
  }
}

//function1518 INFINITIVE_INDEPENDENT_IDIOMATIC_EXPRESSION_K
function function1518() {
  let valueNumber = Math.floor(Math.random() * INFINITIVE_INDEPENDENT_IDIOMATIC_EXPRESSION_K.length);
  let kWord = INFINITIVE_INDEPENDENT_IDIOMATIC_EXPRESSION_K[valueNumber];
  let eWord = INFINITIVE_INDEPENDENT_IDIOMATIC_EXPRESSION_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

function function1519() {
  let chosenNumbers = Math.floor(Math.random() * 9) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1504();
      break;
    case 2:
      function1506b();
      break;
    case 3:
      function1508b();
      break;
    case 4:
      function1511b();
      break;
    case 5:
      function1512();
      break;
    case 6:
      function1514a();
      break;
    case 7:
      function1516d();
      break;
    case 8:
      function1517f();
      break;
  }
}
//function1601 ONE_SHOT_CONCEPT_K
function function1601() {
  let kWord = ONE_SHOT_CONCEPT_K[15];
  let eWord = ONE_SHOT_CONCEPT_E[15] + " - " + ONE_SHOT_CONCEPT_2E[15];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1601b COMPARATIVE 원급 vs 비교급
function function1601b() {
  let valueNumber = Math.floor(Math.random() * COMPARATIVE_COMPARATIVE_BASIC_K.length);
  let kWord = COMPARATIVE_COMPARATIVE_BASIC_K[valueNumber];
  let eWord = COMPARATIVE_COMPARATIVE_BASIC_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1601c 비교구문-원급 비교급 최상급-응용
function function1601c() {
  let chooseNumbers = Math.floor(Math.random() * 6) + 1;
  let kword;
  let eword;
  switch (chooseNumbers) {
    case 1:
      let valueNumber11 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS_K.length);
      kWord = "A 만큼 " + ADJECTIVE_POSITIVE_THINGS_K[valueNumber11];
      eWord = " as " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber11] + " as A";
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2:
      let valueNumber33 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE_K.length);
      kWord = "A 만큼 " + ADJECTIVE_POSITIVE_PEOPLE_K[valueNumber33];
      eWord = " as " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber33] + " as A";
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 3:
      let valueNumber51 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS_K.length);
      kWord = "A 보다 더 " + ADJECTIVE_POSITIVE_THINGS_K[valueNumber51];
      eWord = ADJECTIVE_COMPARATIVE_POSITIVE_THINGS_E[valueNumber51] + " than A";
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 4:
      let valueNumber73 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE_K.length);
      kWord = "A 보다 더 " + ADJECTIVE_POSITIVE_PEOPLE_K[valueNumber73];
      eWord = ADJECTIVE_COMPARATIVE_POSITIVE_PEOPLE_E[valueNumber73] + " than A";
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 5:
      let valueNumberA2 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS_K.length);
      kWord = "가장 " + ADJECTIVE_POSITIVE_THINGS_K[valueNumberA2];
      eWord = "the " + ADJECTIVE_SUPERATIVE_POSITIVE_THINGS_E[valueNumberA2];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 6:
      let valueNumberC4 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE_K.length);
      kWord = "가장 " + ADJECTIVE_POSITIVE_PEOPLE_K[valueNumberC4];
      eWord = "the " + ADJECTIVE_SUPERATIVE_POSITIVE_PEOPLE_E[valueNumberC4];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
//function1602 COMPARATIVE_ORIGINAL_K
function function1602() {
  let valueNumber = Math.floor(Math.random() * COMPARATIVE_ORIGINAL_K.length);
  let kWord = COMPARATIVE_ORIGINAL_K[valueNumber];
  let eWord = COMPARATIVE_ORIGINAL_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1602a COMPARATIVE_ORIGINAL_K 비교구문-원급-응용
function function1602a() {
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;
  let kword;
  let eword;
  switch (chooseNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * THINGS_S_K.length);
      let valueNumber11 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      let valueNumber111 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
      kWord = THINGS_S_K[valueNumber1] + " " + PRONOUN_DEMONSTRATIVE_K[valueNumber111] + "만큼 " + ADJECTIVE_POSITIVE_THINGS[valueNumber11];
      eWord = THINGS_S_Be_E[valueNumber1] + " as " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber11] + " as " + PRONOUN_DEMONSTRATIVE_E[valueNumber111];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2:
      let valueNumber2 = Math.floor(Math.random() * THINGS_NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      let valueNumber222 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
      kWord = THINGS_NoS_K[valueNumber2] + " " + PRONOUN_DEMONSTRATIVE_K[valueNumber222] + "만큼 " + ADJECTIVE_POSITIVE_THINGS[valueNumber22];
      eWord = THINGS_NoS_Be_E[valueNumber2] + " as " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + " as " + PRONOUN_DEMONSTRATIVE_E[valueNumber222];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 3:
      let valueNumber3 = Math.floor(Math.random() * PEOPLE_S_K.length);
      let valueNumber33 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      let valueNumber333 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_3K.length);
      kWord = PEOPLE_S_K[valueNumber3] + " " + PRONOUN_PERSONAL_SUBJECTIVE_3K[valueNumber333] + "만큼 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber33];
      eWord = PEOPLE_S_Be_E[valueNumber3] + " as " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber33] + " as " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber333];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 4:
      let valueNumber4 = Math.floor(Math.random() * PEOPLE_NoS_K.length);
      let valueNumber44 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      let valueNumber444 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_3K.length);
      kWord = PEOPLE_NoS_K[valueNumber4] + " " + PRONOUN_PERSONAL_SUBJECTIVE_3K[valueNumber444] + "만큼 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber44];
      eWord = PEOPLE_NoS_Be_E[valueNumber4] + " as " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber44] + " as " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber444];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}

//function1602b COMPARATIVE_ORIGINAL_K 비교구문-원급-부정문-응용
function function1602b() {
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;
  let kword;
  let eword;
  switch (chooseNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * THINGS_S_K.length);
      let valueNumber11 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      let valueNumber111 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
      kWord = THINGS_S_K[valueNumber1] + " " + PRONOUN_DEMONSTRATIVE_K[valueNumber111] + "만큼 안 " + ADJECTIVE_POSITIVE_THINGS[valueNumber11];
      eWord = THINGS_S_Be_E[valueNumber1] + " not as " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber11] + " as " + PRONOUN_DEMONSTRATIVE_E[valueNumber111];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2:
      let valueNumber2 = Math.floor(Math.random() * THINGS_NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      let valueNumber222 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
      kWord = THINGS_NoS_K[valueNumber2] + " " + PRONOUN_DEMONSTRATIVE_K[valueNumber222] + "만큼 안 " + ADJECTIVE_POSITIVE_THINGS[valueNumber22];
      eWord = THINGS_NoS_Be_E[valueNumber2] + " not as " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + " as " + PRONOUN_DEMONSTRATIVE_E[valueNumber222];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 3:
      let valueNumber3 = Math.floor(Math.random() * PEOPLE_S_K.length);
      let valueNumber33 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      let valueNumber333 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_3K.length);
      kWord = PEOPLE_S_K[valueNumber3] + " " + PRONOUN_PERSONAL_SUBJECTIVE_3K[valueNumber333] + "만큼 안 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber33];
      eWord = PEOPLE_S_Be_E[valueNumber3] + " not as " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber33] + " as " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber333];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 4:
      let valueNumber4 = Math.floor(Math.random() * PEOPLE_NoS_K.length);
      let valueNumber44 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      let valueNumber444 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_3K.length);
      kWord = PEOPLE_NoS_K[valueNumber4] + " " + PRONOUN_PERSONAL_SUBJECTIVE_3K[valueNumber444] + "만큼 안 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber44];
      eWord = PEOPLE_NoS_Be_E[valueNumber4] + " not as " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber44] + " as " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber444];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
//function1602c 배애원애
function function1602c() {
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;

  let kword;
  let eword;
  switch (chooseNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * THINGS_S_K.length);
      let valueNumber11 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      let valueNumber111 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
      let valueNumber1111 = Math.floor(Math.random() * ADJECTIVE_TIMES_1K.length);
      kWord = THINGS_S_K[valueNumber1] + " " + PRONOUN_DEMONSTRATIVE_K[valueNumber111] + "의 " + ADJECTIVE_TIMES_1K[valueNumber1111] + "만큼 " + ADJECTIVE_POSITIVE_THINGS[valueNumber11];
      eWord = THINGS_S_Be_E[valueNumber1] + " " + ADJECTIVE_TIMES_1e[valueNumber1111] + " as " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber11] + " as " + PRONOUN_DEMONSTRATIVE_E[valueNumber111];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2:
      let valueNumber2 = Math.floor(Math.random() * THINGS_NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      let valueNumber222 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
      let valueNumber2222 = Math.floor(Math.random() * ADJECTIVE_TIMES_1K.length);
      kWord = THINGS_NoS_K[valueNumber2] + " " + PRONOUN_DEMONSTRATIVE_K[valueNumber222] + "의 " + ADJECTIVE_TIMES_1K[valueNumber2222] + "만큼 " + ADJECTIVE_POSITIVE_THINGS[valueNumber22];
      eWord = THINGS_NoS_Be_E[valueNumber2] + " " + ADJECTIVE_TIMES_1e[valueNumber2222] + " as " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + " as " + PRONOUN_DEMONSTRATIVE_E[valueNumber222];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 3:
      let valueNumber3 = Math.floor(Math.random() * PEOPLE_S_K.length);
      let valueNumber33 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      let valueNumber333 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_3K.length);
      let valueNumber3333 = Math.floor(Math.random() * ADJECTIVE_TIMES_1K.length);
      kWord = PEOPLE_S_K[valueNumber3] + " " + PRONOUN_PERSONAL_SUBJECTIVE_3K[valueNumber333] + "의 " + ADJECTIVE_TIMES_1K[valueNumber3333] + "만큼 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber33];
      eWord = PEOPLE_S_Be_E[valueNumber3] + " " + ADJECTIVE_TIMES_1e[valueNumber3333] + " as " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber33] + " as " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber333];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 4:
      let valueNumber4 = Math.floor(Math.random() * PEOPLE_NoS_K.length);
      let valueNumber44 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      let valueNumber444 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_3K.length);
      let valueNumber4444 = Math.floor(Math.random() * ADJECTIVE_TIMES_1K.length);
      kWord = PEOPLE_NoS_K[valueNumber4] + " " + PRONOUN_PERSONAL_SUBJECTIVE_3K[valueNumber444] + "의 " + ADJECTIVE_TIMES_1K[valueNumber4444] + "만큼 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber44];
      eWord = PEOPLE_NoS_Be_E[valueNumber4] + " " + ADJECTIVE_TIMES_1e[valueNumber4444] + " as " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber44] + " as " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber444];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
function function1602d() {
  let chosenNumbers = Math.floor(Math.random() * 3) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1602a();
      break;
    case 2:
      function1602b();
      break;
    case 3:
      function1602c();
      break;
  }
}

//function1603 COMPARATIVE_COMPARATIVE_K
function function1603() {
  let valueNumber = Math.floor(Math.random() * COMPARATIVE_COMPARATIVE_K.length);
  let kWord = COMPARATIVE_COMPARATIVE_K[valueNumber];
  let eWord = COMPARATIVE_COMPARATIVE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1603a COMPARATIVE_COMPARATIVE_K 비교구문-비교급 응용
function function1603a() {
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;
  let kword;
  let eword;
  switch (chooseNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * THINGS_S_K.length);
      let valueNumber11 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      let valueNumber111 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
      kWord = THINGS_S_K[valueNumber1] + " " + "더 " + ADJECTIVE_POSITIVE_THINGS[valueNumber11];
      eWord = THINGS_S_Be_E[valueNumber1] + " " + ADJECTIVE_COMPARATIVE_POSITIVE_THINGS_E[valueNumber11];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2:
      let valueNumber2 = Math.floor(Math.random() * THINGS_NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      let valueNumber222 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
      kWord = THINGS_NoS_K[valueNumber2] + " " + "더 " + ADJECTIVE_POSITIVE_THINGS[valueNumber22];
      eWord = THINGS_NoS_Be_E[valueNumber2] + " " + ADJECTIVE_COMPARATIVE_POSITIVE_THINGS_E[valueNumber22];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 3:
      let valueNumber3 = Math.floor(Math.random() * PEOPLE_S_K.length);
      let valueNumber33 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      let valueNumber333 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_3K.length);
      kWord = PEOPLE_S_K[valueNumber3] + " " + "더 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber33];
      eWord = PEOPLE_S_Be_E[valueNumber3] + " " + ADJECTIVE_COMPARATIVE_POSITIVE_PEOPLE_E[valueNumber33];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 4:
      let valueNumber4 = Math.floor(Math.random() * PEOPLE_NoS_K.length);
      let valueNumber44 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      let valueNumber444 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_3K.length);
      kWord = PEOPLE_NoS_K[valueNumber4] + " " + "더 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber44];
      eWord = PEOPLE_NoS_Be_E[valueNumber4] + " " + ADJECTIVE_COMPARATIVE_POSITIVE_PEOPLE_E[valueNumber44];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
//function1603a COMPARATIVE_COMPARATIVE_K 비교구문-비교급 응용2
function function1603b() {
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;
  let kword;
  let eword;
  switch (chooseNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * THINGS_S_K.length);
      let valueNumber11 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      let valueNumber111 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
      kWord = THINGS_S_K[valueNumber1] + " " + PRONOUN_DEMONSTRATIVE_K[valueNumber111] + "보다 더 " + ADJECTIVE_POSITIVE_THINGS[valueNumber11];
      eWord = THINGS_S_Be_E[valueNumber1] + " " + ADJECTIVE_COMPARATIVE_POSITIVE_THINGS_E[valueNumber11] + " than " + PRONOUN_DEMONSTRATIVE_E[valueNumber111];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2:
      let valueNumber2 = Math.floor(Math.random() * THINGS_NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      let valueNumber222 = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
      kWord = THINGS_NoS_K[valueNumber2] + " " + PRONOUN_DEMONSTRATIVE_K[valueNumber222] + "보다 더 " + ADJECTIVE_POSITIVE_THINGS[valueNumber22];
      eWord = THINGS_NoS_Be_E[valueNumber2] + " " + ADJECTIVE_COMPARATIVE_POSITIVE_THINGS_E[valueNumber22] + " than " + PRONOUN_DEMONSTRATIVE_E[valueNumber222];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 3:
      let valueNumber3 = Math.floor(Math.random() * PEOPLE_S_K.length);
      let valueNumber33 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      let valueNumber333 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_3K.length);
      kWord = PEOPLE_S_K[valueNumber3] + " " + PRONOUN_PERSONAL_SUBJECTIVE_3K[valueNumber333] + "보다 더 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber33];
      eWord = PEOPLE_S_Be_E[valueNumber3] + " " + ADJECTIVE_COMPARATIVE_POSITIVE_PEOPLE_E[valueNumber33] + " than " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber333];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 4:
      let valueNumber4 = Math.floor(Math.random() * PEOPLE_NoS_K.length);
      let valueNumber44 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      let valueNumber444 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_3K.length);
      kWord = PEOPLE_NoS_K[valueNumber4] + " " + PRONOUN_PERSONAL_SUBJECTIVE_3K[valueNumber444] + "보다 더 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber44];
      eWord = PEOPLE_NoS_Be_E[valueNumber4] + " " + ADJECTIVE_COMPARATIVE_POSITIVE_PEOPLE_E[valueNumber44] + " than " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber444];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
//function1604 COMPARATIVE_SUPERATIVE_K
function function1604() {
  let valueNumber = Math.floor(Math.random() * COMPARATIVE_SUPERATIVE_K.length);
  let kWord = COMPARATIVE_SUPERATIVE_K[valueNumber];
  let eWord = COMPARATIVE_SUPERATIVE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1604a COMPARATIVE_COMPARATIVE_K 비교구문-최상급 응용
function function1604a() {
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;
  let kword;
  let eword;
  switch (chooseNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * THINGS_S_K.length);
      let valueNumber11 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      let valueNumber111 = Math.floor(Math.random() * noun4placeK.length);
      kWord = THINGS_S_K[valueNumber1] + " " + "가장 " + ADJECTIVE_POSITIVE_THINGS[valueNumber11];
      eWord = THINGS_S_Be_E[valueNumber1] + " the " + ADJECTIVE_SUPERATIVE_POSITIVE_THINGS_E[valueNumber11];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2:
      let valueNumber2 = Math.floor(Math.random() * THINGS_NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      let valueNumber222 = Math.floor(Math.random() * noun4placeK.length);
      kWord = THINGS_NoS_K[valueNumber2] + " " + "가장 " + ADJECTIVE_POSITIVE_THINGS[valueNumber22];
      eWord = THINGS_NoS_Be_E[valueNumber2] + " the " + ADJECTIVE_SUPERATIVE_POSITIVE_THINGS_E[valueNumber22];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 3:
      let valueNumber3 = Math.floor(Math.random() * PEOPLE_S_K.length);
      let valueNumber33 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      let valueNumber333 = Math.floor(Math.random() * noun4placeK.length);
      kWord = PEOPLE_S_K[valueNumber3] + " " + "가장 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber33];
      eWord = PEOPLE_S_Be_E[valueNumber3] + " the " + ADJECTIVE_SUPERATIVE_POSITIVE_PEOPLE_E[valueNumber33];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 4:
      let valueNumber4 = Math.floor(Math.random() * PEOPLE_NoS_K.length);
      let valueNumber44 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      let valueNumber444 = Math.floor(Math.random() * noun4placeK.length);
      kWord = PEOPLE_NoS_K[valueNumber4] + " " + "가장 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber44];
      eWord = PEOPLE_NoS_Be_E[valueNumber4] + " the " + ADJECTIVE_SUPERATIVE_POSITIVE_PEOPLE_E[valueNumber44];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
//function1603b COMPARATIVE_COMPARATIVE_K 비교구문-최상급 응용2 //TODO 장소 noun4placeK 앞에 a/an 붙여야됨
function function1604b() {
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;
  let kword;
  let eword;
  switch (chooseNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * THINGS_S_K.length);
      let valueNumber11 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      let valueNumber111 = Math.floor(Math.random() * noun4placeK.length);
      kWord = THINGS_S_K[valueNumber1] + " " + noun4placeK[valueNumber111] + "중 가장 " + ADJECTIVE_POSITIVE_THINGS[valueNumber11];
      eWord = THINGS_S_Be_E[valueNumber1] + " " + ADJECTIVE_SUPERATIVE_POSITIVE_THINGS_E[valueNumber11] + " of/in " + noun4placeE[valueNumber111];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2:
      let valueNumber2 = Math.floor(Math.random() * THINGS_NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      let valueNumber222 = Math.floor(Math.random() * noun4placeK.length);
      kWord = THINGS_NoS_K[valueNumber2] + " " + noun4placeK[valueNumber222] + "중 가장 " + ADJECTIVE_POSITIVE_THINGS[valueNumber22];
      eWord = THINGS_NoS_Be_E[valueNumber2] + " " + ADJECTIVE_SUPERATIVE_POSITIVE_THINGS_E[valueNumber22] + " of/in " + noun4placeE[valueNumber222];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 3:
      let valueNumber3 = Math.floor(Math.random() * PEOPLE_S_K.length);
      let valueNumber33 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      let valueNumber333 = Math.floor(Math.random() * noun4placeK.length);
      kWord = PEOPLE_S_K[valueNumber3] + " " + noun4placeK[valueNumber333] + "중 가장 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber33];
      eWord = PEOPLE_S_Be_E[valueNumber3] + " " + ADJECTIVE_SUPERATIVE_POSITIVE_PEOPLE_E[valueNumber33] + " of/in " + noun4placeE[valueNumber333];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 4:
      let valueNumber4 = Math.floor(Math.random() * PEOPLE_NoS_K.length);
      let valueNumber44 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      let valueNumber444 = Math.floor(Math.random() * noun4placeK.length);
      kWord = PEOPLE_NoS_K[valueNumber4] + " " + noun4placeK[valueNumber444] + "중 가장 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber44];
      eWord = PEOPLE_NoS_Be_E[valueNumber4] + " " + ADJECTIVE_SUPERATIVE_POSITIVE_PEOPLE_E[valueNumber44] + " of/in " + noun4placeE[valueNumber444];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
//function1604c 비교구문-원급vs비교급vs최상급-개념
function function1604c() {
  let chosenNumbers = Math.floor(Math.random() * 3) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1602();
      break;
    case 2:
      function1603();
      break;
    case 3:
      function1604();
      break;
  }
}

//1605 COMPARATIVE_COMPARATIVE_RULE_K
function function1605() {
  let valueNumber = Math.floor(Math.random() * COMPARATIVE_COMPARATIVE_RULE_K.length);
  let kWord = COMPARATIVE_COMPARATIVE_RULE_K[valueNumber];
  let eWord = COMPARATIVE_COMPARATIVE_RULE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1606 COMPARATIVE_COMPARATIVE_IRREGULAR_K 1~3
function function1606() {
  let valueNumber = Math.floor(Math.random() * COMPARATIVE_COMPARATIVE_IRREGULAR_K.length);
  let kWord = COMPARATIVE_COMPARATIVE_IRREGULAR_K[valueNumber];
  let eWord = COMPARATIVE_COMPARATIVE_IRREGULAR_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1606v2() {
  let valueNumber = Math.floor(Math.random() * COMPARATIVE_COMPARATIVE_IRREGULAR_2K.length);
  let kWord = COMPARATIVE_COMPARATIVE_IRREGULAR_2K[valueNumber];
  let eWord = COMPARATIVE_COMPARATIVE_IRREGULAR_2E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1606v3() {
  let valueNumber = Math.floor(Math.random() * COMPARATIVE_COMPARATIVE_IRREGULAR_3K.length);
  let kWord = COMPARATIVE_COMPARATIVE_IRREGULAR_3K[valueNumber];
  let eWord = COMPARATIVE_COMPARATIVE_IRREGULAR_3E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1606v4() {
  let valueNumber = Math.floor(Math.random() * COMPARATIVE_COMPARATIVE_IRREGULAR_4K.length);
  let kWord = COMPARATIVE_COMPARATIVE_IRREGULAR_4K[valueNumber];
  let eWord = COMPARATIVE_COMPARATIVE_IRREGULAR_4E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1606v5() {
  let chosenNumbers = Math.floor(Math.random() * 3) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1602a();
      break;
    case 2:
      function1603b();
      break;
    case 3:
      function1604a();
      break;
  }
}
function function1607() {
  let valueNumber = Math.floor(Math.random() * COMPARATIVE_IDIOMATIC_EXPRESSION_K.length);
  let kWord = COMPARATIVE_IDIOMATIC_EXPRESSION_K[valueNumber];
  let eWord = COMPARATIVE_IDIOMATIC_EXPRESSION_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1608() {
  let valueNumber = Math.floor(Math.random() * COMPARATIVE_VARIOUS_EXPRESSION_K.length);
  let kWord = COMPARATIVE_VARIOUS_EXPRESSION_K[valueNumber];
  let eWord = COMPARATIVE_VARIOUS_EXPRESSION_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1609() {
  let valueNumber = Math.floor(Math.random() * COMPARATIVE_COMPARATIVE_TO_NOT_THAN_K.length);
  let kWord = COMPARATIVE_COMPARATIVE_TO_NOT_THAN_K[valueNumber];
  let eWord = COMPARATIVE_COMPARATIVE_TO_NOT_THAN_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1609a  응용
function function1609a() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  let kword;
  let eword;
  switch (chooseNumbers) {
    case 1:
      let valueNumber3 = Math.floor(Math.random() * PEOPLE_S_K.length);
      let valueNumber33 = Math.floor(Math.random() * COMPARATIVE_COMPARATIVE_TO_NOT_THAN_2K.length);
      let valueNumber333 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_3K.length);
      kWord = PEOPLE_S_K[valueNumber3] + " " + PRONOUN_PERSONAL_SUBJECTIVE_3K[valueNumber333] + "" + COMPARATIVE_COMPARATIVE_TO_NOT_THAN_2K[valueNumber33];
      eWord = PEOPLE_S_Be_E[valueNumber3] + " " + COMPARATIVE_COMPARATIVE_TO_NOT_THAN_E[valueNumber33] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber333];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2:
      let valueNumber4 = Math.floor(Math.random() * PEOPLE_NoS_K.length);
      let valueNumber44 = Math.floor(Math.random() * COMPARATIVE_COMPARATIVE_TO_NOT_THAN_2K.length);
      let valueNumber444 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_3K.length);
      kWord = PEOPLE_NoS_K[valueNumber4] + " " + PRONOUN_PERSONAL_SUBJECTIVE_3K[valueNumber444] + "" + COMPARATIVE_COMPARATIVE_TO_NOT_THAN_2K[valueNumber44];
      eWord = PEOPLE_NoS_Be_E[valueNumber4] + " " + COMPARATIVE_COMPARATIVE_TO_NOT_THAN_E[valueNumber44] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber444];
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
function function1610() {
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1602a();
      break;
    case 2:
      function1603b();
      break;
    case 3:
      function1604a();
      break;
    case 4:
      function1609a();
      break;
  }
}
//function1701 ONE_SHOT_CONCEPT_K RELATIVES
function function1701() {
  let kWord = ONE_SHOT_CONCEPT_K[16];
  let eWord = ONE_SHOT_CONCEPT_E[16] + " - " + ONE_SHOT_CONCEPT_2E[16];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1702 RELATIVE_PRONOUN_USAGE_K
function function1702() {
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chosenNumbers);
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_BASIC100_ADJECTIVE_K.length);
  let kWord;
  let eWord;
  switch (chosenNumbers) {
    case 1:
      kWord = VERB_BASIC100_ADJECTIVE_K[valueNumber2] + " " + "하나의 " + noun3animalK[valueNumber];
      eWord = " which "
      break;
    case 2:
      kWord = VERB_BASIC100_ADJECTIVE_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들";
      eWord = " which ";
      break;
    case 3:
      kWord = VERB_BASIC100_ADJECTIVE_K[valueNumber2] + " " + "하나의 " + noun1personK[valueNumber3];
      eWord = " who ";
      break;
    case 4:
      kWord = VERB_BASIC100_ADJECTIVE_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들";
      eWord = " who ";
      break;
  }

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}




//function1702a RELATIVE_PRONOUN_USAGE_K
function function1702a() {
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chosenNumbers);
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_BASIC100_ADJECTIVE_K.length);
  let kWord;
  let eWord;
  switch (chosenNumbers) {
    case 1:
      kWord = VERB_BASIC100_ADJECTIVE_K[valueNumber2] + " " + "하나의 " + noun3animalK[valueNumber];
      eWord = noun3animalE[valueNumber] + " which " + VERB_BASIC100_3E[valueNumber2];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 2:
      kWord = VERB_BASIC100_ADJECTIVE_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들";
      eWord = noun3animalE[valueNumber];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      eWord = eWord + " which " + VERB_BASIC100_E[valueNumber2];
      break;
    case 3:
      kWord = VERB_BASIC100_ADJECTIVE_K[valueNumber2] + " " + "하나의 " + noun1personK[valueNumber3];
      eWord = noun1personE[valueNumber3] + " who " + VERB_BASIC100_3E[valueNumber2];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 4:
      kWord = VERB_BASIC100_ADJECTIVE_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들";
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      eWord = eWord + " who " + VERB_BASIC100_E[valueNumber2];
      break;
  }

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1702b SENTENCE_THERE_BE_K
function function1702b() {
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chosenNumbers);
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_BASIC100_ADJECTIVE_K.length);
  let kWord;
  let eWord;
  switch (chosenNumbers) {
    case 1:
      kWord = VERB_BASIC100_ADJECTIVE_K[valueNumber2] + " " + noun3animalK[valueNumber] + " 한 마리가 있다";
      eWord = noun3animalE[valueNumber] + " which " + VERB_BASIC100_3E[valueNumber2];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "There is an " + eWord;
      } else {
        eWord = "There is a " + eWord;
      }
      break;
    case 2:
      kWord = VERB_BASIC100_ADJECTIVE_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들이 있다";
      eWord = noun3animalE[valueNumber];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      eWord = "There are " + eWord + " which " + VERB_BASIC100_E[valueNumber2];
      break;
    case 3:
      kWord = VERB_BASIC100_ADJECTIVE_K[valueNumber2] + " " + noun1personK[valueNumber3] + " 한 사람이 있다";
      eWord = noun1personE[valueNumber3] + " who " + VERB_BASIC100_3E[valueNumber2];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "There is an " + eWord;
      } else {
        eWord = "There is a " + eWord;
      }
      break;
    case 4:
      kWord = VERB_BASIC100_ADJECTIVE_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들이 있다";
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      eWord = "There are " + eWord + " who " + VERB_BASIC100_E[valueNumber2];
      break;
  }

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1702b SENTENCE_THERE_BE_K
function function1702b() {
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chosenNumbers);
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_BASIC100_ADJECTIVE_K.length);
  let kWord;
  let eWord;
  switch (chosenNumbers) {
    case 1:
      kWord = VERB_BASIC100_ADJECTIVE_K[valueNumber2] + " " + noun3animalK[valueNumber] + " 한 마리가 있다";
      eWord = noun3animalE[valueNumber] + " which " + VERB_BASIC100_3E[valueNumber2];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "There is an " + eWord;
      } else {
        eWord = "There is a " + eWord;
      }
      break;
    case 2:
      kWord = VERB_BASIC100_ADJECTIVE_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들이 있다";
      eWord = noun3animalE[valueNumber];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      eWord = "There are " + eWord + " which " + VERB_BASIC100_E[valueNumber2];
      break;
    case 3:
      kWord = VERB_BASIC100_ADJECTIVE_K[valueNumber2] + " " + noun1personK[valueNumber3] + " 한 사람이 있다";
      eWord = noun1personE[valueNumber3] + " who " + VERB_BASIC100_3E[valueNumber2];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "There is an " + eWord;
      } else {
        eWord = "There is a " + eWord;
      }
      break;
    case 4:
      kWord = VERB_BASIC100_ADJECTIVE_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들이 있다";
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      eWord = "There are " + eWord + " who " + VERB_BASIC100_E[valueNumber2];
      break;
  }

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1703a 관계사-관계대명사-주격1
function function1703a() {
  let chooseNumbers1 = Math.floor(Math.random() * 4) + 1;
  console.log(chooseNumbers1)
  let chooseNumbers2 = chooseNumbers1;
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K.length);
  let kWord;
  let eWord;
  switch (chooseNumbers1) {
    case 1:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun1personK[valueNumber3];
      eWord = noun1personE[valueNumber3];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 2:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들";
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      break;
    case 3:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun3animalK[valueNumber];
      eWord = noun3animalE[valueNumber];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 4:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들";
      eWord = noun3animalE[valueNumber];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      break;
  }
  let valueNumberA = Math.floor(Math.random() * S_K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);
  let valueNumberB = Math.floor(Math.random() * NoS_K.length);
  let valueNumberBB = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);

  switch (chooseNumbers2) {
    case 1: // s파 - 사람
      kWord = S_K[valueNumberA] + " " + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + "한 명을 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = S_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + eWord + " who " + VERB_COMPLETE_INTRANSITIVE_VERB_3E[valueNumber2];
      break;
    case 2: // No s파 - 사람
      kWord = NoS_K[valueNumberB] + " " + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들을 " + VERB_SENTENCE_FORM_3_3K[valueNumberBB];
      eWord = NoS_E[valueNumberB] + " " + VERB_SENTENCE_FORM_3_E[valueNumberBB] + " " + eWord + " who " + VERB_COMPLETE_INTRANSITIVE_VERB_E[valueNumber2];
      break;
    case 3: // s파 - 동물
      kWord = S_K[valueNumberA] + " " + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + "한 마리를 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = S_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + eWord + " which " + VERB_COMPLETE_INTRANSITIVE_VERB_3E[valueNumber2];
      break;
    case 4: // No s파- 동물
      kWord = NoS_K[valueNumberB] + " " + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들을 " + VERB_SENTENCE_FORM_3_3K[valueNumberBB];
      eWord = NoS_E[valueNumberB] + " " + VERB_SENTENCE_FORM_3_E[valueNumberBB] + " " + eWord + " which " + VERB_COMPLETE_INTRANSITIVE_VERB_E[valueNumber2];
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1703a 관계사-관계대명사-주격1
function function1703aa() {
  let chooseNumbers1 = Math.floor(Math.random() * 4) + 1;
  let chooseNumbers2 = chooseNumbers1;
  console.log(chooseNumbers1, chooseNumbers2); // 여러 개를 동시에 로그
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K.length);
  let valueNumberA = Math.floor(Math.random() * S_K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);
  let valueNumberB = Math.floor(Math.random() * NoS_K.length);
  let valueNumberBB = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);

  let kWord;
  let eWord;
  switch (chooseNumbers1) {
    case 1:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun1personK[valueNumber3];
      eWord = noun1personE[valueNumber3];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 2:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들";
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      break;
    case 3:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun3animalK[valueNumber];
      eWord = noun3animalE[valueNumber];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 4:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들";
      eWord = noun3animalE[valueNumber];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      break;
  }

  switch (chooseNumbers2) {
    case 1: // s파 - 사람
      kWord = S_K[valueNumberA] + " (" + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + ") " + noun1personK[valueNumber3] + " 한 명을 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = S_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + eWord + " ( who " + VERB_COMPLETE_INTRANSITIVE_VERB_3E[valueNumber2] + " )";
      break;
    case 2: // No s파 - 사람
      kWord = NoS_K[valueNumberB] + " (" + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + ") " + noun1personK[valueNumber3] + "들을 " + VERB_SENTENCE_FORM_3_3K[valueNumberBB];
      eWord = NoS_E[valueNumberB] + " " + VERB_SENTENCE_FORM_3_E[valueNumberBB] + " " + eWord + " ( who " + VERB_COMPLETE_INTRANSITIVE_VERB_E[valueNumber2] + " )";
      break;
    case 3: // s파 - 동물
      kWord = S_K[valueNumberA] + " (" + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + ") " + noun3animalK[valueNumber] + " 한 마리를 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = S_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + eWord + " ( which " + VERB_COMPLETE_INTRANSITIVE_VERB_3E[valueNumber2] + " )";
      break;
    case 4: // No s파- 동물
      kWord = NoS_K[valueNumberB] + " (" + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + ") " + noun3animalK[valueNumber] + "들을 " + VERB_SENTENCE_FORM_3_3K[valueNumberBB];
      eWord = NoS_E[valueNumberB] + " " + VERB_SENTENCE_FORM_3_E[valueNumberBB] + " " + eWord + " ( which " + VERB_COMPLETE_INTRANSITIVE_VERB_E[valueNumber2] + " )";
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}


//function1703bb 관계사-관계대명사-주격2
function function1703bb() {
  let chooseNumbers1 = Math.floor(Math.random() * 4) + 1;
  let chooseNumbers2 = chooseNumbers1;
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K.length);
  let valueNumberA = Math.floor(Math.random() * PRONOUN_PERSONAL_OBJECTIVE_3K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);
  let valueNumberB = Math.floor(Math.random() * NoS_K.length);
  let valueNumberBB = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);

  let kWord;
  let eWord;
  switch (chooseNumbers1) {
    case 1:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun1personK[valueNumber3];
      eWord = noun1personE[valueNumber3];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "An " + eWord;
      } else {
        eWord = "A " + eWord;
      }
      break;
    case 2:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들";
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      // 첫 문자 대문자 만들기
      let str = eWord;
      let firstChar = str.charAt(0);
      let others = str.slice(1);
      let newStr = firstChar.toUpperCase() + others;
      eWord = newStr;
      break;
    case 3:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun3animalK[valueNumber];
      eWord = noun3animalE[valueNumber];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "An " + eWord;
      } else {
        eWord = "A " + eWord;
      }
      break;
    case 4:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들";
      eWord = noun3animalE[valueNumber];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      // 첫 문자 대문자 만들기
      let str2 = eWord;
      let firstChar2 = str2.charAt(0);
      let others2 = str2.slice(1);
      let newStr2 = firstChar2.toUpperCase() + others2;
      eWord = newStr2;
      break;
  }

  switch (chooseNumbers2) {
    case 1: // s파 - 사람
      kWord = "(" + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + ") " + noun1personK[valueNumber3] + " 한 명이 " + PRONOUN_PERSONAL_OBJECTIVE_3K[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = eWord + " ( who " + VERB_COMPLETE_INTRANSITIVE_VERB_3E[valueNumber2] + " ) " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumberA];
      break;
    case 2: // No s파 - 사람
      kWord = "(" + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + ") " + noun1personK[valueNumber3] + "들이 " + PRONOUN_PERSONAL_OBJECTIVE_3K[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3K[valueNumberBB];
      eWord = eWord + " ( who " + VERB_COMPLETE_INTRANSITIVE_VERB_E[valueNumber2] + " ) " + VERB_SENTENCE_FORM_3_E[valueNumberBB] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumberA];
      break;
    case 3: // s파 - 동물
      kWord = "(" + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + ") " + noun3animalK[valueNumber] + " 한 마리가 " + PRONOUN_PERSONAL_OBJECTIVE_3K[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = eWord + " ( which " + VERB_COMPLETE_INTRANSITIVE_VERB_3E[valueNumber2] + " ) " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumberA];
      break;
    case 4: // No s파- 동물
      kWord = "(" + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + ") " + noun3animalK[valueNumber] + "들이 " + PRONOUN_PERSONAL_OBJECTIVE_3K[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3K[valueNumberBB];
      eWord = eWord + " ( which " + VERB_COMPLETE_INTRANSITIVE_VERB_E[valueNumber2] + " ) " + VERB_SENTENCE_FORM_3_E[valueNumberBB] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumberA];
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1703b 관계사-관계대명사-주격2
function function1703b() {
  let chooseNumbers1 = Math.floor(Math.random() * 4) + 1;
  let chooseNumbers2 = chooseNumbers1;
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K.length);
  let valueNumberA = Math.floor(Math.random() * PRONOUN_PERSONAL_OBJECTIVE_3K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);
  let valueNumberB = Math.floor(Math.random() * NoS_K.length);
  let valueNumberBB = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);

  let kWord;
  let eWord;
  switch (chooseNumbers1) {
    case 1:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun1personK[valueNumber3];
      eWord = noun1personE[valueNumber3];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "An " + eWord;
      } else {
        eWord = "A " + eWord;
      }
      break;
    case 2:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들";
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      // 첫 문자 대문자 만들기
      let str = eWord;
      let firstChar = str.charAt(0);
      let others = str.slice(1);
      let newStr = firstChar.toUpperCase() + others;
      eWord = newStr;
      break;
    case 3:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun3animalK[valueNumber];
      eWord = noun3animalE[valueNumber];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "An " + eWord;
      } else {
        eWord = "A " + eWord;
      }
      break;
    case 4:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들";
      eWord = noun3animalE[valueNumber];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      // 첫 문자 대문자 만들기
      let str2 = eWord;
      let firstChar2 = str2.charAt(0);
      let others2 = str2.slice(1);
      let newStr2 = firstChar2.toUpperCase() + others2;
      eWord = newStr2;
      break;
  }

  switch (chooseNumbers2) {
    case 1: // s파 - 사람
      kWord = " " + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + " 한 명이 " + PRONOUN_PERSONAL_OBJECTIVE_3K[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = eWord + " who " + VERB_COMPLETE_INTRANSITIVE_VERB_3E[valueNumber2] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumberA];
      break;
    case 2: // No s파 - 사람
      kWord = " " + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들이 " + PRONOUN_PERSONAL_OBJECTIVE_3K[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3K[valueNumberBB];
      eWord = eWord + " who " + VERB_COMPLETE_INTRANSITIVE_VERB_E[valueNumber2] + " " + VERB_SENTENCE_FORM_3_E[valueNumberBB] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumberA];
      break;
    case 3: // s파 - 동물
      kWord = " " + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + " 한 마리가 " + PRONOUN_PERSONAL_OBJECTIVE_3K[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = eWord + " which " + VERB_COMPLETE_INTRANSITIVE_VERB_3E[valueNumber2] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumberA];
      break;
    case 4: // No s파- 동물
      kWord = " " + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들이 " + PRONOUN_PERSONAL_OBJECTIVE_3K[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3K[valueNumberBB];
      eWord = eWord + " which " + VERB_COMPLETE_INTRANSITIVE_VERB_E[valueNumber2] + " " + VERB_SENTENCE_FORM_3_E[valueNumberBB] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumberA];
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}


function function1703cc() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1703aa();
      break;
    case 2:
      function1703bb();
      break;
  }
}


function function1703c() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1703a();
      break;
    case 2:
      function1703b();
      break;
  }
}

// 주어 "주어는" + "동사의 형용사형" +  " 명사을/를" + "동사한다
// 누가 무엇 하는 ~이 있다.
// 누가 동사하는 들이 있다.
// "주어는" + "동사의 형용사형" +  " 명사을/를" + "동사한다

//function1703d 관계사-관계대명사-목적격
function function1703d() {
  let chooseNumbers1 = Math.floor(Math.random() * 2) + 1;
  let chooseNumbers2 = chooseNumbers1;
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K.length);
  let valueNumberA = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_K.length);
  let valueNumberAAA = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_2K.length);
  let valueNumberCCC = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);
  let valueNumberB = Math.floor(Math.random() * NoS_K.length);
  let valueNumberBB = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);

  let kWord;
  let eWord;
  switch (chooseNumbers1) {
    case 1:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun1personK[valueNumber3];
      eWord = noun1personE[valueNumber3];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 2:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들";
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      break;
    case 3:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun3animalK[valueNumber];
      eWord = noun3animalE[valueNumber];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 4:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들";
      eWord = noun3animalE[valueNumber];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      break;
  }
  switch (chooseNumbers2) {
    // S V 관계사 S V
    // 1주어는 2주어가 2동사하는 1목적어를 1동사한다
    // 나는 사람들이 좋아하는 니콜을 사랑한다
    // I love Nicole who people like.
    case 1: // 3s파 - 사람
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_K[valueNumberA] + " " + PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_2K[valueNumberAAA] + " " + VERB_SENTENCE_ADJECTIVE_FORM_3_K[valueNumberBB] + " " + noun1personK[valueNumber3] + " 한 명을 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + eWord + " whom " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_SINGULAR_E[valueNumberAAA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberBB]; + " ";
      break;
    case 2: // No s파 - 사람
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K[valueNumberA] + " " + PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_2K[valueNumberCCC] + " " + VERB_SENTENCE_ADJECTIVE_FORM_3_K[valueNumberBB] + " " + noun1personK[valueNumber3] + "들을 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_E[valueNumberAA] + " " + eWord + " whom " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_PLURAL_E[valueNumberCCC] + " " + VERB_SENTENCE_FORM_3_E[valueNumberBB]; + " ";
      break;

  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1703dd 관계사-관계대명사-목적격 easy
function function1703dd() {
  let chooseNumbers1 = Math.floor(Math.random() * 2) + 1;
  let chooseNumbers2 = chooseNumbers1;
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K.length);
  let valueNumberA = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_K.length);
  let valueNumberAAA = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_2K.length);
  let valueNumberCCC = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);
  let valueNumberB = Math.floor(Math.random() * NoS_K.length);
  let valueNumberBB = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);

  let kWord;
  let eWord;
  switch (chooseNumbers1) {
    case 1:
      kWord = noun1personK[valueNumber3];
      eWord = noun1personE[valueNumber3];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 2:
      kWord = noun1personK[valueNumber3];
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      break;
    case 3:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun3animalK[valueNumber];
      eWord = noun3animalE[valueNumber];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 4:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들";
      eWord = noun3animalE[valueNumber];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      break;
  }
  switch (chooseNumbers2) {
    // S V 관계사 S V
    // 1주어는 2주어가 2동사하는 1목적어를 1동사한다
    // 나는 사람들이 좋아하는 니콜을 사랑한다
    // I love Nicole who people like.
    case 1: // 3s파 - 사람
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_K[valueNumberA] + " ( " + PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_2K[valueNumberAAA] + " " + VERB_SENTENCE_ADJECTIVE_FORM_3_K[valueNumberBB] + " ) " + kWord + " 한 명을 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + eWord + " ( whom " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_SINGULAR_E[valueNumberAAA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberBB] + " ) ";
      break;
    case 2: // No s파 - 사람
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K[valueNumberA] + " ( " + PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_2K[valueNumberCCC] + " " + VERB_SENTENCE_ADJECTIVE_FORM_3_K[valueNumberBB] + " ) " + kWord + "들을 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_E[valueNumberAA] + " " + eWord + " ( whom " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_PLURAL_E[valueNumberCCC] + " " + VERB_SENTENCE_FORM_3_E[valueNumberBB] + " ) ";
      break;

  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}


function function1703dv2() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1703c();
      break;
    case 2:
      function1703d();
      break;
  }
}
//  // 주어 "주어는" + "소유격 문장 형용사형" +  " 명사을/를" + "동사한다
//function1703e 관계사-관계대명사-소유격
function function1703e() {
  let chooseNumbers1 = Math.floor(Math.random() * 2) + 1;
  let chooseNumbers2 = chooseNumbers1;
  let chooseNumbers3 = chooseNumbers1;
  let valueNumber4 = Math.floor(Math.random() * noun3animalE.length);
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K.length);
  let kWord;
  let eWord;
  let kWordObject;
  let eWordObject;
  switch (chooseNumbers1) {
    case 1:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun1personK[valueNumber3];
      eWord = noun1personE[valueNumber3];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 2:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들";
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }

      break;
  }
  // 하나 or 여러개
  switch (chooseNumbers2) {
    case 1:
      kWordObject = noun3animalK[valueNumber4] + " 하나가 ";
      eWordObject = noun3animalE[valueNumber4];
      if (eWordObject[0] == 'a' || eWordObject[0] == 'e' || eWordObject[0] == 'i' || eWordObject[0] == 'o' || eWordObject[0] == 'u') {
        eWordObject = " " + eWordObject;
      } else {
        eWordObject = " " + eWordObject;
      }
      break;
    case 2:
      kWordObject = noun3animalK[valueNumber4] + "들이 ";
      eWordObject = noun3animalE[valueNumber4];
      if (eWordObject.endsWith('s') || eWordObject.endsWith('ss') || eWordObject.endsWith('sh') || eWordObject.endsWith('ch') || eWordObject.endsWith('x') || eWordObject.endsWith('o')) {
        eWordObject = eWordObject + "es";
      } else if (eWordObject.endsWith('ay') || eWordObject.endsWith('ey') || eWordObject.endsWith('iy') || eWordObject.endsWith('oy') || eWordObject.endsWith('uy')) {
        eWordObject = eWordObject + "s";
      } else if (eWordObject.endsWith('y')) {
        eWordObject = eWordObject.slice(0, -1) + "ies";
      } else if (eWordObject.endsWith('fe')) {
        eWordObject = eWordObject.slice(0, -2) + "ves";
      } else if (eWordObject.endsWith('f')) {
        eWordObject = eWordObject.slice(0, -1) + "ves";
      } else {
        eWordObject = eWordObject + "s";
      }

      break;
  }
  let valueNumberA = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_K.length);
  let valueNumberAAA = Math.floor(Math.random() * noun2objectK.length);
  let valueNumberCCC = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);
  let valueNumberB = Math.floor(Math.random() * NoS_K.length);
  let valueNumberBB = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE_K.length);

  // ADJECTIVE_POSITIVE_PEOPLE_K
  // ADJECTIVE_POSITIVE_THINGS_K
  //noun1personK
  // noun3animalK
  //noun2objectK
  ////  // 주어 "주어는" + "소유격 문장 형용사형" +  " 명사을/를" + "동사한다
  switch (chooseNumbers3) {

    case 1: // 3s파 - 사람 // noun3animalK 단수로
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_K[valueNumberA] + " " + kWordObject + " " + ADJECTIVE_POSITIVE_PEOPLE_K[valueNumberBB] + " " + noun1personK[valueNumber3] + " 한 명을 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + eWord + " whose " + eWordObject + " is " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumberBB]; + " ";
      break;
    case 2: // No s파 - 사람 // noun3animalE 복수로
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K[valueNumberA] + " " + kWordObject + " " + ADJECTIVE_POSITIVE_PEOPLE_K[valueNumberBB] + " " + noun1personK[valueNumber3] + "들을 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_E[valueNumberAA] + " " + eWord + " whose " + eWordObject + " are " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumberBB]; + " ";
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}


//function1703e 관계사-관계대명사-소유격
function function1703ee() {
  let chooseNumbers1 = Math.floor(Math.random() * 2) + 1;
  let chooseNumbers2 = chooseNumbers1;
  let chooseNumbers3 = chooseNumbers1;
  let valueNumber4 = Math.floor(Math.random() * noun3animalE.length);
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K.length);
  let kWord;
  let eWord;
  let kWordObject;
  let eWordObject;
  switch (chooseNumbers1) {
    case 1:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun1personK[valueNumber3];
      eWord = noun1personE[valueNumber3];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 2:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들";
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }

      break;

  }
  // 하나 or 여러개

  switch (chooseNumbers2) {
    case 1:
      kWordObject = noun3animalK[valueNumber4] + " 하나가 ";
      eWordObject = noun3animalE[valueNumber4];
      if (eWordObject[0] == 'a' || eWordObject[0] == 'e' || eWordObject[0] == 'i' || eWordObject[0] == 'o' || eWordObject[0] == 'u') {
        eWordObject = " " + eWordObject;
      } else {
        eWordObject = " " + eWordObject;
      }
      break;
    case 2:
      kWordObject = noun3animalK[valueNumber4] + "들이 ";
      eWordObject = noun3animalE[valueNumber4];
      if (eWordObject.endsWith('s') || eWordObject.endsWith('ss') || eWordObject.endsWith('sh') || eWordObject.endsWith('ch') || eWordObject.endsWith('x') || eWordObject.endsWith('o')) {
        eWordObject = eWordObject + "es";
      } else if (eWordObject.endsWith('ay') || eWordObject.endsWith('ey') || eWordObject.endsWith('iy') || eWordObject.endsWith('oy') || eWordObject.endsWith('uy')) {
        eWordObject = eWordObject + "s";
      } else if (eWordObject.endsWith('y')) {
        eWordObject = eWordObject.slice(0, -1) + "ies";
      } else if (eWordObject.endsWith('fe')) {
        eWordObject = eWordObject.slice(0, -2) + "ves";
      } else if (eWordObject.endsWith('f')) {
        eWordObject = eWordObject.slice(0, -1) + "ves";
      } else {
        eWordObject = eWordObject + "s";
      }

      break;
  }
  let valueNumberA = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_K.length);
  let valueNumberAAA = Math.floor(Math.random() * noun2objectK.length);
  let valueNumberCCC = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);
  let valueNumberB = Math.floor(Math.random() * NoS_K.length);
  let valueNumberBB = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE_K.length);
  // ADJECTIVE_POSITIVE_PEOPLE_K
  // ADJECTIVE_POSITIVE_THINGS_K
  //noun1personK
  // noun3animalK
  //noun2objectK

  switch (chooseNumbers3) {

    case 1: // 3s파 - 사람 // noun3animalK 단수로
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_K[valueNumberA] + " ( " + kWordObject + " " + ADJECTIVE_POSITIVE_PEOPLE_K[valueNumberBB] + " ) " + noun1personK[valueNumber3] + " 한 명을 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + eWord + " ( whose " + eWordObject + " is " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumberBB] + " ) ";
      break;
    case 2: // No s파 - 사람 // noun3animalE 복수로
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K[valueNumberA] + " ( " + kWordObject + " " + ADJECTIVE_POSITIVE_PEOPLE_K[valueNumberBB] + " ) " + noun1personK[valueNumber3] + "들을 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_E[valueNumberAA] + " " + eWord + " ( whose " + eWordObject + " are " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumberBB] + " ) ";
      break;

  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}


function function1703f() {
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1703aa();
      break;
    case 2:
      function1703bb();
      break;
    case 3:
      function1703dd();
      break;
    case 4:
      function1703ee();
      break;
  }
}
function function1703g() {
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1703a();
      break;
    case 2:
      function1703b();
      break;
    case 3:
      function1703d();
      break;
    case 4:
      function1703e();
      break;
  }
}
//eWord.replace('who', 'that')

//function1704a 관계사-관계대명사-주격1
function function1704a() {
  let chooseNumbers1 = Math.floor(Math.random() * 4) + 1;
  console.log(chooseNumbers1)
  let chooseNumbers2 = chooseNumbers1;
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K.length);
  let kWord;
  let eWord;
  switch (chooseNumbers1) {
    case 1:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun1personK[valueNumber3];
      eWord = noun1personE[valueNumber3];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 2:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들";
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      break;
    case 3:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun3animalK[valueNumber];
      eWord = noun3animalE[valueNumber];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 4:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들";
      eWord = noun3animalE[valueNumber];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      break;
  }
  let valueNumberA = Math.floor(Math.random() * S_K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);
  let valueNumberB = Math.floor(Math.random() * NoS_K.length);
  let valueNumberBB = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);

  switch (chooseNumbers2) {
    case 1: // s파 - 사람
      kWord = S_K[valueNumberA] + " " + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + "한 명을 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = S_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + eWord + " that " + VERB_COMPLETE_INTRANSITIVE_VERB_3E[valueNumber2];
      break;
    case 2: // No s파 - 사람
      kWord = NoS_K[valueNumberB] + " " + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들을 " + VERB_SENTENCE_FORM_3_3K[valueNumberBB];
      eWord = NoS_E[valueNumberB] + " " + VERB_SENTENCE_FORM_3_E[valueNumberBB] + " " + eWord + " that " + VERB_COMPLETE_INTRANSITIVE_VERB_E[valueNumber2];
      break;
    case 3: // s파 - 동물
      kWord = S_K[valueNumberA] + " " + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + "한 마리를 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = S_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + eWord + " that " + VERB_COMPLETE_INTRANSITIVE_VERB_3E[valueNumber2];
      break;
    case 4: // No s파- 동물
      kWord = NoS_K[valueNumberB] + " " + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들을 " + VERB_SENTENCE_FORM_3_3K[valueNumberBB];
      eWord = NoS_E[valueNumberB] + " " + VERB_SENTENCE_FORM_3_E[valueNumberBB] + " " + eWord + " that " + VERB_COMPLETE_INTRANSITIVE_VERB_E[valueNumber2];
      break;
  }

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1704a 관계사-관계대명사-주격1
function function1704aa() {
  let chooseNumbers1 = Math.floor(Math.random() * 4) + 1;
  let chooseNumbers2 = chooseNumbers1;
  console.log(chooseNumbers1, chooseNumbers2); // 여러 개를 동시에 로그
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K.length);
  let valueNumberA = Math.floor(Math.random() * S_K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);
  let valueNumberB = Math.floor(Math.random() * NoS_K.length);
  let valueNumberBB = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);

  let kWord;
  let eWord;
  switch (chooseNumbers1) {
    case 1:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun1personK[valueNumber3];
      eWord = noun1personE[valueNumber3];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 2:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들";
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      break;
    case 3:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun3animalK[valueNumber];
      eWord = noun3animalE[valueNumber];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 4:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들";
      eWord = noun3animalE[valueNumber];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      break;
  }

  switch (chooseNumbers2) {
    case 1: // s파 - 사람
      kWord = S_K[valueNumberA] + " (" + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + ") " + noun1personK[valueNumber3] + " 한 명을 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = S_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + eWord + " ( that " + VERB_COMPLETE_INTRANSITIVE_VERB_3E[valueNumber2] + " )";
      break;
    case 2: // No s파 - 사람
      kWord = NoS_K[valueNumberB] + " (" + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + ") " + noun1personK[valueNumber3] + "들을 " + VERB_SENTENCE_FORM_3_3K[valueNumberBB];
      eWord = NoS_E[valueNumberB] + " " + VERB_SENTENCE_FORM_3_E[valueNumberBB] + " " + eWord + " ( that " + VERB_COMPLETE_INTRANSITIVE_VERB_E[valueNumber2] + " )";
      break;
    case 3: // s파 - 동물
      kWord = S_K[valueNumberA] + " (" + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + ") " + noun3animalK[valueNumber] + " 한 마리를 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = S_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + eWord + " ( that " + VERB_COMPLETE_INTRANSITIVE_VERB_3E[valueNumber2] + " )";
      break;
    case 4: // No s파- 동물
      kWord = NoS_K[valueNumberB] + " (" + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + ") " + noun3animalK[valueNumber] + "들을 " + VERB_SENTENCE_FORM_3_3K[valueNumberBB];
      eWord = NoS_E[valueNumberB] + " " + VERB_SENTENCE_FORM_3_E[valueNumberBB] + " " + eWord + " ( that " + VERB_COMPLETE_INTRANSITIVE_VERB_E[valueNumber2] + " )";
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}


//function1704bb 관계사-관계대명사-주격2
function function1704bb() {
  let chooseNumbers1 = Math.floor(Math.random() * 4) + 1;
  let chooseNumbers2 = chooseNumbers1;
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K.length);
  let valueNumberA = Math.floor(Math.random() * PRONOUN_PERSONAL_OBJECTIVE_3K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);
  let valueNumberB = Math.floor(Math.random() * NoS_K.length);
  let valueNumberBB = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);

  let kWord;
  let eWord;
  switch (chooseNumbers1) {
    case 1:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun1personK[valueNumber3];
      eWord = noun1personE[valueNumber3];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "An " + eWord;
      } else {
        eWord = "A " + eWord;
      }
      break;
    case 2:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들";
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      // 첫 문자 대문자 만들기
      let str = eWord;
      let firstChar = str.charAt(0);
      let others = str.slice(1);
      let newStr = firstChar.toUpperCase() + others;
      eWord = newStr;
      break;
    case 3:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun3animalK[valueNumber];
      eWord = noun3animalE[valueNumber];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "An " + eWord;
      } else {
        eWord = "A " + eWord;
      }
      break;
    case 4:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들";
      eWord = noun3animalE[valueNumber];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      // 첫 문자 대문자 만들기
      let str2 = eWord;
      let firstChar2 = str2.charAt(0);
      let others2 = str2.slice(1);
      let newStr2 = firstChar2.toUpperCase() + others2;
      eWord = newStr2;
      break;
  }

  switch (chooseNumbers2) {
    case 1: // s파 - 사람
      kWord = "(" + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + ") " + noun1personK[valueNumber3] + " 한 명이 " + PRONOUN_PERSONAL_OBJECTIVE_3K[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = eWord + " ( that " + VERB_COMPLETE_INTRANSITIVE_VERB_3E[valueNumber2] + " ) " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumberA];
      break;
    case 2: // No s파 - 사람
      kWord = "(" + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + ") " + noun1personK[valueNumber3] + "들이 " + PRONOUN_PERSONAL_OBJECTIVE_3K[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3K[valueNumberBB];
      eWord = eWord + " ( that " + VERB_COMPLETE_INTRANSITIVE_VERB_E[valueNumber2] + " ) " + VERB_SENTENCE_FORM_3_E[valueNumberBB] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumberA];
      break;
    case 3: // s파 - 동물
      kWord = "(" + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + ") " + noun3animalK[valueNumber] + " 한 마리가 " + PRONOUN_PERSONAL_OBJECTIVE_3K[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = eWord + " ( that " + VERB_COMPLETE_INTRANSITIVE_VERB_3E[valueNumber2] + " ) " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumberA];
      break;
    case 4: // No s파- 동물
      kWord = "(" + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + ") " + noun3animalK[valueNumber] + "들이 " + PRONOUN_PERSONAL_OBJECTIVE_3K[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3K[valueNumberBB];
      eWord = eWord + " ( that " + VERB_COMPLETE_INTRANSITIVE_VERB_E[valueNumber2] + " ) " + VERB_SENTENCE_FORM_3_E[valueNumberBB] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumberA];
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1704b 관계사-관계대명사-주격2
function function1704b() {
  let chooseNumbers1 = Math.floor(Math.random() * 4) + 1;
  let chooseNumbers2 = chooseNumbers1;
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K.length);
  let valueNumberA = Math.floor(Math.random() * PRONOUN_PERSONAL_OBJECTIVE_3K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);
  let valueNumberB = Math.floor(Math.random() * NoS_K.length);
  let valueNumberBB = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);

  let kWord;
  let eWord;
  switch (chooseNumbers1) {
    case 1:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun1personK[valueNumber3];
      eWord = noun1personE[valueNumber3];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "An " + eWord;
      } else {
        eWord = "A " + eWord;
      }
      break;
    case 2:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들";
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      // 첫 문자 대문자 만들기
      let str = eWord;
      let firstChar = str.charAt(0);
      let others = str.slice(1);
      let newStr = firstChar.toUpperCase() + others;
      eWord = newStr;
      break;
    case 3:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun3animalK[valueNumber];
      eWord = noun3animalE[valueNumber];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "An " + eWord;
      } else {
        eWord = "A " + eWord;
      }
      break;
    case 4:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들";
      eWord = noun3animalE[valueNumber];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      // 첫 문자 대문자 만들기
      let str2 = eWord;
      let firstChar2 = str2.charAt(0);
      let others2 = str2.slice(1);
      let newStr2 = firstChar2.toUpperCase() + others2;
      eWord = newStr2;
      break;
  }

  switch (chooseNumbers2) {
    case 1: // s파 - 사람
      kWord = " " + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + " 한 명이 " + PRONOUN_PERSONAL_OBJECTIVE_3K[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = eWord + " that " + VERB_COMPLETE_INTRANSITIVE_VERB_3E[valueNumber2] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumberA];
      break;
    case 2: // No s파 - 사람
      kWord = " " + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들이 " + PRONOUN_PERSONAL_OBJECTIVE_3K[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3K[valueNumberBB];
      eWord = eWord + " that " + VERB_COMPLETE_INTRANSITIVE_VERB_E[valueNumber2] + " " + VERB_SENTENCE_FORM_3_E[valueNumberBB] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumberA];
      break;
    case 3: // s파 - 동물
      kWord = " " + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + " 한 마리가 " + PRONOUN_PERSONAL_OBJECTIVE_3K[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = eWord + " that " + VERB_COMPLETE_INTRANSITIVE_VERB_3E[valueNumber2] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumberA];
      break;
    case 4: // No s파- 동물
      kWord = " " + VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들이 " + PRONOUN_PERSONAL_OBJECTIVE_3K[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3K[valueNumberBB];
      eWord = eWord + " that " + VERB_COMPLETE_INTRANSITIVE_VERB_E[valueNumber2] + " " + VERB_SENTENCE_FORM_3_E[valueNumberBB] + " " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumberA];
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}


function function1704c() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1704a();
      break;
    case 2:
      function1704b();
      break;
  }
}

// 주어 "주어는" + "동사의 형용사형" +  " 명사을/를" + "동사한다
// 누가 무엇 하는 ~이 있다.
// 누가 동사하는 들이 있다.
// "주어는" + "동사의 형용사형" +  " 명사을/를" + "동사한다

//function1704d 관계사-관계대명사-목적격
function function1704d() {
  let chooseNumbers1 = Math.floor(Math.random() * 2) + 1;
  let chooseNumbers2 = chooseNumbers1;
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K.length);
  let valueNumberA = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_K.length);
  let valueNumberAAA = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_2K.length);
  let valueNumberCCC = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);
  let valueNumberB = Math.floor(Math.random() * NoS_K.length);
  let valueNumberBB = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);

  let kWord;
  let eWord;
  switch (chooseNumbers1) {
    case 1:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun1personK[valueNumber3];
      eWord = noun1personE[valueNumber3];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 2:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들";
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      break;
    case 3:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun3animalK[valueNumber];
      eWord = noun3animalE[valueNumber];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 4:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들";
      eWord = noun3animalE[valueNumber];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      break;
  }
  switch (chooseNumbers2) {
    // S V 관계사 S V
    // 1주어는 2주어가 2동사하는 1목적어를 1동사한다
    // 나는 사람들이 좋아하는 니콜을 사랑한다
    // I love Nicole who people like.
    case 1: // 3s파 - 사람
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_K[valueNumberA] + " " + PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_2K[valueNumberAAA] + " " + VERB_SENTENCE_ADJECTIVE_FORM_3_K[valueNumberBB] + " " + noun1personK[valueNumber3] + " 한 명을 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + eWord + " that " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_SINGULAR_E[valueNumberAAA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberBB]; + " ";
      break;
    case 2: // No s파 - 사람
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K[valueNumberA] + " " + PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_2K[valueNumberCCC] + " " + VERB_SENTENCE_ADJECTIVE_FORM_3_K[valueNumberBB] + " " + noun1personK[valueNumber3] + "들을 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_E[valueNumberAA] + " " + eWord + " that " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_PLURAL_E[valueNumberCCC] + " " + VERB_SENTENCE_FORM_3_E[valueNumberBB]; + " ";
      break;

  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1704dd 관계사-관계대명사-목적격 easy
function function1704dd() {
  let chooseNumbers1 = Math.floor(Math.random() * 2) + 1;
  let chooseNumbers2 = chooseNumbers1;
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K.length);
  let valueNumberA = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_K.length);
  let valueNumberAAA = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_2K.length);
  let valueNumberCCC = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);
  let valueNumberB = Math.floor(Math.random() * NoS_K.length);
  let valueNumberBB = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);

  let kWord;
  let eWord;
  switch (chooseNumbers1) {
    case 1:
      kWord = noun1personK[valueNumber3];
      eWord = noun1personE[valueNumber3];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 2:
      kWord = noun1personK[valueNumber3];
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      break;
    case 3:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun3animalK[valueNumber];
      eWord = noun3animalE[valueNumber];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 4:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들";
      eWord = noun3animalE[valueNumber];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      break;
  }
  switch (chooseNumbers2) {
    // S V 관계사 S V
    // 1주어는 2주어가 2동사하는 1목적어를 1동사한다
    // 나는 사람들이 좋아하는 니콜을 사랑한다
    // I love Nicole who people like.
    case 1: // 3s파 - 사람
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_K[valueNumberA] + " ( " + PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_2K[valueNumberAAA] + " " + VERB_SENTENCE_ADJECTIVE_FORM_3_K[valueNumberBB] + " ) " + kWord + " 한 명을 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + eWord + " ( that " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_SINGULAR_E[valueNumberAAA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberBB] + " ) ";
      break;
    case 2: // No s파 - 사람
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K[valueNumberA] + " ( " + PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_2K[valueNumberCCC] + " " + VERB_SENTENCE_ADJECTIVE_FORM_3_K[valueNumberBB] + " ) " + kWord + "들을 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_E[valueNumberAA] + " " + eWord + " ( that " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_PLURAL_E[valueNumberCCC] + " " + VERB_SENTENCE_FORM_3_E[valueNumberBB] + " ) ";
      break;

  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1704f() {
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1704aa();
      break;
    case 2:
      function1704bb();
      break;
    case 3:
      function1704dd();
      break;
    case 4:
      function1704ee();
      break;
  }
}
function function1704g() {
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1704a();
      break;
    case 2:
      function1704b();
      break;
    case 3:
      function1704d();
      break;
    case 4:
      function1704e();
      break;
  }
}


function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomElement(array) {
  const index = getRandomNumber(array.length);
  return array[index];
}

function getRandomNoun3AnimalK() {
  return getRandomElement(noun3animalK);
}

function getRandomNoun1PersonK() {
  return getRandomElement(noun1personK);
}

function getRandomVerbCompleteIntransitiveAdjectiveVerbK() {
  return getRandomElement(VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K);
}

function getRandomElementEWithPluralization(element) {
  if (element.endsWith("s") || element.endsWith("ss") || element.endsWith("sh") || element.endsWith("ch") || element.endsWith("x") || element.endsWith("o")) {
    return `${element}es`;
  } else if (element.endsWith("ay") || element.endsWith("ey") || element.endsWith("iy") || element.endsWith("oy") || element.endsWith("uy")) {
    return `${element}s`;
  } else if (element.endsWith("y")) {
    return `${element.slice(0, -1)}ies`;
  } else if (element.endsWith("fe")) {
    return `${element.slice(0, -2)}ves`;
  } else if (element.endsWith("f")) {
    return `${element.slice(0, -1)}ves`;
  } else {
    return `${element}s`;
  }
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
function lowercaseFirstLetter(word) {
  return word.charAt(0).toLowerCase() + word.slice(1);
}


RELATIVES_ADJECTIVE_E
RELATIVES_ADJECTIVE_K
RELATIVES_ADJECTIVE_2K

// 관계사 what
function function1705() {
  const whatCase1_K = new Array("저에게 보여줄 수 있나요?", "저에게 설명해줄 수 있나요?");
  const whatCase1_E = new Array("Can you show me ", "Can you explain to me ");
  const whatCase456_K = new Array(" 믿을수가 없어요", "에 대해 궁금해요", "에 관심이 있어요", "이 궁금해요", " 몰라요", "이 궁금해요", "에 대해 혼란스러워요", " 기억이 안나요");
  const whatCase456_E = new Array("I can't believe ", "I'm curious about ", "I'm interested in ", "I'm wondering ", "I don't know ", "I wonder ", "I'm confused about ", "I can't remember ");
  let chooseNumbers1 = Math.floor(Math.random() * 3) + 1
  let valueNumber = Math.floor(Math.random() * whatCase1_K.length);
  let valueNumberA = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_PAST_K.length);
  let valueNumberBB = Math.floor(Math.random() * RELATIVES_ADJECTIVE__2K.length);
  let valueNumber3 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E.length);
  let kWord;
  let eWord;

  switch (chooseNumbers1) {
    case 1: //2 Requests //Can you show me what S V? Can you explain to me what S V? "저에게 보여줄 수 있나요?", "저에게 설명해줄 수 있나요?"
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber3] + " " + VERB_SENTENCE_FORM_3_PAST_2K[valueNumberAA] + " 것이 무엇인지 " + whatCase1_K[valueNumber] + "  ";
      eWord = whatCase1_E[valueNumber] + " what " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber3] + " " + VERB_SENTENCE_FORM_3_PAST_E[valueNumberAA];
      break;
    case 2: // Opinions What S 동사 be동사(is/was) 형용사
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumberA] + " " + VERB_SENTENCE_FORM_3_PAST_2K[valueNumberAA] + " 것은 " + RELATIVES_ADJECTIVE_2K[valueNumberBB];
      eWord = "What " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_PAST_E[valueNumberAA] + " is " + RELATIVES_ADJECTIVE_E[valueNumberBB];
      break;
    case 3: // Uncertainty/Confusion , Expressions of Surprise/Disbelief , Curiosity/Interest
      kWord = "저는 " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber3] + " " + VERB_SENTENCE_FORM_3_PAST_2K[valueNumberAA] + " 것" + whatCase456_K[valueNumber] + "  ";
      eWord = whatCase456_E[valueNumber] + " what " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber3] + " " + VERB_SENTENCE_FORM_3_PAST_E[valueNumberAA];
      break;
  }

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
// 관계사 전체
/*  
  function getRandomReletives() {
    getRandomReletives1
    getRandomReletives11
    getRandomReletives2
    getRandomReletives3
    의 결과중에 뽑기
    $("#clsRandom").text(result);
  }
*/



function function1706() {
  let valueNumber = Math.floor(Math.random() * adjectiveCountableK4.length);
  let kWord;
  let eWord;

  let chooseNumbers1 = Math.floor(Math.random() * 2) + 1;
  let chooseNumbers2 = chooseNumbers1;
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K.length);
  let valueNumberA = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_K.length);
  let valueNumberAAA = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_2K.length);
  let valueNumberCCC = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);
  let valueNumberBB = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);

  switch (chooseNumbers1) {
    case 1:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun1personK[valueNumber3];
      eWord = noun1personE[valueNumber3];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 2:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들";
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      break;
  }
  switch (chooseNumbers2) {
    // S V 관계사 S V
    // 1주어는 2주어가 2동사하는 1목적어를 1동사한다
    // 나는 사람들이 좋아하는 니콜을 사랑한다
    // I love Nicole who people like.
    case 1: // 3s파 - 사람
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_K[valueNumberA] + " " + PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_2K[valueNumberAAA] + " " + VERB_SENTENCE_ADJECTIVE_FORM_3_K[valueNumberBB] + " " + noun1personK[valueNumber3] + " 한 명을 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + eWord + " " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_SINGULAR_E[valueNumberAAA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberBB]; + " ";
      break;
    case 2: // No s파 - 사람
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K[valueNumberA] + " " + PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_2K[valueNumberCCC] + " " + VERB_SENTENCE_ADJECTIVE_FORM_3_K[valueNumberBB] + " " + noun1personK[valueNumber3] + "들을 " + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_E[valueNumberAA] + " " + eWord + " " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_PLURAL_E[valueNumberCCC] + " " + VERB_SENTENCE_FORM_3_E[valueNumberBB]; + " ";
      break;
  }

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}


//function1707 관계사-관계대명사-계속적 용법
function function1707() {
  let chooseNumbers1 = Math.floor(Math.random() * 4) + 1;
  console.log(chooseNumbers1)
  let chooseNumbers2 = chooseNumbers1;
  let valueNumber = Math.floor(Math.random() * noun3animalK.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K.length);
  let kWord;
  let eWord;
  switch (chooseNumbers1) {
    case 1:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun1personK[valueNumber3];
      eWord = noun1personE[valueNumber3];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 2:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun1personK[valueNumber3] + "들";
      eWord = noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      break;
    case 3:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + "하나의 " + noun3animalK[valueNumber];
      eWord = noun3animalE[valueNumber];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 4:
      kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumber2] + " " + noun3animalK[valueNumber] + "들";
      eWord = noun3animalE[valueNumber];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }
      break;
  }
  let valueNumberA = Math.floor(Math.random() * S_K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);
  let valueNumberB = Math.floor(Math.random() * NoS_K.length);
  let valueNumberBB = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);

  switch (chooseNumbers2) {
    case 1: // s파 - 사람
      kWord = S_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + eWord + " who " + VERB_COMPLETE_INTRANSITIVE_VERB_3E[valueNumber2];
      eWord = "한정적 용법";
      break;
    case 2: // No s파 - 사람
      kWord = NoS_E[valueNumberB] + " " + VERB_SENTENCE_FORM_3_E[valueNumberBB] + " " + eWord + " who " + VERB_COMPLETE_INTRANSITIVE_VERB_E[valueNumber2];
      eWord = "한정적 용법";
      break;
    case 3: // s파 - 사람
      kWord = S_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + eWord + ", who " + VERB_COMPLETE_INTRANSITIVE_VERB_3E[valueNumber2];
      eWord = "계속적 용법";
      break;
    case 4: // No s파 - 사람
      kWord = NoS_E[valueNumberB] + " " + VERB_SENTENCE_FORM_3_E[valueNumberBB] + " " + eWord + ", who " + VERB_COMPLETE_INTRANSITIVE_VERB_E[valueNumber2];
      eWord = "계속적 용법";
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1708() {
  let kWord = "관계대명사 전치사의 위치?";
  let eWord = "① 문장 끝 \n ② 관대 앞(관계 대명사 앞) \n ③ 전치사 that은 안됨";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

function function1709() {
  let valueNumber = Math.floor(Math.random() * RELATIVE_ADVERB_K.length);
  let kWord = RELATIVE_ADVERB_K[valueNumber];
  let eWord = RELATIVE_ADVERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1709a() {
  let valueNumber = Math.floor(Math.random() * RELATIVE_ADVERB_2K.length);
  let kWord = RELATIVE_ADVERB_2K[valueNumber];
  let eWord = RELATIVE_ADVERB_2E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1710() {
  let valueNumber = Math.floor(Math.random() * adjectiveCountableK4.length);
  let kWord = "";
  let eWord = "";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1711() {
  let valueNumber = Math.floor(Math.random() * adjectiveCountableK4.length);
  let kWord = "";
  let eWord = "";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//whoever - anyone who
// whoever
// who(m)ever
// whichever
// whatever
//"Whoever sleeps in late will miss breakfast."
// Whoever 3동사 will 동사원형
function function1712() {
  let valueNumber1 = Math.floor(Math.random() * COMPOUND_RELATIVE_PRONOUN_K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_COMPLETE_INTRANSITIVE_VERB_K.length);
  let valueNumberBB = Math.floor(Math.random() * VERB_COMPLETE_INTRANSITIVE_VERB_K.length);
  let kWord = VERB_COMPLETE_INTRANSITIVE_ADJECTIVE_VERB_K[valueNumberBB] + COMPOUND_RELATIVE_PRONOUN_K[valueNumber1] + AUXILIARY_WILL_K[valueNumberAA];
  let eWord = COMPOUND_RELATIVE_PRONOUN_E[valueNumber1] + " " + VERB_COMPLETE_INTRANSITIVE_VERB_3E[valueNumberBB] + " will " + VERB_SENTENCE_FORM_1_E[valueNumberAA];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
// "No matter who calls, tell them I'm busy."
// Whoever 3동사, 명령문
function function1713() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_IMPERATIVE_2K.length);
  let valueNumberA = Math.floor(Math.random() * COMPOUND_RELATIVE_PRONOUN_K.length);
  let valueNumberBB = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);
  let kWord = "비록 " + COMPOUND_RELATIVE_PRONOUN_2K[valueNumberA] + VERB_SENTENCE_CONCESSIVE_FORM_3_K[valueNumberBB] + ", " + SENTENCE_IMPERATIVE_2K[valueNumber];
  let eWord = COMPOUND_RELATIVE_PRONOUN_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberBB] + ", " + SENTENCE_IMPERATIVE_2E[valueNumber].toLowerCase() + "!";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1714() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  let kWord;
  let eWord;
  let valueNumber1 = Math.floor(Math.random() * S_K.length);
  let valueNumber111 = Math.floor(Math.random() * S_K.length);
  let valueNumber11 = Math.floor(Math.random() * VERB_GENERAL_ADJECTIVE_ALL.length);
  let valueNumber2 = Math.floor(Math.random() * NoS_2K.length);
  let valueNumber222 = Math.floor(Math.random() * NoS_2K.length);
  let valueNumberC = Math.floor(Math.random() * COMPOUND_RELATIVE_ADVERB_K.length);
  switch (chooseNumbers) {
    case 1: // s파
      kWord = S_2K[valueNumber111] + " " + VERB_GENERAL_ADJECTIVE_ALL[valueNumber11] + " " + COMPOUND_RELATIVE_ADVERB_K[valueNumberC] + ", " + S_K[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL[valueNumber11];
      eWord = COMPOUND_RELATIVE_ADVERB_E[valueNumberC] + " " + S_E[valueNumber111].toLowerCase() + " " + VERB_GENERAL_POSITIVE3_ALL_E[valueNumber11] + ", " + S_E[valueNumber1].toLowerCase() + " " + VERB_GENERAL_POSITIVE3_ALL_E[valueNumber11];
      break;
    case 2: // No s파
      kWord = NoS_2K[valueNumber2] + " " + VERB_GENERAL_ADJECTIVE_ALL[valueNumber11] + " " + COMPOUND_RELATIVE_ADVERB_K[valueNumberC] + ", " + NoS_2K[valueNumber222] + " " + VERB_GENERAL_POSITIVE_ALL[valueNumber11];
      eWord = COMPOUND_RELATIVE_ADVERB_E[valueNumberC] + " " + NoS_2E[valueNumber2].toLowerCase() + " " + VERB_GENERAL_POSITIVE_ALL_E[valueNumber11] + ", " + NoS_2E[valueNumber222].toLowerCase() + " " + VERB_GENERAL_POSITIVE_ALL_E[valueNumber11];
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

function function1715() {
  let valueNumberBB = Math.floor(Math.random() * VERB_COMPLETE_INTRANSITIVE_CONCESSIVE_VERB_K.length);
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  let kWord;
  let eWord;
  let valueNumber1 = Math.floor(Math.random() * S_K.length);
  let valueNumber111 = Math.floor(Math.random() * S_K.length);
  let valueNumber11 = Math.floor(Math.random() * VERB_GENERAL_ADJECTIVE_ALL.length);
  let valueNumber2 = Math.floor(Math.random() * NoS_2K.length);
  let valueNumberC = Math.floor(Math.random() * COMPOUND_RELATIVE_ADVERB_K.length);
  switch (chooseNumbers) {
    case 1: // s파
      kWord = "비록 " + COMPOUND_RELATIVE_ADVERB_2K[valueNumberC] + S_2K[valueNumber111] + " " + VERB_COMPLETE_INTRANSITIVE_CONCESSIVE_VERB_K[valueNumberBB] + ", " + S_K[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL[valueNumber11];
      eWord = COMPOUND_RELATIVE_ADVERB_E[valueNumberC] + " " + S_E[valueNumber111].toLowerCase() + " " + VERB_COMPLETE_INTRANSITIVE_VERB_3E[valueNumberBB] + ", " + S_E[valueNumber1].toLowerCase() + " " + VERB_GENERAL_POSITIVE3_ALL_E[valueNumber11];
      break;
    case 2: // No s파
      kWord = "비록 " + COMPOUND_RELATIVE_ADVERB_2K[valueNumberC] + NoS_2K[valueNumber2] + " " + VERB_COMPLETE_INTRANSITIVE_CONCESSIVE_VERB_K[valueNumberBB] + ", " + S_K[valueNumber1] + " " + VERB_GENERAL_POSITIVE_ALL[valueNumber11];
      eWord = COMPOUND_RELATIVE_ADVERB_E[valueNumberC] + " " + NoS_2E[valueNumber2].toLowerCase() + " " + VERB_COMPLETE_INTRANSITIVE_VERB_E[valueNumberBB] + ", " + S_E[valueNumber1].toLowerCase() + " " + VERB_GENERAL_POSITIVE3_ALL_E[valueNumber11];
      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1716() {
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1712();
      break;
    case 2:
      function1713();
      break;
    case 3:
      function1714();
      break;
    case 4:
      function1715();
      break;
  }
}
function function1717() {
  let chosenNumbers = Math.floor(Math.random() * 6) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1703g();
      break;
    case 2:
      function1704g();
      break;
    case 3:
      function1705();
      break;
    case 4:
      function1706();
      break;
    case 5:
      function1707();
      break;
    case 6:
      function1716();
      break;
  }
}

//function1801 ONE_SHOT_CONCEPT_K
function function1801() {
  let kWord = ONE_SHOT_CONCEPT_K[17];
  let eWord = ONE_SHOT_CONCEPT_E[17] + " - " + ONE_SHOT_CONCEPT_2E[17];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1801a SUBJUNCTIVE_K
function function1801a() {
  let valueNumber = Math.floor(Math.random() * SUBJUNCTIVE_K.length);
  let kWord = SUBJUNCTIVE_K[valueNumber];
  let eWord = SUBJUNCTIVE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}


//function1802 SUBJUNCTIVE_PAST_K
function function1802() {
  let valueNumber = Math.floor(Math.random() * SUBJUNCTIVE_PAST_K.length);
  let kWord = SUBJUNCTIVE_PAST_K[valueNumber];
  let eWord = SUBJUNCTIVE_PAST_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1802a SUBJUNCTIVE_AUXILIARY_K
function function1802a() {
  let valueNumber = Math.floor(Math.random() * SUBJUNCTIVE_AUXILIARY_K.length);
  let kWord = SUBJUNCTIVE_AUXILIARY_K[valueNumber];
  let eWord = SUBJUNCTIVE_AUXILIARY_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1802b SUBJUNCTIVE_AUXILIARY_WOULD_K
function function1802b() {
  let valueNumber = Math.floor(Math.random() * VERB_SENTENCE_FORM_1_E.length);
  let valueNumber1 = Math.floor(Math.random() * VERB_GENERAL_POSITIVE_ALL.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let valueNumber3 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  // let kWord = "만약 " + "S" + "현재동사 뜻이 라면" + "," + "S" + "일텐데";
  let kWord = "만약 " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL[valueNumber1] + "면" + ", " + PRONOUN_PERSONAL_SUBJECTIVE_K[valueNumber3] + " " + SUBJUNCTIVE_AUXILIARY_WOULD_K[valueNumber];
  // let eWord = "If " + "S" + "과거동사" + "," + "S" + "would should could might" + VERB_SENTENCE_FORM_1_E[valueNumber];
  let eWord = "If " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber2] + " " + VERB_GENERAL_PAST_ALL_E[valueNumber1] + ", " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber3] + " would " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1802c SUBJUNCTIVE_AUXILIARY_SHOULD_K
function function1802c() {
  let valueNumber = Math.floor(Math.random() * VERB_SENTENCE_FORM_1_E.length);
  let valueNumber1 = Math.floor(Math.random() * VERB_GENERAL_POSITIVE_ALL.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let valueNumber3 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let kWord = "만약 " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL[valueNumber1] + "면" + ", " + PRONOUN_PERSONAL_SUBJECTIVE_K[valueNumber3] + " " + SUBJUNCTIVE_AUXILIARY_SHOULD_K[valueNumber];
  let eWord = "If " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber2] + " " + VERB_GENERAL_PAST_ALL_E[valueNumber1] + ", " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber3] + " should " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1802d SUBJUNCTIVE_AUXILIARY_COULD_K
function function1802d() {
  let valueNumber = Math.floor(Math.random() * VERB_SENTENCE_FORM_1_E.length);
  let valueNumber1 = Math.floor(Math.random() * VERB_GENERAL_POSITIVE_ALL.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let valueNumber3 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let kWord = "만약 " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL[valueNumber1] + "면" + ", " + PRONOUN_PERSONAL_SUBJECTIVE_K[valueNumber3] + " " + SUBJUNCTIVE_AUXILIARY_COULD_K[valueNumber];
  // let eWord = "If " + "S" + "과거동사" + "," + "S" + "would should could might" + VERB_SENTENCE_FORM_1_E[valueNumber];
  let eWord = "If " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber2] + " " + VERB_GENERAL_PAST_ALL_E[valueNumber1] + ", " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber3] + " could " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1802d SUBJUNCTIVE_AUXILIARY_MIGHT_K
function function1802e() {
  let valueNumber = Math.floor(Math.random() * VERB_SENTENCE_FORM_1_E.length);
  let valueNumber1 = Math.floor(Math.random() * VERB_GENERAL_POSITIVE_ALL.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let valueNumber3 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  // let kWord = "만약 " + "S" + "현재동사 뜻이 라면" + "," + "S" + "일텐데";
  let kWord = "만약 " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL[valueNumber1] + "면" + ", " + PRONOUN_PERSONAL_SUBJECTIVE_K[valueNumber3] + " 아마도 " + SUBJUNCTIVE_AUXILIARY_MIGHT_K[valueNumber];
  // let eWord = "If " + "S" + "과거동사" + "," + "S" + "would should could might" + VERB_SENTENCE_FORM_1_E[valueNumber];
  let eWord = "If " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber2] + " " + VERB_GENERAL_PAST_ALL_E[valueNumber1] + ", " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber3] + " might " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

function function1802f() {
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1802b();
      break;
    case 2:
      function1802c();
      break;
    case 3:
      function1802d();
      break;
    case 4:
      function1802e();
      break;
  }
}
//180function1803 SUBJUNCTIVE_PAST_PERFECT_K
function function1803() {
  let valueNumber = Math.floor(Math.random() * SUBJUNCTIVE_PAST_PERFECT_K.length);
  let kWord = SUBJUNCTIVE_PAST_PERFECT_K[valueNumber];
  let eWord = SUBJUNCTIVE_PAST_PERFECT_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1803g SUBJUNCTIVE_PAST_PERFECT_K
function function1803g() {
  let valueNumber = Math.floor(Math.random() * SUBJUNCTIVE_PAST_K.length);
  let kWord = "만약 " + "S" + "했더라면" + "," + "S" + "였을텐데";
  let eWord = "If " + "S" + " had " + "p.p.형태 동사" + "," + "S" + "would should could might" + " have " + "p.p.형태 동사";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1803b SUBJUNCTIVE_AUXILIARY_WOULD_K
function function1803b() {
  let valueNumber = Math.floor(Math.random() * VERB_SENTENCE_FORM_1_E.length);
  let valueNumber1 = Math.floor(Math.random() * VERB_GENERAL_PAST_ALL_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let valueNumber3 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  // let kWord = "만약 " + "S" + "했더라면" + "," + "S" + "였을텐데";
  let kWord = "만약 " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + VERB_GENERAL_PAST_ALL_K[valueNumber1] + "면" + ", \n" + PRONOUN_PERSONAL_SUBJECTIVE_K[valueNumber3] + " " + SUBJUNCTIVE_AUXILIARY_WOULD_HAVE_K[valueNumber];
  // let eWord = "If " + "S" + "과거동사" + "," + "S" + "would should could might" + VERB_SENTENCE_FORM_1_E[valueNumber];
  // let eWord = "If " + "S" + " had " + "p.p.형태 동사" + "," + "S" + "would should could might" + " have " + "p.p.형태 동사";
  let eWord = "If " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber2] + " had " + VERB_GENERAL_PAST_PARTICIPLE_ALL_E[valueNumber1] + ", \n" + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber3] + " would " + "have " + VERB_SENTENCE_FORM_1_PAST_PARTICIPLE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1803c SUBJUNCTIVE_AUXILIARY_SHOULD_K
function function1803c() {
  let valueNumber = Math.floor(Math.random() * VERB_SENTENCE_FORM_1_E.length);
  let valueNumber1 = Math.floor(Math.random() * VERB_GENERAL_PAST_ALL_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let valueNumber3 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let kWord = "만약 " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + VERB_GENERAL_PAST_ALL_K[valueNumber1] + "면" + ", \n" + PRONOUN_PERSONAL_SUBJECTIVE_K[valueNumber3] + " " + SUBJUNCTIVE_AUXILIARY_SHOULD_HAVE_K[valueNumber];
  let eWord = "If " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber2] + " had " + VERB_GENERAL_PAST_PARTICIPLE_ALL_E[valueNumber1] + ", \n" + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber3] + " should " + "have " + VERB_SENTENCE_FORM_1_PAST_PARTICIPLE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1803d SUBJUNCTIVE_AUXILIARY_COULD_K
function function1803d() {
  let valueNumber = Math.floor(Math.random() * VERB_SENTENCE_FORM_1_E.length);
  let valueNumber1 = Math.floor(Math.random() * VERB_GENERAL_PAST_ALL_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let valueNumber3 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let kWord = "만약 " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + VERB_GENERAL_PAST_ALL_K[valueNumber1] + "면" + ", \n" + PRONOUN_PERSONAL_SUBJECTIVE_K[valueNumber3] + " " + SUBJUNCTIVE_AUXILIARY_COULD_HAVE_K[valueNumber];
  // let eWord = "If " + "S" + "과거동사" + "," + "S" + "would should could might" + VERB_SENTENCE_FORM_1_E[valueNumber];
  let eWord = "If " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber2] + " had " + VERB_GENERAL_PAST_PARTICIPLE_ALL_E[valueNumber1] + ", \n" + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber3] + " could " + "have " + VERB_SENTENCE_FORM_1_PAST_PARTICIPLE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1803d SUBJUNCTIVE_AUXILIARY_MIGHT_K
function function1803e() {
  let valueNumber = Math.floor(Math.random() * VERB_SENTENCE_FORM_1_E.length);
  let valueNumber1 = Math.floor(Math.random() * VERB_GENERAL_PAST_ALL_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let valueNumber3 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  // let kWord = "만약 " + "S" + "현재동사 뜻이 라면" + "," + "S" + "일텐데";
  let kWord = "만약 " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + VERB_GENERAL_PAST_ALL_K[valueNumber1] + "면" + ", \n" + PRONOUN_PERSONAL_SUBJECTIVE_K[valueNumber3] + " 아마도 " + SUBJUNCTIVE_AUXILIARY_MIGHT_HAVE_K[valueNumber];
  // let eWord = "If " + "S" + "과거동사" + "," + "S" + "would should could might" + VERB_SENTENCE_FORM_1_E[valueNumber];
  let eWord = "If " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber2] + " had " + VERB_GENERAL_PAST_PARTICIPLE_ALL_E[valueNumber1] + ", \n" + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber3] + " might " + "have " + VERB_SENTENCE_FORM_1_PAST_PARTICIPLE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

function function1803f() {
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1803b();
      break;
    case 2:
      function1803c();
      break;
    case 3:
      function1803d();
      break;
    case 4:
      function1803e();
      break;
  }
}
function function1803g() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1802f();
      break;
    case 2:
      function1803f();
      break;
  }
}
//1804 SUBJUNCTIVE_I_WISH_K
function function1804() {
  let valueNumber = Math.floor(Math.random() * SUBJUNCTIVE_I_WISH_K.length);
  let kWord = SUBJUNCTIVE_I_WISH_K[valueNumber];
  let eWord = SUBJUNCTIVE_I_WISH_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1804 SUBJUNCTIVE_I_WISH_K
function function1804a() {
  let valueNumber1 = Math.floor(Math.random() * VERB_GENERAL_POSITIVE_ALL.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL[valueNumber1] + "면" + " 좋을텐데";
  let eWord = "I wish " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber2] + " " + VERB_GENERAL_PAST_ALL_E[valueNumber1];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1804 SUBJUNCTIVE_I_WISH_K
function function1804b() {
  let valueNumber = Math.floor(Math.random() * VERB_GENERAL_PAST_PARTICIPLE_ALL_E.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + VERB_GENERAL_PAST_ALL_K[valueNumber] + "면" + " 좋을텐데";
  let eWord = "I wish " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber2] + " " + " had " + VERB_GENERAL_PAST_PARTICIPLE_ALL_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1804 SUBJUNCTIVE_I_WISH_K
function function1804c() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1804a();
      break;
    case 2:
      function1804b();
      break;
  }
}
//1805 SUBJUNCTIVE_AS_IF_K
function function1805() {
  let valueNumber = Math.floor(Math.random() * SUBJUNCTIVE_AS_IF_K.length);
  let kWord = SUBJUNCTIVE_AS_IF_K[valueNumber];
  let eWord = SUBJUNCTIVE_AS_IF_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1806 SUBJUNCTIVE_MIXED_K
function function1806() {
  let valueNumber = Math.floor(Math.random() * SUBJUNCTIVE_MIXED_K.length);
  let kWord = SUBJUNCTIVE_MIXED_K[valueNumber];
  let eWord = SUBJUNCTIVE_MIXED_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1807 SUBJUNCTIVE_MIXED_K
function function1807() {
  let valueNumber = Math.floor(Math.random() * SUBJUNCTIVE_PRESENT_K.length);
  let kWord = SUBJUNCTIVE_PRESENT_K[valueNumber];
  let eWord = SUBJUNCTIVE_PRESENT_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1803b SUBJUNCTIVE_AUXILIARY_WOULD_K
function function1803b() {
  let valueNumber = Math.floor(Math.random() * VERB_SENTENCE_FORM_1_E.length);
  let valueNumber1 = Math.floor(Math.random() * VERB_GENERAL_PAST_ALL_K.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let valueNumber3 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  // let kWord = "만약 " + "S" + "했더라면" + "," + "S" + "였을텐데";
  let kWord = "만약 " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + VERB_GENERAL_PAST_ALL_K[valueNumber1] + "면" + ", \n" + PRONOUN_PERSONAL_SUBJECTIVE_K[valueNumber3] + " " + SUBJUNCTIVE_AUXILIARY_WOULD_HAVE_K[valueNumber];
  // let eWord = "If " + "S" + "과거동사" + "," + "S" + "would should could might" + VERB_SENTENCE_FORM_1_E[valueNumber];
  // let eWord = "If " + "S" + " had " + "p.p.형태 동사" + "," + "S" + "would should could might" + " have " + "p.p.형태 동사";
  let eWord = "If " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber2] + " had " + VERB_GENERAL_PAST_PARTICIPLE_ALL_E[valueNumber1] + ", \n" + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber3] + " would " + "have " + VERB_SENTENCE_FORM_1_PAST_PARTICIPLE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1806b SUBJUNCTIVE_AUXILIARY_WOULD_K
function function1806b() {
  let valueNumber = Math.floor(Math.random() * VERB_SENTENCE_FORM_1_E.length);
  let valueNumber1 = Math.floor(Math.random() * VERB_GENERAL_POSITIVE_ALL.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let valueNumber3 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  // let kWord = "만약 " + "S" + "현재동사 뜻이 라면" + "," + "S" + "일텐데";
  let kWord = "만약 " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + VERB_GENERAL_PAST_ALL_K[valueNumber1] + "면" + ", " + PRONOUN_PERSONAL_SUBJECTIVE_K[valueNumber3] + " " + SUBJUNCTIVE_AUXILIARY_WOULD_K[valueNumber];
  // let eWord = "If " + "S" + "과거동사" + "," + "S" + "would should could might" + VERB_SENTENCE_FORM_1_E[valueNumber];
  let eWord = "If " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber2] + " had " + VERB_GENERAL_PAST_PARTICIPLE_ALL_E[valueNumber1] + ", " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber3] + " would " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1806c SUBJUNCTIVE_AUXILIARY_SHOULD_K
function function1806c() {
  let valueNumber = Math.floor(Math.random() * VERB_SENTENCE_FORM_1_E.length);
  let valueNumber1 = Math.floor(Math.random() * VERB_GENERAL_POSITIVE_ALL.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let valueNumber3 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let kWord = "만약 " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + VERB_GENERAL_PAST_ALL_K[valueNumber1] + "면" + ", " + PRONOUN_PERSONAL_SUBJECTIVE_K[valueNumber3] + " " + SUBJUNCTIVE_AUXILIARY_SHOULD_K[valueNumber];
  let eWord = "If " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber2] + " had " + VERB_GENERAL_PAST_PARTICIPLE_ALL_E[valueNumber1] + ", " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber3] + " should " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1806d SUBJUNCTIVE_AUXILIARY_COULD_K
function function1806d() {
  let valueNumber = Math.floor(Math.random() * VERB_SENTENCE_FORM_1_E.length);
  let valueNumber1 = Math.floor(Math.random() * VERB_GENERAL_POSITIVE_ALL.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let valueNumber3 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let kWord = "만약 " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + VERB_GENERAL_PAST_ALL_K[valueNumber1] + "면" + ", " + PRONOUN_PERSONAL_SUBJECTIVE_K[valueNumber3] + " " + SUBJUNCTIVE_AUXILIARY_COULD_K[valueNumber];
  // let eWord = "If " + "S" + "과거동사" + "," + "S" + "would should could might" + VERB_SENTENCE_FORM_1_E[valueNumber];
  let eWord = "If " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber2] + " had " + VERB_GENERAL_PAST_PARTICIPLE_ALL_E[valueNumber1] + ", " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber3] + " could " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1806d SUBJUNCTIVE_AUXILIARY_MIGHT_K
function function1806e() {
  let valueNumber = Math.floor(Math.random() * VERB_SENTENCE_FORM_1_E.length);
  let valueNumber1 = Math.floor(Math.random() * VERB_GENERAL_POSITIVE_ALL.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  let valueNumber3 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_2K.length);
  // let kWord = "만약 " + "S" + "현재동사 뜻이 라면" + "," + "S" + "일텐데";
  let kWord = "만약 " + PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + VERB_GENERAL_PAST_ALL_K[valueNumber1] + "면" + ", " + PRONOUN_PERSONAL_SUBJECTIVE_K[valueNumber3] + " 아마도 " + SUBJUNCTIVE_AUXILIARY_MIGHT_K[valueNumber];
  // let eWord = "If " + "S" + "과거동사" + "," + "S" + "would should could might" + VERB_SENTENCE_FORM_1_E[valueNumber];
  let eWord = "If " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber2] + " had " + VERB_GENERAL_PAST_PARTICIPLE_ALL_E[valueNumber1] + ", " + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E[valueNumber3] + " might " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

function function1806f() {
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1806b();
      break;
    case 2:
      function1806c();
      break;
    case 3:
      function1806d();
      break;
    case 4:
      function1806e();
      break;
  }
}


//function1808 SUBJUNCTIVE_FUTURE_K       
function function1808() {
  let valueNumber = Math.floor(Math.random() * SUBJUNCTIVE_FUTURE_K.length);
  let kWord = SUBJUNCTIVE_FUTURE_K[valueNumber];
  let eWord = SUBJUNCTIVE_FUTURE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1809 SUBJUNCTIVE_SUGGEST_K       
function function1809() {
  let valueNumber = Math.floor(Math.random() * SUBJUNCTIVE_SUGGEST_K.length);
  let kWord = SUBJUNCTIVE_SUGGEST_K[valueNumber];
  let eWord = SUBJUNCTIVE_SUGGEST_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1810 SUBJUNCTIVE_OTHERS_K
function function1810() {
  let valueNumber = Math.floor(Math.random() * SUBJUNCTIVE_OTHERS_K.length);
  let kWord = SUBJUNCTIVE_OTHERS_K[valueNumber];
  let eWord = SUBJUNCTIVE_OTHERS_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function1811() {
  let chosenNumbers = Math.floor(Math.random() * 10) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1809();
      break;
    case 2:
      function1808();
      break;
    case 3:
      function1807();
      break;
    case 4:
      function1806f();
      break;
    case 5:
      function1805();
      break;
    case 6:
      function1804c();
      break;
    case 7:
      function1803g();
      break;
    case 8:
      function1802f();
      break;
    case 9:
      function1802a();
      break;
    case 10:
      function1810();
      break;
  }
}
//function1901 ONE_SHOT_CONCEPT_K
function function1901() {
  let valueNumber = Math.floor(Math.random() * INTERROGATIVE_K.length);
  let kWord = INTERROGATIVE_K[valueNumber];
  let eWord = INTERROGATIVE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1901a INTERROGATIVE_K
function function1901a() {
  let valueNumber = Math.floor(Math.random() * INTERROGATIVE_Ka.length);
  let kWord = INTERROGATIVE_Ka[valueNumber];
  let eWord = INTERROGATIVE_Ea[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function1902 INTERROGATIVE_USAGE_K
function function1902() {
  let valueNumber = Math.floor(Math.random() * INTERROGATIVE_USAGE_K.length);
  let kWord = INTERROGATIVE_USAGE_K[valueNumber];
  let eWord = INTERROGATIVE_USAGE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1903 INTERROGATIVE_PRONOUN_K
function function1903() {
  let valueNumber = Math.floor(Math.random() * INTERROGATIVE_PRONOUN_K.length);
  let kWord = INTERROGATIVE_PRONOUN_K[valueNumber];
  let eWord = INTERROGATIVE_PRONOUN_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1903b INTERROGATIVE_PRONOUN_BASIC_K
function function1903b() {
  let valueNumber = Math.floor(Math.random() * INTERROGATIVE_PRONOUN_BASIC_K.length);
  let kWord = INTERROGATIVE_PRONOUN_BASIC_K[valueNumber];
  let eWord = INTERROGATIVE_PRONOUN_BASIC_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1904 INTERROGATIVE_ADVERB_K
function function1904() {
  let valueNumber = Math.floor(Math.random() * INTERROGATIVE_ADVERB_K.length);
  let kWord = INTERROGATIVE_ADVERB_K[valueNumber];
  let eWord = INTERROGATIVE_ADVERB_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function1905 INTERROGATIVE_HOW_K
function function1905() {
  let valueNumber = Math.floor(Math.random() * INTERROGATIVE_HOW_K.length);
  let kWord = INTERROGATIVE_HOW_K[valueNumber];
  let eWord = INTERROGATIVE_HOW_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1906 INTERROGATIVE_ALTERNATIVE_NEGATIVE_K
function function1906() {
  let valueNumber = Math.floor(Math.random() * INTERROGATIVE_ALTERNATIVE_NEGATIVE_K.length);
  let kWord = INTERROGATIVE_ALTERNATIVE_NEGATIVE_K[valueNumber];
  let eWord = INTERROGATIVE_ALTERNATIVE_NEGATIVE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1907 TAG_QUESTION_K
function function1907() {
  let valueNumber = Math.floor(Math.random() * TAG_QUESTION_K.length);
  let kWord = TAG_QUESTION_K[valueNumber];
  let eWord = TAG_QUESTION_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1908 INDIRECT_QUESTION_K
function function1908() {
  let valueNumber = Math.floor(Math.random() * INDIRECT_QUESTION_K.length);
  let kWord = INDIRECT_QUESTION_K[valueNumber];
  let eWord = INDIRECT_QUESTION_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//1909 INTERROGATIVE_WHAT_HOW_K
function function1909() {
  let valueNumber = Math.floor(Math.random() * INTERROGATIVE_WHAT_HOW_K.length);
  let kWord = INTERROGATIVE_WHAT_HOW_K[valueNumber];
  let eWord = INTERROGATIVE_WHAT_HOW_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

function function1910() {
  let chosenNumbers = Math.floor(Math.random() * 9) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function1909();
      break;
    case 2:
      function1908();
      break;
    case 3:
      function1907();
      break;
    case 4:
      function1906();
      break;
    case 5:
      function1905();
      break;
    case 6:
      function1904();
      break;
    case 7:
      function1903();
      break;
    case 8:
      function1902();
      break;
    case 9:
      function1901();
      break;
    case 10:
      function1903b();
      break;
  }
}

//function2001 ONE_SHOT_CONCEPT_K
function function2001() {
  let kWord = ONE_SHOT_CONCEPT_K[19];
  let eWord = ONE_SHOT_CONCEPT_E[19] + " - " + ONE_SHOT_CONCEPT_2E[19];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2001a INTERROGATIVE_WHAT_HOW_K
function function2001a() {
  let valueNumber = Math.floor(Math.random() * AGREEMENT_K.length);
  let kWord = AGREEMENT_K[valueNumber];
  let eWord = AGREEMENT_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//2002 AGREEMENT_ON_NUMBER_K
function function2002() {
  let valueNumber = Math.floor(Math.random() * AGREEMENT_ON_NUMBER_K.length);
  let kWord = AGREEMENT_ON_NUMBER_K[valueNumber];
  let eWord = AGREEMENT_ON_NUMBER_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//2003 AGREEMENT_ON_NUMBER_K
function function2003() {
  let valueNumber = Math.floor(Math.random() * AGREEMENT_ON_NUMBER_2K.length);
  let kWord = AGREEMENT_ON_NUMBER_2K[valueNumber];
  let eWord = AGREEMENT_ON_NUMBER_2E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2003v2 AGREEMENT_ON_NUMBER_3E
function function2003v2() {
  let valueNumber = Math.floor(Math.random() * AGREEMENT_ON_NUMBER_3E.length);
  let kWord = AGREEMENT_ON_NUMBER_3K[valueNumber];
  let eWord = "B에 일치";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//2005 AGREEMENT_TENSE_K
function function2004() {
  let valueNumber = Math.floor(Math.random() * AGREEMENT_TENSE_K.length);
  let kWord = AGREEMENT_TENSE_K[valueNumber];
  let eWord = AGREEMENT_TENSE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

function function2005() {
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function2002();
      break;
    case 2:
      function2003();
      break;
    case 3:
      function2003v2();
      break;
    case 4:
      function2004();
      break;
  }
}

//function2101 ONE_SHOT_CONCEPT_K
function function2101() {
  let kWord = ONE_SHOT_CONCEPT_K[20];
  let eWord = ONE_SHOT_CONCEPT_E[20] + " - " + ONE_SHOT_CONCEPT_2E[20];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2101a SPEECH_K
function function2101a() {
  let valueNumber = Math.floor(Math.random() * SPEECH_K.length);
  let kWord = SPEECH_K[valueNumber];
  let eWord = SPEECH_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//2102 SPEECH_QUOTED_REPORTED_K
function function2102() {
  let valueNumber = Math.floor(Math.random() * SPEECH_QUOTED_REPORTED_K.length);
  let kWord = SPEECH_QUOTED_REPORTED_K[valueNumber];
  let eWord = SPEECH_QUOTED_REPORTED_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//2103 SPEECH_ADVERB_PHRASE_K
function function2103() {
  let valueNumber = Math.floor(Math.random() * SPEECH_ADVERB_PHRASE_K.length);
  let kWord = SPEECH_ADVERB_PHRASE_K[valueNumber];
  let eWord = SPEECH_ADVERB_PHRASE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//2104 SPEECH_INTERROGATIVE_K
function function2104() {
  let valueNumber = Math.floor(Math.random() * SPEECH_INTERROGATIVE_K.length);
  let kWord = SPEECH_INTERROGATIVE_K[valueNumber];
  let eWord = SPEECH_INTERROGATIVE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//2105 SPEECH_IMPERATIVE_K
function function2105() {
  let valueNumber = Math.floor(Math.random() * SPEECH_IMPERATIVE_K.length);
  let kWord = SPEECH_IMPERATIVE_K[valueNumber];
  let eWord = SPEECH_IMPERATIVE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function2106() {
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function2102();
      break;
    case 2:
      function2103();
      break;
    case 3:
      function2104();
      break;
    case 4:
      function2105();
      break;
  }
}


//function2201 SPECIAL_SYNTAX
function function2201() {
  let kWord = ONE_SHOT_CONCEPT_K[21];
  let eWord = ONE_SHOT_CONCEPT_E[21] + " - " + ONE_SHOT_CONCEPT_2E[21];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
SPECIAL_SYNTAX_K
//function2202 SPECIAL_SYNTAX_EMPHASIS_K
function function2202() {
  let valueNumber = Math.floor(Math.random() * SPECIAL_SYNTAX_EMPHASIS_K.length);
  let kWord = SPECIAL_SYNTAX_EMPHASIS_K[valueNumber];
  let eWord = SPECIAL_SYNTAX_EMPHASIS_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2203 SPECIAL_SYNTAX_IT_THAT_K
function function2203() {
  let valueNumber = Math.floor(Math.random() * SPECIAL_SYNTAX_IT_THAT_K.length);
  let kWord = SPECIAL_SYNTAX_IT_THAT_K[valueNumber];
  let eWord = SPECIAL_SYNTAX_IT_THAT_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2204 SPECIAL_SYNTAX_INVERSION_K
function function2204() {
  let valueNumber = Math.floor(Math.random() * SPECIAL_SYNTAX_INVERSION_K.length);
  let kWord = SPECIAL_SYNTAX_INVERSION_K[valueNumber];
  let eWord = SPECIAL_SYNTAX_INVERSION_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2205 SPECIAL_SYNTAX_SO_NEITHER_K
function function2205() {
  let valueNumber = Math.floor(Math.random() * SPECIAL_SYNTAX_SO_NEITHER_K.length);
  let kWord = SPECIAL_SYNTAX_SO_NEITHER_K[valueNumber];
  let eWord = SPECIAL_SYNTAX_SO_NEITHER_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2206 SPECIAL_SYNTAX_OMIT_K
function function2206() {
  let valueNumber = Math.floor(Math.random() * SPECIAL_SYNTAX_OMIT_K.length);
  let kWord = SPECIAL_SYNTAX_OMIT_K[valueNumber];
  let eWord = SPECIAL_SYNTAX_OMIT_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

function function2207() {
  let chosenNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function2202();
      break;
    case 2:
      function2203();
      break;
    case 3:
      function2204();
      break;
    case 4:
      function2205();
      break;
  }
}


SPECIAL_SYNTAX_INANIMATES_SUBJECT_K

//function2301 ONE_SHOT_CONCEPT_K
function function2301() {
  let kWord = ONE_SHOT_CONCEPT_K[22];
  let eWord = ONE_SHOT_CONCEPT_E[22] + " - " + ONE_SHOT_CONCEPT_2E[22];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2301a SENTENCE_BASIC_K
function function2301a() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_BASIC_K.length);
  let kWord = SENTENCE_BASIC_K[valueNumber];
  let eWord = SENTENCE_BASIC_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2302 SENTENCE_BASIC_2K
function function2302() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_BASIC_2K.length);
  let kWord = SENTENCE_BASIC_2K[valueNumber];
  let eWord = SENTENCE_BASIC_2E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2303 SENTENCE_EXTENDED_K
function function2303() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_EXTENDED_K.length);
  let kWord = SENTENCE_EXTENDED_K[valueNumber];
  let eWord = SENTENCE_EXTENDED_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function2304() {
  let chosenNumbers = Math.floor(Math.random() * 3) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function2301a();
      break;
    case 2:
      function2302();
      break;
    case 3:
      function2303();
      break;
  }
}
//function2401 ONE_SHOT_CONCEPT_K
function function2401() {
  let kWord = ONE_SHOT_CONCEPT_K[23];
  let eWord = ONE_SHOT_CONCEPT_E[23] + " - " + ONE_SHOT_CONCEPT_2E[23];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2401a SENTENCE_TYPE_K
function function2401a() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_TYPE_K.length);
  let kWord = SENTENCE_TYPE_K[valueNumber];
  let eWord = SENTENCE_TYPE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2402 EXCLAMATORY_K
function function2402() {
  let valueNumber = Math.floor(Math.random() * EXCLAMATORY_K.length);
  let kWord = EXCLAMATORY_K[valueNumber];
  let eWord = EXCLAMATORY_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//be동사 평서문
function function2402howA() {
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;
  switch (chooseNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * THINGS_S_K.length);
      let valueNumber11 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      kWord = THINGS_S_K[valueNumber1] + " 정말 " + ADJECTIVE_POSITIVE_THINGS[valueNumber11]
        + "\n " + THINGS_S_K[valueNumber1] + " 매우 " + ADJECTIVE_POSITIVE_THINGS[valueNumber11].substring(0, ADJECTIVE_POSITIVE_THINGS[valueNumber11].length - 1) + "구나!";
      eWord = THINGS_S_Be_E[valueNumber1] + " very " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber11] + "."
        + "\n How " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber11] + " " + THINGS_small_S_Be_E[valueNumber1] + "!";
      console.log(chooseNumbers, valueNumber1, valueNumber11)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 2:
      let valueNumber2 = Math.floor(Math.random() * THINGS_NoS_K.length);
      let valueNumber22 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
      kWord = THINGS_NoS_K[valueNumber2] + " 정말 " + ADJECTIVE_POSITIVE_THINGS[valueNumber22]
        + "\n " + THINGS_NoS_K[valueNumber2] + " 매우 " + ADJECTIVE_POSITIVE_THINGS[valueNumber22].substring(0, ADJECTIVE_POSITIVE_THINGS[valueNumber22].length - 1) + "구나!";

      eWord = THINGS_NoS_Be_E[valueNumber2] + " very " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + "."
        + "\n How " + ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + " " + THINGS_small_NoS_Be_E[valueNumber2] + "!";
      console.log(chooseNumbers, valueNumber2, valueNumber22)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 3:
      let valueNumber3 = Math.floor(Math.random() * PEOPLE_S_K.length);
      let valueNumber33 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      kWord = PEOPLE_S_K[valueNumber3] + " 정말 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber33]
        + "\n " + PEOPLE_S_K[valueNumber3] + " 매우 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber33].substring(0, ADJECTIVE_POSITIVE_PEOPLE[valueNumber33].length - 1) + "구나!";

      eWord = PEOPLE_S_Be_E[valueNumber3] + " very " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber33] + "."
        + "\n How " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber33] + " " + PEOPLE_small_S_Be_E[valueNumber3] + "!";

      console.log(chooseNumbers, valueNumber3, valueNumber33)

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
    case 4:
      let valueNumber4 = Math.floor(Math.random() * PEOPLE_NoS_K.length);
      let valueNumber44 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE.length);
      kWord = PEOPLE_NoS_K[valueNumber4] + " 정말 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber44]
        + "\n " + PEOPLE_NoS_K[valueNumber4] + " 매우 " + ADJECTIVE_POSITIVE_PEOPLE[valueNumber44].substring(0, ADJECTIVE_POSITIVE_PEOPLE[valueNumber44].length - 1) + "구나!";

      eWord = PEOPLE_NoS_Be_E[valueNumber4] + " very " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber44] + "."
        + "\n How " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber44] + " " + PEOPLE_small_NoS_Be_E[valueNumber4] + "!";

      console.log(chooseNumbers, valueNumber4, valueNumber44)
      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;
  }
}
//일반동사 평서문
function function2402howB() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  let kWord;
  let eWord;
  let valueNumber = Math.floor(Math.random() * adjectiveADVERB_2K.length);

  let valueNumber1 = Math.floor(Math.random() * S_K.length);
  let valueNumber11 = Math.floor(Math.random() * VERB_GENERAL_POSITIVE_ALL.length);
  let valueNumber2 = Math.floor(Math.random() * NoS_K.length);
  switch (chooseNumbers) {
    case 1: // s파
      kWord = S_K[valueNumber1] + " 정말 " + adjectiveADVERB_2K[valueNumber] + " " + VERB_GENERAL_POSITIVE_ALL[valueNumber11];
      eWord = S_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE3_ALL_E[valueNumber11] + " very " + adjectiveADVERB_2E[valueNumber] + "."
        + "\n How " + adjectiveADVERB_2E[valueNumber] + " " + small_S_E[valueNumber1] + " " + VERB_GENERAL_POSITIVE3_ALL_E[valueNumber11] + "!";

      break;
    case 2: // No s파
      kWord = NoS_K[valueNumber2] + " 정말 " + adjectiveADVERB_2K[valueNumber] + " " + VERB_GENERAL_POSITIVE_ALL[valueNumber11];
      eWord = NoS_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[valueNumber11] + " very " + adjectiveADVERB_2E[valueNumber] + "."
        + "\n How " + adjectiveADVERB_2E[valueNumber] + " " + small_NoS_E[valueNumber2] + " " + VERB_GENERAL_POSITIVE_ALL_E[valueNumber11] + "!";

      break;
  }
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}


function function2402how() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function2402howA();
      break;
    case 2:
      function2402howB();
      break;
  }
}







//감탄문What Be동사
function function2402whatA() {
  let chooseNumbers1 = Math.floor(Math.random() * 2) + 1;
  let chooseNumbers2 = chooseNumbers1;
  let chooseNumbers3 = chooseNumbers1;
  let valueNumber4 = Math.floor(Math.random() * noun3animalE.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber22 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
  let kWord;
  let eWord;
  // let valueNumber44 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE_E.length);
  // + ADJECTIVE_POSITIVE_PEOPLE[valueNumber44]  + " "
  // + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber44] + " "
  switch (chooseNumbers1) {
    case 1:
      kWord = ADJECTIVE_POSITIVE_THINGS_K[valueNumber22] + " " + "하나의 " + noun1personK[valueNumber3];
      eWord = ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + " " + noun1personE[valueNumber3];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 2:
      kWord = ADJECTIVE_POSITIVE_THINGS_K[valueNumber22] + " " + noun1personK[valueNumber3] + "들";
      eWord = ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + " " + noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }

      break;

  }
  // 하나 or 여러개

  switch (chooseNumbers2) {
    case 1:
      kWord = ADJECTIVE_POSITIVE_THINGS_K[valueNumber22] + " " + noun3animalK[valueNumber4] + " 한 마리";
      eWord = ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + " " + noun3animalE[valueNumber4];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 2:
      kWord = ADJECTIVE_POSITIVE_THINGS_K[valueNumber22] + " " + noun3animalK[valueNumber4] + "들";
      eWord = ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + " " + noun3animalE[valueNumber4];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }

      break;
  }
  let valueNumberA = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_K.length);
  let valueNumberAAA = Math.floor(Math.random() * noun2objectK.length);
  let valueNumberCCC = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_K.length);
  let valueNumberB = Math.floor(Math.random() * NoS_K.length);
  let valueNumberBB = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE_K.length);
  let valueNumber1 = Math.floor(Math.random() * THINGS_S_K.length);
  let valueNumber2 = Math.floor(Math.random() * THINGS_small_S_Be_E.length);

  // ADJECTIVE_POSITIVE_PEOPLE_K
  // ADJECTIVE_POSITIVE_THINGS_K
  //noun1personK
  // noun3animalK
  //noun2objectK

  switch (chooseNumbers3) {
    //+ " ( " + kWordObject + " " + ADJECTIVE_POSITIVE_PEOPLE_K[valueNumberBB] + " ) " 
    //+ " ( whose " + eWordObject + " is " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumberBB] + " ) "
    //+ " ( " + kWordObject + " " + ADJECTIVE_POSITIVE_PEOPLE_K[valueNumberBB] + " ) "
    // + " ( whose " + eWordObject + " are " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumberBB] + " ) "
    case 1: // 3s파 - 사람 // noun3animalK 단수로
      kWord = THINGS_S_K[valueNumber1] + " 정말 " + kWord + "이구나 !";
      eWord = "What " + eWord + " (" + THINGS_small_S_Be_E[valueNumber2] + ") !";
      break;
    case 2: // No s파 - 사람 // noun3animalE 복수로
      kWord = THINGS_NoS_K[valueNumber1] + " 정말 " + kWord + "이구나 !";
      eWord = "What " + eWord + " (" + THINGS_small_NoS_Be_E[valueNumber2] + ") !";
      break;

  }
  console.log(chooseNumbers1)
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}





//감탄문What일반동사
function function2402whatB() {
  let chooseNumbers1 = Math.floor(Math.random() * 2) + 1;
  let chooseNumbers2 = chooseNumbers1;
  let chooseNumbers3 = chooseNumbers1;
  let valueNumber4 = Math.floor(Math.random() * noun3animalE.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber22 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
  let kWord;
  let eWord;
  // let valueNumber44 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE_E.length);
  // + ADJECTIVE_POSITIVE_PEOPLE[valueNumber44]  + " "
  // + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber44] + " "
  switch (chooseNumbers1) {
    case 1:
      kWord = ADJECTIVE_POSITIVE_THINGS_K[valueNumber22] + " " + "하나의 " + noun1personK[valueNumber3];
      eWord = ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + " " + noun1personE[valueNumber3];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 2:
      kWord = ADJECTIVE_POSITIVE_THINGS_K[valueNumber22] + " " + noun1personK[valueNumber3] + "들";
      eWord = ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + " " + noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }

      break;

  }
  // 하나 or 여러개

  switch (chooseNumbers2) {
    case 1:
      kWord = ADJECTIVE_POSITIVE_THINGS_K[valueNumber22] + " " + noun3animalK[valueNumber4] + " 하나를 ";
      eWord = ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + " " + noun3animalE[valueNumber4];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 2:
      kWord = ADJECTIVE_POSITIVE_THINGS_K[valueNumber22] + " " + noun3animalK[valueNumber4] + "들을 ";
      eWord = ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + " " + noun3animalE[valueNumber4];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }

      break;
  }
  let valueNumberA = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_K.length);
  let valueNumberAAA = Math.floor(Math.random() * noun2objectK.length);
  let valueNumberCCC = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_K.length);
  let valueNumberB = Math.floor(Math.random() * NoS_K.length);
  let valueNumberBB = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE_K.length);

  // ADJECTIVE_POSITIVE_PEOPLE_K
  // ADJECTIVE_POSITIVE_THINGS_K
  //noun1personK
  // noun3animalK
  //noun2objectK

  switch (chooseNumbers3) {
    //+ " ( " + kWordObject + " " + ADJECTIVE_POSITIVE_PEOPLE_K[valueNumberBB] + " ) " 
    //+ " ( whose " + eWordObject + " is " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumberBB] + " ) "
    //+ " ( " + kWordObject + " " + ADJECTIVE_POSITIVE_PEOPLE_K[valueNumberBB] + " ) "
    // + " ( whose " + eWordObject + " are " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumberBB] + " ) "
    case 1: // 3s파 - 사람 // noun3animalK 단수로
      kWord = "정말 " + kWord + " (" + PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_K[valueNumberA] + " " + VERB_SENTENCE_FORM_3_K[valueNumberAA].slice(0, -1) + "는구나) !";
      eWord = "What " + eWord + " (" + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_SINGULAR_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + ") !";
      break;
    case 2: // No s파 - 사람 // noun3animalE 복수로
      kWord = "정말 " + kWord + " (" + PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K[valueNumberA] + " " + VERB_SENTENCE_FORM_3_K[valueNumberAA].slice(0, -1) + "는구나) !";
      eWord = "What " + eWord + " (" + PRONOUN_PERSONAL_SUBJECTIVE_SMALL_PLURAL_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_E[valueNumberAA] + ") !";
      break;

  }
  console.log(chooseNumbers1)
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}



function function2402what() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function2402whatA();
      break;
    case 2:
      function2402whatB();
      break;
  }
}

function function2402c() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function2402how();
      break;
    case 2:
      function2402what();
      break;
  }
}


//function2403 EXCLAMATORY_SOLUTION_K
function function2403() {
  let valueNumber = Math.floor(Math.random() * EXCLAMATORY_SOLUTION_K.length);
  let kWord = EXCLAMATORY_SOLUTION_K[valueNumber];
  let eWord = EXCLAMATORY_SOLUTION_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2404b SENTENCE_IMPERATIVE_Basic_K
function function2404b() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_IMPERATIVE_Basic_K.length);
  let kWord = SENTENCE_IMPERATIVE_Basic_K[valueNumber];
  let eWord = SENTENCE_IMPERATIVE_Basic_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2404 SENTENCE_IMPERATIVE_K
function function2404() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_IMPERATIVE_K.length);
  let kWord = SENTENCE_IMPERATIVE_K[valueNumber];
  let eWord = SENTENCE_IMPERATIVE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2404v2 SENTENCE_IMPERATIVE_K
function function2404v2() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_IMPERATIVE_2K.length);
  let kWord = SENTENCE_IMPERATIVE_2K[valueNumber] + "!";
  let eWord = SENTENCE_IMPERATIVE_2E[valueNumber] + "!";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2404vN SENTENCE_IMPERATIVE_K
function function2404vN() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_IMPERATIVE_KvN.length);
  let kWord = SENTENCE_IMPERATIVE_KvN[valueNumber] + "!";
  let eWord = "Don't " + SENTENCE_IMPERATIVE_EvN[valueNumber] + "!";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2404vN SENTENCE_IMPERATIVE_K
function function2404vN2() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_IMPERATIVE_KvN.length);
  let kWord = "절대 " + SENTENCE_IMPERATIVE_KvN[valueNumber] + "!";
  let eWord = "Never " + SENTENCE_IMPERATIVE_EvN[valueNumber] + "!";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function2404vN3() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log("chooseNumbers = ", chooseNumbers);

  switch (chooseNumbers) {
    case 1:
      function2404vN();
      break;

    case 2:
      function2404vN2();
      break;
  }
}
function function2404v3() {
  let chooseNumbers = Math.floor(Math.random() * 3) + 1;
  console.log("chooseNumbers = ", chooseNumbers);

  switch (chooseNumbers) {
    case 1:
      function2404v2();
      break;

    case 2:
      function2404vN();
      break;

    case 3:
      function2404vN2();
      break;
  }
}
//function2405 SENTENCE_SUGGESTION_K
function function2405() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_SUGGESTION_K.length);
  let kWord = SENTENCE_SUGGESTION_K[valueNumber];
  let eWord = SENTENCE_SUGGESTION_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2405v2 SENTENCE_SUGGESTION_2K
function function2405ap() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_SUGGESTION_2K.length);
  let kWord = SENTENCE_SUGGESTION_2K[valueNumber];
  let eWord = SENTENCE_SUGGESTION_2E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2405v2 SENTENCE_SUGGESTION_2K
function function2405v2() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_SUGGESTION_Kv2.length);
  let kWord = SENTENCE_SUGGESTION_Kv2[valueNumber] + "!";
  let eWord = "Let's " + SENTENCE_SUGGESTION_Ev2[valueNumber] + "!";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2405v2 SENTENCE_SUGGESTION_2K
function function2405v2not() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_SUGGESTION_Kv2Negative.length);
  let kWord = SENTENCE_SUGGESTION_Kv2Negative[valueNumber] + "!";
  let eWord = "Let's not " + SENTENCE_SUGGESTION_Ev2[valueNumber] + "!";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function function2405v3() {
  let chosenNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function2405v2();
      break;
    case 2:
      function2405v2not();
      break;
  }
}
function function2406() {
  let chosenNumbers = Math.floor(Math.random() * 7) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function2401a();
      break;
    case 2:
      function2402();
      break;
    case 3:
      function2403();
      break;
    case 4:
      function2404();
      break;
    case 5:
      function2404v3();
      break;
    case 6:
      function2405();
      break;
    case 7:
      function2405v3();
      break;
  }
}
//function2501 ONE_SHOT_CONCEPT_K
function function2501() {
  let kWord = ONE_SHOT_CONCEPT_K[24];
  let eWord = ONE_SHOT_CONCEPT_E[24] + " - " + ONE_SHOT_CONCEPT_2E[24];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2501a SENTENCE_ELEMENTS_K
function function2501a() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_ELEMENTS_K.length);
  let kWord = SENTENCE_ELEMENTS_K[valueNumber];
  let eWord = SENTENCE_ELEMENTS_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2601 ONE_SHOT_CONCEPT_K
function function2601() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_PATTERN_2K.length);
  let kWord = SENTENCE_PATTERN_2K[valueNumber];
  let eWord = SENTENCE_PATTERN_2E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2601a SENTENCE_PATTERN_K
function function2601a() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_PATTERN_K.length);
  let kWord = SENTENCE_PATTERN_K[valueNumber];
  let eWord = SENTENCE_PATTERN_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2601v2 SENTENCE_THERE_BE_K
function function2601v2() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_PATTERN_All_K.length);
  let kWord = SENTENCE_PATTERN_All_K[valueNumber];
  let eWord = SENTENCE_PATTERN_All_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}





SENTENCE_PATTERN_2K

//function2603 SENTENCE_THERE_BE_K
function function2603() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_THERE_BE_K.length);
  let kWord = SENTENCE_THERE_BE_K[valueNumber];
  let eWord = SENTENCE_THERE_BE_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2603b SENTENCE_THERE_BE_PRESENT_K
function function2603b() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_THERE_BE_PRESENT_K.length);
  let kWord = SENTENCE_THERE_BE_PRESENT_K[valueNumber];
  let eWord = SENTENCE_THERE_BE_PRESENT_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2603v2 SENTENCE_THERE_BE_K
function function2603v2() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log("chooseNumbers = ", chooseNumbers);
  let valueNumber = Math.floor(Math.random() * SENTENCE_THERE_BE_K.length);
  console.log("valueNumber = ", valueNumber);

  let eWord;
  let kWord;

  switch (chooseNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * noun3animalK.length);
      kWord = noun3animalK[valueNumber1] + " 한 마리가 있다";
      eWord = noun3animalE[valueNumber1];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "There is an " + eWord + ".";
      } else {
        eWord = "There is a " + eWord + ".";
      }
      console.log("eWord = ", eWord);

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;



    case 2:
      let valueNumber2 = Math.floor(Math.random() * noun3animalE.length);
      kWord = noun3animalK[valueNumber2] + "들이 있다";
      eWord = noun3animalE[valueNumber2];

      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = "There are " + eWord + "es.";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = "There are " + eWord + "s.";
      } else if (eWord.endsWith('y')) {
        eWord = "There are " + eWord.slice(0, -1) + "ies.";
      } else if (eWord.endsWith('fe')) {
        eWord = "There are " + eWord.slice(0, -2) + "ves.";
      } else if (eWord.endsWith('f')) {
        eWord = "There are " + eWord.slice(0, -1) + "ves.";
      } else {
        eWord = "There are " + eWord + "s.";
      }

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;

  }

}


//function2603v3 SENTENCE_THERE_BE_K
function function2603v3() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log("chooseNumbers = ", chooseNumbers);
  let valueNumber = Math.floor(Math.random() * SENTENCE_THERE_BE_K.length);
  console.log("valueNumber = ", valueNumber);

  let eWord;
  let kWord;

  switch (chooseNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * noun3animalK.length);
      kWord = noun3animalK[valueNumber1] + " 한 마리가 있었다";
      eWord = noun3animalE[valueNumber1];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "There was an " + eWord + ".";
      } else {
        eWord = "There was a " + eWord + ".";
      }
      console.log("eWord = ", eWord);

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;

    case 2:
      let valueNumber2 = Math.floor(Math.random() * noun3animalE.length);
      kWord = noun3animalK[valueNumber2] + "들이 있었다";
      eWord = noun3animalE[valueNumber2];

      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = "There were " + eWord + "es.";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = "There were " + eWord + "s.";
      } else if (eWord.endsWith('y')) {
        eWord = "There were " + eWord.slice(0, -1) + "ies.";
      } else if (eWord.endsWith('fe')) {
        eWord = "There were " + eWord.slice(0, -2) + "ves.";
      } else if (eWord.endsWith('f')) {
        eWord = "There were " + eWord.slice(0, -1) + "ves.";
      } else {
        eWord = "There were " + eWord + "s.";
      }

      document.getElementById("clsRandom").innerText = kWord;
      document.getElementById("clsRandom2").innerText = eWord;
      clickCount += 1
      // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
      sessionData.push(`${kWord}, ${eWord}`);
      break;

  }
}

//function2603v4 SENTENCE_THERE_BE_K
function function2603v4() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log("chooseNumbers = ", chooseNumbers);

  switch (chooseNumbers) {
    case 1:
      function2603v2();
      break;

    case 2:
      function2603v3();
      break;

  }
}

//function2604 
function function2604() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_PATTERN_15_K.length);
  let kWord = SENTENCE_PATTERN_15_K[valueNumber];
  let eWord = SENTENCE_PATTERN_15_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//function2604b SENTENCE_PATTERN_2b_K
function function2604b() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_PATTERN_2b_K.length);
  let kWord = SENTENCE_PATTERN_2b_K[valueNumber];
  let eWord = SENTENCE_PATTERN_2b_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2604bv2 SENTENCE_PATTERN_2bv2_K
function function2604bv2() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_PATTERN_2bv2_K.length);
  let kWord = SENTENCE_PATTERN_2bv2_K[valueNumber];
  let eWord = SENTENCE_PATTERN_2bv2_E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2604bv2 SENTENCE_PATTERN_2bv2_K
function function2604bv2p() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_PATTERN_2bv2p_K.length);
  let valueNumber2 = Math.floor(Math.random() * SENTENCE_PATTERN_2bv2p_2K.length);
  let kWord = "그것은 " + SENTENCE_PATTERN_2bv2p_2K[valueNumber2] + SENTENCE_PATTERN_2bv2p_K[valueNumber];
  let eWord = "It " + SENTENCE_PATTERN_2bv2p_E[valueNumber] + "s " + SENTENCE_PATTERN_2bv2p_2E[valueNumber2];

  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

// 3형식
function function2604bv3() {
  let chooseNumbers1 = Math.floor(Math.random() * 2) + 1;
  let chooseNumbers2 = chooseNumbers1;
  let chooseNumbers3 = chooseNumbers1;
  let valueNumber4 = Math.floor(Math.random() * noun3animalE.length);
  let valueNumber3 = Math.floor(Math.random() * noun1personK.length);
  let valueNumber22 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_THINGS.length);
  let kWord;
  let eWord;
  // let valueNumber44 = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE_E.length);
  // + ADJECTIVE_POSITIVE_PEOPLE[valueNumber44]  + " "
  // + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumber44] + " "
  switch (chooseNumbers1) {
    case 1:
      kWord = ADJECTIVE_POSITIVE_THINGS_K[valueNumber22] + " " + "하나의 " + noun1personK[valueNumber3];
      eWord = ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + " " + noun1personE[valueNumber3];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 2:
      kWord = ADJECTIVE_POSITIVE_THINGS_K[valueNumber22] + " " + noun1personK[valueNumber3] + "들";
      eWord = ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + " " + noun1personE[valueNumber3];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }

      break;

  }
  // 하나 or 여러개

  switch (chooseNumbers2) {
    case 1:
      kWord = ADJECTIVE_POSITIVE_THINGS_K[valueNumber22] + " " + noun3animalK[valueNumber4] + " 하나를 ";
      eWord = ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + " " + noun3animalE[valueNumber4];
      if (eWord[0] == 'a' || eWord[0] == 'e' || eWord[0] == 'i' || eWord[0] == 'o' || eWord[0] == 'u') {
        eWord = "an " + eWord;
      } else {
        eWord = "a " + eWord;
      }
      break;
    case 2:
      kWord = ADJECTIVE_POSITIVE_THINGS_K[valueNumber22] + " " + noun3animalK[valueNumber4] + "들을 ";
      eWord = ADJECTIVE_POSITIVE_THINGS_E[valueNumber22] + " " + noun3animalE[valueNumber4];
      if (eWord.endsWith('s') || eWord.endsWith('ss') || eWord.endsWith('sh') || eWord.endsWith('ch') || eWord.endsWith('x') || eWord.endsWith('o')) {
        eWord = eWord + "es";
      } else if (eWord.endsWith('ay') || eWord.endsWith('ey') || eWord.endsWith('iy') || eWord.endsWith('oy') || eWord.endsWith('uy')) {
        eWord = eWord + "s";
      } else if (eWord.endsWith('y')) {
        eWord = eWord.slice(0, -1) + "ies";
      } else if (eWord.endsWith('fe')) {
        eWord = eWord.slice(0, -2) + "ves";
      } else if (eWord.endsWith('f')) {
        eWord = eWord.slice(0, -1) + "ves";
      } else {
        eWord = eWord + "s";
      }

      break;
  }
  let valueNumberA = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_K.length);
  let valueNumberAAA = Math.floor(Math.random() * noun2objectK.length);
  let valueNumberCCC = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K.length);
  let valueNumberAA = Math.floor(Math.random() * VERB_SENTENCE_FORM_3_3K.length);
  let valueNumberB = Math.floor(Math.random() * NoS_K.length);
  let valueNumberBB = Math.floor(Math.random() * ADJECTIVE_POSITIVE_PEOPLE_K.length);

  // ADJECTIVE_POSITIVE_PEOPLE_K
  // ADJECTIVE_POSITIVE_THINGS_K
  //noun1personK
  // noun3animalK
  //noun2objectK

  switch (chooseNumbers3) {
    //+ " ( " + kWordObject + " " + ADJECTIVE_POSITIVE_PEOPLE_K[valueNumberBB] + " ) " 
    //+ " ( whose " + eWordObject + " is " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumberBB] + " ) "
    //+ " ( " + kWordObject + " " + ADJECTIVE_POSITIVE_PEOPLE_K[valueNumberBB] + " ) "
    // + " ( whose " + eWordObject + " are " + ADJECTIVE_POSITIVE_PEOPLE_E[valueNumberBB] + " ) "
    case 1: // 3s파 - 사람 // noun3animalK 단수로
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_K[valueNumberA] + " " + kWord + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = PRONOUN_PERSONAL_SUBJECTIVE_SINGULAR_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_3E[valueNumberAA] + " " + eWord;
      break;
    case 2: // No s파 - 사람 // noun3animalE 복수로
      kWord = PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_K[valueNumberA] + " " + kWord + VERB_SENTENCE_FORM_3_3K[valueNumberAA];
      eWord = PRONOUN_PERSONAL_SUBJECTIVE_PLURAL_E[valueNumberA] + " " + VERB_SENTENCE_FORM_3_E[valueNumberAA] + " " + eWord;
      break;

  }
  console.log(chooseNumbers1)
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}



//function2605 
function function2605() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_PATTERN_4_K.length);
  let kWord = "";
  let eWord = "";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2606 
function function2606() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_PATTERN_5_K.length);
  let kWord = "";
  let eWord = "";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2607 
function function2607() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_PATTERN_5b_3K.length);
  let kWord = "";
  let eWord = "";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2608 
function function2608() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_PATTERN_5b_3K.length);
  let kWord = "";
  let eWord = "";
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2608b SENTENCE_SUGGESTION_K 사역동사
function function2608b() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_PATTERN_5b_3K.length);
  let kWord = SENTENCE_PATTERN_5b_3K[valueNumber];
  let eWord = SENTENCE_PATTERN_5b_3E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2608b SENTENCE_SUGGESTION_K 지각동사
function function2608c() {
  let valueNumber = Math.floor(Math.random() * SENTENCE_PATTERN_5c_3K.length);
  let kWord = SENTENCE_PATTERN_5c_3K[valueNumber];
  let eWord = SENTENCE_PATTERN_5c_3E[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//function2609 감각동사 vs (준)사역동사
function function2609() {
  let chooseNumbers = Math.floor(Math.random() * 3) + 1;
  console.log("chooseNumbers = ", chooseNumbers);

  switch (chooseNumbers) {
    case 1:
      function2604b();
      break;
    case 2:
      function2608b();
      break;
    case 3:
      function2608c();
      break;

  }
}

function function2610() {
  let chosenNumbers = Math.floor(Math.random() * 9) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function2601a();
      break;
    case 2:
      function2601v2();
      break;
    case 3:
      function2603();
      break;
    case 4:
      function2603v4();
      break;
    case 5:
      function2604();
      break;
    case 6:
      function2604bv2();
      break;
    case 7:
      function2604bv2p();
      break;
    case 8:
      function2609();
      break;
    case 9:
      function1516d();
      break;
    // case 10:
    //   function2605();
    //   break;
    // case 11:
    //   function2606();
    //   break;
  }
}


function function2999() {
  let chosenNumbers = Math.floor(Math.random() * 9) + 1;
  console.log(chosenNumbers);
  switch (chosenNumbers) {
    case 1:
      function0110();
      break;
    case 2:
      function0208All_All();
      break;
    case 3:
      function0311();
      break;
    case 4:
      function0410();
      break;
    case 5:
      function0526();
      break;
    case 6:
      function0609v3();
      break;
    case 7:
      function0701();
      break;
    case 8:
      function0800();
      break;
    case 9:
      function0906();
      break;
    case 10:
      function1000();
      break;
    case 11:
      function1115();
      break;
    case 12:
      function1215();
      break;
    case 13:
      function1310();
      break;
    case 14:
      function1413();
      break;
    case 15:
      function1519();
      break;
    case 16:
      function1610();
      break;
    case 17:
      function1717();
      break;
    case 18:
      function1811();
      break;
    case 19:
      function1910();
      break;
    case 20:
      function2005();
      break;
    case 21:
      function2106();
      break;
    case 22:
      function2207();
      break;
    case 23:
      function2304();
      break;
    case 24:
      function2406();
      break;
    case 25:
      function2501a();
      break;
    case 26:
      function2610();
      break;
  }
}

SENTENCE_PATTERN_15_K
SENTENCE_PATTERN_15_E
SENTENCE_PATTERN_1_K
SENTENCE_PATTERN_2_K
SENTENCE_PATTERN_3_K
SENTENCE_PATTERN_4_K
SENTENCE_PATTERN_5_K
SENTENCE_PATTERN_5_2K
SENTENCE_PATTERN_5_3K



//일반동사 - 전체
function getSentenceTypesAll() {
  let chooseNumbers = Math.floor(Math.random() * 7) + 1;
  console.log(chooseNumbers);
  switch (chooseNumbers) {
    case 1:
      function2404();
      break;
    case 2:
      function2404v2();
      break;
    case 3:
      function2404vN();
      break;
    case 4:
      function2404vN2();
      break;
    case 5:
      function2405();
      break;
    case 6:
      function2405v2();
      break;
    case 7:
      function2405v2not();
      break;
  }
}




//8품사1 - 명사 대명사 동사 
function guess8PartsofEnglish() {
  // const eightPartsK = new Array("the man", "Nicole", "ant", "sky", "Tom", "dog", "bag", "school", "Korea", "I", "you", "we", "he", "she", "it", "this", "that", "am", "are", "is", "feel", "have", "go", "ask", "can", "may", "must", "good", "smart", "hungry", "lucky", "today", "here", "quietly", "happily", "very", "always", "never", "in", "at", "on", "over", "under", "about", "by", "for", "to", "with", "and", "but", "or", "so", "when", "before", "after", "until", "because", "if", "that", "Oh", "wow", "hooray", "oops");
  // const eightPartsE = new Array("명사", "명사", "명사", "명사", "명사", "명사", "명사", "명사", "명사", "대명사", "대명사", "대명사", "대명사", "대명사", "대명사", "대명사", "대명사", "동사", "동사", "동사", "동사", "동사", "동사", "동사", "동사", "동사", "동사", "형용사", "형용사", "형용사", "형용사", "부사", "부사", "부사", "부사", "부사", "부사", "부사", "전치사", "전치사", "전치사", "전치사", "전치사", "전치사", "전치사", "전치사", "전치사", "전치사", "접속사", "접속사", "접속사", "접속사", "접속사", "접속사", "접속사", "접속사", "접속사", "접속사", "접속사", "감탄사", "감탄사", "감탄사", "감탄사");
  let chooseNumbers = Math.floor(Math.random() * 4) + 1;
  console.log(chooseNumbers)
  switch (chooseNumbers) {
    case 1:
      guess8Part1();
      break;

    case 2:
      guess8Part2();
      break;

    case 3:
      guess8Part3();
      break;

    case 4:
      guess8Part4();
      break;
  }
}
// 명사 9개 대명사 8개 동사
function guess8Part1() {
  const guess8Part1E = new Array("the man", "Nicole", "ant", "sky", "Tom", "dog", "bag", "school", "Korea", "I", "you", "we", "he", "she", "it", "this", "that", "am", "are", "is", "feel", "have", "go", "ask", "can", "may", "must");
  const guess8Part1K = new Array("명사", "명사", "명사", "명사", "명사", "명사", "명사", "명사", "명사", "대명사", "대명사", "대명사", "대명사", "대명사", "대명사", "대명사", "대명사", "동사", "동사", "동사", "동사", "동사", "동사", "동사", "동사", "동사", "동사");
  let valueNumber = Math.floor(Math.random() * guess8Part1E.length);
  let kWord = guess8Part1E[valueNumber];
  let eWord = guess8Part1K[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
function guess8Part1v2() {
  let chooseNumbers = Math.floor(Math.random() * 2) + 1;
  console.log(chooseNumbers)
  switch (chooseNumbers) {
    case 1:
      function0101v3();
      break;

    case 2:
      guessVerb();
      break;

  }
}
//8품사2 - 형용사 4  부사 7 
function guess8Part2() {
  const guess8Part2E = new Array("good", "smart", "hungry", "lucky", "today", "here", "quietly", "happily", "very", "always", "never");
  const guess8Part2K = new Array("형용사", "형용사", "형용사", "형용사", "부사", "부사", "부사", "부사", "부사", "부사", "부사");
  let valueNumber = Math.floor(Math.random() * guess8Part2E.length);
  let kWord = guess8Part2E[valueNumber];
  let eWord = guess8Part2K[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//8품사3 - 접속사 전치사 
function guess8Part3() {
  const guess8Part3E = new Array("in", "at", "on", "over", "under", "about", "by", "for", "to", "with", "and", "but", "or", "so", "when", "before", "after", "until", "because", "if", "that");
  const guess8Part3K = new Array("전치사", "전치사", "전치사", "전치사", "전치사", "전치사", "전치사", "전치사", "전치사", "전치사", "접속사", "접속사", "접속사", "접속사", "접속사", "접속사", "접속사", "접속사", "접속사", "접속사", "접속사");
  let valueNumber = Math.floor(Math.random() * guess8Part3E.length);
  let kWord = guess8Part3E[valueNumber];
  let eWord = guess8Part3K[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}
//8품사4 - 감탄사 관사 
function guess8Part4() {
  const guess8Part4E = new Array("Oh", "wow", "hooray", "oops", "a", "an", "the");
  const guess8Part4K = new Array("감탄사", "감탄사", "감탄사", "감탄사", "관사", "관사", "관사");
  let valueNumber = Math.floor(Math.random() * guess8Part4E.length);
  let kWord = guess8Part4E[valueNumber];
  let eWord = guess8Part4K[valueNumber];
  document.getElementById("clsRandom").innerText = kWord;
  document.getElementById("clsRandom2").innerText = eWord;
  let date = new Date();
  let dateStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
  clickCount += 1
  // sessionData.push(`${clickCount} ${lastValue}\nQ: ${kWord}\nA: ${eWord}`);
  sessionData.push(`${kWord}, ${eWord}`);
}

//8품사 고르기 전체
// function guess8PartsofEnglish() {
//   let chooseNumbers = Math.floor(Math.random() * 4) + 1;
//   console.log(chooseNumbers);
//   switch (chooseNumbers) {
//     case 1:
//       guessPart1();
//       break;
//     case 2:
//       guessPart2();
//       break;
//     case 3:
//       guessPart3();
//       break;
//     case 4:
//       guessPart4();
//       break;
//   }
// }
//
//
// function getRandomVerbAll() {
//   let chosenNumbers = Math.floor(Math.random() * 2) + 1;
//   console.log(chosenNumbers);
//   switch (chosenNumbers) {
//     case 1:
//       getRandomBeVerbAll();
//       break;
//     case 2:
//       getRandomGVerbAll();
//       break;
//   }
// }




