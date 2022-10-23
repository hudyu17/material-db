import { useRouter } from "next/router"

// Grab route param to persist as a prop
export async function getServerSideProps(context) {
    const searchId = context.query.id
    
    // TODO: query db with searchId or search term 

    // returning the id for now, will change
    return {
      props: {searchId}, 
    }
  }

export default function searchResult({searchId}) {
    
    return (
        <div>
            <h2>your search is: {searchId}</h2>
        </div>
    )
}
