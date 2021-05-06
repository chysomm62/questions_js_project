
// traversing the dom

// const buttons = document.querySelectorAll('.question-btn');

// buttons.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });


//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach( (questionContainer) => {
    // console.log(questionContainer);
    const clickBtn = questionContainer.querySelector('.question-btn');
    clickBtn.addEventListener('click', () => {
        questions.forEach( (item) => {
            if(item !== questionContainer){
                item.classList.remove('show-text')
            }
        });
        questionContainer.classList.toggle('show-text');
    });
});