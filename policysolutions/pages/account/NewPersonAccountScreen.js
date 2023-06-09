'use strict';
import {Selector, t} from 'testcafe';
import { PcfComponent, PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';


export class NewPersonAccountScreen {
    constructor() {
        this.addressLine1 = PcfTextInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1");
        this.city = PcfTextInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City");
        this.addressType = PcfSelectInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressType");
        this.producer = PcfTextInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-Producer");
        this.producerCode = PcfComponent("#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-ProducerCode");
        this.updateButton = PcfButton("#CreateAccount-CreateAccountScreen-Update");
    }

    async selectProducerCode(valueToSelect) {
        await t.click(this.producerCode.component);
		await t.click(this.producerCode.component.find('option').withText(valueToSelect));
    }

}