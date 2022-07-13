const url = 'https://instatoon-here-there.netlify.app';

function setShare(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '여기저기 인생게임';
  var shareDes = infoList_here[resultAlt].name;
  var shareImage = url + '/img/heres-' + resultAlt + '.png';
  var shareURL = url + '/page/here-' + resultAlt + '.html';
  
  if(isThere ==1){
    shareImage = url + '/img/theres-' + resultAlt + '.png';
    shareURL = url + '/page/there-' + resultAlt + '.html';
    shareDes = infoList_there[resultAlt].name;
  }

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
      },
    },

    buttons: [
      {
        title: '결과확인하기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ]
  });
}