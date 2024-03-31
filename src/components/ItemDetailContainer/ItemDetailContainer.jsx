import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();

    useEffect(() => {
        getDoc(doc(db, "products", productId))
            .then((querySnapshot) => {
                const productData = { id: querySnapshot.id, ...querySnapshot.data() };
                setProduct(productData);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [productId]);

    return (
        <div className="container">
            {loading ? (
                <h1>Cargando...</h1>
            ) : (
                <>
                    {product ? (
                        <ItemDetail {...product} />
                    ) : (
                        <h1>Producto no encontrado</h1>
                    )}
                </>
            )}
        </div>
    );
};

export default ItemDetailContainer;
