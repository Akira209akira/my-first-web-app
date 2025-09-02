// ここからコードを書いてください
export const setupConverter = () => {
  // 変換ロジックに必要な要素を取得する
  const converterForm = document.querySelector(".converter-form");
  const converterInput = document.querySelector(".converter-input");
  const converterFrom = document.querySelector(".converter-from");
  const converterTo = document.querySelector(".converter-to");
  const converterResult = document.querySelector(".converter-result");

  // 単位データを定義する
  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];

  // 単位選択欄 (From / To )を初期化する
  lengthUnit.forEach((unit) => {
    const optionFrom = document.createElement("option");
    optionFrom.value = unit.base;
    optionFrom.textContent = unit.name;
    converterFrom.appendChild(optionFrom);

    const optionTo = document.createElement("option");
    optionTo.value = unit.base;
    optionTo.textContent = unit.name;
    converterTo.appendChild(optionTo);
  });

  converterFrom.selectedIndex = 0; // meter
  converterTo.selectedIndex = 1; // kilometer

  // 変換処理を実装する
  const convertUnits = () => {
    const inputValue = parseFloat(converterInput.value);

    // 入力値が数値でない場合はエラーメッセージを表示して終了
    if (isNaN(inputValue)) {
      converterResult.textContent = "Please enter a valid number";
      return;
    }

    const fromBase = parseFloat(converterFrom.value);
    const toBase = parseFloat(converterTo.value);

    // 計算
    const convertedValue = (inputValue * fromBase) / toBase;
    const fromName =
      converterFrom.options[converterFrom.selectedIndex].textContent;
    const toName = converterTo.options[converterTo.selectedIndex].textContent;

    // 結果表示
    converterResult.textContent = `${inputValue} ${fromName} = ${convertedValue.toFixed(
      3
    )} ${toName}`;
  };

  // リアルタイムに変換が行われるようにする
  converterForm.addEventListener("input", convertUnits);

  // 起動時にも結果を表示
  convertUnits();
};
