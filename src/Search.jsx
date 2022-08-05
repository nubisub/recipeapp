import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import SearchBar from "./SearchBar.jsx";
import {motion} from "framer-motion";

const Search = () => {
    let { id } = useParams();

    const [data, setData] = useState([]);
    const [query, setQuery] = useState(id)


    useEffect(()=>{
        const getRandom = async () => {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)"
            }
            let response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=635c0fdcac2d4ad19cad2a7a33360ff2&query="+id+"&number=8", {
                method: "GET",
                headers: headersList
            });

            const json1 = await response.json()
            setData(json1.results)
            console.log(json1)
        }
        getRandom()
    },[])






    return(
        <div  className="sm:px-24 px-8 pt-8 bg-[#F3F3F3] pb-12 ">
            <SearchBar id={id} reload={true} />
            <h1 className="my-2 font-medium text-2xl" >Result for {id}</h1>
            <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className="flex flex-wrap justify-between" >
            {
                data.map((recipe) => {
                    return (
                        <>
                            <a key={recipe.title}
                               className="sm:max-w-[265px] w-[265px] max-w-[180px] bg-[#fefefe] text-white drop-shadow-md hover:drop-shadow-xl my-4 border-[1.5px] border-solid flex-wrap border-[#e0e0e0] rounded-sm justify-center"
                               href={"#/detail/" + recipe.id}
                            >
                                <div ler={recipe.title} className="sm:h-[250px] h-[150px] m-0 rounded-t-sm"
                                     style={{
                                         backgroundImage: `url("${recipe.image}")`,
                                         backgroundPosition: "center",
                                         backgroundRepeat: "no-repeat",
                                         backgroundSize: "cover"
                                     }}
                                ></div>
                                <h2 tit={recipe.title}
                                    className="w-full h-fit text-center my-2 px-4 text-black ">{recipe.title}</h2>
                            </a>
                        </>
                    )
                })
            }
        </motion.div>
        </div>

    )
}
export default Search