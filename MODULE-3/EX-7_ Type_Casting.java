public class TypeCastingExample {
    public static void main(String[] args) {
        double myDouble = 9.99;
        int castedInt = (int) myDouble;  // double to int, decimal truncated

        System.out.println("Original double: " + myDouble);
        System.out.println("Casted to int: " + castedInt);

        int myInt = 7;
        double castedDouble = (double) myInt;  // int to double

        System.out.println("Original int: " + myInt);
        System.out.println("Casted to double: " + castedDouble);
    }
}
