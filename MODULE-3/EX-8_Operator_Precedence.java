public class OperatorPrecedence {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2;  // Multiplication first: 5*2=10, then 10+10=20
        int result2 = (10 + 5) * 2; // Parentheses first: 15*2=30
        int result3 = 100 / 5 + 3 * 2; // Division and multiplication first: 100/5=20, 3*2=6, then 20+6=26

        System.out.println("Result of 10 + 5 * 2 = " + result1);
        System.out.println("Result of (10 + 5) * 2 = " + result2);
        System.out.println("Result of 100 / 5 + 3 * 2 = " + result3);

        System.out.println("\nExplanation:");
        System.out.println("- Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).");
        System.out.println("- Parentheses () override precedence and force evaluation first.");
    }
}
