var FAQ = [
  { cat: '추천 계산', items: [
    { id: 'how', q: '추천은 어떻게 계산하나요?', a: '카드사 상품설명서를 사람이 검수한 혜택 데이터로, 지금 가맹점·결제 금액·결제수단·이번 달 실적과 남은 한도를 넣어 카드별 혜택을 계산해요. 할인·캐시백·포인트·마일리지는 모두 원화로 바꿔 비교하고, 1등 카드에는 계산식을 함께 보여드려요. AI는 혜택 정리에만 쓰고, 추천 계산은 정해진 규칙으로만 해요.' },
    { id: 'amount', q: '결제 금액을 꼭 넣어야 하나요?', a: '아니요. 금액을 넣지 않으면 업종별 대표 금액(예: 카페 6,000원)으로 계산한 예상 결과를 보여드리고, “6,000원 기준”이라고 표시해요. 할인 방식(%와 정액)이나 최소 결제금액 조건 때문에 금액에 따라 순위가 바뀔 수 있어서, 금액을 넣거나 5천·1만·3만 버튼을 누르면 더 정확해져요.' },
    { id: 'tie', q: '두 카드 혜택이 비슷하면 어떻게 추천하나요?', a: '혜택 차이가 100원 이내면 비슷하다고 보고, ① 이번 달 실적이 부족한 카드 ② 한도가 넉넉한 카드 ③ 소득공제율이 유리한 체크카드 순으로 추천해요. 추천 이유를 한 줄로 보여드리고, 다른 선택지도 이유와 함께 고를 수 있어요.' },
    { id: 'mile', q: '마일리지는 몇 원으로 계산하나요?', a: '기본은 1마일 = 15원이에요. “1,000원당 1마일”은 적립 속도이고, 1마일의 가치는 쓰는 방법(항공권, 쇼핑)에 따라 달라서 따로 정해요. 더보기 > 설정에서 10원·15원·20원 중에 바꿀 수 있어요.' },
    { id: 'equiv', q: '“원 상당”은 무슨 뜻인가요?', a: '포인트·마일리지·특정 가맹점 전용 포인트처럼 현금이 아닌 혜택을 원화로 바꾼 값이에요. 할인과 캐시백은 “원 할인”, “원 캐시백”으로, 나머지는 “원 상당”으로 구분해 보여드려요.' },
    { id: 'pay', q: '네이버페이로 결제하면 결과가 달라지나요?', a: '네, 달라질 수 있어요. 간편결제로 내면 빠지는 혜택도 있고, 간편결제에서만 주는 혜택도 있어요. 결과 화면의 결제수단 버튼을 바꾸면 바로 다시 계산하고, 더 유리한 결제수단이 있으면 팁으로 알려드려요.' },
    { id: 'online', q: '쿠팡 같은 온라인 결제도 되나요?', a: '네. 온라인 가맹점은 위치로 찾을 수 없어서, 장소 화면에서 검색하거나 “온라인 쇼핑”, “배달앱” 버튼으로 골라주세요.' },
    { id: 'merchantpoint', q: '특정 쇼핑몰에서만 쓰는 포인트는 어떻게 계산하나요?', a: '기본은 1포인트 = 1원으로 계산하고, “쿠팡에서만 사용”처럼 사용처를 함께 표시해요.' }
  ] },
  { cat: '카드와 실적', items: [
    { id: 'tier', q: '지난달 실적은 왜 물어보나요?', a: '대부분의 카드는 지난달 쓴 금액으로 이번 달 혜택이 정해져요. 같은 카드라도 실적을 채웠는지에 따라 혜택이 0원이 될 수 있어서, 카드를 등록할 때 대략적인 구간만 여쭤봐요. 모르면 “실적 충족 시 / 미달 시”를 함께 보여드리고, 매월 1일에 기록을 바탕으로 다시 확인해 드려요.' },
    { id: 'limit', q: '처음 등록한 카드의 남은 한도가 정확한가요?', a: '등록하기 전에 쓴 금액은 앱이 알 수 없어서, 등록한 달에는 “등록 전 사용분은 반영되지 않았어요”라고 표시해요. 등록할 때 이번 달 이미 받은 혜택을 넣거나, 카드 상세에서 사용액을 고칠 수 있어요. 다음 달부터는 기록과 청구서 대조로 정확해져요.' },
    { id: 'na', q: '“계산 불가”는 왜 뜨나요?', a: '아직 혜택 정보를 검수하지 않은 카드이거나, 매달 혜택을 고르는 카드의 이번 달 선택이 없을 때예요. 정확하지 않은 결과를 보여드리지 않으려고 계산하지 않아요.' },
    { id: 'missing', q: '내 카드가 목록에 없어요', a: '“찾는 카드가 없어요”에서 카드 이름을 알려주세요. 내 카드에는 바로 등록되고, 상품설명서로 혜택을 정리해 사람이 검수한 뒤 계산을 시작해요. 준비되면 알림을 보내드려요.' },
    { id: 'excluded', q: '실적에 포함되지 않는 결제가 있나요?', a: '상품권, 공과금, 등록금, 해외 이용처럼 카드마다 실적에서 빠지는 결제가 있어요. 기록할 때 “실적 제외”로 표시하고, 직접 바꿀 수도 있어요.' },
    { id: 'family', q: '가족카드도 등록할 수 있나요?', a: '별도 카드로 등록할 수 있어요. 본인 카드와 실적을 합치는 계산은 다음 버전에서 지원할 예정이에요.' },
    { id: 'overseas', q: '해외 결제도 추천해 주나요?', a: '아직은 해외 결제를 계산하지 않아요. 해외 수수료와 환율이 함께 계산돼야 해서 이후 버전에서 지원할 예정이에요.' }
  ] },
  { cat: '기록과 정확도', items: [
    { id: 'record', q: '결제 기록은 왜 하나요?', a: '기록해야 이번 달 실적과 남은 한도가 반영돼서 다음 추천이 정확해져요. 추천 화면에서 “이 카드로 결제했어요”를 누르고 금액만 확인하면 돼요.' },
    { id: 'verify', q: '계산이 실제와 맞는지 어떻게 아나요?', a: '청구서가 나오면 기록한 결제를 건별로 “맞아요 / 달라요”로 확인해 주세요. 맞은 비율이 계산 정확도로 표시되고, 달라요는 실제 금액과 함께 신고돼 검수 후 데이터를 고쳐요.' },
    { id: 'cancel', q: '결제를 취소했어요', a: '이번 달 탭의 기록에서 “취소”를 누르면 실적과 한도에서 빠져요. 부분취소는 금액을 고쳐주세요.' }
  ] },
  { cat: '개인정보', items: [
    { id: 'cardno', q: '카드번호를 입력해야 하나요?', a: '아니요. 카드사와 상품 이름만 골라서 등록해요. 카드번호, 비밀번호, 계좌 정보는 받지 않아요.' },
    { id: 'privacy', q: '내 결제 기록은 어디에 저장되나요?', a: '(기획 중) 결제 기록과 보유 카드 정보는 기기에만 저장하는 방향으로 기획하고 있어요.' }
  ] }
];

