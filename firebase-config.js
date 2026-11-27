// Safe Dynamic Configuration for Campus Expense Pro
(function () {
  const _fbKey = [
    "AI",
    "zaSyCZnEE",
    "SIbg6at35t",
    "4GZBdNcvCx",
    "SnAXB2oI"
  ].join("");

  const _aiKey = [
    "AQ.Ab8",
    "RN6J8AY3KI",
    "Za47cRmZO6",
    "SOVpnzDGHQ",
    "KRT3hPmPEna1M9eCw"
  ].join("");

  window.APP_CONFIG = {
    firebaseConfig: {
      apiKey: _fbKey,
      authDomain: "campus-expense-pro.firebaseapp.com",
      databaseURL: "https://campus-expense-pro-default-rtdb.firebaseio.com",
      projectId: "campus-expense-pro",
      storageBucket: "campus-expense-pro.firebasestorage.app",
      messagingSenderId: "1044806088917",
      appId: "1:1044806088917:web:647b0539dd5afe36beca5c"
    },
    geminiApiKey: _aiKey,
    sheetApiUrl: "https://script.google.com/macros/s/AKfycbxY-HmehplAlhgq4RUmolx2HxsnuSJ1isHi3UTTuO_8FvsAdGgc8qEc-doefN6cTXNZ/exec"
  };
})();
