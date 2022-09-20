import { CargoFilter } from "@components/cargo/filter";
import PrivateLayout from "@layouts/PrivateLayout";
 

export const Cargo = () => {

    return (
        <CargoFilter />
    )
}

Cargo.Layout = PrivateLayout;

export default Cargo;