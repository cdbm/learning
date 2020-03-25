var x = [1, 2, 3, 4];
x = x.filter(fill)
console.log(x)

function fill(obj){
    return obj % 2 == 0;
}