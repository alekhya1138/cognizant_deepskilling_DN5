DECLARE
    CURSOR cust_cursor IS
        SELECT customer_id, age, interest_rate
        FROM customers;

BEGIN
    FOR cust IN cust_cursor LOOP
        
        IF cust.age > 60 THEN
            UPDATE customers
            SET interest_rate = interest_rate - 1
            WHERE customer_id = cust.customer_id;

            DBMS_OUTPUT.PUT_LINE('Discount applied to Customer ID: ' || cust.customer_id);
        END IF;

    END LOOP;

    COMMIT;
END;
/