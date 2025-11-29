let text = "যদি চাও, আমি একটা চিত্র (diagram) বানাতে পারি, যা দেখাবে cache, providesTags, invalidatesTags, এবং refetch flow একসাথেঠিক আছে! তুমি যদি JavaScript এ কোনো variable-এর memory size (KB বা MB) বের করতে চাও, সেটা একটু tricky, কারণ JS নিজে exact memory size provide করে না। তবে আমরা approximate size হিসাব করতে পারি।"

function convertTo(data){
    let textdata = JSON.stringify(data)
    let length = textdata.length*2
    let sizeInKB = (length / 1024)
    let sizeInMB = (sizeInKB / 1024)
    return{
        sizeinByte:length,
        sizeInKB,
        sizeInMB
    }
}
const myData = [
  "Hello",
  "World",
  "This",
  "Is",
  "JS",
  "Example",
  "Data",
  "Test",
  "Variable",
  "Size"
];
// approximately size
const size = convertTo(text)
console.log(size)
const size2 = convertTo(myData)
console.log(size2)
