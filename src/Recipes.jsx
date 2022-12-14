import {useEffect, useState} from "react";
import Footer from "./Footer.jsx";
import {motion} from "framer-motion"
import SearchBar from "./SearchBar.jsx";


const Recipes = () => {
    const [random, setRandom] = useState([])

    useEffect(() => {
        const getRandom = async () => {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)"
            }
            let response = await fetch("https://api.spoonacular.com/recipes/random?apiKey="+import.meta.env.VITE_API_KEY+"&number=8", {
                method: "GET",
                headers: headersList
            });
            const json1 = await response.json()
            setRandom(json1.recipes)
            localStorage.setItem('items', JSON.stringify(json1.recipes));
        }

        const d = new Date();
        const timeNow = d.getDate()
        let timePast = JSON.parse(localStorage.getItem('time'));
        if(!timePast){
            localStorage.setItem('time', JSON.stringify(timeNow));
            getRandom();
        } else{
            if (timePast != timeNow){
                getRandom()
                localStorage.setItem('time', JSON.stringify(timeNow));
            }
            setRandom(JSON.parse(localStorage.getItem('items')));
        }
    },[])

    return (
        <>
        <div
            className="sm:px-24 px-4 bg-[#F3F3F3] py-4 pb-8 sm:pb-12   ">
            <SearchBar/>
            <h1 className="my-2 font-bold text-2xl" >Today's Recipe</h1>
            <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className="flex flex-wrap justify-between" >
            {
                random.map((recipe)=>{
                    return(
                    <>
                        <a key={recipe.title} className="sm:max-w-[265px] w-[265px] max-w-[49%] bg-[#fefefe] text-white drop-shadow-md transition-all duration-200 hover:drop-shadow-xl my-2 border-[1.5px] border-solid flex-wrap border-[#e0e0e0] rounded-sm justify-center" href={"#/detail/"+recipe.id}
                        >
                            <div ler={recipe.title}  className="sm:h-[250px] h-[170px] m-0 rounded-t-sm"
                                style={{
                                    backgroundImage: `url("${recipe.image}")`,
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover"
                                }}
                            ></div>
                            <h2 tit={recipe.title}   className="w-full h-fit text-center my-2 px-4 text-black text-xs sm:text-base " >{recipe.title}</h2>
                        </a>
                    </>
                    )
                })
            }
            </motion.div>
        </div>
            <Footer/>
        </>
    )
};
export default Recipes;