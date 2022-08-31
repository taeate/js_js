const quotes = [
  {
    quote: "개같이 벌어서 개같이 쓴다.",
    author: "- 안성진 -",
  },
  {
    quote: "인생은 성진이처럼.",
    author: "- 정가람 -",
  },
  {
    quote: "여자 잘못 만나면 인생 꼬인다.",
    author: "- 이준기 -",
  },
  {
    quote: "전여친 보고싶다.",
    author: "- 강한솔 -",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;