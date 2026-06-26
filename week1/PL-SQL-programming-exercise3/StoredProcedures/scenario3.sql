CREATE OR REPLACE PROCEDURE TransferFunds (
    from_acc IN NUMBER,
    to_acc IN NUMBER,
    amount IN NUMBER
) IS
    current_balance NUMBER;
BEGIN
    -- Get balance
    SELECT balance INTO current_balance
    FROM accounts
    WHERE account_id = from_acc;

    -- Check sufficient balance
    IF current_balance >= amount THEN

        -- Deduct from source
        UPDATE accounts
        SET balance = balance - amount
        WHERE account_id = from_acc;

        -- Add to destination
        UPDATE accounts
        SET balance = balance + amount
        WHERE account_id = to_acc;

        DBMS_OUTPUT.PUT_LINE('Transfer successful');

    ELSE
        DBMS_OUTPUT.PUT_LINE('Insufficient balance');
    END IF;

    COMMIT;
END;
/