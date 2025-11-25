let user = {
  name : "mofazzel hossain",
  age  :27
}

let anotherUser = user
anotherUser.name = "hashem vai"
user = null
console.log(anotherUser,user )

function marry(man,woman){
  
  man.wife = woman
  woman.husband = man

  return{
    father:man,
    mother:woman
  }
}

let family = marry({name:"joynal faruk"},{name:"jomila akter"})


console.log(family.father.wife.name)

function makeUser(){
  return {
    name:"kafi",
    ref:this
  }
}

let userthis = makeUser()

let calculator = {
  sum(){
    return this.a + this.b
  },
  mul(){
    return this.a * this.b
  },
  read(a,b){
    this.a = a;
    this.b = b;
  }
}

calculator.read(10,5)

let sum = calculator.sum()
let mul = calculator.mul()

console.log(sum,mul)

function User(){
  console.log(new.target)
}
User()
new User()

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

const myarr = Object.values(person)
console.log(`My name is ${myarr[0]} and i am ${myarr[1]} years old . i live in ${myarr[2]}`)

const fruits = {Bananas:300, Oranges:200, Apples:500};

const tyr = Object.entries(fruits)

console.log(tyr)


let school = {
  science:[
    {
      id:1,
      name:"kashem",
      roll:1,
      subjects:["bangla","english","math","religion"]
    },
    {
      id:2,
      name:"hashem",
      roll:2,
      subjects:["bangla","english","math","religion"]
    },
    {
      id:3,
      name:"joshim",
      roll:3,
      subjects:["bangla","english","math","religion"]
    }
  ],
  business:[
    {
      id:1,
      name:"kashem",
      roll:1,
      subjects:["bangla","english","math","religion"]
    },
    {
      id:2,
      name:"hashem",
      roll:2,
      subjects:["bangla","english","math","religion"]
    },
    {
      id:3,
      name:"joshim",
      roll:3,
      subjects:["bangla","english","math","religion"]
    }
  ],
  arts:[
    {
      id:1,
      name:"kashem",
      roll:1,
      subjects:["bangla","english","math","religion"]
    },
    {
      id:2,
      name:"hashem",
      roll:2,
      subjects:["bangla","english","math","religion"]
    },
    {
      id:3,
      name:"joshim",
      roll:3,
      subjects:["bangla","english","math","religion"]
    }
  ]

}

const groups = Object.entries(school)

groups.map((val,ind)=>{
  console.log("Group name is " + val[0])
  
  val[1].map((val)=>{
    console.log(val)
    
  })
})



const Universe = {
  name: "Observable Universe",
  ageInBillionYears: 13.8,
  estimatedGalaxies: "2 trillion+",
  composition: {
    darkEnergy: "68%",
    darkMatter: "27%",
    normalMatter: "5%"
  },
  
  galaxies: [
    {
      name: "Milky Way",
      type: "Barred Spiral Galaxy",
      diameterLightYears: 105000,
      estimatedStars: "100-400 billion",
      
      solarSystems: [
        {
          name: "Solar System",
          ageInBillionYears: 4.6,
          locationFromCenter: "About 27,000 light-years",
          
          star: {
            name: "Sun",
            type: "G-Type Main Sequence (Yellow Dwarf)",
            surfaceTemperatureK: 5778,
          },
          
          planets: [
            {
              name: "Earth",
              type: "Terrestrial",
              hasLife: true,
              moons: 1,
              atmosphere: {
                nitrogen: "78%",
                oxygen: "21%",
                others: "1%"
              },
              
              continents: [
                {
                  name: "Asia",
                  population: "4.7 billion",
                  majorCountries: ["China", "India", "Japan", "Bangladesh"]
                },
                {
                  name: "Europe",
                  population: "750 million",
                  majorCountries: ["Germany", "France", "UK", "Italy"]
                },
                {
                  name: "North America",
                  population: "600 million",
                  majorCountries: ["USA", "Canada", "Mexico"]
                }
              ],
              
              lifeForms: {
                dominantSpecies: "Human",
                biodiversity: {
                  mammals: 6500,
                  birds: 10000,
                  fish: 33000
                },
                
                human: {
                  species: "Homo sapiens",
                  population: 8_000_000_000,
                  averageLifespan: 72.6,
                  getHuman(){
                    console.log(`Human species is ${this.species} and total population is ${this.population} and also average life time is ${this.averageLifespan}`)

                  },
                  
                  society: {
                    civilizations: ["Modern", "Ancient", "Tribal"],
                    technologyLevel: "Type 0 (Kardashev Scale)",
                    communication: {
                      languages: ["English", "Mandarin", "Hindi", "Spanish", "Arabic"],
                      internetUsers: "5.3 billion+"
                    },
                    getHumanSociety(){
                      console.log(this.civilizations , this.technologyLevel , this.communication )

                    }
                  },
                  
                  body: {
                    organs: {
                      brain: {
                        neurons: "86 billion",
                        mainFunctions: ["thinking", "memory", "emotion", "control"]
                      },
                      heart: {
                        beatsPerDay: 100000,
                        mainFunction: "Pumping blood"
                      }
                    },
                    dna: {
                      basePairs: "3 billion",
                      sharedWithChimpanzee: "98.8%"
                    }
                  }
                }
              }
            }
          ]
        }
      ]
    }
  ]
};


// decorate human planet and their behaviour

const {  
  galaxies:[
    {
      solarSystems:[
      {
        planets:[
          {
            lifeForms:{human}
          }
        ]
      }
    ]
    }

    ]
  
  } = Universe  

human.getHuman?.()
human.society.getHumanSociety?.()
