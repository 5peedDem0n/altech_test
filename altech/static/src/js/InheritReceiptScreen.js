odoo.define('altech.InheritReceiptScreen', function(require) {
    'use strict';

    const ReceiptScreen = require('point_of_sale.ReceiptScreen');
    const Registries = require('point_of_sale.Registries');

    const InheritReceiptScreen = (ReceiptScreen) => {

        class InheritReceiptScreen extends ReceiptScreen {
            mounted() {
                // Ensure the receipt is printed, then automatically send the email
                setTimeout(async () => {
                    await this.handleAutoPrint();  // Print the receipt
                    await this.onSendEmail();  // Send the email automatically
                }, 0);
            }
            
        }

        return InheritReceiptScreen;
    }
    

    Registries.Component.addByExtending(InheritReceiptScreen, ReceiptScreen);

    return InheritReceiptScreen;
});
