function noIE(msg) {
  if (navigator.userAgent.indexOf("Trident") > 0) {
    location.href = `microsoft-edge:${location.href}`;
    alert(msg);
    setTimeout(close);
  }
}

noIE(
  "인터넷 익스플로러로 접속 시 홈페이지 이용이 제한됩니다. Google Chrome, Microsoft Edge 등 다른 브라우저로 다시 시도해 주세요. "
);
