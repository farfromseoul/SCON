var PAYS = [
  { id: 'card', name: '실물·터치 결제' },
  { id: 'naver', name: '네이버페이' },
  { id: 'kakao', name: '카카오페이' }
];
function payName(id) { for (var i = 0; i < PAYS.length; i++) if (PAYS[i].id === id) return PAYS[i].name; return id; }

var MERCHANTS = [
  { id: 'starbucks', name: '스타벅스 강남역점', cat: '카페', dist: '120m', online: false, defAmount: 6000 },
  { id: 'gs25', name: 'GS25 강남역점', cat: '편의점', dist: '80m', online: false, defAmount: 5000 },
  { id: 'emart', name: '이마트 역삼점', cat: '대형마트', dist: '650m', online: false, defAmount: 50000 },
  { id: 'coupang', name: '쿠팡', brand: '쿠팡', cat: '온라인 쇼핑', online: true, defAmount: 30000, route: '쿠팡 앱 카드결제' },
  { id: 'eats', name: '쿠팡이츠', brand: '쿠팡이츠', cat: '배달앱', online: true, defAmount: 20000, route: '쿠팡이츠 앱 카드결제' },
  { id: 'kal', name: '대한항공 항공권', cat: '항공', online: true, defAmount: 300000, route: '항공사 홈페이지 결제' },
  { id: 'overseas', name: '해외 가맹점 (예: 도쿄 편의점)', cat: '해외', online: false, overseas: true, dist: '해외', defAmount: 10000 }
];

function initialCards() {
  return [
    { id: 'cafe', issuer: '예시A카드', name: '예시 카페 특화 체크', type: '체크', color: '#2453FF', tierMin: 300000, prevTier: 'met', monthSpend: 326000,
      benefits: [
        { label: '카페 20% 할인', cats: ['카페'], kind: 'discount', rate: 20, cap: 5000, used: 2400, easy: 'exclude', timing: '청구 시 할인' },
        { label: '편의점 10% 할인', cats: ['편의점'], kind: 'discount', rate: 10, cap: 3000, used: 450, easy: 'exclude', timing: '청구 시 할인' }
      ] },
    { id: 'life', issuer: '예시B카드', name: '예시 생활 할인 신용', type: '신용', color: '#14161A', tierMin: 300000, prevTier: 'unknown', monthSpend: 120000,
      benefits: [
        { label: '카페 1,000원 할인', cats: ['카페'], kind: 'discount', fixed: 1000, minAmount: 5000, cap: 4000, used: 0, easy: 'include', timing: '결제일 할인' },
        { label: '대형마트 5% 할인', cats: ['대형마트'], kind: 'discount', rate: 5, cap: 10000, used: 0, easy: 'include', timing: '결제일 할인' }
      ] },
    { id: 'mile', issuer: '예시C카드', name: '예시 항공 마일 신용', type: '신용', color: '#0E7C66', tierMin: 0, prevTier: 'none', monthSpend: 80000,
      benefits: [
        { label: '기본 1,000원당 1마일', cats: ['*'], kind: 'mile', per: 1000, unit: 1, easy: 'include', timing: '다음 달 적립', excludeOverseas: false },
        { label: '항공 1,000원당 1마일 추가', cats: ['항공'], kind: 'mile', per: 1000, unit: 1, easy: 'include', timing: '다음 달 적립' }
      ] },
    { id: 'pay', issuer: '예시B카드', name: '예시 간편결제 할인 신용', type: '신용', color: '#6D3FC0', tierMin: 300000, prevTier: 'met', monthSpend: 250000,
      benefits: [
        { label: '간편결제 10% 할인', cats: ['카페', '온라인 쇼핑', '배달앱'], kind: 'discount', rate: 10, cap: 6000, used: 1000, easy: 'only', timing: '청구 시 할인' },
        { label: '편의점 10% 할인', cats: ['편의점'], kind: 'discount', rate: 10, cap: 2000, used: 0, easy: 'include', timing: '청구 시 할인' }
      ] },
    { id: 'cash', issuer: '예시A카드', name: '예시 캐시백 체크', type: '체크', color: '#B45309', tierMin: 0, prevTier: 'none', monthSpend: 60000,
      benefits: [
        { label: '전 가맹점 0.5% 캐시백', cats: ['*'], kind: 'cashback', rate: 0.5, easy: 'include', timing: '다음 달 지급' },
        { label: '편의점 3% 캐시백', cats: ['편의점'], kind: 'cashback', rate: 3, cap: 2000, used: 0, easy: 'include', timing: '다음 달 지급' }
      ] },
    { id: 'mall', issuer: '예시C카드', name: '예시 쇼핑몰 제휴 신용', type: '신용', color: '#C2410C', tierMin: 0, prevTier: 'none', monthSpend: 90000,
      memberLabel: '쇼핑몰 멤버십 회원인가요?', isMember: true,
      benefits: [
        { label: '쿠팡 4% 적립 (멤버십 회원)', brands: ['쿠팡'], kind: 'mpoint', rate: 4, member: true, pointName: '쿠팡캐시', pointPlace: '쿠팡', easy: 'include', timing: '다음 달 적립' },
        { label: '쿠팡 2% 적립 (비회원)', brands: ['쿠팡'], kind: 'mpoint', rate: 2, member: false, pointName: '쿠팡캐시', pointPlace: '쿠팡', easy: 'include', timing: '다음 달 적립' },
        { label: '쿠팡이츠 2% 적립', brands: ['쿠팡이츠'], kind: 'mpoint', rate: 2, pointName: '쿠팡캐시', pointPlace: '쿠팡', easy: 'include', timing: '다음 달 적립' },
        { label: '기본 0.5% 포인트', cats: ['*'], kind: 'point', rate: 0.5, easy: 'include', timing: '다음 달 적립' }
      ] },
    { id: 'pending', issuer: '예시A카드', name: '예시 기본 체크', type: '체크', color: '#9AA1AF', tierMin: 0, prevTier: 'none', monthSpend: 0, status: 'pending', benefits: [] }
  ];
}

