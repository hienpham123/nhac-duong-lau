import React from "react";

const PaymentQRCode = ({
    bankCode = 970422,
    accountNumber = 2023032003,
    accountName = "PHAM THE HIEN",
    amount = 10000,
    addInfo = "test",
}) => {
    const qrUrl = `https://img.vietqr.io/image/${bankCode}-${accountNumber}-tEEZ6yB.jpg?accountName=${encodeURIComponent(
        accountName
    )}&amount=${amount}&addInfo=${encodeURIComponent(addInfo)}`;

    return (
        <div>
            <img src={qrUrl} />
        </div>
    );
};

export default PaymentQRCode;
