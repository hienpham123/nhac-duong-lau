import React from "react";

const PaymentQRCode = ({
    bankCode = 970422,
    accountNumber = 2023032003,
    accountName = "PHAM THE HIEN",
    amount = 10000,
    addInfo = "test",
    templateID = 'tEEZ6yB'
}) => {
    const qrUrl = `https://img.vietqr.io/image/${bankCode}-${accountNumber}-${templateID}.jpg?accountName=${encodeURIComponent(
        accountName
    )}&amount=${amount}&addInfo=${encodeURIComponent(addInfo)}`;

    return (
        <div className='mx-auto w-3/4 h-3/4 lg:w-1/2 lg:h-1/2 mt-10'>
            <img src={qrUrl} />
        </div>
    );
};

export default PaymentQRCode;
