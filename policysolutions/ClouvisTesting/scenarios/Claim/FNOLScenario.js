'use strict';
import { PersonalAutoScenario } from "../Policy/PersonalAutoScenario";
import { HomeCreationScenario } from "../PolicyCreation/HomeCreationScenario";
import { HOClaimScenario } from "./HOClaimScenario";
import { PAClaimScenario } from "./PAClaimScenario";

const homeCreationScenario = new HomeCreationScenario();
const personalAutoScenario = new PersonalAutoScenario();
const pAClaimScenario = new PAClaimScenario();
const hOClaimScenario = new HOClaimScenario();

export class FNOLScenario{

    async creatingClaim(LOB){    
        switch (LOB) {
            case "Homeowners":
                await hOClaimScenario.createHOClaim();
                break;
            case "Personal Auto":
                await pAClaimScenario.createPAClaim();
                break;
            default:
        }
    }

    async creatingPolicy(LOB){
        switch(LOB){
            case "Homeowners":
                await homeCreationScenario.createHomePolicy();
                break;
            case "Personal Auto":
                await personalAutoScenario.createPersonalAuto();
                break;
    
            default:
        }
    }

    async verifyClaimIsCreated(){
        
    }
}