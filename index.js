const testimonials = [
  {
    name: 'Idette',
    photoURL:
      'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    text: 'I would like to personally thank you for your outstanding product. This is simply unbelievable!',
  },
  {
    name: 'Brandon S',
    photoURL:
      'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80',
    text: 'I would like to personally thank you for your outstanding product. I will recommend you to my colleagues. Colorful fruit supplies has really helped our business.',
  },
  {
    name: 'Diahann E',
    photoURL:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    text: "If you want real marketing that works and effective implementation - Colorful fruit supplies's got you covered. Colorful fruit supplies did exactly what you said it does. I use Colorful fruit supplies often.",
  },
];

const imgEl = document.querySelector('img');
const textEl = document.querySelector('.text');
const usernameEl = document.querySelector('.username');

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoURL, text } = testimonials[idx];
  imgEl.src = photoURL;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 15000);
}
