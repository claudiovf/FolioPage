
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    $('.start-spacer').css({
      opacity: function() {
        var elementHeight = $(this).height(),
          opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 1);
  
        return opacity;
      }
    });
  });
  
// let para = document.getElementById('para');
// let panels = document.getElementById('panels');
// let panelImg = document.getElementById('panelimg');

// function readMore() {
//     console.log('hello');
//     para.textContent = 'READ MORE';
//     panelImg.style.opacity = 0.5;


// }

// function readLess(){
//     console.log('hello');
//     para.textContent = '';
//     panels.style.opacity = 1;

// }
// panels.addEventListener('mouseover', readMore);
// panels.addEventListener('mouseout', readLess);