'use strict';

{
  const open = document.getElementById('open')
  const overlay = document.querySelector('.overlay')
  const close = document.getElementById('close')

  open.addEventListener('click', () => {
    overlay.classList.add('show')
  })

  close.addEventListener('click', () => {
    overlay.classList.remove('show')
  })
}

{
  const targets = document.querySelectorAll('.move');

  function callback(entries, obs) {
    console.log(entries);

    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
  
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
    rootMargin:'0px 0px -100px',
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(target => {
    observer.observe(target);
  });
}

{
  const targets = document.querySelectorAll('.shift');

  // ②
  function callback(entries, obs) {
    console.log(entries);

    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('active');

      obs.unobserve(entry.target)
    });
  }

  const options = {
    threshold: 0.2,
    rootMargin:'0px 0px -100px',
  }

  // インスタンス①
  const observer = new IntersectionObserver(callback, options);

  targets.forEach(target => {
    observer.observe(target);
  })
}

// 画像切り替え

  {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const largeImgs = document.querySelectorAll('.large-img');
  
    thumbnails[0].addEventListener('click', () => {
      largeImgs[0].classList.add('active');
      largeImgs[1].classList.remove('active');
      largeImgs[2].classList.remove('active');
      largeImgs[3].classList.remove('active');
    });
    thumbnails[1].addEventListener('click', () => {
      largeImgs[1].classList.add('active');
      largeImgs[0].classList.remove('active');
      largeImgs[2].classList.remove('active');
      largeImgs[3].classList.remove('active');
    });
    thumbnails[2].addEventListener('click', () => {
      largeImgs[2].classList.add('active');
      largeImgs[1].classList.remove('active');
      largeImgs[0].classList.remove('active');
      largeImgs[3].classList.remove('active');
    });
    thumbnails[3].addEventListener('click', () => {
      largeImgs[3].classList.add('active');
      largeImgs[1].classList.remove('active');
      largeImgs[2].classList.remove('active');
      largeImgs[0].classList.remove('active');
    });
  }
