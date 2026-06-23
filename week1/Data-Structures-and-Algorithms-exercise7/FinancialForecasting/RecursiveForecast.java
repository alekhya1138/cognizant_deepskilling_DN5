class RecursiveForecast {

    // Recursive method to calculate future value
    public static double predictFutureValue(double presentValue, double growthRate, int years) {

        // Base Case
        if (years == 0) {
            return presentValue;
        }

        // Recursive Case
        return (1 + growthRate) * predictFutureValue(presentValue, growthRate, years - 1);
    }
}