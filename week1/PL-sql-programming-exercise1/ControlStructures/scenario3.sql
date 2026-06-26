DECLARE
    CURSOR loan_cursor IS
        SELECT loan_id, customer_id, due_date
        FROM loans
        WHERE due_date BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN
    FOR loan IN loan_cursor LOOP
        
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ID ' || loan.loan_id ||
            ' for Customer ' || loan.customer_id ||
            ' is due on ' || loan.due_date
        );

    END LOOP;

END;
/