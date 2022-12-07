"use strict";

// Database
const faqDB = [
  { 
    id: 1,
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, hic?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non possimus perspiciatis quidem iste eveniet odit unde reiciendis numquam. Debitis distinctio sed molestiae nam, ipsam asperiores."
  },
  { 
    id: 2,
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    answer: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non possimus perspiciatis quidem iste eveniet odit unde reiciendis numquam. Debitis distinctio sed molestiae nam, ipsam asperiores."
  },
  { 
    id: 3,
    question: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptatibus nihil doloribus.?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non possimus perspiciatis quidem iste eveniet odit unde reiciendis numquam. Debitis distinctio sed molestiae nam, ipsam asperiores."
  }
];

// DOM
const faqBox = document.querySelector('.js-faq-wrapper');

// Functions
const loadFaqData = function() {
  faqDB.reverse().forEach((item)=> {
    let itemData = 
    `
      <div class="faq__item">
        <div class="faq__question">
          <div class="faq__question-text">${item.question}</div>
          <span class="material-symbols-outlined faq__question-button js-faq__question-button">add_box</span>
        </div>
        <div class="faq__answer">${item.answer}</div>
      </div>
    `;
    faqBox.insertAdjacentHTML("afterbegin", itemData);
  })
};

const changeItem = function(btn) {
  changeQuestion(btn);
  changeButton(btn);
  changeAswer(btn)
};

const changeButton = function(btn) {
  let question = btn.parentElement;
  if(question.classList.contains('faq__question-active')) {
    btn.innerHTML = `indeterminate_check_box`;
  } else if (!question.classList.contains('faq__question-active')){
    btn.innerHTML = `add_box`;
  }
};

const changeQuestion = function(btn) {
  let question = btn.parentElement;
  question.classList.toggle('faq__question-active');
}

const changeAswer = function(btn) {
  let answer = btn.parentElement.nextElementSibling;
  answer.classList.toggle('faq__answer-active');
}

// Events
loadFaqData();
const faqBtns = document.querySelectorAll('.js-faq__question-button');

faqBtns.forEach((item) => {
  item.addEventListener('click', ()=> {
    changeItem(item);
  })
})

