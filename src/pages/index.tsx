import useSWR, {SWRResponse, Fetcher} from "swr"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import type { GetStaticProps, NextPage } from "next"
import { GetCharacterResults, Character } from "../../types"
import imageLoader from "../../imageLoader"

const URL = 'https://rickandmortyapi.com/api/character'

export const getStaticProps:GetStaticProps = async()=>{
  const result = await fetch(URL)
  const {results}:GetCharacterResults = await result.json()
  return {
    props: {
      characters:results
    }
  }
}

const Home: NextPage<{characters:Character[]}> = function ({characters}) {
  // console.log(characters)
  
  return (
   <>
   <Head>
      <title>Intro to next App</title>
      <meta name="Description" content="This is a next App"/>
      <link rel="icon" href="/favicon.ico" />
   </Head>
    {characters.map((character, index)=> {
      return <div key={character.id}>
        <Link href={`/characters/${character.id}`}>
          <Image 
          loader={imageLoader}
          unoptimized
          src={character.image} 
          alt={character.name} 
          width={100} 
          height={100}/>
        </Link>
        

        {character.name} - {character.species}
        </div>
    })}

   </>
  )
}

export default Home