import CargoCreate from "@components/cargo/form";
import PrivateLayout from "@layouts/PrivateLayout";


export const CargoUpdatePage = () => {

    return (
        <div>
            <CargoCreate update />
        </div>
    )
}

CargoUpdatePage.Layout = PrivateLayout;

export default CargoUpdatePage;