var CATALOG = [
  { id: 'transit', issuer: '예시A카드', name: '예시 대중교통 체크', type: '체크', color: '#0369A1', tierMin: 200000,
    benefits: [ { label: '대중교통 10% 할인', cats: ['대중교통'], kind: 'discount', rate: 10, cap: 3000, used: 0, easy: 'include', timing: '청구 시 할인' } ] },
  { id: 'flat', issuer: '예시B카드', name: '예시 무실적 적립 신용', type: '신용', color: '#475569', tierMin: 0,
    benefits: [ { label: '전 가맹점 1% 포인트', cats: ['*'], kind: 'point', rate: 1, easy: 'include', timing: '다음 달 적립' } ] },
  { id: 'mall2', issuer: '예시C카드', name: '예시 쇼핑몰 제휴 체크', type: '체크', color: '#9A3412', tierMin: 0, memberLabel: '쇼핑몰 멤버십 회원인가요?',
    benefits: [ { label: '쿠팡 2% 적립 (멤버십 회원)', brands: ['쿠팡'], kind: 'mpoint', rate: 2, member: true, pointName: '쿠팡캐시', pointPlace: '쿠팡', easy: 'include', timing: '다음 달 적립' } ] }
];

function fmt(n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

function applies(b, card, m) {
  if (b.member === true && !card.isMember) return false;
  if (b.member === false && card.isMember) return false;
  if (b.brands) return !!m.brand && b.brands.indexOf(m.brand) >= 0;
  if (b.cats) return b.cats.indexOf(m.cat) >= 0 || b.cats.indexOf('*') >= 0;
  return false;
}

function remainingCap(b) { return b.cap ? Math.max(0, b.cap - (b.used || 0)) : null; }

// 카드 하나의 계산 결과
function computeCard(card, m, amount, pay, mileValue) {
  var r = { card: card, value: 0, maxValue: 0, parts: [], notes: [], tips: [], status: 'ok', reason: '', conditional: false, headline: '', sub: '' };
  if (card.status === 'pending') { r.status = 'na'; r.reason = '혜택 정보 준비 중 (검수 대기)'; return r; }
  if (m.overseas) { r.status = 'na'; r.reason = '해외 결제는 아직 계산하지 않아요'; return r; }
  var list = card.benefits.filter(function (b) { return applies(b, card, m); });
  if (!list.length) { r.status = 'zero'; r.reason = '이 가맹점은 혜택 대상이 아니에요'; return r; }
  var isEasy = pay !== 'card';
  var total = 0, kinds = {};
  list.forEach(function (b) {
    var p = { label: b.label, kind: b.kind, value: 0, formula: '', note: '', timing: b.timing, miles: 0 };
    var raw = 0;
    if (b.kind === 'mile') { p.miles = Math.floor(amount / b.per) * b.unit; raw = p.miles * mileValue; p.formula = fmt(amount) + '원 ÷ ' + fmt(b.per) + ' × ' + b.unit + ' = ' + p.miles + '마일 × ' + mileValue + '원'; }
    else if (b.fixed) { raw = b.fixed; p.formula = fmt(b.minAmount || 0) + '원 이상 결제 시 ' + fmt(b.fixed) + '원'; }
    else { raw = Math.floor(amount * b.rate / 100); p.formula = fmt(amount) + '원 × ' + b.rate + '% = ' + fmt(raw) + '원'; }
    var blocked = false;
    if (b.easy === 'exclude' && isEasy) { blocked = true; p.note = payName(pay) + '로 결제하면 제외'; r.notes.push(payName(pay) + '로 내면 “' + b.label + '”이 빠져요'); }
    if (b.easy === 'only' && !isEasy) { blocked = true; p.note = '간편결제로만 적용'; }
    if (!blocked && b.minAmount && amount < b.minAmount) { blocked = true; p.note = fmt(b.minAmount) + '원 이상 결제 시 적용'; }
    var v = blocked ? 0 : raw;
    var rem = remainingCap(b);
    if (!blocked && rem !== null) {
      if (rem <= 0) { v = 0; p.note = '이번 달 한도 소진'; }
      else if (v > rem) { v = rem; p.note = '한도 ' + fmt(rem) + '원 남아 일부만 적용'; }
    }
    if (b.easy === 'only' && !isEasy) {
      var alt = Math.floor(amount * b.rate / 100); if (rem !== null) alt = Math.min(alt, rem);
      if (alt > 0) r.tips.push('네이버페이·카카오페이로 내면 +' + fmt(alt) + '원');
    }
    p.value = v; p.raw = raw; p.rem = rem;
    if (b.kind === 'mpoint') p.sub = (v > 0 ? fmt(v) + '원 상당 ' : '') + b.pointName + ' · ' + b.pointPlace + '에서만 사용';
    total += v;
    if (v > 0) kinds[b.kind] = true;
    r.parts.push(p);
  });
  // 전월 실적
  if (card.tierMin > 0) {
    if (card.prevTier === 'unmet') { r.maxValue = total; total = 0; r.reason = '전월 실적 미달 (' + fmt(card.tierMin / 10000) + '만원 필요)'; }
    else if (card.prevTier === 'unknown') { r.maxValue = total; total = 0; r.reason = '지난달 실적을 몰라요 · 미달이면 0원'; }
  }
  r.value = total;
  var ks = Object.keys(kinds);
  if (total > 0) {
    if (ks.length === 1 && ks[0] === 'discount') r.headline = fmt(total) + '원 할인';
    else if (ks.length === 1 && ks[0] === 'cashback') r.headline = fmt(total) + '원 캐시백';
    else r.headline = fmt(total) + '원 상당';
    var subs = [];
    r.parts.forEach(function (p) {
      if (p.value <= 0) return;
      if (p.kind === 'discount') subs.push(fmt(p.value) + '원 할인');
      else if (p.kind === 'cashback') subs.push(fmt(p.value) + '원 캐시백');
      else if (p.kind === 'point') subs.push(fmt(p.value) + 'P 적립');
      else if (p.kind === 'mile') subs.push(p.miles + '마일 적립');
      else if (p.kind === 'mpoint') subs.push(fmt(p.value) + '원 쿠팡캐시');
    });
    r.sub = subs.length > 1 ? '= ' + subs.join(' + ') : (r.headline.indexOf('상당') >= 0 ? subs[0] : '');
    r.status = 'ok';
  } else {
    r.status = 'zero';
    if (!r.reason) {
      var n = r.parts.filter(function (p) { return p.note; })[0];
      r.reason = n ? n.note : '혜택 없음';
    }
  }
  if (r.maxValue > 0) r.conditional = true;
  return r;
}

function shortfall(card) { return card.tierMin > 0 && card.monthSpend < card.tierMin ? card.tierMin - card.monthSpend : 0; }
function capRoom(res) {
  var min = null;
  res.parts.forEach(function (p) { if (p.rem !== null && p.rem !== undefined && (min === null || p.rem < min)) min = p.rem; });
  return min === null ? Infinity : min;
}

// 전체 순위
function rankAll(cards, m, amount, pay, mileValue, tiePick) {
  var res = cards.map(function (c) { return computeCard(c, m, amount, pay, mileValue); });
  var ok = res.filter(function (r) { return r.value > 0; }).sort(function (a, b) { return b.value - a.value; });
  var others = res.filter(function (r) { return r.value <= 0; });
  var out = { best: null, ties: [], tieReason: '', options: [], rest: [], others: others };
  if (!ok.length) return out;
  var top = ok[0].value;
  var tie = ok.filter(function (r) { return top - r.value <= 100; });
  var best = tie[0];
  if (tie.length > 1) {
    var sf = tie.filter(function (r) { return shortfall(r.card) > 0; }).sort(function (a, b) { return shortfall(b.card) - shortfall(a.card); });
    var room = tie.slice().sort(function (a, b) { return capRoom(b) - capRoom(a); });
    var chk = tie.filter(function (r) { return r.card.type === '체크'; });
    if (sf.length) { best = sf[0]; out.tieReason = '이번 달 실적이 ' + fmt(shortfall(best.card)) + '원 부족해요'; }
    else if (capRoom(room[0]) !== capRoom(room[room.length - 1])) { best = room[0]; out.tieReason = '이번 달 한도가 가장 넉넉해요'; }
    else if (chk.length) { best = chk[0]; out.tieReason = '체크카드라 소득공제율이 유리해요'; }
    else out.tieReason = '혜택이 가장 커요';
    var opts = [];
    if (sf.length) opts.push({ tag: '실적 채우기', r: sf[0], why: '실적 ' + fmt(shortfall(sf[0].card)) + '원 부족' });
    var rm = room[0]; if (capRoom(rm) !== Infinity) opts.push({ tag: '한도 여유', r: rm, why: '한도 ' + fmt(capRoom(rm)) + '원 남음' });
    if (chk.length) opts.push({ tag: '소득공제 유리', r: chk[0], why: '체크카드' });
    out.options = opts;
    out.ties = tie;
    if (tiePick) { var pk = tie.filter(function (r) { return r.card.id === tiePick; })[0]; if (pk) { best = pk; out.tieReason = '직접 고른 카드'; } }
  }
  out.best = best;
  out.rest = ok.filter(function (r) { return r !== best; });
  return out;
}

if (typeof module !== 'undefined') module.exports = { initialCards: initialCards, MERCHANTS: MERCHANTS, rankAll: rankAll, computeCard: computeCard, fmt: fmt };
