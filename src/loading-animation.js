var loadingAnimation = anime ({
  targets: 'div.loading-circle',
  translateY: [
    {
      value: -10,
      duration: 1000
    },
    {
      value: 0,
      duration: 1500
    },
  ],
  backgroundColor: [
    {
      value: '#FFF',
      duration: 100,
      easing: 'linear'
    },
    {
        value: '#BEBEBE',
        duration: 100,
        easing: 'linear',
        delay: 1000
    }
  ],
  delay: function(el, i, l) {return i * 1000},
  loop: true
});
