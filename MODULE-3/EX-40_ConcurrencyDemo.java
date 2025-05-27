import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.*;

public class ConcurrencyDemo {

    
    public static void runVirtualThreads() {
        System.out.println("Running 100,000 virtual threads...");

        long start = System.currentTimeMillis();

        List<Thread> threads = new ArrayList<>();

        for (int i = 0; i < 100_000; i++) {
            Thread thread = Thread.startVirtualThread(() -> {
                // Just print once (comment this out to improve speed)
                // System.out.println("Hello from virtual thread: " + Thread.currentThread());
            });
            threads.add(thread);
        }

        // Wait for all threads to finish
        for (Thread t : threads) {
            try {
                t.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }

        long end = System.currentTimeMillis();
        System.out.println("Virtual threads completed in " + (end - start) + " ms");
    }

    
