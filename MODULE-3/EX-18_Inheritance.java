class Animal {
    void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Bark");
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Animal animal = new Animal();
        animal.makeSound();  // Output: Animal makes a sound

        Dog dog = new Dog();
        dog.makeSound();     // Output: Bark
    }
}
