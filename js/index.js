
$(document).ready(function(){
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    function Circle(x, y, dx, dy, radius, alpha = 1){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.alpha = alpha;

        this.draw = () => {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctx.fill();
        }

        this.update = () => {
            if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
                this.dx = -this.dx;
            }
            if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;

            this.draw();
        }
    }

    const circleArray = [];

    for(var i=0; i<200; i++){
        const radius = Math.random() * 3;
        const x = Math.random() * (innerWidth - radius * 2) + radius;
        const y = Math.random() * (innerHeight - radius * 2) + radius;
        const dx = (Math.random() - 0.5) * 1.5;
        const dy = (Math.random() - 0.5) * 1.5;
        const alpha = Math.random()

        circleArray.push(new Circle(x, y, dx, dy, radius, alpha));
    }

    function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        circleArray.forEach(circle => {
            circle.update();
        })
    }
    animate();
});

$(document).ready(function(){
    window.onload = () => {
    $(".loader").fadeOut();
    }
});

$(document).ready(function(){
    $("#hamburger").hide();

    $(window).scroll(function(){
      if($(this).scrollTop() > 3000){
        $("#hamburger").fadeIn();
      }else{
        $("#hamburger").fadeOut();
      }
    });

    const modalOne = document.getElementById("skils-section-modal-1");
      const modalTwo = document.getElementById("skils-section-modal-2");
      const modalThree = document.getElementById("skils-section-modal-3");
      const oneMore = document.getElementById("skils-section-box-1");
      const twoMore = document.getElementById("skils-section-box-2");
      const threeMore = document.getElementById("skils-section-box-3");
      const modalOneClose = document.getElementById("close1");
      const modalTwoClose = document.getElementById("close2");
      const modalThreeClose = document.getElementById("close3");

      oneMore.addEventListener("click", function(){
        modalOne.style.display = "block";
        $("body").css("overflow", "hidden");
      });
      modalOneClose.addEventListener("click", function(){
        modalOne.style.display = "none";
        $("body").css("overflow", "scroll");
      });

      twoMore.addEventListener("click", function(){
        modalTwo.style.display = "block";
        $("body").css("overflow", "hidden");
      });
      modalTwoClose.addEventListener("click", function(){
        modalTwo.style.display = "none";
        $("body").css("overflow", "scroll");
      });

      threeMore.addEventListener("click", function(){
        modalThree.style.display = "block";
        $("body").css("overflow", "hidden");
      });
      modalThreeClose.addEventListener("click", function(){
        modalThree.style.display = "none";
        $("body").css("overflow", "scroll");
      });

});