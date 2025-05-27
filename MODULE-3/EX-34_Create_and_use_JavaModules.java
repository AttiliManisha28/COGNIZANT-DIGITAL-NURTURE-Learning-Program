// Simulating com.utils module
package com.utils;

public class Utils {
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
}

// Simulating com.greetings module (depends on com.utils)
package com.greetings;

import com.utils.Utils;

public class GreetingApp {
    public static void main(String[] args) {
        Utils.greet("World");
    }
}
