import CargoCreate from "@components/cargo/form";
import PrivateLayout from "@layouts/PrivateLayout";
import { defaultItem, initial } from "@utils/mock";

export const CargoCreatePage = () => {

    return (
        <div>
            <CargoCreate uptodate init={{
                ...initial,
                ...defaultItem,              
            }} />
        </div>
    )
}

CargoCreatePage.Layout = PrivateLayout;

export default CargoCreatePage;