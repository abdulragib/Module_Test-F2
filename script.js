
const  calling = async(myJson) => {
    const data = await fetch(myJson)
    const body = await data.json()
    console.log(body)
    return body
}

const data = calling('./MOCK_DATA.json')
showData(data)

function showData(data){
   data.then(
    (data) => {
        data.forEach((item) => {

            var pass
            if(item.passing)
            {
               pass='passing'
            }
            else{
                pass='failing'
            }

            const createDiv = document.createElement('tr')
            createDiv.innerHTML = ` 
            <td id="id">${item.id}</td>
            <td colspan="3"><img src="${item.img_src}" width="20px" height="20px" id="photo"/> <div id="name">${item.first_name + item.last_name}</div></td>
            <td id="gender">${item.gender}</td>
            <td id="class">${item.class}</td>
            <td id="marks">${item.marks}</td>
            <td id="passing">${pass}</td></td>
            <td id="mail">${item.email}</td>`
    
            document.getElementById('show-table').appendChild(createDiv)
    }
   )  
})
}
