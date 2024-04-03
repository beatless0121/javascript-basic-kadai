const btn = document.getElementById('btn');
const text = document.getElementById('text');

//2秒後にテキスト変更
btn.addEventListener('click', () => {
    setTimeout(() => {
        text.textContent = "ボタンをクリックしました";
    }, 2000);
});

