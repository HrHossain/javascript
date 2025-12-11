function myfunc(strings, ...values) {
    let  m = ''
    strings.reduce((prev,curr)=>{
         m += prev + curr + (values.length ? values.shift() : "")
    },'')

    return m
}

const name = "mofazzel"
const lead = "team"

console.log(myfunc`there ${name} is a frontend team ${lead}`)