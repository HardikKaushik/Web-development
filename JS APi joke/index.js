// GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokeBTN = document.querySelector('#jbtn');

// const generatejokes = () => {

//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com', setHeader)
//         .then((res) => res.json())
//         .then((data) => {
//             jokes.innerHTML = data.joke;
//         }).catch((error)=>{
//             console.log(error);
//         })
// }

const generatejokes = async () => {

    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }

   const res=await fetch('https://icanhazdadjoke.com', setHeader)

   const data= await res.json();
   jokes.innerHTML=data.joke;

}

jokeBTN.addEventListener('click', generatejokes);
generatejokes();