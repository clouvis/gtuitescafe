import { Selector, t} from 'testcafe';

class RadioButton {

    constructor(cssSelector){
        this.component = Selector(cssSelector);
    }
    // String contains 'false' for No 'true' for Yes
    async selectRadioButtonValue(value){

        var _this = this;
        await t.click(_this.component.find('input').withAttribute('value', value))

    }

}
export var PcfRadioButton = function(cssSelector){

    return new RadioButton(cssSelector);

}