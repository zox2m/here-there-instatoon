const qnaList_here = [
  {
    q: '1. 친구들이랑 키즈카페에 놀러왔다! 헤헤 뭐부터 하면서 놀까?',
    a: [
      { answer: ' 직접 개발한 특제 요리 보여줄게 소꿉놀이 하러 가자', type: [2,8,4] },
      { answer: ' 내가 공중제비 3바퀴 보여드림 트램펄린 고고', type: [3,9,11] },
      { answer: ' 우리 나이에는 촉감놀이가 중요하다고ㅋㅋ 모래놀이 하자', type: [0,1,10] },
      { answer: ' 친구들 노는 곳마다 가서 애들 방해해야지~ 난 이게 제일 재밌어ㅋㅋ', type: [5,6,7] },
    ]
  },
  {
    q: '2. 소풍으로 가고 싶은 곳을 투표하기로 했어. 나는 어디에다 하지?',
    a: [
      { answer: ' 소풍의 꽃은 놀이공원이지!', type: [3,4,9,11] },
      { answer: ' 실내에서 신기한 거 보는 게 좋아. 박물관에 투표해', type: [0,1,6,10] },
      { answer: ' 시원한 파도에 발 담구러 바다 가자!', type: [2,5,7,8] },
    ]
  },
  {
    q: '3. 다수결로 정해진 놀이공원으로 소풍을 왔는데 나는 여기서 뭘 먼저 할까?',
    a: [
      { answer: ' 당연히 여기서 제일 무서운 놀이기구 타러 가야지ㅋㅋ 당장 가자 쫄?ㅋㅋ', type: [11,10,3,9] },
      { answer: ' 우선 츄러스부터 먹으면 안될까? 제발 소원이야', type: [1,2,4] },
      { answer: ' 여기 사진 개잘나오는데? 빨리 찍어줘봐', type: [8,0,5,6,7] }
    ]
  },
  {
    q: '4. 체육대회 시즌이다! 반티부터 정한다는데 나는..',
    a: [
      { answer: ' 무조건 우리반이 제일 튀어야 돼!! 당장 화려한 옷 찾아봐!! ', type: [3,9,11] },
      { answer: ' 남는 건 사진 밖에 없잖아? 예쁜 옷 사서 우리 단체사진 찍자ㅎㅎ ', type: [2,4,8,10] },
      { answer: ' 나중에 잠옷으로 입어야 하니까 편안하고 무난한 거 없나? ', type: [0,1,5,6,7] },
    ]
  },
  {
    q: '5. 이제는 체육대회 출전 종목을 정한다는데 나는..',
    a: [
      { answer: ' 일단 나갈 수 있는 건 다 나가!!! 자신이쒀!!!!', type: [3,9,10,11] },
      { answer: ' 잘하는 종목만 나가서 내가 캐.리.해주지ㅋㅋ', type: [1,2,7,8]},
      { answer: ' 음..일단 가만히 있다가 꼭 신청하라고 하면 해야겠당..히히', type: [0,4,5,6] },
    ]
  },
  {
    q: '6. 이번 주말에 친구 생일파티에 초대 받았다! 선물은 뭘 준비하지?',
    a: [
      { answer: ' 맛은 장담할 수 없지만 정성이 듬뿍 담긴 나만의 수제 케이크', type: [2,8,0] },
      { answer: ' 친구가 좋아하는 향은 잘 모르지만 일단 내가 제일 좋아하는 향수', type: [1,4,7] },
      { answer: ' 나의 소울이 담긴 열정적인 춤사위를 보여주는 축하공연', type: [3,9,10,11] },
      { answer: ' 내 자체가 선물인데? 무슨 선물을 또 준비해ㅋㅋ;', type: [5,6] },
    ]
  },
  {
    q: '7. 대학 입학하고 뒷풀이에서 처음으로 동기들을 만났다! 그럼 일단..',
    a: [
      { answer: ' "안녕?" 눈에 보이는 모든 사람들에게 닥치는대로 인사한다', type: [1,3,10,11] },
      { answer: ' 분위기를 파악하다가 나랑 잘 맞을 것 같은 친구에게만 슬쩍 말을 건다', type: [7,8,9] },
      { answer: ' "와 여기 안주 개꿀맛;;" 우선 음식을 맛보면서 맛집 감별을 한다', type: [2,4,5] },
      { answer: ' "난 너희랑 친해지기 싫어"라고 소리치고 뒷풀이에서 빠져나온다', type: [0,6] },
    ]
  },
  {
    q: '8. 중간고사까지 3주 남았어.. 아직 늦지 않았어 나는 지금 뭘 해야하지?',
    a: [
      { answer: ' 남은 기간 동안 과목을 골고루 분배해서 완벽한 공부계획을 세운다', type: [1,10,11] },
      { answer: ' 음 나는 이 교수님 좋더라. 이 교수님 수업만 열심히 공부해야지~', type: [0,2,3,4,] },
      { answer: ' 3주면 많이 남았는데? 일단 이번주는 놀아도 될 듯?ㅋㅋ', type: [5,6,7,8,9] },
    ]
  },
  {
    q: '9. 대학의 꽃은 동아리지! 어느 동아리를 들어가볼까?',
    a: [
      { answer: ' 여행갈 수 있는 지금을 즐기자! 여행동아리로 가자!', type: [2,8,6,7] },
      { answer: ' 대학생활 중 기억에 남는 건 사람과 술 뿐! 무조건 친목동아리지ㅋㅋ', type: [3,9,10,11] },
      { answer: ' 봉사활동하면서 인맥도 쌓기? 개이득 바로 봉사동아리 가입', type: [0,1,4,5] },
    ]
  },
  {
    q: '10. 백종원 선생님 유튜브를 우연히 봤는데 맛있는 레시피가 많아 보인다! 배고픈데 만들어 먹어볼까? ',
    a: [
      { answer: '나 갑자기 삘 받았어. 당장 뭐든 만들어 보자!!!', type: [0,1,2,8,10] },
      { answer: '하다가 망치면 일이 두 배인데..쉬운 요리 있나 찾아보자', type: [5,7,9,11] },
      { answer: '아 당장 배고픈데 무슨 요리야 배민이나 켜~', type: [3,4,6] },
    ]
  },
  {
    q: '11. 갑자기 내 앞에 신이 나타나서 능력치를 하나 준다는 데 어떤 걸 고르면 좋을까? ',
    a: [
      { answer: '머리가 좋아야 뭐든 되는거니까 지능 상승을 고르자', type: [1,0,9,11] },
      { answer: '운이 좋으면 어떤 일이든 잘 풀리지 않겠어? 행운 상승을 고르자', type: [3,4,7] },
      { answer: '지금은 금손이 주목받는 세상이야! 손재주 상승을 고르자', type: [10,2,5,6,8] },
    ]
  },
  {
    q: '12. 지인이 나한테 종이 한 장을 준다. 받을까 말까?',
    a: [
      { answer: '받는다고 손해는 없잖아? 일단 받아 놓자', type: [3,4,10] },
      { answer: '필요없는데 받으면 쓰레기 되니까 받지 말자', type: [1,2,5,8,9,11] },
      { answer: '다시는 이런 거 주지 말라고 소리친다', type: [0,7,6] },
    ]
  }
]

