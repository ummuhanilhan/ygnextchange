import PrivateLayout from "@layouts/PrivateLayout";
import { OfferDummy } from ".";


export const OffersOutgoing = () => {

    return (
        <OfferDummy actionType='outgoing' />
    )
}

OffersOutgoing.Layout = PrivateLayout;

export default OffersOutgoing;