import java.util.HashMap;
import java.util.Scanner;

public class StudentMapDemo {
    public static void main(String[] args) {
        HashMap<Integer, String> studentMap = new HashMap<>();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Add student ID and name pairs (type 'done' to stop):");

        while (true) {
            System.out.print("Enter student ID (integer): ");
            String idInput = scanner.nextLine();
            if (idInput.equalsIgnoreCase("done")) {
                break;
            }
            try {
                int id = Integer.parseInt(idInput);
                System.out.print("Enter student name: ");
                String name = scanner.nextLine();
                studentMap.put(id, name);
            } catch (NumberFormatException e) {
                System.out.println("Invalid ID. Please enter an integer.");
            }
        }

        System.out.print("Enter student ID to retrieve name: ");
        int searchId = scanner.nextInt();

        String studentName = studentMap.get(searchId);
        if (studentName != null) {
            System.out.println("Student name: " + studentName);
        } else {
            System.out.println("No student found with ID " + searchId);
        }

        scanner.close();
    }
}