const infoList_here = [
  {
    name: '연애 뭐 식은 죽 먹기죠, 연애 재능 만땅 <졸업 못하는 대학원생>',
    desc: '연애의 프로재능러인 당신! 쥐에 해당하는 당신은 연애의 모든 것들을 알고 있어, 쉽게 연애에 성공하는 스타일이랍니다. 주로 포부가 크고 성격이 낙천적인 성향을 가지고 있고, 논리적이면서 두뇌회전이 매우 빠르다고 할 수 있어요. 말재주 또한 좋아 사교성이 좋고 유쾌하지만 화려한 것을 좋아해 허영심을 부리거나 사치를 부리기 때문에 이 점들을 주의해야 돼요. 뛰어난 능력에 자만하는 경우도 종종 있기 때문에 겸손이 필요하답니다! '
  },
  {
    name: '난 너만 봐, 정직한 연애 스타일의 <식품회사 연구원>',
    desc: '연애 유형의 진국인 당신! 소에 해당하는 당신은 상대방만 바라보는 해바라기 연애 스타일이랍니다. 매사에 끈기가 있어 연애를 할 때 성실하고 진심을 다하는 성향을 가지고, 온화하며 따뜻한 마음을 가지고 있어요. 한 번 좋아하면 끝까지 좋아하는 의리파지만 자존심이 쌔 은근히 고집이 강하답니다. 또한 욱하는 성질이 있어 이런 부분들을 조심해야 하고, 질투심이 많아 사랑이 집착으로 바뀔 수 있어 주의해야 된답니다! '
  },
  {
    name: '야 사귀자, 사랑을 쟁취하는 <카페 사장>',
    desc: '한 번 좋아하는 사람이 있으면 내 사람으로 만드는 당신! 호랑이에 해당하는 당신은 썸부터 사랑까지 한 번에 직진하는 스타일이랍니다. 연애할 때 주로 이끄는 성향을 가지고 있고, 시원시원한 성격과 유쾌한 성격을 가지고 있어요. 대쪽같은 성격에다 실수를 용납하는 대인배지만 유혹에 약하고 허영때문에 들뜨는 성격이라 다른 이성의 접근에 주의해야 돼요. 또한 내가 한 말로 인해 상대방이 상처를 받을 수 있기 때문에, 항상 말 조심이 필요하답니다!'
  },
  {
    name: '이건 어때? 난 어때? 독특한 매력을 가진 <길거리 캐스팅 당해서 톱스타>',
    desc: '상대방을 홀리게 만드는 당신! 신비롭고 독특한 매력을 가져, 상대방이 푹 빠지게 만드는 스타일이에요. 직감이 발달되어 손재주가 뛰어난 편이고, 연애할 때 통통 튀는 모습들을 많이 보여준답니다. 유순하고 낙천적인 성향이지만, 자칫잘못하면 상대방에게 천진난만한 아이처럼 보일 수 있는 점을 주의해야 돼요. 또한 감정 기복이 심한 편이라 변덕스러운 마음을 가질 수 있어, 이런 부분들에 신경을 쓴다면 좋은 연애를 할 수 있어요.'
  },
  {
    name: '결혼은 언제쯤 할까 신혼여행은 어디로?, 이상적인 연애관의 소유자 <로또 1등 당첨>',
    desc: '상대방과의 미래를 꿈꾸는 당신! 현실적인 연애보다는, 미래에 대한 이상적인 연애관을 가지고 있어요. 매일매일 사랑하는 사람과 보낼 미래를 생각하기 때문에, 좋은 신랑감이 될 수 있는 자질이 있답니다. 또한 일적으로나 사랑으로나 야망이 커, 크게 성공할 확률이 높고 리더십이 매우 뛰어나답니다. 다만 높은 이상에 비해서 현실이 자신의 마음에 들지 않으면 허세를 부리거나 사람들을 무시하는 경우가 많으니 이점들을 주의하면 좋을 것 같아요!'
  },
  {
    name: '벌레가 무서워서 아무것도 못하는 <귀농인>',
    desc: '상대방의 기념일을 챙기며 깜짝 놀라게 하는 당신!, 아이디어가 뛰어나고 남다른 감각이 있어, 상대방에게 많은 이벤트를 해주는 스타일이에요. 연애할 때 눈치도 빠르고, 감동을 줄 수 있어 상대방이 매일 행복하답니다. 전체적으로 화려한 연애를 하지만, 은근히 비밀이 많고 우유부단한 성격을 가지고 있답니다. 또한 귀가 매우 얇아 남의 이야기를 곧이 곧대로 믿어, 상대방을 의심하기도 하기 때문에 조심해야 된답니다!'
  },
  {
    name: '전화 받기 무서워서 벌벌 떠는 <텔레마케터>',
    desc: '연애할 때, 센스가 넘쳐나는 당신! 말재주가 뛰어나며 처세술이 뛰어나, 상대방의 호감을 금방 얻는답니다. 낙천적이고 유연한 성격을 가지고 있으며, 구속받는 것을 싫어하는 스타일이에요. 소중한 사람들을 위해 희생할 줄도 알지만, 쾌략 지향적인 경우가 많아 사치와 허영에 물드는 경우가 다반수입니다. 한탕 주의에 빠져 쉽게 망가질 수 있기 때문에 이 점을 주의해야 된답니다!'
  },
  {
    name: '시간을 낚는 <낚시꾼>',
    desc: '연애할 때 모든 걸 맞춰주려고 하는 당신! 다정한 느낌과 상냥한 모습을 가지고 있어, 상대방 입장에서 편안한 느낌을 받을 수 있답니다. 타오르는 연애보다는 안정적인 연애를 추구하고, 상대방에게 마음을 여는 순간 진심으로 사랑에 푹 빠질 수 있습니다. 또한 강인한 생존력과 수완이 좋으나, 한편으로는 자신이 원하는 바를 모두 쟁취하려는 고집이 있어요. 이 고집이 심해지면 다른 사람 눈에서는 계산적인 사람처럼 보여 매력을 잃을 수 있습니다!'
  },
  {
    name: '예쁜 풍경 찍으러 다니는 <사진 작가>',
    desc: '지치고 힘들 때 언제나 행복을 주는 당신! 정말 끼가 많고 말재주가 많다보니 팔방미인이라는 소리를 많이 듣는 편이랍니다. 또한 다재다능하고 총명하여 어떤 일이든지 잘할 수 있고, 유머 감각도 뛰어나 주변 사람들이 많이 따르는 마당발 타입입니다. 연애할 때 상대방의 기분을 잘 맞춰주고 즐거운 분위기를 유지하나, 다소 본인의 체면을 중시하는 경향이 있어요. 이 점 때문에 잔머리를 굴리다 타인에게 교활하다는 인상을 주게 될 수도 있기 때문에 조금 조심하면 좋을 것 같아요!'
  },
  {
    name: '인기 많은 <중학교 선생님>',
    desc: '깔끔한 연애를 추구하며 맺고 끊는 것이 확실한 당신! 단아하고 고고한 이미지를 가지고 있어 우아한 매력을 표출하는 편이랍니다. 집중력과 기억력이 좋아 상대방과 있었던 일들을 다 기억해주는 편이고, 겉으로는 무뚝뚝하나 은근히 감수성이 풍부하답니다. 다만 자신이 생각한 선을 벗어나면 냉소적으로 바뀌고, 평소 직설적인 편이라 차갑다는 인상을 많이 줄 수 있어요. 섬세한 사람이기 때문에 예민한 경우가 많으니 마음을 평안히 다스리고, 상대방에게 좀만 더 따뜻하게 대하면 좋을 것 같아요!'
  },
  {
    name: '천만팔로워 <인스타툰 작가>',
    desc: '애교쟁이 그 자체인 당신! 둥글둥글하게 처세를 잘 하고, 붙임성이 매우 좋아 사교성이 매우 뛰어난 편이랍니다. 또한 궁금한 것을 참지 못해 호기심이 많고, 강아지같이 상대방에게 찰싹 달라붙는 것을 좋아하는 스타일이에요. 성격이 매우 쾌활하나, 감정의 기복이 은근히 심해 상대방이 하는 말에 대해 크게 상처받는 편입니다. 또한 성격이 급한 경우가 많아, 차분하게 행동을 하지 못하는 편이기 때문에 이 점을 좀만 조심하면 좋을 것 같아요! '
  },
  {
    name: '우리 아저씨가 최고야! <조정석 팬클럽 회장>',
    desc: '단아하고 고상한 품격을 가진 당신! 마음을 먹을 때 느긋하게 행동하고, 상대방에 대한 배려가 상당히 많아 온화한 성품을 가지고 있어요. 또한 솔직한 성격으로 신뢰를 받을 수 있는 타입이며, 어떠한 일을 하든 책임감이 강해 무사히 마무리한답니다. 현실적인 성향이 강해 실리를 잘 챙기나, 표현력이 다소 부족해 상대방이 사랑받는다는 감정을 못 느낄수도 있어요. 은근히 질투심이 강하고 고지식한 면이 강해, 누가 자기에게 잘못하면 지구 끝까지 복수 할 수 있을 정도이기 때문에 이 점을 조심해야 한답니다! '
  },
]

