const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The secret of getting ahead is getting started. - Mark Twain",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "In the midst of winter, I found there was, within me, an invincible summer. - Albert Camus",
    "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "I am not a product of my circumstances. I am a product of my decisions. - Stephen Covey",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Life isn't about finding yourself. Life is about creating yourself. - George Bernard Shaw",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The mind is everything. What you think you become. - Buddha",
    "Opportunities don't happen, you create them. - Chris Grosser,",
    "Your limitation—it's only your imagination. - Unknown",
    "Dream it. Wish it. Do it. - Unknown",
    "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
    "Push yourself, because no one else is going to do it for you. - Unknown",
    "Great things never come from comfort zones. - Unknown",
    "Success doesn't just find you. You have to go out and get it. - Unknown",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Dream bigger. Do bigger. - Unknown",
    "Don't stop when you're tired. Stop when you're done. - Unknown",

];


function generateQuote() {
    randomIndex = Math.floor(Math.random() * quotes.length)
    document.querySelector(".motivation").textContent = quotes[randomIndex]
}

document.querySelector(".motivation-button").addEventListener("click", generateQuote)

generateQuote();




// load in animation trigger

 // Function to check if an element is in the viewport
  function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle scroll event
  function handleScroll() {
    let elements = document.querySelectorAll('.article');
    elements.forEach(function(element) {
      if (isInViewport(element)) {
        element.classList.add('animate');
      }
    });
    // Remove the scroll event listener after the animation has been triggered for all elements
  }

  // Add a scroll event listener to trigger animation
  window.addEventListener('scroll', handleScroll);