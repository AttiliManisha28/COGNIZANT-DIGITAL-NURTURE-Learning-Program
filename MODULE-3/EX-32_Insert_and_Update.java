import java.sql.*;

public class StudentDAO {
    private Connection conn;

    public StudentDAO(Connection conn) {
        this.conn = conn;
    }

    public void insertStudent(String name, int age) throws SQLException {
        String sql = "INSERT INTO students (name, age) VALUES (?, ?)";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, name);
            ps.setInt(2, age);
            ps.executeUpdate();
        }
    }

    public void updateStudentAge(int id, int newAge) throws SQLException {
        String sql = "UPDATE students SET age = ? WHERE id = ?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, newAge);
            ps.setInt(2, id);
            ps.executeUpdate();
        }
    }

    public static void main(String[] args) throws Exception {
        String url = "jdbc:mysql://localhost:3306/school";
        String user = "root";
        String password = "yourpassword";
        Connection conn = DriverManager.getConnection(url, user, password);

        StudentDAO dao = new StudentDAO(conn);

        dao.insertStudent("Charlie", 23);
        dao.updateStudentAge(1, 21);

        conn.close();
    }
}
