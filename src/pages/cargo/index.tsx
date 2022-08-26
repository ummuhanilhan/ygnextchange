import PrivateLayout from "@layouts/PrivateLayout";
import { FloatLabel } from "@shared/elements/inputs";


export const Cargo = () => {

    return (
        <div>
            <FloatLabel />
            <h1 className="text-2xl">Cargo</h1>
        </div>
    )
}

Cargo.Layout = PrivateLayout;

export default Cargo;