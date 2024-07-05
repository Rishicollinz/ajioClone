// const originalObject = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3",
// };

// let newObject = {};
// console.log(Object.keys(originalObject));
// let arr = Object.keys(originalObject);
// arr.forEach((val)=>{
//     console.log(originalObject[val]+"new");
// })

// const john = {
//     name: "John Doe",
//     position: "Software Engineer",
//     department: {
//         name: "Engineering",
//         supervisor: {
//             name: "Jane Smith",
//             position: "Engineering Manager",
//         },
//         team: {
//             name: "Backend Team",
//             leader: {
//                 name: "Alex Johnson",
//                 position: "Team Lead",
//             },
//         },
//     },
// };

// const jane = structuredClone(john);
// jane.name = "Jane Doe";
// jane.department.supervisor.name = "John Smith";

// console.log(`Jane's supervisor: ${jane.department.supervisor.name}`);
// console.log(`John's supervisor: ${john.department.supervisor.name}`);
// let link = "http://peterengland.in/p/biker-jeans?size=M&color=gray";
// link = link.substring(link.indexOf(":")+3).split("/");
// let obj= {};
// let searchq = link[link.length - 1].split("?");
// console.log(searchq);
// let arr=[];
// let somes=(searchq[1].split("&")).forEach(item=>{
//     arr.push(item.split("="));
// });
// console.log(arr);
let link = "http://peterengland.in/p/biker-jeans?size=M&color=gray";
link = link.substring(link.indexOf(":") + 3).split("/");
let obj = {};
obj.path = link[1]
let searchq = link[link.length - 1].split("?");
obj[searchq[0]] = {}
let somes = (searchq[1].split("&")).forEach(item => {
    let arr = item.split("=")
    obj[searchq[0]][arr[0]] = arr[1] 
});
console.log(obj);



// let arr=link.split("/");
// console.log(arr);
// let search=arr[arr.length-1] ;
// let category=search.split("?");
// console.log(category);
// let filters=category[1].split("&");
// console.log(filters);
// let sizeval=filters[0].split("=");
// let colorval=filters[1].split("=");
// console.log(sizeval);
// console.log(colorval);
// let obj={
//     path:arr[3],
//     [category[0]]:{
//         [sizeval[0]]:sizeval[1],
//         [colorval[0]]:colorval[1]
//     }
// };
// console.log(obj);
// let obj={};
// let lastslash=(link.lastIndexOf("/"))+1;
// let questionmark=(link.indexOf("?"));
// let bj=link.substring(lastslash,questionmark);
// let and=link.indexOf("&");
// let size=link.substring(questionmark+1,and);
// let color=link.substring(and+1,[link.length]);
// let sizesplit=size.split("=");
// let newsize=sizesplit[0];
// let sizeval=sizesplit[1];
// let colorsplit=color.split("=");
// let findp=link.substr(link.indexOf("n/")+2,1);
// obj={
//     path:findp,
//     [bj]:{
//         [newsize]:sizeval,
//         [colorsplit[0]]:colorsplit[1]
//     }
// }
// console.log(obj);
