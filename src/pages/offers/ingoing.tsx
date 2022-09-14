import PrivateLayout from "@layouts/PrivateLayout";
import { OfferDummy } from ".";


export const OffersIngoing = () => {

    return (
        <OfferDummy actionType='ingoing' />
    )
}

OffersIngoing.Layout = PrivateLayout;

export default OffersIngoing;