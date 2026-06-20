public class Main {
    public static void main(String[] args) {

        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Phone", "Electronics"),
            new Product(3, "Shoes", "Fashion"),
            new Product(4, "Watch", "Accessories"),
            new Product(5, "Bag", "Fashion")
        };

        // Linear Search
        Product result1 = LinearSearch.search(products, 3);
        if (result1 != null)
            System.out.println("Linear Search Found: " + result1.productName);

        // Binary Search (array must be sorted by productId)
        Product result2 = BinarySearch.search(products, 3);
        if (result2 != null)
            System.out.println("Binary Search Found: " + result2.productName);
    }
}