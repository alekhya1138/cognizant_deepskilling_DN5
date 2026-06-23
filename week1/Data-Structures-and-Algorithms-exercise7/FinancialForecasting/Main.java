public class Main {

    public static void main(String[] args) {

        double presentValue = 1000;
        double growthRate = 0.10; // 10%
        int years = 3;

        double futureValue = RecursiveForecast.predictFutureValue(presentValue, growthRate, years);

        System.out.println("Predicted Future Value: " + futureValue);
    }
}