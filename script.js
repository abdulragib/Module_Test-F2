
const  calling = async(myJson) => {
    const data = await fetch(myJson)
    const body = await data.json()
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
var temp;
document.getElementById("input-box").addEventListener('input', function() {
  temp = this.value;
})


  const students = calling('./MOCK_DATA.json')
  const table = document.getElementById('show-table')
  const searchButton = document.getElementById('search-button')
  console.log(temp)

  searchButton.addEventListener('click', (students,temp,table)=>{
     // Convert the search term to lower case for case-insensitive matching
    if(temp === undefined)
    {
        return
    }

    temp = temp.toLowerCase();

    students.then((item) => {
  
      // Filter the list of students based on the search term
      const filteredStudents = Object.values(item).filter(student => {
        return (
          student.first_name.toLowerCase().includes(temp) ||
          student.last_name.toLowerCase().includes(temp) ||
          student.email.toLowerCase().includes(temp)
        );
      });
  
      console.log(filteredStudents)
    
      // Clear the table
      table.innerHTML = `<tr>
      <td>ID</td>
      <td colspan="3">Name</td>
      <td>Gender</td>
      <td>Class</td>
      <td>Marks</td>
      <td>Passing</td>
      <td>Email</td>
  </tr>`;
    
      // Populate the table with the filtered list of students
      for (const student of filteredStudents) {
        const row = document.createElement("tr");
        row.innerHTML = ` 
        <td id="id">${student.id}</td>
        <td colspan="3"><img src="${student.img_src}" width="20px" height="20px" id="photo"/> <div id="name">${item.first_name} ${item.last_name}</div></td>
        <td id="gender">${student.gender}</td>
        <td id="class">${student.class}</td>
        <td id="marks">${student.marks}</td>
        <td id="passing">${pass}</td></td>
        <td id="mail">${student.email}</td>`
        table.appendChild(row);
      }

    })//promise closing 
  })//event listner closing

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
      table.innerHTML = `<tr>
      <td>ID</td>
      <td colspan="3">Name</td>
      <td>Gender</td>
      <td>Class</td>
      <td>Marks</td>
      <td>Passing</td>
      <td>Email</td>
  </tr>`;
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
      table.innerHTML = `<tr>
      <td>ID</td>
      <td colspan="3">Name</td>
      <td>Gender</td>
      <td>Class</td>
      <td>Marks</td>
      <td>Passing</td>
      <td>Email</td>
  </tr>`;
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

// sort by marks
const sortMarks = document.getElementById('three')
sortMarks.addEventListener('click', () => {

    const students = calling('./MOCK_DATA.json')
    students.then((item) => {

      const table = document.getElementById('show-table')
      const sortedStudents = Object.values(item).sort((a, b) => a.marks - b.marks);

      table.innerHTML = `<tr>
        <td>ID</td>
        <td colspan="3">Name</td>
        <td>Gender</td>
        <td>Class</td>
        <td>Marks</td>
        <td>Passing</td>
        <td>Email</td>
      </tr>`;

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
  
          row.innerHTML +=` 
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

//sort by passing

const sortPassing = document.getElementById('four')
sortPassing.addEventListener('click', () => {

    const students = calling('./MOCK_DATA.json')
    students.then((item) => {

      const table = document.getElementById('show-table')
      const sortedStudents = Object.values(item).sort((a, b) => a.passing - b.passing);

      table.innerHTML = `<tr>
        <td>ID</td>
        <td colspan="3">Name</td>
        <td>Gender</td>
        <td>Class</td>
        <td>Marks</td>
        <td>Passing</td>
        <td>Email</td>
      </tr>`;

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
  
          row.innerHTML +=` 
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


//sort by class
const sortClass = document.getElementById('five')
sortClass.addEventListener('click', () => {

    const students = calling('./MOCK_DATA.json')
    students.then((item) => {

      const table = document.getElementById('show-table')
      const sortedStudents = Object.values(item).sort((a, b) => a.class- b.class)

      table.innerHTML = `<tr>
        <td>ID</td>
        <td colspan="3">Name</td>
        <td>Gender</td>
        <td>Class</td>
        <td>Marks</td>
        <td>Passing</td>
        <td>Email</td>
      </tr>`;

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
  
          row.innerHTML +=` 
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


//sort by gender
const sortGender = document.getElementById('six')
sortGender.addEventListener('click', () => {

    const students = calling('./MOCK_DATA.json')
    students.then((item) => {

      const table = document.getElementById('show-table')
      const sortedStudents = Object.values(item).sort((a) => a.gender);


      let maleStudents = item.filter(student => student.gender === "Male");
      let femaleStudents = item.filter(student => student.gender === "Female"); 

      table.innerHTML = `<tr>
        <td>ID</td>
        <td colspan="3">Name</td>
        <td>Gender</td>
        <td>Class</td>
        <td>Marks</td>
        <td>Passing</td>
        <td>Email</td>
      </tr>`;

      const captionOne=document.createElement('caption')
      captionOne.innerHTML="<b>Male Table</b>"
      table.appendChild(captionOne)

      for (const student of maleStudents) {
          const row = document.createElement("tr");
  
          var pass
              if(student.passing)
              {
                 pass='passing'
              }
              else{
                  pass='failing'
              }
  
          row.innerHTML +=` 
          <td id="id">${student.id}</td>
          <td colspan="3"><img src="${student.img_src}" width="20px" height="20px" id="photo"/> <div id="name">${student.first_name} ${student.last_name}</div></td>
          <td id="gender">${student.gender}</td>
          <td id="class">${student.class}</td>
          <td id="marks">${student.marks}</td>
          <td id="passing">${pass}</td></td>
          <td id="mail">${student.email}</td>`
          
          table.appendChild(row);
      }

      const femaleTable=document.getElementById('show-table-two')

      const caption=document.createElement('caption')
      caption.innerHTML="<b>Female Table</b>"
      femaleTable.appendChild(caption)

      for (const student of femaleStudents) {
        const row = document.createElement("tr");
        

        var pass
            if(student.passing)
            {
               pass='passing'
            }
            else{
                pass='failing'
            }

        row.innerHTML +=` 
        <td id="id">${student.id}</td>
        <td colspan="3"><img src="${student.img_src}" width="20px" height="20px" id="photo"/> <div id="name">${student.first_name} ${student.last_name}</div></td>
        <td id="gender">${student.gender}</td>
        <td id="class">${student.class}</td>
        <td id="marks">${student.marks}</td>
        <td id="passing">${pass}</td></td>
        <td id="mail">${student.email}</td>`

        
        femaleTable.appendChild(row);
    }
    })  
})





