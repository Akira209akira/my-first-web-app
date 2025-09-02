// ここからコードを書いてください
export function setupTabs() {
  const homeTab = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');
  const homeSection = document.getElementById("home");
  const converterSection = document.getElementById("converter");

  homeTab.addEventListener("click", () => {
    // 単位変換セクションを非表示にするために .hidden クラスを追加
    converterSection.classList.add("hidden");
    // ホームセクションを表示するために .hidden クラスを削除
    homeSection.classList.remove("hidden");
  });

  converterTab.addEventListener("click", () => {
    // ホームセクションを非表示にするために .hidden クラスを追加
    homeSection.classList.add("hidden");
    // 単位変換セクションを表示するために .hidden クラスを削除
    converterSection.classList.remove("hidden");
  });
}
