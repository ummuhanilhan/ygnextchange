import PrivateLayout from "@layouts/PrivateLayout";
import { OfferDummy } from ".";


export const OffersOutgoing = () => {

    return (
        <OfferDummy type='outgoing' />
    )
}

OffersOutgoing.Layout = PrivateLayout;

export default OffersOutgoing;