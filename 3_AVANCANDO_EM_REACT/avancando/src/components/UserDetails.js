import React from 'react'

const UserDetails = ({name, city, gender, age}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>Cidade: {city}</p>
        <p>Gênero: {gender}</p>
        <p>Idade: {age}</p>



    </div>
  )
}

export default UserDetails