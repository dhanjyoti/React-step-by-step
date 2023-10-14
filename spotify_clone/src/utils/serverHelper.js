// import { backendUrl } from "./config";

// export const makeUnauthenticatedPOSTRequest = async (route, body) => {
//     // route : /signup
//     const response = await fetch(backendUrl + route, {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//             // Required ProjectId
//             "projectId": "f104bi07c490"
//         },
//         body: JSON.stringify(body),
//     });
//     const formatedResponse = await response.json();
//     return formatedResponse;
// }