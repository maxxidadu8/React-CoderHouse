import { useState } from "react"
import { useCart } from "../../context/CartContext";
import { db } from "../../services/firebase"

import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.min.css';

const Checkout = () => {

    const [loading, setLoading] = useState(false);
    const [orderCreated, setOrderCreated] = useState(false);

    const { cart, totalQuantity, getTotal, clearCart } = useCart();
    const total = getTotal();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        confirmEmail: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    phone: formData.phone,
                    email: formData.email
                },
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            };

            const ids = cart.map((items)=> items.id);

            const productRef = collection(db, "products");

            const productsAddedFromFirestore = await getDocs(query(productRef, where(documentId(), "in", ids)))

            const { docs } = productsAddedFromFirestore;

            const outOfStock = [];
            const batch = writeBatch(db)

            docs.forEach((doc) => {
                const dataDoc = doc.data()
                const stockDB = dataDoc.stock;

                const productAddedToCart = cart.find( (prod)=> prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity

                if(stockDB >= prodQuantity){
                    // actualizar DB 
                    batch.update(doc.ref, {stock: stockDB - prodQuantity})
                }else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            });

            if(outOfStock.length === 0 ){
                await batch.commit();

                const orderRef = collection(db, "orders");
                const orderAdded = await addDoc(orderRef, objOrder);
                console.log(`El id de su orden es: ${orderAdded.id}`);
                clearCart()
                setOrderCreated(true)

            }else{
                console.log("Hay productos que se encuentran fuera de stock")
            }
        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1>Se está generando su orden</h1>
    }

    if (orderCreated) {
        return (
            <h1>La orden fue creada correctamente</h1>
        )
    }

    return (
        <>
            <h1>Checkout</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Número de teléfono</label>
                    <input type="text" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmEmail" className="form-label">Confirmar Email</label>
                    <input type="email" className="form-control" id="confirmEmail" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} />
                </div>
                <button type="button" className="btn btn-primary" onClick={createOrder}>Generar Orden</button>
            </form>
        </>
    )
}

export default Checkout;

  