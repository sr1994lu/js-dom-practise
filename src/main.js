const deray = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
const messageArray = [
  'お名前',
  'ふりがな',
  'メールアドレス',
  '電話番号',
  '携帯電話番号'
];

document.getElementById('test').onclick = () => {
  const test = () => {
    for (let i = 0; i < document.forms[0].elements.length; i++) {
      if (document.forms[0].elements[i].value == '') {
        (async function () {
          await (() =>
              document
              .getElementById('alert' + i)
                  .innerHTML = '<p>' +
                  messageArray[i] + 'を入力してください' +
                  '</p>')();
          if (document.forms[0].elements[i].value == '') {
            const child = document.createElement('li');
            child.innerHTML = messageArray[i] + 'が入力されていません。';
            const parent = document.getElementById('alertAll');
            parent.appendChild(child);
          }
        })();
      }
    }
  };
  test();
};

console.log(document.forms[0].elements[0]);
