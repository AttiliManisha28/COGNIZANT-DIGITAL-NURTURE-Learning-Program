public static void runExecutorServiceWithCallables() {
        System.out.println("\nRunning Callable tasks with ExecutorService...");

        ExecutorService executor = Executors.newFixedThreadPool(5);

        List<Callable<String>> tasks = new ArrayList<>();

        for (int i = 1; i <= 10; i++) {
            int taskId = i;
            tasks.add(() -> {
                Thread.sleep(500); // Simulate work
                return "Result from task " + taskId;
            });
        }

        try {
            List<Future<String>> results = executor.invokeAll(tasks);

            for (Future<String> result : results) {
                System.out.println(result.get());
            }
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        } finally {
            executor.shutdown();
        }
    }

    public static void main(String[] args) {
        runVirtualThreads();
        runExecutorServiceWithCallables();
    }
}
