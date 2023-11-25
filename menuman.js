const nav = (() => {
    function layerChange() {
        let buttons = [
            document.getElementById("mob-top1"),
            document.getElementById("mob-top2"),
            document.getElementById("mob-top3")
        ];

        let base = document.getElementById("planetimage");
        let baseText = document.getElementById("planetdesc");

        let internal = document.getElementById("planetimage-internal");
        let internalText = document.getElementById("structure");

        let geology = document.getElementById("planetimage-geology");
        let geologyText = document.getElementById("surface");

        let wikiSource = document.getElementById("wikisource");
        let wikiSourceInternal = document.getElementById("wikisoure-internal");
        let wikiSourceSurface = document.getElementById("wikisource-surface");

        buttons.forEach(button => {
            button.addEventListener("click", handleClick);
        });

        function handleClick() {
            buttons.forEach(buttonNav => {
                buttonNav.classList.remove("top-active");
            });

            this.classList.add("top-active");

            console.log(this.id);

            switch (this.id) {
                case "mob-top1":
                    console.log("Switching to mob-top1");
                    base.style.display = "flex";
                    baseText.style.display = "flex";

                    internal.style.display = "none";
                    internalText.style.display = "none";

                    geology.style.display = "none";
                    geologyText.style.display = "none";
                    break;
                case "mob-top2":
                    console.log("Switching to mob-top2");
                    base.style.display = "none";
                    baseText.style.display = "none";

                    internal.style.display = "flex";
                    internalText.style.display = "flex";

                    geology.style.display = "none";
                    geologyText.style.display = "none";
                    break;
                case "mob-top3":
                    console.log("Switching to mob-top3");
                    base.style.display = "none";
                    baseText.style.display = "none";

                    internal.style.display = "none";
                    internalText.style.display = "none";

                    geology.style.display = "flex";
                    geologyText.style.display = "flex";
                    break;
            }
        }
    }

    layerChange();
})();


const mobileMenu = (() => {

    let menuButton = document.getElementById("menuclick");
    let menuDisplay = document.getElementById("menushow")


    menuButton.addEventListener("click", () => {
        menuDisplay.style.display = "inline-block"

        menuDisplay.style.translate = "-416px"
    })
})();

const loadJson = (() => {
    document.addEventListener("DOMContentLoaded", () => {
        const pageTitle = document.title;

        fetch("/data.json")
            .then(response => response.json())
            .then(data => {
                // Add debugging logs
                console.log("Data loaded:", data);

                const planet = document.getElementById("planetimage");
                const planetInner = document.getElementById("planetimage-internal");
                const planetGeology = document.getElementById("planetimage-geology");

                const planetTitle = document.getElementById("planettitle");

                const planetText = document.getElementById("planetdesc");
                const planetInnerText = document.getElementById("structure");
                const planetGeologyText = document.getElementById("surface");

                const planetRotation = document.getElementById("rotation");
                const planetRevolution =document.getElementById("revolution");
                const planetRadius = document.getElementById("radius");
                const planetTemp = document.getElementById("temp");

                const wikiSource = document.getElementById("wikisource");

                const pageIndex = getPageIndex(pageTitle);

                console.log(pageIndex)
                console.log(pageTitle)

                if (pageIndex < data.length) {
                    const planetData = data[pageIndex];

                    planetTitle.innerText = planetData.name;
                    planetText.innerText = planetData.overview.content;
                    planetInnerText.innerText = planetData.structure.content;
                    planetGeologyText.innerText = planetData.geology.content;

                    //image loaders

                    planet.src = planetData.images.planet
                    planetInner.src = planetData.images.internal
                    planetGeology.src = planetData.images.planet

                    //Planet details

                    planetRotation.innerText = planetData.rotation
                    planetRevolution.innerText = planetData.revolution
                    planetRadius.innerText = planetData.radius
                    planetTemp.innerText = planetData.temperature

                    //Wiki Facts

                    wikiSource.href = planetData.overview.source;

                    // Add debugging logs
                    console.log("Data displayed:", planetData);
                } else {
                    console.error('Invalid page title or JSON data index.');
                }
            })
            .catch(error => console.error('Error loading JSON file:', error));

            function getPageIndex(pageTitle) {
                console.log('Input pageTitle:', pageTitle);
            
                const pageMap = {
                    'Mercury': 0,
                    'Venus': 1,
                    'Earth': 2,
                    'Mars': 3,
                    'Jupiter': 4,
                    'Saturn': 5,
                    'Uranus': 6,
                    'Neptune': 7,
                };
            
                const pageIndex = pageMap[pageTitle];
                console.log('Mapped pageIndex:', pageIndex);
            
                const result = pageIndex;
                console.log('Result:', result);
            
                return result;
            }
    });
})();