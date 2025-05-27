import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LambdaSortDemo {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();
        fruits.add("Banana");
        fruits.add("Apple");
        fruits.add("Mango");
        fruits.add("Cherry");

        // Sort using lambda expression
        Collections.sort(fruits, (a, b) -> a.compareToIgnoreCase(b));

        System.out.println("Sorted fruits:");
        fruits.forEach(System.out::println);
    }
}
