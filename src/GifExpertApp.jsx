import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const AddCategorys = (valor) => {
        if(!categories.includes(valor))
            //setCategories([ ...categories, valor]);
            setCategories([valor]);
    };

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory onNewCategory={AddCategorys}/>
        <ol>
            {
                categories.map(category => {
                    return (
                        <GifGrid key={ category } category={category}/>
                    )
                })
            }
        </ol>
    </>
  )
}
