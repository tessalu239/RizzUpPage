const container=document.querySelector(".container");
    const question=document.querySelector(".question");
    const mainGIF=document.querySelector(".mainGIF");
    const yBtn=document.querySelector(".yBtn");
    const nBtn=document.querySelector(".nBtn");

    yBtn.addEventListener("click", ()=>{
        question.innerHTML="Yay, let me know the date😉";
        mainGIF.src="giphy.gif";
    });

    nBtn.addEventListener("mouseover",()=>{
        const nBtnJump=nBtn.getBoundingClientRect();
        const maxX=window.innerWidth-nBtnJump.width;
        const maxY=window.innerHeight-nBtnJump.height;

        const randomX = Math.floor(Math.random() * maxX);

        const randomY = Math.floor(Math.random() * maxY);

        nBtn.style.left = randomX + "px";
        nBtn.style.top = randomY + "px";
    });