function phonebook(state = [],action){
  switch (action.type) {
    case "LOAD_DATA":
    action.data.map(pb => {
      pb['isUpdating'] = false
    })
      return action.data
    case "PHONEBOOK_FETCHED":
    console.log("PHONEBOOK_FETCHED")
    const data = [...state]
    data.filter(pb => {
      if(pb.id === action.phonebook.id){
        return pb.isUpdating = true
      }
    })
    return data
    case "ADD_DATA":
    const newphonebooks = [
      ...state,
      {id:action.id,name:action.name,phone:action.phone}
    ]
    return newphonebooks
    case "DELETE_DATA":
    console.log("PHONEBOOK_DELETED");
    return state.filter((phonebook) => {
      if(phonebook.id !== action.id){
        return phonebook
      }
    })
    case "PHONEBOOK_UPDATED":
    console.log("PHONEBOOK_UPDATED")
    const update = [...state]
    update.filter(phonebook => {
      if(phonebook.id === action.id){
        phonebook.name = action.name
        phonebook.phone = action.phone
        return phonebook.isUpdating = false
      }
    })
    return update
    default:
      return state
  }
}

export default phonebook
