import java.io.*;
import java.net.*;
import java.util.Scanner;

public class TcpChat {

    // Server thread
    static class Server extends Thread {
        private ServerSocket serverSocket;

        public Server(int port) throws IOException {
            serverSocket = new ServerSocket(port);
        }

        public void run() {
            System.out.println("Server started, waiting for client...");
            try (Socket clientSocket = serverSocket.accept();
                 BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
                 PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true)) {

                System.out.println("Client connected.");

                Scanner scanner = new Scanner(System.in);
                Thread sendThread = new Thread(() -> {
                    while (true) {
                        String msgToSend = scanner.nextLine();
                        out.println(msgToSend);
                        if (msgToSend.equalsIgnoreCase("bye")) {
                            break;
                        }
                    }
                });
                sendThread.start();

                String receivedMsg;
                while ((receivedMsg = in.readLine()) != null) {
                    System.out.println("Client: " + receivedMsg);
                    if (receivedMsg.equalsIgnoreCase("bye")) {
                        break;
                    }
                }

                sendThread.join();
                System.out.println("Server shutting down.");

            } catch (IOException | InterruptedException e) {
                e.printStackTrace();
            } finally {
                try {
                    serverSocket.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    // Client thread
    static class Client extends Thread {
        private String host;
        private int port;

        public Client(String host, int port) {
            this.host = host;
            this.port = port;
        }

        public void run() {
            try (Socket socket = new Socket(host, port);
                 BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                 PrintWriter out = new PrintWriter(socket.getOutputStream(), true)) {

                System.out.println("Connected to server.");

                Scanner scanner = new Scanner(System.in);
                Thread sendThread = new Thread(() -> {
                    while (true) {
                        String msgToSend = scanner.nextLine();
                        out.println(msgToSend);
                        if (msgToSend.equalsIgnoreCase("bye")) {
                            break;
                        }
                    }
                });
                sendThread.start();

                String receivedMsg;
                while ((receivedMsg = in.readLine()) != null) {
                    System.out.println("Server: " + receivedMsg);
                    if (receivedMsg.equalsIgnoreCase("bye")) {
                        break;
                    }
                }

                sendThread.join();
                System.out.println("Client shutting down.");

            } catch (IOException | InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) throws IOException, InterruptedException {
        int port = 12345;

        Server server = new Server(port);
        server.start();

        // Small delay so server starts before client tries to connect
        Thread.sleep(1000);

        Client client = new Client("localhost", port);
        client.start();

        // Wait for both threads to finish
        server.join();
        client.join();

        System.out.println("Chat session ended.");
    }
}
