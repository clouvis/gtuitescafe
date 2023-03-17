'use strict';
import { NewSubmission } from "./NewSubmission";
import { t } from "testcafe";

const newSubmission = new NewSubmission();
export class ProductSelection{

    async selectLOB(lob){
        let productLabel = newSubmission.newSubmissionScreen.component.find('td[id$=-Name_Cell]').withExactText(lob);
        let productSelection = productLabel.prevSibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]'); 
        await t.click(productSelection);
    }
}