
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
            <td colspan="3"><img src="${item.img_src}" width="20px" height="20px" id="photo"/> <div id="name">${item.first_name} ${item.last_name}</div></td>
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


// search box filter function
function filterStudents(students, searchTerm, table) {
    // Convert the search term to lower case for case-insensitive matching
    if(searchTerm === undefined)
    {
        return
    }

    searchTerm = searchTerm.toLowerCase();
  
    // Filter the list of students based on the search term
    const filteredStudents = Object.values(students).filter(student => {
      return (
        student.first_name.toLowerCase().includes(searchTerm) ||
        student.last_name.toLowerCase().includes(searchTerm) ||
        student.email.toLowerCase().includes(searchTerm)
      );
    });

    console.log(filteredStudents)
  
    // Clear the table
    table.innerHTML = "";
  
    // Populate the table with the filtered list of students
    for (const student of filteredStudents) {
      const row = document.createElement("tr");
      row.innerHTML = ` 
      <td id="id">${item.id}</td>
      <td colspan="3"><img src="${item.img_src}" width="20px" height="20px" id="photo"/> <div id="name">${item.first_name} ${item.last_name}</div></td>
      <td id="gender">${item.gender}</td>
      <td id="class">${item.class}</td>
      <td id="marks">${item.marks}</td>
      <td id="passing">${pass}</td></td>
      <td id="mail">${item.email}</td>`
      table.appendChild(row);
    }
  }
  

  const students = calling('./MOCK_DATA.json')
  const searchTerm = document.getElementById('input-box').value
  const table = document.getElementById('show-table')
  const searchButton = document.getElementById('search-button')
  console.log("hello world"+searchTerm)

  searchButton.onclick = filterStudents(students, searchTerm.value, table)



// sort A -> Z

const aToz = document.getElementById('one')
aToz.addEventListener('click', () => {

    const students = calling('./MOCK_DATA.json')
    students.then((item) => {

      const table = document.getElementById('show-table')
      const sortedStudents = Object.values(item).sort((a, b) => {
          return a.first_name.localeCompare(b.first_name);
        });
  
        console.log(sortedStudents)
      table.innerHTML = "";
      for (const student of sortedStudents) {
          const row = document.createElement("tr");
  
          var pass
              if(student.passing)
              {
                 pass='passing'
              }
              else{
                  pass='failing'
              }
  
          row.innerHTML =` 
          <td id="id">${student.id}</td>
          <td colspan="3"><img src="${student.img_src}" width="20px" height="20px" id="photo"/> <div id="name">${student.first_name} ${student.last_name}</div></td>
          <td id="gender">${student.gender}</td>
          <td id="class">${student.class}</td>
          <td id="marks">${student.marks}</td>
          <td id="passing">${pass}</td></td>
          <td id="mail">${student.email}</td>`
          
          table.appendChild(row);
      }
    })
    
})

// sort z -> A

const zToa = document.getElementById('two')
zToa.addEventListener('click', () => {

    const students = calling('./MOCK_DATA.json')
    students.then((item) => {

      const table = document.getElementById('show-table')
      const sortedStudents = Object.values(item).sort((a, b) => {
          return a.first_name.localeCompare(b.first_name);
        });
  
        const reverse = sortedStudents.reverse()
      table.innerHTML = "";
      for (const student of reverse) {
          const row = document.createElement("tr");
  
          var pass
              if(student.passing)
              {
                 pass='passing'
              }
              else{
                  pass='failing'
              }
  
          row.innerHTML =` 
          <td id="id">${student.id}</td>
          <td colspan="3"><img src="${student.img_src}" width="20px" height="20px" id="photo"/> <div id="name">${student.first_name} ${student.last_name}</div></td>
          <td id="gender">${student.gender}</td>
          <td id="class">${student.class}</td>
          <td id="marks">${student.marks}</td>
          <td id="passing">${pass}</td></td>
          <td id="mail">${student.email}</td>`
          
          table.appendChild(row);
      }
    })
    
})




