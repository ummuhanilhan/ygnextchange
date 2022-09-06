import { CargoFilter } from "@components/cargo/filter";
import PrivateLayout from "@layouts/PrivateLayout";
import { FloatingLabelInput } from "@shared/elements/inputs";


export const Cargo = () => {

    return (
        <CargoFilter />
    )
}

Cargo.Layout = PrivateLayout;

export default Cargo;