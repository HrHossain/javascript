function debounce(fn,delay){
    let timer;

    return function(...args){
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args)
        }, delay);

        
    }
}


const output = debounce(()=>{
    console.log("we are looking enemy")
} , 6500)

output()





function createUseState() {
  let stateStore = [];
  let index = 0;

  function useState(initialValue) {
    const currentIndex = index;

    // If no value stored yet, set initial
    if (stateStore[currentIndex] === undefined) {
      stateStore[currentIndex] = initialValue;
    }

    // Create setter
    function setState(newValue) {
      stateStore[currentIndex] = newValue;
      console.log("State updated:", newValue);
    }

    index++; // Move to next state slot
    return [stateStore[currentIndex], setState];
  }

  // Reset index like React does on each render
  function resetIndex() {
    index = 0;
  }

  return { useState, resetIndex };
}






// Create instance (like a component)
const { useState, resetIndex } = createUseState();

// Component simulation
function App() {
  resetIndex(); // simulate render start

  const [count, setCount] = useState(0);
  const [name, setName] = useState("Guest");

  console.log("Render:", { count, name });

  // Simulate updates
  setCount(count + 1);
  setName("Hasan");
}

// Run the component twice
App();
App(); // new "render" wi


const arr = []
arr[0]="undefined"
if(arr[0]=== undefined){
    console.log("empty")
}
console.log(arr) 



// Simple useEffect simulation in raw JS
function createEffect() {
  let lastDeps = [];

  return function useEffect(effectFn, deps) {
    const hasChanged = deps
      ? !deps.every((dep, i) => dep === lastDeps[i])
      : true;

    if (hasChanged) {
      effectFn();
      lastDeps = deps || [];
    }
  };
}

// Create an instance
const useEffect = createEffect();

// Example variables
let count = 0;

// Example effect
useEffect(() => {
  console.log("Effect ran! Count =", count);
}, [count]);

// Change count
count = 5;

// Run again to check if deps changed
useEffect(() => {
  console.log("Effect ran after update! Count =", count);
}, [count]);


[one,two] = [1,2]
console.log(one)