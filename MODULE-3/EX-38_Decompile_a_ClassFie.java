public class DecompileExample {

    private String name;

    public DecompileExample(String name) {
        this.name = name;
    }

    public void greet() {
        System.out.println("Welcome to " + name + " programming!");
    }

    public static void main(String[] args) {
        DecompileExample example = new DecompileExample("Java");
        example.greet();
    }
}
