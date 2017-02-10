  var btn = document.querySelector('#tr_btn'),
      input = document.querySelector('#input'),
      result = document.querySelector('.result');

  function translate(input) {

    var xhr = new XMLHttpRequest(),
        key = 'trnsl.1.1.20170210T164335Z.65c98b3236c65197.28e5d75a40a2853a96dd2db762788f386714f502',
        parent = /[а-яёЁ]/i,
        language = (parent.test(input)) ? 'ru-en' : 'en-ru',
        url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?';


    xhr.open('get', url + 'key=' + key + '&lang=' + language + '&text=' + input);
    xhr.onload = function () {
      var res = JSON.parse(xhr.responseText);
      result.innerHTML = "";
      for (var i in res.text) {
        result.innerHTML = (res.text[i] + " ");
      };
    };
    xhr.send(null);
  };


  btn.addEventListener('click', function () {
    translate(input.value);
  });
