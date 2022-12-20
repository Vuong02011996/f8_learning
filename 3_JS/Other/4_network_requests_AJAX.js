//  AJAX: Asynchronous JavaScript And XML -  network requests from JavaScript. 
// https://javascript.info/fetch


canvasElem.onmousemove = function(e) {
    let ctx = canvasElem.getContext('2d');
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  };

  async function submit() {
    let blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));
    let response = await fetch('/article/fetch/post/image', {
      method: 'POST',
      body: blob
    });

    // the server responds with confirmation and the image size
    let result = await response.json();
    alert(result.message);
  }