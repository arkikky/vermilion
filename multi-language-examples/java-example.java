class User {
  private String name;
  private int age;

  public User(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public void greet() {
    System.out.println("Hello, my name is " + name + " and I'm " + age + " years old.");
  }
}

public class Main {
  public static void main(String[] args) {
    User user = new User("vermilion", 25);
    user.greet();
  }
}
