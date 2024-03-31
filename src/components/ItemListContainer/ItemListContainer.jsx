import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useNotification } from "../../context/Notification";
import { db } from '../../services/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({ greetings }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    const { setNotification } = useNotification();

    useEffect(() => {
        setLoading(true);
        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products");

        getDocs(collectionRef)
            .then((querySnapshot) => {
                const products = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProducts(products);
            })
            .catch((error) => {
                setNotification("danger", `No es posible cargar los productos`);
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    return (
        <div className='container'>
            <h1>{greetings}</h1>
            {loading ? (
                <h2>Cargando productos...</h2>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ItemListContainer;

