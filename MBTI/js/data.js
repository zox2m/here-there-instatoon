const qnaList_here = [
  {
    q: '1. 백종원 선생님 유튜브에 맛있는 게 많아 보인다! 직접 만들어 먹어볼까?',
    a: [
      { answer: ' 당장 뭐든 만들어 먹어보자!', type: [0,1,2,5] },
      { answer: ' 일단 쉬운 게 있나 찾아보고 생각해보자', type: [3,4,8,9,10,11] },
      { answer: ' 에이 그냥 시켜먹자', type: [6,7] },
    ]
  },
  {
    q: '2. 취미를 가져볼까 하는데 어떤 취미를 도전해볼까?',
    a: [
      { answer: ' 여기저기 돌아다니며 경험하는 활동', type: [3,5,7,8] },
      { answer: ' 이것저것 직접 만들어보는 활동', type: [1,2,9,11] },
      { answer: ' 꾸준히 노력해서 실력을 쌓아가는 활동', type: [0,4,6,10] },
    ]
  },
  {
    q: '3. 내 앞에 신이 나타나서 능력치를 하나 준다는데 어떤 걸 고를까?',
    a: [
      { answer: ' 지능 상승', type: [0,1,9,11] },
      { answer: ' 행운 상승', type: [3,4,7] },
      { answer: ' 손재주 상승', type: [10,2,5,6,8] }
    ]
  },
  {
    q: '4. 지인이 나에게 종이 한 장을 준다. 받을까 말까?',
    a: [
      { answer: ' 일단 받는다 ', type: [3,4,10] },
      { answer: ' 별 필요없으니 안받는다 ', type: [1,2,5,8,9,11] },
      { answer: ' 다시는 이런 거 주지 말라고 소리친다 ', type: [0,7,6] },
    ]
  },
  {
    q: '5. 놀이공원을 갔다. 나는 무엇을 할까?',
    a: [
      { answer: ' 여기서 가장 무서운 놀이기구를 도전하러 간다', type: [11,10,3,9] },
      { answer: ' 놀이공원에 있는 맛있는 음식을 다 부순다', type: [1,2,4]},
      { answer: ' 주변을 구경하며 사진 찍는다', type: [8,0,5,6,7] },
    ]
  },

  {
    q: '6. 기념일이 다가온다. 당신은 어떻게 할 것인가? (ex - 100, 200일)',
    a: [
      { answer: ' 무슨 기념일이야, 그냥 평소처럼 해', type: [4, 9, 11 ] },
      { answer: ' 맛있는 밥이나 사줄까? 아니면 꽃이라도?', type: [0, 3, 6, 10 ] },
      { answer: ' 이미 깜짝 이벤트 다 준비해놨어', type: [1, 7, 2, 5, 8 ] },
    ]
  },
  {
    q: '7. 연인이 오늘 머리를 바꾸고 옷도 새로 샀다',
    a: [
      { answer: ' 눈치 못 채고 그냥 있는다', type: [1, 7, 11 ] },
      { answer: ' 눈치는 채나 말은 꺼내지 않는다', type: [2, 4, 9 ] },
      { answer: ' "오 대박 오늘 머리도 바꾸고 옷도 새로 샀네?"라고 하며 단번에 눈치챈다', type: [0, 3, 6, 5, 10, 8 ] },
    ]
  },
  {
    q: '8. 연인이 데이트가 끝난 후, 집에 데려다 달라고 한다',
    a: [
      { answer: ' 각자 만났던 장소에서 헤어진다.', type: [0, 4, 9 ] },
      { answer: ' 연인이 살고 있는 집의 역이나 정류장까지 데려다준다.', type: [3, 2, 6, 5, 10, 8 ] },
      { answer: ' 집 앞까지 데려다준다.', type: [1, 7, 11 ] },
    ]
  },
  {
    q: '9. 연인에게 하루종일 연락이 안 온다..',
    a: [
      { answer: ' 뭐.. 언젠가 연락 오겠지. 내가 할 일 하며 기다린다', type: [7, 0, 5, 9 ] },
      { answer: ' 초조해서 마음 졸이며 인스타, 페북, 카톡 등 모든 SNS 다 들어가본다.', type: [1, 3, 6, 11 ] },
      { answer: ' 연인에게 연락 올 때까지 무한 카톡, 무한 전화', type: [2, 10, 8, 4 ] },
    ]
  },
  {
    q: '10. 연인이 연락도 없이 보고싶다고 우리집 앞에 와서 기다린다. ',
    a: [
      { answer: '아니 갑자기 오면 어떡해.. 하 나 준비도 안 했는데 왜 와. 짜증나네', type: [4, 9, 11] },
      { answer: '아 그래?? 나 할 것들 좀만 마무리하고 나갈게', type: [0, 2, 6, 5 ] },
      { answer: '헐 대박, 어디야?? 당장 나갈게!', type: [1, 7, 3, 10, 8 ] },
    ]
  },
  {
    q: '11. 내가 추구하는 연애관은? ',
    a: [
      { answer: '각자 할 것 하며, 평안하고 안정적인 연애가 좋다.', type: [1, 4, 9, 11 ] },
      { answer: '보고싶을 때 보고, 데이트도 많이 하고 꽁냥꽁냥하는 연애가 좋아.', type: [7, 0, 3, 6, 10] },
      { answer: '연애는 마음가는대로! 불타오르는 연애가 최고지.', type: [2, 5, 8 ] },
    ]
  },
  {
    q: '12. 연인과 데이트 도중 화를 참을 수 없을만큼 심하게 싸웠다. 어떻게 할 것인가?',
    a: [
      { answer: '"아 화나네. 따라오지마 오늘 집 갈 거니까." 라고 말하며 집으로 간다.', type: [3, 6, 4, 9 ] },
      { answer: '"야! 너 화내지마. 너 잘못이지. 내가 뭘 잘못했는데?" 소리지르며 끝까지 불같이 화낸다.', type: [0, 2, 5, 10, 8] },
      { answer: '"아니 그건 아니고, 하.." 조용히 운다.', type: [1, 7, 11] },
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
    q: '1. 하고 싶은게 너무 많아! 어떡하지?', /*도전*/
    a: [
      { answer: '고민할 시간도 아까워. 당장 실행하자!', type: [1,2,3,11] },
      { answer: '계획이 있어야 실행도 되는 법. 근사한 계획으로 다 해낸다!', type: [4,5,8,10] },
      { answer: '다 하는건 현실적으로 불가능해! 꼭 하고 싶은걸 추려보자.', type: [0,7,9] },
    ]
  },
  {
    q: '2. 헐, 좋은 사업 아이템이 생각났어!', /*계획 */
    a: [
      { answer: '잘 다듬으면 진짜 좋겠다! 차근차근 살펴보자', type: [0,3,4,11] },
      { answer: '내가 직접 할 순 없으니...아이디어 공모전에 내볼까?', type: [5,6,9,10] },
      { answer: '(이미 자퇴신청서 작성 완료)', type: [1,2,4,8] },
    ]
  },
  {
    q: '3. 여기가 놀자고 부른다. 하지만 숙제를 못했는데..',
    a: [
      { answer: '"이게 낭만 아니겠어?" 접고 뛰쳐나간다', type: [2,4,8,10,11] },
      { answer: '그래도 할 건 해야지. 아쉽지만 거절한다', type: [6,7,9] },
      { answer: '"가고는 싶은데.." 방법이 없을까? 생각이 많아진다', type: [0,1,3,5] }
    ]
  },
  {
    q: '4. ',
    a: [
      { answer: 'a. 일단 받는다 ', type: [3,4,10] },
      { answer: 'b. 별 필요없으니 안받는다 ', type: [1,2,5,8,9,11] },
      { answer: 'c. 다시는 이런 거 주지 말라고 소리친다 ', type: [0,7,6] },
    ]
  },
  {
    q: '5.놀이공원을 갔다. 나는 무엇을 할까?',
    a: [
      { answer: 'a. 여기서 가장 무서운 놀이기구를 도전하러 간다', type: [11,10,3,9] },
      { answer: 'b. 놀이공원에 있는 맛있는 음식을 다 부순다', type: [1,2,4]},
      { answer: 'c. 주변을 구경하며 사진 찍는다', type: [8,0,5,6,7] },
    ]
  },

  {
    q: '6. 기념일이 다가온다. 당신은 어떻게 할 것인가? (ex - 100, 200일)',
    a: [
      { answer: 'a. 무슨 기념일이야, 그냥 평소처럼 해', type: [4, 9, 11 ] },
      { answer: 'b. 맛있는 밥이나 사줄까? 아니면 꽃이라도?', type: [0, 3, 6, 10 ] },
      { answer: 'c. 이미 깜짝 이벤트 다 준비해놨어', type: [1, 7, 2, 5, 8 ] },
    ]
  },
  {
    q: '7. 연인이 오늘 머리를 바꾸고 옷도 새로 샀다',
    a: [
      { answer: 'a. 눈치 못 채고 그냥 있는다', type: [1, 7, 11 ] },
      { answer: 'b. 눈치는 채나 말은 꺼내지 않는다', type: [2, 4, 9 ] },
      { answer: 'c. "오 대박 오늘 머리도 바꾸고 옷도 새로 샀네?"라고 하며 단번에 눈치챈다', type: [0, 3, 6, 5, 10, 8 ] },
    ]
  },
  {
    q: '8. 연인이 데이트가 끝난 후, 집에 데려다 달라고 한다',
    a: [
      { answer: 'a. 각자 만났던 장소에서 헤어진다.', type: [0, 4, 9 ] },
      { answer: 'b. 연인이 살고 있는 집의 역이나 정류장까지 데려다준다.', type: [3, 2, 6, 5, 10, 8 ] },
      { answer: 'c. 집 앞까지 데려다준다.', type: [1, 7, 11 ] },
    ]
  },
  {
    q: '9. 연인에게 하루종일 연락이 안 온다..',
    a: [
      { answer: 'a. 뭐.. 언젠가 연락 오겠지. 내가 할 일 하며 기다린다', type: [7, 0, 5, 9 ] },
      { answer: 'b. 초조해서 마음 졸이며 인스타, 페북, 카톡 등 모든 SNS 다 들어가본다.', type: [1, 3, 6, 11 ] },
      { answer: 'c. 연인에게 연락 올 때까지 무한 카톡, 무한 전화', type: [2, 10, 8, 4 ] },
    ]
  },
  {
    q: '10. 연인이 연락도 없이 보고싶다고 우리집 앞에 와서 기다린다. ',
    a: [
      { answer: 'a. 아니 갑자기 오면 어떡해.. 하 나 준비도 안 했는데 왜 와. 짜증나네', type: [4, 9, 11] },
      { answer: 'b. 아 그래?? 나 할 것들 좀만 마무리하고 나갈게', type: [0, 2, 6, 5 ] },
      { answer: 'c. 헐 대박, 어디야?? 당장 나갈게!', type: [1, 7, 3, 10, 8 ] },
    ]
  },
  {
    q: '11. 내가 추구하는 연애관은? ',
    a: [
      { answer: 'a. 각자 할 것 하며, 평안하고 안정적인 연애가 좋다.', type: [1, 4, 9, 11 ] },
      { answer: 'b. 보고싶을 때 보고, 데이트도 많이 하고 꽁냥꽁냥하는 연애가 좋아.', type: [7, 0, 3, 6, 10] },
      { answer: 'c. 연애는 마음가는대로! 불타오르는 연애가 최고지.', type: [2, 5, 8 ] },
    ]
  },
  {
    q: '12. 연인과 데이트 도중 화를 참을 수 없을만큼 심하게 싸웠다. 어떻게 할 것인가?',
    a: [
      { answer: 'a. "아 화나네. 따라오지마 오늘 집 갈 거니까." 라고 말하며 집으로 간다.', type: [3, 6, 4, 9 ] },
      { answer: 'b. "야! 너 화내지마. 너 잘못이지. 내가 뭘 잘못했는데?" 소리지르며 끝까지 불같이 화낸다.', type: [0, 2, 5, 10, 8] },
      { answer: 'c. "아니 그건 아니고, 하.." 조용히 운다.', type: [1, 7, 11] },
    ]
  }
]

const infoList_there = [
  {
    name: '저기:: 연애 뭐 식은 죽 먹기죠, 연애 재능 만땅 <졸업 못하는 대학원생>',
    desc: '연애의 프로재능러인 당신! 쥐에 해당하는 당신은 연애의 모든 것들을 알고 있어, 쉽게 연애에 성공하는 스타일이랍니다. 주로 포부가 크고 성격이 낙천적인 성향을 가지고 있고, 논리적이면서 두뇌회전이 매우 빠르다고 할 수 있어요. 말재주 또한 좋아 사교성이 좋고 유쾌하지만 화려한 것을 좋아해 허영심을 부리거나 사치를 부리기 때문에 이 점들을 주의해야 돼요. 뛰어난 능력에 자만하는 경우도 종종 있기 때문에 겸손이 필요하답니다! '
  },
  {
    name: '저기:: 난 너만 봐, 정직한 연애 스타일의 <식품회사 연구원>',
    desc: '연애 유형의 진국인 당신! 소에 해당하는 당신은 상대방만 바라보는 해바라기 연애 스타일이랍니다. 매사에 끈기가 있어 연애를 할 때 성실하고 진심을 다하는 성향을 가지고, 온화하며 따뜻한 마음을 가지고 있어요. 한 번 좋아하면 끝까지 좋아하는 의리파지만 자존심이 쌔 은근히 고집이 강하답니다. 또한 욱하는 성질이 있어 이런 부분들을 조심해야 하고, 질투심이 많아 사랑이 집착으로 바뀔 수 있어 주의해야 된답니다! '
  },
  {
    name: '저기:: 야 사귀자, 사랑을 쟁취하는 <카페 사장>',
    desc: '한 번 좋아하는 사람이 있으면 내 사람으로 만드는 당신! 호랑이에 해당하는 당신은 썸부터 사랑까지 한 번에 직진하는 스타일이랍니다. 연애할 때 주로 이끄는 성향을 가지고 있고, 시원시원한 성격과 유쾌한 성격을 가지고 있어요. 대쪽같은 성격에다 실수를 용납하는 대인배지만 유혹에 약하고 허영때문에 들뜨는 성격이라 다른 이성의 접근에 주의해야 돼요. 또한 내가 한 말로 인해 상대방이 상처를 받을 수 있기 때문에, 항상 말 조심이 필요하답니다!'
  },
  {
    name: '저기:: 이건 어때? 난 어때? 독특한 매력을 가진 <길거리 캐스팅 당해서 톱스타>',
    desc: '상대방을 홀리게 만드는 당신! 신비롭고 독특한 매력을 가져, 상대방이 푹 빠지게 만드는 스타일이에요. 직감이 발달되어 손재주가 뛰어난 편이고, 연애할 때 통통 튀는 모습들을 많이 보여준답니다. 유순하고 낙천적인 성향이지만, 자칫잘못하면 상대방에게 천진난만한 아이처럼 보일 수 있는 점을 주의해야 돼요. 또한 감정 기복이 심한 편이라 변덕스러운 마음을 가질 수 있어, 이런 부분들에 신경을 쓴다면 좋은 연애를 할 수 있어요.'
  },
  {
    name: '저기:: 결혼은 언제쯤 할까 신혼여행은 어디로?, 이상적인 연애관의 소유자 <로또 1등 당첨>',
    desc: '상대방과의 미래를 꿈꾸는 당신! 현실적인 연애보다는, 미래에 대한 이상적인 연애관을 가지고 있어요. 매일매일 사랑하는 사람과 보낼 미래를 생각하기 때문에, 좋은 신랑감이 될 수 있는 자질이 있답니다. 또한 일적으로나 사랑으로나 야망이 커, 크게 성공할 확률이 높고 리더십이 매우 뛰어나답니다. 다만 높은 이상에 비해서 현실이 자신의 마음에 들지 않으면 허세를 부리거나 사람들을 무시하는 경우가 많으니 이점들을 주의하면 좋을 것 같아요!'
  },
  {
    name: '저기:: 벌레가 무서워서 아무것도 못하는 <귀농인>',
    desc: '상대방의 기념일을 챙기며 깜짝 놀라게 하는 당신!, 아이디어가 뛰어나고 남다른 감각이 있어, 상대방에게 많은 이벤트를 해주는 스타일이에요. 연애할 때 눈치도 빠르고, 감동을 줄 수 있어 상대방이 매일 행복하답니다. 전체적으로 화려한 연애를 하지만, 은근히 비밀이 많고 우유부단한 성격을 가지고 있답니다. 또한 귀가 매우 얇아 남의 이야기를 곧이 곧대로 믿어, 상대방을 의심하기도 하기 때문에 조심해야 된답니다!'
  },
  {
    name: '저기:: 전화 받기 무서워서 벌벌 떠는 <텔레마케터>',
    desc: '연애할 때, 센스가 넘쳐나는 당신! 말재주가 뛰어나며 처세술이 뛰어나, 상대방의 호감을 금방 얻는답니다. 낙천적이고 유연한 성격을 가지고 있으며, 구속받는 것을 싫어하는 스타일이에요. 소중한 사람들을 위해 희생할 줄도 알지만, 쾌략 지향적인 경우가 많아 사치와 허영에 물드는 경우가 다반수입니다. 한탕 주의에 빠져 쉽게 망가질 수 있기 때문에 이 점을 주의해야 된답니다!'
  },
  {
    name: '저기:: 시간을 낚는 <낚시꾼>',
    desc: '연애할 때 모든 걸 맞춰주려고 하는 당신! 다정한 느낌과 상냥한 모습을 가지고 있어, 상대방 입장에서 편안한 느낌을 받을 수 있답니다. 타오르는 연애보다는 안정적인 연애를 추구하고, 상대방에게 마음을 여는 순간 진심으로 사랑에 푹 빠질 수 있습니다. 또한 강인한 생존력과 수완이 좋으나, 한편으로는 자신이 원하는 바를 모두 쟁취하려는 고집이 있어요. 이 고집이 심해지면 다른 사람 눈에서는 계산적인 사람처럼 보여 매력을 잃을 수 있습니다!'
  },
  {
    name: '저기:: 예쁜 풍경 찍으러 다니는 <사진 작가>',
    desc: '지치고 힘들 때 언제나 행복을 주는 당신! 정말 끼가 많고 말재주가 많다보니 팔방미인이라는 소리를 많이 듣는 편이랍니다. 또한 다재다능하고 총명하여 어떤 일이든지 잘할 수 있고, 유머 감각도 뛰어나 주변 사람들이 많이 따르는 마당발 타입입니다. 연애할 때 상대방의 기분을 잘 맞춰주고 즐거운 분위기를 유지하나, 다소 본인의 체면을 중시하는 경향이 있어요. 이 점 때문에 잔머리를 굴리다 타인에게 교활하다는 인상을 주게 될 수도 있기 때문에 조금 조심하면 좋을 것 같아요!'
  },
  {
    name: '저기:: 인기 많은 <중학교 선생님>',
    desc: '깔끔한 연애를 추구하며 맺고 끊는 것이 확실한 당신! 단아하고 고고한 이미지를 가지고 있어 우아한 매력을 표출하는 편이랍니다. 집중력과 기억력이 좋아 상대방과 있었던 일들을 다 기억해주는 편이고, 겉으로는 무뚝뚝하나 은근히 감수성이 풍부하답니다. 다만 자신이 생각한 선을 벗어나면 냉소적으로 바뀌고, 평소 직설적인 편이라 차갑다는 인상을 많이 줄 수 있어요. 섬세한 사람이기 때문에 예민한 경우가 많으니 마음을 평안히 다스리고, 상대방에게 좀만 더 따뜻하게 대하면 좋을 것 같아요!'
  },
  {
    name: '저기:: 천만팔로워 <인스타툰 작가>',
    desc: '애교쟁이 그 자체인 당신! 둥글둥글하게 처세를 잘 하고, 붙임성이 매우 좋아 사교성이 매우 뛰어난 편이랍니다. 또한 궁금한 것을 참지 못해 호기심이 많고, 강아지같이 상대방에게 찰싹 달라붙는 것을 좋아하는 스타일이에요. 성격이 매우 쾌활하나, 감정의 기복이 은근히 심해 상대방이 하는 말에 대해 크게 상처받는 편입니다. 또한 성격이 급한 경우가 많아, 차분하게 행동을 하지 못하는 편이기 때문에 이 점을 좀만 조심하면 좋을 것 같아요! '
  },
  {
    name: '저기:: 우리 아저씨가 최고야! <조정석 팬클럽 회장>',
    desc: '단아하고 고상한 품격을 가진 당신! 마음을 먹을 때 느긋하게 행동하고, 상대방에 대한 배려가 상당히 많아 온화한 성품을 가지고 있어요. 또한 솔직한 성격으로 신뢰를 받을 수 있는 타입이며, 어떠한 일을 하든 책임감이 강해 무사히 마무리한답니다. 현실적인 성향이 강해 실리를 잘 챙기나, 표현력이 다소 부족해 상대방이 사랑받는다는 감정을 못 느낄수도 있어요. 은근히 질투심이 강하고 고지식한 면이 강해, 누가 자기에게 잘못하면 지구 끝까지 복수 할 수 있을 정도이기 때문에 이 점을 조심해야 한답니다! '
  },
]
