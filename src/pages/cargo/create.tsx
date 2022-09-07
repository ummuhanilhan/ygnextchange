import CargoCreate from "@components/cargo/form";
import PrivateLayout from "@layouts/PrivateLayout";


export const CargoCreatePage = () => {

    return (
        <div>
            <CargoCreate />
        </div>
    )
}

CargoCreatePage.Layout = PrivateLayout;

export default CargoCreatePage;