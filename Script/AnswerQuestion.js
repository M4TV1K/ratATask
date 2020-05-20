
window.onload = () => {
    document.querySelectorAll('.questionText').forEach((question) => {
        question.addEventListener('click', () => {
            document.querySelectorAll('.questionBlock').forEach((block) => {
                if (question.id.split('-')[1] === block.id.split('-')[1]) {
                    let oldForm = document.querySelector('#' + block.id + '> form');
                    if (!block.contains(oldForm)) {
                        let form = document.createElement('form');
                        let textarea = document.createElement('textarea');
                        form.appendChild(textarea);
                        let br = document.createElement('br');
                        form.appendChild(br);
                        let submit = document.createElement('button');
                        submit.className = 'answerBtn';
                        submit.innerHTML = 'ВІДПОВІСТИ';
                        submit.addEventListener('click', (evt) => {
                            /*TODO ЗАПИСУЄ ВІДПОВІДЬ НА ЗАПИТАННЯ АБО РОБИТЬ ЦЕ НА БЕКЕНДІ*/
                            evt.preventDefault();
                            block.removeChild(form);
                        });
                        submit.disabled = true;
                        textarea.addEventListener('input', () => {
                            submit.disabled = textarea.value.length <= 10;
                        });
                        form.appendChild(submit);
                        block.appendChild(form);
                    }
                    else block.removeChild(oldForm);
                }
            });
        })
    });

};