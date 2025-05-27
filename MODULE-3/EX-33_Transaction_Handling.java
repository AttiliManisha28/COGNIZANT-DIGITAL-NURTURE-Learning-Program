import java.sql.*;

public class TransactionDemo {
    public static void transferMoney(Connection conn, int fromAccount, int toAccount, double amount) throws SQLException {
        try {
            conn.setAutoCommit(false);

            // Debit from sender
            try (PreparedStatement debitStmt = conn.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?")) {
                debitStmt.setDouble(1, amount);
                debitStmt.setInt(2, fromAccount);
                debitStmt.executeUpdate();
            }

            // Credit to receiver
            try (PreparedStatement creditStmt = conn.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?")) {
                creditStmt.setDouble(1, amount);
                creditStmt.setInt(2, toAccount);
                creditStmt.executeUpdate();
            }

            conn.commit();
            System.out.println("Transfer successful.");
        } catch (SQLException e) {
            conn.rollback();
            System.out.println("Transfer failed. Rolled back.");
            throw e;
        } finally {
            conn.setAutoCommit(true);
        }
    }

    public static void main(String[] args) throws Exception {
        String url = "jdbc:mysql://localhost:3306/bank";
        String user = "root";
        String password = "yourpassword";
        Connection conn = DriverManager.getConnection(url, user, password);

        transferMoney(conn, 1, 2, 100.0);

        conn.close();
    }
}
