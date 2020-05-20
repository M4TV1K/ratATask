
window.onload = () => {
    const questionsHolder = document.querySelector('#questionsHolder');
    document.querySelectorAll('.deleteButton').forEach((btn) => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.question').forEach((question) => {
                if (btn.id.split('-')[1] === question.id.split('-')[1]) {
                    questionsHolder.removeChild(question);
                }
            })
        });
    });
};