import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services"
import ItemList from "./ItemList"

const  ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryid } = useParams();


    useEffect(() => {
        setIsLoading(true);
        getProducts(categoryid).then((response) => {
            setItems(response);
            setIsLoading(false);
        });
    }, [categoryid]);
    return <ItemList items={items} isLoading={isLoading} />;
};

export default ItemListContainer;