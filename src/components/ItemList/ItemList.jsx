import 'bootstrap/dist/css/bootstrap.min.css';
import { memo } from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return (
        <div className="row">
            {products.map((prod) => (
                <div key={prod.id} className="col-md-4 mb-3">
                    <Item {...prod} />
                </div>
            ))}
        </div>
    );
};

export default memo(ItemList);
