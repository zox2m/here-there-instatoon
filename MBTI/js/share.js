const url = 'https://herethereinstatoon.netlify.app';

function setShare(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '여기저기 인생게임';
  const shareDes = infoList[resultAlt].name;
  const shareImage = url + '/img/image-' + resultAlt + '.png';
  const shareURL = url + '/page/result-' + resultAlt + '.html';

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