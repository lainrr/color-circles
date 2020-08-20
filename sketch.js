function setup() {
    createCanvas(800, 800);
  }
  
  function draw() {
    
    noStroke();
    let salmon = '#e07a5f';
    let navy = '#3d405b';
    let green = '#81b29a';
    let yellow = '#f2cc8f';

    if (mouseX > 400 && mouseY < 400) {
        fill(salmon);
        ellipse(200, 200, 200, 200);
        fill(navy);
        ellipse(600, 200, 200, 200);
        fill(green);
        ellipse(200, 600, 200, 200);
        fill(yellow);
        ellipse(600, 600, 200, 200);
    }


    if (mouseX < 400 && mouseY < 400) {
        fill(navy);
        ellipse(200, 200, 200, 200);
        fill(green);
        ellipse(600, 200, 200, 200);
        fill(yellow);
        ellipse(200, 600, 200, 200);
        fill(salmon);
        ellipse(600, 600, 200, 200);
    }

    if (mouseX > 400 && mouseY > 400) {
        fill(green);
        ellipse(200, 200, 200, 200);
        fill(yellow);
        ellipse(600, 200, 200, 200);
        fill(salmon);
        ellipse(200, 600, 200, 200);
        fill(navy);
        ellipse(600, 600, 200, 200);
    }

    if (mouseX < 400 && mouseY > 400) {
        fill(yellow);
        ellipse(200, 200, 200, 200);
        fill(salmon);
        ellipse(600, 200, 200, 200);
        fill(navy);
        ellipse(200, 600, 200, 200);
        fill(green);
        ellipse(600, 600, 200, 200);
    }


  }