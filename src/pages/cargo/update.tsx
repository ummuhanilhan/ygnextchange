import CargoCreate from "@components/cargo/form";
import PrivateLayout from "@layouts/PrivateLayout";
import { defaultItem, initial } from "@utils/mock";

export const CargoUpdatePage = () => {

    return (
        <div>
            <CargoCreate uptodate init={{
                ...initial,
                ...defaultItem,              
            }} />
        </div>
    )
}

CargoUpdatePage.Layout = PrivateLayout;

export default CargoUpdatePage;