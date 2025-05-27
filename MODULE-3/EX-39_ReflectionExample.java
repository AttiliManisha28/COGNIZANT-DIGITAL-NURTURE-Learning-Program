import java.lang.reflect.Method;
import java.lang.reflect.Parameter;

class Sample {
    public void greet() {
        System.out.println("Hello from greet method!");
    }

    public int add(int a, int b) {
        return a + b;
    }
}

public class ReflectionExample {
    public static void main(String[] args) {
        try {
            // Load the class dynamically
            Class<?> clazz = Class.forName("Sample");

            // Create an instance of the loaded class
            Object obj = clazz.getDeclaredConstructor().newInstance();

            // Get all declared methods
            Method[] methods = clazz.getDeclaredMethods();

            for (Method method : methods) {
                System.out.println("\nMethod Name: " + method.getName());

                // Print parameters
                Parameter[] parameters = method.getParameters();
                System.out.print("Parameters: ");
                if (parameters.length == 0) {
                    System.out.print("None");
                } else {
                    for (Parameter param : parameters) {
                        System.out.print(param.getType().getSimpleName() + " " + param.getName() + " ");
                    }
                }
                System.out.println();

                
                if (method.getParameterCount() == 0) {
                    method.invoke(obj);
                } else if (method.getParameterCount() == 2) {
                    Object result = method.invoke(obj, 5, 10); 
                    System.out.println("Invocation Result: " + result);
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
