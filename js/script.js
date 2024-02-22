function scrollImages(direction) {
    const overall = document.querySelectorAll('.overall');
    const button = document.querySelectorAll('.rightCardButton');
    const lfButton = document.querySelectorAll('.leftCardButton');
    const cardWidth = document.querySelector('.cardItem').offsetWidth;

    button.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            overall[index].scrollBy({
                left: direction * cardWidth * 4,
                behavior: 'smooth'
            });
        });
    });

    lfButton.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            overall[index].scrollBy({
                left: direction * cardWidth * 4,
                behavior: 'smooth'
            });
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
                        const lfButton = document.querySelectorAll('.leftCardButton');
                        lfButton.forEach((btn, index) => {
                                btn.style.visibility = "hidden";
                        });
                        //deals on top sale side button,
                        let dotsRBtn=document.getElementById("dotsRBtn");
                        let dotsLBtn=document.getElementById("dotsLBtn");
                        dotsRBtn.addEventListener("click", function() {
                            dotsLBtn.style.visibility="visible";
                            dotsRBtn.style.visibility="hidden";
                        });
                        dotsLBtn.addEventListener("click", function() {
                            dotsLBtn.style.visibility="hidden";
                            dotsRBtn.style.visibility="visible";
                        });

                        //wide banner side button,
                        let wBRBtn=document.getElementById("wideBannerRightBtn");
                        let wBLBtn=document.getElementById("wideBannerLeftBtn");
                        wBRBtn.addEventListener("click", function() {
                            wBLBtn.style.visibility="visible";
                            wBRBtn.style.visibility="hidden";
                        });
                        wBLBtn.addEventListener("click", function() {
                            wBLBtn.style.visibility="hidden";
                            wBRBtn.style.visibility="visible";
                        });
                        //Ajio Exclusive
                        let ajioStart=0;
                        let ajioExRBtn=document.getElementById("ajioExRBtn");
                        let ajioExLBtn=document.getElementById("ajioExLBtn");
                        ajioExRBtn.addEventListener("click",function(){
                            if(ajioStart==0){
                                ajioExLBtn.style.visibility="visible";
                                ajioExRBtn.style.visibility="visible";
                                ajioStart++;
                            }else if(ajioStart==1){
                                ajioExLBtn.style.visibility="visible";
                                ajioExRBtn.style.visibility="hidden";
                                ajioStart++;
                            }
                        })
                        ajioExLBtn.addEventListener("click",function(){
                            if(ajioStart==2){
                                ajioExLBtn.style.visibility="visible";
                                ajioExRBtn.style.visibility="visible";
                                ajioStart--;
                            }else if(ajioStart==1){
                                ajioExLBtn.style.visibility="hidden";
                                ajioExRBtn.style.visibility="visible";
                                ajioStart--;
                            }
                        })
                        //super stylish brands
                        let ssbRBtn=document.getElementById("ssbRBtn");
                        let ssbLBtn=document.getElementById("ssbLBtn");
                        ssbRBtn.addEventListener("click", function() {
                            ssbLBtn.style.visibility="visible";
                            ssbRBtn.style.visibility="hidden";
                        });
                        ssbLBtn.addEventListener("click", function() {
                            ssbLBtn.style.visibility="hidden";
                            ssbRBtn.style.visibility="visible";
                        });
                        //Must have classics side button
                        let mhcStart=0;
                        let mhcRBtn=document.getElementById("mhcRBtn");
                        let mhcLBtn=document.getElementById("mhcLBtn");
                        mhcRBtn.addEventListener("click",function(){
                            if(mhcStart==0){
                                mhcLBtn.style.visibility="visible";
                                mhcRBtn.style.visibility="visible";
                                mhcStart++;
                            }else if(mhcStart==1){
                                mhcLBtn.style.visibility="visible";
                                mhcRBtn.style.visibility="hidden";
                                mhcStart++;
                            }
                        })
                        mhcLBtn.addEventListener("click",function(){
                            if(mhcStart==2){
                                mhcLBtn.style.visibility="visible";
                                mhcRBtn.style.visibility="visible";
                                mhcStart--;
                            }else if(mhcStart==1){
                                mhcLBtn.style.visibility="hidden";
                                mhcRBtn.style.visibility="visible";
                                mhcStart--;
                            }
                        })

});

