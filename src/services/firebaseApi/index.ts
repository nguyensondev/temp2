// import React from "react"
// import { useFirestoreQuery } from "@react-query-firebase/firestore"
// import { query, collection } from "firebase/firestore"
// import { firestore } from "../../config/firebase"

// function Products() {
//   // Define a query reference using the Firebase SDK
//   const ref = collection(firestore, "projects")

//   // Provide the query to the hook
//   const query = useFirestoreQuery(["projects"], ref, {
//     subscribe: true,
//   })

//   const snapshot = query.data

//   return snapshot.docs.map((docSnapshot) => {
//     const data = docSnapshot.data()
//     console.log(data)
//     //return <div key={docSnapshot.id}>{data.name}</div>
//   })
// }

// export default Products
