        async function fetchQuote(){
            try{
                const response = await fetch("https://api.quotable.io/random");
                const data = await response.json();
                return data.content + "---" + data.author;
            } catch(error) {
                console.log("Error : " + error);
                return "Failed to fetch a quote. Please try again later."
            }
        }

        

        async function generateQuote(){
            const quoteElement = document.querySelector("#quote");
            quoteElement.textContent = "Fetching Quote....";
            const quote = await fetchQuote();
            quoteElement.textContent = quote;
        }

        const copyBtn = document.querySelector("#copyBtn");
        copyBtn.addEventListener("click", () => {
            const quoteElement = document.querySelector("#quote");
            const quote = quoteElement.textContent;
            navigator.clipboard.writeText(quote).then(()=>{alert("Quote is copied!")})
        })

        const generateBtn = document.querySelector("#generateBtn");
        generateBtn.addEventListener("click", ()=>{
            generateQuote();
        })