/*저기*/
const qnaList_there = [
  {
    q: '1. 학교에 왔다! 나는 제일 먼저..', 
    a: [
      { answer: '오늘의 할 일을 정리한다', type: [3,6,7,9] },
      { answer: '"필요한거 다 챙겼나?" 준비물, 숙제를 확인한다', type: [2,4,5,8] },
      { answer: '"앗싸! 참치야채비빔밥!" 급식 메뉴를 확인한다', type: [0,1,10,11] },
    ]
  },
  {
    q: '2. 지금은 동아리 신청기간! 원하는 동아리가 있었는데.. 인원이 다 찼다고 한다..',
    a: [
      { answer: '"으앙 받아줘요 젭알~~!" 특급 애교 부리기! ', type: [3,8,10] },
      { answer: '어쩔 수 없지! 다른 재밌는 동아리 찾아 들어간다~', type: [6,7,9] },
      { answer: '나보다 덜 간절한 친구와 이름을 바꿔치기한다."최대다수 최대행복"', type: [0,1,11] },
    ]
  },
  {
    q: '3. 진로 희망 조사를 하네? 아직 확정 못했는데..', 
    a: [
      { answer: '응 하고싶은거 다 적어~ 한 20개 되나?', type: [1,3,4,10] },
      { answer: '"왜 이런걸 적으라고 강요하세요?" 찢어버린다', type: [0,2,7] },
      { answer: '현실적으로 생각해볼 때가 됐지. 이참에 정한다', type: [5,6,8,9,] },
      { answer: '"우주의 정복자요"', type: [11] },
    ]
  },
  {
    q: '4. 수업중 교실에 벌이 들어왔다',
    a: [
      { answer: '"으아아~ 돔항챠~" 이런 이슈를 기다려 왔다오. 오버액션!', type: [4,8,10,11] },
      { answer: '"수업안하나? 개꿀" 속으로 웃으며 즐긴다', type: [2,3,5,6,7,] },
      { answer: '"냅둬~ 알아서 나가~" 어른스러운 척! 나..좀 멋있었을듯?', type: [0,1,9,] }
    ]
  },
  {
    q: '5. [점심시간에 옥상으로 와] 쪽지를 받았다',
    a: [
      { answer: '"누구지? 고백인가? 하 이놈의 인기ㅋㅋ', type: [] },
      { answer: '"걸어오는 싸움은 마다하지 않지" 연장 챙긴다', type: []},
      { answer: '', type: [] },
    ]
  },
  {
    q: '6. 학교 축제시즌이다! 축제의 꽃은 무대공연 아니겠어?',
    a: [
      { answer: '"나랑 광대짓할사람!" 친구들 모아서 바로 신청한다', type: [0,2,10] },
      { answer: '"보이지 않는 노력도 중요한걸!" 공연 스태프에 자원한다', type: [1,3,5,6,7] },
      { answer: '"꺄아아 너무 멋져요~~!!" 객석에서 호응 유도하는 관객이 된다', type: [4,8,9,11] },
    ]
  },
  {
    q: '7. 무사히 축제가 끝났다. 학원 갈 시간이네?',
    a: [
      { answer: '"재밌었다!" 학업으로 복귀', type: [3,4,6,7,9] },
      { answer: '오늘같은 날 공부가 되겠어? 얘들아 뒷풀이 가자~~', type: [1,5,8,10] },
      { answer: '"매일 이렇게 놀면 좋을텐데.. " 갑자기 현타온다', type: [0,2,11] },
    ]
  },
  {
    q: '8. 으악! 갑자기 비가 쏟아진다! 집에 우산 100개있는데..',
    a: [
      { answer: '101번째 우산을 산다', type: [2,5,8,9] },
      { answer: '잠깐 기다리자.. 그칠거야', type: [3,6,7,10]},
      { answer: '이또한 낭만. 차라리 노래도 틀고 걷자..', type: [0,1,4,11] },
    ]
  },
  {
    q: '9. 여기가 놀자고 부른다. 하지만 숙제를 못했는데..',
    a: [
      { answer: '"이게 낭만 아니겠어?" 접고 뛰쳐나간다', type: [2,4,8,10,11] },
      { answer: '그래도 할 건 해야지. 아쉽지만 거절한다', type: [6,7,9] },
      { answer: '"가고는 싶은데.." 방법이 없을까? 생각이 많아진다', type: [0,1,3,5] }
    ]
  },
  {
    q: '10. 헐, 좋은 사업 아이템이 생각났어!', 
    a: [
      { answer: '잘 다듬으면 진짜 좋겠다! 차근차근 살펴보자', type: [0,3,4,11] },
      { answer: '내가 직접 할 순 없으니...아이디어 공모전에 내볼까?', type: [5,6,9,10] },
      { answer: '(이미 자퇴신청서 작성 완료)', type: [1,2,4,8] },
    ]
  },
  {
    q: '11. 달콤한 방학이다! 하고 싶은게 너무 많은데 어떡하지?', 
    a: [
      { answer: '고민할 시간도 아까워. 당장 실행하자!', type: [1,2,3,11] },
      { answer: '계획이 있어야 실행도 되는 법. 근사한 계획으로 다 해낸다!', type: [4,5,8,10] },
      { answer: '다 하는건 현실적으로 불가능해! 꼭 하고 싶은걸 추려보자.', type: [0,7,9] },
    ]
  },
  {
    q: '12. ',
    a: [
      { answer: '', type: [] },
      { answer: '', type: [] },
      { answer: '', type: [] },
    ]
  }
]

