exports.CommByPhone = class CommByPhone {
    constructor(page) {
        this.page = page;
        this.radioButtonWithPeriodTime = '#another-time-checkbox';
    };
    async checkStatusRadioButtonWithTimeInterval() {
        const radioButtonWithPeriodTime = await this.page.waitForSelector(this.radioButtonWithPeriodTime);
        await radioButtonWithPeriodTime.setChecked(true);
        return await radioButtonWithPeriodTime.isChecked();
    };

};
