'use client';
import { CardHeaderContainer, OfferName, Price, Title, Subtitle, NumericalValue ,Currency } from "./PackageCardHeader.style";
import { IPackageCardHeaderProps } from "../../../_assets/variables/types";

const PackageCardHeader:React.FC<IPackageCardHeaderProps>=({headerTitle, headerSub, price})=>{
    return(
        <CardHeaderContainer>
            <OfferName>
                <Title>
                    {headerTitle} 
                </Title>
                <Subtitle>
                    {headerSub}
                </Subtitle>

            </OfferName>
            <Price>
                <NumericalValue >
                    {price}*
                </NumericalValue>
                <Currency>
                    dh TTC/mois
                </Currency>

            </Price>

        </CardHeaderContainer>
    )
}
export default PackageCardHeader