const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 12;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var isThere = 0;

/*여기 */
function calResult_here(){
  console.log(select);
  var result = select.indexOf(Math.max(...select));
  return result;
}

function setResult_here(){
  let point = calResult_here();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList_here[point].name;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/here-' + point + '.png';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList_here[point].desc;
}

function goResult_here(){
  qna.style.WebkitAnimation = "fadeOut 0.5s";
  qna.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 0.5s";
    result.style.animation = "fadeIn 0.5s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 200)})
    setResult_here();
}

function addAnswer_here(answerText, qIdx, idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      var target = qnaList_here[qIdx].a[idx].type;
      for(let i = 0; i < target.length; i++){
        select[target[i]] += 1;
      }

      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext_here(++qIdx);
    },450)
  }, false);
}

function goNext_here(qIdx){
  if(qIdx === endPoint){
    goResult_here();
    return;
  }

  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList_here[qIdx].q;
  for(let i in qnaList_here[qIdx].a){
    addAnswer_here(qnaList_here[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

function begin_here(){
  main.style.WebkitAnimation = "fadeOut 0.5s";
  main.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 0.5s";
    qna.style.animation = "fadeIn 0.5s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 200)
    let qIdx = 0;
    goNext_here(qIdx);
  },200);
}

/*저기 */
function calResult_there(){
  console.log(select);
  var result = select.indexOf(Math.max(...select));
  return result;
}

function setResult_there(){
  let point = calResult_there();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList_there[point].name;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/there-' + point + '.png';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList_there[point].desc;
}

function goResult_there(){
  qna.style.WebkitAnimation = "fadeOut 0.5s";
  qna.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 0.5s";
    result.style.animation = "fadeIn 0.5s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 200)})
    setResult_there();
}

function addAnswer_there(answerText, qIdx, idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      var target = qnaList_there[qIdx].a[idx].type;
      for(let i = 0; i < target.length; i++){
        select[target[i]] += 1;
      }

      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext_there(++qIdx);
    },450)
  }, false);
}

function goNext_there(qIdx){
  if(qIdx === endPoint){
    goResult_there();
    return;
  }

  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList_there[qIdx].q;
  for(let i in qnaList_there[qIdx].a){
    addAnswer_there(qnaList_there[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

function begin_there(){
  isThere = 1;
  main.style.WebkitAnimation = "fadeOut 0.5s";
  main.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 0.5s";
    qna.style.animation = "fadeIn 0.5s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 200)
    let qIdx = 0;
    goNext_there(qIdx);
  },200);
}