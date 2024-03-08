'use client'
import imgCaret from '../_assets/images/CaretDown.png'

import Image from "next/image";
import { BoxMoreDetails, MoreDetailsContainer } from "./PackageCardMoreDetails.style";

const PackageCardMoreDetails: React.FC=()=>{
    return(
        <MoreDetailsContainer>

            <BoxMoreDetails>
                Plus de détails
            </BoxMoreDetails>
            <Image
                src={imgCaret}
                alt='CaretDown'
                width={20}
                height={20}
            />
        </MoreDetailsContainer>

    )
} 
export default PackageCardMoreDetails