import imageLoader from "../../../imageLoader"
import { Character, GetCharacterResults } from "../../../types"
import Image from "next/image"
import { GetServerSideProps } from "next"



export const getServerSideProps : GetServerSideProps = async (context) => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`)
        const character = await res.json()

    return {
        props: {
            character
        }
    }
}

//What is the difference between
//function CharacterPage ({character} : {character: Character}){
//and
//function CharacterPage ({character} : Character){

function CharacterPage ({character} : {character: Character}){
    return <div>
        <h1>{character.name}</h1>

        <Image
            loader={imageLoader}
            unoptimized
            src={character.image}
            alt={character.name}
            width={200}
            height={200}
        />

        
    </div>
}

export default CharacterPage