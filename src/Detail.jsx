import Footer from "./Footer.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const Detail = ()=>{
    let { id } = useParams();
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        const getRandom = async () => {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)"
            }
            let response = await fetch("https://api.spoonacular.com/recipes/"+id+"/information?apiKey=635c0fdcac2d4ad19cad2a7a33360ff2", {
                method: "GET",
                headers: headersList
            });

            const json1 = await response.json()
            setRecipe(json1);
        }
        getRandom()
    },[])

    return(
        <>
        <div className="sm:p-12 sm:px-24 p-4">
            <h1 className="text-center font-medium text-2xl sm:mb-12 sm:my-0 my-6 " >{recipe.title}</h1>
            <div className="flex justify-center items-center flex-col sm:flex-row ">
            <img className="sm:mr-20 mr-0 rounded-sm shadow-lg sm:mb-0 mb-8 max-w-[95%] " src={recipe.image} alt=""/>
                <ul className="list-disc list-inside">
            {
                recipe.extendedIngredients?.map((res)=>{
                    return(
                        <li className="my-2" ><b>{res.amount}</b> <b>{res.unit}</b> {res.name}</li>
                    )
                    }
                )
            }
                </ul>
            </div>
            <p className="mx-auto text-center sm:mt-12 my-8 text-blue-800 hover:underline" > <a target="_blank" href={recipe.sourceUrl}>for instructions please visit this link</a> </p>

        </div>
    <Footer/>
        </>


)
}
export default Detail;