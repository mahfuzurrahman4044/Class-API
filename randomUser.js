const loadUsers=()=>{
    fetch("https://randomuser.me/api/?gender=female")
    .then(res=>res.json())
    .then(data=>displayUsers(data))
}

const displayUsers=user=>{
    const genderTag=document.getElementById("gender");
    genderTag.innerHTML=user.results[0].gender
    const nameTag=document.getElementById("name");
    nameTag.innerHTML=user.results[0].name.first;
}

loadUsers();