public class BytecodeExample {

    public int add(int a, int b) {
        int result = a + b;
        return result;
    }

    public static void main(String[] args) {
        BytecodeExample example = new BytecodeExample();
        int sum = example.add(5, 7);
        System.out.println("Sum: " + sum);
    }
}
