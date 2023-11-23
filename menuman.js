const nav = (()=>{


    function layerChange(){


        let buttons = [
            document.getElementById("mob-top1"),
            document.getElementById("mob-top2"),
            document.getElementById("mob-top3")
        ];

        let base = document.getElementById("planetimage");
        let baseText = document.getElementById("planetdesc");

        let internal = document.getElementById("planetimage-internal");
        let internalText =document.getElementById("structure");

        let geology = document.getElementById("planetimage-geology");
        let geologyText = document.getElementById("surface");

        buttons.forEach(button => {
            button.addEventListener("click", handleClick)
        })


        function handleClick () {
            buttons.forEach(buttonNav =>{
                buttonNav.classList.remove("top-active")


                this.classList.add("top-active")

                console.log(this.id)

            })

            switch(this.id){
                case "mob-top1":
                    base.style.display = "flex";
                    baseText.style.display = "flex";

                    internal.style.display = "none";
                    internalText.style.display = "none";

                    geology.style.display = "none";
                    geologyText.style.display = "none";
                break;
                case "mob-top2":
                    base.style.display = "none";
                    baseText.style.display = "none";

                    internal.style.display = "flex";
                    internalText.style.display = "flex";

                    geology.style.display = "none";
                    geologyText.style.display = "none";
                break;
                case "mob-top3":
                    base.style.display = "none";
                    baseText.style.display = "none";

                    internal.style.display = "none";
                    internalText.style.display = "none";

                    geology.style.display = "flex";
                    geologyText.style.display = "flex";

            }

        }



    }



layerChange();

})();