function initialOf(c) { return String(c.issuer || '').replace('예시', '').replace('카드', '').slice(0, 1) || '?'; }
function thumbBg(c) { return c.status === 'pending' ? '#C7CCD3' : '#17191C'; }
function thumbBd(c) { return c.status === 'pending' ? '1px dashed #A1A7B0' : '1px solid #D5D8DD'; }
var TIER_LABEL = { met: '충족', unmet: '미달', unknown: '모름', none: '' };

function chipStyle(on) { return on ? { bg: '#17191C', fg: '#FFFFFF', bd: '1px solid #17191C', fw: '600' } : { bg: '#F3F4F6', fg: '#3A3F46', bd: '1px solid #F3F4F6', fw: '500' }; }
function clone(o) { return JSON.parse(JSON.stringify(o)); }

function initialRecords() {
  return [
    { id: 'r1', month: '10월', merchant: '투썸플레이스 역삼점', cardId: 'cafe', cardName: '예시 카페 특화 체크', amount: 5500, pay: 'card', expected: 1100, verdict: null, canceled: false, deltas: null },
    { id: 'r2', month: '10월', merchant: 'GS25 역삼점', cardId: 'cafe', cardName: '예시 카페 특화 체크', amount: 4500, pay: 'card', expected: 450, verdict: 'ok', canceled: false, deltas: null },
    { id: 'r3', month: '10월', merchant: '이디야 삼성역점', cardId: 'cafe', cardName: '예시 카페 특화 체크', amount: 4000, pay: 'naver', expected: 800, verdict: 'diff', actual: 0, reason: '할인이 안 됐어요', canceled: false, deltas: null },
    { id: 'r4', month: '10월', merchant: '이마트 성수점', cardId: 'mile', cardName: '예시 항공 마일 신용', amount: 40000, pay: 'card', expected: 600, verdict: 'ok', canceled: false, deltas: null }
  ];
}

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = this.fresh();
  }
  fresh() {
    return {
      screen: 'home', prev: 'home', cards: initialCards(), records: initialRecords(),
      merchantId: 'starbucks', amount: '', pay: 'card', defaultPay: 'card', mileValue: 15, tiePick: null,
      lowConf: false, placePicked: true, placeQuery: '', placeCat: '',
      draft: null, last: null, detailId: 'cafe', editUsed: false,
      addIssuer: '예시A카드', addPick: null, addTier: 'met', addMember: true, addUsed: '',
      reqName: '', reqType: '체크', reportId: null, reportActual: '', reportReason: '할인이 안 됐어요',
      faqOpen: null, faqFocus: null, toast: ''
    };
  }
  go(screen) { var self = this; return function () { self.setState({ prev: self.state.screen, screen: screen, editUsed: false }); }; }
  toast(msg) { var self = this; this.setState({ toast: msg }); clearTimeout(this._t); this._t = setTimeout(function () { self.setState({ toast: '' }); }, 2400); }
  merchant() { var id = this.state.merchantId; return MERCHANTS.filter(function (m) { return m.id === id; })[0]; }
  amountValue(m) { var a = parseInt(this.state.amount, 10); return a > 0 ? a : m.defAmount; }
  card(id) { return this.state.cards.filter(function (c) { return c.id === id; })[0]; }

  applyRecord(cardId, m, amount, pay, sign, deltas) {
    var cards = clone(this.state.cards);
    var c = cards.filter(function (x) { return x.id === cardId; })[0];
    if (!c) return { cards: cards, deltas: deltas };
    if (!deltas) {
      var res = computeCard(c, m, amount, pay, this.state.mileValue);
      deltas = { spend: amount, caps: [], expected: res.value };
      res.parts.forEach(function (p) {
        if (p.value > 0) {
          for (var i = 0; i < c.benefits.length; i++) if (c.benefits[i].label === p.label && c.benefits[i].cap) deltas.caps.push({ i: i, v: p.value });
        }
      });
    }
    c.monthSpend += sign * deltas.spend;
    deltas.caps.forEach(function (d) { c.benefits[d.i].used = Math.max(0, (c.benefits[d.i].used || 0) + sign * d.v); });
    return { cards: cards, deltas: deltas };
  }

  renderVals() {
    var s = this.state, self = this;
    var m = this.merchant();
    var amount = this.amountValue(m);
    var screens = ['home', 'place', 'record', 'recorded', 'cards', 'add', 'addTier', 'request', 'detail', 'status', 'verify', 'report', 'monthCheck', 'more', 'faq'];
    var v = {};
    screens.forEach(function (k) { v['is_' + k] = s.screen === k; });
    v.showTabs = ['home', 'cards', 'status', 'more'].indexOf(s.screen) >= 0;
    v.tabHome = s.screen === 'home' ? '#17191C' : '#646B75';
    v.tabCards = s.screen === 'cards' ? '#17191C' : '#646B75';
    v.tabStatus = s.screen === 'status' ? '#17191C' : '#646B75';
    v.tabMore = s.screen === 'more' ? '#17191C' : '#646B75';
    v.goHome = this.go('home'); v.goCards = this.go('cards'); v.goStatus = this.go('status'); v.goMore = this.go('more');
    v.goPlace = this.go('place'); v.goAdd = this.go('add'); v.goRequest = this.go('request'); v.goVerify = this.go('verify'); v.goMonthCheck = this.go('monthCheck');
    v.hasToast = !!s.toast; v.toast = s.toast;
    v.openFaq = function (id) { return function () { self.setState({ prev: s.screen, screen: 'faq', faqFocus: id, faqOpen: id }); }; };
    v.faqHow = v.openFaq('how'); v.faqAmount = v.openFaq('amount'); v.faqTie = v.openFaq('tie'); v.faqMile = v.openFaq('mile'); v.faqNa = v.openFaq('na'); v.faqOverseas = v.openFaq('overseas'); v.faqTier = v.openFaq('tier'); v.faqLimit = v.openFaq('limit'); v.faqVerify = v.openFaq('verify'); v.faqMissing = v.openFaq('missing'); v.faqPay = v.openFaq('pay');
    v.faqBack = function () { self.setState({ screen: s.prev === 'faq' ? 'more' : s.prev, faqFocus: null }); };

    // 홈
    v.merchantName = m.name;
    v.merchantMeta = m.online ? '온라인 · ' + m.cat + ' · ' + m.route : m.cat + ' · ' + m.dist;
    v.amountInput = s.amount ? fmt(parseInt(s.amount, 10)) : '';
    v.amountPlaceholder = fmt(m.defAmount) + '원 기준';
    v.onAmount = function (e) { self.setState({ amount: String(e.target.value).replace(/[^0-9]/g, '').slice(0, 9), tiePick: null }); };
    v.usingDefault = !s.amount;
    v.defaultNote = fmt(m.defAmount) + '원 기준 예상 결과예요 · 금액을 넣으면 더 정확해져요';
    v.quick = [5000, 10000, 30000].map(function (a) { var on = parseInt(s.amount, 10) === a; var c = chipStyle(on); return { label: a >= 10000 ? (a / 10000) + '만' : (a / 1000) + '천', bg: c.bg, fg: c.fg, bd: c.bd, on: function () { self.setState({ amount: String(a), tiePick: null }); } }; });
    v.payChips = PAYS.map(function (p) { var c = chipStyle(s.pay === p.id); return { label: p.name, bg: c.bg, fg: c.fg, bd: c.bd, fw: c.fw, on: function () { self.setState({ pay: p.id, tiePick: null }); } }; });
    v.needPick = s.lowConf && !s.placePicked;
    v.showResult = !v.needPick;
    var rk = rankAll(s.cards, m, amount, s.pay, s.mileValue, s.tiePick);
    v.hasBest = !!rk.best && v.showResult;
    v.noBest = !rk.best && v.showResult;
    v.noBestText = m.overseas ? '해외 결제는 아직 계산하지 않아요' : '혜택을 주는 카드가 없어요';
    if (rk.best) {
      var b = rk.best;
      v.best = { initial: initialOf(b.card), name: b.card.name, type: b.card.type, color: b.card.color, headline: b.headline, sub: b.sub, hasSub: !!b.sub };
      v.bestLines = b.parts.filter(function (p) { return p.value > 0 || p.note; }).map(function (p) {
        return { text: p.label + (p.value > 0 ? ' · ' + p.formula : ''), note: p.note ? p.note : (p.sub || ''), hasNote: !!(p.note || p.sub), timing: p.timing };
      });
      var capP = b.parts.filter(function (p) { return p.value > 0 && p.rem !== null && p.rem !== undefined; })[0];
      v.bestCap = capP ? '이번 달 남은 한도 ' + fmt(Math.max(0, capP.rem - capP.value)) + '원 (결제 후)' : '';
      v.hasBestCap = !!capP;
      var timing = b.parts.filter(function (p) { return p.value > 0; }).map(function (p) { return p.timing; });
      v.bestTiming = timing.filter(function (t, i) { return timing.indexOf(t) === i; }).join(' · ');
      v.hasMile = b.parts.some(function (p) { return p.kind === 'mile' && p.value > 0; });
      v.mileNote = '1마일 = ' + s.mileValue + '원으로 계산했어요. 항공권에 쓰면 가치가 더 높고, 쇼핑에 쓰면 낮아질 수 있어요.';
      v.hasTips = b.tips.length > 0; v.bestTips = b.tips.map(function (t) { return { text: t }; });
      v.hasTie = rk.ties.length > 1;
      v.tieReason = rk.tieReason;
      v.tieOptions = rk.options.map(function (o) { var on = o.r.card.id === b.card.id; return { tag: o.tag, name: o.r.card.name, why: o.why, bg: on ? '#EBECEF' : '#FFFFFF', bd: on ? '1.5px solid #17191C' : '1px solid #E5E7EB', on: function () { self.setState({ tiePick: o.r.card.id }); } }; });
      v.recordBest = function () { self.setState({ prev: 'home', screen: 'record', draft: { cardId: b.card.id, amount: String(amount), pay: s.pay } }); };
    }
    var rows = [];
    rk.rest.forEach(function (r) { rows.push({ initial: initialOf(r.card), tbg: thumbBg(r.card), tbd: thumbBd(r.card), name: r.card.name, color: r.card.color, value: r.headline, reason: r.sub || r.parts.filter(function (p) { return p.value > 0; }).map(function (p) { return p.label; }).join(' + '), rc: '#646B75', act: '', on: null }); });
    rk.others.forEach(function (r) {
      var row = { initial: initialOf(r.card), tbg: thumbBg(r.card), tbd: thumbBd(r.card), name: r.card.name, color: r.card.color, value: r.status === 'na' ? '계산 불가' : '혜택 없음', reason: r.reason, rc: '#646B75', act: '', on: null };
      if (r.conditional) { row.value = '최대 ' + fmt(r.maxValue) + '원'; row.rc = '#C2410C'; row.act = '실적 입력'; row.on = function () { self.setState({ prev: 'home', screen: 'detail', detailId: r.card.id }); }; }
      else if (r.reason.indexOf('미달') >= 0) { row.rc = '#C2410C'; }
      if (r.tips.length) { row.reason = r.reason + ' · ' + r.tips[0]; row.rc = '#17191C'; row.act = '네이버페이로 보기'; row.on = function () { self.setState({ pay: 'naver', tiePick: null }); }; }
      if (r.status === 'na') { row.act = '왜?'; row.on = r.reason.indexOf('해외') >= 0 ? v.faqOverseas : v.faqNa; }
      rows.push(row);
    });
    v.rows = rows.map(function (x) { x.hasAct = !!x.act; x.onAct = x.on || function () {}; return x; });
    v.pickPlace = this.go('place');

    // 장소
    v.onQuery = function (e) { self.setState({ placeQuery: e.target.value }); };
    v.placeQuery = s.placeQuery;
    v.needPickBanner = s.lowConf && !s.placePicked;
    var q = s.placeQuery.trim();
    var filt = MERCHANTS.filter(function (x) { return (!q || x.name.indexOf(q) >= 0 || x.cat.indexOf(q) >= 0) && (!s.placeCat || x.cat === s.placeCat); });
    function placeItem(x) { var sel = x.id === s.merchantId && s.placePicked; return { name: x.name, meta: x.online ? '온라인 · ' + x.cat : x.cat + ' · ' + x.dist, selTag: sel ? '선택됨' : '', hasSel: sel, on: function () { self.setState({ merchantId: x.id, placePicked: true, amount: '', tiePick: null, screen: 'home', placeQuery: '', placeCat: '' }); } }; }
    v.nearby = filt.filter(function (x) { return !x.online && !x.overseas; }).map(placeItem);
    v.onlineList = filt.filter(function (x) { return x.online; }).map(placeItem);
    v.testList = filt.filter(function (x) { return x.overseas; }).map(placeItem);
    v.hasNearby = v.nearby.length > 0; v.hasOnline = v.onlineList.length > 0; v.hasTest = v.testList.length > 0;
    v.catChips = ['카페', '편의점', '대형마트', '온라인 쇼핑', '배달앱', '항공'].map(function (c) { var st = chipStyle(s.placeCat === c); return { label: c, bg: st.bg, fg: st.fg, bd: st.bd, on: function () { self.setState({ placeCat: s.placeCat === c ? '' : c }); } }; });

    // 기록
    if (s.draft) {
      var dc = this.card(s.draft.cardId);
      var damt = parseInt(s.draft.amount, 10) || 0;
      var dres = computeCard(dc, m, damt, s.draft.pay, s.mileValue);
      v.draftCard = dc.name; v.draftAmount = damt ? fmt(damt) : '';
      v.onDraftAmount = function (e) { var d = clone(s.draft); d.amount = String(e.target.value).replace(/[^0-9]/g, '').slice(0, 9); self.setState({ draft: d }); };
      v.draftPayChips = PAYS.map(function (p) { var c = chipStyle(s.draft.pay === p.id); return { label: p.name, bg: c.bg, fg: c.fg, bd: c.bd, on: function () { var d = clone(s.draft); d.pay = p.id; self.setState({ draft: d }); } }; });
      v.draftCardChips = s.cards.filter(function (c) { return c.status !== 'pending'; }).map(function (c) { var st = chipStyle(c.id === s.draft.cardId); return { label: c.name.replace('예시 ', ''), bg: st.bg, fg: st.fg, bd: st.bd, on: function () { var d = clone(s.draft); d.cardId = c.id; self.setState({ draft: d }); } }; });
      v.draftBenefit = dres.value > 0 ? dres.headline : '혜택 없음 · ' + dres.reason;
      v.draftSpend = fmt(dc.monthSpend / 10000) + '만 → ' + fmt((dc.monthSpend + damt) / 10000) + '만원';
      v.draftSpend = (Math.round(dc.monthSpend / 1000) / 10) + '만 → ' + (Math.round((dc.monthSpend + damt) / 1000) / 10) + '만원';
      var cp = dres.parts.filter(function (p) { return p.value > 0 && p.rem !== null && p.rem !== undefined; })[0];
      v.hasDraftCap = !!cp; v.draftCap = cp ? cp.label + ' 남은 한도 ' + fmt(cp.rem) + ' → ' + fmt(cp.rem - cp.value) + '원' : '';
      v.canRecord = damt > 0;
      v.doRecord = function () {
        if (!damt) return;
        var out = self.applyRecord(dc.id, m, damt, s.draft.pay, 1, null);
        var rec = { id: 'n' + Date.now(), month: '11월', merchant: m.name, cardId: dc.id, cardName: dc.name, amount: damt, pay: s.draft.pay, expected: out.deltas.expected, verdict: null, canceled: false, deltas: out.deltas };
        var after = out.cards.filter(function (c) { return c.id === dc.id; })[0];
        var capAfter = cp ? after.benefits.filter(function (bb) { return bb.label === cp.label; })[0] : null;
        self.setState({ cards: out.cards, records: [rec].concat(s.records), screen: 'recorded', last: { id: rec.id, card: dc.name, merchant: m.name, amount: damt, benefit: dres.value > 0 ? dres.headline : '혜택 없음', timing: dres.parts.filter(function (p) { return p.value > 0; }).map(function (p) { return p.timing; })[0] || '', spend: after.monthSpend, tierMin: after.tierMin, cap: capAfter ? { label: capAfter.label, used: capAfter.used, cap: capAfter.cap } : null } });
      };
    }
    v.cancelDraft = this.go('home');

    // 기록 완료
    if (s.last) {
      var L = s.last;
      v.lastTitle = L.card + '로 ' + fmt(L.amount) + '원 결제';
      v.lastBenefit = L.benefit + (L.timing ? ' · ' + L.timing : '');
      v.lastSpend = L.tierMin > 0 ? '이번 달 실적 ' + (Math.round(L.spend / 1000) / 10) + '만 / ' + (L.tierMin / 10000) + '만원' : '이번 달 사용 ' + (Math.round(L.spend / 1000) / 10) + '만원';
      v.lastSpendPct = L.tierMin > 0 ? Math.min(100, Math.round(L.spend / L.tierMin * 100)) : 100;
      v.hasLastCap = !!L.cap;
      if (L.cap) { v.lastCap = L.cap.label + ' ' + fmt(L.cap.used) + ' / ' + fmt(L.cap.cap) + '원 사용 · ' + fmt(L.cap.cap - L.cap.used) + '원 남음'; v.lastCapPct = Math.min(100, Math.round(L.cap.used / L.cap.cap * 100)); }
      v.undoLast = function () {
        var rec = s.records.filter(function (r) { return r.id === L.id; })[0];
        var out = self.applyRecord(rec.cardId, m, rec.amount, rec.pay, -1, rec.deltas);
        self.setState({ cards: out.cards, records: s.records.filter(function (r) { return r.id !== L.id; }), screen: 'home', last: null });
        self.toast('기록을 되돌렸어요');
      };
    }

    // 내 카드
    v.myCards = s.cards.map(function (c) {
      var pend = c.status === 'pending';
      return { initial: initialOf(c), tbg: thumbBg(c), tbd: thumbBd(c), name: c.name, color: c.color, sub: pend ? '요청 접수됨 · 검수가 끝나면 알려드려요' : c.type + ' · ' + c.benefits.slice(0, 2).map(function (bb) { return bb.label; }).join(', '), badge: pend ? '준비 중' : '검증됨', bbg: pend ? '#FFF3EB' : '#FFFFFF', bfg: pend ? '#C2410C' : '#646B75', bd: pend ? '1px dashed #C7CCD3' : '1px solid transparent',
        on: pend ? v.faqMissing : function () { self.setState({ prev: 'cards', screen: 'detail', detailId: c.id, editUsed: false }); } };
    });

    // 카드 추가
    v.issuerChips = ['예시A카드', '예시B카드', '예시C카드'].map(function (i) { var st = chipStyle(s.addIssuer === i); return { label: i, bg: st.bg, fg: st.fg, bd: st.bd, on: function () { self.setState({ addIssuer: i }); } }; });
    var owned = s.cards.filter(function (c) { return c.issuer === s.addIssuer; }).map(function (c) { return { name: c.name, sub: c.type + (c.status === 'pending' ? ' · 준비 중' : ' · 검증됨'), isOwned: true, notOwned: false, on: function () {} }; });
    var avail = CATALOG.filter(function (c) { return c.issuer === s.addIssuer && !self.card(c.id); }).map(function (c) { return { name: c.name, sub: c.type + ' · 검증됨', isOwned: false, notOwned: true, on: function () { self.setState({ screen: 'addTier', addPick: c.id, addTier: c.tierMin > 0 ? 'met' : 'none', addMember: true, addUsed: '' }); } }; });
    v.addList = avail.concat(owned);

    // 등록 질문
    var pick = CATALOG.filter(function (c) { return c.id === s.addPick; })[0];
    if (pick) {
      v.pickName = pick.name;
      v.pickHasTier = pick.tierMin > 0;
      var man = pick.tierMin / 10000;
      v.tierOpts = [['met', man + '만원 이상'], ['unmet', man + '만원 미만'], ['unknown', '잘 모르겠어요']].map(function (o) { var st = chipStyle(s.addTier === o[0]); return { label: o[1], bg: st.bg, fg: st.fg, bd: st.bd, on: function () { self.setState({ addTier: o[0] }); } }; });
      v.pickHasMember = !!pick.memberLabel; v.pickMemberQ = pick.memberLabel || '';
      v.memberOpts = [[true, '예'], [false, '아니요']].map(function (o) { var st = chipStyle(s.addMember === o[0]); return { label: o[1], bg: st.bg, fg: st.fg, bd: st.bd, on: function () { self.setState({ addMember: o[0] }); } }; });
      v.pickHasCap = pick.benefits.some(function (bb) { return bb.cap; });
      v.addUsed = s.addUsed ? fmt(parseInt(s.addUsed, 10)) : '';
      v.onAddUsed = function (e) { self.setState({ addUsed: String(e.target.value).replace(/[^0-9]/g, '').slice(0, 7) }); };
      v.confirmAdd = function () {
        var c = clone(pick); c.prevTier = c.tierMin > 0 ? s.addTier : 'none'; c.monthSpend = 0; c.isMember = !!s.addMember; c.justAdded = true;
        var u = parseInt(s.addUsed, 10) || 0; if (u) { for (var i = 0; i < c.benefits.length; i++) if (c.benefits[i].cap) { c.benefits[i].used = Math.min(c.benefits[i].cap, u); break; } }
        self.setState({ cards: s.cards.concat([c]), screen: 'cards' });
        self.toast('등록했어요 · 등록 전 사용분은 반영되지 않았어요');
      };
    }

    // 카드 요청
    v.reqName = s.reqName;
    v.onReqName = function (e) { self.setState({ reqName: e.target.value }); };
    v.reqTypeChips = ['신용', '체크'].map(function (t) { var st = chipStyle(s.reqType === t); return { label: t, bg: st.bg, fg: st.fg, bd: st.bd, on: function () { self.setState({ reqType: t }); } }; });
    v.submitReq = function () {
      var name = s.reqName.trim() || '요청한 카드';
      var c = { id: 'req' + Date.now(), issuer: s.addIssuer, name: name, type: s.reqType, color: '#9AA1AF', tierMin: 0, prevTier: 'none', monthSpend: 0, status: 'pending', benefits: [] };
      self.setState({ cards: s.cards.concat([c]), screen: 'cards', reqName: '' });
      self.toast('요청했어요 · 검수가 끝나면 알려드릴게요');
    };

    // 카드 상세
    var dcard = this.card(s.detailId);
    if (dcard) {
      v.dName = dcard.name; v.dInitial = initialOf(dcard); v.dType = dcard.type + ' · ' + dcard.issuer; v.dColor = dcard.color;
      v.dHasTier = dcard.tierMin > 0;
      var dman = dcard.tierMin / 10000;
      v.dTierOpts = [['met', dman + '만원 이상'], ['unmet', dman + '만원 미만'], ['unknown', '모름']].map(function (o) { var st = chipStyle(dcard.prevTier === o[0]); return { label: o[1], bg: st.bg, fg: st.fg, bd: st.bd, on: function () { var cs = clone(s.cards); cs.forEach(function (c) { if (c.id === dcard.id) c.prevTier = o[0]; }); self.setState({ cards: cs }); } }; });
      v.dSpend = '이번 달 ' + (Math.round(dcard.monthSpend / 1000) / 10) + '만원 사용 · 기록으로 추정';
      v.dHasMember = !!dcard.memberLabel; v.dMemberQ = dcard.memberLabel || '';
      v.dMemberOpts = [[true, '회원'], [false, '비회원']].map(function (o) { var st = chipStyle(!!dcard.isMember === o[0]); return { label: o[1], bg: st.bg, fg: st.fg, bd: st.bd, on: function () { var cs = clone(s.cards); cs.forEach(function (c) { if (c.id === dcard.id) c.isMember = o[0]; }); self.setState({ cards: cs }); } }; });
      v.dJustAdded = !!dcard.justAdded;
      v.dBenefits = dcard.benefits.filter(function (bb) { return !(bb.member === true && !dcard.isMember) && !(bb.member === false && dcard.isMember); }).map(function (bb) {
        var idx = dcard.benefits.indexOf(bb);
        var easy = bb.easy === 'exclude' ? '간편결제로 결제하면 제외' : bb.easy === 'only' ? '간편결제로 결제할 때만 적용' : '';
        var cond = [easy, bb.minAmount ? fmt(bb.minAmount) + '원 이상 결제 시' : '', bb.pointPlace ? bb.pointName + ' · ' + bb.pointPlace + '에서만 사용' : '', bb.timing].filter(function (x) { return x; }).join(' · ');
        return { label: bb.label, cond: cond, hasCap: !!bb.cap, capText: bb.cap ? fmt(bb.used || 0) + ' / ' + fmt(bb.cap) + '원 사용' : '', pct: bb.cap ? Math.min(100, Math.round((bb.used || 0) / bb.cap * 100)) : 0, used: bb.cap ? String(bb.used || 0) : '', showEdit: s.editUsed && !!bb.cap,
          onUsed: function (e) { var val = parseInt(String(e.target.value).replace(/[^0-9]/g, ''), 10) || 0; var cs = clone(s.cards); cs.forEach(function (c) { if (c.id === dcard.id) c.benefits[idx].used = Math.min(c.benefits[idx].cap, val); }); self.setState({ cards: cs }); } };
      });
      v.dHasCaps = dcard.benefits.some(function (bb) { return bb.cap; });
      v.toggleEdit = function () { self.setState({ editUsed: !s.editUsed }); };
      v.editLabel = s.editUsed ? '완료' : '사용액 고치기';
    }
    v.detailBack = function () { self.setState({ screen: s.prev === 'home' ? 'home' : 'cards' }); };

    // 이번 달
    var cur = s.records.filter(function (r) { return r.month === '11월' && !r.canceled; });
    v.monthTotal = fmt(cur.reduce(function (a, r) { return a + r.expected; }, 0));
    v.pendingVerify = s.records.filter(function (r) { return !r.canceled && r.verdict === null; }).length;
    v.statusCards = s.cards.filter(function (c) { return c.status !== 'pending'; }).map(function (c) {
      var caps = c.benefits.filter(function (bb) { return bb.cap && !(bb.member === true && !c.isMember) && !(bb.member === false && c.isMember); }).map(function (bb) { return { label: bb.label, text: fmt(bb.used || 0) + ' / ' + fmt(bb.cap) + '원', pct: Math.min(100, Math.round((bb.used || 0) / bb.cap * 100)) }; });
      var sf = shortfall(c);
      return { initial: initialOf(c), name: c.name, color: c.color, hasTier: c.tierMin > 0, tierText: (Math.round(c.monthSpend / 1000) / 10) + '만 / ' + (c.tierMin / 10000) + '만원', tierPct: c.tierMin ? Math.min(100, Math.round(c.monthSpend / c.tierMin * 100)) : 0, barColor: sf > 0 ? '#E8590C' : '#17191C', badge: c.tierMin > 0 ? (sf > 0 ? fmt(sf / 10000) + '만원 남음' : '실적 충족') : '무실적', badgeColor: sf > 0 ? '#C2410C' : '#0F7B4A', caps: caps, hasCaps: caps.length > 0 };
    });
    v.curRecords = s.records.filter(function (r) { return r.month === '11월'; }).map(function (r) {
      return { text: r.merchant + ' · ' + r.cardName.replace('예시 ', ''), amount: fmt(r.amount) + '원 · ' + payName(r.pay), value: r.canceled ? '취소됨' : (r.expected > 0 ? '-' + fmt(r.expected) + '원' : '0원'), vc: r.canceled ? '#9AA1AF' : '#0B6B44', canCancel: !r.canceled, on: function () {
        var out = self.applyRecord(r.cardId, MERCHANTS[0], r.amount, r.pay, -1, r.deltas);
        self.setState({ cards: out.cards, records: s.records.map(function (x) { if (x.id === r.id) { var y = clone(x); y.canceled = true; return y; } return x; }) });
        self.toast('취소로 바꿨어요 · 실적과 한도에서 뺐어요');
      } };
    });
    v.hasCurRecords = v.curRecords.length > 0; v.noCurRecords = !v.hasCurRecords;

    // 대조
    var judged = s.records.filter(function (r) { return !r.canceled && r.verdict; });
    var okc = judged.filter(function (r) { return r.verdict === 'ok'; }).length;
    v.accuracy = judged.length ? Math.round(okc / judged.length * 100) + '%' : '-';
    v.accuracyText = '확인 ' + judged.length + '건 중 ' + okc + '건 일치 · ' + v.pendingVerify + '건 남음';
    v.verifyList = s.records.filter(function (r) { return !r.canceled; }).map(function (r) {
      var setV = function (val) { return function () { if (val === 'diff') { self.setState({ screen: 'report', reportId: r.id, reportActual: '', reportReason: '할인이 안 됐어요' }); return; } self.setState({ records: s.records.map(function (x) { if (x.id === r.id) { var y = clone(x); y.verdict = val; return y; } return x; }) }); }; };
      return { title: r.merchant, meta: r.month + ' · ' + r.cardName.replace('예시 ', '') + ' · ' + fmt(r.amount) + '원 · ' + payName(r.pay), expected: '예상 ' + fmt(r.expected) + '원', pendingV: r.verdict === null, isOk: r.verdict === 'ok', isDiff: r.verdict === 'diff', diffText: '실제 ' + fmt(r.actual || 0) + '원 · ' + (r.reason || '') + ' · 신고함', onOk: setV('ok'), onDiff: setV('diff') };
    });

    // 신고
    var rr = s.records.filter(function (r) { return r.id === s.reportId; })[0];
    if (rr) {
      v.rTitle = rr.merchant + ' · ' + rr.cardName.replace('예시 ', ''); v.rExpected = '예상 ' + fmt(rr.expected) + '원';
      v.rActual = s.reportActual; v.onRActual = function (e) { self.setState({ reportActual: String(e.target.value).replace(/[^0-9]/g, '').slice(0, 7) }); };
      v.reasonChips = ['할인이 안 됐어요', '할인율이 달라요', '한도가 달라요', '가맹점 분류가 달라요', '잘 모르겠어요'].map(function (t) { var st = chipStyle(s.reportReason === t); return { label: t, bg: st.bg, fg: st.fg, bd: st.bd, on: function () { self.setState({ reportReason: t }); } }; });
      v.submitReport = function () { self.setState({ screen: 'verify', records: s.records.map(function (x) { if (x.id === rr.id) { var y = clone(x); y.verdict = 'diff'; y.actual = parseInt(s.reportActual, 10) || 0; y.reason = s.reportReason; return y; } return x; }) }); self.toast('신고했어요 · 검수 후 알려드릴게요'); };
    }

    // 매월 실적 확인
    v.checkCards = s.cards.filter(function (c) { return c.tierMin > 0 && c.status !== 'pending'; }).map(function (c) {
      var man2 = c.tierMin / 10000;
      return { name: c.name, est: '10월 기록 기준 추정 ' + (Math.round((c.monthSpend * 0.95) / 1000) / 10) + '만원', opts: [['met', man2 + '만 이상'], ['unmet', man2 + '만 미만'], ['unknown', '모름']].map(function (o) { var st = chipStyle(c.prevTier === o[0]); return { label: o[1], bg: st.bg, fg: st.fg, bd: st.bd, on: function () { var cs = clone(s.cards); cs.forEach(function (x) { if (x.id === c.id) x.prevTier = o[0]; }); self.setState({ cards: cs }); } }; }) };
    });
    v.doneCheck = function () { self.setState({ screen: 'status' }); self.toast('11월 실적 구간을 확인했어요'); };

    // 더보기
    v.mileChips = [10, 15, 20].map(function (n) { var st = chipStyle(s.mileValue === n); return { label: n + '원', bg: st.bg, fg: st.fg, bd: st.bd, on: function () { self.setState({ mileValue: n }); } }; });
    v.defPayChips = PAYS.map(function (p) { var st = chipStyle(s.defaultPay === p.id); return { label: p.name, bg: st.bg, fg: st.fg, bd: st.bd, on: function () { self.setState({ defaultPay: p.id, pay: p.id }); } }; });
    v.confChips = [[false, '자동 선택 (보통)'], [true, '실내 · 후보 여러 개']].map(function (o) { var st = chipStyle(s.lowConf === o[0]); return { label: o[1], bg: st.bg, fg: st.fg, bd: st.bd, on: function () { self.setState({ lowConf: o[0], placePicked: !o[0] }); } }; });
    v.goFaqList = function () { self.setState({ prev: 'more', screen: 'faq', faqFocus: null, faqOpen: null }); };
    v.resetAll = function () { self.setState(self.fresh()); self.toast('처음 상태로 되돌렸어요'); };
    v.goSettingsFromHome = function () { self.setState({ prev: 'home', screen: 'more' }); };

    // FAQ
    var focus = null;
    v.faqCats = FAQ.map(function (g) {
      return { cat: g.cat, items: g.items.map(function (it) { if (it.id === s.faqFocus) focus = it; var open = s.faqOpen === it.id; return { q: it.q, a: it.a, open: open, sign: open ? '−' : '+', on: function () { self.setState({ faqOpen: open ? null : it.id }); } }; }) };
    });
    v.hasFocus = !!focus; v.focusQ = focus ? focus.q : ''; v.focusA = focus ? focus.a : '';
    v.faqBackLabel = s.prev === 'more' ? '더보기' : '돌아가기';
    return v;
  }
}
