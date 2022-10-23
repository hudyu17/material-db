import { useRouter } from "next/router"

// Grab route param to persist as a prop
export async function getServerSideProps(context) {
    const searchId = context.query.id
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