const infoList_there = [
  {
    name: '니..니가 언제부터 여기를 매..매입했는데에~! <공항 도둑>',
    desc: '분명 꿈이 많았는데 기억이 나지않아. 내가 하는 일마다 잘 안돼. 그게 내탓이야? 누군가 나를 방해하는게 분명해.  '
  },
  {
    name: '아니 이번엔 진짜 된다니까? 사업 구상만 60년째인 <캥거루족>',
    desc: '연애 유형의 진국인 당신! 소에 해당하는 당신은 상대방만 바라보는 해바라기 연애 스타일이랍니다. 매사에 끈기가 있어 연애를 할 때 성실하고 진심을 다하는 성향을 가지고, 온화하며 따뜻한 마음을 가지고 있어요. 한 번 좋아하면 끝까지 좋아하는 의리파지만 자존심이 쌔 은근히 고집이 강하답니다. 또한 욱하는 성질이 있어 이런 부분들을 조심해야 하고, 질투심이 많아 사랑이 집착으로 바뀔 수 있어 주의해야 된답니다! '
  },
  {
    name: '친구 믿고 따라 투자했다가 폭망한 <빈털털이>',
    desc: '한 번 좋아하는 사람이 있으면 내 사람으로 만드는 당신! 호랑이에 해당하는 당신은 썸부터 사랑까지 한 번에 직진하는 스타일이랍니다. 연애할 때 주로 이끄는 성향을 가지고 있고, 시원시원한 성격과 유쾌한 성격을 가지고 있어요. 대쪽같은 성격에다 실수를 용납하는 대인배지만 유혹에 약하고 허영때문에 들뜨는 성격이라 다른 이성의 접근에 주의해야 돼요. 또한 내가 한 말로 인해 상대방이 상처를 받을 수 있기 때문에, 항상 말 조심이 필요하답니다!'
  },
  {
    name: '여행떠났다가 길 잃고 절에 정착한 <스님>',
    desc: '상대방을 홀리게 만드는 당신! 신비롭고 독특한 매력을 가져, 상대방이 푹 빠지게 만드는 스타일이에요. 직감이 발달되어 손재주가 뛰어난 편이고, 연애할 때 통통 튀는 모습들을 많이 보여준답니다. 유순하고 낙천적인 성향이지만, 자칫잘못하면 상대방에게 천진난만한 아이처럼 보일 수 있는 점을 주의해야 돼요. 또한 감정 기복이 심한 편이라 변덕스러운 마음을 가질 수 있어, 이런 부분들에 신경을 쓴다면 좋은 연애를 할 수 있어요.'
  },
  {
    name: '모험! 도전! 낭만~~!! 가만히 앉아있을 수가 없어! <모험가>',
    desc: '상대방과의 미래를 꿈꾸는 당신! 현실적인 연애보다는, 미래에 대한 이상적인 연애관을 가지고 있어요. 매일매일 사랑하는 사람과 보낼 미래를 생각하기 때문에, 좋은 신랑감이 될 수 있는 자질이 있답니다. 또한 일적으로나 사랑으로나 야망이 커, 크게 성공할 확률이 높고 리더십이 매우 뛰어나답니다. 다만 높은 이상에 비해서 현실이 자신의 마음에 들지 않으면 허세를 부리거나 사람들을 무시하는 경우가 많으니 이점들을 주의하면 좋을 것 같아요!'
  },
  {
    name: '<마라토너>',
    desc: '상대방의 기념일을 챙기며 깜짝 놀라게 하는 당신!, 아이디어가 뛰어나고 남다른 감각이 있어, 상대방에게 많은 이벤트를 해주는 스타일이에요. 연애할 때 눈치도 빠르고, 감동을 줄 수 있어 상대방이 매일 행복하답니다. 전체적으로 화려한 연애를 하지만, 은근히 비밀이 많고 우유부단한 성격을 가지고 있답니다. 또한 귀가 매우 얇아 남의 이야기를 곧이 곧대로 믿어, 상대방을 의심하기도 하기 때문에 조심해야 된답니다!'
  },
  {
    name: '계산 다 틀리는 <수학자>',
    desc: '연애할 때, 센스가 넘쳐나는 당신! 말재주가 뛰어나며 처세술이 뛰어나, 상대방의 호감을 금방 얻는답니다. 낙천적이고 유연한 성격을 가지고 있으며, 구속받는 것을 싫어하는 스타일이에요. 소중한 사람들을 위해 희생할 줄도 알지만, 쾌략 지향적인 경우가 많아 사치와 허영에 물드는 경우가 다반수입니다. 한탕 주의에 빠져 쉽게 망가질 수 있기 때문에 이 점을 주의해야 된답니다!'
  },
  {
    name: '사회생활 적응 못한 <사무원>',
    desc: '연애할 때 모든 걸 맞춰주려고 하는 당신! 다정한 느낌과 상냥한 모습을 가지고 있어, 상대방 입장에서 편안한 느낌을 받을 수 있답니다. 타오르는 연애보다는 안정적인 연애를 추구하고, 상대방에게 마음을 여는 순간 진심으로 사랑에 푹 빠질 수 있습니다. 또한 강인한 생존력과 수완이 좋으나, 한편으로는 자신이 원하는 바를 모두 쟁취하려는 고집이 있어요. 이 고집이 심해지면 다른 사람 눈에서는 계산적인 사람처럼 보여 매력을 잃을 수 있습니다!'
  },
  {
    name: '게임방송<스트리머>',
    desc: '지치고 힘들 때 언제나 행복을 주는 당신! 정말 끼가 많고 말재주가 많다보니 팔방미인이라는 소리를 많이 듣는 편이랍니다. 또한 다재다능하고 총명하여 어떤 일이든지 잘할 수 있고, 유머 감각도 뛰어나 주변 사람들이 많이 따르는 마당발 타입입니다. 연애할 때 상대방의 기분을 잘 맞춰주고 즐거운 분위기를 유지하나, 다소 본인의 체면을 중시하는 경향이 있어요. 이 점 때문에 잔머리를 굴리다 타인에게 교활하다는 인상을 주게 될 수도 있기 때문에 조금 조심하면 좋을 것 같아요!'
  },
  {
    name: '회사 <개발자>',
    desc: '깔끔한 연애를 추구하며 맺고 끊는 것이 확실한 당신! 단아하고 고고한 이미지를 가지고 있어 우아한 매력을 표출하는 편이랍니다. 집중력과 기억력이 좋아 상대방과 있었던 일들을 다 기억해주는 편이고, 겉으로는 무뚝뚝하나 은근히 감수성이 풍부하답니다. 다만 자신이 생각한 선을 벗어나면 냉소적으로 바뀌고, 평소 직설적인 편이라 차갑다는 인상을 많이 줄 수 있어요. 섬세한 사람이기 때문에 예민한 경우가 많으니 마음을 평안히 다스리고, 상대방에게 좀만 더 따뜻하게 대하면 좋을 것 같아요!'
  },
  {
    name: '저기:: 천만팔로워 <인스타툰 작가>',
    desc: '애교쟁이 그 자체인 당신! 둥글둥글하게 처세를 잘 하고, 붙임성이 매우 좋아 사교성이 매우 뛰어난 편이랍니다. 또한 궁금한 것을 참지 못해 호기심이 많고, 강아지같이 상대방에게 찰싹 달라붙는 것을 좋아하는 스타일이에요. 성격이 매우 쾌활하나, 감정의 기복이 은근히 심해 상대방이 하는 말에 대해 크게 상처받는 편입니다. 또한 성격이 급한 경우가 많아, 차분하게 행동을 하지 못하는 편이기 때문에 이 점을 좀만 조심하면 좋을 것 같아요! '
  },
  {
    name: '미개한것들. 머리를 조아려라..<우주 정복자>',
    desc: '단아하고 고상한 품격을 가진 당신! 마음을 먹을 때 느긋하게 행동하고, 상대방에 대한 배려가 상당히 많아 온화한 성품을 가지고 있어요. 또한 솔직한 성격으로 신뢰를 받을 수 있는 타입이며, 어떠한 일을 하든 책임감이 강해 무사히 마무리한답니다. 현실적인 성향이 강해 실리를 잘 챙기나, 표현력이 다소 부족해 상대방이 사랑받는다는 감정을 못 느낄수도 있어요. 은근히 질투심이 강하고 고지식한 면이 강해, 누가 자기에게 잘못하면 지구 끝까지 복수 할 수 있을 정도이기 때문에 이 점을 조심해야 한답니다! '
  },
]
