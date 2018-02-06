export function loadPhonebook(data){
  return {
    type:"LOAD_DATA",
    data
  }
}

export function addPhonebook(id,name,phone){
  return {
    type:"ADD_DATA",
    id,
    name,
    phone
  }
}

export function phonebookDeleted(id){
  return {
    type:"DELETE_DATA",
    id
  }
}

export function phonebookFetched(phonebook){
  return{
    type:"PHONEBOOK_FETCHED",
    phonebook
  }
}

export function phonebookUpdated(id,name,phone){
  return {
    type: "PHONEBOOK_UPDATED",
    id,
    name,
    phone
  }
}

function handleResponse(res){
  console.log(res)
  if(res.ok){
    return res.json()
  }else{
    let error = new Error(res.statusText)
    error.response = res
    throw error
  }
}

export function updatePhonebook(phonebook){
  console.log("update phonebook ",phonebook.id)
  return dispatch => {
    return fetch(`http://localhost:3001/api/phonebooks/${phonebook.id}`,{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(phonebook),
    }).then(handleResponse)
    .then(data => {
      console.log("berhasil update ",data);
      dispatch(phonebookUpdated(data.id,data.name,data.phone))
    })
  }
}

export function fetchPhonebooks(name,phone){
  return dispatch => {
    return fetch('http://localhost:3001/api/phonebooks')
    .then(res => {
      return res.json()
    })
    .then(data => {
      let filtername  = data.filter(datas => `${datas.name}`.toLowerCase().indexOf(name.toLowerCase()) !== -1)
      let filterphone = data.filter(datas => `${datas.phone}`.indexOf(phone) !== -1)
      let finalfilter = filtername.length <= filterphone.length ? filtername : filterphone

      dispatch(loadPhonebook(finalfilter))
    })
  }
}

export function fetchPhonebook(id){
  return dispatch => {
    fetch(`http://localhost:3001/api/phonebooks/${id}`)
    .then(res => {
      return res.json()
    })
    .then(phonebook => {
      dispatch(phonebookFetched(phonebook))
    })
  }
}

export function savePhonebook(data){
  console.log("save data ",data)
  return dispatch => {
    return fetch('http://localhost:3001/api/phonebooks',{
      method:'post',
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(addPhonebook(data.id,data.name,data.phone)))
  }
}


export function deletePhonebook(id){
  return dispatch => {
    return fetch(`http://localhost:3001/api/phonebooks/${id}`,{
      method:'delete',
      headers:{
        "Content-Type":"application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(phonebookDeleted(id)))
  }
}
