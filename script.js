function run () {
    let code_html = document.getElementById('html-code');
    let code_css = document.getElementById('css-code');
    let code_js = document.getElementById('js-code');
    let output = document.getElementById('output');

    output.contentDocument.body.innerHTML = code_html.value + "<style>" + code_css.value + "</style>";
    output.contentWindow.eval(code_js.value);
}