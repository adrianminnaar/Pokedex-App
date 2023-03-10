function logic() {

    // First thing to do is get input from user
    let name = document.getElementById("name");
    let type = document.getElementById("type");
    let region = document.getElementById("region");
   


    // Will only give objects
    console.log( name + " name" + type + " type " + region + " region") // remove once you have clear understanding


    // Get String values of variables
    name = name.value;
    type = type.value;
    region = region.value;
    

    // Can log them since they are now pure Strings
    console.log( name +" "+ " name "+" " + type + " type" + region + " region") // remove once you have clear understanding
  
/*-----------------------------------------------
 * Add your solution code here
 *---------------------------------------------*/

    /* --- Part 1 : Create pokemon data Object --- */
    const pokemonName = name;
    const pokemonType = type;
    const pokemonRegion =region;
    
    console.log(name,type,region)

    // Use If to ensure input validation (ensure input fields are !empty)
        if (pokemonName == "") {
          alert("Pokemon name must be filled out");
          return false;
        }

    

     

       // Create pokemon object here (const pokemon) using user input Strings

      const pokemon = name +" "+ type +" " + region;
      
      
       // Create a span element (const pokemonData) and put the pokemon objects properties inside of it

       const pokemonData = document.createElement("span");

        const namePokemon = document.createTextNode(name+" ");
       pokemonData.appendChild(namePokemon);

       const typePokemon = document.createTextNode(type+" ");
       pokemonData.appendChild(typePokemon);

       const regionPokemon = document.createTextNode(region);
       pokemonData.appendChild(regionPokemon);
       console.log(pokemonData)

      

       

    /* --- Part 2 : Creating other DOM Objects --- */
        
        // Create HTML li element here (const pokedexEntry)

  const pokedexEntry = document.createElement("li");
  console.log(pokedexEntry);

// Give pokedexEntry (li) a new class equal to the "type" property of the pokemon object
        pokedexEntry.className = type
        console.log(pokedexEntry);

        const pokedexMemory = [name, type, region];
        console.log(pokedexMemory)



        


        


        // Creating a preview button (using a Template Literal)
        const prebutton = '<button></button>'
        
        // this code is for an html form that will Google search the name of the pokemon
        const previewButton = `
            <form action="http://google.com/search" target="_blank">
                <input name="q" hidden value="${name}">
                <input type="submit">
            </form>
        `

    
    /* --- Part 3 : Add things into the DOM --- */

        // Firstly append pokemonData to the innerHTML of pokedexEntry
        pokedexEntry.appendChild(pokemonData)
        console.log(pokedexEntry)
        




        // Secondly append the previewButton to innerHTML of pokedexEntry

        pokedexEntry.innerHTML += previewButton


        // Lastly we will get the ul List element that is meant to contain all pokedex entries
        // The we will append pokedexEntry to the innerHTML of the pokedexEntries ul element

        document.getElementById("pokedex-entries").appendChild(pokedexEntry);


/*-----------------------------------------------
 * Solution must be above this comment
 *---------------------------------------------*/
}
